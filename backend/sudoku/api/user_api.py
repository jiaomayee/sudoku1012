"""
用户相关API蓝图

此模块定义了用户进度跟踪和技巧学习相关的RESTful API接口。
"""

from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from typing import Dict, Any, List, Optional
from sqlalchemy.orm import Session
import logging

# 导入数据库和模型
from ..database.database import get_db, close_db
from ..database.user_progress_dao import UserProgressDAO, TechniqueLearningDAO, UserStatsDAO
from ..database.sudoku_puzzle_dao import SudokuPuzzleDAO
from ..models.user_progress import UserProgress, TechniqueLearning, UserStats
from ..algorithms.generator import parse_board_from_storage

# 配置日志
logger = logging.getLogger(__name__)

# 创建蓝图
user_bp = Blueprint('user', __name__)


# 模拟用户认证装饰器
def mock_auth_required(func):
    """
    模拟用户认证装饰器
    
    在实际应用中，应该使用适当的认证机制，如JWT或会话认证。
    此装饰器仅用于演示目的，从请求中提取user_id或使用默认值。
    """
    def wrapper(*args, **kwargs):
        # 从请求头或查询参数获取user_id
        user_id = request.headers.get('X-User-ID') or request.args.get('user_id')
        
        # 如果没有提供user_id，使用默认值1
        if not user_id:
            user_id = 1
        
        # 将user_id添加到请求上下文
        request.user_id = int(user_id)
        
        return func(*args, **kwargs)
    
    wrapper.__name__ = func.__name__
    return wrapper


@user_bp.route('/progress/<int:puzzle_id>', methods=['GET'])
@mock_auth_required
def get_user_puzzle_progress(puzzle_id: int) -> Dict[str, Any]:
    """
    获取用户对特定谜题的进度
    
    Args:
        puzzle_id: 谜题ID
    
    Returns:
        Dict: 用户进度信息
    """
    try:
        user_id = request.user_id
        
        db = next(get_db())
        try:
            # 检查谜题是否存在
            puzzle = SudokuPuzzleDAO.get_puzzle_by_id(db=db, puzzle_id=puzzle_id)
            if not puzzle:
                return jsonify({
                    'error': 'Not found',
                    'message': f'Puzzle with ID {puzzle_id} not found'
                }), 404
            
            # 获取用户进度
            progress = UserProgressDAO.get_user_progress(
                db=db, 
                user_id=user_id,
                puzzle_id=puzzle_id
            )
            
            if progress:
                return jsonify({
                    'user_id': user_id,
                    'puzzle_id': puzzle_id,
                    'current_board': parse_board_from_storage(progress.current_board),
                    'completed': progress.completed,
                    'hints_used': progress.hints_used,
                    'time_spent': progress.time_spent,
                    'started_at': progress.started_at.isoformat() if progress.started_at else None,
                    'completed_at': progress.completed_at.isoformat() if progress.completed_at else None,
                    'last_updated': progress.last_updated.isoformat() if progress.last_updated else None
                }), 200
            else:
                # 如果没有进度记录，返回初始状态
                return jsonify({
                    'user_id': user_id,
                    'puzzle_id': puzzle_id,
                    'current_board': parse_board_from_storage(puzzle.puzzle),
                    'completed': False,
                    'hints_used': 0,
                    'time_spent': 0,
                    'message': 'No progress found, returning initial state'
                }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error getting user progress: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve progress: {str(e)}'
        }), 500


@user_bp.route('/progress/<int:puzzle_id>', methods=['POST'])
@mock_auth_required
def save_user_progress(puzzle_id: int) -> Dict[str, Any]:
    """
    保存用户对特定谜题的进度
    
    Args:
        puzzle_id: 谜题ID
    
    Request Body:
        current_board: 当前棋盘状态
        completed: 是否完成
        hints_used: 使用的提示次数
        time_spent: 花费的时间（秒）
    
    Returns:
        Dict: 保存结果
    """
    try:
        user_id = request.user_id
        data = request.get_json() or {}
        
        # 验证必需字段
        if 'current_board' not in data:
            return jsonify({
                'error': 'Missing required fields',
                'message': 'current_board is required'
            }), 400
        
        current_board = data.get('current_board')
        completed = data.get('completed', False)
        hints_used = data.get('hints_used', 0)
        time_spent = data.get('time_spent', 0)
        
        # 验证棋盘格式
        if not isinstance(current_board, list) or len(current_board) != 9 or any(len(row) != 9 for row in current_board):
            return jsonify({
                'error': 'Invalid board format',
                'message': 'current_board must be a 9x9 grid'
            }), 400
        
        # 格式化棋盘为存储格式
        from ..algorithms.generator import format_board_for_storage
        board_str = format_board_for_storage(current_board)
        
        db = next(get_db())
        try:
            # 检查谜题是否存在
            puzzle = SudokuPuzzleDAO.get_puzzle_by_id(db=db, puzzle_id=puzzle_id)
            if not puzzle:
                return jsonify({
                    'error': 'Not found',
                    'message': f'Puzzle with ID {puzzle_id} not found'
                }), 404
            
            # 保存或更新进度
            progress = UserProgressDAO.create_or_update_progress(
                db=db,
                user_id=user_id,
                puzzle_id=puzzle_id,
                current_board=board_str,
                completed=completed,
                hints_used=hints_used,
                time_spent=time_spent
            )
            
            # 如果谜题完成，更新用户统计信息
            if completed:
                UserStatsDAO.update_completed_puzzles_count(db=db, user_id=user_id)
                UserStatsDAO.update_total_time_played(db=db, user_id=user_id, additional_time=time_spent)
                UserStatsDAO.update_best_time(db=db, user_id=user_id, puzzle_difficulty=puzzle.difficulty.value, time_seconds=time_spent)
            
            # 如果使用了提示，更新提示使用次数
            if hints_used > 0:
                UserStatsDAO.increment_hints_used(db=db, user_id=user_id, count=hints_used)
            
            return jsonify({
                'success': True,
                'user_id': user_id,
                'puzzle_id': puzzle_id,
                'completed': progress.completed,
                'message': 'Progress saved successfully'
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error saving user progress: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to save progress: {str(e)}'
        }), 500


