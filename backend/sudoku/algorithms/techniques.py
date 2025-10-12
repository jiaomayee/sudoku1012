"""
数独技巧识别器模块

此模块负责识别数独谜题中可应用的各种求解技巧，并提供应用技巧的功能。
"""

from typing import List, Dict, Set, Tuple, Optional, Any
from .solver import generate_candidates


class SudokuTechnique:
    """
    数独技巧基类
    
    所有数独技巧都应继承此类并实现相应的方法。
    """
    def __init__(self):
        self.name = "基础技巧"
        self.difficulty = 1  # 1-5，难度递增
        self.description = "数独基础技巧"
    
    def detect(self, board: List[List[int]], candidates: List[List[Set[int]]]) -> List[Dict[str, Any]]:
        """
        在棋盘中检测可应用此技巧的位置
        
        Args:
            board: 数独棋盘
            candidates: 候选数列表
        
        Returns:
            List[Dict]: 可应用技巧的位置和相关信息列表
        """
        return []
    
    def apply(self, board: List[List[int]], detection_result: Dict[str, Any]) -> None:
        """
        应用技巧到棋盘
        
        Args:
            board: 数独棋盘
            detection_result: 检测结果，包含应用技巧所需的信息
        """
        pass
    
    def explain(self, detection_result: Dict[str, Any]) -> str:
        """
        生成技巧应用的解释
        
        Args:
            detection_result: 检测结果
        
        Returns:
            str: 解释文本
        """
        return "应用基础技巧"


class NakedSingleTechnique(SudokuTechnique):
    """
    唯一候选数技巧（Naked Single）
    
    当一个单元格只有一个候选数时，可以直接填入该数字。
    """
    def __init__(self):
        super().__init__()
        self.name = "唯一候选数"
        self.difficulty = 1
        self.description = "当一个单元格只有一个候选数时，可以直接填入该数字"
    
    def detect(self, board: List[List[int]], candidates: List[List[Set[int]]]) -> List[Dict[str, Any]]:
        """
        检测棋盘中所有只有一个候选数的单元格
        
        Args:
            board: 数独棋盘
            candidates: 候选数列表
        
        Returns:
            List[Dict]: 包含位置和候选数的字典列表
        """
        results = []
        
        for row in range(9):
            for col in range(9):
                if board[row][col] == 0 and len(candidates[row][col]) == 1:
                    results.append({
                        'row': row,
                        'col': col,
                        'value': next(iter(candidates[row][col])),
                        'type': 'naked_single'
                    })
        
        return results
    
    def apply(self, board: List[List[int]], detection_result: Dict[str, Any]) -> None:
        """
        将唯一候选数填入单元格
        
        Args:
            board: 数独棋盘
            detection_result: 检测结果
        """
        row = detection_result['row']
        col = detection_result['col']
        value = detection_result['value']
        board[row][col] = value
    
    def explain(self, detection_result: Dict[str, Any]) -> str:
        """
        生成唯一候选数技巧的解释
        
        Args:
            detection_result: 检测结果
        
        Returns:
            str: 解释文本
        """
        row = detection_result['row'] + 1  # 转换为1-based索引
        col = detection_result['col'] + 1
        value = detection_result['value']
        return f"唯一候选数：单元格({row},{col})只有候选数{value}，因此填入{value}"


