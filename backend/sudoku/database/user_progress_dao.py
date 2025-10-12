"""
用户进度数据访问层

此模块提供与用户游戏进度和技巧学习相关的数据库操作功能。
"""

from typing import List, Optional, Dict, Any
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import func, desc
from ..models.user_progress import UserProgress, TechniqueLearning, UserStats


class UserProgressDAO:
    """
    用户游戏进度数据访问对象
    """
    
    @staticmethod
    def create_or_update_progress(db: Session, user_id: int, puzzle_id: int,
                                current_board: str, completed: bool = False,
                                hints_used: int = 0, time_spent: int = 0) -> UserProgress:
        """
        创建或更新用户游戏进度
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            puzzle_id: 谜题ID
            current_board: 当前棋盘状态
            completed: 是否完成
            hints_used: 使用的提示次数
            time_spent: 花费的时间（秒）
        
        Returns:
            UserProgress: 用户进度对象
        """
        # 查找是否已存在进度记录
        progress = db.query(UserProgress).filter(
            UserProgress.user_id == user_id,
            UserProgress.puzzle_id == puzzle_id
        ).first()
        
        if progress:
            # 更新现有记录
            progress.current_board = current_board
            progress.completed = completed
            progress.hints_used = hints_used
            progress.time_spent = time_spent
            progress.last_updated = func.now()
        else:
            # 创建新记录
            progress = UserProgress(
                user_id=user_id,
                puzzle_id=puzzle_id,
                current_board=current_board,
                completed=completed,
                hints_used=hints_used,
                time_spent=time_spent,
                started_at=func.now(),
                last_updated=func.now()
            )
            db.add(progress)
        
        db.commit()
        db.refresh(progress)
        return progress
    
    @staticmethod
    def get_user_progress(db: Session, user_id: int, puzzle_id: int) -> Optional[UserProgress]:
        """
        获取用户对特定谜题的进度
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            puzzle_id: 谜题ID
        
        Returns:
            UserProgress or None: 用户进度对象或None
        """
        return db.query(UserProgress).filter(
            UserProgress.user_id == user_id,
            UserProgress.puzzle_id == puzzle_id
        ).first()
    
    @staticmethod
    def get_user_active_progress(db: Session, user_id: int) -> List[UserProgress]:
        """
        获取用户未完成的所有进度
        
        Args:
            db: 数据库会话
            user_id: 用户ID
        
        Returns:
            List[UserProgress]: 未完成的进度列表
        """
        return db.query(UserProgress).filter(
            UserProgress.user_id == user_id,
            UserProgress.completed == False
        ).order_by(desc(UserProgress.last_updated)).all()
    
    @staticmethod
    def get_user_completed_puzzles(db: Session, user_id: int, skip: int = 0, limit: int = 20) -> List[UserProgress]:
        """
        获取用户已完成的谜题
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            skip: 跳过的记录数
            limit: 返回的记录数
        
        Returns:
            List[UserProgress]: 已完成的进度列表
        """
        return db.query(UserProgress).filter(
            UserProgress.user_id == user_id,
            UserProgress.completed == True
        ).order_by(desc(UserProgress.completed_at)).offset(skip).limit(limit).all()
    
    @staticmethod
    def delete_progress(db: Session, user_id: int, puzzle_id: int) -> bool:
        """
        删除用户进度
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            puzzle_id: 谜题ID
        
        Returns:
            bool: 是否删除成功
        """
        progress = db.query(UserProgress).filter(
            UserProgress.user_id == user_id,
            UserProgress.puzzle_id == puzzle_id
        ).first()
        
        if progress:
            db.delete(progress)
            db.commit()
            return True
        return False
    
    @staticmethod
    def mark_puzzle_completed(db: Session, user_id: int, puzzle_id: int, time_spent: int) -> bool:
        """
        将谜题标记为已完成
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            puzzle_id: 谜题ID
            time_spent: 花费的时间（秒）
        
        Returns:
            bool: 是否更新成功
        """
        progress = db.query(UserProgress).filter(
            UserProgress.user_id == user_id,
            UserProgress.puzzle_id == puzzle_id
        ).first()
        
        if progress:
            progress.completed = True
            progress.time_spent = time_spent
            progress.completed_at = func.now()
            progress.last_updated = func.now()
            db.commit()
            return True
        return False


