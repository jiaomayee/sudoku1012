import React, { useState, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useSudoku, DIFFICULTY_LEVELS } from '../context/SudokuContext';
import { useLoading } from '../context/LoadingContext';
import { useLanguage } from '../context/LanguageContext';
import DifficultySelectModal from './DifficultySelectModal';

// 导入模式上下文
import { ModeContext } from '../context/ModeContext';

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
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  
  // 添加悬停效果
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  // 确保在父容器中正确对齐
  align-self: flex-start;
  
  // 添加滚动吸附功能
  scroll-snap-align: start;
  scroll-margin: 5px;
  
  // 竖屏模式下减小高度
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 4px;
    min-height: 36px;
    border-bottom-width: 2px;
  }
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
  padding: 2px 0; // 进一步减小内边距以减小整体高度
  
  // 竖屏模式下进一步减小内边距
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 1px 0;
  }
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
  min-height: 40px; // 减小最小高度
  height: auto; // 允许高度自适应内容
  
  // 竖屏模式下进一步减小高度并确保居中
  @media (max-width: 768px) and (orientation: portrait) {
    min-height: 32px;
    padding: 2px;
  }
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
      {/* 添加右上角的"1"角标（在图标外部，继续向右移动） */}
      <text x="25" y="6" fontSize="7" fontWeight="900" fill="currentColor">1</text>
    </svg>
  ),
  Settings: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  )
};

// 游戏模式图标组件
const GameModeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 17c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
  </svg>
);

// 学习模式图标组件 - 星标图标
const LearningModeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    <path d="M12 15.4l-3.78 1.98 0.69-4.06-2.97-2.88 4.08-0.6 1.98-3.7 1.98 3.7 4.08 0.6-2.97 2.88 0.69 4.06L12 15.4z"/>
  </svg>
);

