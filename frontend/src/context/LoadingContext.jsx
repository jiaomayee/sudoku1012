import React, { createContext, useState, useContext } from 'react';

// 创建加载上下文
const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  // 加载状态
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('加载中...');
  const [loadingCount, setLoadingCount] = useState(0);

  // 开始加载
  const startLoading = (message = '加载中...') => {
    setLoadingCount(prevCount => prevCount + 1);
    setLoadingMessage(message);
    setIsLoading(true);
  };

  // 结束加载
  const stopLoading = () => {
    setLoadingCount(prevCount => {
      // 确保计数不会小于0
      const newCount = Math.max(0, prevCount - 1);
      if (newCount === 0) {
        setIsLoading(false);
      }
      return newCount;
    });
  };

  // 重置加载状态
  const resetLoading = () => {
    setLoadingCount(0);
    setIsLoading(false);
    setLoadingMessage('加载中...');
  };

  // 执行带加载状态的异步操作
  const executeWithLoading = async (operation, message = '加载中...') => {
    try {
      startLoading(message);
      const result = await operation();
      return result;
    } catch (error) {
      throw error;
    } finally {
      stopLoading();
    }
  };

  const value = {
    isLoading,
    loadingMessage,
    loadingCount,
    startLoading,
    stopLoading,
    resetLoading,
    executeWithLoading
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

// 自定义Hook，方便使用加载上下文
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};