class HiddenSingleTechnique(SudokuTechnique):
    """
    隐性唯一解法（Hidden Single）
    
    当一个数字在某一行、列或宫格中只能出现在一个单元格时，可以填入该数字。
    """
    def __init__(self):
        super().__init__()
        self.name = "隐性唯一"
        self.difficulty = 2
        self.description = "当一个数字在某一行、列或宫格中只能出现在一个单元格时，可以填入该数字"
    
    def detect(self, board: List[List[int]], candidates: List[List[Set[int]]]) -> List[Dict[str, Any]]:
        """
        检测行、列和宫格中的隐性唯一
        
        Args:
            board: 数独棋盘
            candidates: 候选数列表
        
        Returns:
            List[Dict]: 包含位置、值和类型的字典列表
        """
        results = []
        
        # 检查行中的隐性唯一
        for row in range(9):
            row_candidates = _find_hidden_singles_in_group(
                [(row, col) for col in range(9)], 
                board, 
                candidates
            )
            for col, value in row_candidates:
                results.append({
                    'row': row,
                    'col': col,
                    'value': value,
                    'type': 'hidden_single_row',
                    'group': f'行{row + 1}'
                })
        
        # 检查列中的隐性唯一
        for col in range(9):
            col_candidates = _find_hidden_singles_in_group(
                [(row, col) for row in range(9)], 
                board, 
                candidates
            )
            for row, value in col_candidates:
                results.append({
                    'row': row,
                    'col': col,
                    'value': value,
                    'type': 'hidden_single_col',
                    'group': f'列{col + 1}'
                })
        
        # 检查宫格中的隐性唯一
        for box_row in range(0, 9, 3):
            for box_col in range(0, 9, 3):
                box_cells = []
                for i in range(3):
                    for j in range(3):
                        box_cells.append((box_row + i, box_col + j))
                
                box_candidates = _find_hidden_singles_in_group(
                    box_cells, 
                    board, 
                    candidates
                )
                
                box_num = (box_row // 3) * 3 + (box_col // 3) + 1
                for row, value in box_candidates:
                    results.append({
                        'row': row,
                        'col': col,
                        'value': value,
                        'type': 'hidden_single_box',
                        'group': f'宫格{box_num}'
                    })
        
        return results
    
    def apply(self, board: List[List[int]], detection_result: Dict[str, Any]) -> None:
        """
        将隐性唯一数字填入单元格
        
        Args:
            board: 数独棋盘
            detection_result: 检测结果
        """
        row = detection_result['row']
        col = detection_result['col']
        value = detection_result['value']
        board[row][col] = value
    
    def explain(self, detection_result: Dict[str, Any]) -> str:
        """
        生成隐性唯一技巧的解释
        
        Args:
            detection_result: 检测结果
        
        Returns:
            str: 解释文本
        """
        row = detection_result['row'] + 1
        col = detection_result['col'] + 1
        value = detection_result['value']
        group = detection_result['group']
        return f"隐性唯一：在{group}中，数字{value}只能出现在单元格({row},{col})，因此填入{value}"


def _find_hidden_singles_in_group(cells: List[Tuple[int, int]], 
                                  board: List[List[int]], 
                                  candidates: List[List[Set[int]]]) -> List[Tuple[int, int]]:
    """
    在一组单元格中寻找隐性唯一数字
    
    Args:
        cells: 单元格坐标列表
        board: 数独棋盘
        candidates: 候选数列表
    
    Returns:
        List[Tuple]: (行, 值)的列表
    """
    hidden_singles = []
    
    # 统计每个数字在候选数中出现的次数
    num_positions = {}
    for num in range(1, 10):
        num_positions[num] = []
    
    for row, col in cells:
        if board[row][col] == 0:
            for num in candidates[row][col]:
                num_positions[num].append((row, col))
    
    # 查找只在一个位置出现的数字
    for num, positions in num_positions.items():
        if len(positions) == 1:
            row, col = positions[0]
            hidden_singles.append((row, col, num))
    
    return hidden_singles


class SudokuTechniqueManager:
    """
    数独技巧管理器
    
    管理所有可用的数独技巧，并提供检测和应用功能。
    """
    def __init__(self):
        self.techniques = [
            NakedSingleTechnique(),
            HiddenSingleTechnique()
            # 可以添加更多技巧...
        ]
    
    def detect_techniques(self, board: List[List[int]]) -> List[Dict[str, Any]]:
        """
        检测棋盘中可应用的所有技巧
        
        Args:
            board: 数独棋盘
        
        Returns:
            List[Dict]: 按难度排序的技巧应用列表
        """
        # 生成候选数
        candidates = generate_candidates(board)
        
        results = []
        
        # 检测每种技巧
        for technique in self.techniques:
            technique_results = technique.detect(board, candidates)
            for result in technique_results:
                result['technique'] = technique.name
                result['difficulty'] = technique.difficulty
                results.append(result)
        
        # 按难度排序
        results.sort(key=lambda x: x['difficulty'])
        
        return results
    
    def apply_technique(self, board: List[List[int]], technique_info: Dict[str, Any]) -> bool:
        """
        应用指定的技巧到棋盘
        
        Args:
            board: 数独棋盘
            technique_info: 技巧信息字典
        
        Returns:
            bool: 是否成功应用
        """
        # 查找对应的技巧对象
        technique_name = technique_info['technique']
        for technique in self.techniques:
            if technique.name == technique_name:
                try:
                    technique.apply(board, technique_info)
                    return True
                except Exception as e:
                    print(f"应用技巧失败: {e}")
                    return False
        
        return False
    
    def get_technique_explanation(self, technique_info: Dict[str, Any]) -> str:
        """
        获取技巧应用的解释
        
        Args:
            technique_info: 技巧信息字典
        
        Returns:
            str: 解释文本
        """
        technique_name = technique_info['technique']
        for technique in self.techniques:
            if technique.name == technique_name:
                return technique.explain(technique_info)
        
        return f"应用技巧: {technique_name}"
    
    def get_recommended_techniques(self, board: List[List[int]], max_difficulty: int = 5) -> List[Dict[str, Any]]:
        """
        获取推荐的技巧列表（基于难度限制）
        
        Args:
            board: 数独棋盘
            max_difficulty: 最大难度级别
        
        Returns:
            List[Dict]: 推荐的技巧列表
        """
        all_techniques = self.detect_techniques(board)
        
        # 过滤难度
        recommended = [t for t in all_techniques if t['difficulty'] <= max_difficulty]
        
        # 如果有多种难度的技巧，优先返回最简单的
        if recommended:
            min_diff = min(t['difficulty'] for t in recommended)
            return [t for t in recommended if t['difficulty'] == min_diff]
        
        return []