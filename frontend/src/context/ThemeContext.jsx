import React, { createContext, useState, useEffect, useContext } from 'react';

// 创建主题上下文
const ThemeContext = createContext();

// 默认主题配置
const defaultTheme = {
  light: {
    background: '#f5f5f5',
    surface: '#ffffff',
    text: '#333333',
    textSecondary: '#666666',
    primary: '#4a6cf7',
    secondary: '#f5a623',
    success: '#4cd964',
    warning: '#ffcc00',
    error: '#ff3b30',
    disabled: '#cccccc',
    border: '#e0e0e0',
    gridLine: '#e0e0e0',
    gridLineThick: '#cccccc',
    highlight: '#e6f0ff',
    mediaQueries: {
      small: '@media (max-width: 640px)',
      medium: '@media (max-width: 768px)',
      large: '@media (max-width: 1024px)'
    }
  },
  dark: {
    background: '#121212',
    surface: '#1e1e1e',
    text: '#f5f5f5',
    textSecondary: '#b0b0b0',
    primary: '#6482f7',
    secondary: '#ffb74d',
    success: '#66df80',
    warning: '#ffe066',
    error: '#ff5757',
    disabled: '#666666',
    border: '#333333',
    gridLine: '#333333',
    gridLineThick: '#444444',
    highlight: '#1a237e',
    mediaQueries: {
      small: '@media (max-width: 640px)',
      medium: '@media (max-width: 768px)',
      large: '@media (max-width: 1024px)'
    }
  }
};

// 获取默认自定义主题
const getDefaultCustomTheme = () => ({
  ...defaultTheme.light,
  name: '自定义主题'
});

export const ThemeProvider = ({ children }) => {
  // 从localStorage获取保存的主题模式或使用默认值
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') || 'light'
  );
  
  // 从localStorage获取保存的自定义主题或使用默认自定义主题
  const [customTheme, setCustomTheme] = useState(() => {
    const savedCustomTheme = localStorage.getItem('customTheme');
    return savedCustomTheme ? JSON.parse(savedCustomTheme) : getDefaultCustomTheme();
  });
  
  // 计算当前使用的主题
  const [theme, setTheme] = useState(() => {
    if (themeMode === 'custom') {
      return customTheme;
    }
    return defaultTheme[themeMode === 'system' ? 'light' : themeMode];
  });

  // 更新当前主题
  useEffect(() => {
    let currentTheme;
    if (themeMode === 'custom') {
      currentTheme = customTheme;
    } else if (themeMode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      currentTheme = defaultTheme[prefersDark ? 'dark' : 'light'];
    } else {
      currentTheme = defaultTheme[themeMode];
    }
    setTheme(currentTheme);
  }, [themeMode, customTheme]);

  // 切换主题
  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  // 设置主题模式
  const setLightTheme = () => {
    setThemeMode('light');
    localStorage.setItem('themeMode', 'light');
  };

  const setDarkTheme = () => {
    setThemeMode('dark');
    localStorage.setItem('themeMode', 'dark');
  };

  const setSystemTheme = () => {
    setThemeMode('system');
    localStorage.setItem('themeMode', 'system');
  };

  const setCustomThemeMode = () => {
    setThemeMode('custom');
    localStorage.setItem('themeMode', 'custom');
  };

  // 更新自定义主题
  const updateCustomTheme = (newTheme) => {
    const updatedTheme = { ...newTheme, name: newTheme.name || '自定义主题' };
    setCustomTheme(updatedTheme);
    localStorage.setItem('customTheme', JSON.stringify(updatedTheme));
    
    // 如果当前是自定义主题模式，立即应用
    if (themeMode === 'custom') {
      setTheme(updatedTheme);
    }
  };

  // 重置自定义主题
  const resetCustomTheme = () => {
    const defaultCustom = getDefaultCustomTheme();
    setCustomTheme(defaultCustom);
    localStorage.setItem('customTheme', JSON.stringify(defaultCustom));
  };

  // 导出主题配置
  const exportTheme = (themeToExport = customTheme) => {
    const themeStr = JSON.stringify(themeToExport, null, 2);
    const blob = new Blob([themeStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${themeToExport.name || 'sudoku-theme'}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 导入主题配置
  const importTheme = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedTheme = JSON.parse(e.target.result);
          // 验证主题结构
          if (importedTheme && typeof importedTheme === 'object') {
            updateCustomTheme(importedTheme);
            resolve(importedTheme);
          } else {
            reject(new Error('无效的主题文件格式'));
          }
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  // 监听系统主题变化
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (themeMode === 'system') {
        const prefersDark = mediaQuery.matches;
        setTheme(defaultTheme[prefersDark ? 'dark' : 'light']);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const value = {
    theme,
    themeMode,
    customTheme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
    setCustomThemeMode,
    updateCustomTheme,
    resetCustomTheme,
    exportTheme,
    importTheme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// 自定义Hook，方便使用主题
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};