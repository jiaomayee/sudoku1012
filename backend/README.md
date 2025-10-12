# 数独学习应用后端服务

这是一个数独学习应用的后端服务，提供数独谜题生成、求解、技巧识别和用户进度跟踪等功能。

## 功能特性

- **数独谜题管理**：生成不同难度的数独谜题，支持从数据库获取随机谜题
- **数独求解**：使用回溯算法求解数独谜题
- **技巧识别**：识别当前数独状态可使用的求解技巧（如唯一候选数、隐性唯一等）
- **用户进度跟踪**：保存和恢复用户的游戏进度
- **技巧学习管理**：跟踪用户技巧学习情况和掌握程度
- **统计信息**：记录和提供用户游戏统计数据

## 技术栈

- **Python 3.8+**
- **Flask**：Web框架
- **SQLAlchemy**：ORM数据库工具
- **Flask-RESTful**：RESTful API开发
- **SQLite**：默认数据库（开发环境）
- **CORS**：跨域资源共享支持

## 项目结构

```
backend/
├── sudoku/                 # 主应用包
│   ├── __init__.py         # 包初始化文件
│   ├── app.py              # Flask应用程序主模块
│   ├── config.py           # 配置模块
│   ├── algorithms/         # 算法模块
│   │   ├── __init__.py
│   │   ├── generator.py    # 数独生成器
│   │   ├── solver.py       # 数独求解器
│   │   └── techniques.py   # 数独技巧识别
│   ├── database/           # 数据库模块
│   │   ├── __init__.py
│   │   ├── database.py     # 数据库连接配置
│   │   ├── sudoku_puzzle_dao.py  # 数独谜题数据访问
│   │   └── user_progress_dao.py  # 用户进度数据访问
│   ├── models/             # 数据模型模块
│   │   ├── __init__.py
│   │   ├── sudoku_puzzle.py     # 数独谜题模型
│   │   └── user_progress.py     # 用户进度模型
│   ├── api/                # API模块
│   │   ├── __init__.py
│   │   ├── sudoku_api.py   # 数独相关API
│   │   └── user_api.py     # 用户相关API
│   └── utils/              # 工具模块
│       ├── __init__.py
│       └── helpers.py      # 辅助函数
├── run.py                  # 应用程序入口
├── requirements.txt        # 依赖包列表
└── .env.example            # 环境变量配置示例
```

## 安装与部署

### 前提条件

- Python 3.8 或更高版本
- pip 包管理器

### 安装步骤

1. 克隆项目仓库

```bash
git clone <repository-url>
cd sudoku1012/backend
```

2. 创建并激活虚拟环境（推荐）

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. 安装依赖包

```bash
pip install -r requirements.txt
```

4. 配置环境变量

```bash
# 复制示例配置文件并根据需要修改
cp .env.example .env
```

编辑 `.env` 文件，设置必要的环境变量，特别是 `SECRET_KEY`。

5. 初始化数据库

```bash
# 使用命令行参数初始化数据库
python run.py --init-db
```

### 运行应用

```bash
# 开发模式运行（默认使用development配置）
python run.py

# 指定配置环境运行
python run.py --config development

# 在特定端口运行
python run.py --port 5001

# 启用调试模式
python run.py --debug
```

应用将在 http://localhost:5000 启动，可通过以下端点访问：
- 健康检查：http://localhost:5000/health
- API基础路径：http://localhost:5000/api/v1

## API文档

### 数独谜题相关API

- **生成谜题**：POST /api/v1/sudoku/puzzles/generate
- **获取随机谜题**：GET /api/v1/sudoku/puzzles/random/{difficulty}
- **获取特定谜题**：GET /api/v1/sudoku/puzzles/{puzzle_id}
- **求解谜题**：POST /api/v1/sudoku/solve
- **验证谜题**：POST /api/v1/sudoku/validate
- **获取候选数**：POST /api/v1/sudoku/candidates
- **识别技巧**：POST /api/v1/sudoku/techniques
- **获取谜题列表**：GET /api/v1/sudoku/puzzles
- **获取谜题统计**：GET /api/v1/sudoku/puzzles/stats

### 用户相关API

- **获取用户进度**：GET /api/v1/user/progress/{puzzle_id}
- **保存用户进度**：POST /api/v1/user/progress/{puzzle_id}
- **获取活跃进度**：GET /api/v1/user/progress/active
- **获取已完成谜题**：GET /api/v1/user/progress/completed
- **获取用户技巧学习情况**：GET /api/v1/user/techniques
- **更新技巧学习情况**：POST /api/v1/user/techniques/{technique_name}
- **增加技巧练习次数**：POST /api/v1/user/techniques/{technique_name}/practice
- **获取用户统计信息**：GET /api/v1/user/stats
- **删除用户进度**：DELETE /api/v1/user/progress/{puzzle_id}

## 开发说明

### 添加新的数独技巧

1. 在 `sudoku/algorithms/techniques.py` 中创建一个继承自 `SudokuTechnique` 的新类
2. 实现 `identify` 方法来检测技巧的应用场景
3. 在 `SudokuTechniqueManager` 类中注册新技巧

### 添加新的API端点

1. 在 `sudoku/api/` 目录下的适当文件中添加新的路由函数
2. 实现所需的业务逻辑
3. 使用 `jsonify` 返回标准化的JSON响应

### 测试

目前项目尚未包含测试用例，建议使用以下方式进行测试：

- 使用Postman或类似工具测试API端点
- 手动验证数独生成和求解功能
- 检查数据库操作是否按预期工作

## 注意事项

- 当前的用户认证是模拟实现的，仅用于演示目的。在生产环境中，应该实现适当的认证机制。
- 默认使用SQLite数据库，适合开发和小型部署。对于生产环境，建议使用PostgreSQL或MySQL。
- 请确保在生产环境中设置强密码和安全的环境变量，特别是SECRET_KEY。

## 许可证

[MIT License](LICENSE)