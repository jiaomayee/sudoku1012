"""
数独相关API蓝图

此模块定义了数独谜题相关的RESTful API接口。
"""

from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from typing import Dict, Any, List, Optional
from sqlalchemy.orm import Session
import logging

# 导入数据库和算法
from ..database.database import get_db, close_db
from ..database.sudoku_puzzle_dao import SudokuPuzzleDAO
from ..algorithms.generator import generate_puzzle, format_board_for_storage, parse_board_from_storage
from ..algorithms.solver import solve_sudoku, generate_candidates, is_board_unique
from ..algorithms.techniques import SudokuTechniqueManager

# 配置日志
logger = logging.getLogger(__name__)

# 创建蓝图
sudoku_bp = Blueprint('sudoku', __name__)


@sudoku_bp.route('/puzzles/generate', methods=['POST'])
def generate_sudoku_puzzle() -> Dict[str, Any]:
    """
    生成新的数独谜题
    
    Request Body:
        difficulty: 难度级别 ('easy', 'medium', 'hard', 'expert')
    
    Returns:
        Dict: 包含谜题和解决方案的字典
    """
    try:
        data = request.get_json() or {}
        difficulty = data.get('difficulty', 'medium').lower()
        
        # 验证难度级别
        valid_difficulties = ['easy', 'medium', 'hard', 'expert']
        if difficulty not in valid_difficulties:
            return jsonify({
                'error': 'Invalid difficulty',
                'message': f'Difficulty must be one of: {valid_difficulties}'
            }), 400
        
        # 生成谜题
        puzzle, solution = generate_puzzle(difficulty=difficulty)
        
        # 保存到数据库
        db = next(get_db())
        try:
            puzzle_entity = SudokuPuzzleDAO.create_puzzle(
                db=db,
                puzzle=puzzle,
                solution=solution,
                difficulty=difficulty,
                source='user-generated'
            )
            
            return jsonify({
                'id': puzzle_entity.id,
                'puzzle': puzzle,
                'difficulty': difficulty,
                'message': f'Successfully generated {difficulty} puzzle'
            }), 201
        except Exception as e:
            logger.error(f"Error saving puzzle to database: {str(e)}")
            # 如果保存失败，仍然返回谜题（不返回ID）
            return jsonify({
                'puzzle': puzzle,
                'difficulty': difficulty,
                'message': f'Warning: Generated {difficulty} puzzle but could not save to database'
            }), 201
        finally:
            close_db()
    
    except Exception as e:
        logger.error(f"Error generating puzzle: {str(e)}")
        return jsonify({
            'error': 'Generation error',
            'message': f'Failed to generate puzzle: {str(e)}'
        }), 500


