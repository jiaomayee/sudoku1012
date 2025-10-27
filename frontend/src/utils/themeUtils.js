import localforage from 'localforage';

// 主题存储键名
const CUSTOM_THEME_KEY = 'custom_theme';

// 默认主题
const defaultTheme = {
  id: 'custom',
  name: '自定义主题',
  background: '#f5f5f5',
  surface: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  primary: '#4a6cf7',
  secondary: '#6c757d',
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#17a2b8',
  border: '#e0e0e0',
  gridLine: '#cccccc',
  gridLineThick: '#999999',
  highlight: '#e6f0ff'
};

/**
 * 获取自定义主题
 * @returns {Promise<Object>} 自定义主题对象
 */
export const getCustomTheme = async () => {
  try {
    const customTheme = await localforage.getItem(CUSTOM_THEME_KEY);
    return customTheme || defaultTheme;
  } catch (error) {
    console.error('获取自定义主题失败:', error);
    return defaultTheme;
  }
};

/**
 * 更新自定义主题
 * @param {Object} theme - 新的主题对象
 * @returns {Promise<void>}
 */
export const updateCustomTheme = async (theme) => {
  try {
    await localforage.setItem(CUSTOM_THEME_KEY, theme);
  } catch (error) {
    console.error('更新自定义主题失败:', error);
    throw error;
  }
};

/**
 * 重置自定义主题
 * @returns {Promise<void>}
 */
export const resetCustomTheme = async () => {
  try {
    await localforage.setItem(CUSTOM_THEME_KEY, defaultTheme);
  } catch (error) {
    console.error('重置自定义主题失败:', error);
    throw error;
  }
};

/**
 * 导出主题
 * @param {Object} theme - 要导出的主题对象
 */
export const exportTheme = (theme) => {
  try {
    const themeData = JSON.stringify(theme, null, 2);
    const blob = new Blob([themeData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${theme.name || 'theme'}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('导出主题失败:', error);
    throw error;
  }
};

/**
 * 导入主题
 * @param {File} file - 要导入的主题文件
 * @returns {Promise<Object>} 导入的主题对象
 */
export const importTheme = async (file) => {
  try {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const theme = JSON.parse(e.target.result);
          // 验证主题对象的基本结构
          if (typeof theme === 'object' && theme !== null) {
            resolve(theme);
          } else {
            reject(new Error('无效的主题文件格式'));
          }
        } catch (parseError) {
          reject(new Error('解析主题文件失败: ' + parseError.message));
        }
      };
      reader.onerror = () => {
        reject(new Error('读取主题文件失败'));
      };
      reader.readAsText(file);
    });
  } catch (error) {
    console.error('导入主题失败:', error);
    throw error;
  }
};

export default {
  getCustomTheme,
  updateCustomTheme,
  resetCustomTheme,
  exportTheme,
  importTheme,
  defaultTheme
};