import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import localforage from 'localforage';
import { useUser } from './UserContext';
import { api } from '../services/api';
import DLX from '../utils/DLX'; // 添加DLX算法导入

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
  const [errorCount, setErrorCount] = useState(0); // 添加错误计数状态
  const [incorrectCells, setIncorrectCells] = useState(new Set()); // 跟踪错误单元格的集合

  // 初始化时自动生成谜题
  useEffect(() => {
    const initPuzzle = async () => {
      console.log('SudokuContext: 初始化自动生成谜题');
      try {
        // 使用离线谜题生成器
        const defaultDifficulty = DIFFICULTY_LEVELS.MEDIUM;
        console.log(`使用默认难度: ${defaultDifficulty}`);
        
        // 使用新的离线谜题生成函数
        const { puzzle, solution } = generateOfflinePuzzle(defaultDifficulty);
        console.log('离线谜题生成完成');
        
        setCurrentPuzzle({ puzzle, solution });
        setCurrentBoard(puzzle);
        setSolution(solution);
        setGameStarted(true);
        setGameCompleted(false);
        setTimerActive(true);
        setErrorCount(0); // 初始化错误计数
        setIncorrectCells(new Set()); // 初始化错误单元格集合
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
          puzzleData = generateOfflinePuzzle(targetDifficulty);
        }
      } else {
        console.log('非专家难度：使用程序生成谜题');
        // 简单/中等/困难难度使用程序生成
        puzzleData = generateOfflinePuzzle(targetDifficulty);
      }

      // 格式化数据为统一格式
      const formattedData = formatPuzzleData(puzzleData);
      console.log('谜题数据准备完成');
      
      // 更新状态
      setCurrentPuzzle(formattedData);
      setCurrentBoard(formattedData.puzzle);
      setSolution(formattedData.solution);
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
          puzzleData = generateOfflinePuzzle(targetDifficulty);
        }
      } else {
        console.log('非专家难度：使用程序生成谜题');
        // 简单/中等/困难难度使用程序生成
        puzzleData = generateOfflinePuzzle(targetDifficulty);
      }

      // 格式化数据为统一格式
      const formattedData = formatPuzzleData(puzzleData);
      console.log('谜题数据准备完成');
      
      // 更新状态
      setCurrentPuzzle(formattedData);
      setCurrentBoard(formattedData.puzzle);
      setSolution(formattedData.solution);
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



  // 辅助函数：使用程序生成离线谜题
  const generateOfflinePuzzle = (difficulty) => {
    console.log('generateOfflinePuzzle: 生成离线谜题，难度:', difficulty);
    
    // 根据难度确定空格数量范围
    const emptyCellsConfig = {
      easy: { min: 35, max: 40 },
      medium: { min: 45, max: 50 },
      hard: { min: 55, max: 58 },
      expert: { min: 60, max: 64 }
    };
    
    const { min, max } = emptyCellsConfig[difficulty] || emptyCellsConfig.medium;
    const emptyCellsCount = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const dlx = new DLX();
    
    // 尝试次数限制
    const MAX_ATTEMPTS = 100;
    let attempts = 0;
    
    while (attempts < MAX_ATTEMPTS) {
      attempts++;
      
      // 创建一个已解决的数独
      const solution = generateRandomCompletedBoard();
      
      // 深拷贝解决方案作为谜题
      const puzzle = solution.map(row => [...row]);
      
      // 创建所有单元格的列表
      const cells = [];
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          cells.push({ row, col });
        }
      }
      
      // 随机打乱单元格顺序
      shuffleArray(cells);
      
      // 尝试移除数字，同时确保保持唯一解
      let removedCount = 0;
      for (const cell of cells) {
        if (removedCount >= emptyCellsCount) break;
        
        // 保存当前值
        const originalValue = puzzle[cell.row][cell.col];
        if (originalValue === 0) continue;
        
        // 暂时移除该数字
        puzzle[cell.row][cell.col] = 0;
        
        // 检查移除后是否仍有唯一解
        if (dlx.hasUniqueSolution(puzzle)) {
          // 保持移除状态
          removedCount++;
        } else {
          // 如果不是唯一解，恢复原值
          puzzle[cell.row][cell.col] = originalValue;
        }
      }
      
      // 验证生成的谜题是否符合要求
      if (removedCount >= min && removedCount <= max) {
        // 再次检查谜题是否有唯一解
        const hasUnique = dlx.hasUniqueSolution(puzzle);
        if (hasUnique) {
          // 验证解决方案是否正确
          const solved = dlx.solveSudoku(puzzle);
          const solutionIsCorrect = compareBoards(solved, solution);
          
          if (solutionIsCorrect) {
            console.log(`成功生成谜题：难度=${difficulty}，空格数=${removedCount}，尝试次数=${attempts}`);
            return { puzzle, solution };
          }
        }
      }
    }
    
    console.warn(`达到最大尝试次数(${MAX_ATTEMPTS})，使用备用谜题生成`);
    // 如果尝试多次仍未成功，使用备用方案
    return generateBackupPuzzle(difficulty);
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
  const generateBackupPuzzle = (difficulty) => {
    console.log('使用备用谜题生成方法');
    
    // 创建一个基础已解决数独
    const solution = generateRandomCompletedBoard();
    
    // 根据难度确定空格数量
    const emptyCellsCount = {
      easy: 40,
      medium: 50,
      hard: 58,
      expert: 64
    }[difficulty] || 50;
    
    // 深拷贝解决方案作为谜题
    const puzzle = solution.map(row => [...row]);
    
    // 随机移除一些数字
    let cellsToRemove = emptyCellsCount;
    const removedCells = new Set();
    
    while (cellsToRemove > 0) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      const cellKey = `${row}-${col}`;
      
      if (puzzle[row][col] !== 0 && !removedCells.has(cellKey)) {
        // 先保存原始值
        const tempValue = puzzle[row][col];
        puzzle[row][col] = 0;
        
        // 使用DLX尝试求解
        const dlx = new DLX();
        const solved = dlx.solveSudoku(puzzle);
        
        if (solved) {
          // 保留空格
          removedCells.add(cellKey);
          cellsToRemove--;
        } else {
          // 无法求解，恢复原值
          puzzle[row][col] = tempValue;
        }
      }
    }
    
    return { puzzle, solution };
  };

  // 辅助函数：生成随机完成的数独棋盘
  const generateRandomCompletedBoard = () => {
    // 基础模板
    const baseBoard = [
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
    
    // 随机打乱行和列，以增加随机性
    const shuffledBoard = shuffleSudokuBoard(baseBoard);
    return shuffledBoard;
  };

  // 辅助函数：打乱数独棋盘以增加随机性
  const shuffleSudokuBoard = (board) => {
    const result = board.map(row => [...row]);
    
    // 随机打乱3x3块内的行
    for (let block = 0; block < 3; block++) {
      const startRow = block * 3;
      // 随机打乱块内的行
      const rows = [0, 1, 2].map(i => result[startRow + i]);
      shuffleArray(rows);
      rows.forEach((row, i) => result[startRow + i] = row);
    }
    
    // 随机打乱3x3块内的列
    for (let block = 0; block < 3; block++) {
      const startCol = block * 3;
      // 对每一行，打乱块内的列
      for (let row = 0; row < 9; row++) {
        const cols = [0, 1, 2].map(i => result[row][startCol + i]);
        shuffleArray(cols);
        cols.forEach((val, i) => result[row][startCol + i] = val);
      }
    }
    
    return result;
  };

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
      return { puzzle: data.puzzle, solution: data.solution };
    }
    // 如果输入不完整，确保返回有效格式的对象
    console.warn('formatPuzzleData: 输入数据不完整或格式不正确', data);
    return data || { puzzle: null, solution: null };
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