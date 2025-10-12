"""
数独生成器模块

此模块负责生成有效的数独谜题，支持不同难度级别。
"""

import random
from typing import List, Tuple, Optional


def generate_complete_board() -> List[List[int]]:
    """
    生成一个完整的、有效的数独棋盘
    
    Returns:
        List[List[int]]: 9x9的完整数独棋盘
    """
    # 创建空棋盘
    board = [[0 for _ in range(9)] for _ in range(9)]
    
    # 使用回溯算法填充棋盘
    _fill_board(board)
    return board


def _fill_board(board: List[List[int]]) -> bool:
    """
    使用回溯法填充数独棋盘
    
    Args:
        board: 当前的数独棋盘
    
    Returns:
        bool: 是否成功填充
    """
    # 寻找空格
    empty_cell = _find_empty_cell(board)
    if not empty_cell:
        # 没有空格，填充完成
        return True
    
    row, col = empty_cell
    
    # 随机打乱数字顺序，增加随机性
    numbers = list(range(1, 10))
    random.shuffle(numbers)
    
    for num in numbers:
        if _is_valid(board, row, col, num):
            board[row][col] = num
            
            if _fill_board(board):
                return True
            
            # 回溯
            board[row][col] = 0
    
    return False


def _find_empty_cell(board: List[List[int]]) -> Optional[Tuple[int, int]]:
    """
    寻找棋盘中的空格(值为0)
    
    Args:
        board: 数独棋盘
    
    Returns:
        Tuple[int, int] or None: 空格的行列坐标，没有空格返回None
    """
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                return (i, j)
    return None


def _is_valid(board: List[List[int]], row: int, col: int, num: int) -> bool:
    """
    检查在指定位置放置数字是否有效
    
    Args:
        board: 数独棋盘
        row: 行索引
        col: 列索引
        num: 要放置的数字
    
    Returns:
        bool: 是否有效
    """
    # 检查行
    for j in range(9):
        if board[row][j] == num:
            return False
    
    # 检查列
    for i in range(9):
        if board[i][col] == num:
            return False
    
    # 检查3x3宫格
    box_row, box_col = 3 * (row // 3), 3 * (col // 3)
    for i in range(box_row, box_row + 3):
        for j in range(box_col, box_col + 3):
            if board[i][j] == num:
                return False
    
    return True


def generate_puzzle(difficulty: str = 'medium') -> Tuple[List[List[int]], List[List[int]]]:
    """
    生成指定难度的数独谜题
    
    Args:
        difficulty: 难度级别 ('easy', 'medium', 'hard', 'expert')
    
    Returns:
        Tuple[List[List[int]], List[List[int]]]: (谜题, 解决方案)
    """
    # 难度对应的空格数量
    difficulty_levels = {
        'easy': 40,
        'medium': 50,
        'hard': 60,
        'expert': 65
    }
    
    # 获取难度对应的空格数量
    empty_cells = difficulty_levels.get(difficulty, 50)
    
    # 生成完整解决方案
    solution = generate_complete_board()
    
    # 创建谜题副本
    puzzle = [row[:] for row in solution]
    
    # 随机移除数字，创建谜题
    cells_to_remove = set()
    while len(cells_to_remove) < empty_cells:
        row = random.randint(0, 8)
        col = random.randint(0, 8)
        cells_to_remove.add((row, col))
    
    for row, col in cells_to_remove:
        puzzle[row][col] = 0
    
    return puzzle, solution


def validate_board(board: List[List[int]]) -> bool:
    """
    验证数独棋盘是否有效
    
    Args:
        board: 要验证的数独棋盘
    
    Returns:
        bool: 是否有效
    """
    # 验证行
    for row in board:
        if not _validate_group(row):
            return False
    
    # 验证列
    for j in range(9):
        col = [board[i][j] for i in range(9)]
        if not _validate_group(col):
            return False
    
    # 验证3x3宫格
    for box_row in range(0, 9, 3):
        for box_col in range(0, 9, 3):
            box = []
            for i in range(box_row, box_row + 3):
                for j in range(box_col, box_col + 3):
                    box.append(board[i][j])
            if not _validate_group(box):
                return False
    
    return True


def _validate_group(group: List[int]) -> bool:
    """
    验证一组数字(行、列或宫格)是否有效
    
    Args:
        group: 9个数字组成的列表
    
    Returns:
        bool: 是否有效
    """
    # 过滤掉空格(0)
    non_zero = [num for num in group if num != 0]
    # 检查是否有重复数字
    return len(non_zero) == len(set(non_zero))


def format_board_for_storage(board: List[List[int]]) -> str:
    """
    将棋盘转换为字符串格式以便存储
    
    Args:
        board: 数独棋盘
    
    Returns:
        str: 9x9=81个字符的字符串，空格用'.'表示
    """
    return ''.join(['.' if cell == 0 else str(cell) for row in board for cell in row])


def parse_board_from_storage(board_str: str) -> List[List[int]]:
    """
    从字符串格式解析棋盘
    
    Args:
        board_str: 81个字符的字符串
    
    Returns:
        List[List[int]]: 9x9的数独棋盘
    """
    if len(board_str) != 81:
        raise ValueError("Board string must be exactly 81 characters long")
    
    board = []
    for i in range(0, 81, 9):
        row = []
        for j in range(9):
            char = board_str[i + j]
            row.append(0 if char == '.' else int(char))
        board.append(row)
    
    return board