import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const NavBlockContainer = styled.div.attrs({ className: 'nav-block' })`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: var(--board-width); // 与数独棋盘同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
`;

const NavTitle = styled.h3`
  font-size: 16px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 12px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid ${props => props.theme?.border || '#e0e0e0'};
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 8px;
`;

const NavButton = styled(({ isActive, ...props }) => <button {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isActive ? (props.theme?.primary || '#4a6cf7') + '22' : (props.theme?.surface || '#ffffff')};
  color: ${props => props.isActive ? (props.theme?.primary || '#4a6cf7') : (props.theme?.text || '#333333')};
  border: 2px solid ${props => props.isActive ? (props.theme?.primary || '#4a6cf7') : (props.theme?.border || '#e0e0e0')};
  padding: 10px 6px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 70px;
  font-size: 11px;
  line-height: 1.2;
  text-align: center;
  font-family: inherit;
  
  &:hover {
    background-color: ${props => (props.theme?.primary || '#4a6cf7') + '15'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ButtonIcon = styled.span`
  font-size: 20px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 简单的图标组件
const Icons = {
  NewGame: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  ),
  Pause: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  ),
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  Hint: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
  ),
  Notes: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  ),
  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  )
};

const NavigationBlock = ({
  onNewGame,
  onPauseTimer,
  onGetHint,
  onToggleNotes,
  onSettings,
  isNotesMode = false,
  isTimerActive = true
}) => {
  const { theme } = useTheme();

  return (
    <NavBlockContainer>
      <ButtonGrid>
        {/* 新建游戏按钮 */}
        <NavButton onClick={onNewGame}>
          <ButtonIcon><Icons.NewGame /></ButtonIcon>
          新建游戏
        </NavButton>
        
        {/* 暂停计时按钮 */}
        <NavButton onClick={onPauseTimer}>
          <ButtonIcon>
            {isTimerActive ? <Icons.Pause /> : <Icons.Play />}
          </ButtonIcon>
          {isTimerActive ? '暂停计时' : '继续'}
        </NavButton>
        
        {/* 技巧提示按钮 */}
        <NavButton onClick={onGetHint}>
          <ButtonIcon><Icons.Hint /></ButtonIcon>
          技巧提示
        </NavButton>
        
        {/* 候选数按钮 */}
        <NavButton onClick={onToggleNotes} isActive={isNotesMode}>
          <ButtonIcon><Icons.Notes /></ButtonIcon>
          候选数
        </NavButton>
        
        {/* 设置按钮 */}
        <NavButton onClick={onSettings}>
          <ButtonIcon><Icons.Settings /></ButtonIcon>
          设置
        </NavButton>
      </ButtonGrid>
    </NavBlockContainer>
  );
};

export default NavigationBlock;