import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const DisplayBlockContainer = styled(({theme, ...props}) => <div {...props} />).attrs({ className: 'display-block' })`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--control-panel-width); // 与操作区块同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
`;

const ErrorCount = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme?.error || '#ff4444'};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ErrorLabel = styled.span`
  font-size: 16px;
  color: ${props => props.theme?.textSecondary || '#666666'};
`;

const DifficultyDisplay = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme?.text || '#333333'};
`;

const TimerDisplay = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme?.primary || '#4a6cf7'};
  font-family: 'Courier New', monospace;
`;

const DisplayBlock = ({ 
  errorCount, 
  difficulty, 
  time,
  isPortrait 
}) => {
  const { theme } = useTheme();

  return (
    <DisplayBlockContainer>
      {/* 错误次数统计 - 使用红色字体 */}
      <ErrorCount>
        <ErrorLabel>错误：</ErrorLabel>
        {errorCount}
      </ErrorCount>
      
      {/* 当前难度等级 */}
      <DifficultyDisplay>{difficulty}</DifficultyDisplay>
      
      {/* 游戏计时器 */}
      <TimerDisplay>{time}</TimerDisplay>
    </DisplayBlockContainer>
  );
};

export default DisplayBlock;