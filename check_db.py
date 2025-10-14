import sqlite3

# 连接到数据库
conn = sqlite3.connect(r'c:\Users\jjiao\OneDrive\work2025\sudoku1012\date\sudoku_date.db')
cursor = conn.cursor()

# 获取所有表名
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("数据库中的表:")
for table in tables:
    print(f"- {table[0]}")
    
    # 获取表结构
    cursor.execute(f"PRAGMA table_info({table[0]});")
    columns = cursor.fetchall()
    print(f"  表结构 {table[0]}:")
    for col in columns:
        print(f"  - {col[1]}: {col[2]}")
    
    # 显示前几行数据
    print(f"  前3行数据 {table[0]}:")
    try:
        cursor.execute(f"SELECT * FROM {table[0]} LIMIT 3;")
        rows = cursor.fetchall()
        for row in rows:
            print(f"  - {row}")
    except Exception as e:
        print(f"  无法查询数据: {e}")

# 关闭连接
conn.close()