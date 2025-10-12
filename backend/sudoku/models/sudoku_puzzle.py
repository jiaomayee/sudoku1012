"""
数独谜题数据模型

此模块定义了数独谜题的数据结构和数据库表映射。
"""

from sqlalchemy import Column, Integer, String, Text, Enum, DateTime
from sqlalchemy.sql import func
import enum
from ..database.database import Base


class DifficultyLevel(str, enum.Enum):
    """
    难度级别枚举
    """
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"
    EXPERT = "expert"


class SudokuPuzzle(Base):
    """
    数独谜题表
    
    存储数独谜题的基本信息，包括谜题内容、解决方案、难度等。
    """
    __tablename__ = "sudoku_puzzles"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    puzzle = Column(String(81), nullable=False, comment="数独谜题，81字符字符串，空格用'.'表示")
    solution = Column(String(81), nullable=False, comment="数独解决方案，81字符字符串")
    difficulty = Column(Enum(DifficultyLevel), nullable=False, comment="难度级别")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), comment="创建时间")
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), comment="更新时间")
    source = Column(String(100), nullable=True, comment="谜题来源")
    rating = Column(Integer, default=0, comment="用户评分")
    play_count = Column(Integer, default=0, comment="被游玩次数")
    unique_id = Column(String(50), unique=True, nullable=True, comment="唯一标识符")
    
    def __repr__(self):
        return f"<SudokuPuzzle(id={self.id}, difficulty={self.difficulty}, created_at={self.created_at})>"
    
    def to_dict(self):
        """
        转换为字典格式
        
        Returns:
            dict: 谜题信息字典
        """
        return {
            "id": self.id,
            "puzzle": self.puzzle,
            "solution": self.solution,
            "difficulty": self.difficulty.value,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "updated_at": self.updated_at.isoformat() if self.updated_at else None,
            "source": self.source,
            "rating": self.rating,
            "play_count": self.play_count,
            "unique_id": self.unique_id
        }