@sudoku_bp.route('/puzzles/random/<difficulty>', methods=['GET'])
def get_random_puzzle(difficulty: str) -> Dict[str, Any]:
    """
    获取指定难度的随机谜题
    
    Args:
        difficulty: 难度级别 ('easy', 'medium', 'hard', 'expert')
    
    Returns:
        Dict: 谜题信息
    """
    try:
        # 验证难度级别
        valid_difficulties = ['easy', 'medium', 'hard', 'expert']
        difficulty = difficulty.lower()
        if difficulty not in valid_difficulties:
            return jsonify({
                'error': 'Invalid difficulty',
                'message': f'Difficulty must be one of: {valid_difficulties}'
            }), 400
        
        # 对于专家难度，优先从题库数据库获取
        if difficulty == 'expert':
            import sqlite3
            import os
            import json
            from flask import current_app
            
            # 题库数据库路径
            PUZZLE_DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "date", "sudoku_date.db")
            
            # 如果题库数据库存在，尝试从中获取专家难度题目
            if os.path.exists(PUZZLE_DB_PATH):
                conn = None
                try:
                    # 连接到题库数据库
                    conn = sqlite3.connect(PUZZLE_DB_PATH)
                    conn.row_factory = sqlite3.Row
                    cursor = conn.cursor()
                    
                    # 难度级别映射
                    difficulty_mapping = {
                        "easy": "简单",
                        "medium": "中等",
                        "hard": "困难",
                        "expert": "专家"
                    }
                    
                    # 查询专家难度的随机题目
                    cursor.execute(
                        "SELECT puzzle_data, solution FROM questions WHERE difficulty_level = ? ORDER BY RANDOM() LIMIT 1",
                        (difficulty_mapping.get(difficulty, "专家"),)
                    )
                    
                    result = cursor.fetchone()
                    
                    if result:
                        # 解析谜题和答案
                        puzzle_str = result["puzzle_data"]
                        solution_str = result["solution"]
                        
                        # 将字符串格式的数独转换为二维数组
                        def str_to_grid(sudoku_str):
                            grid = []
                            non_zero_count = 0
                            for i in range(9):
                                row = []
                                for j in range(9):
                                    try:
                                        char = sudoku_str[i*9 + j]
                                        # 处理空格字符（可能是'0'或'.'）
                                        if char == '0' or char == '.':
                                            value = 0
                                        else:
                                            value = int(char)
                                            if value != 0:
                                                non_zero_count += 1
                                        row.append(value)
                                    except (IndexError, ValueError):
                                        # 如果访问超出范围或转换失败，使用0填充
                                        row.append(0)
                                grid.append(row)
                            return grid, non_zero_count

                        puzzle, non_zero_count = str_to_grid(puzzle_str)
                        solution, _ = str_to_grid(solution_str)
                        
                        # 检查非零数字数量是否满足数独规则（至少17个）
                        if non_zero_count < 17:
                            logger.warning(f"从题库获取的数独非零数字数量不足（{non_zero_count}个），需要至少17个非零数字")
                            # 如果非零数字不足，生成新的谜题替代
                            puzzle, solution = generate_puzzle(difficulty=difficulty)
                        
                        # 生成唯一ID
                        import uuid
                        puzzle_id = str(uuid.uuid4())
                        
                        # 返回从题库获取的题目
                        return jsonify({
                            'id': puzzle_id,
                            'puzzle': puzzle,
                            'solution': solution,
                            'difficulty': difficulty,
                            'source': 'expert-database'
                        }), 200
                except Exception as e:
                    logger.warning(f"从题库数据库获取专家难度题目失败: {str(e)}")
                finally:
                    if conn:
                        conn.close()
        
        # 从应用程序数据库获取随机谜题
        db = next(get_db())
        try:
            puzzle_entity = SudokuPuzzleDAO.get_random_puzzle_by_difficulty(db=db, difficulty=difficulty)
            
            if not puzzle_entity:
                # 如果数据库中没有，生成新的谜题
                puzzle, solution = generate_puzzle(difficulty=difficulty)
                
                # 生成唯一ID
                import uuid
                puzzle_id = str(uuid.uuid4())
                
                return jsonify({
                    'id': puzzle_id,
                    'puzzle': puzzle,
                    'solution': solution,
                    'difficulty': difficulty,
                    'message': f'No {difficulty} puzzles in database, generated new one'
                }), 200
            
            # 更新游玩次数
            SudokuPuzzleDAO.update_puzzle_play_count(db=db, puzzle_id=puzzle_entity.id)
            
            return jsonify({
                'id': puzzle_entity.id,
                'puzzle': parse_board_from_storage(puzzle_entity.puzzle),
                'solution': parse_board_from_storage(puzzle_entity.solution),
                'difficulty': puzzle_entity.difficulty.value,
                'created_at': puzzle_entity.created_at.isoformat() if puzzle_entity.created_at else None
            }), 200
        finally:
            close_db()
    
    except Exception as e:
        logger.error(f"Error getting random puzzle: {str(e)}")
        # 出错时尝试生成新谜题作为备选
        try:
            puzzle, solution = generate_puzzle(difficulty=difficulty)
            import uuid
            puzzle_id = str(uuid.uuid4())
            
            return jsonify({
                'id': puzzle_id,
                'puzzle': puzzle,
                'solution': solution,
                'difficulty': difficulty,
                'message': f'Error occurred, generated fallback puzzle'
            }), 200
        except Exception as fallback_error:
            return jsonify({
                'error': 'Generation error',
                'message': f'Failed to retrieve or generate puzzle: {str(fallback_error)}'
            }), 500