class TechniqueLearningDAO:
    """
    技巧学习数据访问对象
    """
    
    @staticmethod
    def create_or_update_technique_learning(db: Session, user_id: int, technique_name: str,
                                          learned: bool = False, practiced_count: int = 0,
                                          mastery_level: int = 0, last_practiced: Optional[str] = None) -> TechniqueLearning:
        """
        创建或更新用户的技巧学习情况
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            technique_name: 技巧名称
            learned: 是否已学习
            practiced_count: 练习次数
            mastery_level: 掌握程度（0-100）
            last_practiced: 最后练习时间
        
        Returns:
            TechniqueLearning: 技巧学习对象
        """
        # 查找是否已存在学习记录
        learning = db.query(TechniqueLearning).filter(
            TechniqueLearning.user_id == user_id,
            TechniqueLearning.technique_name == technique_name
        ).first()
        
        if learning:
            # 更新现有记录
            learning.learned = learned
            learning.practiced_count = practiced_count
            learning.mastery_level = mastery_level
            if last_practiced:
                learning.last_practiced = last_practiced
            learning.last_updated = func.now()
        else:
            # 创建新记录
            learning = TechniqueLearning(
                user_id=user_id,
                technique_name=technique_name,
                learned=learned,
                practiced_count=practiced_count,
                mastery_level=mastery_level,
                first_learned=func.now(),
                last_updated=func.now()
            )
            db.add(learning)
        
        db.commit()
        db.refresh(learning)
        return learning
    
    @staticmethod
    def get_user_technique_learning(db: Session, user_id: int, technique_name: str) -> Optional[TechniqueLearning]:
        """
        获取用户对特定技巧的学习情况
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            technique_name: 技巧名称
        
        Returns:
            TechniqueLearning or None: 技巧学习对象或None
        """
        return db.query(TechniqueLearning).filter(
            TechniqueLearning.user_id == user_id,
            TechniqueLearning.technique_name == technique_name
        ).first()
    
    @staticmethod
    def get_all_user_techniques(db: Session, user_id: int) -> List[TechniqueLearning]:
        """
        获取用户所有技巧学习情况
        
        Args:
            db: 数据库会话
            user_id: 用户ID
        
        Returns:
            List[TechniqueLearning]: 技巧学习列表
        """
        return db.query(TechniqueLearning).filter(
            TechniqueLearning.user_id == user_id
        ).all()
    
    @staticmethod
    def get_learned_techniques(db: Session, user_id: int) -> List[TechniqueLearning]:
        """
        获取用户已学习的技巧
        
        Args:
            db: 数据库会话
            user_id: 用户ID
        
        Returns:
            List[TechniqueLearning]: 已学习的技巧列表
        """
        return db.query(TechniqueLearning).filter(
            TechniqueLearning.user_id == user_id,
            TechniqueLearning.learned == True
        ).all()
    
    @staticmethod
    def increment_practice_count(db: Session, user_id: int, technique_name: str) -> bool:
        """
        增加技巧练习次数
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            technique_name: 技巧名称
        
        Returns:
            bool: 是否更新成功
        """
        learning = db.query(TechniqueLearning).filter(
            TechniqueLearning.user_id == user_id,
            TechniqueLearning.technique_name == technique_name
        ).first()
        
        if learning:
            learning.practiced_count += 1
            learning.last_practiced = func.now()
            learning.last_updated = func.now()
            db.commit()
            return True
        return False
    
    @staticmethod
    def update_mastery_level(db: Session, user_id: int, technique_name: str, level: int) -> bool:
        """
        更新技巧掌握程度
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            technique_name: 技巧名称
            level: 掌握程度（0-100）
        
        Returns:
            bool: 是否更新成功
        """
        learning = db.query(TechniqueLearning).filter(
            TechniqueLearning.user_id == user_id,
            TechniqueLearning.technique_name == technique_name
        ).first()
        
        if learning and 0 <= level <= 100:
            learning.mastery_level = level
            learning.last_updated = func.now()
            db.commit()
            return True
        return False


