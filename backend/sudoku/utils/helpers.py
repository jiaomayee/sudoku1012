"""
工具函数和辅助功能

此模块提供各种通用的工具函数和辅助方法。
"""

import json
import hashlib
from typing import List, Dict, Any, Optional, Tuple
import logging

# 配置日志
logger = logging.getLogger(__name__)


def format_response(success: bool, message: str, data: Optional[Any] = None) -> Dict[str, Any]:
    """
    格式化API响应
    
    Args:
        success: 是否成功
        message: 响应消息
        data: 可选的数据部分
    
    Returns:
        Dict: 格式化后的响应
    """
    response = {
        'success': success,
        'message': message
    }
    
    if data is not None:
        response['data'] = data
    
    return response


def generate_board_hash(board: List[List[int]]) -> str:
    """
    生成数独棋盘的哈希值，用于唯一标识
    
    Args:
        board: 数独棋盘
    
    Returns:
        str: 棋盘的哈希值
    """
    try:
        # 将棋盘转换为字符串
        board_str = json.dumps(board, separators=(',', ':'))
        # 生成哈希值
        return hashlib.sha256(board_str.encode()).hexdigest()[:16]
    except Exception as e:
        logger.error(f"Error generating board hash: {str(e)}")
        raise


def validate_sudoku_input(board: Any) -> bool:
    """
    验证数独输入的有效性
    
    Args:
        board: 待验证的棋盘数据
    
    Returns:
        bool: 输入是否有效
    """
    # 检查是否为列表
    if not isinstance(board, list) or len(board) != 9:
        return False
    
    # 检查每行
    for row in board:
        if not isinstance(row, list) or len(row) != 9:
            return False
        
        # 检查每个单元格
        for cell in row:
            if not isinstance(cell, int) or (cell != 0 and (cell < 1 or cell > 9)):
                return False
    
    return True


def format_time_seconds(seconds: int) -> str:
    """
    将秒数格式化为时分秒格式
    
    Args:
        seconds: 秒数
    
    Returns:
        str: 格式化后的时间字符串
    """
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = seconds % 60
    
    if hours > 0:
        return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    else:
        return f"{minutes:02d}:{seconds:02d}"


def calculate_difficulty(empty_cells: int) -> str:
    """
    根据空单元格数量计算谜题难度
    
    Args:
        empty_cells: 空单元格数量
    
    Returns:
        str: 难度级别
    """
    if empty_cells <= 45:
        return 'easy'
    elif empty_cells <= 55:
        return 'medium'
    elif empty_cells <= 60:
        return 'hard'
    else:
        return 'expert'


def get_cell_position(index: int) -> Tuple[int, int]:
    """
    根据一维索引获取单元格的行和列
    
    Args:
        index: 一维索引 (0-80)
    
    Returns:
        Tuple: (行, 列)
    """
    row = index // 9
    col = index % 9
    return row, col


def get_cell_index(row: int, col: int) -> int:
    """
    根据行和列获取单元格的一维索引
    
    Args:
        row: 行索引 (0-8)
        col: 列索引 (0-8)
    
    Returns:
        int: 一维索引
    """
    return row * 9 + col


def get_box_index(row: int, col: int) -> int:
    """
    根据行和列获取3x3子网格的索引
    
    Args:
        row: 行索引 (0-8)
        col: 列索引 (0-8)
    
    Returns:
        int: 子网格索引 (0-8)
    """
    box_row = row // 3
    box_col = col // 3
    return box_row * 3 + box_col


def get_box_cells(box_index: int) -> List[Tuple[int, int]]:
    """
    获取指定子网格中的所有单元格位置
    
    Args:
        box_index: 子网格索引 (0-8)
    
    Returns:
        List: 单元格位置列表
    """
    cells = []
    box_row = box_index // 3
    box_col = box_index % 3
    
    for i in range(3):
        for j in range(3):
            row = box_row * 3 + i
            col = box_col * 3 + j
            cells.append((row, col))
    
    return cells


def count_empty_cells(board: List[List[int]]) -> int:
    """
    计算数独棋盘中的空单元格数量
    
    Args:
        board: 数独棋盘
    
    Returns:
        int: 空单元格数量
    """
    count = 0
    for row in board:
        count += row.count(0)
    return count


def get_empty_cells(board: List[List[int]]) -> List[Tuple[int, int]]:
    """
    获取数独棋盘中所有空单元格的位置
    
    Args:
        board: 数独棋盘
    
    Returns:
        List: 空单元格位置列表
    """
    empty_cells = []
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                empty_cells.append((i, j))
    return empty_cells


