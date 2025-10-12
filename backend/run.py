"""
数独学习应用后端服务主入口

此文件提供命令行接口来启动Flask应用程序。
"""

import os
import sys
import argparse
import logging
from dotenv import load_dotenv

# 配置基本日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)


# 尝试加载环境变量
def load_environment_variables() -> None:
    """
    加载环境变量
    """
    # 尝试加载.env文件
    if os.path.exists('.env'):
        load_dotenv()
        logger.info('Environment variables loaded from .env file')
    else:
        logger.warning('.env file not found, using system environment variables')


# 解析命令行参数
def parse_arguments() -> argparse.Namespace:
    """
    解析命令行参数
    
    Returns:
        argparse.Namespace: 解析后的参数
    """
    parser = argparse.ArgumentParser(description='Sudoku Learning App Backend')
    
    # 配置文件参数
    parser.add_argument(
        '--config',
        type=str,
        default='development',
        choices=['development', 'testing', 'production'],
        help='Configuration environment to use'
    )
    
    # 服务器参数
    parser.add_argument(
        '--host',
        type=str,
        default='0.0.0.0',
        help='Host to bind the server to'
    )
    
    parser.add_argument(
        '--port',
        type=int,
        default=5000,
        help='Port to bind the server to'
    )
    
    parser.add_argument(
        '--debug',
        action='store_true',
        help='Enable debug mode (overrides config setting)'
    )
    
    # 数据库参数
    parser.add_argument(
        '--init-db',
        action='store_true',
        help='Initialize the database before starting'
    )
    
    return parser.parse_args()


# 初始化数据库
def initialize_database(config_name: str) -> None:
    """
    初始化数据库
    
    Args:
        config_name: 配置名称
    """
    try:
        from sudoku.app import create_app
        from sudoku.database.database import db
        
        app = create_app(config_name)
        
        with app.app_context():
            logger.info('Initializing database...')
            # 创建所有表
            db.create_all()
            logger.info('Database tables created successfully')
            
            # 初始化数据
            from sudoku.app import initialize_app_data
            initialize_app_data(app)
            
    except Exception as e:
        logger.error(f'Failed to initialize database: {str(e)}')
        sys.exit(1)


# 启动应用程序
def run_application(args: argparse.Namespace) -> None:
    """
    启动应用程序
    
    Args:
        args: 命令行参数
    """
    try:
        # 如果指定了初始化数据库
        if args.init_db:
            initialize_database(args.config)
        
        # 创建应用程序
        from sudoku.app import create_app
        app = create_app(args.config)
        
        # 覆盖调试模式设置
        if args.debug:
            app.debug = True
            logger.warning('Debug mode enabled')
        
        # 启动服务器
        logger.info(f'Starting server on {args.host}:{args.port}')
        logger.info(f'Configuration: {args.config}')
        
        app.run(
            host=args.host,
            port=args.port,
            threaded=True
        )
    
    except KeyboardInterrupt:
        logger.info('Server stopped by user')
        sys.exit(0)
    except ImportError as e:
        logger.error(f'Failed to import required module: {str(e)}')
        logger.error('Make sure all dependencies are installed. Run: pip install -r requirements.txt')
        sys.exit(1)
    except Exception as e:
        logger.error(f'Failed to start server: {str(e)}')
        sys.exit(1)


# 主函数
def main() -> None:
    """
    主函数
    """
    # 加载环境变量
    load_environment_variables()
    
    # 解析命令行参数
    args = parse_arguments()
    
    # 启动应用程序
    run_application(args)


if __name__ == '__main__':
    main()