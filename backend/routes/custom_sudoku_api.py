from fastapi import APIRouter, HTTPException, Path
import sqlite3
import os
import logging
import uuid
from typing import Dict, Any, List

# 题库数据库路径
PUZZLE_DB_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "date", "sudoku_date.db")

# 创建路由
router = APIRouter()
logger = logging.getLogger(__name__)

# 难度映射
difficulty_mapping = {
    "easy": "简单",
    "medium": "中等",
    "hard": "困难",
    "expert": "专家"
}

def str_to_grid(sudoku_str: str) -> List[List[int]]:
    """
    将字符串格式的数独转换为9x9二维数组
    处理'0'或'.'作为空格
    """
    grid = []
    for i in range(9):
        row = []
        for j in range(9):
            try:
                # 确保索引不越界
                index = i * 9 + j
                if index < len(sudoku_str):
                    char = sudoku_str[index]
                    # 处理空格字符
                    if char == '0' or char == '.':
                        value = 0
                    else:
                        try:
                            value = int(char)
                        except ValueError:
                            value = 0
                else:
                    value = 0
                row.append(value)
            except Exception:
                row.append(0)
        grid.append(row)
    return grid

def count_non_zero(grid: List[List[int]]) -> int:
    """
    计算数独谜题中的非零数字数量
    """
    count = 0
    for row in grid:
        for cell in row:
            if cell != 0:
                count += 1
    return count

@router.get("/sudoku/puzzles/random/{difficulty}", response_model=Dict[str, Any])
async def get_random_puzzle_by_difficulty(
    difficulty: str = Path(..., regex="^(easy|medium|hard|expert)$")
) -> Dict[str, Any]:
    """
    从题库数据库获取指定难度的随机数独谜题
    
    - **difficulty**: 难度级别 (easy, medium, hard, expert)
    """
    try:
        # 验证数据库文件是否存在
        if not os.path.exists(PUZZLE_DB_PATH):
            raise HTTPException(status_code=500, detail="题库数据库文件不存在")
        
        # 连接到题库数据库
        conn = sqlite3.connect(PUZZLE_DB_PATH)
        conn.row_factory = sqlite3.Row  # 允许通过列名访问数据
        cursor = conn.cursor()
        
        # 查询指定难度的随机题目
        # 使用中文难度名称查询
        chinese_difficulty = difficulty_mapping.get(difficulty, "专家")
        cursor.execute(
            "SELECT puzzle_data, solution FROM questions WHERE difficulty_level = ? ORDER BY RANDOM() LIMIT 1",
            (chinese_difficulty,)
        )
        
        result = cursor.fetchone()
        conn.close()
        
        if not result:
            raise HTTPException(status_code=404, detail=f"未找到{chinese_difficulty}难度的题目")
        
        # 解析谜题和答案字符串
        puzzle_str = result["puzzle_data"]
        solution_str = result["solution"]
        
        # 将字符串转换为二维数组
        puzzle = str_to_grid(puzzle_str)
        solution = str_to_grid(solution_str)
        
        # 计算非零数字数量
        non_zero_count = count_non_zero(puzzle)
        
        # 生成唯一ID
        puzzle_id = str(uuid.uuid4())
        
        # 记录日志
        logger.info(f"从题库获取{difficulty}难度题目成功，非零数字: {non_zero_count}")
        
        # 返回符合前端要求的数据格式
        return {
            "id": puzzle_id,
            "puzzle": puzzle,
            "solution": solution,
            "difficulty": difficulty,
            "non_zero_count": non_zero_count
        }
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"获取随机数独谜题失败: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"获取数独谜题失败: {str(e)}")