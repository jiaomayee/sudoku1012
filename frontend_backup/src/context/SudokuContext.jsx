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
    if (timerActive && !gameCompleted) {
      timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerActive, gameCompleted]);

  // 加载保存的游戏进度
  const loadSavedProgress = useCallback(async (puzzleId = null) => {
    try {
      if (!userId) return null;
      
      // 获取特定谜题的进度或最近的进度
      const keys = await localforage.keys();
      const progressKeys = keys.filter(key => key.startsWith(`progress_${userId}_`));
      
      if (progressKeys.length === 0) return null;
      
      let targetKey;
      if (puzzleId) {
        targetKey = `progress_${userId}_${puzzleId}`;
        if (!progressKeys.includes(targetKey)) return null;
      } else {
        // 获取最近的进度
        const progressItems = await Promise.all(
          progressKeys.map(key => localforage.getItem(key))
        );
        
        const validProgress = progressItems
          .filter(item => item && !item.completed)
          .sort((a, b) => b.lastModified - a.lastModified);
        
        if (validProgress.length === 0) return null;
        
        targetKey = `progress_${userId}_${validProgress[0].puzzleId}`;
      }
      
      const savedProgress = await localforage.getItem(targetKey);
      if (savedProgress) {
        return savedProgress;
      }
      
      return null;
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

  // 开始新游戏
  const startNewGame = async (puzzleId = null, difficultyOverride = null) => {
    try {
      // 停止当前计时器
      setTimerActive(false);
      setTimeElapsed(0);
      setGameCompleted(false);
      setHistory([]);
      setHistoryIndex(-1);
      
      let puzzle;
      
      // 使用指定难度或当前难度
      const targetDifficulty = difficultyOverride || difficulty;
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
      }
      
      // 获取谜题
      if (puzzleId) {
        // 从ID获取特定谜题
        puzzle = await api.getPuzzleById(puzzleId);
      } else {
        // 获取随机谜题
        puzzle = await api.getRandomPuzzleByDifficulty(targetDifficulty);
      }
      
      // 检查是否有保存的进度
      const savedProgress = await loadSavedProgress(puzzle.id);
      
      if (savedProgress && !savedProgress.completed) {
        // 恢复保存的游戏
        setCurrentBoard(savedProgress.currentBoard);
        setTimeElapsed(savedProgress.timeElapsed);
        setGameStarted(true);
        toast.info('已恢复保存的游戏进度', {
          position: 'top-right',
          autoClose: 2000
        });
      } else {
        // 开始新游戏
        setCurrentBoard(puzzle.puzzle);
        setGameStarted(true);
        setTimerActive(true);
        toast.success('开始新游戏！', {
          position: 'top-right',
          autoClose: 2000
        });
      }
      
      setCurrentPuzzle(puzzle);
      setSolution(puzzle.solution);
      
      // 更新统计信息
      updateUserStats({ puzzlesStarted: 1 });
      
      return puzzle;
    } catch (error) {
      console.error('开始新游戏失败:', error);
      toast.error('加载谜题失败，请重试', {
        position: 'top-right',
        autoClose: 2000
      });
      return null;
    }
  };

  // 生成新谜题
  const generateNewPuzzle = async (difficultyLevel = null) => {
    try {
      const targetDifficulty = difficultyLevel || difficulty;
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
      }
      
      // 生成新谜题
      const newPuzzle = await api.generatePuzzle(targetDifficulty);
      
      setCurrentPuzzle(newPuzzle);
      setCurrentBoard(newPuzzle.puzzle);
      setSolution(newPuzzle.solution);
      setGameStarted(true);
      setGameCompleted(false);
      setTimeElapsed(0);
      setTimerActive(true);
      setHistory([]);
      setHistoryIndex(-1);
      
      // 更新统计信息
      updateUserStats({ puzzlesStarted: 1 });
      
      toast.success('已生成新谜题！', {
        position: 'top-right',
        autoClose: 2000
      });
      
      return newPuzzle;
    } catch (error) {
      console.error('生成新谜题失败:', error);
      toast.error('生成谜题失败，请重试', {
        position: 'top-right',
        autoClose: 2000
      });
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
    updateUserStats({
      puzzlesCompleted: 1,
      puzzlesSolved: 1,
      totalTimePlayed: timeElapsed
    });
    
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