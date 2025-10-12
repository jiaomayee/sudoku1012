from fastapi import APIRouter, HTTPException, Depends, Query
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Dict, Any, List, Optional
import logging
import json
from datetime import datetime, timedelta

# 创建路由
router = APIRouter()
logger = logging.getLogger(__name__)

# 导入数据库操作和依赖
from database.database import execute_query, row_to_dict, get_current_time
from routes.user_routes import get_current_user

@router.get("/user/{user_id}", response_model=Dict[str, Any])
async def get_user_statistics(
    user_id: str,
    # 可选的时间范围过滤
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    # 需要验证当前用户是否为数据所有者
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    获取用户统计数据
    
    - **user_id**: 用户ID
    - **start_date**: 开始日期（可选）
    - **end_date**: 结束日期（可选）
    """
    try:
        # 验证权限（用户只能查看自己的统计数据）
        if current_user["id"] != user_id:
            raise HTTPException(status_code=403, detail="无权访问该用户的统计数据")
        
        # 获取基本统计数据
        user_stats = await execute_query(
            "SELECT * FROM user_stats WHERE user_id = ?",
            (user_id,),
            fetch_one=True
        )
        
        if not user_stats:
            raise HTTPException(status_code=404, detail="用户统计数据不存在")
        
        stats_dict = row_to_dict(user_stats)
        
        # 构建游戏查询（带日期过滤）
        game_query = "SELECT * FROM game_progress WHERE user_id = ?"
        params = [user_id]
        
        if start_date:
            game_query += " AND start_time >= ?"
            params.append(start_date)
        if end_date:
            game_query += " AND start_time <= ?"
            params.append(end_date)
        
        # 获取游戏记录
        games = await execute_query(game_query, params, fetch_all=True)
        
        # 计算额外统计数据
        total_completed = 0
        total_time_spent = 0
        difficulty_stats = {"easy": 0, "medium": 0, "hard": 0, "expert": 0}
        completion_times = []
        
        for game in games:
            game_dict = row_to_dict(game)
            # 统计难度分布
            if game_dict["difficulty"] in difficulty_stats:
                difficulty_stats[game_dict["difficulty"]] += 1
            
            # 统计完成的游戏
            if game_dict.get("completed") or game_dict.get("status") == "completed":
                total_completed += 1
                if game_dict.get("completion_time"):
                    total_time_spent += game_dict["completion_time"]
                    completion_times.append(game_dict["completion_time"])
        
        # 计算平均完成时间
        avg_completion_time = sum(completion_times) / len(completion_times) if completion_times else 0
        
        # 计算胜率
        win_rate = (total_completed / len(games) * 100) if games else 0
        
        # 构建最终响应
        response = {
            "user_id": user_id,
            "basic_stats": stats_dict,
            "detailed_stats": {
                "total_games_played": len(games),
                "completed_games": total_completed,
                "win_rate": round(win_rate, 2),
                "average_completion_time": round(avg_completion_time, 2),
                "total_time_spent": total_time_spent,
                "difficulty_distribution": difficulty_stats
            },
            "time_range": {
                "start_date": start_date,
                "end_date": end_date,
                "games_in_range": len(games)
            }
        }
        
        return response
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取用户统计数据失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取用户统计数据失败")

@router.get("/user/{user_id}/history", response_model=List[Dict[str, Any]])
async def get_game_history(
    user_id: str,
    limit: int = Query(20, ge=1, le=100),
    offset: int = Query(0, ge=0),
    difficulty: Optional[str] = Query(None, regex="^(easy|medium|hard|expert)$"),
    status: Optional[str] = Query(None, regex="^(in-progress|completed)$"),
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    获取游戏历史记录
    
    - **user_id**: 用户ID
    - **limit**: 返回记录数量限制
    - **offset**: 偏移量
    - **difficulty**: 难度过滤（可选）
    - **status**: 状态过滤（可选）
    """
    try:
        # 验证权限
        if current_user["id"] != user_id:
            raise HTTPException(status_code=403, detail="无权访问该用户的历史记录")
        
        # 构建查询
        query = "SELECT * FROM game_progress WHERE user_id = ?"
        params = [user_id]
        
        if difficulty:
            query += " AND difficulty = ?"
            params.append(difficulty)
        
        if status:
            query += " AND status = ?"
            params.append(status)
        
        query += " ORDER BY last_updated DESC LIMIT ? OFFSET ?"
        params.extend([limit, offset])
        
        # 执行查询
        results = await execute_query(query, params, fetch_all=True)
        
        # 转换结果
        history = []
        for row in results:
            game_dict = row_to_dict(row)
            # 解析JSON字段
            game_dict["puzzle_state"] = json.loads(game_dict["puzzle_state"])
            if game_dict.get("solution"):
                game_dict["solution"] = json.loads(game_dict["solution"])
            
            # 计算游戏时长
            if game_dict.get("start_time") and game_dict.get("last_updated"):
                start = datetime.fromisoformat(game_dict["start_time"].replace("Z", "+00:00"))
                end = datetime.fromisoformat(game_dict["last_updated"].replace("Z", "+00:00"))
                game_dict["duration_seconds"] = int((end - start).total_seconds())
            
            history.append(game_dict)
        
        return history
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取游戏历史记录失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取游戏历史记录失败")

@router.get("/user/{user_id}/achievements", response_model=Dict[str, Any])
async def get_user_achievements(
    user_id: str,
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    获取用户成就
    
    - **user_id**: 用户ID
    """
    try:
        # 验证权限
        if current_user["id"] != user_id:
            raise HTTPException(status_code=403, detail="无权访问该用户的成就")
        
        # 获取用户统计数据
        stats = await execute_query(
            "SELECT * FROM user_stats WHERE user_id = ?",
            (user_id,),
            fetch_one=True
        )
        
        if not stats:
            raise HTTPException(status_code=404, detail="用户统计数据不存在")
        
        stats_dict = row_to_dict(stats)
        
        # 获取最近的游戏记录
        recent_games = await execute_query(
            "SELECT * FROM game_progress WHERE user_id = ? ORDER BY last_updated DESC LIMIT 10",
            (user_id,),
            fetch_all=True
        )
        
        # 计算成就
        achievements = {
            "completed": [],
            "in_progress": []
        }
        
        # 检查已完成的成就
        if stats_dict["total_games"] >= 10:
            achievements["completed"].append({
                "id": "first_10_games",
                "title": "初露锋芒",
                "description": "完成10局数独游戏",
                "achieved_at": get_current_time()
            })
        
        if stats_dict["total_games"] >= 50:
            achievements["completed"].append({
                "id": "sudoku_enthusiast",
                "title": "数独爱好者",
                "description": "完成50局数独游戏",
                "achieved_at": get_current_time()
            })
        
        if stats_dict["total_games"] >= 100:
            achievements["completed"].append({
                "id": "sudoku_master",
                "title": "数独大师",
                "description": "完成100局数独游戏",
                "achieved_at": get_current_time()
            })
        
        if stats_dict["completed_games"] >= 10:
            achievements["completed"].append({
                "id": "winner_10",
                "title": "常胜将军",
                "description": "成功完成10局数独游戏",
                "achieved_at": get_current_time()
            })
        
        if stats_dict["best_time"] < 300:  # 5分钟内
            achievements["completed"].append({
                "id": "speed_demon",
                "title": "速度恶魔",
                "description": "5分钟内完成一局数独",
                "achieved_at": get_current_time()
            })
        
        if stats_dict["current_streak"] >= 7:
            achievements["completed"].append({
                "id": "week_streak",
                "title": "坚持不懈",
                "description": "连续7天玩数独",
                "achieved_at": get_current_time()
            })
        
        if stats_dict["current_streak"] >= 30:
            achievements["completed"].append({
                "id": "month_streak",
                "title": "数独达人",
                "description": "连续30天玩数独",
                "achieved_at": get_current_time()
            })
        
        # 检查进行中的成就
        hard_games = [g for g in recent_games if row_to_dict(g).get("difficulty") == "hard"]
        expert_games = [g for g in recent_games if row_to_dict(g).get("difficulty") == "expert"]
        
        if stats_dict["total_games"] >= 5 and stats_dict["total_games"] < 10:
            achievements["in_progress"].append({
                "id": "first_10_games",
                "title": "初露锋芒",
                "description": "完成10局数独游戏",
                "progress": stats_dict["total_games"] / 10
            })
        
        if len(hard_games) < 5:
            achievements["in_progress"].append({
                "id": "hard_challenge",
                "title": "挑战高难度",
                "description": "完成5局困难级别的数独",
                "progress": len(hard_games) / 5
            })
        
        if len(expert_games) < 3:
            achievements["in_progress"].append({
                "id": "expert_challenge",
                "title": "专家级挑战",
                "description": "完成3局专家级别的数独",
                "progress": len(expert_games) / 3
            })
        
        return {
            "user_id": user_id,
            "achievements": achievements,
            "total_completed": len(achievements["completed"]),
            "total_available": len(achievements["completed"]) + len(achievements["in_progress"])
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取用户成就失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取用户成就失败")

@router.get("/user/{user_id}/streaks", response_model=Dict[str, Any])
async def get_streak_info(
    user_id: str,
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    获取用户连续游戏信息
    
    - **user_id**: 用户ID
    """
    try:
        # 验证权限
        if current_user["id"] != user_id:
            raise HTTPException(status_code=403, detail="无权访问该用户的连续游戏信息")
        
        # 获取用户统计数据
        stats = await execute_query(
            "SELECT * FROM user_stats WHERE user_id = ?",
            (user_id,),
            fetch_one=True
        )
        
        if not stats:
            raise HTTPException(status_code=404, detail="用户统计数据不存在")
        
        stats_dict = row_to_dict(stats)
        
        # 获取最近30天的游戏记录
        thirty_days_ago = (datetime.utcnow() - timedelta(days=30)).isoformat() + "Z"
        recent_games = await execute_query(
            """
            SELECT DISTINCT DATE(start_time) as play_date 
            FROM game_progress 
            WHERE user_id = ? AND start_time >= ?
            ORDER BY play_date DESC
            """,
            (user_id, thirty_days_ago),
            fetch_all=True
        )
        
        # 计算最近的连续天数
        play_dates = [datetime.fromisoformat(row["play_date"]).date() for row in recent_games]
        current_date = datetime.utcnow().date()
        
        # 检查今天是否已玩
        today_played = current_date in play_dates
        
        # 计算连续天数
        recent_streak = 0
        for i, date in enumerate(play_dates):
            expected_date = current_date - timedelta(days=i if not today_played and i > 0 else i)
            if date == expected_date:
                recent_streak += 1
            else:
                break
        
        # 构建响应
        return {
            "user_id": user_id,
            "current_streak": stats_dict["current_streak"],
            "longest_streak": stats_dict["longest_streak"],
            "recent_streak": recent_streak,
            "today_played": today_played,
            "play_dates_last_30_days": [d.isoformat() for d in play_dates],
            "days_played_last_30_days": len(play_dates)
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取连续游戏信息失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取连续游戏信息失败")

@router.get("/summary/{user_id}", response_model=Dict[str, Any])
async def get_statistics_summary(
    user_id: str,
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    获取统计数据摘要
    
    - **user_id**: 用户ID
    """
    try:
        # 验证权限
        if current_user["id"] != user_id:
            raise HTTPException(status_code=403, detail="无权访问该用户的统计摘要")
        
        # 获取用户统计数据
        stats = await execute_query(
            "SELECT * FROM user_stats WHERE user_id = ?",
            (user_id,),
            fetch_one=True
        )
        
        if not stats:
            raise HTTPException(status_code=404, detail="用户统计数据不存在")
        
        stats_dict = row_to_dict(stats)
        
        # 获取最近的游戏记录
        recent_games = await execute_query(
            "SELECT * FROM game_progress WHERE user_id = ? ORDER BY last_updated DESC LIMIT 5",
            (user_id,),
            fetch_all=True
        )
        
        # 计算难度分布
        difficulty_query = """
        SELECT difficulty, COUNT(*) as count 
        FROM game_progress 
        WHERE user_id = ? 
        GROUP BY difficulty
        """
        difficulty_stats = await execute_query(difficulty_query, (user_id,), fetch_all=True)
        
        difficulty_dist = {}
        for row in difficulty_stats:
            difficulty_dist[row["difficulty"]] = row["count"]
        
        # 构建最近游戏信息
        recent_game_info = []
        for game in recent_games:
            game_dict = row_to_dict(game)
            recent_game_info.append({
                "id": game_dict["id"],
                "difficulty": game_dict["difficulty"],
                "status": game_dict["status"],
                "last_updated": game_dict["last_updated"],
                "filled_cells": game_dict.get("filled_cells", 0),
                "completion_time": game_dict.get("completion_time")
            })
        
        # 计算胜率
        win_rate = (stats_dict["completed_games"] / stats_dict["total_games"] * 100) if stats_dict["total_games"] > 0 else 0
        
        # 构建摘要
        summary = {
            "user_id": user_id,
            "total_games": stats_dict["total_games"],
            "completed_games": stats_dict["completed_games"],
            "win_rate": round(win_rate, 2),
            "best_time": stats_dict["best_time"],
            "current_streak": stats_dict["current_streak"],
            "longest_streak": stats_dict["longest_streak"],
            "favorite_difficulty": stats_dict["favorite_difficulty"],
            "difficulty_distribution": difficulty_dist,
            "recent_games": recent_game_info,
            "last_played": stats_dict["last_played"]
        }
        
        return summary
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取统计摘要失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取统计摘要失败")