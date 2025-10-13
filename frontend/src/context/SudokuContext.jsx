import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import localforage from 'localforage';
import { useUser } from './UserContext';
import { api } from '../services/api';
import DLX from '../utils/DLX'; // 添加DLX算法导入
import { generateSudoku, solveSudoku, hasUniqueSolution } from '../utils/sudokuUtils';

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
  const [originalPuzzle, setOriginalPuzzle] = useState(null); // 添加原始谜题状态，用于区分预填数字和用户输入数字
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
  const [errorCount, setErrorCount] = useState(0); // 添加错误计数状态
  const [incorrectCells, setIncorrectCells] = useState(new Set()); // 跟踪错误单元格的集合

  // 初始化时自动生成谜题
  useEffect(() => {
    const initPuzzle = async () => {
      console.log('SudokuContext: 初始化自动生成谜题');
      try {
        // 直接使用预设的数独题目
        console.log('使用预设的数独题目');
        const simplePuzzle = [
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
        
        const simpleSolution = [
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
        
        const puzzleData = { puzzle: simplePuzzle, solution: simpleSolution };
        console.log('预设谜题数据:', puzzleData);
        
        // 格式化数据
        const formattedData = formatPuzzleData(puzzleData);
        console.log('格式化后的数据:', formattedData);
        
        setCurrentPuzzle(formattedData);
        console.log('设置 currentPuzzle 完成');
        
        setOriginalPuzzle(formattedData.puzzle); // 保存原始谜题，用于区分预填数字
        console.log('设置 originalPuzzle 完成');
        
        setCurrentBoard(formattedData.puzzle);
        console.log('设置 currentBoard 完成，currentBoard:', formattedData.puzzle);
        
        setSolution(formattedData.solution);
        console.log('设置 solution 完成');
        
        setGameStarted(true);
        console.log('设置 gameStarted 为 true');
        
        setGameCompleted(false);
        setTimerActive(true);
        setErrorCount(0); // 初始化错误计数
        setIncorrectCells(new Set()); // 初始化错误单元格集合
        console.log('谜题初始化完成');
      } catch (error) {
        console.error('自动初始化谜题失败:', error);
        console.error('错误详情:', error.message, error.stack);
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
        setErrorCount(latestProgress.errorCount || 0); // 加载错误计数
        setIncorrectCells(new Set(latestProgress.incorrectCells || [])); // 加载错误单元格
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
        errorCount: errorCount,
        incorrectCells: Array.from(incorrectCells),
        lastModified: Date.now()
      };
      
      await localforage.setItem(`progress_${userId}_${currentPuzzle.id}`, progress);
      return true;
    } catch (error) {
      console.error('保存游戏进度失败:', error);
      return false;
    }
  }, [userId, currentPuzzle, currentBoard, solution, difficulty, timeElapsed, gameStarted, gameCompleted, errorCount, incorrectCells]);

  // 开始新游戏 - 根据难度选择生成方式
  const startNewGame = async (puzzleId = null, difficultyOverride = null) => {
    console.log('SudokuContext: 开始新游戏', { puzzleId, difficultyOverride });
    try {
      // 停止当前计时器并重置状态
      setTimerActive(false);
      setTimeElapsed(0);
      setGameCompleted(false);
      setHistory([]);
      setHistoryIndex(-1);
      setErrorCount(0); // 重置错误计数
      setIncorrectCells(new Set()); // 重置错误单元格
      
      // 使用指定难度或当前难度
      const targetDifficulty = difficultyOverride || difficulty;
      console.log('使用难度:', targetDifficulty);
      
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
      }
      
      let puzzleData;
      
      // 根据难度选择生成方式：专家难度从题库获取，其他难度使用程序生成
      if (targetDifficulty === DIFFICULTY_LEVELS.EXPERT) {
        console.log('专家难度：尝试从题库获取谜题');
        try {
          // 尝试从API获取题库中的专家级谜题
          puzzleData = await api.getRandomPuzzleByDifficulty(targetDifficulty);
          console.log('成功从题库获取专家级谜题');
        } catch (apiError) {
          console.warn('从题库获取专家级谜题失败，回退到程序生成:', apiError);
          // 如果API失败，回退到程序生成
          puzzleData = await generateOfflinePuzzle(targetDifficulty);
        }
      } else {
        console.log('非专家难度：使用程序生成谜题');
        // 简单/中等/困难难度使用程序生成
        puzzleData = await generateOfflinePuzzle(targetDifficulty);
      }

      // 格式化数据为统一格式
      const formattedData = formatPuzzleData(puzzleData);
      console.log('谜题数据准备完成，formattedData:', formattedData);
      console.log('puzzleData.puzzle 是否存在:', !!formattedData.puzzle);
      if (formattedData.puzzle) {
        console.log('puzzle 类型:', Array.isArray(formattedData.puzzle) ? '数组' : typeof formattedData.puzzle);
        console.log('puzzle 长度:', Array.isArray(formattedData.puzzle) ? formattedData.puzzle.length : '不是数组');
        if (Array.isArray(formattedData.puzzle) && formattedData.puzzle.length > 0) {
          console.log('puzzle 第一行:', formattedData.puzzle[0]);
        }
      }
      
      // 更新状态
      setCurrentPuzzle(formattedData);
      console.log('设置 currentPuzzle 完成');
      
      setOriginalPuzzle(formattedData.puzzle); // 保存原始谜题，用于区分预填数字
      console.log('设置 originalPuzzle 完成');
      
      setCurrentBoard(formattedData.puzzle);
      console.log('设置 currentBoard 完成');
      
      setSolution(formattedData.solution);
      console.log('设置 solution 完成');
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
      return formattedData;
    } catch (error) {
      console.error('开始新游戏失败:', error);
      toast.error('生成谜题失败，请重试', { position: 'top-right', autoClose: 2000 });
      return null;
    }
  };

  // 生成新谜题 - 根据难度选择生成方式
  const generateNewPuzzle = async (targetDifficulty = difficulty) => {
    console.log('SudokuContext: 生成新谜题', { targetDifficulty });
    try {
      // 停止当前计时器并重置状态
      setTimerActive(false);
      setTimeElapsed(0);
      setGameCompleted(false);
      setHistory([]);
      setHistoryIndex(-1);
      setErrorCount(0); // 重置错误计数
      setIncorrectCells(new Set()); // 重置错误单元格
      
      // 使用指定难度或当前难度
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
        console.log('已设置新难度:', targetDifficulty);
      }
      
      let puzzleData;
      
      // 根据难度选择生成方式：专家难度从题库获取，其他难度使用程序生成
      if (targetDifficulty === DIFFICULTY_LEVELS.EXPERT) {
        console.log('专家难度：尝试从题库获取谜题');
        try {
          // 尝试从API获取题库中的专家级谜题
          puzzleData = await api.getRandomPuzzleByDifficulty(targetDifficulty);
          console.log('成功从题库获取专家级谜题');
        } catch (apiError) {
          console.warn('从题库获取专家级谜题失败，回退到程序生成:', apiError);
          // 如果API失败，回退到程序生成
          puzzleData = await generateOfflinePuzzle(targetDifficulty);
        }
      } else {
        console.log('非专家难度：使用程序生成谜题');
        // 简单/中等/困难难度使用程序生成
        puzzleData = await generateOfflinePuzzle(targetDifficulty);
      }

      // 格式化数据为统一格式
      const formattedData = formatPuzzleData(puzzleData);
      console.log('谜题数据准备完成，formattedData:', formattedData);
      console.log('puzzleData.puzzle 是否存在:', !!formattedData.puzzle);
      if (formattedData.puzzle) {
        console.log('puzzle 类型:', Array.isArray(formattedData.puzzle) ? '数组' : typeof formattedData.puzzle);
        console.log('puzzle 长度:', Array.isArray(formattedData.puzzle) ? formattedData.puzzle.length : '不是数组');
        if (Array.isArray(formattedData.puzzle) && formattedData.puzzle.length > 0) {
          console.log('puzzle 第一行:', formattedData.puzzle[0]);
        }
      }
      
      // 更新状态
      setCurrentPuzzle(formattedData);
      console.log('设置 currentPuzzle 完成');
      
      setOriginalPuzzle(formattedData.puzzle); // 保存原始谜题，用于区分预填数字
      console.log('设置 originalPuzzle 完成');
      
      setCurrentBoard(formattedData.puzzle);
      console.log('设置 currentBoard 完成');
      
      setSolution(formattedData.solution);
      console.log('设置 solution 完成');
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
      return formattedData;
    } catch (error) {
      console.error('生成新谜题失败:', error);
      toast.error('生成谜题失败，请重试', { position: 'top-right', autoClose: 2000 });
      return null;
    }
  };



  // 生成离线数独谜题
  const generateOfflinePuzzle = async (difficulty = 'medium') => {
    try {
      console.log(`开始生成${difficulty}难度的数独题目...`);
      const result = await generateSudoku(difficulty);
      
      console.log('generateSudoku 返回结果:', result);
      
      // 验证生成的谜题
      if (!result || !result.puzzle || !result.solution) {
        console.error('生成的数独数据不完整:', result);
        throw new Error('生成的数独数据不完整');
      }
      
      const { puzzle, solution } = result;
      
      // 验证数独有唯一解
      const hasUnique = hasUniqueSolution(puzzle);
      if (!hasUnique) {
        console.warn('警告：生成的数独题目可能没有唯一解');
        // 尝试重新生成
        return generateOfflinePuzzle(difficulty);
      }
      
      console.log(`成功生成${difficulty}难度的数独题目，使用DLX算法验证了唯一解`);
      console.log('谜题数据预览:', puzzle.slice(0, 2).map(row => row.slice(0, 2).join(',')).join(';'));
      
      return { puzzle, solution };
    } catch (error) {
      console.error(`生成${difficulty}难度的数独题目时出错:`, error);
      // 如果生成失败，尝试使用备用方法
      return await generateBackupPuzzle(difficulty);
    }
  };

  // 辅助函数：比较两个数独棋盘是否相同
  const compareBoards = (board1, board2) => {
    if (!board1 || !board2) return false;
    
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board1[row][col] !== board2[row][col]) {
          return false;
        }
      }
    }
    return true;
  };

  // 辅助函数：备用谜题生成方法
  const generateBackupPuzzle = async (difficulty = 'medium') => {
    try {
      console.log(`使用备用方法生成${difficulty}难度的数独题目...`);
      // 直接使用sudokuUtils中的函数
      const { puzzle, solution } = await generateSudoku(difficulty);
      
      console.log(`备用方法成功生成${difficulty}难度的数独题目`);
      return { puzzle, solution };
    } catch (error) {
      console.error(`备用方法生成数独题目失败:`, error);
      // 如果备用方法也失败，返回一个预设的简单谜题
      const simplePuzzle = [
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
      
      const simpleSolution = [
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
      
      console.log(`使用预设的简单数独题目作为最后的备用`);
      return { puzzle: simplePuzzle, solution: simpleSolution };
    }
  };

  // 使用从sudokuUtils导入的函数替代自定义实现
  // 保留shuffleArray函数用于其他需要的地方

  // 辅助函数：打乱数组
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // 辅助函数：格式化谜题数据
  const formatPuzzleData = (data) => {
    // 处理API返回的数据格式
    if (data && data.puzzle && data.solution) {
      // 如果是字符串格式，转换为二维数组
      if (typeof data.puzzle === 'string' && data.puzzle.length === 81) {
        const puzzle = [];
        const solution = [];
        for (let i = 0; i < 9; i++) {
          puzzle.push([]);
          solution.push([]);
          for (let j = 0; j < 9; j++) {
            puzzle[i].push(parseInt(data.puzzle[i * 9 + j]) || 0);
            solution[i].push(parseInt(data.solution[i * 9 + j]) || 0);
          }
        }
        return { puzzle, solution };
      }
      // 如果已经是二维数组
      if (Array.isArray(data.puzzle) && data.puzzle.length === 9 && Array.isArray(data.solution) && data.solution.length === 9) {
        return { puzzle: data.puzzle, solution: data.solution };
      }
    }
    // 如果输入不完整或格式不正确，返回默认的9x9零数组
    console.warn('formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组', data);
    const defaultArray = Array(9).fill().map(() => Array(9).fill(0));
    return { puzzle: defaultArray, solution: defaultArray };
  };

  // 检查单元格输入是否正确
  const validateCellInput = (row, col, value) => {
    if (!solution) return true; // 如果没有解决方案，默认认为正确
    
    // 检查输入值是否与解决方案匹配
    return value === solution[row][col];
  };

  // 填充数字并进行实时校验
  const fillCell = (row, col, value) => {
    if (!gameStarted || gameCompleted) return;
    
    const newBoard = [...currentBoard.map(row => [...row])];
    const cellKey = `${row}-${col}`;
    const isCorrect = validateCellInput(row, col, value);
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ board: currentBoard, row, col, prevValue: currentBoard[row][col] });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 更新单元格
    newBoard[row][col] = value;
    setCurrentBoard(newBoard);
    
    // 更新错误单元格集合和错误计数
    const updatedIncorrectCells = new Set(incorrectCells);
    
    if (value !== 0) { // 只在校验非空单元格
      if (!isCorrect) {
        // 输入错误
        updatedIncorrectCells.add(cellKey);
        setErrorCount(updatedIncorrectCells.size);
        
        // 视觉反馈：短暂显示错误提示
        toast.error('输入错误，请重试！', { 
          position: 'top-right', 
          autoClose: 1000, 
          theme: 'colored' 
        });
      } else {
        // 输入正确，从错误集合中移除
        updatedIncorrectCells.delete(cellKey);
        setErrorCount(updatedIncorrectCells.size);
      }
    } else {
      // 清除单元格，从错误集合中移除
      updatedIncorrectCells.delete(cellKey);
      setErrorCount(updatedIncorrectCells.size);
    }
    
    setIncorrectCells(updatedIncorrectCells);
    
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
    const cellKey = `${row}-${col}`;
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ board: currentBoard, row, col, prevValue: currentBoard[row][col] });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 清除单元格
    newBoard[row][col] = 0;
    setCurrentBoard(newBoard);
    
    // 从错误集合中移除
    const updatedIncorrectCells = new Set(incorrectCells);
    updatedIncorrectCells.delete(cellKey);
    setIncorrectCells(updatedIncorrectCells);
    setErrorCount(updatedIncorrectCells.size);
  };

  // 撤销操作
  const undo = () => {
    if (historyIndex >= 0) {
      const prevState = history[historyIndex];
      setCurrentBoard(prevState.board);
      setHistoryIndex(historyIndex - 1);
      setGameCompleted(false); // 撤销后游戏不再完成
      
      // 重新计算错误单元格和错误计数
      const updatedIncorrectCells = new Set();
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const value = prevState.board[i][j];
          if (value !== 0 && solution && value !== solution[i][j]) {
            updatedIncorrectCells.add(`${i}-${j}`);
          }
        }
      }
      setIncorrectCells(updatedIncorrectCells);
      setErrorCount(updatedIncorrectCells.size);
    }
  };

  // 重做操作
  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setCurrentBoard(nextState.board);
      setHistoryIndex(historyIndex + 1);
      
      // 重新计算错误单元格和错误计数
      const updatedIncorrectCells = new Set();
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const value = nextState.board[i][j];
          if (value !== 0 && solution && value !== solution[i][j]) {
            updatedIncorrectCells.add(`${i}-${j}`);
          }
        }
      }
      setIncorrectCells(updatedIncorrectCells);
      setErrorCount(updatedIncorrectCells.size);
      
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
    setIncorrectCells(new Set()); // 清空错误单元格
    
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
    originalPuzzle, // 导出原始谜题，用于区分预填数字
    solution,
    difficulty,
    gameStarted,
    gameCompleted,
    timeElapsed,
    timerActive: timerActive,
    isTimerActive: timerActive,
    selectedCell,
    candidates,
    highlightedCells,
    activeTechniques,
    history,
    historyIndex,
    errorCount,
    incorrectCells,
    
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
    getHint,
    validateCellInput
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