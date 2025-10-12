import uuid
import time
import hashlib
import logging
from typing import Any, Dict, List, Optional
from datetime import datetime, timedelta

logger = logging.getLogger(__name__)

def generate_unique_id() -> str:
    """
    生成唯一ID
    
    Returns:
        str: 唯一ID字符串
    """
    return str(uuid.uuid4())

def generate_short_id() -> str:
    """
    生成短ID
    
    Returns:
        str: 短ID字符串
    """
    # 使用时间戳和随机数生成短ID
    timestamp = str(int(time.time() * 1000))
    random_part = uuid.uuid4().hex[:4]
    combined = timestamp + random_part
    
    # 使用MD5生成哈希值并取前8位
    return hashlib.md5(combined.encode()).hexdigest()[:8]

def format_timestamp(timestamp: Optional[str] = None, format_str: str = "%Y-%m-%d %H:%M:%S") -> str:
    """
    格式化时间戳
    
    Args:
        timestamp: ISO格式的时间戳字符串，如果为None则使用当前时间
        format_str: 输出格式
    
    Returns:
        str: 格式化后的时间字符串
    """
    try:
        if timestamp:
            # 解析ISO格式时间戳
            if timestamp.endswith("Z"):
                timestamp = timestamp.replace("Z", "+00:00")
            dt = datetime.fromisoformat(timestamp)
        else:
            dt = datetime.utcnow()
        
        return dt.strftime(format_str)
    except Exception as e:
        logger.error(f"格式化时间戳失败: {e}")
        return ""

def calculate_time_difference(start_time: str, end_time: Optional[str] = None) -> Dict[str, Any]:
    """
    计算时间差
    
    Args:
        start_time: 开始时间（ISO格式）
        end_time: 结束时间，如果为None则使用当前时间
    
    Returns:
        dict: 包含总秒数和格式化后的时间差
    """
    try:
        # 解析开始时间
        if start_time.endswith("Z"):
            start_time = start_time.replace("Z", "+00:00")
        start_dt = datetime.fromisoformat(start_time)
        
        # 解析结束时间
        if end_time:
            if end_time.endswith("Z"):
                end_time = end_time.replace("Z", "+00:00")
            end_dt = datetime.fromisoformat(end_time)
        else:
            end_dt = datetime.utcnow()
        
        # 计算时间差
        delta = end_dt - start_dt
        total_seconds = delta.total_seconds()
        
        # 格式化时间差
        hours, remainder = divmod(int(total_seconds), 3600)
        minutes, seconds = divmod(remainder, 60)
        
        formatted = ""
        if hours > 0:
            formatted += f"{hours}小时"
        if minutes > 0 or hours > 0:
            formatted += f"{minutes}分钟"
        formatted += f"{seconds}秒"
        
        return {
            "total_seconds": total_seconds,
            "formatted": formatted,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }
    except Exception as e:
        logger.error(f"计算时间差失败: {e}")
        return {
            "total_seconds": 0,
            "formatted": "0秒",
            "hours": 0,
            "minutes": 0,
            "seconds": 0
        }

def validate_email(email: str) -> bool:
    """
    简单验证电子邮件格式
    
    Args:
        email: 电子邮件地址
    
    Returns:
        bool: 是否有效
    """
    if not email or "@" not in email:
        return False
    
    parts = email.split("@")
    if len(parts) != 2:
        return False
    
    username, domain = parts
    if not username or not domain or "." not in domain:
        return False
    
    return True

