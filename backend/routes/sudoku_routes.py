from fastapi import APIRouter, HTTPException, Query, Path
import json
import logging
import sqlite3
import os
from typing import List, Dict, Any, Optional
import numpy as np

# 题库数据库路径
PUZZLE_DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "date", "sudoku_date.db")

# 创建路由
router = APIRouter()
logger = logging.getLogger(__name__)

# 导入数独逻辑和数据库操作
from utils.sudoku_logic import (
    generate_sudoku_puzzle, 
    solve_sudoku, 
    validate_sudoku, 
    get_possible_numbers,
    check_puzzle_completion,
    rate_difficulty,
    apply_sudoku_technique
)
from database.database import execute_query, row_to_dict, get_current_time
import utils.common as common_utils

@router.post("/generate", response_model=Dict[str, Any])
async def generate_sudoku(
    difficulty: str = Query("medium", regex="^(easy|medium|hard|expert)$")
):
    """
    生成新的数独谜题
    
    - **difficulty**: 难度级别 (easy, medium, hard, expert)
    """
    try:
        # 生成数独谜题
        puzzle, solution = generate_sudoku_puzzle(difficulty)
        puzzle_id = common_utils.generate_unique_id()
        
        # 将puzzle和solution转换为字符串格式存储
        puzzle_str = json.dumps(puzzle)
        solution_str = json.dumps(solution)
        current_time = get_current_time()
        
        # 存储到数据库（可选）
        await execute_query(
            """
            INSERT OR IGNORE INTO sudoku_puzzles 
            (id, difficulty, puzzle, solution, created_at) 
            VALUES (?, ?, ?, ?, ?)
            """,
            (puzzle_id, difficulty, puzzle_str, solution_str, current_time)
        )
        
        # 返回数独谜题和ID
        return {
            "puzzle_id": puzzle_id,
            "difficulty": difficulty,
            "puzzle": puzzle,
            "created_at": current_time
        }
    except Exception as e:
        logger.error(f"生成数独谜题失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="生成数独谜题失败")

@router.post("/solve", response_model=Dict[str, Any])
async def solve_sudoku_puzzle(
    puzzle: List[List[int]]
):
    """
    求解数独谜题
    
    - **puzzle**: 数独谜题的二维数组，0表示空格
    """
    try:
        # 验证输入格式
        if not isinstance(puzzle, list) or len(puzzle) != 9:
            raise HTTPException(status_code=400, detail="无效的数独谜题格式")
        
        # 求解数独
        solution = solve_sudoku(puzzle)
        
        if solution is None:
            raise HTTPException(status_code=400, detail="该数独谜题无解")
        
        return {
            "solution": solution,
            "success": True
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"求解数独谜题失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="求解数独谜题失败")

@router.post("/validate", response_model=Dict[str, Any])
async def validate_sudoku_puzzle(
    puzzle: List[List[int]],
    solution: Optional[List[List[int]]] = None
):
    """
    验证数独谜题是否有效
    
    - **puzzle**: 要验证的数独谜题
    - **solution**: 可选的解决方案用于验证
    """
    try:
        # 检查格式
        if not isinstance(puzzle, list) or len(puzzle) != 9:
            return {"valid": False, "errors": ["无效的数独谜题格式"]}
        
        # 验证数独规则
        valid, errors = validate_sudoku(puzzle)
        
        result = {
            "valid": valid,
            "errors": errors,
            "completed": check_puzzle_completion(puzzle) if valid else False
        }
        
        # 如果提供了解决方案，验证谜题是否与解决方案匹配
        if solution and valid:
            # 检查谜题中的非零数字是否与解决方案匹配
            for i in range(9):
                for j in range(9):
                    if puzzle[i][j] != 0 and puzzle[i][j] != solution[i][j]:
                        result["valid"] = False
                        result["errors"].append(f"单元格 ({i}, {j}) 的数字与解决方案不匹配")
                        break
    
    except Exception as e:
        logger.error(f"验证数独失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="验证数独失败")
    
    return result

@router.post("/hint/{puzzle_id}", response_model=Dict[str, Any])
async def get_hint(
    puzzle_id: str,
    current_puzzle: List[List[int]],
    hint_type: str = Query("cell", regex="^(cell|technique)$")
):
    """
    获取数独提示
    
    - **puzzle_id**: 谜题ID
    - **current_puzzle**: 当前谜题状态
    - **hint_type**: 提示类型 (cell: 单元格提示, technique: 技巧提示)
    """
    try:
        # 从数据库获取解决方案
        result = await execute_query(
            "SELECT solution FROM sudoku_puzzles WHERE id = ?",
            (puzzle_id,),
            fetch_one=True
        )
        
        if not result:
            # 如果数据库中没有，尝试在线求解
            solution = solve_sudoku(current_puzzle)
            if not solution:
                raise HTTPException(status_code=400, detail="无法获取提示，谜题可能无解")
        else:
            solution = json.loads(result["solution"])
        
        # 根据提示类型返回不同的提示
        if hint_type == "cell":
            # 找到第一个空单元格并返回正确数字
            for i in range(9):
                for j in range(9):
                    if current_puzzle[i][j] == 0:
                        return {
                            "type": "cell",
                            "row": i,
                            "col": j,
                            "value": solution[i][j],
                            "message": f"单元格 ({i+1}, {j+1}) 应填入 {solution[i][j]}"
                        }
        else:  # technique
            # 尝试应用一个技巧并返回提示
            technique_hint = apply_sudoku_technique(current_puzzle)
            return technique_hint
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取提示失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取提示失败")

@router.post("/possible-numbers", response_model=Dict[str, Any])
async def get_possible_numbers_for_cell(
    puzzle: List[List[int]],
    row: int = Query(..., ge=0, le=8),
    col: int = Query(..., ge=0, le=8)
):
    """
    获取单元格可能的数字
    
    - **puzzle**: 当前谜题状态
    - **row**: 行索引 (0-8)
    - **col**: 列索引 (0-8)
    """
    try:
        # 检查单元格是否为空
        if puzzle[row][col] != 0:
            return {
                "possible_numbers": [],
                "message": "该单元格已填入数字"
            }
        
        # 获取可能的数字
        possible_numbers = get_possible_numbers(puzzle, row, col)
        
        return {
            "possible_numbers": possible_numbers,
            "count": len(possible_numbers),
            "message": f"单元格 ({row+1}, {col+1}) 可能填入的数字有 {len(possible_numbers)} 个"
        }
    except Exception as e:
        logger.error(f"获取可能数字失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取可能数字失败")

@router.post("/rate-difficulty", response_model=Dict[str, Any])
async def rate_sudoku_difficulty(
    puzzle: List[List[int]]
):
    """
    评估数独谜题的难度
    
    - **puzzle**: 数独谜题
    """
    try:
        # 评估难度
        difficulty_score, difficulty_level, steps = rate_difficulty(puzzle)
        
        return {
            "difficulty_score": difficulty_score,
            "difficulty_level": difficulty_level,
            "steps_required": steps,
            "breakdown": {
                "empty_cells": sum(row.count(0) for row in puzzle),
                "required_techniques": steps
            }
        }
    except Exception as e:
        logger.error(f"评估难度失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="评估难度失败")

@router.post("/save-progress", response_model=Dict[str, Any])
async def save_game_progress(
    user_id: str,
    puzzle_id: str,
    difficulty: str,
    puzzle_state: List[List[int]],
    solution: Optional[List[List[int]]] = None,
    filled_cells: int = 0,
    status: str = "in-progress"
):
    """
    保存游戏进度
    
    - **user_id**: 用户ID
    - **puzzle_id**: 谜题ID
    - **difficulty**: 难度
    - **puzzle_state**: 当前谜题状态
    - **solution**: 解决方案（可选）
    - **filled_cells**: 已填单元格数量
    - **status**: 游戏状态
    """
    try:
        # 生成进度ID
        progress_id = common_utils.generate_unique_id()
        current_time = get_current_time()
        
        # 转换为JSON字符串
        puzzle_state_str = json.dumps(puzzle_state)
        solution_str = json.dumps(solution) if solution else None
        
        # 检查是否已存在进度
        existing = await execute_query(
            "SELECT id FROM game_progress WHERE user_id = ? AND puzzle_id = ?",
            (user_id, puzzle_id),
            fetch_one=True
        )
        
        if existing:
            # 更新现有进度
            await execute_query(
                """
                UPDATE game_progress 
                SET puzzle_state = ?, last_updated = ?, filled_cells = ?, status = ?
                WHERE user_id = ? AND puzzle_id = ?
                """,
                (puzzle_state_str, current_time, filled_cells, status, user_id, puzzle_id)
            )
            progress_id = existing["id"]
        else:
            # 创建新进度
            await execute_query(
                """
                INSERT INTO game_progress 
                (id, user_id, puzzle_id, difficulty, puzzle_state, solution, start_time, last_updated, filled_cells, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (progress_id, user_id, puzzle_id, difficulty, puzzle_state_str, solution_str, 
                 current_time, current_time, filled_cells, status)
            )
        
        return {
            "progress_id": progress_id,
            "message": "游戏进度已保存",
            "saved_at": current_time
        }
    except Exception as e:
        logger.error(f"保存游戏进度失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="保存游戏进度失败")

@router.get("/progress/{user_id}", response_model=List[Dict[str, Any]])
async def get_user_progress(
    user_id: str,
    status: Optional[str] = Query(None, regex="^(in-progress|completed)$")
):
    """
    获取用户的游戏进度
    
    - **user_id**: 用户ID
    - **status**: 可选的状态过滤
    """
    try:
        # 构建查询
        query = "SELECT * FROM game_progress WHERE user_id = ?"
        params = [user_id]
        
        if status:
            query += " AND status = ?"
            params.append(status)
        
        query += " ORDER BY last_updated DESC"
        
        # 执行查询
        results = await execute_query(query, params, fetch_all=True)
        
        # 转换结果
        progress_list = []
        for row in results:
            row_dict = row_to_dict(row)
            # 转换JSON字符串为Python对象
            row_dict["puzzle_state"] = json.loads(row_dict["puzzle_state"])
            if row_dict["solution"]:
                row_dict["solution"] = json.loads(row_dict["solution"])
            progress_list.append(row_dict)
        
        return progress_list
    except Exception as e:
        logger.error(f"获取用户进度失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取用户进度失败")

@router.get("/puzzles/random/{difficulty}", response_model=Dict[str, Any])
async def get_random_puzzle_by_difficulty(
    difficulty: str = Path(..., regex="^(easy|medium|hard|expert)$")
):
    """
    从题库中获取指定难度的随机谜题
    
    - **difficulty**: 难度级别 (easy, medium, hard, expert)
    """
    try:
        # 难度级别映射
        difficulty_mapping = {
            "easy": "简单",
            "medium": "中等",
            "hard": "困难",
            "expert": "专家"
        }
        
        # 确保数据库文件存在
        if not os.path.exists(PUZZLE_DB_PATH):
            raise HTTPException(status_code=404, detail="题库数据库文件不存在")
        
        # 连接到题库数据库
        conn = sqlite3.connect(PUZZLE_DB_PATH)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        # 查询指定难度的随机谜题
        cursor.execute(
            "SELECT puzzle, solution FROM puzzles WHERE difficulty = ? ORDER BY RANDOM() LIMIT 1",
            (difficulty_mapping.get(difficulty, "中等"),)
        )
        
        result = cursor.fetchone()
        conn.close()
        
        if not result:
            # 如果没有找到，尝试生成新的谜题
            puzzle, solution = generate_sudoku_puzzle(difficulty)
            puzzle_id = common_utils.generate_unique_id()
            
            # 将puzzle和solution转换为字符串格式
            puzzle_str = json.dumps(puzzle)
            solution_str = json.dumps(solution)
            current_time = get_current_time()
            
            # 返回数独谜题
            return {
                "puzzle_id": puzzle_id,
                "difficulty": difficulty,
                "puzzle": puzzle,
                "solution": solution,
                "created_at": current_time
            }
        
        # 解析谜题和答案
        puzzle = json.loads(result["puzzle"])
        solution = json.loads(result["solution"])
        puzzle_id = common_utils.generate_unique_id()
        current_time = get_current_time()
        
        # 返回数独谜题
        return {
            "puzzle_id": puzzle_id,
            "difficulty": difficulty,
            "puzzle": puzzle,
            "solution": solution,
            "created_at": current_time
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取随机谜题失败: {e}", exc_info=True)
        
        # 失败时尝试生成新谜题作为备选
        try:
            puzzle, solution = generate_sudoku_puzzle(difficulty)
            puzzle_id = common_utils.generate_unique_id()
            current_time = get_current_time()
            
            return {
                "puzzle_id": puzzle_id,
                "difficulty": difficulty,
                "puzzle": puzzle,
                "solution": solution,
                "created_at": current_time
            }
        except Exception as backup_error:
            raise HTTPException(status_code=500, detail="获取谜题失败，请重试")

@router.delete("/progress/{progress_id}", response_model=Dict[str, Any])
async def delete_game_progress(
    progress_id: str,
    user_id: str
):
    """
    删除游戏进度
    
    - **progress_id**: 进度ID
    - **user_id**: 用户ID（用于验证所有权）
    """
    try:
        # 验证所有权
        result = await execute_query(
            "SELECT id FROM game_progress WHERE id = ? AND user_id = ?",
            (progress_id, user_id),
            fetch_one=True
        )
        
        if not result:
            raise HTTPException(status_code=404, detail="进度不存在或无权限删除")
        
        # 删除进度
        await execute_query(
            "DELETE FROM game_progress WHERE id = ?",
            (progress_id,)
        )
        
        return {
            "message": "游戏进度已删除",
            "progress_id": progress_id
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"删除游戏进度失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="删除游戏进度失败")