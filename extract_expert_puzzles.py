import sqlite3
import json
import os
from datetime import datetime

# 数据库路径
DB_PATH = r'C:\Users\jjiao\OneDrive\work2025\sudoku1012\date\sudoku_date.db'

# 输出JSON文件路径
OUTPUT_JSON_PATH = r'C:\Users\jjiao\OneDrive\work2025\sudoku1012\frontend\public\expert_puzzles.json'

def process_puzzle_string(puzzle_str):
    """处理谜题字符串，将'0'和'.'转换为0（表示空格），其他字符转换为整数"""
    # 确保字符串长度为81，截取或填充
    if len(puzzle_str) < 81:
        puzzle_str = puzzle_str.ljust(81, '0')
    elif len(puzzle_str) > 81:
        puzzle_str = puzzle_str[:81]
    
    # 转换为二维数组
    puzzle = []
    for i in range(9):
        row = []
        for j in range(9):
            char = puzzle_str[i * 9 + j]
            # 将'0'和'.'转换为0，其他数字字符转换为整数
            if char == '0' or char == '.':
                row.append(0)
            elif char.isdigit():
                row.append(int(char))
            else:
                # 对于非数字字符，默认设为0
                row.append(0)
        puzzle.append(row)
    
    return puzzle

def validate_puzzle(puzzle):
    """验证谜题是否有效"""
    # 计算非零数字数量
    non_zero_count = sum(1 for row in puzzle for cell in row if cell != 0)
    
    # 有效数独至少需要17个预填数字
    if non_zero_count < 17:
        return False, f"非零数字数量不足: {non_zero_count}"
    
    # 检查每行、每列、每个3x3宫是否有重复数字
    # 行检查
    for i in range(9):
        seen = set()
        for j in range(9):
            num = puzzle[i][j]
            if num != 0:
                if num in seen:
                    return False, f"行 {i+1} 有重复数字: {num}"
                seen.add(num)
    
    # 列检查
    for j in range(9):
        seen = set()
        for i in range(9):
            num = puzzle[i][j]
            if num != 0:
                if num in seen:
                    return False, f"列 {j+1} 有重复数字: {num}"
                seen.add(num)
    
    # 3x3宫检查
    for box_row in range(3):
        for box_col in range(3):
            seen = set()
            for i in range(3):
                for j in range(3):
                    num = puzzle[box_row*3 + i][box_col*3 + j]
                    if num != 0:
                        if num in seen:
                            return False, f"宫 [{box_row+1},{box_col+1}] 有重复数字: {num}"
                        seen.add(num)
    
    return True, "有效"

def extract_expert_puzzles():
    """从数据库提取专家级题目并转换为JSON格式"""
    try:
        # 创建输出目录（如果不存在）
        os.makedirs(os.path.dirname(OUTPUT_JSON_PATH), exist_ok=True)
        
        # 连接到数据库
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        print(f"正在从数据库 {DB_PATH} 提取专家级题目...")
        
        # 查询所有专家级难度的题目
        cursor.execute(
            "SELECT id, puzzle_data, solution, difficulty_level FROM questions WHERE difficulty_level = '专家'"
        )
        
        expert_puzzles = cursor.fetchall()
        total_puzzles = len(expert_puzzles)
        valid_puzzles = []
        invalid_puzzles = []
        
        print(f"数据库中的专家级题目总数: {total_puzzles}")
        print("\n开始处理题目...")
        
        # 逐个处理题目
        for index, puzzle in enumerate(expert_puzzles):
            puzzle_id = puzzle['id']
            puzzle_data = puzzle['puzzle_data']
            solution_data = puzzle['solution']
            
            # 处理谜题数据
            try:
                # 处理题目和答案
                processed_puzzle = process_puzzle_string(puzzle_data)
                processed_solution = process_puzzle_string(solution_data)
                
                # 验证谜题
                is_valid, validation_message = validate_puzzle(processed_puzzle)
                
                if is_valid:
                    # 构建题目对象
                    puzzle_obj = {
                        "id": puzzle_id,
                        "difficulty": "expert",
                        "puzzle": processed_puzzle,
                        "solution": processed_solution
                    }
                    valid_puzzles.append(puzzle_obj)
                else:
                    invalid_puzzles.append({
                        "id": puzzle_id,
                        "reason": validation_message
                    })
                
                # 打印进度
                if (index + 1) % 10 == 0 or (index + 1) == total_puzzles:
                    print(f"已处理 {index + 1}/{total_puzzles} 题目")
            
            except Exception as e:
                invalid_puzzles.append({
                    "id": puzzle_id,
                    "reason": f"处理错误: {str(e)}"
                })
        
        # 生成最终的JSON数据
        json_data = {
            "meta": {
                "generated_at": datetime.now().isoformat(),
                "total_extracted": total_puzzles,
                "total_valid": len(valid_puzzles),
                "total_invalid": len(invalid_puzzles)
            },
            "puzzles": valid_puzzles
        }
        
        # 保存到JSON文件
        with open(OUTPUT_JSON_PATH, 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=2)
        
        print("\n处理完成！")
        print(f"有效题目数量: {len(valid_puzzles)}")
        print(f"无效题目数量: {len(invalid_puzzles)}")
        print(f"JSON文件已保存到: {OUTPUT_JSON_PATH}")
        
        # 如果有无效题目，打印部分示例
        if invalid_puzzles:
            print("\n无效题目示例 (前5个):")
            for i, invalid in enumerate(invalid_puzzles[:5]):
                print(f"  {i+1}. ID: {invalid['id']}, 原因: {invalid['reason']}")
        
        return json_data
        
    except Exception as e:
        print(f"提取和处理题目时出错: {e}")
        import traceback
        traceback.print_exc()
        return None
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    extract_expert_puzzles()