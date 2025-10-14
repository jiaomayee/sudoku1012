import urllib.request
import json

def test_expert_puzzle_api():
    # 尝试多个可能的API路径
    possible_paths = [
        "http://localhost:5000/sudoku/puzzles/random/expert",
        "http://localhost:5000/puzzles/random/expert",
        "http://localhost:5000/api/v1/sudoku/puzzles/random/expert"
    ]
    
    print("测试专家级数独API...")
    
    for api_url in possible_paths:
        print(f"\n尝试路径: {api_url}")
        
        try:
            # 发送GET请求
            with urllib.request.urlopen(api_url, timeout=3) as response:
                # 检查响应状态码
                if response.status == 200:
                    print(f"✅ 成功连接到: {api_url}")
                    
                    # 解析JSON响应
                    data = json.loads(response.read().decode('utf-8'))
                    
                    print("\nAPI响应数据:")
                    # 尝试不同的ID字段名
                    puzzle_id = data.get('id') or data.get('puzzle_id')
                    print(f"ID: {puzzle_id}")
                    print(f"难度: {data.get('difficulty')}")
                    print(f"来源: {data.get('source', '未指定')}")
                    
                    # 获取puzzle数据
                    puzzle = data.get('puzzle')
                    if not puzzle:
                        print("错误: 响应中没有puzzle字段")
                        continue
                    
                    # 验证puzzle格式
                    if not isinstance(puzzle, list) or len(puzzle) != 9:
                        print(f"错误: puzzle格式不正确，应该是9x9的二维数组")
                        continue
                    
                    # 计算非零数字数量
                    non_zero_count = 0
                    print("\n数独谜题:")
                    for row_idx, row in enumerate(puzzle):
                        if not isinstance(row, list) or len(row) != 9:
                            print(f"错误: 第{row_idx}行不是9个元素")
                            continue
                        
                        # 打印这一行并计算非零数字
                        row_str = ' '.join(str(cell) if cell != 0 else '.' for cell in row)
                        print(f"{row_idx+1}: {row_str}")
                        non_zero_count += sum(1 for cell in row if cell != 0)
                    
                    # 检查solution字段
                    solution = data.get('solution')
                    solution_status = "存在" if solution else "缺失"
                    
                    print("\n分析结果:")
                    print(f"非零数字数量: {non_zero_count}")
                    print(f"是否满足数独规则: {'是' if non_zero_count >= 17 else '否'}")
                    print(f"Solution字段: {solution_status}")
                    
                    # 综合评估
                    if non_zero_count >= 17 and solution:
                        print("\n✅ 测试成功: 返回的专家级数独符合要求")
                    else:
                        print("\n❌ 测试失败: 返回的数据不符合要求")
                        if non_zero_count < 17:
                            print(f"   - 非零数字数量不足，需要至少17个，当前只有{non_zero_count}个")
                        if not solution:
                            print("   - 缺少solution字段")
                    
                    return  # 找到正确路径后退出
                    
        except urllib.error.HTTPError as e:
            print(f"❌ HTTP错误: {e.code} - {e.reason}")
        except urllib.error.URLError as e:
            print(f"❌ URL错误: {str(e)}")
        except Exception as e:
            print(f"❌ 测试过程中出错: {str(e)}")
    
    print("\n❌ 无法找到有效的API端点")

if __name__ == "__main__":
    test_expert_puzzle_api()