def is_board_solved(board: List[List[int]]) -> bool:
    """
    检查数独是否已解决
    
    Args:
        board: 数独棋盘
    
    Returns:
        bool: 是否已解决
    """
    # 检查是否有空格
    if any(0 in row for row in board):
        return False
    
    # 检查每一行
    for row in board:
        if set(row) != set(range(1, 10)):
            return False
    
    # 检查每一列
    for j in range(9):
        col = [board[i][j] for i in range(9)]
        if set(col) != set(range(1, 10)):
            return False
    
    # 检查每一个3x3子网格
    for box_index in range(9):
        box_cells = get_box_cells(box_index)
        box_values = [board[i][j] for (i, j) in box_cells]
        if set(box_values) != set(range(1, 10)):
            return False
    
    return True


def copy_board(board: List[List[int]]) -> List[List[int]]:
    """
    深拷贝数独棋盘
    
    Args:
        board: 数独棋盘
    
    Returns:
        List[List[int]]: 复制后的棋盘
    """
    return [row[:] for row in board]


def format_board_for_display(board: List[List[int]]) -> str:
    """
    格式化数独棋盘用于显示
    
    Args:
        board: 数独棋盘
    
    Returns:
        str: 格式化后的字符串
    """
    result = []
    for i in range(9):
        if i > 0 and i % 3 == 0:
            result.append('------+-------+------')
        
        row_str = []
        for j in range(9):
            if j > 0 and j % 3 == 0:
                row_str.append('|')
            row_str.append(str(board[i][j]) if board[i][j] != 0 else '.')
        
        result.append(' '.join(row_str))
    
    return '\n'.join(result)


def parse_difficulty_from_request(request_data: Dict[str, Any], default: str = 'medium') -> str:
    """
    从请求数据中解析难度级别
    
    Args:
        request_data: 请求数据字典
        default: 默认难度级别
    
    Returns:
        str: 难度级别
    """
    difficulty = request_data.get('difficulty', default).lower()
    valid_difficulties = ['easy', 'medium', 'hard', 'expert']
    
    if difficulty not in valid_difficulties:
        logger.warning(f"Invalid difficulty '{difficulty}', using default '{default}'")
        return default
    
    return difficulty


def safe_cast_to_int(value: Any, default: int = 0) -> int:
    """
    安全地将值转换为整数
    
    Args:
        value: 待转换的值
        default: 转换失败时的默认值
    
    Returns:
        int: 转换后的整数
    """
    try:
        return int(value)
    except (ValueError, TypeError):
        return default


def sanitize_user_input(data: Dict[str, Any]) -> Dict[str, Any]:
    """
    清理用户输入数据，移除潜在的危险字符
    
    Args:
        data: 用户输入数据
    
    Returns:
        Dict: 清理后的数据
    """
    # 这里实现基本的输入清理逻辑
    # 在实际应用中，可能需要更复杂的清理规则
    if not isinstance(data, dict):
        return {}
    
    sanitized = {}
    for key, value in data.items():
        # 移除可能的特殊字符
        safe_key = str(key).strip()
        
        # 处理不同类型的值
        if isinstance(value, str):
            safe_value = value.strip()
        elif isinstance(value, (int, float, bool, type(None))):
            safe_value = value
        elif isinstance(value, (list, dict)):
            # 递归清理嵌套结构
            if isinstance(value, list):
                safe_value = [item.strip() if isinstance(item, str) else item for item in value]
            else:
                safe_value = sanitize_user_input(value)
        else:
            # 转换其他类型为字符串
            safe_value = str(value).strip()
        
        sanitized[safe_key] = safe_value
    
    return sanitized


def calculate_mastery_level(practiced_count: int, success_rate: float = 1.0) -> int:
    """
    根据练习次数和成功率计算掌握程度
    
    Args:
        practiced_count: 练习次数
        success_rate: 成功率 (0.0-1.0)
    
    Returns:
        int: 掌握程度 (0-100)
    """
    # 计算基础掌握度
    base_level = min(100, practiced_count * 2)
    
    # 根据成功率调整
    mastery_level = int(base_level * success_rate)
    
    return mastery_level


def get_technique_difficulty_level(technique_name: str) -> int:
    """
    获取技巧的难度等级
    
    Args:
        technique_name: 技巧名称
    
    Returns:
        int: 难度等级 (1-5)
    """
    # 定义各技巧的难度等级
    difficulty_map = {
        'naked_single': 1,
        'hidden_single': 2,
        'naked_pair': 3,
        'hidden_pair': 3,
        'naked_triple': 4,
        'hidden_triple': 4,
        'x_wing': 4,
        'swordfish': 5,
        'xy_wing': 5,
        'xyz_wing': 5,
        'skyscraper': 5,
        'two_string_kite': 5,
        'unique_rectangle': 5
    }
    
    # 默认难度为3
    return difficulty_map.get(technique_name.lower(), 3)