const NavigationBlock = ({ onNewGame, onPauseTimer, onGetHint, onShowTechniques, onToggleNotes, onSettings, isNotesMode = false, isTimerActive = true, gameCompleted = false }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { mode, setMode } = useContext(ModeContext); // 使用模式上下文
  const sudokuContext = useSudoku();
  const { startLoading, stopLoading } = useLoading();
  const [showDifficultyModal, setShowDifficultyModal] = useState(false); // 控制难度选择模态框显示
  const [isNotesButtonActive, setIsNotesButtonActive] = useState(false); // 控制候选数按钮激活状态
  
  // 添加状态用于跟踪长按功能
  const [isLongPressActive, setIsLongPressActive] = useState(false); // 控制是否处于长按状态
  const [showProgressBar, setShowProgressBar] = useState(false); // 控制进度条显示
  const [progress, setProgress] = useState(0); // 进度条进度
  const longPressTimer = useRef(null); // 长按计时器
  const progressTimer = useRef(null); // 进度条计时器

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

  // 切换模式
  const toggleMode = () => {
    setMode(mode === 'game' ? 'learning' : 'game');
  };
  
  // 处理按钮按下
  const handleMouseDown = () => {
    // 立即开始显示填充动画，不延迟
    setShowProgressBar(true);
    setProgress(0);
    
    // 启动填充动画（3秒内完成）
    const startTime = Date.now();
    const duration = 3000; // 3秒，符合用户要求
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        progressTimer.current = requestAnimationFrame(updateProgress);
      } else {
        // 填充动画完成，执行长按操作
        handleLongPress();
      }
    };
    
    progressTimer.current = requestAnimationFrame(updateProgress);
  };
  
  // 处理按钮释放
  const handleMouseUp = () => {
    // 清除长按计时器
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    
    // 清除进度条计时器
    if (progressTimer.current) {
      cancelAnimationFrame(progressTimer.current);
      progressTimer.current = null;
    }
    
    // 如果进度条正在显示但未完成，执行短点击操作
    if (showProgressBar && progress < 100) {
      handleShortClick();
    }
    
    // 重置状态
    setShowProgressBar(false);
    setProgress(0);
  };
  
  // 处理短点击
  const handleShortClick = () => {
    console.log('候选数按钮短点击');
    console.log('sudokuContext:', sudokuContext);
    
    // 检查sudokuContext是否存在
    if (!sudokuContext) {
      console.log('sudokuContext不存在');
      toast.info(t('errorOccurred', { defaultMessage: '系统错误，请刷新页面重试' }), {
        position: 'top-right',
        autoClose: 2000
      });
      return;
    }
    
    // 检查是否有选中的单元格
    if (sudokuContext.selectedCell) {
      const { row, col } = sudokuContext.selectedCell;
      console.log('选中的单元格:', row, col);
      
      // 检查单元格是否为空白（值为0）
      if (sudokuContext.currentBoard && sudokuContext.currentBoard[row] && sudokuContext.currentBoard[row][col] === 0) {
        console.log('单元格是空白的，准备填充候选数');
        // 为选中的空白单元格填充候选数
        if (sudokuContext.fillSelectedCellCandidates) {
          console.log('调用fillSelectedCellCandidates方法');
          sudokuContext.fillSelectedCellCandidates(row, col);
        } else {
          console.log('fillSelectedCellCandidates方法不存在');
          toast.info(t('functionNotAvailable', { defaultMessage: '该功能暂不可用' }), {
            position: 'top-right',
            autoClose: 2000
          });
        }
      } else {
        console.log('单元格不是空白的或currentBoard不存在');
        // 如果选中的不是空白单元格，显示提示信息
        toast.info(t('selectEmptyCell', { defaultMessage: '请选择一个空白单元格' }), {
          position: 'top-right',
          autoClose: 2000
        });
      }
    } else {
      console.log('没有选中的单元格');
      // 如果没有选中的单元格，显示提示信息
      toast.info(t('selectCellForCandidates', { defaultMessage: '请先选择一个空白单元格' }), {
        position: 'top-right',
        autoClose: 2000
      });
    }
  };
  
  // 处理长按
  const handleLongPress = () => {
    console.log('候选数按钮长按');
    setIsLongPressActive(true);
    // 为所有空白单元格填充候选数
    if (onToggleNotes) {
      onToggleNotes();
      setIsNotesButtonActive(true); // 设置为激活状态
    }
    
    // 3秒后自动恢复按钮状态
    setTimeout(() => {
      setIsLongPressActive(false);
      setShowProgressBar(false);
      setProgress(0);
    }, 3000);
  };
  
  // 处理触摸事件（移动端支持）
  const handleTouchStart = (e) => {
    handleMouseDown();
  };
  
  const handleTouchEnd = (e) => {
    handleMouseUp();
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
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            title={t('notes')} 
            isActive={isNotesButtonActive || isLongPressActive}
            style={{ position: 'relative' }} // 为进度条定位添加相对定位
          >
            <ButtonIcon>
              {isLongPressActive ? (
                // 长按状态下显示"All"角标的图标
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  {/* 数独格子背景 */}
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="transparent" stroke="currentColor" strokeWidth="1.5"/>
                  {/* 添加2x2网格分割线 */}
                  <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
                  {/* 显示两个数字：2（左上角）和5（右下角） */}
                  <text x="7" y="10" fontSize="6" fontWeight="bold">2</text>
                  <text x="15" y="18" fontSize="6" fontWeight="bold">5</text>
                  {/* 添加"All"角标 */}
                  <text x="18" y="6" fontSize="6" fontWeight="900" fill="currentColor">All</text>
                </svg>
              ) : (
                // 正常状态下显示原来的图标
                <Icons.Notes />
              )}
            </ButtonIcon>
            
            {/* 从左向右的底色填充特效 */}
            {showProgressBar && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${progress}%`,
                height: '100%',
                backgroundColor: 'rgba(52, 152, 219, 0.3)', // 半透明蓝色
                zIndex: -1, // 确保在按钮内容下方
                transition: 'width 0.1s linear'
              }} />
            )}
          </NavButton>
          
          {/* 模式切换按钮 */}
          <NavButton onClick={toggleMode} title={mode === 'game' ? (t('switchToLearningMode') || '切换到学习模式') : (t('switchToGameMode') || '切换到游戏模式')}>
            <ButtonIcon style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {mode === 'game' ? <GameModeIcon /> : <LearningModeIcon />}
              <span style={{ fontSize: '14px', fontWeight: 'bold', lineHeight: 1, height: '24px', display: 'flex', alignItems: 'center' }}>
                {mode === 'game' ? t('gameMode') || '游戏' : t('learningMode') || '学习'}
              </span>
            </ButtonIcon>
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