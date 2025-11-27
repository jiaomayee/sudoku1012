import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SudokuBoard from '../components/SudokuBoard';
import ControlPanel from '../components/ControlPanel';
import NavigationBlock from '../components/NavigationBlock';
import DisplayBlock from '../components/DisplayBlock';
import DifficultySelectModal from '../components/DifficultySelectModal';
import TechniqueOverlay from '../components/TechniqueOverlay';
import TechniqueMaskOverlay from '../components/TechniqueMaskOverlay';
// 导入新的显性数对覆盖层组件
import NakedPairOverlay from '../components/NakedPairOverlay';
import { useSudoku } from '../context/SudokuContext';
import { toast } from 'react-toastify';
import { useLoading } from '../context/LoadingContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import './SudokuGamePageStyles.css';

const SudokuGamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const sudokuContext = useSudoku();
  const { t } = useLanguage();
  
  // 安全地从sudokuContext中解构值，提供默认值
  const currentBoard = sudokuContext?.currentBoard || Array(9).fill().map(() => Array(9).fill(0));
  const originalPuzzle = sudokuContext?.originalPuzzle || null;
  const selectedCell = sudokuContext?.selectedCell || null;
  const difficulty = sudokuContext?.difficulty || 'medium';
  const timeElapsed = sudokuContext?.timeElapsed || 0;
  const errorCount = sudokuContext?.errorCount || 0;
  const isTimerActive = sudokuContext?.isTimerActive ?? true;
  const isPencilMode = sudokuContext?.isPencilMode ?? false;
  const setSelectedCell = sudokuContext?.setSelectedCell || (() => {});
  const setHighlightedCells = sudokuContext?.setHighlightedCells || (() => {});
  const setDifficulty = sudokuContext?.setDifficulty || (() => {});
  const setBoard = sudokuContext?.setBoard || (() => {});
  const setSolution = sudokuContext?.setSolution || (() => {});
  const generateNewPuzzle = sudokuContext?.generateNewPuzzle || (() => Promise.resolve());
  const togglePencilMode = sudokuContext?.togglePencilMode || (() => {});
  const toggleTimer = sudokuContext?.toggleTimer || (() => {});
  const getHint = sudokuContext?.getHint || (() => {});
  const clearCell = sudokuContext?.clearCell || (() => {});
  const identifyTechniques = sudokuContext?.identifyTechniques || (() => []);
  const openSettings = sudokuContext?.openSettings || (() => {});
  const fillCell = sudokuContext?.fillCell || (() => {});
  const fillAllCandidates = sudokuContext?.fillAllCandidates || (() => {});
  const undo = sudokuContext?.undo || (() => {}); // 添加undo函数引用
  const solution = sudokuContext?.solution || Array(9).fill().map(() => Array(9).fill(0)); // 获取解决方案用于计算剩余数字
  const highlightedCells = sudokuContext?.highlightedCells || [];
  const pencilNotes = sudokuContext?.pencilNotes || [];
  const calculateTechniques = sudokuContext?.calculateTechniques || (() => {}); // 添加calculateTechniques函数引用
  
  // 检查自定义数独数据的函数
  const checkCustomPuzzle = async () => {
    try {
      const customPuzzleStr = localStorage.getItem('customPuzzle');
      if (customPuzzleStr) {
        console.log('检测到自定义数独数据，重新初始化游戏...');
        console.log('自定义数独数据内容:', customPuzzleStr);
        // 如果有自定义数独数据，重新初始化游戏
        if (sudokuContext?.generateNewPuzzle) {
          startLoading();
          // 使用自定义难度来加载自定义数独
          await sudokuContext.generateNewPuzzle('custom');
          stopLoading();
        }
      } else {
        console.log('未检测到自定义数独数据');
      }
    } catch (error) {
      console.error('检查自定义数独数据失败:', error);
    }
  };

  // 组件挂载时检查自定义数独数据
  useEffect(() => {
    console.log('SudokuGamePage组件挂载，检查自定义数独数据...');
    // 延迟检查，确保页面完全加载
    const timer = setTimeout(checkCustomPuzzle, 500);
    return () => clearTimeout(timer);
  }, []); // 空依赖数组，只在组件挂载时执行一次

  // 监听路由变化，检测从自定义数独页面跳转
  useEffect(() => {
    console.log('路由路径变化:', location.pathname);
    // 如果路径是/game，检查自定义数独数据
    if (location.pathname === '/game') {
      const timer = setTimeout(checkCustomPuzzle, 200);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]); // 当路径变化时触发
  
  // 计算每个数字的剩余未填入数量
  const calculateRemainingNumbers = () => {
    const remainingCounts = {};
    // 初始化所有数字的剩余数量为9（标准数独每个数字出现9次）
    for (let num = 1; num <= 9; num++) {
      remainingCounts[num] = 9;
    }
    
    // 遍历当前棋盘，减少已填入的数字计数
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const cellValue = currentBoard[i][j];
        if (cellValue !== 0 && solution[i][j] === cellValue) { // 只计算正确填入的数字
          remainingCounts[cellValue]--;
        }
      }
    }
    
    return remainingCounts;
  };
  
  const remainingNumbers = calculateRemainingNumbers(); // 计算剩余数字数量

  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [showPencilModeInstructions, setShowPencilModeInstructions] = useState(false);
  const [showNotesInstructions, setShowNotesInstructions] = useState(false);
  const boardContainerRef = useRef(null);
  const timerRef = useRef(null);
  const gameAreaRef = useRef(null);
  
  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      // 首先根据屏幕宽度判断，大屏幕始终使用横屏布局
      // 992px 是横屏布局的最小宽度阈值
      const isSmallScreen = window.innerWidth < 992;
      // 小屏幕再根据方向判断
      const isPortraitOrientation = window.innerHeight > window.innerWidth;
      
      // 大屏幕始终使用横屏布局，小屏幕根据方向决定
      setIsPortrait(isSmallScreen && isPortraitOrientation);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // 初始加载时执行一次
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 处理点击空白区域取消选中
  const handleGameAreaClick = (e) => {
    // 检查点击的是否是数独单元格
    const isCell = e.target.closest('div[row]') || e.target.closest('div[col]');
    const isBoardContainer = e.target.closest('.board-container');
    const isControlPanel = e.target.closest('.controls-container');
    const isNavigationBlock = e.target.closest('.nav-block');
    const isDisplayBlock = e.target.closest('.display-block');
    
    // 如果点击的不是单元格，且不是棋盘容器、控制面板、导航栏或显示区域
    if (!isCell && !isBoardContainer && !isControlPanel && !isNavigationBlock && !isDisplayBlock) {
      setSelectedCell(null);
      // 清除高亮单元格
      if (sudokuContext?.setHighlightedCells) {
        sudokuContext.setHighlightedCells([]);
      }
    }
  };
  
  // 添加点击事件监听器
  useEffect(() => {
    const gameArea = gameAreaRef.current;
    if (gameArea) {
      gameArea.addEventListener('click', handleGameAreaClick);
    }
    
      // 移除游戏结束后自动打开新游戏窗口的事件监听，避免与NavigationBlock重复
    // 新游戏窗口的显示现在由NavigationBlock组件统一处理
    
    return () => {
      if (gameArea) {
        gameArea.removeEventListener('click', handleGameAreaClick);
      }
    };
  }, [selectedCell]);
  
  // 处理单元格选择
  const handleCellClick = (row, col) => {
    // 设置选中的单元格
    setSelectedCell({ row, col });
    
    // 退出技巧模式：清除高亮单元格
    if (sudokuContext?.setHighlightedCells) {
      sudokuContext.setHighlightedCells([]);
    }
    
    // 注意：这里只处理了高亮清除，因为切换标签页的逻辑在ControlPanel组件中
    // ControlPanel组件中的exitTechniqueMode函数会在需要时被调用
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
    return t(difficulty) || difficulty;
  };
  
  // 技巧指示功能由ControlPanel组件通过Context直接实现，使用真实的技巧机会数据
  
  // 处理数字选择
  const handleNumberSelect = (number) => {
    try {
      // 当没有选中单元格时，高亮相同数字的单元格和候选数
      if (!selectedCell) {
        // 收集所有包含相同数字的单元格
        const numberCells = [];
        
        // 遍历棋盘，找出所有包含相同数字的单元格
        for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
            // 检查当前单元格的值
            const cellValue = currentBoard && currentBoard[row] ? currentBoard[row][col] : 0;
            
            // 如果单元格的值与点击的数字相同，就添加到列表中
            if (cellValue === number && number > 0) {
              numberCells.push({ row, col, number });
            }
          }
        }
        
        // 收集所有需要高亮的单元格：包含相同数字的单元格及其同行、同列、同宫的单元格
        const highlightedCells = [];
        const highlightedCellSet = new Set(); // 用于去重
        
        // 辅助函数：获取单元格所在的行、列、宫的所有单元格
        const getRegionCells = (targetRow, targetCol) => {
          const regionCells = [];
          const boxRow = Math.floor(targetRow / 3);
          const boxCol = Math.floor(targetCol / 3);
          
          // 添加同行的所有单元格
          for (let col = 0; col < 9; col++) {
            const cellKey = `${targetRow}-${col}`;
            if (!highlightedCellSet.has(cellKey)) {
              highlightedCellSet.add(cellKey);
              regionCells.push({ row: targetRow, col, regionHighlight: true });
            }
          }
          
          // 添加同列的所有单元格
          for (let row = 0; row < 9; row++) {
            const cellKey = `${row}-${targetCol}`;
            if (!highlightedCellSet.has(cellKey)) {
              highlightedCellSet.add(cellKey);
              regionCells.push({ row, col: targetCol, regionHighlight: true });
            }
          }
          
          // 添加同宫的所有单元格
          for (let row = boxRow * 3; row < (boxRow + 1) * 3; row++) {
            for (let col = boxCol * 3; col < (boxCol + 1) * 3; col++) {
              const cellKey = `${row}-${col}`;
              if (!highlightedCellSet.has(cellKey)) {
                highlightedCellSet.add(cellKey);
                regionCells.push({ row, col, regionHighlight: true });
              }
            }
          }
          
          return regionCells;
        };
        
        // 对于每个包含相同数字的单元格，获取其所在的行、列、宫的所有单元格
        for (const cell of numberCells) {
          // 首先添加当前单元格，标记为包含相同数字
          const cellKey = `${cell.row}-${cell.col}`;
          if (!highlightedCellSet.has(cellKey)) {
            highlightedCellSet.add(cellKey);
            highlightedCells.push({ ...cell, sameNumber: true });
          }
          
          // 然后添加其所在的行、列、宫的所有单元格
          const regionCells = getRegionCells(cell.row, cell.col);
          highlightedCells.push(...regionCells);
        }
        
        // 设置高亮单元格
        if (sudokuContext?.setHighlightedCells) {
          sudokuContext.setHighlightedCells(highlightedCells);
        }
        
        return;
      }
      
      // 判断是否为预填数字单元格
      const isPrefilledCell = originalPuzzle && originalPuzzle[selectedCell.row] && 
                             originalPuzzle[selectedCell.row][selectedCell.col] !== 0;
      
      // 如果是预填数字单元格，点击数字按钮时取消选中
      if (isPrefilledCell) {
        setSelectedCell(null);
        return;
      }
      
      // 判断是否为用户填入正确数字的锁定单元格
      const cellKey = `${selectedCell.row}-${selectedCell.col}`;
      const isLockedCell = sudokuContext?.lockedCells && sudokuContext.lockedCells.has(cellKey);
      
      // 如果是锁定单元格（正确数字），点击数字按钮时取消选中
      if (isLockedCell) {
        setSelectedCell(null);
        return;
      }
      
      // 使用fillCell替代updateCell
      fillCell(selectedCell.row, selectedCell.col, number);
      
      // 修复竖屏模式下的问题：保持单元格选中状态，不自动取消
      // 只有在特定条件下才取消选中
    } catch (error) {
      console.error('Error updating cell:', error);
    }
  };

  // 增强的清除单元格功能
  const enhancedClearCell = () => {
    if (!selectedCell) return;
    
    try {
      // 直接使用解构出来的clearCell函数
      clearCell(selectedCell.row, selectedCell.col);
    } catch (error) {
      console.error('Error clearing cell:', error);
    }
  };

  // 处理新游戏
  const handleNewGame = () => {
    console.log('handleNewGame 被调用');
    // 重置候选数相关状态
    setShowNotesInstructions(false);
    setShowPencilModeInstructions(false);
    
    // 确保清除任何高亮或选中状态
    setSelectedCell(null);
    if (sudokuContext?.setHighlightedCells) {
      sudokuContext.setHighlightedCells([]);
    }
    
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
        startLoading(t('generatingNewPuzzle'));
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
            startLoading(t('loadingGame'));
          }
          
          // 直接设置棋盘数据，不调用会显示toast提示的函数
          if (sudokuContext?.setCurrentBoard && sudokuContext?.setOriginalPuzzle && sudokuContext?.setSolution) {
            // 直接使用本地生成的预设谜题作为首选，确保页面加载时立即显示棋盘
            console.log('直接使用本地预设谜题初始化游戏');
            const presetPuzzle = [
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
            
            const presetSolution = [
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
            
            sudokuContext.setCurrentBoard(presetPuzzle);
            sudokuContext.setOriginalPuzzle(presetPuzzle);
            sudokuContext.setSolution(presetSolution);
            sudokuContext.setGameStarted(true);
            sudokuContext.setTimerActive(true);
          } else {
            // 如果上下文方法不可用，尝试其他方式
            console.log('尝试使用上下文的其他方法初始化游戏');
            // 注意：startNewGame和generateNewPuzzle会显示toast提示，只在绝对必要时使用
          }
        } catch (error) {
          console.error('初始化游戏失败:', error);
          console.error('错误详情:', error.message, error.stack);
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
  const handleGetHint = useCallback(() => {
    // 取消选中单元格
    setSelectedCell(null);
    
    // 随机提取一条技巧机会并弹窗提示
    if (identifyTechniques) {
      const techniques = identifyTechniques();
      if (techniques && techniques.length > 0) {
        // 随机选择一条技巧
        const randomIndex = Math.floor(Math.random() * techniques.length);
        const randomTechnique = techniques[randomIndex];
        
        // 格式化技巧信息进行显示
        let techniqueInfo = t('foundRandomTechnique', '找到随机技巧：');
        
        // 获取技巧名称（支持国际化）
        const techniqueName = t(randomTechnique.type) || t('unknownTechnique') || randomTechnique.type;
        techniqueInfo += techniqueName;
        
        // 添加位置信息
        if (randomTechnique.row !== undefined && randomTechnique.col !== undefined) {
          const positionLabel = t('position', { defaultMessage: '位置' });
          techniqueInfo += ` ${positionLabel}:(${randomTechnique.row + 1},${randomTechnique.col + 1})`;
          // 高亮提示的单元格
          setHighlightedCells([[randomTechnique.row, randomTechnique.col]]);
        }
        
        // 添加数字信息（如果有）
        if (randomTechnique.value !== undefined) {
          const numberLabel = t('number', { defaultMessage: '数字' });
          techniqueInfo += ` ${numberLabel}:${randomTechnique.value}`;
        }
        
        // 弹窗提示
        toast.info(techniqueInfo, {
          position: 'top-right',
          autoClose: 3000
        });
      } else {
        // 如果没有找到技巧，显示提示
        toast.info(t('noTechniquesAvailable', { defaultMessage: '当前没有可用的技巧机会' }), {
          position: 'top-right',
          autoClose: 2000
        });
      }
    } else {
      console.error('identifyTechniques 函数不可用');
    }
  }, [identifyTechniques, setHighlightedCells, setSelectedCell, t]);
  
  // 技巧提示 - 识别并显示可用技巧
  const handleShowTechniques = useCallback(() => {
    // 取消选中单元格
    setSelectedCell(null);
    
    const techniques = identifyTechniques();
    if (techniques.length > 0) {
      toast.info(`找到${techniques.length}个可用技巧，可在技巧标签页中查看详情`, {
        position: 'top-right',
        autoClose: 2000
      });
    } else {
      toast.info('当前棋盘没有找到可用技巧，请尝试其他解法或获取提示', {
        position: 'top-right',
        autoClose: 2000
      });
    }
  }, [identifyTechniques, setSelectedCell]);

  // 处理候选数按钮点击 - 只负责生成全部候选数覆盖的单一功能
  const handleToggleNotes = () => {
    if (fillAllCandidates) {
      // 计算并填充所有候选数
      fillAllCandidates();
      // 使用提醒弹窗替代alert
      setShowNotesInstructions(true);
      setTimeout(() => setShowNotesInstructions(false), 2000);
    }
  };
  
  // 处理切换铅笔模式
  const handleTogglePencilMode = () => {
    if (togglePencilMode) {
      togglePencilMode();
      // 显示短暂的提示信息
      setShowPencilModeInstructions(true);
      setTimeout(() => setShowPencilModeInstructions(false), 2000);
    }
  };

  // 处理打开设置
  const handleSettings = () => {
    if (openSettings) {
      openSettings();
    }
  };
  
  return (
    <div className="sudoku-game-container" ref={gameAreaRef}>
      {/* 游戏暂停蒙板 */}
      {!isTimerActive && !sudokuContext?.gameCompleted && sudokuContext?.gameStarted && !sudokuContext?.isLoading && (
        <div className="pause-overlay" onClick={handlePauseTimer}>
          <div className="pause-message">
            <h2>{t('gamePaused')}</h2>
            <p>{t('clickToResume')}</p>
          </div>
        </div>
      )}
      
      {/* 主要内容区域 */}
      <div className="main-content">
        {isPortrait ? (
          // 竖屏模式：垂直排列所有组件
          <>
            {/* 上滑提示符号 - 仅在竖屏模式显示 */}
            <div className="scroll-hint"></div>
            
            {/* 显示区块 - 使用DisplayBlock组件 */}
            <DisplayBlock 
              errorCount={errorCount}
              difficulty={difficulty}
              time={formatTime(timeElapsed)}
            />
            
            {/* 导航栏区块 - 包含5个图标按钮 */}
            <NavigationBlock
              onNewGame={handleNewGame}
              onPauseTimer={handlePauseTimer}
              onGetHint={handleGetHint}
              onShowTechniques={handleShowTechniques}
              onToggleNotes={handleToggleNotes}
              onSettings={handleSettings}
              isNotesMode={isPencilMode}
              isTimerActive={isTimerActive}
              gameCompleted={sudokuContext?.gameCompleted || false}
            />
            
            {/* 数独棋盘 */}
            <div className="board-container" ref={boardContainerRef} onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
              <SudokuBoard
                board={currentBoard || Array(9).fill().map(() => Array(9).fill(0))}
                originalPuzzle={originalPuzzle}
                selectedCell={selectedCell}
                highlightedCells={sudokuContext?.highlightedCells || []}
                incorrectCells={sudokuContext?.incorrectCells || new Set()}
                onCellClick={handleCellClick}
                isPencilMode={isPencilMode}
                pencilNotes={sudokuContext?.pencilNotes || []}
              />
              {/* 外挂式技巧遮罩层 - 唯一余数技巧专用 */}
              <TechniqueMaskOverlay 
                  highlightedCells={(sudokuContext?.highlightedCells || []).filter(cell => cell.techniqueIndicator)}
                  boardWidth={boardContainerRef.current?.offsetWidth || 450}
                  boardHeight={boardContainerRef.current?.offsetHeight || 450}
                  isPortrait={isPortrait}
                />
                
              {/* 外挂式技巧高亮层 */}
              <TechniqueOverlay 
                highlightedCells={(sudokuContext?.highlightedCells || []).filter(cell => cell.techniqueIndicator)}
                boardWidth={boardContainerRef.current?.offsetWidth || 450}
                boardHeight={boardContainerRef.current?.offsetHeight || 450}
                isPortrait={isPortrait}
              />
                
              {/* 显性数对法专用覆盖层 */}
              <NakedPairOverlay 
                highlightedCells={(sudokuContext?.highlightedCells || []).filter(cell => 
                  cell.techniqueIndicator === true && 
                  cell.techniqueType && 
                  cell.techniqueType.includes('nakedPair')
                )}
                boardWidth={boardContainerRef.current?.offsetWidth || 450}
                boardHeight={boardContainerRef.current?.offsetHeight || 450}
                isPortrait={isPortrait}
              />
            </div>
            
            {/* 操作面板 */}
            <div className="controls-container" onClick={(e) => e.stopPropagation()}>
              <ControlPanel
                onNumberSelect={handleNumberSelect}
                onClearCell={enhancedClearCell}
                onUndo={undo} // 添加onUndo属性
                selectedNumber={selectedCell?.value || null}
                isPencilMode={isPencilMode}
                togglePencilMode={handleTogglePencilMode}
                fillAllCandidates={fillAllCandidates}
                calculateTechniques={calculateTechniques} // 添加calculateTechniques属性
                remainingNumbers={remainingNumbers} // 添加剩余数字数量
              />
            </div>
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
                  onShowTechniques={handleShowTechniques}
                  onToggleNotes={handleToggleNotes}
                  onSettings={handleSettings}
                  isNotesMode={isPencilMode}
                  isTimerActive={isTimerActive}
                />
              </div>
              
              {/* 显示区块 - 右侧，宽度为棋盘的2/3，精简显示 */}
              <div className="display-block">
                <div>
                  {t('error')}：<span className="value error-count" style={{color: '#ff4d4d'}}>{errorCount}</span>
                </div>
                <div>
                  {t(difficulty)}
                </div>
                <div>
                  {formatTime(timeElapsed)}
                </div>
              </div>
            </div>
            
            {/* 底部区域：数独棋盘 */}
            <div className="bottom-row">
              {/* 数独棋盘 - 左侧，作为尺寸基准 */}
              <div className="board-container" ref={boardContainerRef} onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
                <SudokuBoard
                  board={currentBoard || Array(9).fill().map(() => Array(9).fill(0))}
                  originalPuzzle={originalPuzzle}
                  selectedCell={selectedCell}
                  highlightedCells={sudokuContext?.highlightedCells || []}
                  incorrectCells={sudokuContext?.incorrectCells || new Set()}
                  onCellClick={handleCellClick}
                  isPencilMode={isPencilMode}
                  pencilNotes={pencilNotes}
                />
                {/* 外挂式技巧遮罩层 - 唯一余数技巧专用 */}
                <TechniqueMaskOverlay 
                  highlightedCells={(sudokuContext?.highlightedCells || []).filter(cell => cell.techniqueIndicator)}
                  boardWidth={boardContainerRef.current?.offsetWidth || 450}
                  boardHeight={boardContainerRef.current?.offsetHeight || 450}
                  isPortrait={isPortrait}
                />
                
                {/* 外挂式技巧高亮层 */}
                <TechniqueOverlay 
                  highlightedCells={(sudokuContext?.highlightedCells || []).filter(cell => cell.techniqueIndicator)}
                  boardWidth={boardContainerRef.current?.offsetWidth || 450}
                  boardHeight={boardContainerRef.current?.offsetHeight || 450}
                  isPortrait={isPortrait}
                />
                
                {/* 显性数对法专用覆盖层 */}
                <NakedPairOverlay 
                  highlightedCells={(sudokuContext?.highlightedCells || []).filter(cell => 
                    cell.techniqueIndicator === true && 
                    cell.techniqueType && 
                    cell.techniqueType.includes('nakedPair')
                  )}
                  boardWidth={boardContainerRef.current?.offsetWidth || 450}
                  boardHeight={boardContainerRef.current?.offsetHeight || 450}
                  isPortrait={isPortrait}
                />
              </div>
              
              {/* 右侧控制面板 */}
              <div className="controls-container" onClick={(e) => e.stopPropagation()}>
                <ControlPanel
                  onNumberSelect={handleNumberSelect}
                  onClearCell={enhancedClearCell}
                  onUndo={undo} // 添加onUndo属性
                  selectedNumber={selectedCell?.value || null}
                  isPencilMode={isPencilMode}
                  togglePencilMode={handleTogglePencilMode}
                  fillAllCandidates={fillAllCandidates}
                  calculateTechniques={calculateTechniques} // 添加calculateTechniques属性
                  remainingNumbers={remainingNumbers} // 添加剩余数字数量
                />
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* 新增内容区块 - 为SEO优化添加 */}
      <div className="sudoku-info-section">
        {/* 欢迎区域 */}
        <div className="info-block welcome-section">
          <h2>{t('welcomeTitle')}</h2>
          <p>{t('welcomeContent')}</p>
        </div>
        
        {/* 数独基本规则 */}
        <div className="info-block rules-section">
          <h2>{t('rulesTitle')}</h2>
          <p>{t('rulesContent')}</p>
        </div>
        
        {/* 数独技巧介绍 */}
        <div className="info-block techniques-section">
          <h2>{t('techniquesTitle')}</h2>
          <div className="techniques-container" dangerouslySetInnerHTML={{ __html: t('techniquesContent') }} />
        </div>
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
      
      {/* 铅笔模式提示信息 */}
      {showPencilModeInstructions && (
        <div className="pencil-mode-instructions">
          {isPencilMode ? t('enterPencilMode') : t('exitPencilMode')}
        </div>
      )}
      
      {/* 候选数提示信息 */}
      {showNotesInstructions && (
        <div className="pencil-mode-instructions">
          {t('notesCalculated')}
        </div>
      )}
    </div>
  );
};

export default SudokuGamePage;