def sanitize_input(data: Any) -> Any:
    """
    清理输入数据，防止SQL注入等安全问题
    
    Args:
        data: 输入数据
    
    Returns:
        清理后的数据
    """
    if isinstance(data, str):
        # 移除可能的危险字符
        data = data.strip()
        # 可以根据需要添加更多的清理规则
    elif isinstance(data, dict):
        return {k: sanitize_input(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [sanitize_input(item) for item in data]
    
    return data

def paginate_list(items: List[Any], page: int = 1, page_size: int = 20) -> Dict[str, Any]:
    """
    对列表进行分页
    
    Args:
        items: 项目列表
        page: 页码（从1开始）
        page_size: 每页大小
    
    Returns:
        dict: 包含分页信息的字典
    """
    # 验证参数
    if page < 1:
        page = 1
    if page_size < 1:
        page_size = 20
    if page_size > 100:
        page_size = 100
    
    # 计算总数和页数
    total = len(items)
    total_pages = (total + page_size - 1) // page_size
    
    # 调整页码
    if page > total_pages:
        page = max(1, total_pages)
    
    # 计算起始和结束索引
    start = (page - 1) * page_size
    end = start + page_size
    
    # 获取当前页的项目
    items_page = items[start:end]
    
    return {
        "items": items_page,
        "page": page,
        "page_size": page_size,
        "total": total,
        "total_pages": total_pages,
        "has_next": page < total_pages,
        "has_prev": page > 1
    }

def calculate_percentile(values: List[float], percentile: float) -> float:
    """
    计算百分位数
    
    Args:
        values: 数值列表
        percentile: 百分位数（0-100）
    
    Returns:
        float: 计算出的百分位数值
    """
    if not values:
        return 0.0
    
    # 验证百分位数范围
    if percentile < 0:
        percentile = 0
    elif percentile > 100:
        percentile = 100
    
    # 排序
    sorted_values = sorted(values)
    
    # 计算索引
    index = (len(sorted_values) - 1) * (percentile / 100)
    
    # 线性插值
    lower_index = int(index)
    upper_index = min(lower_index + 1, len(sorted_values) - 1)
    weight = index - lower_index
    
    return sorted_values[lower_index] * (1 - weight) + sorted_values[upper_index] * weight

def format_number(value: float, decimals: int = 2) -> str:
    """
    格式化数字，添加千位分隔符
    
    Args:
        value: 要格式化的数字
        decimals: 小数位数
    
    Returns:
        str: 格式化后的数字字符串
    """
    try:
        format_str = f"{{:,.{decimals}f}}".format(value)
        # 移除尾随的零
        if decimals > 0:
            format_str = format_str.rstrip('0').rstrip('.') if '.' in format_str else format_str
        return format_str
    except Exception as e:
        logger.error(f"格式化数字失败: {e}")
        return str(value)

def safe_divide(numerator: float, denominator: float, default: float = 0.0) -> float:
    """
    安全除法，避免除以零
    
    Args:
        numerator: 分子
        denominator: 分母
        default: 分母为零时的默认返回值
    
    Returns:
        float: 除法结果或默认值
    """
    try:
        if denominator == 0:
            return default
        return numerator / denominator
    except Exception as e:
        logger.error(f"除法运算失败: {e}")
        return default

def get_days_between(start_date: str, end_date: Optional[str] = None) -> int:
    """
    计算两个日期之间的天数
    
    Args:
        start_date: 开始日期（ISO格式）
        end_date: 结束日期，如果为None则使用当前日期
    
    Returns:
        int: 天数差
    """
    try:
        # 解析开始日期
        if start_date.endswith("Z"):
            start_date = start_date.replace("Z", "+00:00")
        start_dt = datetime.fromisoformat(start_date).date()
        
        # 解析结束日期
        if end_date:
            if end_date.endswith("Z"):
                end_date = end_date.replace("Z", "+00:00")
            end_dt = datetime.fromisoformat(end_date).date()
        else:
            end_dt = datetime.utcnow().date()
        
        # 计算天数差
        delta = end_dt - start_dt
        return delta.days
    except Exception as e:
        logger.error(f"计算日期差失败: {e}")
        return 0

def group_by_difficulty(items: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    """
    按难度分组项目
    
    Args:
        items: 包含difficulty字段的项目列表
    
    Returns:
        dict: 按难度分组后的字典
    """
    grouped = {
        "easy": [],
        "medium": [],
        "hard": [],
        "expert": []
    }
    
    for item in items:
        difficulty = item.get("difficulty", "medium")
        if difficulty in grouped:
            grouped[difficulty].append(item)
    
    return grouped

def calculate_average_completion_time(games: List[Dict[str, Any]]) -> float:
    """
    计算平均完成时间
    
    Args:
        games: 游戏列表，每个游戏包含completion_time字段
    
    Returns:
        float: 平均完成时间（秒）
    """
    completed_games = [g for g in games if g.get("completion_time")]
    if not completed_games:
        return 0.0
    
    total_time = sum(g["completion_time"] for g in completed_games)
    return safe_divide(total_time, len(completed_games))