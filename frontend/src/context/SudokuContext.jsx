import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import localforage from 'localforage';
import { useUser } from './UserContext';
import { api } from '../services/api';

// 创建数独上下文
const SudokuContext = createContext();

// 难度级别定义
export const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
  EXPERT: 'expert'
};

export const SudokuContextProvider = ({ children }) => {
  const { userId, updateUserStats } = useUser();
  
  // 数独状态
  const [currentPuzzle, setCurrentPuzzle] = useState(null);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [solution, setSolution] = useState(null);
  const [difficulty, setDifficulty] = useState(DIFFICULTY_LEVELS.MEDIUM);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [candidates, setCandidates] = useState({});
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [activeTechniques, setActiveTechniques] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // 初始化时自动生成谜题
  useEffect(() => {
    const initPuzzle = async () => {
      console.log('SudokuContext: 初始化自动生成谜题');
      try {
        // 使用离线谜题生成器
        const defaultDifficulty = DIFFICULTY_LEVELS.MEDIUM;
        console.log(`使用默认难度: ${defaultDifficulty}`);
        
        // 根据难度确定空格数量
        const emptyCellsCount = {
          easy: 40,
          medium: 50,
          hard: 58,
          expert: 64
        }[defaultDifficulty] || 50;

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

        const offlinePuzzle = { puzzle, solution };
        console.log('离线谜题生成完成');
        
        setCurrentPuzzle(offlinePuzzle);
        setCurrentBoard(offlinePuzzle.puzzle);
        setSolution(offlinePuzzle.solution);
        setGameStarted(true);
        setGameCompleted(false);
        setTimerActive(true);
        console.log('谜题已设置到状态中');
      } catch (error) {
        console.error('自动初始化谜题失败:', error);
      }
    };

    initPuzzle();
  }, []); // 仅在组件挂载时运行一次

  // 自动保存进度
  useEffect(() => {
    if (currentPuzzle && currentBoard && gameStarted && !gameCompleted) {
      const autoSaveTimer = setTimeout(() => {
        saveGameProgress();
      }, 30000); // 30秒自动保存一次

      return () => clearTimeout(autoSaveTimer);
    }
  }, [currentBoard, gameStarted, gameCompleted]);
  // 游戏计时器
  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerActive]);

  // 加载保存的进度
  const loadSavedProgress = useCallback(async () => {
    try {
      if (!userId) return null;
      
      // 获取所有保存的进度
      const keys = await localforage.keys();
      const progressKeys = keys.filter(key => key.startsWith(`progress_${userId}_`));
      
      if (progressKeys.length === 0) return null;
      
      // 找到最近修改的进度
      let latestProgress = null;
      let latestTimestamp = 0;
      
      for (const key of progressKeys) {
        const progress = await localforage.getItem(key);
        if (progress.lastModified > latestTimestamp) {
          latestTimestamp = progress.lastModified;
          latestProgress = progress;
        }
      }
      
      if (latestProgress) {
        setCurrentPuzzle({
          id: latestProgress.puzzleId,
          puzzle: latestProgress.puzzle
        });
        setCurrentBoard(latestProgress.currentBoard);
        setSolution(latestProgress.solution);
        setDifficulty(latestProgress.difficulty);
        setTimeElapsed(latestProgress.timeElapsed);
        setGameStarted(latestProgress.gameStarted);
        setGameCompleted(latestProgress.gameCompleted);
        setTimerActive(false); // 加载时暂停计时器
      }
      
      return latestProgress;
    } catch (error) {
      console.error('加载游戏进度失败:', error);
      return null;
    }
  }, [userId]);

  // 保存游戏进度
  const saveGameProgress = useCallback(async () => {
    try {
      if (!userId || !currentPuzzle || !currentBoard) return;
      
      const progress = {
        puzzleId: currentPuzzle.id,
        puzzle: currentPuzzle.puzzle,
        solution: solution,
        difficulty: difficulty,
        currentBoard: currentBoard,
        timeElapsed: timeElapsed,
        gameStarted: gameStarted,
        gameCompleted: gameCompleted,
        lastModified: Date.now()
      };
      
      await localforage.setItem(`progress_${userId}_${currentPuzzle.id}`, progress);
      return true;
    } catch (error) {
      console.error('保存游戏进度失败:', error);
      return false;
    }
  }, [userId, currentPuzzle, currentBoard, solution, difficulty, timeElapsed, gameStarted, gameCompleted]);

  // 开始新游戏 - 优先使用离线生成方式
  const startNewGame = async (puzzleId = null, difficultyOverride = null) => {
    console.log('SudokuContext: 开始新游戏', { puzzleId, difficultyOverride });
    try {
      // 停止当前计时器并重置状态
      setTimerActive(false);
      setTimeElapsed(0);
      setGameCompleted(false);
      setHistory([]);
      setHistoryIndex(-1);
      
      // 使用指定难度或当前难度
      const targetDifficulty = difficultyOverride || difficulty;
      console.log('使用难度:', targetDifficulty);
      
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
      }
      
      // 直接使用离线生成方式（不再尝试API调用）
      console.log('直接使用离线谜题生成');
      
      // 根据难度确定空格数量
      const emptyCellsCount = {
        easy: 40,
        medium: 50,
        hard: 58,
        expert: 64
      }[targetDifficulty] || 50;

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

      const offlinePuzzle = { puzzle, solution };
      console.log('离线谜题生成完成');
      
      // 更新状态
      setCurrentPuzzle(offlinePuzzle);
      setCurrentBoard(offlinePuzzle.puzzle);
      setSolution(offlinePuzzle.solution);
      setGameStarted(true);
      setGameCompleted(false);
      setTimeElapsed(0);
      setTimerActive(true);
      setHistory([]);
      setHistoryIndex(-1);

      // 更新统计信息
      if (updateUserStats) {
        updateUserStats({ puzzlesStarted: 1 });
      }

      toast.success('已生成新谜题！', { position: 'top-right', autoClose: 2000 });
      console.log('新游戏设置完成');
      return offlinePuzzle;
    } catch (error) {
      console.error('开始新游戏失败:', error);
      toast.error('生成谜题失败，请重试', { position: 'top-right', autoClose: 2000 });
      return null;
    }
  };

  // 生成新谜题 - 优先使用离线生成方式
  const generateNewPuzzle = async (targetDifficulty = difficulty) => {
    console.log('SudokuContext: 生成新谜题', { targetDifficulty });
    try {
      // 停止当前计时器并重置状态
      setTimerActive(false);
      setTimeElapsed(0);
      setGameCompleted(false);
      setHistory([]);
      setHistoryIndex(-1);
      
      // 使用指定难度或当前难度
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
        console.log('已设置新难度:', targetDifficulty);
      }
      
      // 直接使用离线生成方式（不再尝试API调用）
      console.log('直接使用离线谜题生成');
      
      // 根据难度确定空格数量
      const emptyCellsCount = {
        easy: 40,
        medium: 50,
        hard: 58,
        expert: 64
      }[targetDifficulty] || 50;

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

      const offlinePuzzle = { puzzle, solution };
      console.log('离线谜题生成完成');
      
      // 更新状态
      setCurrentPuzzle(offlinePuzzle);
      setCurrentBoard(offlinePuzzle.puzzle);
      setSolution(offlinePuzzle.solution);
      setGameStarted(true);
      setGameCompleted(false);
      setTimeElapsed(0);
      setTimerActive(true);
      setHistory([]);
      setHistoryIndex(-1);

      // 更新统计信息
      if (updateUserStats) {
        updateUserStats({ puzzlesStarted: 1 });
      }

      toast.success('已生成新谜题！', { position: 'top-right', autoClose: 2000 });
      console.log('新谜题设置完成');
      return offlinePuzzle;
    } catch (error) {
      console.error('生成新谜题失败:', error);
      toast.error('生成谜题失败，请重试', { position: 'top-right', autoClose: 2000 });
      return null;
    }
  };

  // 填充数字
  const fillCell = (row, col, value) => {
    if (!gameStarted || gameCompleted) return;
    
    const newBoard = [...currentBoard.map(row => [...row])];
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ board: currentBoard, row, col, prevValue: currentBoard[row][col] });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 更新单元格
    newBoard[row][col] = value;
    setCurrentBoard(newBoard);
    
    // 检查游戏是否完成
    checkGameCompletion(newBoard);
  };

  // 更新单元格（供外部组件使用的别名）
  const updateCell = (row, col, value) => {
    fillCell(row, col, value);
  };

  // 清除单元格
  const clearCell = (row, col) => {
    if (!gameStarted || gameCompleted) return;
    
    const newBoard = [...currentBoard.map(row => [...row])];
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ board: currentBoard, row, col, prevValue: currentBoard[row][col] });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 清除单元格
    newBoard[row][col] = 0;
    setCurrentBoard(newBoard);
  };

  // 撤销操作
  const undo = () => {
    if (historyIndex >= 0) {
      const prevState = history[historyIndex];
      setCurrentBoard(prevState.board);
      setHistoryIndex(historyIndex - 1);
      setGameCompleted(false); // 撤销后游戏不再完成
    }
  };

  // 重做操作
  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setCurrentBoard(nextState.board);
      setHistoryIndex(historyIndex + 1);
      // 再次检查游戏是否完成
      checkGameCompletion(nextState.board);
    }
  };

  // 检查游戏是否完成
  const checkGameCompletion = (board) => {
    if (!solution) return;
    
    // 检查每个单元格是否填充且正确
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!board[i][j] || board[i][j] !== solution[i][j]) {
          return;
        }
      }
    }
    
    // 游戏完成
    setGameCompleted(true);
    setTimerActive(false);
    
    // 更新统计信息
    if (updateUserStats) {
      updateUserStats({
        puzzlesCompleted: 1,
        puzzlesSolved: 1,
        totalTimePlayed: timeElapsed
      });
    }
    
    toast.success('恭喜！您成功完成了这个数独！', {
      position: 'top-right',
      autoClose: 3000
    });
    
    // 标记进度为已完成
    saveGameProgress();
  };

  // 获取候选数
  const getCandidates = async (row, col) => {
    try {
      const result = await api.getCandidates(currentBoard, row, col);
      setCandidates(result.candidates);
      return result.candidates;
    } catch (error) {
      console.error('获取候选数失败:', error);
      return [];
    }
  };

  // 识别可应用的技巧
  const identifyTechniques = async () => {
    try {
      const result = await api.identifyTechniques(currentBoard);
      setActiveTechniques(result.techniques);
      return result.techniques;
    } catch (error) {
      console.error('识别技巧失败:', error);
      return [];
    }
  };

  // 提示下一步
  const getHint = async () => {
    try {
      const result = await api.getHint(currentBoard, solution);
      return result;
    } catch (error) {
      console.error('获取提示失败:', error);
      toast.error('获取提示失败，请重试', {
        position: 'top-right',
        autoClose: 2000
      });
      return null;
    }
  };

  const value = {
    currentPuzzle,
    currentBoard,
    solution,
    difficulty,
    gameStarted,
    gameCompleted,
    timeElapsed,
    timerActive,
    selectedCell,
    candidates,
    highlightedCells,
    activeTechniques,
    history,
    historyIndex,
    
    setDifficulty,
    setSelectedCell,
    setHighlightedCells,
    setTimerActive,
    
    loadSavedProgress,
    saveGameProgress,
    startNewGame,
    generateNewPuzzle,
    fillCell,
    updateCell,
    clearCell,
    undo,
    redo,
    getCandidates,
    identifyTechniques,
    getHint
  };

  return <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>;
};

// 自定义Hook，方便使用数独上下文
export const useSudoku = () => {
  const context = useContext(SudokuContext);
  if (!context) {
    throw new Error('useSudoku must be used within a SudokuContextProvider');
  }
  return context;
};