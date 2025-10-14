import sqlite3
import os

# 数据库路径
DB_PATH = r'C:\Users\jjiao\OneDrive\work2025\sudoku1012\date\sudoku_date.db'

def analyze_expert_puzzles():
    try:
        # 连接到数据库
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        # 查询所有专家级难度的题目
        cursor.execute(
            "SELECT id, puzzle_data, solution, difficulty_level FROM questions WHERE difficulty_level = '专家'"
        )
        
        expert_puzzles = cursor.fetchall()
        total_puzzles = len(expert_puzzles)
        valid_puzzles = 0
        invalid_puzzles = 0
        puzzles_with_less_17_nonzero = 0
        
        print(f"数据库中的专家级题目总数: {total_puzzles}")
        print("\n详细分析结果:")
        print("-" * 80)
        print(f"{'ID':<5} | {'puzzle_data长度':<15} | {'非零数字数量':<15} | {'是否有效':<10}")
        print("-" * 80)
        
        # 逐个分析题目
        for puzzle in expert_puzzles:
            puzzle_id = puzzle['id']
            puzzle_data = puzzle['puzzle_data']
            solution = puzzle['solution']
            
            # 计算非零数字数量
            non_zero_count = sum(1 for c in puzzle_data if c != '0' and c.isdigit())
            
            # 验证有效性
            is_valid = len(puzzle_data) >= 81 and non_zero_count >= 17
            
            # 统计
            if is_valid:
                valid_puzzles += 1
            else:
                invalid_puzzles += 1
                if non_zero_count < 17:
                    puzzles_with_less_17_nonzero += 1
            
            # 打印信息（每10条打印一次，避免输出过多）
            if puzzle_id % 10 == 0:
                print(f"{puzzle_id:<5} | {len(puzzle_data):<15} | {non_zero_count:<15} | {'有效' if is_valid else '无效'}")
            
            # 如果找到无效题目，详细打印几个作为示例
            if not is_valid and invalid_puzzles <= 5:
                print(f"\n无效题目示例 (ID: {puzzle_id}):")
                print(f"  puzzle_data: {puzzle_data}")
                print(f"  solution: {solution}")
                print(f"  长度: {len(puzzle_data)}, 非零数字: {non_zero_count}")
        
        # 打印统计结果
        print("-" * 80)
        print(f"有效题目数量: {valid_puzzles}")
        print(f"无效题目数量: {invalid_puzzles}")
        print(f"非零数字少于17个的题目: {puzzles_with_less_17_nonzero}")
        
        # 分析数据提取逻辑可能的问题
        print("\n可能的问题分析:")
        if invalid_puzzles > 0:
            print("1. 数据库中确实存在不符合规范的题目数据")
        else:
            print("1. 数据库中的题目数据都符合规范")
        
        print("2. 可能的数据提取问题:")
        print("   - 字符串转二维数组时的索引计算错误")
        print("   - 数据类型转换错误")
        print("   - 字符串截断或编码问题")
        print("   - 随机抽取逻辑导致总是抽到特定的问题")
        
    except Exception as e:
        print(f"分析题库数据时出错: {e}")
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    analyze_expert_puzzles()