import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useSudoku, DIFFICULTY_LEVELS } from '../context/SudokuContext';
import { useUser } from '../context/UserContext';
import { useLoading } from '../context/LoadingContext';
import LoadingSpinner from '../components/LoadingSpinner';
import SudokuBoard from '../components/SudokuBoard';
import NavigationBlock from '../components/NavigationBlock';
import DisplayBlock from '../components/DisplayBlock';
import ControlPanel from '../components/ControlPanel';
import TopNavbar from '../components/TopNavbar';

// 主应用容器 - 支持横竖屏类名切换，为顶部菜单栏留出空间
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme?.background || '#f5f5f5'};
  color: ${props => props.theme?.text || '#333333'};
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding-top: 60px; /* 为固定的顶部菜单栏留出空间 */
`;

// 顶部区域：导航栏和显示区块
const TopRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`;

// 底部区域：数独棋盘和操作区块
const BottomRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`;

// 主要内容区域：包含所有四个区块 - 符合文档要求的最大宽度和间距
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

// 加载覆盖层
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

function SudokuGamePage() {
  const { theme } = useTheme();
  const { isLoading, setIsLoading } = useLoading();
  const { userId } = useUser();
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [timerActive, setTimerActive] = useState(true);
  
  // 从SudokuContext获取状态和方法
  const {
    currentBoard,
    selectedCell,
    highlightedCells,
    difficulty,
    timeElapsed,
    gameStarted,
    history,
    historyIndex,
    candidates,
    notesMode,
    setSelectedCell,
    setDifficulty,
    toggleNotesMode,
    selectNumber,
    clearCell,
    deleteCell,
    generateNewPuzzle,
    undo,
    redo,
    saveGameProgress,
    getHint,
    solvePuzzle,
    clearAll
  } = useSudoku();
  
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [errorCount, setErrorCount] = useState(0);
  const sudokuBoardRef = useRef(null);
  const timerRef = useRef(null);
  
  // 处理屏幕尺寸变化
  useEffect(() => {
    const handleResize = () => {
      const newIsPortrait = window.innerHeight > window.innerWidth;
      setIsPortrait(newIsPortrait);
      
      // 更新布局类 - 符合文档要求
      const appContainer = document.querySelector('.app-container');
      if (appContainer) {
        if (!newIsPortrait) {
          appContainer.classList.add('landscape');
          appContainer.classList.remove('portrait');
        } else {
          appContainer.classList.add('portrait');
          appContainer.classList.remove('landscape');
        }
      }
      
      // 调整棋盘尺寸
      adjustBoardSize(newIsPortrait);
    };
    
    window.addEventListener('resize', handleResize);
    
    // 初始加载时执行一次
    handleResize();
    
    // 初始化一个示例棋盘
    if (!currentBoard && !gameStarted) {
      const mockBoard = Array(9).fill().map(() => Array(9).fill(null));
      // 添加一些示例数字
      const exampleNumbers = [
        { row: 0, col: 0, value: 5 },
        { row: 0, col: 1, value: 3 },
        { row: 0, col: 4, value: 7 },
        { row: 1, col: 0, value: 6 },
        { row: 1, col: 3, value: 1 },
        { row: 1, col: 4, value: 9 },
        { row: 1, col: 5, value: 5 },
        { row: 2, col: 1, value: 9 },
        { row: 2, col: 2, value: 8 },
        { row: 2, col: 7, value: 6 },
        { row: 3, col: 0, value: 8 },
        { row: 3, col: 4, value: 6 },
        { row: 3, col: 8, value: 3 },
        { row: 4, col: 0, value: 4 },
        { row: 4, col: 3, value: 8 },
        { row: 4, col: 5, value: 3 },
        { row: 4, col: 8, value: 1 },
        { row: 5, col: 0, value: 7 },
        { row: 5, col: 4, value: 2 },
        { row: 5, col: 8, value: 6 },
        { row: 6, col: 1, value: 6 },
        { row: 6, col: 6, value: 2 },
        { row: 6, col: 7, value: 8 },
        { row: 7, col: 3, value: 4 },
        { row: 7, col: 4, value: 1 },
        { row: 7, col: 5, value: 9 },
        { row: 7, col: 8, value: 5 },
        { row: 8, col: 4, value: 8 },
        { row: 8, col: 7, value: 7 },
        { row: 8, col: 8, value: 9 }
      ];
      
      exampleNumbers.forEach(num => {
        mockBoard[num.row][num.col] = num.value;
      });
    }
    
    return () => window.removeEventListener('resize', handleResize);
  }, [currentBoard, gameStarted]);
  
  // 根据屏幕方向调整棋盘尺寸 - 完全符合UI文档要求
  const adjustBoardSize = useCallback((portrait) => {
    const boardRef = sudokuBoardRef.current;
    const navBlockRef = document.querySelector('.nav-block');
    const displayBlockRef = document.querySelector('.display-block');
    const controlPanelRef = document.querySelector('.control-panel');
    
    let boardSize;
    
    if (portrait) {
      // 竖屏模式：棋盘宽度接近设备最大宽度，且为正方形
      boardSize = Math.min(window.innerWidth * 0.9, 400); // 最大宽度400px
      
      // 竖屏时各区块宽度与棋盘一致
      const blockWidth = boardSize;
      
      if (navBlockRef) navBlockRef.style.width = `${blockWidth}px`;
      if (displayBlockRef) displayBlockRef.style.width = `${blockWidth}px`;
      if (controlPanelRef) {
        controlPanelRef.style.width = `${blockWidth}px`;
        controlPanelRef.style.height = 'auto';
        // 根据屏幕剩余空间计算最大高度
        const screenAvailableHeight = window.innerHeight - (boardRef?.offsetTop || 0) - boardSize - 30;
        controlPanelRef.style.maxHeight = `${Math.min(screenAvailableHeight, 300)}px`;
        controlPanelRef.style.overflowY = 'auto';
      }
    } else {
      // 横屏模式：棋盘宽/高不小于屏幕高度二分之一
      const minBoardSize = Math.max(window.innerHeight * 0.5, 400);
      const maxBoardSize = Math.min(window.innerWidth * 0.7, 600); // 确保有足够空间给操作区块
      boardSize = Math.min(minBoardSize, maxBoardSize);
      
      // 横屏时导航栏宽度与棋盘一致
      if (navBlockRef) navBlockRef.style.width = `${boardSize}px`;
      
      // 横屏时操作面板和显示区块宽度为棋盘的2/3
      const controlPanelWidth = boardSize * 0.6667;
      if (controlPanelRef) {
        controlPanelRef.style.width = `${controlPanelWidth}px`;
        controlPanelRef.style.height = `${boardSize}px`;
        controlPanelRef.style.maxHeight = 'none';
        controlPanelRef.style.overflowY = 'visible';
      }
      if (displayBlockRef) displayBlockRef.style.width = `${controlPanelWidth}px`;
    }
    
    // 设置棋盘尺寸和CSS变量
    if (boardRef) {
      boardRef.style.setProperty('--board-width', `${boardSize}px`);
      boardRef.style.width = `${boardSize}px`;
      boardRef.style.height = `${boardSize}px`;
      
      // 设置控制面板宽度CSS变量
      const controlPanelWidth = portrait ? boardSize : boardSize * 0.6667;
      boardRef.style.setProperty('--control-panel-width', `${controlPanelWidth}px`);
      
      // 更新单元格大小
      updateCellSize(boardRef, boardSize);
    }
  }, []);
  
  // 更新数独棋盘单元格大小 - 符合文档要求的计算方式
  const updateCellSize = (boardRef, boardSize) => {
    if (!boardRef) return;
    
    const cells = boardRef.querySelectorAll('.cell');
    // 计算单元格大小（考虑边框和间距）
    const cellSize = (boardSize - 18) / 9; // 9x9网格，减去边框和间距
    
    cells.forEach(cell => {
      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.style.fontSize = `${cellSize * 0.7}px`; // 根据单元格大小调整字体
    });
  };
  
  // 处理单元格点击
  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };
  
  // 处理数字选择
  const handleNumberSelect = (number) => {
    if (selectedCell) {
      setSelectedNumber(number);
      selectNumber(selectedCell.row, selectedCell.col, number);
      // 模拟错误检查
      if (Math.random() > 0.9) { // 10%概率模拟错误
        setErrorCount(prev => prev + 1);
      }
    }
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

  // 暂停/继续计时器
  const handlePauseTimer = () => {
    setTimerActive(prev => !prev);
    
    if (timerActive) {
      // 暂停计时器
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    } else {
      // 继续计时器 - 这里应该由Context管理计时器，所以我们只更新状态
      setTimerActive(true);
    }
  };

  // 获取提示
  const handleGetHint = () => {
    getHint();
  };

  // 切换候选数模式
  const handleToggleNotes = () => {
    toggleNotesMode();
  };

  // 打开设置菜单
  const handleSettings = () => {
    alert('设置功能即将推出');
  };

  // 处理新游戏
  const handleNewGame = useCallback(() => {
    setIsLoading(true);
    try {
      generateNewPuzzle(difficulty);
      setErrorCount(0);
      setSelectedNumber(null);
      setTimerActive(true);
    } finally {
      setIsLoading(false);
    }
  }, [difficulty, generateNewPuzzle]);
  
  // 处理难度变更
  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };
  
  // 增强的清空单元格函数
  const enhancedClearCell = () => {
    clearCell();
    setSelectedNumber(null);
  };
  
  // 增强的清空所有函数
  const enhancedClearAll = () => {
    clearAll();
    setSelectedNumber(null);
  };
  
  // 检查是否可以撤销/重做
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  
  return (
    <AppContainer theme={theme} className={isPortrait ? 'portrait' : 'landscape'}>
      {/* 顶部菜单栏 - 固定定位，显示游戏名称和语言切换 */}
      <TopNavbar />
      
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner theme={theme} />
        </LoadingOverlay>
      )}
      
      <MainContent>
        {isPortrait ? (
          // 竖屏布局：单列 - 所有区块宽度与棋盘一致
          <>
            {/* 导航栏区块 - 包含五个核心功能按钮 */}
            <NavigationBlock
              onNewGame={handleNewGame}
              onPauseTimer={handlePauseTimer}
              onGetHint={handleGetHint}
              onToggleNotes={handleToggleNotes}
              onSettings={handleSettings}
              isNotesMode={notesMode}
            />
            
            {/* 显示区块 - 简洁显示错误次数、难度和计时器 */}
            <DisplayBlock
              errorCount={errorCount}
              difficulty={getDifficultyName()}
              time={formatTime(timeElapsed)}
              isPortrait={true}
            />
            
            {/* 数独棋盘 - 核心模块 */}
            <div ref={sudokuBoardRef} className="sudoku-board">
              <SudokuBoard
                board={currentBoard}
                selectedCell={selectedCell}
                highlightedCells={highlightedCells}
                onCellClick={handleCellClick}
                candidates={candidates}
                notesMode={notesMode}
              />
            </div>
            
            {/* 操作区块 - 宽度为棋盘宽度的2/3 */}
            <ControlPanel
              onNumberSelect={handleNumberSelect}
              onClearCell={enhancedClearCell}
              selectedNumber={selectedNumber}
            />
          </>
        ) : (
          // 横屏布局：两行两列 - 符合文档要求的尺寸比例
          <>
            {/* 第一行：导航栏和显示区块 */}
            <TopRow>
              {/* 导航栏区块 - 左侧，与棋盘同宽 */}
              <NavigationBlock
                onNewGame={handleNewGame}
                onPauseTimer={handlePauseTimer}
                onGetHint={handleGetHint}
                onToggleNotes={handleToggleNotes}
                onSettings={handleSettings}
                isNotesMode={notesMode}
              />
              
              {/* 显示区块 - 右侧，与操作区块同宽 */}
              <DisplayBlock
                errorCount={errorCount}
                difficulty={getDifficultyName()}
                time={formatTime(timeElapsed)}
                isPortrait={false}
              />
            </TopRow>
            
            {/* 第二行：数独棋盘和操作区块 */}
            <BottomRow>
              {/* 数独棋盘 - 左侧，作为尺寸基准 */}
              <div ref={sudokuBoardRef} className="sudoku-board">
                <SudokuBoard
                  board={currentBoard}
                  selectedCell={selectedCell}
                  highlightedCells={highlightedCells}
                  onCellClick={handleCellClick}
                  candidates={candidates}
                  notesMode={notesMode}
                />
              </div>
              
              {/* 操作区块 - 右侧，宽度为棋盘宽度的2/3 */}
              <ControlPanel
                onNumberSelect={handleNumberSelect}
                onClearCell={enhancedClearCell}
                selectedNumber={selectedNumber}
              />
            </BottomRow>
          </>
        )}
      </MainContent>
    </AppContainer>
  );
}

export default SudokuGamePage;