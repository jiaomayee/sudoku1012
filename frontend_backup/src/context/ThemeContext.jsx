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

export const ThemeProvider = ({ children }) => {
  // 从localStorage获取保存的主题或使用默认值
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeMode') || 'light'
  );
  
  const [theme, setTheme] = useState(defaultTheme[themeMode]);

  // 切换主题
  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    setTheme(defaultTheme[newMode]);
    localStorage.setItem('themeMode', newMode);
  };

  // 设置主题
  const setLightTheme = () => {
    setThemeMode('light');
    setTheme(defaultTheme.light);
    localStorage.setItem('themeMode', 'light');
  };

  const setDarkTheme = () => {
    setThemeMode('dark');
    setTheme(defaultTheme.dark);
    localStorage.setItem('themeMode', 'dark');
  };

  // 监听系统主题变化
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (e.matches && themeMode === 'system') {
        setTheme(defaultTheme.dark);
      } else if (!e.matches && themeMode === 'system') {
        setTheme(defaultTheme.light);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const value = {
    theme,
    themeMode,
    toggleTheme,
    setLightTheme,
    setDarkTheme
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