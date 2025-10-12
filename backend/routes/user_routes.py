from fastapi import APIRouter, HTTPException, Depends, Query
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from typing import Dict, Any, Optional, List
import logging
import json

# 创建路由
router = APIRouter()
logger = logging.getLogger(__name__)

# 导入数据库操作和工具函数
from database.database import execute_query, row_to_dict, get_current_time
import utils.common as common_utils
from utils.auth import create_access_token, verify_token, get_password_hash, verify_password

# 安全配置
security = HTTPBearer()

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """获取当前用户"""
    token = credentials.credentials
    user_id = verify_token(token)
    if not user_id:
        raise HTTPException(status_code=401, detail="无效的认证凭据")
    
    # 获取用户信息
    user = await execute_query(
        "SELECT * FROM users WHERE id = ?",
        (user_id,),
        fetch_one=True
    )
    
    if not user:
        raise HTTPException(status_code=404, detail="用户不存在")
    
    return row_to_dict(user)

@router.post("/register", response_model=Dict[str, Any])
async def register_user(
    username: str,
    email: Optional[str] = None,
    # 在实际应用中应该有密码字段
    # password: str
):
    """
    注册新用户
    
    - **username**: 用户名
    - **email**: 电子邮箱（可选）
    """
    try:
        # 检查用户名是否已存在
        existing = await execute_query(
            "SELECT id FROM users WHERE username = ?",
            (username,),
            fetch_one=True
        )
        
        if existing:
            raise HTTPException(status_code=400, detail="用户名已存在")
        
        # 生成用户ID和时间戳
        user_id = common_utils.generate_unique_id()
        current_time = get_current_time()
        
        # 创建用户
        await execute_query(
            """
            INSERT INTO users (id, username, email, created_at, last_login)
            VALUES (?, ?, ?, ?, ?)
            """,
            (user_id, username, email, current_time, current_time)
        )
        
        # 初始化用户统计数据
        await execute_query(
            """
            INSERT INTO user_stats 
            (user_id, total_games, completed_games, best_time, 
             current_streak, longest_streak, favorite_difficulty, last_played)
            VALUES (?, 0, 0, 999999, 0, 0, 'medium', ?)
            """,
            (user_id, current_time)
        )
        
        # 创建访问令牌
        access_token = create_access_token(user_id)
        
        return {
            "user_id": user_id,
            "username": username,
            "email": email,
            "access_token": access_token,
            "message": "注册成功"
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"用户注册失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="用户注册失败")

@router.post("/login", response_model=Dict[str, Any])
async def login_user(
    username: str,
    # 在实际应用中应该验证密码
    # password: str
):
    """
    用户登录
    
    - **username**: 用户名
    """
    try:
        # 查找用户
        user = await execute_query(
            "SELECT * FROM users WHERE username = ?",
            (username,),
            fetch_one=True
        )
        
        if not user:
            raise HTTPException(status_code=401, detail="用户名或密码错误")
        
        # 在实际应用中应该验证密码
        # if not verify_password(password, user["password_hash"]):
        #     raise HTTPException(status_code=401, detail="用户名或密码错误")
        
        user_dict = row_to_dict(user)
        current_time = get_current_time()
        
        # 更新最后登录时间
        await execute_query(
            "UPDATE users SET last_login = ? WHERE id = ?",
            (current_time, user_dict["id"])
        )
        
        # 创建访问令牌
        access_token = create_access_token(user_dict["id"])
        
        return {
            "user_id": user_dict["id"],
            "username": user_dict["username"],
            "email": user_dict["email"],
            "access_token": access_token,
            "message": "登录成功"
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"用户登录失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="用户登录失败")

@router.get("/me", response_model=Dict[str, Any])
async def get_current_user_info(
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    获取当前用户信息
    """
    try:
        # 获取用户统计数据
        stats = await execute_query(
            "SELECT * FROM user_stats WHERE user_id = ?",
            (current_user["id"],),
            fetch_one=True
        )
        
        if stats:
            stats_dict = row_to_dict(stats)
            # 移除不必要的字段
            stats_dict.pop("user_id", None)
            current_user["stats"] = stats_dict
        
        # 移除敏感信息
        current_user.pop("password_hash", None)
        
        return current_user
    except Exception as e:
        logger.error(f"获取用户信息失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取用户信息失败")

@router.put("/me", response_model=Dict[str, Any])
async def update_user_info(
    username: Optional[str] = None,
    email: Optional[str] = None,
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    更新用户信息
    
    - **username**: 新用户名（可选）
    - **email**: 新电子邮箱（可选）
    """
    try:
        # 准备更新字段
        updates = []
        params = []
        
        if username:
            # 检查新用户名是否已存在
            existing = await execute_query(
                "SELECT id FROM users WHERE username = ? AND id != ?",
                (username, current_user["id"]),
                fetch_one=True
            )
            
            if existing:
                raise HTTPException(status_code=400, detail="用户名已存在")
            
            updates.append("username = ?")
            params.append(username)
        
        if email is not None:
            updates.append("email = ?")
            params.append(email)
        
        # 执行更新
        if updates:
            params.append(current_user["id"])
            await execute_query(
                f"UPDATE users SET {', '.join(updates)} WHERE id = ?",
                params
            )
        
        # 获取更新后的用户信息
        updated_user = await execute_query(
            "SELECT * FROM users WHERE id = ?",
            (current_user["id"],),
            fetch_one=True
        )
        
        user_dict = row_to_dict(updated_user)
        user_dict.pop("password_hash", None)
        
        return {
            "user": user_dict,
            "message": "用户信息已更新"
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"更新用户信息失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="更新用户信息失败")

@router.put("/me/stats", response_model=Dict[str, Any])
async def update_user_stats(
    stats_update: Dict[str, Any],
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    更新用户统计数据
    
    - **stats_update**: 要更新的统计数据字段
    """
    try:
        # 准备更新字段
        updates = []
        params = []
        
        allowed_fields = [
            "total_games", "completed_games", "best_time", 
            "current_streak", "longest_streak", "favorite_difficulty", "last_played"
        ]
        
        for field in allowed_fields:
            if field in stats_update:
                updates.append(f"{field} = ?")
                params.append(stats_update[field])
        
        # 更新最后游戏时间
        if "last_played" not in stats_update:
            updates.append("last_played = ?")
            params.append(get_current_time())
        
        # 执行更新
        if updates:
            params.append(current_user["id"])
            await execute_query(
                f"UPDATE user_stats SET {', '.join(updates)} WHERE user_id = ?",
                params
            )
        
        # 获取更新后的统计数据
        updated_stats = await execute_query(
            "SELECT * FROM user_stats WHERE user_id = ?",
            (current_user["id"],),
            fetch_one=True
        )
        
        return {
            "stats": row_to_dict(updated_stats),
            "message": "统计数据已更新"
        }
    except Exception as e:
        logger.error(f"更新统计数据失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="更新统计数据失败")

@router.get("/me/techniques", response_model=List[Dict[str, Any]])
async def get_technique_progress(
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    获取用户技巧学习进度
    """
    try:
        # 获取技巧进度
        results = await execute_query(
            "SELECT * FROM technique_progress WHERE user_id = ?",
            (current_user["id"],),
            fetch_all=True
        )
        
        techniques = []
        for row in results:
            techniques.append(row_to_dict(row))
        
        return techniques
    except Exception as e:
        logger.error(f"获取技巧进度失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="获取技巧进度失败")

@router.put("/me/techniques/{technique_id}", response_model=Dict[str, Any])
async def update_technique_progress(
    technique_id: str,
    practiced: Optional[int] = 0,
    mastered: Optional[bool] = False,
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    更新技巧学习进度
    
    - **technique_id**: 技巧ID
    - **practiced**: 练习次数
    - **mastered**: 是否掌握
    """
    try:
        current_time = get_current_time()
        
        # 检查是否已存在记录
        existing = await execute_query(
            "SELECT * FROM technique_progress WHERE user_id = ? AND technique_id = ?",
            (current_user["id"], technique_id),
            fetch_one=True
        )
        
        if existing:
            # 更新现有记录
            existing_dict = row_to_dict(existing)
            new_practiced = existing_dict["practiced"] + practiced
            
            await execute_query(
                """
                UPDATE technique_progress 
                SET practiced = ?, mastered = ?, last_practiced = ?
                WHERE user_id = ? AND technique_id = ?
                """,
                (new_practiced, mastered, current_time, current_user["id"], technique_id)
            )
        else:
            # 创建新记录
            await execute_query(
                """
                INSERT INTO technique_progress 
                (user_id, technique_id, practiced, mastered, last_practiced)
                VALUES (?, ?, ?, ?, ?)
                """,
                (current_user["id"], technique_id, practiced, mastered, current_time)
            )
        
        return {
            "technique_id": technique_id,
            "practiced": practiced,
            "mastered": mastered,
            "message": "技巧进度已更新",
            "updated_at": current_time
        }
    except Exception as e:
        logger.error(f"更新技巧进度失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="更新技巧进度失败")

@router.delete("/me", response_model=Dict[str, Any])
async def delete_user_account(
    current_user: Dict[str, Any] = Depends(get_current_user)
):
    """
    删除用户账户
    """
    try:
        # 删除用户（级联删除相关数据）
        await execute_query(
            "DELETE FROM users WHERE id = ?",
            (current_user["id"],)
        )
        
        return {
            "message": "用户账户已删除",
            "user_id": current_user["id"]
        }
    except Exception as e:
        logger.error(f"删除用户账户失败: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="删除用户账户失败")