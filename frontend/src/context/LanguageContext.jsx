import React, { createContext, useState, useEffect, useContext } from 'react';

// 语言包定义
const translations = {
  'zh-CN': {
    // 通用
    home: '首页',
    game: '游戏',
    techniques: '技巧',
    progress: '进度',
    statistics: '统计',
    settings: '设置',
    
    // 设置页面
    settingsPageTitle: '设置',
    language: '语言',
    theme: '主题',
    lightTheme: '浅色主题',
    darkTheme: '深色主题',
    systemTheme: '跟随系统',
    customTheme: '自定义主题',
    editTheme: '编辑主题',
    saveChanges: '保存更改',
    cancel: '取消',
    
    // 主题编辑器
    themeEditor: '主题编辑器',
    backgroundColor: '背景颜色',
    surfaceColor: '表面颜色',
    textColor: '文字颜色',
    textSecondaryColor: '次要文字颜色',
    primaryColor: '主色调',
    secondaryColor: '次色调',
    successColor: '成功颜色',
    warningColor: '警告颜色',
    errorColor: '错误颜色',
    borderColor: '边框颜色',
    gridLineColor: '网格线颜色',
    gridLineThickColor: '粗网格线颜色',
    highlightColor: '高亮颜色',
    preview: '预览',
    reset: '重置',
    exportTheme: '导出主题',
    importTheme: '导入主题',
    
    // 其他常用文本
    confirm: '确认',
    delete: '删除',
    back: '返回',
    continue: '继续',
    complete: '完成',
    start: '开始',
    pause: '暂停',
    resume: '继续',
    newGame: '新游戏',
    difficulty: '难度',
    easy: '简单',
    medium: '中等',
    hard: '困难',
    expert: '专家'
  },
  'en-US': {
    // Common
    home: 'Home',
    game: 'Game',
    techniques: 'Techniques',
    progress: 'Progress',
    statistics: 'Statistics',
    settings: 'Settings',
    
    // Settings page
    settingsPageTitle: 'Settings',
    language: 'Language',
    theme: 'Theme',
    lightTheme: 'Light Theme',
    darkTheme: 'Dark Theme',
    systemTheme: 'System Theme',
    customTheme: 'Custom Theme',
    editTheme: 'Edit Theme',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    
    // Theme editor
    themeEditor: 'Theme Editor',
    backgroundColor: 'Background Color',
    surfaceColor: 'Surface Color',
    textColor: 'Text Color',
    textSecondaryColor: 'Secondary Text Color',
    primaryColor: 'Primary Color',
    secondaryColor: 'Secondary Color',
    successColor: 'Success Color',
    warningColor: 'Warning Color',
    errorColor: 'Error Color',
    borderColor: 'Border Color',
    gridLineColor: 'Grid Line Color',
    gridLineThickColor: 'Thick Grid Line Color',
    highlightColor: 'Highlight Color',
    preview: 'Preview',
    reset: 'Reset',
    exportTheme: 'Export Theme',
    importTheme: 'Import Theme',
    
    // Other common text
    confirm: 'Confirm',
    delete: 'Delete',
    back: 'Back',
    continue: 'Continue',
    complete: 'Complete',
    start: 'Start',
    pause: 'Pause',
    resume: 'Resume',
    newGame: 'New Game',
    difficulty: 'Difficulty',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    expert: 'Expert'
  }
};

// 创建语言上下文
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // 从localStorage获取保存的语言或使用浏览器默认语言
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 
    (navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US')
  );
  
  // 获取当前语言的翻译
  const t = (key) => {
    return translations[language]?.[key] || key;
  };
  
  // 切换语言
  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem('language', langCode);
  };
  
  const value = {
    language,
    t,
    changeLanguage,
    availableLanguages: [
      { code: 'zh-CN', name: '中文简体' },
      { code: 'en-US', name: 'English' }
    ]
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义Hook，方便使用语言上下文
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};