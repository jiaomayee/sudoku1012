import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const DisplayBlockContainer = styled(({theme, ...props}) => <div {...props} />).attrs({ className: 'display-block' })`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 100%; // 继承父容器宽度，确保与操作区块同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
`;

const ErrorCount = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.theme?.error || '#e74c3c'};
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
`;

const DifficultyDisplay = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme?.text || '#34495e'};
  text-align: center;
  margin: 0;
`;

const TimerDisplay = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme?.primary || '#3498db'};
  font-family: 'Courier New', monospace;
  margin: 0;
`;

const DisplayBlock = ({ 
  errorCount, 
  difficulty, 
  time
}) => {
  const { theme } = useTheme();

  return (
    <DisplayBlockContainer>
      {/* 错误次数统计 - 使用红色字体 */}
      <ErrorCount>
        错误：{errorCount}
      </ErrorCount>
      
      {/* 当前难度等级 */}
      <DifficultyDisplay>{difficulty}</DifficultyDisplay>
      
      {/* 游戏计时器 */}
      <TimerDisplay>{time}</TimerDisplay>
    </DisplayBlockContainer>
  );
};

export default DisplayBlock;