"""
数据库配置模块

此模块包含数据库连接配置和初始化函数。
"""

import os
from typing import Optional
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

# 创建db对象
db = SQLAlchemy()

# 加载环境变量
load_dotenv()

# 数据库URL
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./sudoku.db")

# 创建数据库引擎
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {}
)

# 创建会话工厂
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 创建基类
Base = declarative_base()


def get_db() -> Session:
    """
    获取数据库会话的依赖函数
    
    Yields:
        Session: 数据库会话对象
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db(app=None) -> None:
    """
    初始化数据库，创建所有表
    
    Args:
        app: Flask应用实例
    """
    # 如果提供了app实例，则初始化数据库连接
    if app:
        db.init_app(app)
    
    # 导入所有模型，确保它们被注册
    from ..models import sudoku_puzzle, user_progress  # noqa
    
    # 如果有app实例，创建所有表
    if app:
        with app.app_context():
            db.create_all()


def close_db() -> None:
    """
    关闭数据库连接
    """
    engine.dispose()