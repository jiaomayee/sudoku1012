"""
Flask应用程序配置

此模块定义了应用程序的配置参数。
"""

import os
from typing import Dict, Any, Optional


class Config:
    """
    应用程序配置基类
    """
    # 基本配置
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    DEBUG = False
    TESTING = False
    
    # 数据库配置
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///sudoku.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # 算法配置
    SUDOKU_SIZE = 9
    MIN_EMPTY_CELLS_EASY = 35
    MAX_EMPTY_CELLS_EASY = 45
    MIN_EMPTY_CELLS_MEDIUM = 46
    MAX_EMPTY_CELLS_MEDIUM = 55
    MIN_EMPTY_CELLS_HARD = 56
    MAX_EMPTY_CELLS_HARD = 60
    MIN_EMPTY_CELLS_EXPERT = 61
    MAX_EMPTY_CELLS_EXPERT = 65
    
    # 技巧识别配置
    ENABLE_TECHNIQUE_RECOGNITION = True
    TECHNIQUE_RECOGNITION_TIMEOUT = 5  # 秒
    
    # API配置
    API_PREFIX = '/api/v1'
    CORS_ORIGINS = ['http://localhost:3000', 'http://localhost:8080']
    
    # 用户进度配置
    AUTO_SAVE_INTERVAL = 30  # 秒
    MAX_ACTIVE_PROGRESS_PER_USER = 10
    
    # 日志配置
    LOG_LEVEL = 'INFO'
    LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    
    @staticmethod
    def get_algorithm_config() -> Dict[str, Any]:
        """
        获取算法相关配置
        
        Returns:
            Dict: 算法配置字典
        """
        return {
            'sudoku_size': Config.SUDOKU_SIZE,
            'difficulty_levels': {
                'easy': {
                    'min_empty': Config.MIN_EMPTY_CELLS_EASY,
                    'max_empty': Config.MAX_EMPTY_CELLS_EASY
                },
                'medium': {
                    'min_empty': Config.MIN_EMPTY_CELLS_MEDIUM,
                    'max_empty': Config.MAX_EMPTY_CELLS_MEDIUM
                },
                'hard': {
                    'min_empty': Config.MIN_EMPTY_CELLS_HARD,
                    'max_empty': Config.MAX_EMPTY_CELLS_HARD
                },
                'expert': {
                    'min_empty': Config.MIN_EMPTY_CELLS_EXPERT,
                    'max_empty': Config.MAX_EMPTY_CELLS_EXPERT
                }
            }
        }
    
    @staticmethod
    def get_api_config() -> Dict[str, Any]:
        """
        获取API相关配置
        
        Returns:
            Dict: API配置字典
        """
        return {
            'prefix': Config.API_PREFIX,
            'cors_origins': Config.CORS_ORIGINS
        }


class DevelopmentConfig(Config):
    """
    开发环境配置
    """
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or 'sqlite:///sudoku_dev.db'
    LOG_LEVEL = 'DEBUG'


class TestingConfig(Config):
    """
    测试环境配置
    """
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('TEST_DATABASE_URL') or 'sqlite:///:memory:'
    WTF_CSRF_ENABLED = False


class ProductionConfig(Config):
    """
    生产环境配置
    """
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    LOG_LEVEL = 'WARNING'
    
    @classmethod
    def init_app(cls, app):
        """
        初始化生产环境应用程序
        
        Args:
            app: Flask应用程序实例
        """
        Config.init_app(app)
        
        # 在生产环境中设置HTTPS头
        @app.after_request
        def set_secure_headers(response):
            response.headers['X-Content-Type-Options'] = 'nosniff'
            response.headers['X-Frame-Options'] = 'SAMEORIGIN'
            response.headers['X-XSS-Protection'] = '1; mode=block'
            return response


# 配置映射字典
config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}


def get_config(config_name: Optional[str] = None) -> Config:
    """
    获取指定名称的配置类
    
    Args:
        config_name: 配置名称
    
    Returns:
        Config: 配置类
    """
    if config_name is None:
        config_name = os.environ.get('FLASK_CONFIG', 'default')
    return config.get(config_name, config['default'])