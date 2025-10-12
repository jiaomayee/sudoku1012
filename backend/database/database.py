import os
import sqlite3
import asyncio
from contextlib import asynccontextmanager
import logging
from datetime import datetime

logger = logging.getLogger(__name__)

# 数据库文件路径
DATABASE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sudoku.db")

# 初始化数据库
async def init_db():
    """初始化SQLite数据库"""
    try:
        # 使用同步的方式创建数据库和表（SQLite3本身是同步的）
        with sqlite3.connect(DATABASE_PATH) as conn:
            cursor = conn.cursor()
            
            # 创建用户表
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS users (
                    id TEXT PRIMARY KEY,
                    username TEXT NOT NULL,
                    email TEXT,
                    created_at TEXT NOT NULL,
                    last_login TEXT
                )
            ''')
            
            # 创建用户统计数据表
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS user_stats (
                    user_id TEXT PRIMARY KEY,
                    total_games INTEGER DEFAULT 0,
                    completed_games INTEGER DEFAULT 0,
                    best_time INTEGER DEFAULT 999999,
                    current_streak INTEGER DEFAULT 0,
                    longest_streak INTEGER DEFAULT 0,
                    favorite_difficulty TEXT DEFAULT 'medium',
                    last_played TEXT,
                    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
                )
            ''')
            
            # 创建游戏进度表
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS game_progress (
                    id TEXT PRIMARY KEY,
                    user_id TEXT NOT NULL,
                    puzzle_id TEXT NOT NULL,
                    difficulty TEXT NOT NULL,
                    puzzle_state TEXT NOT NULL,
                    solution TEXT,
                    start_time TEXT NOT NULL,
                    last_updated TEXT NOT NULL,
                    completed BOOLEAN DEFAULT 0,
                    completion_time INTEGER,
                    filled_cells INTEGER DEFAULT 0,
                    status TEXT DEFAULT 'in-progress',
                    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
                )
            ''')
            
            # 创建技巧学习进度表
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS technique_progress (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id TEXT NOT NULL,
                    technique_id TEXT NOT NULL,
                    practiced INTEGER DEFAULT 0,
                    mastered INTEGER DEFAULT 0,
                    last_practiced TEXT,
                    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
                    UNIQUE(user_id, technique_id)
                )
            ''')
            
            # 创建数独谜题表（存储常用的谜题）
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS sudoku_puzzles (
                    id TEXT PRIMARY KEY,
                    difficulty TEXT NOT NULL,
                    puzzle TEXT NOT NULL,
                    solution TEXT NOT NULL,
                    created_at TEXT NOT NULL,
                    usage_count INTEGER DEFAULT 0
                )
            ''')
            
            conn.commit()
            logger.info("数据库表创建成功")
    except Exception as e:
        logger.error(f"数据库初始化失败: {e}", exc_info=True)
        raise

# 数据库连接上下文管理器
@asynccontextmanager
async def get_db():
    """获取数据库连接的异步上下文管理器"""
    conn = None
    try:
        # 使用线程池执行同步的数据库操作
        conn = sqlite3.connect(DATABASE_PATH)
        conn.row_factory = sqlite3.Row  # 允许通过列名访问
        yield conn
    except Exception as e:
        logger.error(f"数据库连接错误: {e}", exc_info=True)
        raise
    finally:
        if conn:
            conn.close()

# 通用的数据库操作函数
async def execute_query(query, params=None, fetch_one=False, fetch_all=False):
    """执行SQL查询的通用函数"""
    try:
        # 在事件循环的默认执行器中运行同步操作
        async def _execute():
            with sqlite3.connect(DATABASE_PATH) as conn:
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                if params:
                    cursor.execute(query, params)
                else:
                    cursor.execute(query)
                
                result = None
                if fetch_one:
                    result = cursor.fetchone()
                elif fetch_all:
                    result = cursor.fetchall()
                else:
                    conn.commit()
                return result
        
        return await asyncio.get_event_loop().run_in_executor(None, _execute)
    except Exception as e:
        logger.error(f"SQL查询执行失败: {query}, params: {params}, error: {e}", exc_info=True)
        raise

# 辅助函数：转换行对象为字典
def row_to_dict(row):
    """将SQLite的Row对象转换为字典"""
    if not row:
        return None
    return dict(row)

# 辅助函数：获取当前时间字符串
def get_current_time():
    """获取当前时间的ISO格式字符串"""
    return datetime.utcnow().isoformat() + "Z"

# 清理数据库（仅用于开发测试）
async def clear_db():
    """清理所有数据表（仅用于开发）"""
    try:
        tables = [
            "game_progress",
            "technique_progress", 
            "user_stats", 
            "sudoku_puzzles",
            "users"
        ]
        
        for table in tables:
            await execute_query(f"DELETE FROM {table}")
        
        logger.info("数据库已清理")
    except Exception as e:
        logger.error(f"数据库清理失败: {e}", exc_info=True)
        raise