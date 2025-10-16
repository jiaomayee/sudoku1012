import sqlite3
import json
import os

# 数据库路径
DB_PATH = r'C:\Users\jjiao\OneDrive\work2025\sudoku1012\date\sudoku_date.db'
# 输出 JSON 文件路径
OUTPUT_PATH = r'C:\Users\jjiao\OneDrive\work2025\sudoku1012\frontend\public\expert_puzzles.json'

def transform_puzzle_data(puzzle_string):
    """
    转换谜题数据，将 '0' 替换为 '.'，确保长度为 81 个字符
    """
    # 确保字符串长度为 81，如果不够则填充
    if len(puzzle_string) < 81:
        puzzle_string = puzzle_string.ljust(81, '0')
    elif len(puzzle_string) > 81:
        puzzle_string = puzzle_string[:81]
    
    # 将 '0' 替换为 '.'（前端表示空白格子）
    return puzzle_string.replace('0', '.')

def extract_expert_puzzles_to_json():
    try:
        # 检查数据库文件是否存在
        if not os.path.exists(DB_PATH):
            print(f"错误: 数据库文件不存在 - {DB_PATH}")
            return
        
        # 连接到数据库
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        # 查询所有专家级难度的题目
        cursor.execute(
            "SELECT id, puzzle_data, solution, difficulty_level FROM questions WHERE difficulty_level = '专家'"
        )
        
        expert_puzzles = cursor.fetchall()
        print(f"从数据库中找到 {len(expert_puzzles)} 个专家级题目")
        
        # 转换为前端需要的格式
        json_data = []
        for puzzle in expert_puzzles:
            puzzle_id = puzzle['id']
            puzzle_data = puzzle['puzzle_data']
            solution = puzzle['solution']
            
            # 转换谜题和解答数据
            transformed_puzzle = transform_puzzle_data(puzzle_data)
            # 解答保持数字格式，不转换为 '.'
            transformed_solution = solution[:81] if len(solution) > 81 else solution.ljust(81, '0')
            
            # 计算非零数字数量（验证题目质量）
            non_zero_count = sum(1 for c in transformed_puzzle if c != '.')
            
            # 只包含有效题目（至少17个非零数字）
            if non_zero_count >= 17:
                json_data.append({
                    "id": puzzle_id,
                    "puzzle": transformed_puzzle,
                    "solution": transformed_solution
                })
            else:
                print(f"跳过无效题目 ID {puzzle_id}: 只有 {non_zero_count} 个非零数字")
        
        # 确保至少有一些题目
        if not json_data:
            print("错误: 没有找到有效的专家级题目")
            return
        
        # 确保输出目录存在
        output_dir = os.path.dirname(OUTPUT_PATH)
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        # 写入 JSON 文件（包含puzzles外层包裹）
        with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
            json.dump({"puzzles": json_data}, f, ensure_ascii=False, indent=2)
        
        print(f"成功写入 {len(json_data)} 个有效专家级题目到 {OUTPUT_PATH}")
        print(f"文件大小: {os.path.getsize(OUTPUT_PATH)} 字节")
        
    except sqlite3.Error as e:
        print(f"数据库错误: {e}")
    except Exception as e:
        print(f"处理过程中出错: {e}")
    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == "__main__":
    print("开始从数据库提取专家级题目...")
    extract_expert_puzzles_to_json()
    print("提取完成")