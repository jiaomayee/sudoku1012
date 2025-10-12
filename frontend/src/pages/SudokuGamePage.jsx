import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SudokuBoard from '../components/SudokuBoard';
import ControlPanel from '../components/ControlPanel';
import NavigationBlock from '../components/NavigationBlock';
import DifficultySelectModal from '../components/DifficultySelectModal';
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
  const setBoard = sudokuContext?.setBoard || (() => {});
  const setSolution = sudokuContext?.setSolution || (() => {});
  const generateNewPuzzle = sudokuContext?.generateNewPuzzle || (() => Promise.resolve());
  const toggleNotesMode = sudokuContext?.toggleNotesMode || (() => {});
  const toggleTimer = sudokuContext?.toggleTimer || (() => {});
  const getHint = sudokuContext?.getHint || (() => {});
  const openSettings = sudokuContext?.openSettings || (() => {});
  
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  
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
  const handleNewGame = () => {
    console.log('handleNewGame 被调用');
    // 显示难度选择模态框
    setShowDifficultyModal(true);
    console.log('设置 showDifficultyModal 为 true');
  };

  // 生成离线谜题（增强版）
  const generateOfflinePuzzle = (difficulty) => {
    console.log(`生成离线谜题，难度: ${difficulty}`);
    // 根据难度确定空格数量
    const emptyCellsCount = {
      easy: 40,
      medium: 50,
      hard: 58,
      expert: 64
    }[difficulty] || 50;

    // 创建一个已解决的数独
    const solution = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    // 深拷贝解决方案作为谜题
    const puzzle = solution.map(row => [...row]);

    // 随机移除一些数字来创建谜题
    let cellsToRemove = emptyCellsCount;
    while (cellsToRemove > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (puzzle[row][col] !== 0) {
        puzzle[row][col] = 0;
        cellsToRemove--;
      }
    }

    return { puzzle, solution };
  };

  // 处理难度选择
  const handleDifficultySelect = async (selectedDifficulty) => {
    try {
      console.log(`handleDifficultySelect 被调用，选择难度: ${selectedDifficulty}`);
      // 关闭模态框
      setShowDifficultyModal(false);
      console.log('关闭难度选择模态框');
      
      // 显示加载状态
      if (startLoading) {
        startLoading('生成新谜题...');
        console.log('显示加载状态');
      }
      
      // 检查sudokuContext
      console.log('sudokuContext 可用:', !!sudokuContext);
      console.log('startNewGame 方法可用:', !!sudokuContext?.startNewGame);
      console.log('generateNewPuzzle 方法可用:', !!sudokuContext?.generateNewPuzzle);
      
      // 使用SudokuContext中的startNewGame函数开始新游戏
      if (sudokuContext?.startNewGame) {
        console.log('调用 startNewGame 方法');
        await sudokuContext.startNewGame(null, selectedDifficulty);
        console.log('startNewGame 调用完成');
      } else if (sudokuContext?.generateNewPuzzle) {
        console.log('调用 generateNewPuzzle 方法');
        await sudokuContext.generateNewPuzzle(selectedDifficulty);
        console.log('generateNewPuzzle 调用完成');
      } else {
        console.warn('无法开始新游戏：上下文函数不可用');
        
        // 备用方案：使用离线谜题生成器
        console.log('使用备用方案：离线谜题生成器');
        if (setDifficulty) {
          setDifficulty(selectedDifficulty);
        }
        const offlinePuzzle = generateOfflinePuzzle(selectedDifficulty);
        console.log('离线谜题生成完成');
        
        if (sudokuContext?.setCurrentBoard && sudokuContext?.setCurrentPuzzle && sudokuContext?.setSolution) {
          console.log('设置谜题到上下文');
          sudokuContext.setCurrentPuzzle(offlinePuzzle);
          sudokuContext.setCurrentBoard(offlinePuzzle.puzzle);
          sudokuContext.setSolution(offlinePuzzle.solution);
        }
        setSelectedCell(null);
        console.log('重置选中单元格');
      }
      
    } catch (error) {
      console.error('Error starting new game:', error);
      console.error('错误详情:', error.message, error.stack);
    } finally {
      // 隐藏加载状态
      if (stopLoading) {
        stopLoading();
        console.log('隐藏加载状态');
      }
    }
  };

  // 初始化游戏
  useEffect(() => {
    // 检查是否已有棋盘数据
    if (!currentBoard || currentBoard.every(row => row.every(cell => cell === 0))) {
      // 如果没有棋盘数据，尝试生成默认谜题
      const initializeGame = async () => {
        try {
          if (startLoading) {
            startLoading('加载游戏...');
          }
          
          if (sudokuContext?.startNewGame) {
            await sudokuContext.startNewGame(null, difficulty);
          } else if (sudokuContext?.generateNewPuzzle) {
            await sudokuContext.generateNewPuzzle(difficulty);
          } else {
            // 备用：使用离线谜题
            console.log('初始化使用离线谜题');
            // 安全地导入并使用离线谜题生成函数
            try {
              // 动态导入离线谜题生成逻辑
              const { generateOfflinePuzzle } = await import('../context/SudokuContext');
              if (generateOfflinePuzzle) {
                const offlinePuzzle = generateOfflinePuzzle(difficulty);
                if (sudokuContext?.setCurrentBoard && sudokuContext?.setCurrentPuzzle && sudokuContext?.setSolution) {
                  sudokuContext.setCurrentPuzzle(offlinePuzzle);
                  sudokuContext.setCurrentBoard(offlinePuzzle?.puzzle || Array(9).fill().map(() => Array(9).fill(0)));
                  sudokuContext.setSolution(offlinePuzzle?.solution || Array(9).fill().map(() => Array(9).fill(0)));
                }
              }
            } catch (importError) {
              console.error('导入离线谜题生成函数失败:', importError);
              // 创建空棋盘作为最后备用
              const emptyBoard = Array(9).fill().map(() => Array(9).fill(0));
              if (sudokuContext?.setCurrentBoard && sudokuContext?.setCurrentPuzzle && sudokuContext?.setSolution) {
                sudokuContext.setCurrentPuzzle({ puzzle: emptyBoard, solution: emptyBoard });
                sudokuContext.setCurrentBoard(emptyBoard);
                sudokuContext.setSolution(emptyBoard);
              }
            }
          }
        } catch (error) {
          console.error('初始化游戏失败:', error);
        } finally {
          if (stopLoading) {
            stopLoading();
          }
        }
      };
      
      initializeGame();
    }
  }, []); // 仅在组件挂载时运行一次
  
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
                错误：<span className="value error-count" style={{color: '#ff4d4d'}}>{errorCount}</span>
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
                incorrectCells={sudokuContext?.incorrectCells || new Set()}
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
                  错误：<span className="value error-count" style={{color: '#ff4d4d'}}>{errorCount}</span>
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
                incorrectCells={sudokuContext?.incorrectCells || new Set()}
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
      
      {/* 难度选择模态框 */}
      <DifficultySelectModal
        isOpen={showDifficultyModal}
        onClose={() => setShowDifficultyModal(false)}
        onSelectDifficulty={handleDifficultySelect}
        initialDifficulty={difficulty}
      />
    </div>
  );
};

export default SudokuGamePage;