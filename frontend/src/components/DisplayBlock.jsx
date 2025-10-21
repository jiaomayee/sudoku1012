import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const DisplayBlockContainer = styled(({theme, ...props}) => <div {...props} />).attrs({ className: 'display-block' })`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 8px ${props => props.theme?.shadow || 'rgba(0, 0, 0, 0.1)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%; // 继承父容器宽度，确保与控制面板同宽
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  
  // 明确的竖屏模式检测 - 确保只影响竖屏显示
  @media (orientation: portrait) {
    padding: 4px 6px;
    gap: 4px;
    min-height: 32px;
    max-height: 32px; // 增加高度以确保文字正常显示
    line-height: 1.2;
    flex-direction: row; // 改为水平排列
    justify-content: space-between; // 均匀分布
  }
`;

const ErrorCount = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme?.textSecondary || '#666666'};
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  padding: 0;
  
  // 明确的竖屏模式 - 调整高度以确保文字正常显示
  @media (orientation: portrait) {
    font-size: 11px;
    line-height: 1.2;
    padding: 0;
    height: auto;
    margin: 0;
    flex-shrink: 0;
  }
`;

const ErrorNumber = styled.span`
  color: ${props => props.theme?.error || '#ff3b30'};
  font-weight: 600;
`;

const DifficultyDisplay = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme?.primary || '#4a6cf7'};
  text-align: center;
  margin: 0;
  padding: 0;
  
  // 明确的竖屏模式 - 调整高度以确保文字正常显示
  @media (orientation: portrait) {
    font-size: 12px;
    line-height: 1.2;
    padding: 0;
    height: auto;
    margin: 0;
    flex-shrink: 0;
  }
`;

const TimerDisplay = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme?.primary || '#4a6cf7'};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  
  // 明确的竖屏模式 - 调整高度以确保文字正常显示
  @media (orientation: portrait) {
    font-size: 12px;
    line-height: 1.2;
    padding: 0;
    height: auto;
    margin: 0;
    flex-shrink: 0;
  }
`;

const DisplayBlock = ({ 
  errorCount, 
  difficulty, 
  time
}) => {
  const { theme } = useTheme();

  return (
    <DisplayBlockContainer>
      {/* 错误次数统计 - 标签为普通文本颜色，数字为红色 */}
      <ErrorCount>
        错误：<ErrorNumber>{errorCount}</ErrorNumber>
      </ErrorCount>
      
      {/* 当前难度等级 */}
      <DifficultyDisplay>{difficulty}</DifficultyDisplay>
      
      {/* 游戏计时器 */}
      <TimerDisplay>{time}</TimerDisplay>
    </DisplayBlockContainer>
  );
};

export default DisplayBlock;