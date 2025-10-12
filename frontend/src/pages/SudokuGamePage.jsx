import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SudokuBoard from '../components/SudokuBoard';
import ControlPanel from '../components/ControlPanel';
import NavigationBlock from '../components/NavigationBlock';
import { useSudoku } from '../context/SudokuContext';
import { useLoading } from '../context/LoadingContext';
import './SudokuGamePageStyles.css';

const SudokuGamePage = () => {
  const navigate = useNavigate();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const sudokuContext = useSudoku();
  
  // 安全地从sudokuContext中解构值，提供默认值
  const currentBoard = sudokuContext?.currentBoard || Array(9).fill().map(() => Array(9).fill(0));
  const selectedCell = sudokuContext?.selectedCell || null;
  const difficulty = sudokuContext?.difficulty || 'medium';
  const timeElapsed = sudokuContext?.timeElapsed || 0;
  const errorCount = sudokuContext?.errorCount || 0;
  const isTimerActive = sudokuContext?.isTimerActive ?? true;
  const isNotesMode = sudokuContext?.isNotesMode ?? false;
  const setSelectedCell = sudokuContext?.setSelectedCell || (() => {});
  const setDifficulty = sudokuContext?.setDifficulty || (() => {});
  const generateNewPuzzle = sudokuContext?.generateNewPuzzle || (() => Promise.resolve());
  const toggleNotesMode = sudokuContext?.toggleNotesMode || (() => {});
  const toggleTimer = sudokuContext?.toggleTimer || (() => {});
  const getHint = sudokuContext?.getHint || (() => {});
  const openSettings = sudokuContext?.openSettings || (() => {});
  
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  
  const boardContainerRef = useRef(null);
  const timerRef = useRef(null);
  
  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      const portrait = window.innerHeight > window.innerWidth;
      setIsPortrait(portrait);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // 初始加载时执行一次
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 处理单元格选择
  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };
  
  // 格式化时间显示
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // 获取难度名称
  const getDifficultyName = () => {
    const difficultyNames = {
      easy: '简单',
      medium: '中等',
      hard: '困难'
    };
    return difficultyNames[difficulty] || difficulty;
  };
  
  // 处理数字选择
  const handleNumberSelect = (number) => {
    if (!selectedCell) return;
    
    try {
      if (sudokuContext?.updateCell) {
        sudokuContext.updateCell(selectedCell.row, selectedCell.col, number);
      } else {
        console.warn('updateCell function not available in context');
      }
    } catch (error) {
      console.error('Error updating cell:', error);
    }
  };

  // 增强的清除单元格功能
  const enhancedClearCell = () => {
    if (!selectedCell) return;
    
    try {
      if (sudokuContext?.clearCell) {
        sudokuContext.clearCell(selectedCell.row, selectedCell.col);
      } else {
        console.warn('clearCell function not available in context');
      }
    } catch (error) {
      console.error('Error clearing cell:', error);
    }
  };

  // 处理新游戏
  const handleNewGame = async () => {
    try {
      // 显示加载状态
      if (startLoading) {
        startLoading('生成新谜题...');
      }
      
      // 生成新的谜题
      try {
        if (sudokuContext?.generateNewPuzzle) {
          await sudokuContext.generateNewPuzzle('easy'); // 默认简单难度
        } else {
          console.warn('generateNewPuzzle function not available in context');
          // 尝试使用离线谜题作为备选
          useOfflinePuzzle();
        }
      } catch (apiError) {
        console.error('API调用失败，尝试使用离线谜题:', apiError);
        useOfflinePuzzle();
      }
      
      // 重置选中的单元格
      setSelectedCell(null);
      
    } catch (error) {
      console.error('Error starting new game:', error);
    } finally {
      // 隐藏加载状态
      if (stopLoading) {
        stopLoading();
      }
    }
  };

  // 提供离线谜题作为备选
  const useOfflinePuzzle = () => {
    // 简单的离线谜题示例
    const offlinePuzzle = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];
    
    // 如果上下文支持直接设置棋盘，尝试设置离线谜题
    if (sudokuContext?.setBoard) {
      sudokuContext.setBoard(offlinePuzzle);
    }
  };
  
  // 处理暂停计时
  const handlePauseTimer = () => {
    if (toggleTimer) {
      toggleTimer();
    }
  };

  // 处理获取提示
  const handleGetHint = () => {
    if (getHint) {
      getHint();
    }
  };

  // 处理切换候选数
  const handleToggleNotes = () => {
    if (toggleNotesMode) {
      toggleNotesMode();
    }
  };

  // 处理打开设置
  const handleSettings = () => {
    if (openSettings) {
      openSettings();
    }
  };
  
  return (
    <div className="sudoku-game-container">
      {/* 主要内容区域 */}
      <div className="main-content">
        {isPortrait ? (
          // 竖屏模式：垂直排列所有组件
          <>
            {/* 导航栏区块 - 包含5个图标按钮 */}
            <div className="nav-block">
              <NavigationBlock
                onNewGame={handleNewGame}
                onPauseTimer={handlePauseTimer}
                onGetHint={handleGetHint}
                onToggleNotes={handleToggleNotes}
                onSettings={handleSettings}
                isNotesMode={isNotesMode}
                isTimerActive={isTimerActive}
              />
            </div>
            
            {/* 显示区块 - 精简显示 */}
            <div className="display-block">
              <div>
                错误：<span className="value error-count">{errorCount}</span>
              </div>
              <div>
                {getDifficultyName()}
              </div>
              <div>
                {formatTime(timeElapsed)}
              </div>
            </div>
            
            {/* 数独棋盘 */}
            <div className="board-container" ref={boardContainerRef}>
              <SudokuBoard
                board={currentBoard || Array(9).fill().map(() => Array(9).fill(0))}
                selectedCell={selectedCell}
                highlightedCells={sudokuContext?.highlightedCells || []}
                onCellClick={handleCellClick}
              />
            </div>
            
            {/* 操作面板 */}
            <ControlPanel
              onNumberSelect={handleNumberSelect}
              onClearCell={enhancedClearCell}
              selectedNumber={selectedCell?.value || null}
            />
          </>
        ) : (
          // 横屏模式：按照UI文档要求的两行两列布局
          <>
            {/* 顶部区域：导航栏和显示区块 */}
            <div className="top-row">
              {/* 导航栏区块 - 左侧，与棋盘同宽 */}
              <div className="nav-block">
                <NavigationBlock
                  onNewGame={handleNewGame}
                  onPauseTimer={handlePauseTimer}
                  onGetHint={handleGetHint}
                  onToggleNotes={handleToggleNotes}
                  onSettings={handleSettings}
                  isNotesMode={isNotesMode}
                  isTimerActive={isTimerActive}
                />
              </div>
              
              {/* 显示区块 - 右侧，宽度为棋盘的2/3，精简显示 */}
              <div className="display-block">
                <div>
                  错误：<span className="value error-count">{errorCount}</span>
                </div>
                <div>
                  {getDifficultyName()}
                </div>
                <div>
                  {formatTime(timeElapsed)}
                </div>
              </div>
            </div>
            
            {/* 底部区域：数独棋盘和操作区块 */}
            <div className="bottom-row">
              {/* 数独棋盘 - 左侧，作为尺寸基准 */}
              <div className="board-container" ref={boardContainerRef}>
                <SudokuBoard
                  board={currentBoard || Array(9).fill().map(() => Array(9).fill(0))}
                  selectedCell={selectedCell}
                  highlightedCells={sudokuContext?.highlightedCells || []}
                  onCellClick={handleCellClick}
                />
              </div>
              
              {/* 操作区块 - 右侧，宽度为棋盘的2/3，高度与棋盘一致 */}
              <ControlPanel
                onNumberSelect={handleNumberSelect}
                onClearCell={enhancedClearCell}
                selectedNumber={selectedCell?.value || null}
              />
            </div>
          </>
        )}
      </div>
      
      {/* 加载覆盖层 */}
      {isLoading && (
        <div className="loading-overlay">
          <div>加载中...</div>
        </div>
      )}
    </div>
  );
};

export default SudokuGamePage;