// 数独游戏的工具函数

// 生成唯一ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

// 格式化时间（秒转换为时分秒）
export const formatTime = (seconds) => {
  if (!seconds || seconds < 0) return '00:00';
  
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

// 格式化日期
export const formatDate = (date) => {
  if (!date) return '';
  
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

// 计算完成百分比
export const calculatePercentage = (current, total) => {
  if (!total || total === 0) return 0;
  return Math.round((current / total) * 100);
};

// 生成随机数（指定范围）
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 深拷贝对象
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};

// 节流函数
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// 防抖函数
export const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

// 本地存储相关函数
export const storage = {
  // 设置数据
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('存储数据失败:', error);
      return false;
    }
  },
  
  // 获取数据
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('读取数据失败:', error);
      return defaultValue;
    }
  },
  
  // 删除数据
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('删除数据失败:', error);
      return false;
    }
  },
  
  // 清空所有数据
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('清空数据失败:', error);
      return false;
    }
  }
};

// 验证邮箱格式
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 验证用户名格式
export const isValidUsername = (username) => {
  // 用户名要求：3-20个字符，只能包含字母、数字、下划线
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

// 打乱数组
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 检查数独解法是否有效
export const isValidSudoku = (board) => {
  // 检查行
  for (let row = 0; row < 9; row++) {
    const seen = new Set();
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value !== 0) {
        if (seen.has(value)) return false;
        seen.add(value);
      }
    }
  }

  // 检查列
  for (let col = 0; col < 9; col++) {
    const seen = new Set();
    for (let row = 0; row < 9; row++) {
      const value = board[row][col];
      if (value !== 0) {
        if (seen.has(value)) return false;
        seen.add(value);
      }
    }
  }

  // 检查3x3宫格
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const seen = new Set();
      for (let row = boxRow * 3; row < boxRow * 3 + 3; row++) {
        for (let col = boxCol * 3; col < boxCol * 3 + 3; col++) {
          const value = board[row][col];
          if (value !== 0) {
            if (seen.has(value)) return false;
            seen.add(value);
          }
        }
      }
    }
  }

  return true;
};

// 获取单元格的候选数
export const getPossibleNumbers = (board, row, col) => {
  const possibleNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  // 检查行
  for (let c = 0; c < 9; c++) {
    if (board[row][c] !== 0) {
      possibleNumbers.delete(board[row][c]);
    }
  }
  
  // 检查列
  for (let r = 0; r < 9; r++) {
    if (board[r][col] !== 0) {
      possibleNumbers.delete(board[r][col]);
    }
  }
  
  // 检查3x3宫格
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if (board[r][c] !== 0) {
        possibleNumbers.delete(board[r][c]);
      }
    }
  }
  
  return Array.from(possibleNumbers).sort((a, b) => a - b);
};

// 计算两个日期之间的天数差
export const daysBetween = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.round(Math.abs((d1 - d2) / oneDay));
};

// 检测设备类型
export const detectDevice = () => {
  const ua = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
  
  return {
    isMobile: isMobile && !isTablet,
    isTablet: isTablet,
    isDesktop: !isMobile && !isTablet
  };
};

// 复制文本到剪贴板
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // 回退方案
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      textArea.remove();
      return result;
    }
    return true;
  } catch (error) {
    console.error('复制失败:', error);
    return false;
  }
};

// 获取文件扩展名
export const getFileExtension = (filename) => {
  if (!filename) return '';
  const parts = filename.split('.');
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
};

// 截断文本
export const truncateText = (text, maxLength, suffix = '...') => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
};

// 生成随机颜色
export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// 生成渐变色
export const generateGradient = (color1, color2, angle = 45) => {
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
};

// 检查浏览器支持的特性
export const checkBrowserSupport = () => {
  return {
    localstorage: 'localStorage' in window && window.localStorage !== null,
    sessionstorage: 'sessionStorage' in window && window.sessionStorage !== null,
    websocket: 'WebSocket' in window,
    serviceworker: 'serviceWorker' in navigator,
    fetch: 'fetch' in window,
    es6: typeof Promise !== 'undefined' && typeof Symbol !== 'undefined'
  };
};

// 数字转中文数字
export const numberToChinese = (num) => {
  if (num === 0) return '零';
  const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const units = ['', '十', '百', '千'];
  const bigUnits = ['', '万', '亿', '兆'];
  
  let result = '';
  let unitIndex = 0;
  let bigUnitIndex = 0;
  let temp = 0;
  
  while (num > 0) {
    temp = num % 10;
    if (temp !== 0) {
      result = digits[temp] + units[unitIndex] + result;
    } else if (result && result[0] !== '零') {
      result = '零' + result;
    }
    
    num = Math.floor(num / 10);
    unitIndex++;
    
    if (unitIndex === 4) {
      if (result && result[0] === '零') {
        result = result.substring(1);
      }
      if (result) {
        result = result + bigUnits[bigUnitIndex];
      }
      unitIndex = 0;
      bigUnitIndex++;
    }
  }
  
  // 处理特殊情况：一十 -> 十
  if (result.startsWith('一十')) {
    result = result.substring(1);
  }
  
  return result;
};

// 生成唯一的用户ID
export const generateUserId = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 9);
  const prefix = 'usr';
  return `${prefix}_${timestamp}_${random}`;
};

// 错误处理
export const handleError = (error, fallback = null) => {
  console.error('操作失败:', error);
  // 可以在这里添加错误日志记录
  return fallback;
};

// 安全地访问嵌套对象属性
export const safeGet = (obj, path, defaultValue = null) => {
  if (!obj) return defaultValue;
  
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }
  
  return result !== undefined ? result : defaultValue;
};

// 批量操作本地存储
export const batchStorage = {
  // 批量设置
  setMultiple: (items) => {
    try {
      Object.entries(items).forEach(([key, value]) => {
        localStorage.setItem(key, JSON.stringify(value));
      });
      return true;
    } catch (error) {
      console.error('批量存储失败:', error);
      return false;
    }
  },
  
  // 批量获取
  getMultiple: (keys) => {
    try {
      const result = {};
      keys.forEach(key => {
        const item = localStorage.getItem(key);
        result[key] = item ? JSON.parse(item) : null;
      });
      return result;
    } catch (error) {
      console.error('批量读取失败:', error);
      return {};
    }
  },
  
  // 批量删除
  removeMultiple: (keys) => {
    try {
      keys.forEach(key => {
        localStorage.removeItem(key);
      });
      return true;
    } catch (error) {
      console.error('批量删除失败:', error);
      return false;
    }
  }
};