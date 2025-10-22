import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useSudoku, DIFFICULTY_LEVELS } from '../context/SudokuContext';
import { useLoading } from '../context/LoadingContext';
import { useLanguage } from '../context/LanguageContext';
import DifficultySelectModal from './DifficultySelectModal';
const NavBlockContainer = styled.div.attrs({ className: 'nav-block' })`
  background-color: ${props => props.theme?.background || '#f8f9fa'};
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  width: 100%; // 与数独棋盘同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  transition: all 0.3s ease;
  
  // 添加悬停效果
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  // 确保在父容器中正确对齐
  align-self: flex-start;
`;

const NavTitle = styled.h3`
  font-size: 14px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  display: none; // 竖屏模式下隐藏标题以节省空间
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0;
`;

const NavButton = styled(({ isActive, ...props }) => <button {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isActive ? (props.theme?.primary || '#3498db') : (props.theme?.background || '#f8f9fa')};
  color: ${props => props.isActive ? 'white' : (props.theme?.text || '#666666')};
  border: none;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 36px;
  min-width: 36px;
  font-size: 12px;
  font-family: inherit;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  
  // 添加渐变背景效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.1), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover {
    background-color: ${props => props.isActive ? 
      (props.theme?.primary || '#3498db') : 
      (props.theme?.primary || '#3498db') + '15'};
    border-color: ${props => props.theme?.primary || '#3498db'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.primary || '#3498db'};
  }
  
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`;

const ButtonIcon = styled.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 简单的图标组件
const Icons = {
  NewGame: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  ),
  Pause: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  ),
  Play: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  Hint: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD700">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
    </svg>
  ),
  Notes: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      {/* 数独格子背景 */}
      <rect x="4" y="4" width="16" height="16" rx="2" fill="transparent" stroke="currentColor" strokeWidth="1.5"/>
      {/* 添加2x2网格分割线 */}
      <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
      <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
      {/* 显示两个数字：2（左上角）和5（右下角） */}
      <text x="7" y="10" fontSize="6" fontWeight="bold">2</text>
      <text x="15" y="18" fontSize="6" fontWeight="bold">5</text>
    </svg>
  ),
  Settings: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  )
};

const NavigationBlock = ({ onNewGame, onPauseTimer, onGetHint, onShowTechniques, onToggleNotes, onSettings, isNotesMode = false, isTimerActive = true, gameCompleted = false }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const sudokuContext = useSudoku();
  const { startLoading, stopLoading } = useLoading();
  const [showDifficultyModal, setShowDifficultyModal] = useState(false); // 控制难度选择模态框显示
  const [isNotesButtonActive, setIsNotesButtonActive] = useState(false); // 控制候选数按钮激活状态

  // 处理新建游戏按钮点击
  const handleNewGameClick = () => {
    console.log('NavigationBlock: 打开难度选择模态框');
    // 立即重置候选数按钮激活状态，避免在生成新游戏前保持激活
    setIsNotesButtonActive(false);
    // 显示难度选择模态框
    setShowDifficultyModal(true);
  };

  // 处理难度选择
  const handleDifficultySelect = async (selectedDifficulty) => {
    console.log('NavigationBlock: 选择难度:', selectedDifficulty);
    try {
      // 重置候选数按钮激活状态
      setIsNotesButtonActive(false);
      
      // 确保技巧提示功能被关闭 - 如果提供了相关方法
      if (onShowTechniques) {
        // 这里我们不直接调用onShowTechniques，因为它会触发技巧查找
        // 而是依赖SudokuContext中的startNewGame来重置技巧相关状态
        console.log('将在生成新游戏时重置技巧状态');
      }
      
      if (startLoading) {
        startLoading(t('generatingNewPuzzle'));
      }

      // 尝试使用上下文的函数
      if (sudokuContext?.startNewGame) {
        console.log('调用 context.startNewGame');
        await sudokuContext.startNewGame(null, selectedDifficulty);
        console.log('startNewGame 完成');
      } else if (sudokuContext?.generateNewPuzzle) {
        console.log('调用 context.generateNewPuzzle');
        await sudokuContext.generateNewPuzzle(selectedDifficulty);
        console.log('generateNewPuzzle 完成');
      } else {
        console.error('上下文函数不可用');
      }
    } catch (error) {
      console.error('生成新游戏失败:', error);
    } finally {
      if (stopLoading) {
        stopLoading();
      }
    }
  };

  return (
    <>
      <NavBlockContainer>
        <ButtonGrid>
          {/* 新建游戏按钮 - 打开难度选择模态框 */}
          <NavButton onClick={handleNewGameClick} title={t('newGame')}>
            <ButtonIcon><Icons.NewGame /></ButtonIcon>
          </NavButton>
          
          {/* 暂停计时按钮 */}
          <NavButton onClick={!gameCompleted ? onPauseTimer : undefined} disabled={gameCompleted} title={gameCompleted ? t('gameCompleted') : (isTimerActive ? t('pauseTimer') : t('resume'))}>
            <ButtonIcon>
              {gameCompleted || isTimerActive ? <Icons.Pause /> : <Icons.Play />}
            </ButtonIcon>
          </NavButton>
          
          {/* 技巧提示按钮 */}
          <NavButton onClick={onGetHint} title={t('hint')}>
            <ButtonIcon><Icons.Hint /></ButtonIcon>
          </NavButton>
          
          {/* 候选数按钮 */}
            <NavButton 
              onClick={() => {
                onToggleNotes();
                setIsNotesButtonActive(true); // 点击时设置为激活状态
              }} 
              title={t('notes')} 
              isActive={isNotesButtonActive}
            >
              <ButtonIcon><Icons.Notes /></ButtonIcon>
            </NavButton>
          
          {/* 设置按钮 */}
          <NavButton onClick={onSettings} title={t('settings')}>
            <ButtonIcon><Icons.Settings /></ButtonIcon>
          </NavButton>
        </ButtonGrid>
      </NavBlockContainer>
      
      {/* 难度选择模态框 */}
      <DifficultySelectModal
        isOpen={showDifficultyModal}
        onClose={() => setShowDifficultyModal(false)}
        onSelectDifficulty={handleDifficultySelect}
        initialDifficulty={sudokuContext?.difficulty || DIFFICULTY_LEVELS.MEDIUM}
      />
    </>
  );
};

export default NavigationBlock;