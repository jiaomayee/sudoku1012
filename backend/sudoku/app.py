"""
Flask应用程序主模块

此模块初始化Flask应用程序，设置数据库连接，注册API蓝图等。
"""

import os
import logging
from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from typing import Dict, Any, Optional

# 导入配置和数据库
from .config import config, get_config
from .database.database import db, init_db
from .api import sudoku_bp, user_bp


# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def create_app(config_name: Optional[str] = None) -> Flask:
    """
    创建Flask应用程序实例
    
    Args:
        config_name: 配置名称
    
    Returns:
        Flask: Flask应用程序实例
    """
    # 创建应用程序实例
    app = Flask(__name__)
    
    # 加载配置
    app_config = get_config(config_name)
    app.config.from_object(app_config)
    
    # 初始化数据库
    init_db(app)
    
    # 初始化数据库迁移
    migrate = Migrate(app, db)
    
    # 配置CORS
    cors_origins = app.config.get('CORS_ORIGINS', ['*'])
    CORS(app, origins=cors_origins, supports_credentials=True)
    
    # 注册蓝图
    api_prefix = app.config.get('API_PREFIX', '/api/v1')
    app.register_blueprint(sudoku_bp, url_prefix=f"{api_prefix}/sudoku")
    app.register_blueprint(user_bp, url_prefix=f"{api_prefix}/user")
    
    # 健康检查路由
    @app.route('/health')
    def health_check() -> Dict[str, Any]:
        """
        健康检查端点
        
        Returns:
            Dict: 健康状态信息
        """
        return {
            'status': 'healthy',
            'service': 'sudoku-learning-app',
            'version': '1.0.0'
        }
    
    # 错误处理
    @app.errorhandler(404)
    def not_found_error(error: Exception) -> Dict[str, Any]:
        """
        404错误处理
        
        Args:
            error: 错误对象
        
        Returns:
            Dict: 错误响应
        """
        return {
            'error': 'Not found',
            'message': 'The requested resource was not found'
        }, 404
    
    @app.errorhandler(500)
    def internal_error(error: Exception) -> Dict[str, Any]:
        """
        500错误处理
        
        Args:
            error: 错误对象
        
        Returns:
            Dict: 错误响应
        """
        logger.error(f"Internal server error: {str(error)}")
        return {
            'error': 'Internal server error',
            'message': 'An unexpected error occurred'
        }, 500
    
    # 应用程序初始化钩子
    @app.before_first_request
    def before_first_request() -> None:
        """
        应用程序首次请求前执行的钩子
        """
        # 创建数据库表
        with app.app_context():
            try:
                db.create_all()
                logger.info("Database tables created successfully")
            except Exception as e:
                logger.error(f"Error creating database tables: {str(e)}")
                raise
        
        # 初始化应用程序数据（如果需要）
        initialize_app_data(app)
    
    # 应用程序上下文处理器
    @app.context_processor
    def inject_app_info() -> Dict[str, str]:
        """
        注入应用程序信息到模板上下文中
        
        Returns:
            Dict: 应用程序信息
        """
        return {
            'app_name': 'Sudoku Learning App',
            'app_version': '1.0.0'
        }
    
    logger.info(f"Flask app created with config: {config_name or 'default'}")
    return app


def initialize_app_data(app: Flask) -> None:
    """
    初始化应用程序数据
    
    Args:
        app: Flask应用程序实例
    """
    from .database.sudoku_puzzle_dao import SudokuPuzzleDAO
    from .algorithms.generator import generate_puzzle
    
    try:
        with app.app_context():
            # 检查数据库中是否已有谜题
            from .models.sudoku_puzzle import SudokuPuzzle
            puzzle_count = SudokuPuzzle.query.count()
            
            if puzzle_count == 0:
                logger.info("No puzzles found in database, generating initial puzzles...")
                
                # 生成不同难度的谜题
                difficulties = ['easy', 'medium', 'hard', 'expert']
                puzzles_per_difficulty = 10
                
                for difficulty in difficulties:
                    logger.info(f"Generating {puzzles_per_difficulty} {difficulty} puzzles...")
                    for i in range(puzzles_per_difficulty):
                        puzzle, solution = generate_puzzle(difficulty=difficulty)
                        SudokuPuzzleDAO.create_puzzle(
                            db=db.session,
                            puzzle=puzzle,
                            solution=solution,
                            difficulty=difficulty,
                            source='auto-generated'
                        )
                
                logger.info("Initial puzzles generated successfully")
            else:
                logger.info(f"Found {puzzle_count} puzzles in database")
    
    except Exception as e:
        logger.error(f"Error initializing app data: {str(e)}")


# 命令行入口
if __name__ == '__main__':
    app = create_app()
    # 从环境变量获取端口，默认使用5000
    port = int(os.environ.get('PORT', 5000))
    host = os.environ.get('HOST', '0.0.0.0')
    
    logger.info(f"Starting server on {host}:{port}")
    app.run(host=host, port=port)