@user_bp.route('/progress/active', methods=['GET'])
@mock_auth_required
def get_active_progress() -> Dict[str, Any]:
    """
    获取用户未完成的所有进度
    
    Returns:
        Dict: 未完成的进度列表
    """
    try:
        user_id = request.user_id
        
        db = next(get_db())
        try:
            progress_list = UserProgressDAO.get_user_active_progress(db=db, user_id=user_id)
            
            # 格式化结果
            result = []
            for progress in progress_list:
                result.append({
                    'puzzle_id': progress.puzzle_id,
                    'current_board': parse_board_from_storage(progress.current_board),
                    'hints_used': progress.hints_used,
                    'time_spent': progress.time_spent,
                    'last_updated': progress.last_updated.isoformat() if progress.last_updated else None
                })
            
            return jsonify({
                'active_progress': result,
                'count': len(result),
                'message': 'Active progress retrieved successfully'
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error getting active progress: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve active progress: {str(e)}'
        }), 500


@user_bp.route('/progress/completed', methods=['GET'])
@mock_auth_required
def get_completed_puzzles() -> Dict[str, Any]:
    """
    获取用户已完成的谜题
    
    Query Parameters:
        skip: 可选，分页偏移
        limit: 可选，每页数量
    
    Returns:
        Dict: 已完成的谜题列表
    """
    try:
        user_id = request.user_id
        
        # 获取查询参数
        skip = int(request.args.get('skip', 0))
        limit = int(request.args.get('limit', 20))
        
        # 验证分页参数
        if skip < 0 or limit < 1 or limit > 100:
            return jsonify({
                'error': 'Invalid pagination parameters',
                'message': 'skip must be >= 0 and limit must be between 1 and 100'
            }), 400
        
        db = next(get_db())
        try:
            completed_list = UserProgressDAO.get_user_completed_puzzles(
                db=db,
                user_id=user_id,
                skip=skip,
                limit=limit
            )
            
            # 格式化结果
            result = []
            for progress in completed_list:
                result.append({
                    'puzzle_id': progress.puzzle_id,
                    'time_spent': progress.time_spent,
                    'hints_used': progress.hints_used,
                    'completed_at': progress.completed_at.isoformat() if progress.completed_at else None
                })
            
            return jsonify({
                'completed_puzzles': result,
                'skip': skip,
                'limit': limit,
                'count': len(result),
                'message': 'Completed puzzles retrieved successfully'
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error getting completed puzzles: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve completed puzzles: {str(e)}'
        }), 500


@user_bp.route('/techniques', methods=['GET'])
@mock_auth_required
def get_user_techniques() -> Dict[str, Any]:
    """
    获取用户所有技巧学习情况
    
    Returns:
        Dict: 技巧学习列表
    """
    try:
        user_id = request.user_id
        
        db = next(get_db())
        try:
            techniques = TechniqueLearningDAO.get_all_user_techniques(db=db, user_id=user_id)
            
            # 格式化结果
            result = []
            for technique in techniques:
                result.append({
                    'name': technique.technique_name,
                    'learned': technique.learned,
                    'practiced_count': technique.practiced_count,
                    'mastery_level': technique.mastery_level,
                    'first_learned': technique.first_learned.isoformat() if technique.first_learned else None,
                    'last_practiced': technique.last_practiced.isoformat() if technique.last_practiced else None
                })
            
            return jsonify({
                'techniques': result,
                'count': len(result),
                'message': 'Technique learning status retrieved successfully'
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error getting user techniques: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve technique data: {str(e)}'
        }), 500