@sudoku_bp.route('/puzzles/<int:puzzle_id>', methods=['GET'])
def get_puzzle(puzzle_id: int) -> Dict[str, Any]:
    """
    获取指定ID的谜题
    
    Args:
        puzzle_id: 谜题ID
    
    Returns:
        Dict: 谜题信息
    """
    try:
        db = next(get_db())
        try:
            puzzle_entity = SudokuPuzzleDAO.get_puzzle_by_id(db=db, puzzle_id=puzzle_id)
            
            if not puzzle_entity:
                return jsonify({
                    'error': 'Not found',
                    'message': f'Puzzle with ID {puzzle_id} not found'
                }), 404
            
            return jsonify({
                'id': puzzle_entity.id,
                'puzzle': parse_board_from_storage(puzzle_entity.puzzle),
                'solution': parse_board_from_storage(puzzle_entity.solution),
                'difficulty': puzzle_entity.difficulty.value,
                'created_at': puzzle_entity.created_at.isoformat() if puzzle_entity.created_at else None,
                'play_count': puzzle_entity.play_count
            }), 200
        finally:
            close_db()
    
    except Exception as e:
        logger.error(f"Error getting puzzle {puzzle_id}: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve puzzle: {str(e)}'
        }), 500


@sudoku_bp.route('/solve', methods=['POST'])
def solve_sudoku_puzzle() -> Dict[str, Any]:
    """
    求解数独谜题
    
    Request Body:
        puzzle: 数独谜题二维数组
    
    Returns:
        Dict: 包含解决方案的字典
    """
    try:
        data = request.get_json() or {}
        puzzle = data.get('puzzle')
        
        if not puzzle:
            return jsonify({
                'error': 'Missing puzzle',
                'message': 'Puzzle data is required'
            }), 400
        
        if not isinstance(puzzle, list) or len(puzzle) != 9 or any(len(row) != 9 for row in puzzle):
            return jsonify({
                'error': 'Invalid puzzle format',
                'message': 'Puzzle must be a 9x9 grid'
            }), 400
        
        # 求解谜题
        solution = solve_sudoku(puzzle)
        
        if solution:
            return jsonify({
                'solved': True,
                'solution': solution,
                'message': 'Puzzle solved successfully'
            }), 200
        else:
            return jsonify({
                'solved': False,
                'message': 'No solution found for the given puzzle'
            }), 200
    
    except Exception as e:
        logger.error(f"Error solving puzzle: {str(e)}")
        return jsonify({
            'error': 'Solving error',
            'message': f'Failed to solve puzzle: {str(e)}'
        }), 500


@sudoku_bp.route('/validate', methods=['POST'])
def validate_sudoku_puzzle() -> Dict[str, Any]:
    """
    验证数独谜题的有效性
    
    Request Body:
        puzzle: 数独谜题二维数组
    
    Returns:
        Dict: 验证结果
    """
    try:
        data = request.get_json() or {}
        puzzle = data.get('puzzle')
        
        if not puzzle:
            return jsonify({
                'error': 'Missing puzzle',
                'message': 'Puzzle data is required'
            }), 400
        
        if not isinstance(puzzle, list) or len(puzzle) != 9 or any(len(row) != 9 for row in puzzle):
            return jsonify({
                'error': 'Invalid puzzle format',
                'message': 'Puzzle must be a 9x9 grid'
            }), 400
        
        # 检查谜题是否有解
        solution = solve_sudoku(puzzle)
        
        # 检查解是否唯一
        unique = is_board_unique(puzzle)
        
        return jsonify({
            'valid': solution is not None,
            'has_solution': solution is not None,
            'unique_solution': unique,
            'message': 'Puzzle validation completed'
        }), 200
    
    except Exception as e:
        logger.error(f"Error validating puzzle: {str(e)}")
        return jsonify({
            'error': 'Validation error',
            'message': f'Failed to validate puzzle: {str(e)}'
        }), 500


@sudoku_bp.route('/candidates', methods=['POST'])
def get_candidates() -> Dict[str, Any]:
    """
    获取每个空格的候选数
    
    Request Body:
        puzzle: 数独谜题二维数组
    
    Returns:
        Dict: 每个空格的候选数
    """
    try:
        data = request.get_json() or {}
        puzzle = data.get('puzzle')
        
        if not puzzle:
            return jsonify({
                'error': 'Missing puzzle',
                'message': 'Puzzle data is required'
            }), 400
        
        if not isinstance(puzzle, list) or len(puzzle) != 9 or any(len(row) != 9 for row in puzzle):
            return jsonify({
                'error': 'Invalid puzzle format',
                'message': 'Puzzle must be a 9x9 grid'
            }), 400
        
        # 生成候选数
        candidates = generate_candidates(puzzle)
        
        return jsonify({
            'candidates': candidates,
            'message': 'Candidates generated successfully'
        }), 200
    
    except Exception as e:
        logger.error(f"Error generating candidates: {str(e)}")
        return jsonify({
            'error': 'Generation error',
            'message': f'Failed to generate candidates: {str(e)}'
        }), 500


