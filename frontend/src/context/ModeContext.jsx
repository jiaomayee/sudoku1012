import React, { createContext, useContext, useState } from 'react';

// 创建模式上下文
const ModeContext = createContext();

// 模式提供者组件
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('game'); // 'game' 或 'learning'

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

// 使用模式的钩子
export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

export { ModeContext };