@user_bp.route('/techniques/<technique_name>', methods=['POST'])
@mock_auth_required
def update_technique_learning(technique_name: str) -> Dict[str, Any]:
    """
    更新用户的技巧学习情况
    
    Args:
        technique_name: 技巧名称
    
    Request Body:
        learned: 是否已学习
        practiced_count: 练习次数
        mastery_level: 掌握程度（0-100）
    
    Returns:
        Dict: 更新结果
    """
    try:
        user_id = request.user_id
        data = request.get_json() or {}
        
        # 提取更新字段
        learned = data.get('learned', False)
        practiced_count = data.get('practiced_count', 0)
        mastery_level = data.get('mastery_level', 0)
        
        # 验证掌握程度
        if mastery_level < 0 or mastery_level > 100:
            return jsonify({
                'error': 'Invalid mastery level',
                'message': 'Mastery level must be between 0 and 100'
            }), 400
        
        db = next(get_db())
        try:
            # 创建或更新技巧学习记录
            learning = TechniqueLearningDAO.create_or_update_technique_learning(
                db=db,
                user_id=user_id,
                technique_name=technique_name,
                learned=learned,
                practiced_count=practiced_count,
                mastery_level=mastery_level
            )
            
            return jsonify({
                'success': True,
                'technique_name': learning.technique_name,
                'learned': learning.learned,
                'practiced_count': learning.practiced_count,
                'mastery_level': learning.mastery_level,
                'message': 'Technique learning status updated successfully'
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error updating technique learning: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to update technique learning: {str(e)}'
        }), 500


@user_bp.route('/techniques/<technique_name>/practice', methods=['POST'])
@mock_auth_required
def increment_technique_practice(technique_name: str) -> Dict[str, Any]:
    """
    增加技巧练习次数
    
    Args:
        technique_name: 技巧名称
    
    Returns:
        Dict: 更新结果
    """
    try:
        user_id = request.user_id
        
        db = next(get_db())
        try:
            # 增加练习次数
            success = TechniqueLearningDAO.increment_practice_count(
                db=db,
                user_id=user_id,
                technique_name=technique_name
            )
            
            if success:
                # 获取更新后的学习记录
                learning = TechniqueLearningDAO.get_user_technique_learning(
                    db=db,
                    user_id=user_id,
                    technique_name=technique_name
                )
                
                return jsonify({
                    'success': True,
                    'technique_name': technique_name,
                    'practiced_count': learning.practiced_count,
                    'last_practiced': learning.last_practiced.isoformat() if learning.last_practiced else None,
                    'message': 'Practice count incremented successfully'
                }), 200
            else:
                # 如果记录不存在，创建一个新的
                learning = TechniqueLearningDAO.create_or_update_technique_learning(
                    db=db,
                    user_id=user_id,
                    technique_name=technique_name,
                    learned=True,
                    practiced_count=1,
                    mastery_level=0
                )
                
                return jsonify({
                    'success': True,
                    'technique_name': technique_name,
                    'practiced_count': 1,
                    'message': 'Technique record created and practice counted'
                }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error incrementing practice count: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to update practice count: {str(e)}'
        }), 500


@user_bp.route('/stats', methods=['GET'])
@mock_auth_required
def get_user_stats() -> Dict[str, Any]:
    """
    获取用户统计信息
    
    Returns:
        Dict: 用户统计数据
    """
    try:
        user_id = request.user_id
        
        db = next(get_db())
        try:
            # 获取或创建用户统计信息
            stats = UserStatsDAO.get_or_create_user_stats(db=db, user_id=user_id)
            
            return jsonify({
                'user_id': user_id,
                'completed_puzzles': stats.completed_puzzles,
                'hints_used': stats.hints_used,
                'total_time_played': stats.total_time_played,
                'best_times': {
                    'easy': stats.best_time_easy,
                    'medium': stats.best_time_medium,
                    'hard': stats.best_time_hard,
                    'expert': stats.best_time_expert
                },
                'message': 'User statistics retrieved successfully'
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error getting user stats: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve user statistics: {str(e)}'
        }), 500


@user_bp.route('/progress/<int:puzzle_id>', methods=['DELETE'])
@mock_auth_required
def delete_user_progress(puzzle_id: int) -> Dict[str, Any]:
    """
    删除用户进度
    
    Args:
        puzzle_id: 谜题ID
    
    Returns:
        Dict: 删除结果
    """
    try:
        user_id = request.user_id
        
        db = next(get_db())
        try:
            # 删除进度
            success = UserProgressDAO.delete_progress(
                db=db,
                user_id=user_id,
                puzzle_id=puzzle_id
            )
            
            if success:
                return jsonify({
                    'success': True,
                    'user_id': user_id,
                    'puzzle_id': puzzle_id,
                    'message': 'Progress deleted successfully'
                }), 200
            else:
                return jsonify({
                    'error': 'Not found',
                    'message': 'No progress found for this puzzle'
                }), 404
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error deleting user progress: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to delete progress: {str(e)}'
        }), 500