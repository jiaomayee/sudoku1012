"""
API模块主文件

此模块导出所有API蓝图，供Flask应用程序注册使用。
"""

from .sudoku_api import sudoku_bp
from .user_api import user_bp

__all__ = ['sudoku_bp', 'user_bp']