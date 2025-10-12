"""
数独求解器模块

此模块负责使用回溯算法求解数独谜题，并提供候选数生成功能。
"""

from typing import List, Tuple, Optional, Set


def solve_sudoku(board: List[List[int]]) -> bool:
    """
    使用回溯算法求解数独谜题
    
    Args:
        board: 数独棋盘，0表示空格
    
    Returns:
        bool: 是否求解成功
    """
    # 寻找空格
    empty_cell = _find_empty_cell(board)
    if not empty_cell:
        # 没有空格，求解完成
        return True
    
    row, col = empty_cell
    
    # 尝试填入1-9
    for num in range(1, 10):
        if _is_valid_move(board, row, col, num):
            board[row][col] = num
            
            if solve_sudoku(board):
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


def _is_valid_move(board: List[List[int]], row: int, col: int, num: int) -> bool:
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


def generate_candidates(board: List[List[int]]) -> List[List[Set[int]]]:
    """
    为棋盘中的每个空格生成候选数
    
    Args:
        board: 数独棋盘
    
    Returns:
        List[List[Set[int]]]: 每个单元格的候选数集合
    """
    candidates = [[set() for _ in range(9)] for _ in range(9)]
    
    for row in range(9):
        for col in range(9):
            if board[row][col] == 0:
                # 为空格生成候选数
                candidates[row][col] = _find_candidates_for_cell(board, row, col)
    
    return candidates


def _find_candidates_for_cell(board: List[List[int]], row: int, col: int) -> Set[int]:
    """
    为指定的单元格寻找所有可能的候选数
    
    Args:
        board: 数独棋盘
        row: 行索引
        col: 列索引
    
    Returns:
        Set[int]: 候选数集合
    """
    candidates = set(range(1, 10))
    
    # 移除行中已存在的数字
    for j in range(9):
        if board[row][j] != 0 and board[row][j] in candidates:
            candidates.remove(board[row][j])
    
    # 移除列中已存在的数字
    for i in range(9):
        if board[i][col] != 0 and board[i][col] in candidates:
            candidates.remove(board[i][col])
    
    # 移除宫格中已存在的数字
    box_row, box_col = 3 * (row // 3), 3 * (col // 3)
    for i in range(box_row, box_row + 3):
        for j in range(box_col, box_col + 3):
            if board[i][j] != 0 and board[i][j] in candidates:
                candidates.remove(board[i][j])
    
    return candidates


def count_solutions(board: List[List[int]]) -> int:
    """
    计算数独谜题的解的数量
    
    Args:
        board: 数独棋盘
    
    Returns:
        int: 解的数量
    """
    # 创建副本以避免修改原棋盘
    board_copy = [row[:] for row in board]
    return _count_solutions_helper(board_copy)


def _count_solutions_helper(board: List[List[int]]) -> int:
    """
    计算数独解数量的辅助函数
    
    Args:
        board: 数独棋盘
    
    Returns:
        int: 解的数量
    """
    empty_cell = _find_empty_cell(board)
    if not empty_cell:
        # 找到一个解
        return 1
    
    row, col = empty_cell
    count = 0
    
    for num in range(1, 10):
        if _is_valid_move(board, row, col, num):
            board[row][col] = num
            count += _count_solutions_helper(board)
            board[row][col] = 0
            
            # 如果已经找到多个解，可以提前返回
            if count > 1:
                return count
    
    return count


def is_board_solvable(board: List[List[int]]) -> bool:
    """
    检查数独谜题是否有解
    
    Args:
        board: 数独棋盘
    
    Returns:
        bool: 是否有解
    """
    return count_solutions(board) > 0


def is_board_unique(board: List[List[int]]) -> bool:
    """
    检查数独谜题是否有唯一解
    
    Args:
        board: 数独棋盘
    
    Returns:
        bool: 是否有唯一解
    """
    return count_solutions(board) == 1