class UserStatsDAO:
    """
    用户统计数据访问对象
    """
    
    @staticmethod
    def get_or_create_user_stats(db: Session, user_id: int) -> UserStats:
        """
        获取或创建用户统计信息
        
        Args:
            db: 数据库会话
            user_id: 用户ID
        
        Returns:
            UserStats: 用户统计对象
        """
        stats = db.query(UserStats).filter(UserStats.user_id == user_id).first()
        
        if not stats:
            stats = UserStats(user_id=user_id)
            db.add(stats)
            db.commit()
            db.refresh(stats)
        
        return stats
    
    @staticmethod
    def update_completed_puzzles_count(db: Session, user_id: int) -> bool:
        """
        更新已完成谜题计数
        
        Args:
            db: 数据库会话
            user_id: 用户ID
        
        Returns:
            bool: 是否更新成功
        """
        # 获取当前已完成的谜题数量
        completed_count = db.query(func.count(UserProgress.id)).filter(
            UserProgress.user_id == user_id,
            UserProgress.completed == True
        ).scalar()
        
        stats = db.query(UserStats).filter(UserStats.user_id == user_id).first()
        
        if stats:
            stats.completed_puzzles = completed_count
            db.commit()
            return True
        return False
    
    @staticmethod
    def increment_hints_used(db: Session, user_id: int, count: int = 1) -> bool:
        """
        增加使用的提示次数
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            count: 增加的次数
        
        Returns:
            bool: 是否更新成功
        """
        stats = db.query(UserStats).filter(UserStats.user_id == user_id).first()
        
        if stats:
            stats.hints_used += count
            db.commit()
            return True
        return False
    
    @staticmethod
    def update_total_time_played(db: Session, user_id: int, additional_time: int) -> bool:
        """
        更新总游戏时间
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            additional_time: 额外的游戏时间（秒）
        
        Returns:
            bool: 是否更新成功
        """
        stats = db.query(UserStats).filter(UserStats.user_id == user_id).first()
        
        if stats:
            stats.total_time_played += additional_time
            db.commit()
            return True
        return False
    
    @staticmethod
    def update_best_time(db: Session, user_id: int, puzzle_difficulty: str, time_seconds: int) -> bool:
        """
        更新最佳完成时间
        
        Args:
            db: 数据库会话
            user_id: 用户ID
            puzzle_difficulty: 谜题难度
            time_seconds: 完成时间（秒）
        
        Returns:
            bool: 是否更新成功
        """
        stats = db.query(UserStats).filter(UserStats.user_id == user_id).first()
        
        if stats:
            if puzzle_difficulty == 'easy' and (stats.best_time_easy == 0 or time_seconds < stats.best_time_easy):
                stats.best_time_easy = time_seconds
            elif puzzle_difficulty == 'medium' and (stats.best_time_medium == 0 or time_seconds < stats.best_time_medium):
                stats.best_time_medium = time_seconds
            elif puzzle_difficulty == 'hard' and (stats.best_time_hard == 0 or time_seconds < stats.best_time_hard):
                stats.best_time_hard = time_seconds
            elif puzzle_difficulty == 'expert' and (stats.best_time_expert == 0 or time_seconds < stats.best_time_expert):
                stats.best_time_expert = time_seconds
            
            db.commit()
            return True
        return False