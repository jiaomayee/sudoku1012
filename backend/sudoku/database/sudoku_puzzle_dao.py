"""
数独谜题数据访问层

此模块提供与数独谜题相关的数据库操作功能。
"""

from typing import List, Optional, Dict, Any
from sqlalchemy.orm import Session
from sqlalchemy import func, desc
from ..models.sudoku_puzzle import SudokuPuzzle, DifficultyLevel
from ..algorithms.generator import format_board_for_storage, parse_board_from_storage


class SudokuPuzzleDAO:
    """
    数独谜题数据访问对象
    """
    
    @staticmethod
    def create_puzzle(db: Session, puzzle: List[List[int]], solution: List[List[int]], 
                     difficulty: str, source: Optional[str] = None) -> SudokuPuzzle:
        """
        创建新的数独谜题
        
        Args:
            db: 数据库会话
            puzzle: 数独谜题棋盘
            solution: 解决方案棋盘
            difficulty: 难度级别
            source: 谜题来源
        
        Returns:
            SudokuPuzzle: 创建的谜题对象
        """
        # 格式化棋盘为字符串
        puzzle_str = format_board_for_storage(puzzle)
        solution_str = format_board_for_storage(solution)
        
        # 创建谜题对象
        db_puzzle = SudokuPuzzle(
            puzzle=puzzle_str,
            solution=solution_str,
            difficulty=DifficultyLevel(difficulty),
            source=source
        )
        
        # 保存到数据库
        db.add(db_puzzle)
        db.commit()
        db.refresh(db_puzzle)
        
        return db_puzzle
    
    @staticmethod
    def get_puzzle_by_id(db: Session, puzzle_id: int) -> Optional[SudokuPuzzle]:
        """
        根据ID获取谜题
        
        Args:
            db: 数据库会话
            puzzle_id: 谜题ID
        
        Returns:
            SudokuPuzzle or None: 谜题对象或None
        """
        return db.query(SudokuPuzzle).filter(SudokuPuzzle.id == puzzle_id).first()
    
    @staticmethod
    def get_puzzle_by_unique_id(db: Session, unique_id: str) -> Optional[SudokuPuzzle]:
        """
        根据唯一标识符获取谜题
        
        Args:
            db: 数据库会话
            unique_id: 唯一标识符
        
        Returns:
            SudokuPuzzle or None: 谜题对象或None
        """
        return db.query(SudokuPuzzle).filter(SudokuPuzzle.unique_id == unique_id).first()
    
    @staticmethod
    def get_random_puzzle_by_difficulty(db: Session, difficulty: str) -> Optional[SudokuPuzzle]:
        """
        根据难度随机获取一个谜题
        
        Args:
            db: 数据库会话
            difficulty: 难度级别
        
        Returns:
            SudokuPuzzle or None: 谜题对象或None
        """
        return db.query(SudokuPuzzle).filter(
            SudokuPuzzle.difficulty == DifficultyLevel(difficulty)
        ).order_by(func.random()).first()
    
    @staticmethod
    def get_puzzles(db: Session, skip: int = 0, limit: int = 100,
                   difficulty: Optional[str] = None) -> List[SudokuPuzzle]:
        """
        获取谜题列表，支持分页和难度过滤
        
        Args:
            db: 数据库会话
            skip: 跳过的记录数
            limit: 返回的记录数
            difficulty: 可选的难度过滤
        
        Returns:
            List[SudokuPuzzle]: 谜题列表
        """
        query = db.query(SudokuPuzzle)
        
        if difficulty:
            query = query.filter(SudokuPuzzle.difficulty == DifficultyLevel(difficulty))
        
        return query.offset(skip).limit(limit).all()
    
    @staticmethod
    def update_puzzle_play_count(db: Session, puzzle_id: int) -> bool:
        """
        更新谜题的游玩次数
        
        Args:
            db: 数据库会话
            puzzle_id: 谜题ID
        
        Returns:
            bool: 是否更新成功
        """
        puzzle = db.query(SudokuPuzzle).filter(SudokuPuzzle.id == puzzle_id).first()
        if puzzle:
            puzzle.play_count += 1
            db.commit()
            return True
        return False
    
    @staticmethod
    def update_puzzle_rating(db: Session, puzzle_id: int, rating: int) -> bool:
        """
        更新谜题的评分
        
        Args:
            db: 数据库会话
            puzzle_id: 谜题ID
            rating: 新的评分
        
        Returns:
            bool: 是否更新成功
        """
        puzzle = db.query(SudokuPuzzle).filter(SudokuPuzzle.id == puzzle_id).first()
        if puzzle and 1 <= rating <= 5:
            puzzle.rating = rating
            db.commit()
            return True
        return False
    
    @staticmethod
    def delete_puzzle(db: Session, puzzle_id: int) -> bool:
        """
        删除谜题
        
        Args:
            db: 数据库会话
            puzzle_id: 谜题ID
        
        Returns:
            bool: 是否删除成功
        """
        puzzle = db.query(SudokuPuzzle).filter(SudokuPuzzle.id == puzzle_id).first()
        if puzzle:
            db.delete(puzzle)
            db.commit()
            return True
        return False
    
    @staticmethod
    def get_puzzle_stats_by_difficulty(db: Session) -> Dict[str, Any]:
        """
        获取各难度级别的谜题统计信息
        
        Args:
            db: 数据库会话
        
        Returns:
            Dict: 统计信息字典
        """
        stats = {}
        for difficulty in DifficultyLevel:
            count = db.query(func.count(SudokuPuzzle.id)).filter(
                SudokuPuzzle.difficulty == difficulty
            ).scalar()
            stats[difficulty.value] = count
        return stats
    
    @staticmethod
    def get_most_played_puzzles(db: Session, limit: int = 10) -> List[SudokuPuzzle]:
        """
        获取游玩次数最多的谜题
        
        Args:
            db: 数据库会话
            limit: 返回的记录数
        
        Returns:
            List[SudokuPuzzle]: 谜题列表
        """
        return db.query(SudokuPuzzle).order_by(
            desc(SudokuPuzzle.play_count)
        ).limit(limit).all()
    
    @staticmethod
    def batch_create_puzzles(db: Session, puzzles_data: List[Dict[str, Any]]) -> List[SudokuPuzzle]:
        """
        批量创建谜题
        
        Args:
            db: 数据库会话
            puzzles_data: 谜题数据列表
        
        Returns:
            List[SudokuPuzzle]: 创建的谜题对象列表
        """
        created_puzzles = []
        
        for data in puzzles_data:
            puzzle = SudokuPuzzle(
                puzzle=data['puzzle'],
                solution=data['solution'],
                difficulty=DifficultyLevel(data['difficulty']),
                source=data.get('source'),
                unique_id=data.get('unique_id')
            )
            db.add(puzzle)
            created_puzzles.append(puzzle)
        
        db.commit()
        for puzzle in created_puzzles:
            db.refresh(puzzle)
        
        return created_puzzles