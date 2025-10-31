import React, { createContext, useState, useEffect, useContext } from 'react';
import { translations } from './translations';

// 创建语言上下文
const LanguageContext = createContext();

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  // 初始化语言状态，优先使用本地存储中的语言设置
  const [language, setLanguage] = useState(() => {
    // 尝试从localStorage获取保存的语言设置
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // 检测浏览器语言，支持中文相关的语言代码（zh-CN, zh, zh-TW等）
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.includes('zh')) {
      return 'zh-CN'; // 所有中文变体都使用简体中文
    }
    
    // 默认使用英文
    return 'en-US';
  });
  
  // 获取当前语言的翻译，支持嵌套键和变量替换
  const t = (key, variables = {}) => {
    if (!key) return key;
    
    // 获取翻译对象
    let value = translations[language];
    
    // 获取翻译字符串
    const keys = key.split('.');
    for (const k of keys) {
      if (!value || typeof value !== 'object') {
        return key;
      }
      value = value[k];
    }
    
    if (value === undefined) return key;
    
    // 执行变量替换
    if (typeof value === 'string' && Object.keys(variables).length > 0) {
      return value.replace(/\{([^}]+)\}/g, (match, variableName) => {
        return variables[variableName] !== undefined ? variables[variableName] : match;
      });
    }
    
    return value;
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

export default LanguageContext;
