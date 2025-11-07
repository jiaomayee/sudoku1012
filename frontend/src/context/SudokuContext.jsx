import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import localforage from 'localforage';
import { useUser } from './UserContext';
import { useLanguage } from './LanguageContext';
import { api } from '../services/api';
import DLX from '../utils/DLX'; // 添加DLX算法导入
import { generateSudoku, solveSudoku, hasUniqueSolution } from '../utils/sudokuUtils';
import { getRandomExpertPuzzle } from '../utils/puzzleUtils'; // 导入从JSON获取专家级题目的函数
import { identifyAllTechniques, applyTechnique } from '../utils/sudokuTechniques';

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
  const { t } = useLanguage();
  
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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);
  const [candidates, setCandidates] = useState({});
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [activeTechniques, setActiveTechniques] = useState([]);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    // 错误计数状态
    const [errorCount, setErrorCount] = useState(0);
    // 累计错误次数状态 - 每次填入错误数字时+1，不因删除而减少
    const [cumulativeErrorCount, setCumulativeErrorCount] = useState(0);
    const [incorrectCells, setIncorrectCells] = useState(new Set()); // 跟踪错误单元格的集合
  const [isPencilMode, setIsPencilMode] = useState(false); // 铅笔模式状态
  const [pencilNotes, setPencilNotes] = useState({}); // 存储标注数字，格式为 {"row-col": [1, 2, 3]}
  const [lockedCells, setLockedCells] = useState(new Set()); // 存储已锁定的单元格（用户填入正确数字的单元格）
  const [isFillAllCandidatesActive, setIsFillAllCandidatesActive] = useState(false); // 全部候选数填充状态

  // 初始化时自动生成谜题
  useEffect(() => {
    const initPuzzle = async () => {
      setIsLoading(true);
      console.log('SudokuContext: 初始化自动生成谜题');
      try {
        // 重置所有状态，确保没有残留数据
        setPencilNotes({}); // 重置候选数/标注
        setHistory([]);
        setHistoryIndex(-1);
        setErrorCount(0);
        setCumulativeErrorCount(0);
        setIncorrectCells(new Set());
        setLockedCells(new Set()); // 重置锁定的单元格
        
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
        setCumulativeErrorCount(0); // 初始化累计错误次数
        setIncorrectCells(new Set()); // 初始化错误单元格集合
        console.log('谜题初始化完成');
      } catch (error) {
        console.error('自动初始化谜题失败:', error);
        console.error('错误详情:', error.message, error.stack);
      } finally {
        setIsLoading(false);
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
        setCumulativeErrorCount(latestProgress.errorCount || 0); // 加载累计错误次数
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
        errorCount: cumulativeErrorCount, // 保存累计错误次数
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
  const startNewGame = async (puzzleId = null, difficultyOverride = null, showToast = true) => {
    console.log('SudokuContext: 开始新游戏', { puzzleId, difficultyOverride });
    try {
      // 首先设置gameStarted为false，确保所有依赖它的副作用能正确响应重置
      setGameStarted(false);
      
      // 更严格地重置所有状态，确保完全清理
      // 首先重置所有可能影响界面显示的状态
      setCurrentBoard(createEmptyBoard()); // 立即设置为空棋盘
      setPencilNotes({}); // 重置候选数/标注
      setIsPencilMode(false); // 重置铅笔模式
      setCandidates({}); // 重置候选数数据
      setActiveTechniques([]); // 重置活跃技巧
      setHighlightedCells([]); // 重置高亮单元格
      setSelectedCell(null); // 确保没有选中的单元格
      
      // 然后重置游戏状态相关变量
      setTimerActive(false);
      setTimeElapsed(0);
      setGameCompleted(false);
      setHistory([]);
      setHistoryIndex(-1);
      setErrorCount(0); // 重置错误计数
      setCumulativeErrorCount(0); // 重置累计错误次数
      setIncorrectCells(new Set()); // 重置错误单元格
      setLockedCells(new Set()); // 重置锁定单元格
      
      // 重置刷新候选数状态
      setHasRefreshedCandidates(false);
      
      // 确保重置与候选数按钮相关的状态标志
      setIsFillAllCandidatesActive(false); // 重置全部候选数填充状态
      
      // 添加短暂延迟，确保状态更新完成后再继续
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // 现在再设置gameStarted为true，表示游戏开始
      setGameStarted(true);
      
      // 再添加一个短暂延迟，确保gameStarted状态变更生效
      await new Promise(resolve => setTimeout(resolve, 50));
      
      
      // 使用指定难度或当前难度
      const targetDifficulty = difficultyOverride || difficulty;
      console.log('使用难度:', targetDifficulty);
      
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
      }
      
      let puzzleData;
      let generationAttempts = 0;
      const maxAttempts = 3;
      let isFromJson = false; // 标记谜题是否来自JSON文件
      
      // 尝试生成谜题，最多尝试maxAttempts次
      while (!puzzleData && generationAttempts < maxAttempts) {
        generationAttempts++;
        console.log(`尝试生成谜题 (${generationAttempts}/${maxAttempts})`);
        
        try {
          // 根据难度选择生成方式：专家难度从JSON文件获取，其他难度使用程序生成
          if (targetDifficulty === DIFFICULTY_LEVELS.EXPERT) {
            console.log('专家难度：尝试从JSON文件获取谜题');
            try {
              // 从JSON文件获取专家级谜题
              const puzzleFromJson = await getRandomExpertPuzzle();
              if (puzzleFromJson && puzzleFromJson.puzzle && puzzleFromJson.solution) {
                puzzleData = puzzleFromJson;
                isFromJson = true;
                console.log('成功从JSON文件获取专家级谜题');
              } else {
                console.warn('从JSON文件获取的谜题数据不完整，回退到程序生成');
                // 继续循环，下次尝试程序生成
              }
            } catch (jsonError) {
              console.warn('从JSON文件获取专家级谜题失败，回退到程序生成:', jsonError);
              // 继续循环，下次尝试程序生成
            }
          }
          
          // 如果JSON获取失败或不是专家难度，使用程序生成
          if (!puzzleData) {
            console.log('使用程序生成谜题');
            puzzleData = await generateOfflinePuzzle(targetDifficulty);
          }
        } catch (generationError) {
          console.error(`生成谜题失败 (尝试 ${generationAttempts}/${maxAttempts}):`, generationError);
          // 继续尝试下一次
        }
      }
      
      // 如果多次尝试后仍未生成谜题，使用备用谜题
      if (!puzzleData) {
        console.error('多次尝试生成谜题失败，使用备用谜题');
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
        
        puzzleData = { puzzle: simplePuzzle, solution: simpleSolution };
      }

      // 格式化数据为统一格式
      const formattedData = formatPuzzleData(puzzleData);
      console.log('谜题数据准备完成，formattedData:', formattedData);
      
      // 确保formattedData包含有效的puzzle和solution
      if (!formattedData || !formattedData.puzzle || !Array.isArray(formattedData.puzzle) || formattedData.puzzle.length !== 9) {
        console.error('格式化后的数据无效，使用备用谜题');
        // 使用备用谜题
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
        
        formattedData.puzzle = simplePuzzle;
        formattedData.solution = simpleSolution;
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
      
      // 确保gameStarted为true
      setGameStarted(true);
      setGameCompleted(false);
      setTimeElapsed(0);
      setTimerActive(true); // 启动计时器，避免显示暂停界面
      setHistory([]);
      setHistoryIndex(-1);

      // 更新统计信息
      if (updateUserStats) {
        updateUserStats({ puzzlesStarted: 1 });
      }

      // 根据难度和题目来源显示不同的提示
      if (showToast) {
        if (targetDifficulty === DIFFICULTY_LEVELS.EXPERT) {
          toast.success(isFromJson ? 'Expert puzzle loaded!' : 'Expert puzzle generated!', { position: 'top-right', autoClose: 2000 });
        } else {
            if (showToast) {
              toast.success('New puzzle generated!', { position: 'top-right', autoClose: 2000 });
            }
          }
      }
      console.log('新游戏设置完成');
      return formattedData;
    } catch (error) {
      console.error('开始新游戏失败:', error);
      // 即使出错，也要确保状态正确设置
      try {
        // 使用备用谜题
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
        
        const fallbackData = { puzzle: simplePuzzle, solution: simpleSolution };
        
        setCurrentPuzzle(fallbackData);
        setOriginalPuzzle(simplePuzzle);
        setCurrentBoard(simplePuzzle);
        setSolution(simpleSolution);
        setGameStarted(true);
        setGameCompleted(false);
        setTimerActive(true);
        
        if (showToast) {
          toast.success('Backup puzzle used!', { position: 'top-right', autoClose: 2000 });
        }
        return fallbackData;
      } catch (fallbackError) {
        console.error('使用备用谜题也失败:', fallbackError);
        if (showToast) {
          toast.error(t('generatePuzzleFailedRefresh'), { position: 'top-right', autoClose: 2000 });
        }
      }
      return null;
    }
  };

  // 创建空的9x9数独棋盘
  const createEmptyBoard = () => {
    return Array(9).fill().map(() => Array(9).fill(0));
  };

  // 生成新谜题 - 根据难度选择生成方式
  const generateNewPuzzle = async (targetDifficulty = difficulty, showToast = true) => {
    console.log('SudokuContext: 生成新谜题', { targetDifficulty });
    try {
      // 更严格地重置所有状态，确保完全清理
      // 首先重置所有可能影响界面显示的状态
      setCurrentBoard(createEmptyBoard()); // 立即设置为空棋盘
      setPencilNotes({}); // 重置候选数/标注
      setIsPencilMode(false); // 重置铅笔模式
      setCandidates({}); // 重置候选数数据
      setActiveTechniques([]); // 重置活跃技巧
      setHighlightedCells([]); // 重置高亮单元格
      
      // 然后重置游戏状态相关变量
      setTimerActive(false);
      setTimeElapsed(0);
      setGameCompleted(false);
      setHistory([]);
      setHistoryIndex(-1);
      setErrorCount(0); // 重置错误计数
      setCumulativeErrorCount(0); // 重置累计错误次数
      setIncorrectCells(new Set()); // 重置错误单元格
      setLockedCells(new Set()); // 重置锁定单元格
      
      // 确保重置与候选数按钮相关的状态标志
      setIsFillAllCandidatesActive(false); // 重置全部候选数填充状态
      
      // 确保gameStarted状态为true
      setGameStarted(true);
      
      // 添加短暂延迟，确保状态更新完成后再生成新谜题
      await new Promise(resolve => setTimeout(resolve, 50));
      
      
      // 使用指定难度或当前难度
      if (targetDifficulty !== difficulty) {
        setDifficulty(targetDifficulty);
        console.log('已设置新难度:', targetDifficulty);
      }
      
      let puzzleData;
      
      // 根据难度选择生成方式：专家难度从JSON文件获取，其他难度使用程序生成
      if (targetDifficulty === DIFFICULTY_LEVELS.EXPERT) {
        console.log('专家难度：尝试从JSON文件获取谜题');
        try {
          // 从JSON文件获取专家级谜题
          const puzzleFromJson = await getRandomExpertPuzzle();
          if (puzzleFromJson && puzzleFromJson.puzzle && puzzleFromJson.solution) {
            puzzleData = puzzleFromJson;
            console.log('成功从JSON文件获取专家级谜题');
          } else {
            console.warn('从JSON文件获取的谜题数据不完整，回退到程序生成');
            puzzleData = await generateOfflinePuzzle(targetDifficulty);
          }
        } catch (jsonError) {
          console.warn('从JSON文件获取专家级谜题失败，回退到程序生成:', jsonError);
          // 如果JSON获取失败，回退到程序生成
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

      toast.success('New puzzle generated!', { position: 'top-right', autoClose: 2000 });
      console.log('新谜题设置完成');
      return formattedData;
    } catch (error) {
      console.error('生成新谜题失败:', error);
      if (showToast) {
        toast.error(t('generatePuzzleFailed'), { position: 'top-right', autoClose: 2000 });
      }
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
    console.log('formatPuzzleData 输入:', data);
    
    // 生成唯一id
    const generateId = () => {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };
    
    // 处理API返回的数据格式
    if (data && data.puzzle) {
      // 如果是字符串格式，转换为二维数组
      if (typeof data.puzzle === 'string' && data.puzzle.length === 81) {
        const puzzle = [];
        for (let i = 0; i < 9; i++) {
          puzzle.push([]);
          for (let j = 0; j < 9; j++) {
            puzzle[i].push(parseInt(data.puzzle[i * 9 + j]) || 0);
          }
        }
        // 即使没有solution，也返回谜题数据
        return { 
          id: data.id || generateId(),
          puzzle, 
          solution: data.solution ? 
            (typeof data.solution === 'string' && data.solution.length === 81 ? 
              // 处理字符串格式的solution
              (() => {
                const sol = [];
                for (let i = 0; i < 9; i++) {
                  sol.push([]);
                  for (let j = 0; j < 9; j++) {
                    sol[i].push(parseInt(data.solution[i * 9 + j]) || 0);
                  }
                }
                return sol;
              })() : 
              // 如果不是字符串，使用原谜题作为solution
              puzzle
            ) : puzzle 
        };
      }
      // 如果已经是二维数组
      if (Array.isArray(data.puzzle) && data.puzzle.length === 9) {
        // 确保puzzle是9x9的二维数组
        const validPuzzle = data.puzzle.map(row => 
          Array.isArray(row) && row.length === 9 ? row : Array(9).fill(0)
        );
        
        // 处理solution
        let validSolution = validPuzzle; // 默认使用puzzle作为solution
        if (data.solution && Array.isArray(data.solution) && data.solution.length === 9) {
          validSolution = data.solution.map(row => 
            Array.isArray(row) && row.length === 9 ? row : Array(9).fill(0)
          );
        }
        
        const result = { 
          id: data.id || generateId(),
          puzzle: validPuzzle, 
          solution: validSolution 
        };
        console.log('formatPuzzleData 输出:', result);
        return result;
      }
    }
    // 如果输入不完整或格式不正确，返回默认的9x9零数组
    console.warn('formatPuzzleData: 输入数据不完整或格式不正确，返回默认空数组', data);
    const defaultArray = Array(9).fill().map(() => Array(9).fill(0));
    return { 
      id: generateId(),
      puzzle: defaultArray, 
      solution: defaultArray 
    };
  };

  // 检查单元格输入是否正确
  const validateCellInput = (row, col, value) => {
  // 验证单元格输入是否正确
  if (!solution || !solution[row] || solution[row][col] === undefined) {
    return true; // 如果没有解决方案，默认允许输入
  }
  
  return solution[row][col] === value;
};

  // 切换铅笔模式
  const togglePencilMode = () => {
    setIsPencilMode(prev => !prev);
  };

  // 在铅笔模式下添加或移除标注数字
  const togglePencilNote = (row, col, number) => {
    if (!gameStarted || gameCompleted) return;
    
    // 检查是否为预填数字，如果是则不允许修改
    if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== null && originalPuzzle[row][col] !== 0) {
      console.log('Cannot modify prefilled cell with notes:', row, col);
      return;
    }
    
    const cellKey = `${row}-${col}`;
    const newPencilNotes = { ...pencilNotes };
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ 
      board: currentBoard, 
      pencilNotes: { ...pencilNotes },
      row, 
      col, 
      type: 'pencil'
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 如果单元格已有标注，检查是否包含要添加/移除的数字
    if (newPencilNotes[cellKey]) {
      // 如果数字已存在，移除它
      if (newPencilNotes[cellKey].includes(number)) {
        newPencilNotes[cellKey] = newPencilNotes[cellKey].filter(n => n !== number);
        // 如果没有标注数字了，删除该单元格的记录
        if (newPencilNotes[cellKey].length === 0) {
          delete newPencilNotes[cellKey];
        }
      } else {
        // 添加新数字，保持排序
        newPencilNotes[cellKey] = [...new Set([...newPencilNotes[cellKey], number])].sort((a, b) => a - b);
      }
    } else {
      // 创建新的标注数组
      newPencilNotes[cellKey] = [number];
    }
    
    setPencilNotes(newPencilNotes);
  };
  
  // 清除单元格的所有标注
  const clearPencilNotes = (row, col) => {
    if (!gameStarted || gameCompleted) return;
    
    const cellKey = `${row}-${col}`;
    
    // 如果单元格没有标注，直接返回
    if (!pencilNotes[cellKey] || pencilNotes[cellKey].length === 0) return;
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ 
      board: currentBoard, 
      pencilNotes: { ...pencilNotes },
      row, 
      col, 
      type: 'clear-pencil'
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 创建新的标注对象，不包含要清除的单元格
    const newPencilNotes = { ...pencilNotes };
    delete newPencilNotes[cellKey];
    
    setPencilNotes(newPencilNotes);
    
    // 添加清除成功的反馈
    console.log(`已清除单元格(${row+1},${col+1})的候选数标注`);
  };

  // 专门清除候选数的函数 - 用于铅笔模式下清除候选数
  const clearCandidates = (row, col) => {
    if (!gameStarted || gameCompleted) return;
    
    const cellKey = `${row}-${col}`;
    console.log('clearCandidates called for cell:', cellKey);
    
    // 检查是否为预填数字，如果是则不允许删除候选数
    if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== 0) {
      console.log('Cannot clear candidates for prefilled cell:', row, col);
      return;
    }
    
    // 检查单元格是否有候选数标注
    if (!pencilNotes[cellKey] || pencilNotes[cellKey].length === 0) {
      console.log('No candidates to clear in cell:', row, col);
      return;
    }
    
    console.log('Clearing candidates:', pencilNotes[cellKey]);
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ 
      board: currentBoard, 
      pencilNotes: { ...pencilNotes },
      row, 
      col, 
      type: 'clear-candidates'
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 创建新的标注对象，不包含要清除的单元格
    const newPencilNotes = { ...pencilNotes };
    delete newPencilNotes[cellKey];
    
    setPencilNotes(newPencilNotes);
    
    console.log(`已清除单元格(${row+1},${col+1})的所有候选数`);
  };

  // 更新fillCell函数，使其能处理铅笔模式并添加自动删减候选数功能
  // 添加forceFill参数，用于在技巧应用时强制以非铅笔模式填入数字
  const fillCell = (row, col, value, forceFill = false) => {
    if (!gameStarted || gameCompleted) return;
    
    const cellKey = `${row}-${col}`;
    
    // 检查是否为预填数字，如果是则不允许修改
    if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== null && originalPuzzle[row][col] !== 0) {
      console.log('Cannot modify prefilled cell:', row, col);
      return;
    }
    
    // 检查是否为已锁定的单元格（用户填入正确数字的单元格），如果是则不允许修改
    if (lockedCells.has(cellKey)) {
      console.log('Cannot modify locked cell (correct answer):', row, col);
      return;
    }
    
    // 如果是铅笔模式且没有强制填充，使用标注功能
    if (isPencilMode && !forceFill) {
      if (value === 0) {
        clearPencilNotes(row, col);
      } else {
        togglePencilNote(row, col, value);
      }
      return;
    }
    
    const newBoard = [...currentBoard.map(row => [...row])];
    const isCorrect = validateCellInput(row, col, value);
    
    // 只在填入错误数字或清除单元格时记录历史记录
    // 正确填入的数字不记录到历史记录中，防止用户通过撤回按钮撤销正确输入
    
    // 更新单元格
    newBoard[row][col] = value;
    setCurrentBoard(newBoard);
    
    // 如果填入了数字，清除该单元格的标注
    const newPencilNotes = { ...pencilNotes };
    if (value !== 0 && newPencilNotes[cellKey]) {
      delete newPencilNotes[cellKey];
    }
    
    // 当用户填入正确数字时，自动删减同行、同列、同宫的候选数
    if (value !== 0 && isCorrect) {
      // 处理同行
      for (let c = 0; c < 9; c++) {
        if (c !== col) {
          const targetCellKey = `${row}-${c}`;
          if (newPencilNotes[targetCellKey]) {
            // 过滤掉相同的数字
            newPencilNotes[targetCellKey] = newPencilNotes[targetCellKey].filter(n => n !== value);
            // 如果过滤后没有候选数，删除该单元格的记录
            if (newPencilNotes[targetCellKey].length === 0) {
              delete newPencilNotes[targetCellKey];
            }
          }
        }
      }
      
      // 处理同列
      for (let r = 0; r < 9; r++) {
        if (r !== row) {
          const targetCellKey = `${r}-${col}`;
          if (newPencilNotes[targetCellKey]) {
            // 过滤掉相同的数字
            newPencilNotes[targetCellKey] = newPencilNotes[targetCellKey].filter(n => n !== value);
            // 如果过滤后没有候选数，删除该单元格的记录
            if (newPencilNotes[targetCellKey].length === 0) {
              delete newPencilNotes[targetCellKey];
            }
          }
        }
      }
      
      // 处理同宫
      const boxRow = Math.floor(row / 3) * 3;
      const boxCol = Math.floor(col / 3) * 3;
      for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
          if (r !== row || c !== col) {
            const targetCellKey = `${r}-${c}`;
            if (newPencilNotes[targetCellKey]) {
              // 过滤掉相同的数字
              newPencilNotes[targetCellKey] = newPencilNotes[targetCellKey].filter(n => n !== value);
              // 如果过滤后没有候选数，删除该单元格的记录
              if (newPencilNotes[targetCellKey].length === 0) {
                delete newPencilNotes[targetCellKey];
              }
            }
          }
        }
      }
    }
    
    // 更新铅笔标注
    setPencilNotes(newPencilNotes);
    
    // 为所有操作添加历史记录，但为正确输入添加标记
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ 
      board: currentBoard, 
      pencilNotes: { ...pencilNotes },
      row, 
      col, 
      prevValue: currentBoard[row][col],
      type: 'fill',
      isCorrectInput: value !== 0 && isCorrect // 为正确输入添加标记
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);

  // 更新错误单元格集合和错误计数
  const updatedIncorrectCells = new Set(incorrectCells);
  
  if (value !== 0) { // 只在校验非空单元格
    if (!isCorrect) {
      // 输入错误
      // 如果填入的是错误数字且该单元格之前不是错误状态，则累计错误次数+1
      if (!incorrectCells.has(cellKey)) {
        setCumulativeErrorCount(prev => prev + 1);
        }
        updatedIncorrectCells.add(cellKey);
        
        // 视觉反馈：短暂显示错误提示
        toast.error('输入错误，请重试！', { 
          position: 'top-right', 
          autoClose: 1000, 
          theme: 'colored' 
        });
      } else {
        // 输入正确，从错误集合中移除
        updatedIncorrectCells.delete(cellKey);
        
        // 锁定正确填入的单元格，防止再次修改
        const updatedLockedCells = new Set(lockedCells);
        updatedLockedCells.add(cellKey);
        setLockedCells(updatedLockedCells);
      }
    } else {
      // 清除单元格，从错误集合中移除
      updatedIncorrectCells.delete(cellKey);
    }
    
    setIncorrectCells(updatedIncorrectCells);
    
    // 检查游戏是否完成
    checkGameCompletion(newBoard);
  };

  // 更新clearCell函数，使其能处理铅笔模式
  const clearCell = (row, col) => {
    if (!gameStarted || gameCompleted) return;
    
    const cellKey = `${row}-${col}`;
    
    // 检查是否为预填数字，如果是则不允许删除
    if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== 0) {
      console.log('Cannot clear prefilled cell:', row, col);
      return;
    }
    
    // 检查是否为已锁定的单元格（用户填入正确数字的单元格），如果是则不允许清除
    if (lockedCells.has(cellKey)) {
      console.log('Cannot clear locked cell (correct answer):', row, col);
      return;
    }
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ 
      board: currentBoard, 
      pencilNotes: { ...pencilNotes },
      row, 
      col, 
      prevValue: currentBoard[row][col],
      type: 'clear'
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 如果是铅笔模式，清除候选数标注
    if (isPencilMode) {
      console.log('铅笔模式：尝试清除单元格', row, col);
      // 检查单元格是否有候选数标注
      const cellKey = `${row}-${col}`;
      console.log('候选数状态:', pencilNotes[cellKey]);
      
      if (pencilNotes[cellKey] && pencilNotes[cellKey].length > 0) {
        console.log('清除候选数标注');
        clearCandidates(row, col);
      } else {
        console.log('没有候选数标注，检查是否有数字');
        // 如果没有候选数标注，但单元格有数字，清除数字
        if (currentBoard[row][col] !== 0) {
          console.log('清除数字内容');
          const newBoard = [...currentBoard.map(row => [...row])];
          newBoard[row][col] = 0;
          setCurrentBoard(newBoard);
          
          // 清除单元格，从错误集合和锁定集合中移除
          const updatedIncorrectCells = new Set(incorrectCells);
          updatedIncorrectCells.delete(cellKey);
          setIncorrectCells(updatedIncorrectCells);
          setErrorCount(updatedIncorrectCells.size);
          
          // 从锁定集合中移除（如果存在）
          const updatedLockedCells = new Set(lockedCells);
          updatedLockedCells.delete(cellKey);
          setLockedCells(updatedLockedCells);
        } else {
          console.log('单元格既没有候选数也没有数字');
        }
      }
      return;
    }
    
    const newBoard = [...currentBoard.map(row => [...row])];
    
    // 清除单元格数字内容
    newBoard[row][col] = 0;
    setCurrentBoard(newBoard);
    
    // 清除候选数标注（如果存在）
    if (pencilNotes[cellKey] && pencilNotes[cellKey].length > 0) {
      console.log('普通模式：清除候选数标注');
      clearCandidates(row, col);
    }
    
    // 清除单元格，从错误集合和锁定集合中移除
    const updatedIncorrectCells = new Set(incorrectCells);
    updatedIncorrectCells.delete(cellKey);
    setIncorrectCells(updatedIncorrectCells);
    setErrorCount(updatedIncorrectCells.size);
    
    // 从锁定集合中移除（如果存在）
    const updatedLockedCells = new Set(lockedCells);
    updatedLockedCells.delete(cellKey);
    setLockedCells(updatedLockedCells);
  };

  // 更新undo函数，使其能处理铅笔模式的操作，并允许撤回所有操作（包括正确输入）
  const undo = () => {
    if (historyIndex >= 0) {
      const prevState = history[historyIndex];
      setCurrentBoard(prevState.board);
      
      // 如果历史记录包含pencilNotes，恢复它
      if (prevState.pencilNotes) {
        setPencilNotes(prevState.pencilNotes);
      }
      
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
      
      // 重新计算锁定单元格（只锁定正确填入的数字）
      const updatedLockedCells = new Set();
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const value = prevState.board[i][j];
          if (value !== 0 && solution && value === solution[i][j]) {
            updatedLockedCells.add(`${i}-${j}`);
          }
        }
      }
      setLockedCells(updatedLockedCells);
    } else {
      // 如果没有可撤销的操作，可以显示提示
      console.log('没有可撤销的操作');
    }
  };

  // 更新redo函数，使其能处理铅笔模式的操作并正确处理锁定单元格
  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setCurrentBoard(nextState.board);
      
      // 如果历史记录包含pencilNotes，恢复它
      if (nextState.pencilNotes) {
        setPencilNotes(nextState.pencilNotes);
      }
      
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
      
      // 重新计算锁定单元格（只锁定正确填入的数字）
      const updatedLockedCells = new Set();
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          const value = nextState.board[i][j];
          if (value !== 0 && solution && value === solution[i][j]) {
            updatedLockedCells.add(`${i}-${j}`);
          }
        }
      }
      setLockedCells(updatedLockedCells);
      
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
    
    // 显示游戏完成提示（使用默认消息，因为在这个函数内部无法直接使用useLanguage钩子）
    toast.success(t('gameCompletedMessage'), {
      position: 'top-right',
      autoClose: 3000
    });
    
    // 标记进度为已完成
    saveGameProgress();
    
    // 3秒后自动触发打开新游戏窗口的事件
    // 使用CustomEvent来通知组件层打开新游戏窗口
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openNewGameWindow'));
    }, 3000);
  };

  // 跟踪是否已点击过刷新候选数按钮
  const [hasRefreshedCandidates, setHasRefreshedCandidates] = useState(false);

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

  // 检查候选数是否完整
  const areCandidatesComplete = useCallback(() => {
    // 检查棋盘中每个空白单元格是否都有候选数
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // 跳过已有数字的单元格
        if (currentBoard[row][col] !== 0) continue;
        
        const cellKey = `${row}-${col}`;
        const cellCandidates = pencilNotes[cellKey];
        
        // 如果空白单元格没有候选数或候选数为空数组，则候选数不完整
        if (!cellCandidates || cellCandidates.length === 0) {
          return false;
        }
      }
    }
    return true;
  }, [currentBoard, pencilNotes]);

  // 识别可应用的技巧
  const identifyTechniques = useCallback(() => {
    try {
      // 检查是否可以使用依赖候选数的技巧
      // 条件：候选数完整 或 已点击过刷新候选数按钮
      const candidatesComplete = areCandidatesComplete();
      const canUseCandidateTechniques = candidatesComplete || hasRefreshedCandidates;
      
      // 检查是否有候选数数据
      const hasPencilNotes = pencilNotes && typeof pencilNotes === 'object' && Object.keys(pencilNotes).length > 0;
      
      // 只有在可以使用候选数技巧且有候选数数据时才启用候选数技巧
      const includeCandidateTechniques = canUseCandidateTechniques && hasPencilNotes;
      
      // 如果不满足条件但尝试使用候选数技巧，显示提示
      if (hasPencilNotes && !canUseCandidateTechniques) {
        toast.info(t('candidatesIncomplete', { 
          defaultMessage: '候选数不完整，请先点击"刷新候选数"按钮或确保所有空白单元格都有候选数' 
        }), {
          position: 'top-right',
          autoClose: 3000
        });
      }
      
      // 传入参数，根据条件决定是否包含候选数技巧
      const techniques = identifyAllTechniques(currentBoard, pencilNotes, includeCandidateTechniques);
      setActiveTechniques(techniques);
      return techniques;
    } catch (error) {
      console.error('识别技巧失败:', error);
      return [];
    }
  }, [currentBoard, pencilNotes, areCandidatesComplete, hasRefreshedCandidates, t, toast]);
  
  // 应用技巧
  const applyTechniqueToBoard = useCallback((technique) => {
    // 保存当前铅笔模式状态，用于后续恢复
    const originalPencilMode = isPencilMode;
    let needRestorePencilMode = false;
    
    // 检查是否是需要特殊处理的技巧类型（唯一数法、隐性唯一数法、候选数唯一法）
    const isSingleNumberTechnique = technique.type && (
      technique.type === 'nakedSingle' ||
      technique.type === 'notesSingle' ||
      technique.type === 'hiddenSingleRow' ||
      technique.type === 'hiddenSingleCol' ||
      technique.type === 'hiddenSingleBox'
    );
    
    try {
      // 对于特定技巧，如果当前是铅笔模式，先关闭它
      if (isSingleNumberTechnique && originalPencilMode) {
        setIsPencilMode(false);
        needRestorePencilMode = true;
      }
      
      // 调用技巧应用函数
      const result = applyTechnique(technique, currentBoard);
      
      // 如果应用成功，更新棋盘
      if (result && result.board) {
        // 获取操作信息
        const operation = result.operation;
        
        // 检查是否是单一数字填入操作
        if (operation && operation.type === 'fill' && 
            typeof operation.row === 'number' && 
            typeof operation.col === 'number' && 
            typeof operation.value === 'number') {
          
          const { row, col, value } = operation;
          
          // 确保在fillCell执行时铅笔模式是关闭的
          // 注意：由于React状态更新是异步的，这里直接使用fillCell的内部逻辑
          // 而不是依赖setIsPencilMode的状态更新
          
          // 使用现有的fillCell方法来更新棋盘，传入forceFill=true确保直接填入数字，而不是添加标注
            fillCell(row, col, value, true);
          
          return true;
        }
        
        // 对于需要移除候选数的操作（数对、三链数等）
        if (operation && operation.type === 'removeCandidates' && 
            Array.isArray(operation.cells)) {
          
          // 创建新的候选数对象，避免直接修改状态
          const updatedCandidates = { ...candidates };
          
          // 遍历所有需要移除候选数的单元格
          operation.cells.forEach(cell => {
            if (typeof cell.row === 'number' && 
                typeof cell.col === 'number' && 
                Array.isArray(cell.valuesToRemove)) {
              
              const cellKey = `${cell.row}-${cell.col}`;
              // 获取当前单元格的候选数
              const currentCellCandidates = candidates[cellKey] || [];
              
              // 过滤掉需要移除的候选数
              const newCandidates = currentCellCandidates.filter(candidate => 
                !cell.valuesToRemove.includes(candidate)
              );
              
              // 更新候选数对象
              updatedCandidates[cellKey] = newCandidates;
            }
          });
          
          // 更新候选数状态
          setCandidates(updatedCandidates);
          
          console.log('成功移除候选数:', technique.type);
          
          // 显示成功提示
          toast.success(t('candidatesRemovedSuccess', { defaultMessage: '候选数已成功移除' }), {
            position: 'top-right',
            autoClose: 2000
          });
          
          return true;
        }
        
        // 对于高亮类型的操作，保持支持但提供更好的反馈
        if (operation && operation.type === 'highlight') {
          // 数对、三链数等技巧可能需要用户手动操作，但我们仍然返回true表示成功
          console.log('技巧应用成功（高亮提示）:', technique.type);
          
          // 如果是数对类型，提供特定的提示
          if (technique.type && (technique.type.includes('Pair') || technique.type.includes('pair'))) {
            toast.success(t('pairTechniqueIdentified', { defaultMessage: '数对技巧已识别，建议手动移除相关候选数' }), {
              position: 'top-right',
              autoClose: 3000
            });
          }
          // 对于三链数等其他需要手动操作的技巧
          else {
            toast.success(t('pairTechniqueIdentified', { defaultMessage: '技巧已识别，建议手动移除相关候选数' }), {
              position: 'top-right',
              autoClose: 3000
            });
          }
          
          return true;
        }
        
        // 如果操作类型未知或缺少必要参数
        console.warn('无法应用技巧：操作信息不完整或类型不支持', operation);
        toast.info(t('techniqueOnlyForHint', { defaultMessage: '此技巧主要用于提示，暂不支持自动应用' }), { 
          position: 'top-right',
          autoClose: 2000
        });
        return false;
      }
      return false;
    } catch (error) {
      console.error('应用技巧失败:', error);
      toast.error(t('techniqueApplyFailed', { defaultMessage: '应用技巧失败，请重试' }), { 
        position: 'top-right',
        autoClose: 2000
      });
      // 即使出错，也要恢复铅笔模式
      if (needRestorePencilMode) {
        setIsPencilMode(true);
      }
      return false;
    } finally {
      // 在函数结束时恢复铅笔模式（无论成功还是失败）
      if (needRestorePencilMode) {
        setIsPencilMode(true);
      }
    }
  }, [fillCell, currentBoard, isPencilMode, candidates, setCandidates, setIsPencilMode]);

  // 切换计时器活跃状态
  const toggleTimer = () => {
    setTimerActive(prev => !prev);
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

  // 计算并填充所有空白格子的候选数
  const fillAllCandidates = () => {
    if (!gameStarted || gameCompleted || !currentBoard) return;
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ 
      board: currentBoard, 
      pencilNotes: { ...pencilNotes },
      type: 'fill-candidates'
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 重新计算所有空白单元格的候选数
    const newPencilNotes = {};
    
    // 遍历所有单元格重新计算候选数
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // 跳过预填数字和已有数字的单元格
        if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== 0 || 
            currentBoard[row] && currentBoard[row][col] !== 0) {
          continue;
        }
        
        // 计算该单元格的候选数
        const candidates = calculateCellCandidates(row, col);
        if (candidates.length > 0) {
          newPencilNotes[`${row}-${col}`] = candidates;
        }
      }
    }
    
    // 更新铅笔标注数据
    setPencilNotes(newPencilNotes);
    
    // 标记已刷新候选数
    setHasRefreshedCandidates(true);
    
    toast.info(t('candidatesFilled', { defaultMessage: '已为所有空白格子计算并填充候选数！' }), {
      position: 'top-right',
      autoClose: 2000
    });
    
    // 返回true表示执行了全覆盖操作
    return true;
  };
  
  // 为选中的单元格填充候选数
  const fillSelectedCellCandidates = (row, col) => {
    if (!gameStarted || gameCompleted || !currentBoard || row === undefined || col === undefined) return;
    
    // 检查单元格是否为空
    if (currentBoard[row][col] !== 0) {
      toast.info(t('cellNotEmpty', { defaultMessage: '该单元格已有数字，无法填充候选数' }), {
        position: 'top-right',
        autoClose: 2000
      });
      return;
    }
    
    // 检查是否为预填数字
    if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== 0) {
      toast.info(t('cellPrefilled', { defaultMessage: '该单元格为预填数字，无法填充候选数' }), {
        position: 'top-right',
        autoClose: 2000
      });
      return;
    }
    
    // 保存当前状态到历史记录
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ 
      board: currentBoard, 
      pencilNotes: { ...pencilNotes },
      type: 'fill-cell-candidates'
    });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    
    // 计算该单元格的候选数
    const candidates = calculateCellCandidates(row, col);
    
    // 更新铅笔标注数据
    const newPencilNotes = { ...pencilNotes };
    if (candidates.length > 0) {
      newPencilNotes[`${row}-${col}`] = candidates;
    } else {
      // 如果没有候选数，删除该单元格的记录
      delete newPencilNotes[`${row}-${col}`];
    }
    
    setPencilNotes(newPencilNotes);
    
    toast.info(t('cellCandidatesFilled', { 
      row: row + 1, 
      col: col + 1,
      defaultMessage: `已为单元格(${row+1},${col+1})计算并填充候选数！` 
    }), {
      position: 'top-right',
      autoClose: 2000
    });
    
    return candidates;
  };
  
  // 计算技巧机会
  const calculateTechniques = () => {
    if (!gameStarted || gameCompleted || !currentBoard) return;
    
    // 检查是否存在无候选数的空白单元格
    let hasEmptyCandidateCell = false;
    
    // 遍历所有单元格检查候选数情况
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // 跳过预填数字和已有数字的单元格（与fillAllCandidates函数保持一致）
        if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== 0 || 
            currentBoard[row] && currentBoard[row][col] !== 0) {
          continue;
        }
        
        // 检查该单元格是否有候选数
        const cellKey = `${row}-${col}`;
        const hasCandidate = pencilNotes[cellKey] && pencilNotes[cellKey].length > 0;
        
        // 如果没有候选数，则标记为需要重新计算候选数
        if (!hasCandidate) {
          hasEmptyCandidateCell = true;
          break;
        }
      }
      if (hasEmptyCandidateCell) break;
    }
    
    // 如果存在无候选数的空白单元格，需要重新计算候选数
    if (hasEmptyCandidateCell) {
      toast.info(t('emptyCandidateCellsFound', { defaultMessage: '发现无候选数的空白单元格，重新计算候选数...' }), {
        position: 'top-right',
        autoClose: 2000
      });
      
      // 返回true表示需要执行候选数全覆盖操作
      return true;
    }
    
    // 检查候选数是否正确（与答案一致）
    let hasCandidateError = false;
    
    if (solution) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          // 跳过预填数字和已有数字的单元格（与fillAllCandidates函数保持一致）
          if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== 0 || 
              currentBoard[row] && currentBoard[row][col] !== 0) {
            continue;
          }
          
          // 检查该单元格的候选数是否包含正确答案
          const cellKey = `${row}-${col}`;
          const candidates = pencilNotes[cellKey] || [];
          const correctValue = solution[row][col];
          
          // 如果候选数中不包含正确答案，则标记为候选数错误
          if (!candidates.includes(correctValue)) {
            hasCandidateError = true;
            break;
          }
        }
        if (hasCandidateError) break;
      }
    }
    
    // 如果候选数错误，需要重新计算候选数
    if (hasCandidateError) {
      toast.error(t('candidateErrorDetected', { defaultMessage: '存在候选数删减错误，数据刷新' }), {
        position: 'top-right',
        autoClose: 3000
      });
      
      // 返回true表示需要执行候选数全覆盖操作
      return true;
    }
    
    // 候选数正确完整，无需重新生成候选数，直接计算技巧机会
    toast.info(t('candidatesComplete', { defaultMessage: '候选数正确完整，直接计算技巧机会！' }), {
      position: 'top-right',
      autoClose: 2000
    });
    
    // 返回false表示不需要执行候选数全覆盖操作
    return false;
  };
  
  // 计算单个单元格的候选数
  const calculateCellCandidates = (row, col) => {
    if (!currentBoard) return [];
    
    const candidates = [];
    
    // 检查1-9每个数字是否可以填入该单元格
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(row, col, num)) {
        candidates.push(num);
      }
    }
    
    return candidates.sort((a, b) => a - b);
  };
  
  // 检查在指定位置填入数字是否有效
  const isValidMove = (row, col, num) => {
    if (!currentBoard) return false;
    
    // 检查同一行
    for (let c = 0; c < 9; c++) {
      if (currentBoard[row][c] === num) {
        return false;
      }
    }
    
    // 检查同一列
    for (let r = 0; r < 9; r++) {
      if (currentBoard[r][col] === num) {
        return false;
      }
    }
    
    // 检查同一3x3宫
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) {
        if (currentBoard[r][c] === num) {
          return false;
        }
      }
    }
    
    return true;
  };
  
  const value = {
      // 状态
      currentPuzzle,
      currentBoard: currentBoard || Array(9).fill().map(() => Array(9).fill(0)), // 确保始终有有效数据
      originalPuzzle,
      solution: solution || Array(9).fill().map(() => Array(9).fill(0)), // 确保始终有有效数据
      difficulty,
      gameStarted,
      gameCompleted,
      timeElapsed,
      timerActive,
      isTimerActive: timerActive,
      isLoading,
      selectedCell,
      candidates,
      highlightedCells,
      activeTechniques,
      lockedCells,
      history,
      historyIndex,
      errorCount: cumulativeErrorCount,
      incorrectCells,
      isPencilMode,
        pencilNotes,
      
      // 方法
      setDifficulty,
      setSelectedCell,
      setHighlightedCells,
      setTimerActive,
      toggleTimer, // 添加切换计时器方法
      togglePencilMode, // 添加切换铅笔模式方法
      togglePencilNote, // 添加切换铅笔标注方法
      clearPencilNotes, // 添加清除铅笔标注方法
      clearCandidates, // 添加清除候选数方法
      fillAllCandidates, // 添加填充所有候选数方法
      fillSelectedCellCandidates, // 添加为选中单元格填充候选数方法
      calculateTechniques, // 添加计算技巧机会方法
      loadSavedProgress,
      saveGameProgress,
      startNewGame,
      generateNewPuzzle,
      fillCell,
      clearCell,
      undo,
      redo,
      getCandidates,
      identifyTechniques,
      applyTechniqueToBoard,
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
