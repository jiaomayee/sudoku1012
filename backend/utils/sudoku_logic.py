import numpy as np
import random
from typing import List, Tuple, Optional, Dict, Any
import logging

logger = logging.getLogger(__name__)

def create_empty_board() -> List[List[int]]:
    """创建一个空的9x9数独板"""
    return [[0 for _ in range(9)] for _ in range(9)]

def is_valid_move(board: List[List[int]], row: int, col: int, num: int) -> bool:
    """
    检查在指定位置放置数字是否有效
    
    Args:
        board: 数独板
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
    
    # 检查3x3宫
    start_row, start_col = 3 * (row // 3), 3 * (col // 3)
    for i in range(3):
        for j in range(3):
            if board[start_row + i][start_col + j] == num:
                return False
    
    return True

def solve_sudoku(board: List[List[int]]) -> Optional[List[List[int]]]:
    """
    使用回溯法求解数独
    
    Args:
        board: 数独板，0表示空格
    
    Returns:
        求解后的数独板，如果无解返回None
    """
    # 深拷贝输入板
    board_copy = [row[:] for row in board]
    
    def solve() -> bool:
        # 找到一个空格
        for i in range(9):
            for j in range(9):
                if board_copy[i][j] == 0:
                    # 尝试放置1-9
                    for num in range(1, 10):
                        if is_valid_move(board_copy, i, j, num):
                            board_copy[i][j] = num
                            
                            # 递归求解
                            if solve():
                                return True
                            
                            # 回溯
                            board_copy[i][j] = 0
                    return False
        return True
    
    if solve():
        return board_copy
    return None

def has_unique_solution(board: List[List[int]]) -> bool:
    """
    检查数独是否有唯一解
    
    Args:
        board: 数独板
    
    Returns:
        bool: 是否有唯一解
    """
    solutions = []
    
    def backtrack(row: int, col: int, current_board: List[List[int]]):
        # 如果找到两个解，提前返回
        if len(solutions) >= 2:
            return
        
        # 找到下一个空格
        while row < 9 and current_board[row][col] != 0:
            col += 1
            if col == 9:
                col = 0
                row += 1
        
        # 所有格子都填满了，找到一个解
        if row == 9:
            solutions.append([r[:] for r in current_board])
            return
        
        # 尝试放置数字
        for num in range(1, 10):
            if is_valid_move(current_board, row, col, num):
                current_board[row][col] = num
                backtrack(row, col, current_board)
                current_board[row][col] = 0
    
    board_copy = [row[:] for row in board]
    backtrack(0, 0, board_copy)
    
    return len(solutions) == 1

def generate_complete_sudoku() -> List[List[int]]:
    """
    生成一个完整的、有效的数独解
    
    Returns:
        完整的数独板
    """
    board = create_empty_board()
    
    # 填充对角线的3x3宫
    for box in range(3):
        nums = list(range(1, 10))
        random.shuffle(nums)
        for i in range(3):
            for j in range(3):
                board[3*box + i][3*box + j] = nums[3*i + j]
    
    # 使用回溯法填充剩余格子
    def fill_remaining(row: int, col: int) -> bool:
        if row == 8 and col == 9:
            return True
        
        if col == 9:
            row += 1
            col = 0
        
        # 如果格子已填充，继续下一个
        if board[row][col] != 0:
            return fill_remaining(row, col + 1)
        
        # 尝试放置数字
        nums = list(range(1, 10))
        random.shuffle(nums)
        
        for num in nums:
            if is_valid_move(board, row, col, num):
                board[row][col] = num
                if fill_remaining(row, col + 1):
                    return True
                board[row][col] = 0
        
        return False
    
    fill_remaining(0, 0)
    return board

def generate_sudoku_puzzle(difficulty: str = "medium") -> Tuple[List[List[int]], List[List[int]]]:
    """
    生成数独谜题
    
    Args:
        difficulty: 难度级别 (easy, medium, hard, expert)
    
    Returns:
        (谜题, 解决方案) 的元组
    """
    # 根据难度确定要移除的数字数量
    difficulty_levels = {
        "easy": 40,
        "medium": 50,
        "hard": 55,
        "expert": 60
    }
    
    cells_to_remove = difficulty_levels.get(difficulty, 50)
    
    # 生成完整的数独解
    solution = generate_complete_sudoku()
    
    # 深拷贝作为谜题
    puzzle = [row[:] for row in solution]
    
    # 移除数字
    cells = [(i, j) for i in range(9) for j in range(9)]
    random.shuffle(cells)
    
    removed = 0
    for i, j in cells:
        if removed >= cells_to_remove:
            break
        
        # 保存当前值
        temp = puzzle[i][j]
        puzzle[i][j] = 0
        
        # 检查是否还有唯一解
        if not has_unique_solution(puzzle):
            # 如果没有唯一解，恢复值
            puzzle[i][j] = temp
        else:
            removed += 1
    
    return puzzle, solution

def validate_sudoku(board: List[List[int]]) -> Tuple[bool, List[str]]:
    """
    验证数独板是否有效
    
    Args:
        board: 数独板
    
    Returns:
        (是否有效, 错误列表) 的元组
    """
    errors = []
    
    # 检查行
    for i in range(9):
        seen = set()
        for j in range(9):
            num = board[i][j]
            if num != 0:
                if num in seen:
                    errors.append(f"行 {i+1} 中有重复数字 {num}")
                else:
                    seen.add(num)
    
    # 检查列
    for j in range(9):
        seen = set()
        for i in range(9):
            num = board[i][j]
            if num != 0:
                if num in seen:
                    errors.append(f"列 {j+1} 中有重复数字 {num}")
                else:
                    seen.add(num)
    
    # 检查3x3宫
    for box_row in range(3):
        for box_col in range(3):
            seen = set()
            for i in range(3):
                for j in range(3):
                    row = 3 * box_row + i
                    col = 3 * box_col + j
                    num = board[row][col]
                    if num != 0:
                        if num in seen:
                            errors.append(f"宫 ({box_row+1}, {box_col+1}) 中有重复数字 {num}")
                        else:
                            seen.add(num)
    
    return len(errors) == 0, errors

def get_possible_numbers(board: List[List[int]], row: int, col: int) -> List[int]:
    """
    获取单元格可能的数字
    
    Args:
        board: 数独板
        row: 行索引
        col: 列索引
    
    Returns:
        可能的数字列表
    """
    possible = []
    for num in range(1, 10):
        if is_valid_move(board, row, col, num):
            possible.append(num)
    return possible

def check_puzzle_completion(board: List[List[int]]) -> bool:
    """
    检查数独谜题是否已完成
    
    Args:
        board: 数独板
    
    Returns:
        bool: 是否已完成
    """
    # 检查是否有空格
    for row in board:
        if 0 in row:
            return False
    
    # 检查是否有效
    valid, _ = validate_sudoku(board)
    return valid

def rate_difficulty(puzzle: List[List[int]]) -> Tuple[int, str, Dict[str, int]]:
    """
    评估数独谜题的难度
    
    Args:
        puzzle: 数独谜题
    
    Returns:
        (难度分数, 难度级别, 所需技巧) 的元组
    """
    # 计算空格数量
    empty_cells = sum(row.count(0) for row in puzzle)
    
    # 计算每个空格的可能数字数量
    total_candidates = 0
    min_candidates = 9
    
    for i in range(9):
        for j in range(9):
            if puzzle[i][j] == 0:
                candidates = len(get_possible_numbers(puzzle, i, j))
                total_candidates += candidates
                min_candidates = min(min_candidates, candidates)
    
    # 计算平均候选数
    avg_candidates = total_candidates / empty_cells if empty_cells > 0 else 0
    
    # 计算难度分数
    # 空格越多，平均候选数越少，难度越高
    score = 0
    if empty_cells > 50:
        score += 40
    elif empty_cells > 40:
        score += 20
    elif empty_cells > 30:
        score += 10
    
    if avg_candidates < 2:
        score += 50
    elif avg_candidates < 3:
        score += 30
    elif avg_candidates < 4:
        score += 10
    
    # 检查是否需要高级技巧
    steps = detect_required_techniques(puzzle)
    
    # 根据所需技巧调整分数
    if steps["x_wing"] > 0 or steps["swordfish"] > 0:
        score += 30
    if steps["xy_wing"] > 0:
        score += 20
    if steps["naked_triplet"] > 0 or steps["hidden_triplet"] > 0:
        score += 15
    if steps["naked_pair"] > 0 or steps["hidden_pair"] > 0:
        score += 10
    
    # 确定难度级别
    if score >= 80:
        difficulty = "expert"
    elif score >= 60:
        difficulty = "hard"
    elif score >= 30:
        difficulty = "medium"
    else:
        difficulty = "easy"
    
    return score, difficulty, steps

def detect_required_techniques(puzzle: List[List[int]]) -> Dict[str, int]:
    """
    检测解决谜题所需的技巧
    
    Args:
        puzzle: 数独谜题
    
    Returns:
        技巧使用次数的字典
    """
    # 初始化技巧计数
    steps = {
        "single_candidate": 0,
        "hidden_single": 0,
        "naked_pair": 0,
        "hidden_pair": 0,
        "naked_triplet": 0,
        "hidden_triplet": 0,
        "x_wing": 0,
        "swordfish": 0,
        "xy_wing": 0,
        "forcing_chain": 0
    }
    
    # 这里简化实现，实际应该实现每个技巧的检测
    # 计算每个单元格的候选数
    candidates = {}
    for i in range(9):
        for j in range(9):
            if puzzle[i][j] == 0:
                candidates[(i, j)] = get_possible_numbers(puzzle, i, j)
    
    # 检测唯一候选数
    for cell, nums in candidates.items():
        if len(nums) == 1:
            steps["single_candidate"] += 1
    
    # 其他技巧的检测可以在这里实现
    
    return steps

def apply_sudoku_technique(board: List[List[int]]) -> Dict[str, Any]:
    """
    应用数独技巧并返回提示
    
    Args:
        board: 数独板
    
    Returns:
        技巧提示信息
    """
    # 尝试找到唯一候选数
    for i in range(9):
        for j in range(9):
            if board[i][j] == 0:
                candidates = get_possible_numbers(board, i, j)
                if len(candidates) == 1:
                    return {
                        "type": "single_candidate",
                        "name": "唯一候选数",
                        "description": f"单元格 ({i+1}, {j+1}) 只能填入 {candidates[0]}",
                        "row": i,
                        "col": j,
                        "value": candidates[0],
                        "explanation": "该单元格所在的行、列或宫中已经包含了1-9中的8个数字，只剩下这个数字可以填入。"
                    }
    
    # 尝试找到隐性唯一
    # 检查每一行
    for i in range(9):
        for num in range(1, 10):
            if num not in board[i]:
                # 检查在该行中，这个数字可以放在哪些位置
                possible_cols = []
                for j in range(9):
                    if board[i][j] == 0 and is_valid_move(board, i, j, num):
                        possible_cols.append(j)
                
                if len(possible_cols) == 1:
                    j = possible_cols[0]
                    return {
                        "type": "hidden_single",
                        "name": "隐性唯一",
                        "description": f"数字 {num} 在第 {i+1} 行中只能放在位置 ({i+1}, {j+1})",
                        "row": i,
                        "col": j,
                        "value": num,
                        "explanation": f"在第 {i+1} 行中，数字 {num} 不能放在其他任何位置，所以必须放在这里。"
                    }
    
    # 如果没有找到简单的技巧，返回一个通用提示
    return {
        "type": "general",
        "name": "检查候选数",
        "description": "尝试为每个空格找出可能的数字",
        "explanation": "列出每个空格可以填入的数字，然后寻找数对、三链数等模式。",
        "example": "查看同一行、列或宫中是否有两个单元格只包含相同的两个数字，这可能形成数对。"
    }

def find_conflicts(board: List[List[int]]) -> List[Tuple[int, int]]:
    """
    找出数独板中的冲突单元格
    
    Args:
        board: 数独板
    
    Returns:
        冲突单元格的坐标列表
    """
    conflicts = []
    
    # 检查行冲突
    for i in range(9):
        seen = {}
        for j in range(9):
            num = board[i][j]
            if num != 0:
                if num in seen:
                    conflicts.append((i, j))
                    conflicts.append((i, seen[num]))
                else:
                    seen[num] = j
    
    # 检查列冲突
    for j in range(9):
        seen = {}
        for i in range(9):
            num = board[i][j]
            if num != 0:
                if num in seen:
                    conflicts.append((i, j))
                    conflicts.append((seen[num], j))
                else:
                    seen[num] = i
    
    # 检查宫冲突
    for box_row in range(3):
        for box_col in range(3):
            seen = {}
            for i in range(3):
                for j in range(3):
                    row = 3 * box_row + i
                    col = 3 * box_col + j
                    num = board[row][col]
                    if num != 0:
                        if num in seen:
                            conflicts.append((row, col))
                            conflicts.append(seen[num])
                        else:
                            seen[num] = (row, col)
    
    # 去重
    unique_conflicts = []
    for conflict in conflicts:
        if conflict not in unique_conflicts:
            unique_conflicts.append(conflict)
    
    return unique_conflicts

def generate_random_puzzle_with_seed(seed: int, difficulty: str = "medium") -> Tuple[List[List[int]], List[List[int]]]:
    """
    使用指定的随机种子生成数独谜题
    
    Args:
        seed: 随机种子
        difficulty: 难度级别
    
    Returns:
        (谜题, 解决方案) 的元组
    """
    random.seed(seed)
    return generate_sudoku_puzzle(difficulty)