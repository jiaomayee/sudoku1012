"""
用户进度数据模型

此模块定义了用户学习和游戏进度的数据结构和数据库表映射。
"""

from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime, JSON, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from ..database.database import Base


class UserProgress(Base):
    """
    用户进度表
    
    跟踪用户的数独游戏和学习进度。
    """
    __tablename__ = "user_progress"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String(50), nullable=False, comment="用户标识符")
    puzzle_id = Column(Integer, ForeignKey("sudoku_puzzles.id"), nullable=True, comment="关联的谜题ID")
    current_board = Column(String(81), nullable=True, comment="当前棋盘状态")
    is_completed = Column(Boolean, default=False, comment="是否完成")
    completion_time = Column(Integer, nullable=True, comment="完成时间(秒)")
    mistakes = Column(Integer, default=0, comment="错误次数")
    hints_used = Column(Integer, default=0, comment="使用提示次数")
    started_at = Column(DateTime(timezone=True), server_default=func.now(), comment="开始时间")
    completed_at = Column(DateTime(timezone=True), nullable=True, comment="完成时间")
    
    # 关联关系
    puzzle = relationship("SudokuPuzzle", backref="user_progresses")
    
    def __repr__(self):
        return f"<UserProgress(id={self.id}, user_id={self.user_id}, puzzle_id={self.puzzle_id}, completed={self.is_completed})>"
    
    def to_dict(self):
        """
        转换为字典格式
        
        Returns:
            dict: 用户进度信息字典
        """
        return {
            "id": self.id,
            "user_id": self.user_id,
            "puzzle_id": self.puzzle_id,
            "current_board": self.current_board,
            "is_completed": self.is_completed,
            "completion_time": self.completion_time,
            "mistakes": self.mistakes,
            "hints_used": self.hints_used,
            "started_at": self.started_at.isoformat() if self.started_at else None,
            "completed_at": self.completed_at.isoformat() if self.completed_at else None
        }


class TechniqueLearning(Base):
    """
    技巧学习记录表
    
    跟踪用户对数独技巧的学习情况。
    """
    __tablename__ = "technique_learning"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String(50), nullable=False, comment="用户标识符")
    technique_name = Column(String(100), nullable=False, comment="技巧名称")
    times_used = Column(Integer, default=0, comment="使用次数")
    times_success = Column(Integer, default=0, comment="成功应用次数")
    last_used = Column(DateTime(timezone=True), nullable=True, comment="最后使用时间")
    mastery_level = Column(Integer, default=0, comment="掌握等级(0-5)")
    notes = Column(Text, nullable=True, comment="用户笔记")
    
    def __repr__(self):
        return f"<TechniqueLearning(user_id={self.user_id}, technique={self.technique_name}, mastery={self.mastery_level})>"
    
    def to_dict(self):
        """
        转换为字典格式
        
        Returns:
            dict: 技巧学习信息字典
        """
        return {
            "id": self.id,
            "user_id": self.user_id,
            "technique_name": self.technique_name,
            "times_used": self.times_used,
            "times_success": self.times_success,
            "last_used": self.last_used.isoformat() if self.last_used else None,
            "mastery_level": self.mastery_level,
            "notes": self.notes
        }


class UserStats(Base):
    """
    用户统计表
    
    存储用户的整体统计信息。
    """
    __tablename__ = "user_stats"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String(50), unique=True, nullable=False, comment="用户标识符")
    total_puzzles_played = Column(Integer, default=0, comment="总游玩谜题数")
    total_puzzles_completed = Column(Integer, default=0, comment="总完成谜题数")
    total_play_time = Column(Integer, default=0, comment="总游戏时间(秒)")
    best_time_easy = Column(Integer, nullable=True, comment="简单难度最佳时间")
    best_time_medium = Column(Integer, nullable=True, comment="中等难度最佳时间")
    best_time_hard = Column(Integer, nullable=True, comment="困难难度最佳时间")
    best_time_expert = Column(Integer, nullable=True, comment="专家难度最佳时间")
    techniques_mastered = Column(Integer, default=0, comment="掌握的技巧数")
    last_active = Column(DateTime(timezone=True), server_default=func.now(), comment="最后活跃时间")
    
    def __repr__(self):
        return f"<UserStats(user_id={self.user_id}, total_played={self.total_puzzles_played}, total_completed={self.total_puzzles_completed})>"
    
    def to_dict(self):
        """
        转换为字典格式
        
        Returns:
            dict: 用户统计信息字典
        """
        return {
            "id": self.id,
            "user_id": self.user_id,
            "total_puzzles_played": self.total_puzzles_played,
            "total_puzzles_completed": self.total_puzzles_completed,
            "total_play_time": self.total_play_time,
            "best_time_easy": self.best_time_easy,
            "best_time_medium": self.best_time_medium,
            "best_time_hard": self.best_time_hard,
            "best_time_expert": self.best_time_expert,
            "techniques_mastered": self.techniques_mastered,
            "last_active": self.last_active.isoformat() if self.last_active else None
        }