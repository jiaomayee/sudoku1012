import requests
import json

def test_sudoku_api(difficulty="expert"):
    """
    测试数独谜题API
    
    Args:
        difficulty: 难度级别 (easy, medium, hard, expert)
    """
    url = f"http://localhost:8000/sudoku/puzzles/random/{difficulty}"
    print(f"测试API: {url}")
    
    try:
        response = requests.get(url)
        status_code = response.status_code
        print(f"响应状态码: {status_code}")
        
        if status_code == 200:
            data = response.json()
            print(f"响应数据类型: {type(data)}")
            print(f"响应数据键: {list(data.keys())}")
            
            # 检查必需字段
            required_fields = ['puzzle', 'solution', 'difficulty']
            for field in required_fields:
                if field in data:
                    print(f"✓ 包含必需字段: {field}")
                else:
                    print(f"✗ 缺少必需字段: {field}")
            
            # 验证puzzle格式
            if 'puzzle' in data:
                puzzle = data['puzzle']
                print(f"Puzzle类型: {type(puzzle)}")
                print(f"Puzzle长度: {len(puzzle)}")
                if isinstance(puzzle, list) and len(puzzle) == 9:
                    print(f"Puzzle每行长度: {[len(row) for row in puzzle]}")
                    
                    # 计算非零数字数量
                    non_zero_count = 0
                    for row in puzzle:
                        non_zero_count += sum(1 for cell in row if cell != 0)
                    print(f"Puzzle非零数字数量: {non_zero_count}")
                    print(f"是否满足专家级要求(≥17): {non_zero_count >= 17}")
            
            # 验证solution格式
            if 'solution' in data:
                solution = data['solution']
                print(f"Solution类型: {type(solution)}")
                print(f"Solution长度: {len(solution)}")
                if isinstance(solution, list) and len(solution) == 9:
                    print(f"Solution每行长度: {[len(row) for row in solution]}")
            
            # 显示前几行数据作为示例
            if 'puzzle' in data and isinstance(data['puzzle'], list):
                print("\nPuzzle示例:")
                for i in range(min(3, len(data['puzzle']))):
                    print(data['puzzle'][i])
            
            # 保存完整响应到文件以便分析
            with open(f"sudoku_{difficulty}_response.json", "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            print(f"\n完整响应已保存到: sudoku_{difficulty}_response.json")
            
        else:
            print(f"错误响应: {response.text}")
            
    except Exception as e:
        print(f"测试过程中发生错误: {str(e)}")

if __name__ == "__main__":
    print("===== 测试数独谜题API =====\n")
    
    # 测试专家级难度
    print("\n===== 测试专家级难度 =====\n")
    test_sudoku_api("expert")
    
    # 测试其他难度
    # print("\n===== 测试简单难度 =====\n")
    # test_sudoku_api("easy")
    
    # print("\n===== 测试中等难度 =====\n")
    # test_sudoku_api("medium")
    
    # print("\n===== 测试困难难度 =====\n")
    # test_sudoku_api("hard")