@sudoku_bp.route('/techniques', methods=['POST'])
def identify_techniques() -> Dict[str, Any]:
    """
    识别当前数独状态可使用的求解技巧
    
    Request Body:
        puzzle: 数独谜题二维数组
        candidates: 可选，候选数信息
    
    Returns:
        Dict: 识别出的技巧列表
    """
    try:
        data = request.get_json() or {}
        puzzle = data.get('puzzle')
        provided_candidates = data.get('candidates')
        
        if not puzzle:
            return jsonify({
                'error': 'Missing puzzle',
                'message': 'Puzzle data is required'
            }), 400
        
        if not isinstance(puzzle, list) or len(puzzle) != 9 or any(len(row) != 9 for row in puzzle):
            return jsonify({
                'error': 'Invalid puzzle format',
                'message': 'Puzzle must be a 9x9 grid'
            }), 400
        
        # 如果没有提供候选数，则生成
        if not provided_candidates:
            provided_candidates = generate_candidates(puzzle)
        
        # 使用技巧管理器识别技巧
        technique_manager = SudokuTechniqueManager()
        identified_techniques = technique_manager.identify_applicable_techniques(
            puzzle=puzzle,
            candidates=provided_candidates
        )
        
        # 格式化结果
        result = []
        for tech in identified_techniques:
            result.append({
                'name': tech['name'],
                'description': tech['description'],
                'cells': tech['cells'],
                'values': tech['values'],
                'difficulty': tech['difficulty'],
                'action_type': tech['action_type'],
                'explanation': tech['explanation']
            })
        
        return jsonify({
            'techniques': result,
            'count': len(result),
            'message': 'Techniques identified successfully'
        }), 200
    
    except Exception as e:
        logger.error(f"Error identifying techniques: {str(e)}")
        return jsonify({
            'error': 'Identification error',
            'message': f'Failed to identify techniques: {str(e)}'
        }), 500


@sudoku_bp.route('/puzzles', methods=['GET'])
def get_puzzles_list() -> Dict[str, Any]:
    """
    获取谜题列表
    
    Query Parameters:
        difficulty: 可选，难度级别过滤
        skip: 可选，分页偏移
        limit: 可选，每页数量
    
    Returns:
        Dict: 谜题列表和分页信息
    """
    try:
        # 获取查询参数
        difficulty = request.args.get('difficulty')
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
            puzzles = SudokuPuzzleDAO.get_puzzles(
                db=db,
                skip=skip,
                limit=limit,
                difficulty=difficulty
            )
            
            # 格式化结果
            result = []
            for puzzle in puzzles:
                result.append({
                    'id': puzzle.id,
                    'difficulty': puzzle.difficulty.value,
                    'play_count': puzzle.play_count,
                    'created_at': puzzle.created_at.isoformat() if puzzle.created_at else None
                })
            
            return jsonify({
                'puzzles': result,
                'skip': skip,
                'limit': limit,
                'total': len(result)
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error getting puzzles list: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve puzzles: {str(e)}'
        }), 500


@sudoku_bp.route('/puzzles/stats', methods=['GET'])
def get_puzzles_stats() -> Dict[str, Any]:
    """
    获取谜题统计信息
    
    Returns:
        Dict: 各难度级别的谜题数量统计
    """
    try:
        db = next(get_db())
        try:
            stats = SudokuPuzzleDAO.get_puzzle_stats_by_difficulty(db=db)
            
            return jsonify({
                'stats': stats,
                'total': sum(stats.values()),
                'message': 'Puzzle statistics retrieved successfully'
            }), 200
        finally:
            close_db(db)
    
    except Exception as e:
        logger.error(f"Error getting puzzles stats: {str(e)}")
        return jsonify({
            'error': 'Database error',
            'message': f'Failed to retrieve statistics: {str(e)}'
        }), 500