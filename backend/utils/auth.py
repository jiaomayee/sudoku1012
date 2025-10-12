import os
import jwt
import logging
from datetime import datetime, timedelta
from typing import Optional, Union
from passlib.context import CryptContext

logger = logging.getLogger(__name__)

# 密码加密上下文
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT配置
SECRET_KEY = os.environ.get("JWT_SECRET_KEY", "your-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7  # 7天

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    验证密码
    
    Args:
        plain_password: 明文密码
        hashed_password: 哈希密码
    
    Returns:
        bool: 是否匹配
    """
    try:
        return pwd_context.verify(plain_password, hashed_password)
    except Exception as e:
        logger.error(f"密码验证失败: {e}")
        return False

def get_password_hash(password: str) -> str:
    """
    获取密码哈希值
    
    Args:
        password: 明文密码
    
    Returns:
        str: 哈希密码
    """
    try:
        return pwd_context.hash(password)
    except Exception as e:
        logger.error(f"密码哈希失败: {e}")
        raise

def create_access_token(user_id: str, expires_delta: Optional[timedelta] = None) -> str:
    """
    创建访问令牌
    
    Args:
        user_id: 用户ID
        expires_delta: 过期时间增量
    
    Returns:
        str: JWT令牌
    """
    try:
        to_encode = {"sub": user_id}
        
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt
    except Exception as e:
        logger.error(f"创建访问令牌失败: {e}")
        raise

def verify_token(token: str) -> Optional[str]:
    """
    验证令牌
    
    Args:
        token: JWT令牌
    
    Returns:
        str: 验证成功返回用户ID，失败返回None
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            return None
        return user_id
    except jwt.ExpiredSignatureError:
        logger.warning("令牌已过期")
        return None
    except jwt.InvalidTokenError:
        logger.warning("无效的令牌")
        return None
    except Exception as e:
        logger.error(f"验证令牌失败: {e}")
        return None

def refresh_access_token(token: str) -> Optional[str]:
    """
    刷新访问令牌
    
    Args:
        token: 旧的访问令牌
    
    Returns:
        str: 新的访问令牌，如果旧令牌无效则返回None
    """
    user_id = verify_token(token)
    if user_id:
        return create_access_token(user_id)
    return None

def get_token_expiry(token: str) -> Optional[datetime]:
    """
    获取令牌过期时间
    
    Args:
        token: JWT令牌
    
    Returns:
        datetime: 过期时间，如果令牌无效则返回None
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM], options={"verify_exp": False})
        exp = payload.get("exp")
        if exp:
            return datetime.utcfromtimestamp(exp)
        return None
    except Exception as e:
        logger.error(f"获取令牌过期时间失败: {e}")
        return None

def is_token_expired(token: str) -> bool:
    """
    检查令牌是否已过期
    
    Args:
        token: JWT令牌
    
    Returns:
        bool: 是否已过期
    """
    expiry = get_token_expiry(token)
    if not expiry:
        return True
    return datetime.utcnow() > expiry

def get_token_payload(token: str) -> Optional[dict]:
    """
    获取令牌的载荷
    
    Args:
        token: JWT令牌
    
    Returns:
        dict: 令牌载荷，如果令牌无效则返回None
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except Exception as e:
        logger.error(f"获取令牌载荷失败: {e}")
        return None

def create_token_with_custom_claims(user_id: str, claims: dict, expires_delta: Optional[timedelta] = None) -> str:
    """
    创建带有自定义声明的令牌
    
    Args:
        user_id: 用户ID
        claims: 自定义声明
        expires_delta: 过期时间增量
    
    Returns:
        str: JWT令牌
    """
    try:
        to_encode = {"sub": user_id}
        to_encode.update(claims)
        
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt
    except Exception as e:
        logger.error(f"创建自定义令牌失败: {e}")
        raise