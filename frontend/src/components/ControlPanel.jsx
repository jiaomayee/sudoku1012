import React, { useState, useEffect, useCallback, useContext } from 'react';
import { toast } from 'react-toastify';
// 移除styled-components导入
import { useTheme } from '../context/ThemeContext';
import { useSudoku } from '../context/SudokuContext';
import { useLanguage } from '../context/LanguageContext';
// 导入模式上下文
import { ModeContext } from '../context/ModeContext';
// 导入确认模态框组件
import ConfirmModal from './ConfirmModal';

// 添加对显性数对指示功能的支持
import nakedPairIndicator from '../utils/nakedPairIndicator';
// 添加对ALS-XZ指示功能的支持
import alsXZIndicator from '../utils/alsXZIndicator';
// 添加对SDC指示功能的支持
import sdcIndicator from '../utils/sdcIndicator';

// 添加清除按钮图标的CSS样式
const clearCellIconStyles = `
  .clear-cell-icon {
    width: 24px;
    height: 24px;
  }
  
  @media (min-width: 769px) {
    .clear-cell-icon {
      width: 32px;
      height: 32px;
    }
  }
`;

// 候选数图标组件（从NavigationBlock复制并修改为白色）
const NotesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    {/* 数独格子背景 */}
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5" fill="transparent"/>
    {/* 添加2x2网格分割线 */}
    <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="1" strokeDasharray="1"/>
    <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="1" strokeDasharray="1"/>
    {/* 显示两个数字：2（左上角）和5（右下角） */}
    <text x="7" y="10" fontSize="6" fontWeight="bold" fill="white">2</text>
    <text x="15" y="18" fontSize="6" fontWeight="bold" fill="white">5</text>
  </svg>
);

// 获取技巧显示名称
const getTechniqueDisplayType = (primaryType, secondaryType, t) => {
    if (primaryType === 'hiddenSingle') {
      if (secondaryType === t('row')) return t('rowElimination');
      if (secondaryType === t('col')) return t('columnElimination');
      if (secondaryType === t('box')) return t('boxElimination');
    }
    // 确保返回的是翻译后的技巧名称
    const techniqueNames = {
      'nakedSingle': t('nakedSingleTechnique'),
      'nakedPairRow': t('nakedPairTechnique'),
      'nakedPairCol': t('nakedPairTechnique'),
      'nakedPairBox': t('nakedPairTechnique'),
      'hiddenPairRow': t('hiddenPairTechnique'),
      'hiddenPairCol': t('hiddenPairTechnique'),
      'hiddenPairBox': t('hiddenPairTechnique'),
      'nakedTripleRow': t('nakedTripleTechnique'),
      'nakedTripleCol': t('nakedTripleTechnique'),
      'nakedTripleBox': t('nakedTripleTechnique'),
      'hiddenTripleRow': t('hiddenTripleTechnique'),
      'hiddenTripleCol': t('hiddenTripleTechnique'),
      'hiddenTripleBox': t('hiddenTripleTechnique'),
      'uniqueness': t('uniquenessTechnique'),
      'uniqueness_type1': t('uniquenessTechnique'),
      'uniqueness_type2': t('uniquenessTechnique'),
      'uniqueness_type3': t('uniquenessTechnique'),
      'uniqueness_type4': t('uniquenessTechnique'),
      'uniqueness_1': t('uniquenessTechnique'),
      'uniqueness_avoidable_rectangle_1': t('avoidableRectangleTechnique'),
      'uniqueness_avoidable_rectangle_2': t('avoidableRectangleTechnique'),
      'uniqueness_bug_plus_1': t('uniquenessTechnique'),
      'Avoidable Rectangle': t('avoidableRectangleTechnique')
    };
    return techniqueNames[primaryType] || primaryType;
  };

const ControlPanel = ({ 
  onNumberSelect, 
  onClearCell,
  onUndo,
  togglePencilMode,
  fillAllCandidates,
  calculateTechniques,
  selectedNumber,
  isPencilMode,
  remainingNumbers = {} // 添加剩余数字数量属性，默认为空对象
}) => {
  // 检测是否为竖屏模式 - 改进检测逻辑
  const isVerticalMode = () => {
    // 使用更准确的竖屏检测逻辑
    return window.innerHeight > window.innerWidth;
  };
  
  const [verticalMode, setVerticalMode] = useState(isVerticalMode());
  
  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setVerticalMode(isVerticalMode());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { mode } = useContext(ModeContext); // 获取当前模式
  const [activeTab, setActiveTab] = useState('keyboard'); // 'keyboard', 'techniques', 'solution'
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // 添加分页状态
  
  // 从上下文获取技巧和应用技巧的方法
  const sudokuContext = useSudoku();
  const { identifyTechniques, applyTechniqueToBoard, gameStarted, currentBoard, setHighlightedCells, setSelectedCell, selectedCell, pencilNotes, areCandidatesComplete } = sudokuContext || {};
  
  // 退出技巧模式的函数
  const exitTechniqueMode = useCallback(() => {
    // 切换到键盘标签页
    setActiveTab('keyboard');
    // 清除高亮
    if (setHighlightedCells) {
      setHighlightedCells([]);
    }
    // 清除所有专用指示器
    alsXZIndicator.clearHighlights();
    sdcIndicator.clearHighlights();
    // 清除选中的技巧和步骤
    setSelectedTechnique(null);
    // 重置分页
    setCurrentPage(0);
  }, [setHighlightedCells]);
  
  // 监听选中单元格的变化，当用户点击单元格时退出技巧模式
  useEffect(() => {
    if (selectedCell) {
      exitTechniqueMode();
    }
  }, [selectedCell, exitTechniqueMode]);
  
  // 保存找到的技巧
  const [availableTechniques, setAvailableTechniques] = useState([]);
  
  // 保存选中技巧的详细步骤
  const [techniqueSteps, setTechniqueSteps] = useState([]);
  
  // 确认模态框状态
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmModalConfig, setConfirmModalConfig] = useState({
    title: '',
    message: '',
    onConfirm: () => {}
  });
  
  // 监听游戏开始状态变化，确保新建游戏时显示键盘标签页
  useEffect(() => {
    // 当游戏状态变化时，重置为键盘标签页
    setActiveTab('keyboard');
    // 清除选中的技巧和步骤
    setSelectedTechnique(null);
    setTechniqueSteps([]);
    // 清空可用技巧列表
    setAvailableTechniques([]);
    // 重置分页
    setCurrentPage(0);
    // 清除高亮
    if (setHighlightedCells) {
      setHighlightedCells([]);
    }
  }, [gameStarted, currentBoard]); // 当游戏重新开始或棋盘变化时触发
  
  // 监听模式变化，确保从学习模式切换到游戏模式时自动选中键盘标签页
  useEffect(() => {
    // 当模式不是学习模式时，确保显示键盘标签页
    if (mode !== 'learning') {
      setActiveTab('keyboard');
      // 清除选中的技巧和步骤
      setSelectedTechnique(null);
      setTechniqueSteps([]);
      // 清空可用技巧列表
      setAvailableTechniques([]);
      // 重置分页
      setCurrentPage(0);
      // 清除高亮
      if (setHighlightedCells) {
        setHighlightedCells([]);
      }
    }
  }, [mode]); // 只监听模式变化
  
  // 查找技巧的函数
  const findTechniques = useCallback(() => {
    if (identifyTechniques && currentBoard) {
      try {
        const techniques = identifyTechniques();
        setAvailableTechniques(techniques || []);
      } catch (error) {
        console.error('查找技巧失败:', error);
        setAvailableTechniques([]);
      }
    } else {
      setAvailableTechniques([]);
    }
  }, [identifyTechniques, currentBoard]);
  
  // 当技巧标签页激活时，查找可用技巧
  useEffect(() => {
    if (activeTab === 'techniques' && gameStarted && currentBoard) {
      findTechniques();
    }
  }, [activeTab, findTechniques, gameStarted, currentBoard]);
  
  // 当游戏重新开始时，重置技巧数据
  useEffect(() => {
    setAvailableTechniques([]);
  }, [gameStarted]); // 只在游戏重新开始时清空技巧列表，不包括currentBoard变化

  // 处理技巧选择
  // 技巧选择处理函数
  const handleTechniqueSelect = (technique) => {
    // 清除上一个技巧的指示功能
    // 无条件清除ALS-XZ技巧的DOM高亮（避免候选数高亮遗留）
    // 即使上一个技巧不是ALS-XZ，也要清除以防有遗留的ALS-XZ高亮
    alsXZIndicator.clearHighlights();
    
    // 清除SDC技巧的DOM高亮（避免高亮遗留）
    sdcIndicator.clearHighlights();
    
    // 清除通用的高亮（基于setHighlightedCells）
    if (setHighlightedCells) {
      setHighlightedCells([]);
    }
    
    setSelectedTechnique(technique);
    const steps = [];
    
    // 添加默认值处理
    const hasSingleCell = typeof technique.row === 'number' && typeof technique.col === 'number';
    const row = hasSingleCell ? technique.row : 0;
    const col = hasSingleCell ? technique.col : 0;
    const position = hasSingleCell ? `(${row + 1},${col + 1})` : t('multipleCells');
    
    // 与handlePageChange保持一致的value提取逻辑
    let value = '';
    if (technique) {
      // 优先使用value属性
      value = technique.value || '';
      
      // 如果没有value属性，尝试从number属性获取
      if (!value && technique.number !== undefined) {
        value = technique.number;
      }
      
      // 如果还是没有，尝试从其他属性中提取
      if (!value && technique.result && technique.result.value) {
        value = technique.result.value;
      }
      
      if (!value && technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 从cells数组中提取第一个单元格的value
        const firstCell = technique.cells[0];
        if (firstCell && firstCell.value) {
          value = firstCell.value;
        }
      }
    }
    
    // 根据技巧类型构建解题步骤
    if (technique.type === 'nakedSingle') {
      steps.push(
        { step: 1, description: t('findSingleCandidateCell'), highlight: '' },
        { step: 2, description: t('cellOnlyHasSingleCandidate').replace('{position}', position).replace('{value}', value), highlight: position },
        { step: 3, description: t('fillNumber').replace('{value}', value), highlight: position }
      );
    } else if (technique.type.includes('hiddenSingle')) {
      // 根据技巧类型确定区域类型
      const regionType = technique.type.includes('Row') ? t('row') : 
                         (technique.type.includes('Col') ? t('col') : t('box'));
      
      // 安全地计算区域编号，避免NaN
      let regionNum = 0;
      if (hasSingleCell) {
        regionNum = technique.type.includes('Row') ? row + 1 : 
                    (technique.type.includes('Col') ? col + 1 : 
                    Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
      } else if (technique.row !== undefined && regionType === t('row')) {
         // 对于行区域，从technique对象获取行号
         regionNum = technique.row + 1;
       } else if (technique.col !== undefined && regionType === t('col')) {
         // 对于列区域，从technique对象获取列号
         regionNum = technique.col + 1;
      } else if (technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 如果有cells数组，根据区域类型获取正确的区域号
        const firstCell = technique.cells[0];
        if (Array.isArray(firstCell)) {
          // 数组格式 [row, col]
          if (regionType === t('col') && typeof firstCell[1] === 'number') {
             // 列区域：获取列号
            regionNum = firstCell[1] + 1;
          } else if (typeof firstCell[0] === 'number') {
            // 行或宫区域：获取行号
            regionNum = firstCell[0] + 1;
          }
        } else if (firstCell) {
          // 对象格式 {row, col}
          if (regionType === t('col') && firstCell.col !== undefined) {
             // 列区域：获取列号
            regionNum = firstCell.col + 1;
          } else if (firstCell.row !== undefined) {
            // 行或宫区域：获取行号
            regionNum = firstCell.row + 1;
          }
        }
      }
      
      steps.push(
        { step: 1, description: t('findHiddenSingleInRegion').replace('{regionType}', regionType).replace('{regionNum}', regionNum), highlight: '' },
        { step: 2, description: t('numberOnlyInPosition').replace('{value}', value).replace('{regionType}', regionType).replace('{regionNum}', regionNum).replace('{position}', position), highlight: position },
        { step: 3, description: t('fillNumber').replace('{value}', value), highlight: position }
      );
    } else if (technique.type.includes('NakedPairs') || technique.type.includes('nakedPairs') || technique.type.includes('nakedPair')) {
      // 显性数对法解题步骤
      const regionType = technique.type.includes('Row') ? t('row') : 
                         (technique.type.includes('Col') ? t('col') : t('box'));
      
      let regionNum = 0;
      if (hasSingleCell) {
        regionNum = technique.type.includes('Row') ? row + 1 : 
                    (technique.type.includes('Col') ? col + 1 : 
                    Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
      } else if (technique.row !== undefined && regionType === t('row')) {
        // 对于行区域，从technique对象获取行号
        regionNum = technique.row + 1;
      } else if (technique.col !== undefined && regionType === t('col')) {
        // 对于列区域，从technique对象获取列号
        regionNum = technique.col + 1;
      } else if (technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 如果有cells数组，根据区域类型获取正确的区域号
        const firstCell = technique.cells[0];
        if (Array.isArray(firstCell)) {
          // 数组格式 [row, col]
          if (regionType === t('col') && typeof firstCell[1] === 'number') {
            // 列区域：获取列号
            regionNum = firstCell[1] + 1;
          } else if (typeof firstCell[0] === 'number') {
            // 行或宫区域：获取行号
            regionNum = firstCell[0] + 1;
          }
        } else if (firstCell) {
          // 对象格式 {row, col}
          if (regionType === t('col') && firstCell.col !== undefined) {
            // 列区域：获取列号
            regionNum = firstCell.col + 1;
          } else if (firstCell.row !== undefined) {
            // 行或宫区域：获取行号
            regionNum = firstCell.row + 1;
          }
        }
      }
      
      const pairNumbers = Array.isArray(technique.values) ? technique.values.join(',') : '数对';
      
      // 格式化数对单元格位置显示
      const formattedCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => {
            // 处理两种格式：对象格式 {row,col} 或数组格式 [row,col]
            if (Array.isArray(cell)) {
              // 数组格式 [row, col]
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              // 对象格式 {row, col}
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : position;
      
      // 手动计算目标单元格：区域内除了数对单元格之外的所有单元格，并且排除已填入数字的单元格
      const targetCells = [];
      
      // 根据区域类型确定目标单元格
      if (regionType === t('row') && regionNum > 0) {
        // 行区域：同一行中的其他单元格
        for (let col = 0; col < 9; col++) {
          // 检查是否是数对中的单元格
          const isInPair = technique.cells.some(cell => 
            (Array.isArray(cell) && cell[0] === regionNum - 1 && cell[1] === col) ||
            (cell.row !== undefined && cell.row === regionNum - 1 && cell.col === col)
          );
          // 检查单元格是否已填入数字
          const hasValue = currentBoard && currentBoard[regionNum - 1] && currentBoard[regionNum - 1][col] > 0;
          if (!isInPair && !hasValue) {
            targetCells.push([regionNum - 1, col]);
          }
        }
      } else if (regionType === t('col') && regionNum > 0) {
        // 列区域：同一列中的其他单元格
        for (let row = 0; row < 9; row++) {
          // 检查是否是数对中的单元格
          const isInPair = technique.cells.some(cell => 
            (Array.isArray(cell) && cell[0] === row && cell[1] === regionNum - 1) ||
            (cell.row !== undefined && cell.row === row && cell.col === regionNum - 1)
          );
          // 检查单元格是否已填入数字
          const hasValue = currentBoard && currentBoard[row] && currentBoard[row][regionNum - 1] > 0;
          if (!isInPair && !hasValue) {
            targetCells.push([row, regionNum - 1]);
          }
        }
      } else if (regionType === t('box') && regionNum > 0) {
        // 宫区域：同一宫中的其他单元格
        const boxRow = Math.floor((regionNum - 1) / 3) * 3;
        const boxCol = ((regionNum - 1) % 3) * 3;
        
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            const row = boxRow + r;
            const col = boxCol + c;
            
            // 检查是否是数对中的单元格
            const isInPair = technique.cells.some(cell => 
              (Array.isArray(cell) && cell[0] === row && cell[1] === col) ||
              (cell.row !== undefined && cell.row === row && cell.col === col)
            );
            // 检查单元格是否已填入数字
            const hasValue = currentBoard && currentBoard[row] && currentBoard[row][col] > 0;
            if (!isInPair && !hasValue) {
              targetCells.push([row, col]);
            }
          }
        }
      }
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = targetCells.length > 0
        ? targetCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: `在${regionType}${regionNum}中查找数对`, highlight: '' },
        { step: 2, description: t('foundNakedPair', { numbers: pairNumbers, cells: formattedCells }), highlight: position },
        { step: 3, description: t('removeCandidatesFromTargets', { numbers: pairNumbers, targets: formattedTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('HiddenPairs') || technique.type.includes('hiddenPairs') || technique.type.includes('hiddenPair')) {
      // 隐性数对法解题步骤
      const regionType = technique.type.includes('Row') ? t('row') : 
                         (technique.type.includes('Col') ? t('col') : t('box'));
      
      let regionNum = 0;
      if (hasSingleCell) {
        regionNum = technique.type.includes('Row') ? row + 1 : 
                    (technique.type.includes('Col') ? col + 1 : 
                    Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
      } else if (technique.row !== undefined && regionType === t('row')) {
        // 对于行区域，从technique对象获取行号
        regionNum = technique.row + 1;
      } else if (technique.col !== undefined && regionType === t('col')) {
        // 对于列区域，从technique对象获取列号
        regionNum = technique.col + 1;
      } else if (technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 如果有cells数组，根据区域类型获取正确的区域号
        const firstCell = technique.cells[0];
        if (Array.isArray(firstCell)) {
          // 数组格式 [row, col]
          if (regionType === t('col') && typeof firstCell[1] === 'number') {
            // 列区域：获取列号
            regionNum = firstCell[1] + 1;
          } else if (regionType === t('box') && typeof firstCell[0] === 'number' && typeof firstCell[1] === 'number') {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell[0] / 3) * 3 + Math.floor(firstCell[1] / 3) + 1;
          } else if (typeof firstCell[0] === 'number') {
            // 行区域：获取行号
            regionNum = firstCell[0] + 1;
          }
        } else if (firstCell) {
          // 对象格式 {row, col}
          if (regionType === t('col') && firstCell.col !== undefined) {
            // 列区域：获取列号
            regionNum = firstCell.col + 1;
          } else if (regionType === t('box') && firstCell.row !== undefined && firstCell.col !== undefined) {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell.row / 3) * 3 + Math.floor(firstCell.col / 3) + 1;
          } else if (firstCell.row !== undefined) {
            // 行区域：获取行号
            regionNum = firstCell.row + 1;
          }
        }
      }
      
      const pairNumbers = Array.isArray(technique.values) ? technique.values.join(',') : '数对';
      
      // 格式化数对单元格位置显示
      const formattedCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => {
            // 处理两种格式：对象格式 {row,col} 或数组格式 [row,col]
            if (Array.isArray(cell)) {
              // 数组格式 [row, col]
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              // 对象格式 {row, col}
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : position;
      
      steps.push(
        { step: 1, description: t('findHiddenPairInRegion', { regionType: regionType, regionNum: regionNum }), highlight: '' },
        { step: 2, description: t('foundNumbersOnlyInCells', { numbers: pairNumbers, cells: formattedCells }), highlight: position },
        { step: 3, description: t('removeOtherCandidates', { cells: formattedCells, numbers: pairNumbers }), highlight: position }
      );
    } else if (technique.type.includes('nakedTriple')) {
      // 显性三链数法解题步骤
      const regionType = technique.type.includes('Row') ? t('row') : 
                         (technique.type.includes('Col') ? t('col') : t('box'));
      
      let regionNum = 0;
      if (hasSingleCell) {
        regionNum = technique.type.includes('Row') ? row + 1 : 
                    (technique.type.includes('Col') ? col + 1 : 
                    Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
      } else if (technique.row !== undefined && regionType === t('row')) {
        // 对于行区域，从technique对象获取行号
        regionNum = technique.row + 1;
      } else if (technique.col !== undefined && regionType === t('col')) {
        // 对于列区域，从technique对象获取列号
        regionNum = technique.col + 1;
      } else if (technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 如果有cells数组，根据区域类型获取正确的区域号
        const firstCell = technique.cells[0];
        if (Array.isArray(firstCell)) {
          // 数组格式 [row, col]
          if (regionType === t('col') && typeof firstCell[1] === 'number') {
            // 列区域：获取列号
            regionNum = firstCell[1] + 1;
          } else if (typeof firstCell[0] === 'number') {
            // 行或宫区域：获取行号
            regionNum = firstCell[0] + 1;
          }
        } else if (firstCell) {
          // 对象格式 {row, col}
          if (regionType === t('col') && firstCell.col !== undefined) {
            // 列区域：获取列号
            regionNum = firstCell.col + 1;
          } else if (firstCell.row !== undefined) {
            // 行或宫区域：获取行号
            regionNum = firstCell.row + 1;
          }
        }
      }
      
      const tripleNumbers = Array.isArray(technique.values) ? technique.values.join(',') : '三链数';
      
      // 格式化三链数单元格位置显示
      const formattedCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => {
            // 处理两种格式：对象格式 {row,col} 或数组格式 [row,col]
            if (Array.isArray(cell)) {
              // 数组格式 [row, col]
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              // 对象格式 {row, col}
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : position;
      
      // 手动计算目标单元格：区域内除了三链数单元格之外的所有单元格，并且排除已填入数字的单元格
      const targetCells = [];
      
      // 根据区域类型确定目标单元格
      if (regionType === t('row') && regionNum > 0) {
        // 行区域：同一行中的其他单元格
        for (let col = 0; col < 9; col++) {
          // 检查是否是三链数中的单元格
          const isInTriple = technique.cells.some(cell => 
            (Array.isArray(cell) && cell[0] === regionNum - 1 && cell[1] === col) ||
            (cell.row !== undefined && cell.row === regionNum - 1 && cell.col === col)
          );
          // 检查单元格是否已填入数字
          const hasValue = currentBoard && currentBoard[regionNum - 1] && currentBoard[regionNum - 1][col] > 0;
          if (!isInTriple && !hasValue) {
            targetCells.push([regionNum - 1, col]);
          }
        }
      } else if (regionType === t('col') && regionNum > 0) {
        // 列区域：同一列中的其他单元格
        for (let row = 0; row < 9; row++) {
          // 检查是否是三链数中的单元格
          const isInTriple = technique.cells.some(cell => 
            (Array.isArray(cell) && cell[0] === row && cell[1] === regionNum - 1) ||
            (cell.row !== undefined && cell.row === row && cell.col === regionNum - 1)
          );
          // 检查单元格是否已填入数字
          const hasValue = currentBoard && currentBoard[row] && currentBoard[row][regionNum - 1] > 0;
          if (!isInTriple && !hasValue) {
            targetCells.push([row, regionNum - 1]);
          }
        }
      } else if (regionType === t('box') && regionNum > 0) {
        // 宫区域：同一宫中的其他单元格
        const boxRow = Math.floor((regionNum - 1) / 3) * 3;
        const boxCol = ((regionNum - 1) % 3) * 3;
        
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            const row = boxRow + r;
            const col = boxCol + c;
            
            // 检查是否是三链数中的单元格
            const isInTriple = technique.cells.some(cell => 
              (Array.isArray(cell) && cell[0] === row && cell[1] === col) ||
              (cell.row !== undefined && cell.row === row && cell.col === col)
            );
            // 检查单元格是否已填入数字
            const hasValue = currentBoard && currentBoard[row] && currentBoard[row][col] > 0;
            if (!isInTriple && !hasValue) {
              targetCells.push([row, col]);
            }
          }
        }
      }
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = targetCells.length > 0
        ? targetCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: `在${regionType}${regionNum}中查找三链数`, highlight: '' },
        { step: 2, description: t('foundNakedTriple', { numbers: tripleNumbers, cells: formattedCells }), highlight: position },
        { step: 3, description: t('removeCandidatesFromTargets', { numbers: tripleNumbers, targets: formattedTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('HiddenTriples') || technique.type.includes('hiddenTriples') || technique.type.includes('hiddenTriple')) {
      // 隐性三链数法解题步骤
      const regionType = technique.type.includes('Row') ? t('row') : 
                         (technique.type.includes('Col') ? t('col') : t('box'));
      
      let regionNum = 0;
      if (hasSingleCell) {
        regionNum = technique.type.includes('Row') ? row + 1 : 
                    (technique.type.includes('Col') ? col + 1 : 
                    Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
      } else if (technique.row !== undefined && regionType === t('row')) {
        // 对于行区域，从technique对象获取行号
        regionNum = technique.row + 1;
      } else if (technique.col !== undefined && regionType === t('col')) {
        // 对于列区域，从technique对象获取列号
        regionNum = technique.col + 1;
      } else if (technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 如果有cells数组，根据区域类型获取正确的区域号
        const firstCell = technique.cells[0];
        if (Array.isArray(firstCell)) {
          // 数组格式 [row, col]
          if (regionType === t('col') && typeof firstCell[1] === 'number') {
            // 列区域：获取列号
            regionNum = firstCell[1] + 1;
          } else if (regionType === t('box') && typeof firstCell[0] === 'number' && typeof firstCell[1] === 'number') {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell[0] / 3) * 3 + Math.floor(firstCell[1] / 3) + 1;
          } else if (typeof firstCell[0] === 'number') {
            // 行区域：获取行号
            regionNum = firstCell[0] + 1;
          }
        } else if (firstCell) {
          // 对象格式 {row, col}
          if (regionType === t('col') && firstCell.col !== undefined) {
            // 列区域：获取列号
            regionNum = firstCell.col + 1;
          } else if (regionType === t('box') && firstCell.row !== undefined && firstCell.col !== undefined) {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell.row / 3) * 3 + Math.floor(firstCell.col / 3) + 1;
          } else if (firstCell.row !== undefined) {
            // 行区域：获取行号
            regionNum = firstCell.row + 1;
          }
        }
      }
      
      const tripleNumbers = Array.isArray(technique.values) ? technique.values.join(',') : '三链数';
      
      // 格式化三链数单元格位置显示
      const formattedCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => {
            // 处理两种格式：对象格式 {row,col} 或数组格式 [row,col]
            if (Array.isArray(cell)) {
              // 数组格式 [row, col]
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              // 对象格式 {row, col}
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : position;
      
      steps.push(
        { step: 1, description: t('findHiddenTripleInRegion', { regionType: regionType, regionNum: regionNum }), highlight: '' },
        { step: 2, description: t('foundNumbersOnlyInCells', { numbers: tripleNumbers, cells: formattedCells }), highlight: position },
        { step: 3, description: t('removeOtherCandidates', { cells: formattedCells, numbers: tripleNumbers }), highlight: position }
      );
    } else if (technique.type.includes('uniqueness_type1') || technique.type.includes('uniqueness_1')) {
      // 唯一矩形类型1解题步骤
      const arCells = technique.cells && Array.isArray(technique.cells) ? technique.cells : [];
      const basePair = technique.basePair && Array.isArray(technique.basePair) ? technique.basePair : [];
      const withExtra = technique.withExtra && Array.isArray(technique.withExtra) ? technique.withExtra : [];
      const withoutExtra = technique.withoutExtra && Array.isArray(technique.withoutExtra) ? technique.withoutExtra : [];
      const targetCells = technique.targetCells && Array.isArray(technique.targetCells) ? technique.targetCells : [];
      const totalCount = technique.totalCount || 0;
      
      // 格式化单元格位置显示
      const formattedARCells = arCells.length > 0
        ? arCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedBasePair = basePair.length > 0
        ? basePair.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedWithExtra = withExtra.length > 0
        ? withExtra.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedWithoutExtra = withoutExtra.length > 0
        ? withoutExtra.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedTargetCells = targetCells.length > 0
        ? targetCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('arType1IdentifyPattern', { arCells: formattedARCells, basePair: basePair }), highlight: '' },
        { step: 2, description: t('arType1IdentifyExtra', { cellsWithExtra: formattedWithExtra }), highlight: position },
        { step: 3, description: t('arType1IdentifyNoExtra', { cellsWithoutExtra: formattedWithoutExtra }), highlight: position },
        { step: 4, description: t('arType1Eliminate', { targetCells: formattedTargetCells, totalCount: totalCount }), highlight: position }
      );
    } else if (technique.type.includes('uniqueness_avoidable_rectangle_1')) {
      // 避免矩形类型1解题步骤
      const arCells = technique.cells && Array.isArray(technique.cells) ? technique.cells : [];
      const basePair = technique.basePair && Array.isArray(technique.basePair) ? technique.basePair : [];
      const withExtra = technique.withExtra && Array.isArray(technique.withExtra) ? technique.withExtra : [];
      const withoutExtra = technique.withoutExtra && Array.isArray(technique.withoutExtra) ? technique.withoutExtra : [];
      const targetCells = technique.targetCells && Array.isArray(technique.targetCells) ? technique.targetCells : [];
      const totalCount = technique.totalCount || 0;
      
      // 格式化单元格位置显示
      const formattedARCells = arCells.length > 0
        ? arCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedBasePair = basePair.length > 0
        ? basePair.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedWithExtra = withExtra.length > 0
        ? withExtra.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedWithoutExtra = withoutExtra.length > 0
        ? withoutExtra.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedTargetCells = targetCells.length > 0
        ? targetCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('arType1IdentifyPattern', { arCells: formattedARCells, basePair: basePair }), highlight: '' },
        { step: 2, description: t('arType1IdentifyExtra', { cellsWithExtra: formattedWithExtra }), highlight: position },
        { step: 3, description: t('arType1IdentifyNoExtra', { cellsWithoutExtra: formattedWithoutExtra }), highlight: position },
        { step: 4, description: t('arType1Eliminate', { targetCells: formattedTargetCells, totalCount: totalCount }), highlight: position }
      );
    } else if (technique.type.includes('uniqueness_bug_plus_1')) {
      // 唯一矩形+1解题步骤
      const arCells = technique.cells && Array.isArray(technique.cells) ? technique.cells : [];
      const basePair = technique.basePair && Array.isArray(technique.basePair) ? technique.basePair : [];
      const withExtra = technique.withExtra && Array.isArray(technique.withExtra) ? technique.withExtra : [];
      const withoutExtra = technique.withoutExtra && Array.isArray(technique.withoutExtra) ? technique.withoutExtra : [];
      const bugPlus1TargetCells = technique.targetCells && Array.isArray(technique.targetCells) ? technique.targetCells : [];
      const totalCount = technique.totalCount || 0;
      
      // 格式化单元格位置显示
      const formattedARCells = arCells.length > 0
        ? arCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedBasePair = basePair.length > 0
        ? basePair.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedWithExtra = withExtra.length > 0
        ? withExtra.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedWithoutExtra = withoutExtra.length > 0
        ? withoutExtra.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      const formattedBugPlus1TargetCells = bugPlus1TargetCells.length > 0
        ? bugPlus1TargetCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('arType1IdentifyPattern', { arCells: formattedARCells, basePair: basePair }), highlight: '' },
        { step: 2, description: t('arType1IdentifyExtra', { cellsWithExtra: formattedWithExtra }), highlight: position },
        { step: 3, description: t('arType1IdentifyNoExtra', { cellsWithoutExtra: formattedWithoutExtra }), highlight: position },
        { step: 4, description: t('arType1Eliminate', { targetCells: formattedBugPlus1TargetCells, totalCount: totalCount }), highlight: position }
      );
      let regionNum = 0;
      if (hasSingleCell) {
        regionNum = technique.type.includes('Row') ? row + 1 : 
                    (technique.type.includes('Col') ? col + 1 : 
                    Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
      } else if (technique.row !== undefined && regionType === t('row')) {
        // 对于行区域，从technique对象获取行号
        regionNum = technique.row + 1;
      } else if (technique.col !== undefined && regionType === t('col')) {
        // 对于列区域，从technique对象获取列号
        regionNum = technique.col + 1;
      } else if (technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 如果有cells数组，根据区域类型获取正确的区域号
        const firstCell = technique.cells[0];
        if (Array.isArray(firstCell)) {
          // 数组格式 [row, col]
          if (regionType === t('col') && typeof firstCell[1] === 'number') {
            // 列区域：获取列号
            regionNum = firstCell[1] + 1;
          } else if (regionType === t('box') && typeof firstCell[0] === 'number' && typeof firstCell[1] === 'number') {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell[0] / 3) * 3 + Math.floor(firstCell[1] / 3) + 1;
          } else if (typeof firstCell[0] === 'number') {
            // 行区域：获取行号
            regionNum = firstCell[0] + 1;
          }
        } else if (firstCell) {
          // 对象格式 {row, col}
          if (regionType === t('col') && firstCell.col !== undefined) {
            // 列区域：获取列号
            regionNum = firstCell.col + 1;
          } else if (regionType === t('box') && firstCell.row !== undefined && firstCell.col !== undefined) {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell.row / 3) * 3 + Math.floor(firstCell.col / 3) + 1;
          } else if (firstCell.row !== undefined) {
            // 行区域：获取行号
            regionNum = firstCell.row + 1;
          }
        }
      }
      
      const tripleNumbers = Array.isArray(technique.values) ? technique.values.join(',') : '三链数';
      
      // 格式化三链数单元格位置显示
      const formattedCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => {
            // 处理两种格式：对象格式 {row,col} 或数组格式 [row,col]
            if (Array.isArray(cell)) {
              // 数组格式 [row, col]
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              // 对象格式 {row, col}
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : position;
      
      // 手动计算目标单元格：区域内除了三链数单元格之外的所有单元格，并且排除已填入数字的单元格
      const targetCells = [];
      
      // 根据区域类型确定目标单元格
      if (regionType === t('row') && regionNum > 0) {
        // 行区域：同一行中的其他单元格
        for (let col = 0; col < 9; col++) {
          // 检查是否是三链数中的单元格
          const isInTriple = technique.cells.some(cell => 
            (Array.isArray(cell) && cell[0] === regionNum - 1 && cell[1] === col) ||
            (cell.row !== undefined && cell.row === regionNum - 1 && cell.col === col)
          );
          // 检查单元格是否已填入数字
          const hasValue = currentBoard && currentBoard[regionNum - 1] && currentBoard[regionNum - 1][col] > 0;
          if (!isInTriple && !hasValue) {
            targetCells.push([regionNum - 1, col]);
          }
        }
      } else if (regionType === t('col') && regionNum > 0) {
        // 列区域：同一列中的其他单元格
        for (let row = 0; row < 9; row++) {
          // 检查是否是三链数中的单元格
          const isInTriple = technique.cells.some(cell => 
            (Array.isArray(cell) && cell[0] === row && cell[1] === regionNum - 1) ||
            (cell.row !== undefined && cell.row === row && cell.col === regionNum - 1)
          );
          // 检查单元格是否已填入数字
          const hasValue = currentBoard && currentBoard[row] && currentBoard[row][regionNum - 1] > 0;
          if (!isInTriple && !hasValue) {
            targetCells.push([row, regionNum - 1]);
          }
        }
      } else if (regionType === t('box') && regionNum > 0) {
        // 宫区域：同一宫中的其他单元格
        const boxRow = Math.floor((regionNum - 1) / 3) * 3;
        const boxCol = ((regionNum - 1) % 3) * 3;
        
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            const row = boxRow + r;
            const col = boxCol + c;
            
            // 检查是否是三链数中的单元格
            const isInTriple = technique.cells.some(cell => 
              (Array.isArray(cell) && cell[0] === row && cell[1] === col) ||
              (cell.row !== undefined && cell.row === row && cell.col === col)
            );
            // 检查单元格是否已填入数字
            const hasValue = currentBoard && currentBoard[row] && currentBoard[row][col] > 0;
            if (!isInTriple && !hasValue) {
              targetCells.push([row, col]);
            }
          }
        }
      }
      
      // 格式化目标单元格位置显示
      const formattedTripleTargetCells = tripleTargetCells.length > 0
        ? tripleTargetCells.map(cell => {
            if (Array.isArray(cell)) {
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : t('relatedCells');
      
      steps.push(
        { step: 1, description: t('findTripleInRegion', { regionType: regionType, regionNum: regionNum }), highlight: '' },
        { step: 2, description: t('foundNakedTriple', { numbers: tripleNumbers, cells: formattedCells }), highlight: position },
        { step: 3, description: t('removeCandidatesFromTargets', { numbers: tripleNumbers, targets: formattedTripleTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('hiddenTriple')) {
      // 隐性三链数法解题步骤
      const regionType = technique.type.includes('Row') ? t('row') : 
                         (technique.type.includes('Col') ? t('col') : t('box'));
      
      let regionNum = 0;
      if (hasSingleCell) {
        regionNum = technique.type.includes('Row') ? row + 1 : 
                    (technique.type.includes('Col') ? col + 1 : 
                    Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
      } else if (technique.row !== undefined && regionType === t('row')) {
        // 对于行区域，从technique对象获取行号
        regionNum = technique.row + 1;
      } else if (technique.col !== undefined && regionType === t('col')) {
        // 对于列区域，从technique对象获取列号
        regionNum = technique.col + 1;
      } else if (technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
        // 如果有cells数组，根据区域类型获取正确的区域号
        const firstCell = technique.cells[0];
        if (Array.isArray(firstCell)) {
          // 数组格式 [row, col]
          if (regionType === t('col') && typeof firstCell[1] === 'number') {
            // 列区域：获取列号
            regionNum = firstCell[1] + 1;
          } else if (regionType === t('box') && typeof firstCell[0] === 'number' && typeof firstCell[1] === 'number') {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell[0] / 3) * 3 + Math.floor(firstCell[1] / 3) + 1;
          } else if (typeof firstCell[0] === 'number') {
            // 行区域：获取行号
            regionNum = firstCell[0] + 1;
          }
        } else if (firstCell) {
          // 对象格式 {row, col}
          if (regionType === t('col') && firstCell.col !== undefined) {
            // 列区域：获取列号
            regionNum = firstCell.col + 1;
          } else if (regionType === t('box') && firstCell.row !== undefined && firstCell.col !== undefined) {
            // 宫区域：根据单元格位置计算宫号
            regionNum = Math.floor(firstCell.row / 3) * 3 + Math.floor(firstCell.col / 3) + 1;
          } else if (firstCell.row !== undefined) {
            // 行区域：获取行号
            regionNum = firstCell.row + 1;
          }
        }
      }
      
      const tripleNumbers = Array.isArray(technique.values) ? technique.values.join(',') : '三链数';
      
      // 格式化三链数单元格位置显示
      const formattedCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => {
            // 处理两种格式：对象格式 {row,col} 或数组格式 [row,col]
            if (Array.isArray(cell)) {
              // 数组格式 [row, col]
              const rowNum = typeof cell[0] === 'number' ? cell[0] + 1 : '?';
              const colNum = typeof cell[1] === 'number' ? cell[1] + 1 : '?';
              return `(${rowNum},${colNum})`;
            } else {
              // 对象格式 {row, col}
              const rowNum = cell.row !== undefined ? cell.row + 1 : '?';
              const colNum = cell.col !== undefined ? cell.col + 1 : '?';
              return `(${rowNum},${colNum})`;
            }
          }).join(' ')
        : position;
      
      steps.push(
        { step: 1, description: t('findHiddenTripleInRegion', { regionType: regionType, regionNum: regionNum }), highlight: '' },
        { step: 2, description: t('foundNumbersOnlyInCells', { numbers: tripleNumbers, cells: formattedCells }), highlight: position },
        { step: 3, description: t('removeOtherCandidates', { cells: formattedCells, numbers: tripleNumbers }), highlight: position }
      );
    } else if (technique.type.includes('pointingPairs')) {
      // 指向对法解题步骤
      const regionType = technique.type.includes('Row') ? t('row') : t('col');
      
      // 获取宫号和行/列号
      const boxNum = (technique.boxRow * 3 + technique.boxCol + 1);
      const lineNum = (regionType === t('row') ? technique.row : technique.col) + 1;
      
      // 格式化源单元格位置显示
      const formattedSourceCells = technique.sourceCells && Array.isArray(technique.sourceCells) 
        ? technique.sourceCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells) 
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('findPointingPairsInBox', { boxNum: boxNum, number: technique.number, lineType: regionType, lineNum: lineNum }), highlight: '' },
        { step: 2, description: t('removePointingPairsFromTargets', { number: technique.number, targets: formattedTargetCells, lineType: regionType, lineNum: lineNum }), highlight: position }
      );
    } else if (technique.type.includes('boxLineReduction')) {
      // 宫行列排除法解题步骤
      const regionType = technique.type.includes('Row') ? t('row') : t('col');
      
      // 获取宫号和行/列号
      const boxNum = (technique.boxRow * 3 + technique.boxCol + 1);
      const lineNum = (regionType === t('row') ? technique.row : technique.col) + 1;
      
      // 格式化源单元格位置显示
      const formattedSourceCells = technique.sourceCells && Array.isArray(technique.sourceCells) 
        ? technique.sourceCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells) 
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('findBoxLineReductionInLine', { lineType: regionType, lineNum: lineNum, number: technique.number, boxNum: boxNum }), highlight: '' },
        { step: 2, description: t('removeBoxLineReductionFromTargets', { number: technique.number, targets: formattedTargetCells, boxNum: boxNum }), highlight: position }
      );
    } else if (technique.type.includes('xWing') || technique.type.includes('x-wing')) {
      // X-Wing技巧解题步骤
      const wingType = technique.type.includes('Row') ? t('row') : t('col');
      
      // 格式化源单元格位置显示
      const formattedSourceCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells) 
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('findXWingInWings', { wingType: wingType, number: technique.number }), highlight: '' },
        { step: 2, description: t('xWingFormRectangle', { sourceCells: formattedSourceCells, number: technique.number }), highlight: position },
        { step: 3, description: t('removeXWingFromTargets', { number: technique.number, targets: formattedTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('yWing') || technique.type.includes('y-wing')) {
      // Y-Wing技巧解题步骤
      
      // 格式化源单元格位置显示
      const anchorPos = `(${technique.anchorCell[0] + 1},${technique.anchorCell[1] + 1})`;
      const xzPos = `(${technique.xzCell[0] + 1},${technique.xzCell[1] + 1})`;
      const yzPos = `(${technique.yzCell[0] + 1},${technique.yzCell[1] + 1})`;
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells) 
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('findYWingStructure', { anchor: anchorPos, xz: xzPos, yz: yzPos }), highlight: '' },
        { step: 2, description: t('yWingShareCandidates', { anchor: anchorPos, xz: xzPos, yz: yzPos, x: technique.x, y: technique.y, z: technique.z }), highlight: position },
        { step: 3, description: t('removeYWingFromTargets', { number: technique.z, targets: formattedTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('swordfish')) {
      // Swordfish技巧解题步骤
      const wingType = technique.type.includes('Row') ? t('row') : t('col');
      
      // 格式化源单元格位置显示
      const formattedSourceCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells) 
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('findSwordfishInWings', { wingType: wingType, number: technique.number }), highlight: '' },
        { step: 2, description: t('swordfishFormStructure', { sourceCells: formattedSourceCells, number: technique.number }), highlight: position },
        { step: 3, description: t('removeSwordfishFromTargets', { number: technique.number, targets: formattedTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('xyzWing') || technique.type.includes('xyz-wing')) {
      // XYZ-Wing技巧解题步骤
      
      // 格式化源单元格位置显示
      const pivotPos = `(${technique.pivotCell[0] + 1},${technique.pivotCell[1] + 1})`;
      const xzPos = `(${technique.xzCell[0] + 1},${technique.xzCell[1] + 1})`;
      const yzPos = `(${technique.yzCell[0] + 1},${technique.yzCell[1] + 1})`;
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells) 
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('findXYZWingStructure', { anchor: pivotPos, xz: xzPos, yz: yzPos }), highlight: '' },
        { step: 2, description: t('xyzWingShareCandidates', { anchor: pivotPos, xz: xzPos, yz: yzPos, x: technique.x, y: technique.y, z: technique.common }), highlight: position },
        { step: 3, description: t('removeXYZWingFromTargets', { number: technique.common, targets: formattedTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('jellyfish')) {
      // Jellyfish技巧解题步骤
      const wingType = technique.type.includes('Row') ? t('row') : t('col');
      
      // 格式化源单元格位置显示
      const formattedSourceCells = technique.cells && Array.isArray(technique.cells) 
        ? technique.cells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells) 
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      steps.push(
        { step: 1, description: t('findJellyfishInWings', { wingType: wingType, number: technique.number }), highlight: '' },
        { step: 2, description: t('jellyfishFormStructure', { sourceCells: formattedSourceCells, number: technique.number }), highlight: position },
        { step: 3, description: t('removeJellyfishFromTargets', { number: technique.number, targets: formattedTargetCells }), highlight: position }
      );
    } else if (technique.type.includes('alsXZ') || technique.type.includes('ALS-XZ')) {
      // ALS-XZ技巧解题步骤
      
      // 格式化ALS1单元格位置显示
      const formattedALS1Cells = technique.als1 && technique.als1.cells && Array.isArray(technique.als1.cells)
        ? technique.als1.cells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化ALS2单元格位置显示
      const formattedALS2Cells = technique.als2 && technique.als2.cells && Array.isArray(technique.als2.cells)
        ? technique.als2.cells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化目标单元格位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells)
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 获取ALS的候选数
      const als1Candidates = technique.als1 && technique.als1.candidates
        ? technique.als1.candidates.join(',')
        : '';
      const als2Candidates = technique.als2 && technique.als2.candidates
        ? technique.als2.candidates.join(',')
        : '';
      
      steps.push(
        { step: 1, description: t('alsXZIdentifyRegions', { 
          als1Cells: formattedALS1Cells,
          als1Candidates: als1Candidates,
          als2Cells: formattedALS2Cells,
          als2Candidates: als2Candidates,
          x: technique.x,
          z: technique.z
        }), highlight: '' },
        { step: 2, description: t('alsXZIdentifyKeyNumbers', { x: technique.x, z: technique.z }), highlight: position },
        { step: 3, description: t('alsXZAnalyzeDistribution', { x: technique.x, z: technique.z }), highlight: position },
        { step: 4, description: t('alsXZDetermineScope', { z: technique.z, targetCells: formattedTargetCells }), highlight: position },
        { step: 5, description: t('alsXZEliminateCandidates', { x: technique.x, z: technique.z, targetCells: formattedTargetCells }), highlight: position },
        { step: 6, description: t('alsXZVerifyResult', { targetCells: formattedTargetCells, z: technique.z }), highlight: position }
      );
    } else if (technique.type === 'sdc' || technique.type.includes('Sue De Coq')) {
      // SDC技巧解题步骤
      
      // 格式化SDC单元格位置显示
      const formattedSDCCells = technique.sdcCells && Array.isArray(technique.sdcCells)
        ? technique.sdcCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化组A单元格位置显示
      const formattedGroupACells = technique.groupA && technique.groupA.cells && Array.isArray(technique.groupA.cells)
        ? technique.groupA.cells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化组B单元格位置显示
      const formattedGroupBCells = technique.groupB && technique.groupB.cells && Array.isArray(technique.groupB.cells)
        ? technique.groupB.cells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 获取候选数
      const sdcCandidates = technique.sdcCandidates ? technique.sdcCandidates.join(',') : '';
      const groupACandidates = technique.groupA && technique.groupA.candidates ? technique.groupA.candidates.join(',') : '';
      const groupBCandidates = technique.groupB && technique.groupB.candidates ? technique.groupB.candidates.join(',') : '';
      const allCandidates = technique.sdcCandidates ? `{${technique.sdcCandidates.join(',')}}` : '';
      
      // 获取行/列信息
      const lineType = technique.lineType === 'row' ? t('row') : t('col');
      const lineIndex = (technique.lineIndex !== undefined ? technique.lineIndex + 1 : '');
      const boxIndex = (technique.boxIndex !== undefined ? technique.boxIndex + 1 : '');
      
      // 格式化目标单元格 - 区分行/列和宫的目标单元格
      const lineTargets = [];
      const boxTargets = [];
      
      if (technique.removableCandidates && Array.isArray(technique.removableCandidates)) {
        technique.removableCandidates.forEach(rc => {
          if (rc.reason === 'boxOnly') {
            lineTargets.push(`(${rc.row + 1},${rc.col + 1})`);
          } else if (rc.reason === 'lineOnly') {
            boxTargets.push(`(${rc.row + 1},${rc.col + 1})`);
          }
        });
      }
      
      const formattedLineTargets = lineTargets.length > 0 ? lineTargets.join(' ') : t('multipleCells');
      const formattedBoxTargets = boxTargets.length > 0 ? boxTargets.join(' ') : t('multipleCells');
      const totalCount = (technique.removableCandidates && technique.removableCandidates.length) || 0;
      
      steps.push(
        { step: 1, description: t('sdcIdentifySDCCells', {
          sdcCells: formattedSDCCells,
          sdcCandidates: sdcCandidates
        }), highlight: '' },
        { step: 2, description: t('sdcIdentifyGroups', {
          lineType: lineType,
          lineIndex: lineIndex,
          groupACells: formattedGroupACells,
          groupACandidates: groupACandidates,
          boxIndex: boxIndex,
          groupBCells: formattedGroupBCells,
          groupBCandidates: groupBCandidates
        }), highlight: position },
        { step: 3, description: t('sdcAnalyzeIntersection', {
          groupACandidates: groupACandidates,
          lineType: lineType,
          lineIndex: lineIndex,
          groupBCandidates: groupBCandidates,
          boxIndex: boxIndex
        }), highlight: position },
        { step: 4, description: t('sdcVerifySeparation', {
          allCandidates: allCandidates
        }), highlight: position }
      );
      
      // 仅在有可删除的候选数时，添加删除相关的步骤
      let stepNumber = 5;
      if (lineTargets.length > 0) {
        steps.push(
          { step: stepNumber++, description: t('sdcEliminateFromLine', {
            boxCandidates: groupBCandidates,
            targetCells: formattedLineTargets,
            lineType: lineType,
            lineIndex: lineIndex
          }), highlight: position }
        );
      }
      
      if (boxTargets.length > 0) {
        steps.push(
          { step: stepNumber++, description: t('sdcEliminateFromBox', {
            lineCandidates: groupACandidates,
            targetCells: formattedBoxTargets,
            boxIndex: boxIndex
          }), highlight: position }
        );
      }
      
      // 最后添加验证结果步骤
      steps.push(
        { step: stepNumber, description: t('sdcVerifyResult', {
          count: totalCount
        }), highlight: position }
      );
    } else if (technique.type === 'uniqueness' || technique.type.includes('uniqueness_') || technique.type.includes('Avoidable Rectangle')) {
    // 唯一性技巧解题步骤
      
      // 格式化矩形单元格位置显示
      const formattedARCells = technique.arCells && Array.isArray(technique.arCells)
        ? technique.arCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化基础数寸
      const basePair = technique.basePair ? `{${technique.basePair.join(',')}}}` : '{}';
      
      // 格式化含有额外候选数的单元格
      const formattedWithExtra = technique.cellsWithExtra && Array.isArray(technique.cellsWithExtra)
        ? technique.cellsWithExtra.map(c => `(${c.row + 1},${c.col + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化没有额外候选数的单元格
      const formattedWithoutExtra = technique.cellsWithoutExtra && Array.isArray(technique.cellsWithoutExtra)
        ? technique.cellsWithoutExtra.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      // 格式化欅臺候选数位置显示
      const formattedTargetCells = technique.targetCells && Array.isArray(technique.targetCells)
        ? technique.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(' ')
        : t('multipleCells');
      
      const totalCount = (technique.removableCandidates && technique.removableCandidates.length) || 0;
      
      steps.push(
        { step: 1, description: `可避免矩形 Type 1: 矩形单元格=${formattedARCells}，基础数寸=${basePair}`, highlight: '' },
        { step: 2, description: `单元格${formattedWithExtra}含有额外候选数`, highlight: position },
        { step: 3, description: `单元格${formattedWithoutExtra}仅含有基础数寸`, highlight: position },
        { step: 4, description: `从${formattedTargetCells}中删除${totalCount}个候选数`, highlight: position }
      );
    } else {
        // 通用解题步骤，确保至少有内容显示
        steps.push(
          { step: 1, description: t('applyTechnique', { technique: t(technique.description) || technique.type }), highlight: '' },
        { step: 2, description: t('relatedPosition', { position: position }), highlight: position },
        { step: 3, description: value ? t('relatedNumber', { number: value }) : t('analysisCompleted'), highlight: position }
      );
    }
    
    setTechniqueSteps(steps);
    setCurrentPage(0); // 重置分页到第一页
    
    // 处理页面切换时更新高亮
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    
    // 添加变量提取逻辑，与handleTechniqueSelect保持一致
    const hasSingleCell = selectedTechnique && typeof selectedTechnique.row === 'number' && typeof selectedTechnique.col === 'number';
    const row = hasSingleCell ? selectedTechnique.row : 0;
    const col = hasSingleCell ? selectedTechnique.col : 0;
    
    // 从解题步骤中提取目标数字 - 与handleTechniqueSelect保持一致
    let value = '';
    if (selectedTechnique) {
      // 优先使用value属性（与handleTechniqueSelect保持一致）
      value = selectedTechnique.value || '';
      console.log('1. 从selectedTechnique.value提取:', value);
      
      // 如果没有value属性，尝试从number属性获取
      if (!value && selectedTechnique.number !== undefined) {
        value = selectedTechnique.number;
        console.log('2. 从selectedTechnique.number提取:', value);
      }
      
      // 如果还是没有，尝试从解题步骤中提取
      if (!value && techniqueSteps.length > 0) {
        // 从第二页的解题步骤中提取目标数字（因为第二页应该显示数字）
        const step2 = techniqueSteps.find(step => step.step === 2);
        if (step2 && step2.description) {
          // 从描述中提取数字，例如："数字5只能出现在位置(1,1)"
          const numberMatch = step2.description.match(/\d+/);
          if (numberMatch) {
            value = numberMatch[0];
            console.log('3. 从step2.description提取:', value, '描述:', step2.description);
          }
        }
        
        // 如果第二页没有找到，尝试从第三页提取
        if (!value) {
          const step3 = techniqueSteps.find(step => step.step === 3);
          if (step3 && step3.description) {
            const numberMatch = step3.description.match(/\d+/);
            if (numberMatch) {
              value = numberMatch[0];
              console.log('4. 从step3.description提取:', value, '描述:', step3.description);
            }
          }
        }
      }
      
      // 如果所有方法都失败，尝试从selectedTechnique的其他属性中提取
      if (!value && selectedTechnique.result && selectedTechnique.result.value) {
        value = selectedTechnique.result.value;
        console.log('5. 从selectedTechnique.result.value提取:', value);
      }
      
      if (!value && selectedTechnique.cells && Array.isArray(selectedTechnique.cells) && selectedTechnique.cells.length > 0) {
        // 从cells数组中提取第一个单元格的value
        const firstCell = selectedTechnique.cells[0];
        if (firstCell && firstCell.value) {
          value = firstCell.value;
          console.log('6. 从selectedTechnique.cells[0].value提取:', value);
        }
      }
      
      console.log('最终提取的value:', value);
    }
    
    // 调试信息：检查selectedTechnique对象结构
    console.log('=== handlePageChange 调试信息 ===');
    console.log('newPage:', newPage);
    console.log('selectedTechnique:', selectedTechnique);
    console.log('selectedTechnique.type:', selectedTechnique?.type);
    console.log('selectedTechnique.row:', selectedTechnique?.row, '(0-8对应第1-9行)');
    console.log('selectedTechnique.col:', selectedTechnique?.col, '(0-8对应第1-9列)');
    console.log('selectedTechnique.value:', selectedTechnique?.value);
    console.log('selectedTechnique.number:', selectedTechnique?.number);
    console.log('hasSingleCell:', hasSingleCell);
    console.log('row:', row, 'col:', col, '(计算后的坐标)');
    console.log('extracted value:', value);
    console.log('techniqueSteps length:', techniqueSteps.length);
    console.log('techniqueSteps:', techniqueSteps);
    
    // 详细检查value提取过程
    console.log('=== value提取过程调试 ===');
    if (selectedTechnique) {
      console.log('1. selectedTechnique.value:', selectedTechnique.value);
      console.log('2. selectedTechnique.number:', selectedTechnique.number);
      
      if (techniqueSteps.length > 0) {
        const step2 = techniqueSteps.find(step => step.step === 2);
        const step3 = techniqueSteps.find(step => step.step === 3);
        console.log('3. step2 description:', step2?.description);
        console.log('4. step3 description:', step3?.description);
        
        // 检查所有步骤
        console.log('5. 所有techniqueSteps:');
        techniqueSteps.forEach((step, index) => {
          console.log(`  步骤${index}:`, step);
        });
      }
      
      console.log('6. selectedTechnique.result:', selectedTechnique.result);
      console.log('7. selectedTechnique.cells:', selectedTechnique.cells);
      
      // 检查selectedTechnique的所有属性
      console.log('8. selectedTechnique所有属性:');
      Object.keys(selectedTechnique).forEach(key => {
        console.log(`  ${key}:`, selectedTechnique[key]);
      });
    }
    console.log('=== value提取过程调试结束 ===');
    
    // 检查是否为唯一性技巧
    const isUniquenessTechnique = selectedTechnique && (selectedTechnique.type === 'uniqueness' || selectedTechnique.type.includes('uniqueness_') || selectedTechnique.type.includes('Avoidable Rectangle'));
    
    // 检查技巧类型是否匹配
    const isTargetTechnique = selectedTechnique && hasSingleCell && 
        ['nakedSingle', 'hiddenSingleRow', 'hiddenSingleCol', 'hiddenSingleBox', 'notesSingle'].includes(selectedTechnique.type) &&
        !isUniquenessTechnique;
    console.log('isTargetTechnique:', isTargetTechnique);
    console.log('isUniquenessTechnique:', isUniquenessTechnique);
    console.log('setHighlightedCells exists:', !!setHighlightedCells);
    
    // 检查坐标是否在有效范围内
    const isValidRow = row >= 0 && row < 9;
    const isValidCol = col >= 0 && col < 9;
    console.log('坐标有效性 - row:', isValidRow, 'col:', isValidCol);
    console.log('=== 调试信息结束 ===');
    
    // 对于候选数唯一法、隐性唯一数法和唯一数法，重新设计技巧指示功能
    if (setHighlightedCells && selectedTechnique && hasSingleCell && 
        ['nakedSingle', 'hiddenSingleRow', 'hiddenSingleCol', 'hiddenSingleBox', 'notesSingle'].includes(selectedTechnique.type) &&
        !isUniquenessTechnique) {
      
      const cellsToHighlight = [];
      
      // 只在第二页（点击"下一步"后）显示技巧指示
      if (newPage === 1) {
        // 添加目标单元格（显示数字，使用新的数据结构）
        cellsToHighlight.push({
          row: row,
          col: col,
          techniqueIndicator: true,
          targetNumber: value, // 使用targetNumber表示要填入的数字
          isTarget: true,
          techniqueType: selectedTechnique.type
        });
        
        // 根据技巧类型添加区域高亮单元格
        if (selectedTechnique.type === 'hiddenSingleRow') {
          // 行隐性唯一数法：高亮目标单元格的行
          for (let c = 0; c < 9; c++) {
            if (c !== col) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true // 标记为区域高亮
              });
            }
          }
        } else if (selectedTechnique.type === 'hiddenSingleCol') {
          // 列隐性唯一数法：高亮目标单元格的列
          for (let r = 0; r < 9; r++) {
            if (r !== row) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                regionHighlight: true
              });
            }
          }
        } else if (selectedTechnique.type === 'hiddenSingleBox') {
          // 宫隐性唯一数法：高亮目标单元格的宫
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              if (r !== row || c !== col) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  regionHighlight: true
                });
              }
            }
          }
        } else if (selectedTechnique.type === 'nakedSingle') {
          // 唯一余数：高亮所有区域（行、列、宫）
          // 使用Set来去重
          const addedCells = new Set();
          addedCells.add(`${row}-${col}`); // 目标单元格
          
          // 添加整行
          for (let c = 0; c < 9; c++) {
            const key = `${row}-${c}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整列
          for (let r = 0; r < 9; r++) {
            const key = `${r}-${col}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整宫
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              const key = `${r}-${c}`;
              if (!addedCells.has(key)) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  regionHighlight: true
                });
                addedCells.add(key);
              }
            }
          }
        } else if (selectedTechnique.type === 'notesSingle') {
          // 候选数唯一法：高亮所有区域（行、列、宫）
          // 使用Set来去重
          const addedCells = new Set();
          addedCells.add(`${row}-${col}`); // 目标单元格
          
          // 添加整行
          for (let c = 0; c < 9; c++) {
            const key = `${row}-${c}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整列
          for (let r = 0; r < 9; r++) {
            const key = `${r}-${col}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整宫
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              const key = `${r}-${c}`;
              if (!addedCells.has(key)) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  regionHighlight: true
                });
                addedCells.add(key);
              }
            }
          }
        }
      }
      
      setHighlightedCells(cellsToHighlight);
    }
  };
  
  // 重新设计的技巧指示高亮系统 - 与techniqueIndicator.js保持一致的高亮逻辑
  if (setHighlightedCells) {
    // 统一的高亮策略处理函数 - 基于techniqueIndicator.js的高亮类型设计
    const handleTechniqueHighlighting = (technique) => {
      const cellsToHighlight = [];
      
      // 确保必要的字段存在
      const { cells = [], targetCells = [], values = [], removableCandidates = [], result = {} } = technique;
      const { operation } = result;
      
      // 检查是否为基础技巧
      const isBasicTechnique = technique.type && (
        technique.type === 'nakedSingle' ||
        technique.type === 'notesSingle' ||
        technique.type.includes('hiddenSingle')
      );
      
      // 基础技巧使用特殊的高亮逻辑（与 handlePageChange 中的新逻辑一致）
      if (isBasicTechnique) {
        const hasSingleCell = typeof technique.row === 'number' && typeof technique.col === 'number';
        if (!hasSingleCell) {
          return cellsToHighlight; // 如果没有单元格信息，返回空数组
        }
        
        const row = technique.row;
        const col = technique.col;
        let value = technique.value || technique.number || '';
        
        // 添加目标单元格
        cellsToHighlight.push({
          row: row,
          col: col,
          techniqueIndicator: true,
          targetNumber: value,
          isTarget: true,
          techniqueType: technique.type
        });
        
        // 根据技巧类型添加区域高亮单元格
        if (technique.type === 'hiddenSingleRow') {
          for (let c = 0; c < 9; c++) {
            if (c !== col) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true
              });
            }
          }
        } else if (technique.type === 'hiddenSingleCol') {
          for (let r = 0; r < 9; r++) {
            if (r !== row) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                regionHighlight: true
              });
            }
          }
        } else if (technique.type === 'hiddenSingleBox') {
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              if (r !== row || c !== col) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  regionHighlight: true
                });
              }
            }
          }
        } else if (technique.type === 'nakedSingle') {
          // 唯一余数：高亮所有区域（行、列、宫）
          // 使用Set来去重
          const addedCells = new Set();
          addedCells.add(`${row}-${col}`); // 目标单元格
          
          // 添加整行
          for (let c = 0; c < 9; c++) {
            const key = `${row}-${c}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整列
          for (let r = 0; r < 9; r++) {
            const key = `${r}-${col}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整宫
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              const key = `${r}-${c}`;
              if (!addedCells.has(key)) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  regionHighlight: true
                });
                addedCells.add(key);
              }
            }
          }
        } else if (technique.type === 'notesSingle') {
          // 候选数唯一法：高亮所有区域（行、列、宫）
          // 使用Set来去重
          const addedCells = new Set();
          addedCells.add(`${row}-${col}`); // 目标单元格
          
          // 添加整行
          for (let c = 0; c < 9; c++) {
            const key = `${row}-${c}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整列
          for (let r = 0; r < 9; r++) {
            const key = `${r}-${col}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
          
          // 添加整宫
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              const key = `${r}-${c}`;
              if (!addedCells.has(key)) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  regionHighlight: true
                });
                addedCells.add(key);
              }
            }
          }
        }
        
        return cellsToHighlight; // 返回基础技巧的高亮数据
      }
      
      // 检查是否为显性数对技巧
      const isNakedPairTechnique = technique.type && 
                           (technique.type.includes('nakedPair') || 
                            technique.type.includes('naked_pairs') || 
                            technique.type === 'nakedPairs');
      
      // 检查是否为ALS-XZ技巧
      const isALSXZTechnique = technique.type && technique.type.includes('alsXZ');
      
      // 检查是否为SDC技巧
      const isSDCTechnique = technique.type && (technique.type === 'sdc' || technique.type.includes('Sue De Coq'));
      
      // 检查是否为唯一性技巧
      const isUniquenessTechnique = technique.type && (technique.type === 'uniqueness' || technique.type.includes('uniqueness_') || technique.type.includes('Avoidable Rectangle'));
      
      // SDC技巧使用类似ALS-XZ的方式，通过highlightedCells传递数据给TechniqueOverlay进行React渲染
      if (isSDCTechnique) {
        // 确保pencilNotes存在
        const currentPencilNotes = pencilNotes || {};
        
        // 收集所有SDC相关单元格
        const sdcCellsInfo = new Map();
        
        // 处理SDC单元格（交叉单元格）
        if (technique.sdcCells && Array.isArray(technique.sdcCells)) {
          technique.sdcCells.forEach(([row, col]) => {
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            if (candidates.length > 0) {
              // 提取SDC候选数
              const sdcCandidates = technique.sdcCandidates || [];
              const cellSDCCandidates = candidates.filter(c => sdcCandidates.includes(c));
              
              if (!sdcCellsInfo.has(cellKey)) {
                sdcCellsInfo.set(cellKey, {
                  row,
                  col,
                  sdcCandidates: [],
                  groupACandidates: [],
                  groupBCandidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = sdcCellsInfo.get(cellKey);
              if (cellSDCCandidates.length > 0) {
                cellInfo.sdcCandidates.push(...cellSDCCandidates);
              }
            }
          });
        }
        
        // 处理组A单元格
        if (technique.groupA && technique.groupA.cells && Array.isArray(technique.groupA.cells)) {
          technique.groupA.cells.forEach(([row, col]) => {
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            if (candidates.length > 0) {
              const groupACandidates = technique.groupA.candidates || [];
              const cellGroupACandidates = candidates.filter(c => groupACandidates.includes(c));
              
              if (!sdcCellsInfo.has(cellKey)) {
                sdcCellsInfo.set(cellKey, {
                  row,
                  col,
                  sdcCandidates: [],
                  groupACandidates: [],
                  groupBCandidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = sdcCellsInfo.get(cellKey);
              if (cellGroupACandidates.length > 0) {
                cellInfo.groupACandidates.push(...cellGroupACandidates);
              }
            }
          });
        }
        
        // 处理组B单元格
        if (technique.groupB && technique.groupB.cells && Array.isArray(technique.groupB.cells)) {
          technique.groupB.cells.forEach(([row, col]) => {
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            if (candidates.length > 0) {
              const groupBCandidates = technique.groupB.candidates || [];
              const cellGroupBCandidates = candidates.filter(c => groupBCandidates.includes(c));
              
              if (!sdcCellsInfo.has(cellKey)) {
                sdcCellsInfo.set(cellKey, {
                  row,
                  col,
                  sdcCandidates: [],
                  groupACandidates: [],
                  groupBCandidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = sdcCellsInfo.get(cellKey);
              if (cellGroupBCandidates.length > 0) {
                cellInfo.groupBCandidates.push(...cellGroupBCandidates);
              }
            }
          });
        }
        
        // 处理可删除的目标候选数
        if (Array.isArray(technique.removableCandidates)) {
          technique.removableCandidates.forEach(candidate => {
            const { row, col, value } = candidate;
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            if (candidates.includes(value)) {
              if (!sdcCellsInfo.has(cellKey)) {
                sdcCellsInfo.set(cellKey, {
                  row,
                  col,
                  sdcCandidates: [],
                  groupACandidates: [],
                  groupBCandidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = sdcCellsInfo.get(cellKey);
              cellInfo.removableCandidates.push(value);
            }
          });
        }
        
        // 将所有单元格信息转换为高亮单元格
        sdcCellsInfo.forEach((cellInfo, cellKey) => {
          cellsToHighlight.push({
            row: cellInfo.row,
            col: cellInfo.col,
            techniqueIndicator: true,
            techniqueType: technique.type,
            highlightType: 'sdc',
            isTarget: false,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // SDC特定的候选数信息
            sdcCandidates: {
              sdcCandidates: cellInfo.sdcCandidates,
              groupACandidates: cellInfo.groupACandidates,
              groupBCandidates: cellInfo.groupBCandidates,
              removableCandidates: cellInfo.removableCandidates
            }
          });
        });
      } else if (isUniquenessTechnique) {
        // 对于唯一性技巧，实现专门的高亮处理，区分条件候选数和目标候选数
        
        // 确保pencilNotes存在
        const currentPencilNotes = pencilNotes || {};
        
        // 收集所有唯一性技巧相关的单元格信息
        const uniquenessCellsInfo = new Map();
        
        // 先收集所有可删除的候选数和目标单元格，以便后续排除
        const allRemovableCandidates = new Set();
        const targetCells = new Set();
        if (Array.isArray(technique.removableCandidates)) {
          technique.removableCandidates.forEach(candidate => {
            allRemovableCandidates.add(candidate.value);
            // 将目标单元格添加到集合中
            targetCells.add(`${candidate.row}-${candidate.col}`);
          });
        }
        
        // 处理矩形单元格及其候选数
        if (technique.arCells && Array.isArray(technique.arCells)) {
          technique.arCells.forEach(([row, col]) => {
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            // 只处理实际存在的候选数
            if (candidates.length > 0) {
              if (!uniquenessCellsInfo.has(cellKey)) {
                uniquenessCellsInfo.set(cellKey, {
                  row,
                  col,
                  baseCandidates: [],
                  extraCandidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = uniquenessCellsInfo.get(cellKey);
              
              // 只有非目标单元格才处理条件候选数（绿底黑字高亮）
              if (!targetCells.has(cellKey)) {
                // 分类候选数：基础数对候选数 vs 额外候选数，排除可删除的候选数
                const baseCandidates = candidates.filter(c => technique.basePair && technique.basePair.includes(c) && !allRemovableCandidates.has(c));
                const extraCandidates = candidates.filter(c => technique.basePair && !technique.basePair.includes(c) && !allRemovableCandidates.has(c));
                
                // 只添加实际存在的候选数
                if (baseCandidates.length > 0) {
                  cellInfo.baseCandidates.push(...baseCandidates);
                }
                if (extraCandidates.length > 0) {
                  cellInfo.extraCandidates.push(...extraCandidates);
                }
              }
            }
          });
        }
        
        // 处理含有额外候选数的单元格
        if (technique.cellsWithExtra && Array.isArray(technique.cellsWithExtra)) {
          technique.cellsWithExtra.forEach(cell => {
            const { row, col } = cell;
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            // 只处理实际存在的候选数
            if (candidates.length > 0) {
              if (!uniquenessCellsInfo.has(cellKey)) {
                uniquenessCellsInfo.set(cellKey, {
                  row,
                  col,
                  baseCandidates: [],
                  extraCandidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = uniquenessCellsInfo.get(cellKey);
              
              // 只有非目标单元格才处理条件候选数（绿底黑字高亮）
              if (!targetCells.has(cellKey)) {
                // 分类候选数：基础数对候选数 vs 额外候选数，排除可删除的候选数
                const baseCandidates = candidates.filter(c => technique.basePair && technique.basePair.includes(c) && !allRemovableCandidates.has(c));
                const extraCandidates = candidates.filter(c => technique.basePair && !technique.basePair.includes(c) && !allRemovableCandidates.has(c));
                
                // 只添加实际存在的候选数
                if (baseCandidates.length > 0) {
                  cellInfo.baseCandidates.push(...baseCandidates);
                }
                if (extraCandidates.length > 0) {
                  cellInfo.extraCandidates.push(...extraCandidates);
                }
              }
            }
          });
        }
        
        // 处理可删除的目标候选数
        if (Array.isArray(technique.removableCandidates)) {
          technique.removableCandidates.forEach(candidate => {
            const { row, col, value } = candidate;
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            // 只处理实际存在的候选数
            if (candidates.includes(value)) {
              if (!uniquenessCellsInfo.has(cellKey)) {
                uniquenessCellsInfo.set(cellKey, {
                  row,
                  col,
                  baseCandidates: [],
                  extraCandidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = uniquenessCellsInfo.get(cellKey);
              cellInfo.removableCandidates.push(value);
            }
          });
        }
        
        // 对于目标单元格，确保baseCandidates和extraCandidates为空，避免条件候选数高亮覆盖目标候选数
        if (Array.isArray(technique.removableCandidates)) {
          technique.removableCandidates.forEach(candidate => {
            const { row, col } = candidate;
            const cellKey = `${row}-${col}`;
            if (uniquenessCellsInfo.has(cellKey)) {
              const cellInfo = uniquenessCellsInfo.get(cellKey);
              // 清空baseCandidates，避免条件候选数高亮覆盖目标候选数
              cellInfo.baseCandidates = [];
              // 清空extraCandidates，避免额外候选数高亮覆盖目标候选数
              cellInfo.extraCandidates = [];
            }
          });
        }
        
        // 将所有单元格信息转换为高亮单元格
        uniquenessCellsInfo.forEach((cellInfo, cellKey) => {
          cellsToHighlight.push({
            row: cellInfo.row,
            col: cellInfo.col,
            techniqueIndicator: true,
            techniqueType: technique.type,
            highlightType: 'uniqueness',
            isTarget: false,
            backgroundColor: 'transparent', // 不高亮单元格背景
            borderColor: 'transparent',
            // 唯一性技巧特定的候选数信息
            uniquenessCandidates: {
              baseCandidates: cellInfo.baseCandidates,
              extraCandidates: cellInfo.extraCandidates,
              removableCandidates: cellInfo.removableCandidates
            }
          });
        });
      } else if (isALSXZTechnique) {
        // 对于ALS-XZ技巧，使用ALS-XZ指示器生成高亮信息，但不直接调用指示器的方法
        // 确保ALS-XZ技巧的高亮处理是独立的，不影响其他技巧
        // ALS-XZ技巧只高亮候选数，不高亮单元格背景
        
        // 确保pencilNotes存在
        const currentPencilNotes = pencilNotes || {};
        
        // 收集所有ALS单元格，用于候选数高亮
        const alsXZCellsInfo = new Map();
        
        // 处理ALS1中的单元格及其候选数
        if (technique.als1 && Array.isArray(technique.als1.cells)) {
          technique.als1.cells.forEach(([row, col]) => {
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            // 只处理实际存在的候选数
            if (candidates.length > 0) {
              // 分类候选数：X候选数 vs 其他候选数
              const xCandidates = candidates.filter(c => c === technique.x);
              const otherCandidates = candidates.filter(c => c !== technique.x);
              
              if (!alsXZCellsInfo.has(cellKey)) {
                alsXZCellsInfo.set(cellKey, {
                  row,
                  col,
                  xCandidates: [],
                  als1Candidates: [],
                  als2Candidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = alsXZCellsInfo.get(cellKey);
              // 只添加实际存在的候选数
              if (xCandidates.length > 0) {
                cellInfo.xCandidates.push(...xCandidates);
              }
              if (otherCandidates.length > 0) {
                cellInfo.als1Candidates.push(...otherCandidates);
              }
            }
          });
        }
        
        // 处理ALS2中的单元格及其候选数
        if (technique.als2 && Array.isArray(technique.als2.cells)) {
          technique.als2.cells.forEach(([row, col]) => {
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            // 只处理实际存在的候选数
            if (candidates.length > 0) {
              // 分类候选数：X候选数 vs 其他候选数
              const xCandidates = candidates.filter(c => c === technique.x);
              const otherCandidates = candidates.filter(c => c !== technique.x);
              
              if (!alsXZCellsInfo.has(cellKey)) {
                alsXZCellsInfo.set(cellKey, {
                  row,
                  col,
                  xCandidates: [],
                  als1Candidates: [],
                  als2Candidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = alsXZCellsInfo.get(cellKey);
              // 只添加实际存在的候选数
              if (xCandidates.length > 0) {
                cellInfo.xCandidates.push(...xCandidates);
              }
              if (otherCandidates.length > 0) {
                cellInfo.als2Candidates.push(...otherCandidates);
              }
            }
          });
        }
        
        // 处理可删除的目标候选数
        if (Array.isArray(technique.removableCandidates)) {
          technique.removableCandidates.forEach(candidate => {
            const { row, col, value } = candidate;
            const cellKey = `${row}-${col}`;
            const candidates = currentPencilNotes[cellKey] || [];
            
            // 只处理实际存在的候选数
            if (candidates.includes(value)) {
              if (!alsXZCellsInfo.has(cellKey)) {
                alsXZCellsInfo.set(cellKey, {
                  row,
                  col,
                  xCandidates: [],
                  als1Candidates: [],
                  als2Candidates: [],
                  removableCandidates: []
                });
              }
              
              const cellInfo = alsXZCellsInfo.get(cellKey);
              cellInfo.removableCandidates.push(value);
            }
          });
        }
        
        // 将所有单元格信息转换为高亮单元格
        alsXZCellsInfo.forEach((cellInfo, cellKey) => {
          cellsToHighlight.push({
            row: cellInfo.row,
            col: cellInfo.col,
            techniqueIndicator: true,
            techniqueType: technique.type,
            highlightType: 'alsXZ',
            isTarget: false,
            backgroundColor: 'transparent', // 不高亮单元格背景
            borderColor: 'transparent',
            // ALS-XZ特定的候选数信息
            alsXZCandidates: {
              xCandidates: cellInfo.xCandidates,
              als1Candidates: cellInfo.als1Candidates,
              als2Candidates: cellInfo.als2Candidates,
              removableCandidates: cellInfo.removableCandidates
            }
          });
        });
      } else {
        // 对于其他技巧，使用统一的高亮逻辑
        // 高亮条件单元格
        if (Array.isArray(cells) && cells.length > 0) {
          cells.forEach(cell => {
            const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
            const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
            
            if (r !== null && c !== null) {
              cellsToHighlight.push({
                row: r,
                col: c,
                techniqueIndicator: true,
                techniqueType: technique.type,
                highlightType: 'condition',
                isTarget: false,
                backgroundColor: 'transparent', // 非基础技巧不高亮单元格背景
                borderColor: 'transparent'
              });
            }
          });
        }
        
        // 高亮目标单元格
        if (Array.isArray(targetCells) && targetCells.length > 0) {
          targetCells.forEach(cell => {
            const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
            const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
            
            if (r !== null && c !== null) {
              // 检查是否已经作为条件单元格高亮
              const existingIndex = cellsToHighlight.findIndex(
                cell => cell.row === r && cell.col === c
              );
              if (existingIndex === -1) {
                // 新的目标单元格
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  techniqueType: technique.type,
                  highlightType: 'target', // 目标单元格标识
                  isTarget: true,
                  backgroundColor: 'transparent', // 透明背景
                  borderColor: 'transparent' // 透明边框
                });
              } else {
                // 如果已存在，更新类型为target
                cellsToHighlight[existingIndex].highlightType = 'target';
                cellsToHighlight[existingIndex].isTarget = true;
                cellsToHighlight[existingIndex].backgroundColor = 'transparent'; // 透明背景
                cellsToHighlight[existingIndex].borderColor = 'transparent'; // 透明边框
              }
            }
          });
        }
        
        // 3. 高亮需要删除的候选数（无单元格底色）
        if (Array.isArray(removableCandidates) && removableCandidates.length > 0) {
          // 构建一个映射，将目标单元格与其需要删除的候选数关联起来
          const removableCandidatesMap = {};
          
          // 如果有详细的目标单元格信息，使用它来建立映射
          if (technique.targetCellsDetails && Array.isArray(technique.targetCellsDetails)) {
            // 使用详细信息建立映射
            technique.targetCellsDetails.forEach(detail => {
              const r = detail.row;
              const c = detail.col;
              const key = `${r}-${c}`;
              if (!removableCandidatesMap[key]) {
                removableCandidatesMap[key] = [];
              }
              // 添加该单元格需要删除的所有候选数
              if (Array.isArray(detail.notesToRemove)) {
                detail.notesToRemove.forEach(note => {
                  if (!removableCandidatesMap[key].includes(note)) {
                    removableCandidatesMap[key].push(note);
                  }
                });
              }
            });
          } else {
            // 如果没有详细信息，使用原有的逻辑
            targetCells.forEach((cell, index) => {
              const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
              const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
              
              if (r !== null && c !== null) {
                const key = `${r}-${c}`;
                if (!removableCandidatesMap[key]) {
                  removableCandidatesMap[key] = [];
                }
                
                // 将对应的候选数添加到该单元格的可删除列表中
                if (index < removableCandidates.length) {
                  const note = removableCandidates[index];
                  if (!removableCandidatesMap[key].includes(note)) {
                    removableCandidatesMap[key].push(note);
                  }
                }
              }
            });
          }
          
          // 更新已高亮的单元格或添加新的高亮单元格
          Object.keys(removableCandidatesMap).forEach(key => {
            const [r, c] = key.split('-').map(Number);
            const valuesToRemove = Array.isArray(removableCandidatesMap[key]) ? removableCandidatesMap[key] : [];
            
            // 检查是否已经高亮
            const existingIndex = cellsToHighlight.findIndex(
              cell => cell.row === r && cell.col === c
            );
            
            if (existingIndex === -1) {
              // 新的移除候选数单元格（无底色，仅用于定位候选数）
              cellsToHighlight.push({
                row: r,
                col: c,
                techniqueIndicator: true,
                techniqueType: technique.type,
                highlightType: 'removal', // 删除候选数标识
                notesToRemove: valuesToRemove,
                backgroundColor: 'transparent', // 透明背景
                borderColor: 'transparent' // 透明边框
              });
            } else {
              // 已有高亮的单元格，添加候选数移除信息
              // 合并已有的候选数和新的候选数，避免覆盖
              const existingNotes = cellsToHighlight[existingIndex].notesToRemove || [];
              const combinedNotes = [...new Set([...existingNotes, ...valuesToRemove])];
              cellsToHighlight[existingIndex].notesToRemove = combinedNotes;
              cellsToHighlight[existingIndex].highlightType = 'removal';
              cellsToHighlight[existingIndex].backgroundColor = 'transparent'; // 透明背景
              cellsToHighlight[existingIndex].borderColor = 'transparent'; // 透明边框
            }
          });
        }
      }
      
      // 基础技巧的特殊处理
      if (isBasicTechnique) {
        // 基础辅助函数 - 对应techniqueIndicator.js的高亮类型
        const pushPrimaryCell = (r, c, num = null, notesToRemove = []) => {
          cellsToHighlight.push({
            row: r,
            col: c,
            techniqueIndicator: true,
            techniqueType: technique.type, // 添加techniqueType
            highlightType: 'primary',
            number: num,
            notesToRemove: notesToRemove,
            isTarget: true,
            backgroundColor: 'rgba(76, 175, 80, 0.2)', // 绿色半透明背景
            borderColor: '#4CAF50'
          });
        };
        
        const pushSecondaryCell = (r, c, num = null) => {
          cellsToHighlight.push({
            row: r,
            col: c,
            techniqueIndicator: true,
            techniqueType: technique.type, // 添加techniqueType
            highlightType: 'secondary',
            number: num,
            isTarget: true,
            backgroundColor: 'rgba(33, 150, 243, 0.2)', // 蓝色半透明背景
            borderColor: '#2196F3'
          });
        };
        
        const pushRemovalCell = (r, c, notes, highlightBg = false) => {
          cellsToHighlight.push({
            row: r,
            col: c,
            techniqueIndicator: true,
            techniqueType: technique.type, // 添加techniqueType
            highlightType: 'removal',
            notesToRemove: notes,
            isTarget: false,
            backgroundColor: highlightBg ? 'rgba(244, 67, 54, 0.1)' : 'transparent', // 淡红色背景（可选）
            borderColor: '#F44336',
            borderStyle: 'dashed'
          });
        };
        
        // 1. 高亮关键单元格（对应techniqueIndicator.js的cells）
        if (Array.isArray(cells) && cells.length > 0) {
          cells.forEach(cell => {
            const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
            const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
            
            if (r !== null && c !== null) {
              // 检查是否已经高亮
              const exists = cellsToHighlight.some(cell => cell.row === r && cell.col === c);
              if (!exists) {
                pushPrimaryCell(r, c, cell.value || technique.number, cell.notes || []);
              }
            }
          });
        }
        
        // 2. 高亮目标单元格（对应techniqueIndicator.js的targetCells）
        if (Array.isArray(targetCells) && targetCells.length > 0) {
          targetCells.forEach(cell => {
            const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
            const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
            
            if (r !== null && c !== null) {
              // 检查是否已经高亮
              const exists = cellsToHighlight.some(cell => cell.row === r && cell.col === c);
              if (!exists) {
                pushSecondaryCell(r, c, technique.number);
              }
            }
          });
        }
        
        // 3. 处理单一单元格技巧的特殊情况
        const hasSingleCell = technique && typeof technique.row === 'number' && typeof technique.col === 'number';
        const row = hasSingleCell ? technique.row : 0;
        const col = hasSingleCell ? technique.col : 0;
        let value = '';
        if (technique) {
          // 优先使用value属性
          value = technique.value || '';
          
          // 如果没有value属性，尝试从number属性获取
          if (!value && technique.number !== undefined) {
            value = technique.number;
          }
          
          // 如果还是没有，尝试从其他属性中提取
          if (!value && technique.result && technique.result.value) {
            value = technique.result.value;
          }
          
          if (!value && technique.cells && Array.isArray(technique.cells) && technique.cells.length > 0) {
            // 从cells数组中提取第一个单元格的value
            const firstCell = technique.cells[0];
            if (firstCell && firstCell.value) {
              value = firstCell.value;
            }
          }
        }
        
        if (hasSingleCell && typeof row === 'number' && typeof col === 'number') {
          // 检查目标单元格是否已经高亮
          const targetExists = cellsToHighlight.some(c => c.row === row && c.col === col);
          
          if (!targetExists) {
            pushPrimaryCell(row, col, value);
          }
          
          // 确保目标单元格有number属性
          cellsToHighlight.forEach(cell => {
            if (cell.row === row && cell.col === col) {
              // 确保number属性存在
              if (!cell.number && value) {
                cell.number = value;
              }
              // 确保techniqueType属性存在
              if (!cell.techniqueType && technique.type) {
                cell.techniqueType = technique.type;
              }
            }
          });
          
          // 对于唯一数法和候选数唯一法，高亮相关的行、列、宫
          if (['nakedSingle', 'notesSingle'].includes(technique.type)) {
            // 为相关区域添加标识，供TechniqueOverlay使用
            cellsToHighlight.forEach(cell => {
              if (cell.row === row && cell.col === col) {
                cell.relatedAreas = ['row', 'col', 'box'];
              }
            });
          }
          // 对于隐性唯一数法，高亮对应的区域
          else if (technique.type.startsWith('hiddenSingle')) {
            const areaType = technique.type.replace('hiddenSingle', '').toLowerCase();
            cellsToHighlight.forEach(cell => {
              if (cell.row === row && cell.col === col) {
                cell.relatedAreas = [areaType];
              }
            });
          }
        }
        
        // 4. 处理候选数移除操作（对应techniqueIndicator.js的removableCandidates）
        if (operation && operation.type === 'removeCandidates' && Array.isArray(operation.cells)) {
          operation.cells.forEach(cell => {
            if (typeof cell.row === 'number' && 
                typeof cell.col === 'number' && 
                Array.isArray(cell.valuesToRemove)) {
              
              const { row: r, col: c, valuesToRemove } = cell;
              
              // 检查是否已经高亮
              const existingIndex = cellsToHighlight.findIndex(
                cell => cell.row === r && cell.col === c
              );
              
              if (existingIndex === -1) {
                // 新的移除候选数单元格
                pushRemovalCell(r, c, valuesToRemove, true);
              } else {
                // 已有高亮的单元格，添加候选数移除信息
                cellsToHighlight[existingIndex].notesToRemove = valuesToRemove;
                cellsToHighlight[existingIndex].highlightType = 
                  cellsToHighlight[existingIndex].highlightType === 'primary' ? 
                  'primary-removal' : 'removal';
              }
            }
          });
        }
        
        // 5. 添加全局候选数高亮信息
        if (Array.isArray(values) && values.length > 0) {
          cellsToHighlight.forEach(cell => {
            if (!cell.highlightedValues) {
              cell.highlightedValues = values;
            }
          });
        }
        
        if (Array.isArray(removableCandidates) && removableCandidates.length > 0) {
          cellsToHighlight.forEach(cell => {
            if (!cell.notesToRemove) {
              cell.notesToRemove = removableCandidates;
            }
          });
        }
        
        // 6. 特殊技巧类型的额外处理
        const techniqueType = technique.type || '';
        
        // 指向对法：明确区分源单元格和目标单元格
        if (techniqueType.includes('pointingPairs')) {
          // 确保源单元格使用primary样式
          if (technique.sourceCells && Array.isArray(technique.sourceCells)) {
            technique.sourceCells.forEach(cell => {
              const r = Array.isArray(cell) ? cell[0] : cell.row;
              const c = Array.isArray(cell) ? cell[1] : cell.col;
              const existingIndex = cellsToHighlight.findIndex(hCell => hCell.row === r && hCell.col === c);
              
              if (existingIndex !== -1) {
                cellsToHighlight[existingIndex].highlightType = 'primary';
                cellsToHighlight[existingIndex].isTarget = true;
              }
            });
          }
        }
      } else {
        // 对于其他非基础技巧，仅高亮候选数，不高亮单元格
        
        // 获取条件候选数的函数
        const getConditionCandidateValues = (technique, cellRow, cellCol) => {
          // 处理不同类型的技巧
          
          // 对于显性三链数，检查是否有条件单元格的详细信息
          if (technique.type && technique.type.includes('nakedTriple') && technique.conditionCellsDetails) {
            // 查找当前单元格的详细信息
            const cellDetail = technique.conditionCellsDetails.find(detail => 
              detail.row === cellRow && detail.col === cellCol);
            
            // 如果找到了详细信息，返回该单元格的实际候选数
            if (cellDetail && Array.isArray(cellDetail.notes)) {
              return cellDetail.notes;
            }
          }
          
          // 对于显性数对和隐性数对，检查是否有values字段
          if (technique.type && (technique.type.includes('nakedPair') || technique.type.includes('hiddenPair'))) {
            if (Array.isArray(technique.values) && technique.values.length > 0) {
              return technique.values;
            }
          }
          
          // 对于隐性三链数，使用values字段
          if (technique.type && technique.type.includes('hiddenTriple')) {
            if (Array.isArray(technique.values) && technique.values.length > 0) {
              return technique.values;
            }
          }
          
          if (technique.type && technique.type.includes('yWing')) {
            // Y-Wing技巧：需要区分枢纽单元格和翼单元格
            if (technique.x !== undefined && technique.y !== undefined && technique.z !== undefined) {
              // 检查当前单元格是枢纽单元格还是翼单元格
              const isAnchorCell = technique.anchorCell && 
                ((Array.isArray(technique.anchorCell) && technique.anchorCell[0] === cellRow && technique.anchorCell[1] === cellCol) ||
                 (technique.anchorCell.row === cellRow && technique.anchorCell.col === cellCol));
              
              const isXZCell = technique.xzCell && 
                ((Array.isArray(technique.xzCell) && technique.xzCell[0] === cellRow && technique.xzCell[1] === cellCol) ||
                 (technique.xzCell.row === cellRow && technique.xzCell.col === cellCol));
              
              const isYZCell = technique.yzCell && 
                ((Array.isArray(technique.yzCell) && technique.yzCell[0] === cellRow && technique.yzCell[1] === cellCol) ||
                 (technique.yzCell.row === cellRow && technique.yzCell.col === cellCol));
              
              // 对于枢纽单元格，返回x和y候选数
              if (isAnchorCell) {
                return [technique.x, technique.y];
              }
              
              // 对于XZ翼单元格，返回x和z候选数
              if (isXZCell) {
                return [technique.x, technique.z];
              }
              
              // 对于YZ翼单元格，返回y和z候选数
              if (isYZCell) {
                return [technique.y, technique.z];
              }
            }
            
            // 默认情况下返回x和y候选数
            if (technique.x !== undefined && technique.y !== undefined) {
              return [technique.x, technique.y];
            }
          } else if (technique.type && technique.type.includes('xyzWing')) {
            // XYZ-Wing技巧：需要区分枢纽单元格和翼单元格
            if (technique.x !== undefined && technique.y !== undefined && technique.z !== undefined) {
              // 检查当前单元格是枢纽单元格还是翼单元格
              const isPivotCell = technique.pivotCell && 
                ((Array.isArray(technique.pivotCell) && technique.pivotCell[0] === cellRow && technique.pivotCell[1] === cellCol) ||
                 (technique.pivotCell.row === cellRow && technique.pivotCell.col === cellCol));
              
              const isXZCell = technique.xzCell && 
                ((Array.isArray(technique.xzCell) && technique.xzCell[0] === cellRow && technique.xzCell[1] === cellCol) ||
                 (technique.xzCell.row === cellRow && technique.xzCell.col === cellCol));
              
              const isYZCell = technique.yzCell && 
                ((Array.isArray(technique.yzCell) && technique.yzCell[0] === cellRow && technique.yzCell[1] === cellCol) ||
                 (technique.yzCell.row === cellRow && technique.yzCell.col === cellCol));
              
              // 对于枢纽单元格，返回x、y和z候选数
              if (isPivotCell) {
                return [technique.x, technique.y, technique.z];
              }
              
              // 对于XZ翼单元格，返回x和z候选数
              if (isXZCell) {
                return [technique.x, technique.z];
              }
              
              // 对于YZ翼单元格，返回y和z候选数
              if (isYZCell) {
                return [technique.y, technique.z];
              }
            }
            
            // 默认情况下返回x、y和z候选数
            if (technique.x !== undefined && technique.y !== undefined && technique.z !== undefined) {
              return [technique.x, technique.y, technique.z];
            }
          } else if (technique.type && (technique.type.includes('pointingPairs') || technique.type.includes('boxLineReduction'))) {
            // 指向对法和宫行列排除法：使用number作为条件候选数
            if (technique.number !== undefined) {
              return [technique.number];
            }
          } else if (technique.number !== undefined) {
            // 其他有number字段的技巧：使用number作为条件候选数
            return [technique.number];
          } else if (Array.isArray(technique.values) && technique.values.length > 0) {
            // 有values数组的技巧：使用values作为条件候选数
            return technique.values;
          }
          
          // 默认返回空数组
          return [];
        };
        
        // 1. 高亮条件候选数
        // 对于指向对法和宫行列排除法，使用sourceCells作为条件单元格
        const conditionCells = (technique.type && (technique.type.includes('pointingPairs') || technique.type.includes('boxLineReduction'))) 
          ? (technique.sourceCells || []) 
          : cells;
          
        if (Array.isArray(conditionCells) && conditionCells.length > 0) {
          conditionCells.forEach(cell => {
            const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
            const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
            
            if (r !== null && c !== null) {
              // 添加单元格用于定位候选数，但不应用任何视觉样式
              const cellToHighlight = {
                row: r,
                col: c,
                techniqueIndicator: true,
                techniqueType: technique.type,
                highlightType: 'condition',
                isTarget: false,
                // 对于不同的技巧类型，使用不同的条件候选数来源
                highlightedValues: getConditionCandidateValues(technique, r, c), // 条件候选数
                backgroundColor: 'transparent', // 透明背景
                borderColor: 'transparent' // 透明边框
              };
              
              // 对于Y-Wing技巧，传递z值信息以便正确高亮Z候选数
              if (technique.type && technique.type.includes('yWing') && technique.z !== undefined) {
                cellToHighlight.zValue = technique.z;
              }
              
              // 对于XYZ-Wing技巧，传递z值信息以便正确高亮Z候选数
              if (technique.type && technique.type.includes('xyzWing') && technique.z !== undefined) {
                cellToHighlight.zValue = technique.z;
                // 传递x和y值信息以便正确高亮X和Y候选数
                cellToHighlight.x = technique.x;
                cellToHighlight.y = technique.y;
                cellToHighlight.z = technique.z;
                // 传递单元格位置信息
                cellToHighlight.pivotCell = technique.pivotCell;
                cellToHighlight.xzCell = technique.xzCell;
                cellToHighlight.yzCell = technique.yzCell;
              }
              
              cellsToHighlight.push(cellToHighlight);
            }
          });
        }
        
        // 2. 高亮目标单元格中的候选数
        if (Array.isArray(targetCells) && targetCells.length > 0) {
          // 构建一个映射，将目标单元格与其需要删除的候选数关联起来
          const removableCandidatesMap = {};
          
          // 如果有详细的目标单元格信息，使用它来建立映射
          if (technique.targetCellsDetails && Array.isArray(technique.targetCellsDetails)) {
            // 使用详细信息建立映射
            technique.targetCellsDetails.forEach(detail => {
              const r = detail.row;
              const c = detail.col;
              const key = `${r}-${c}`;
              if (!removableCandidatesMap[key]) {
                removableCandidatesMap[key] = [];
              }
              // 添加该单元格需要删除的所有候选数
              if (Array.isArray(detail.notesToRemove)) {
                detail.notesToRemove.forEach(note => {
                  if (!removableCandidatesMap[key].includes(note)) {
                    removableCandidatesMap[key].push(note);
                  }
                });
              }
            });
          } else {
            // 如果没有详细信息，使用原有的逻辑
            // 修复目标候选数显示不全的问题：正确处理removableCandidates数组
            if (targetCells.length > 0 && removableCandidates.length > 0) {
              // 检查removableCandidates是否是扁平化的数组
              if (removableCandidates.length === targetCells.length) {
                // 每个目标单元格对应一个候选数
                targetCells.forEach((cell, index) => {
                  const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
                  const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
                  
                  if (r !== null && c !== null) {
                    const key = `${r}-${c}`;
                    if (!removableCandidatesMap[key]) {
                      removableCandidatesMap[key] = [];
                    }
                    
                    // 将对应的候选数添加到该单元格的可删除列表中
                    const note = removableCandidates[index];
                    if (!removableCandidatesMap[key].includes(note)) {
                      removableCandidatesMap[key].push(note);
                    }
                  }
                });
              } else {
                // removableCandidates是扁平化的数组，包含所有目标单元格的所有候选数
                // 需要将所有候选数分配给所有目标单元格
                targetCells.forEach((cell) => {
                  const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
                  const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
                  
                  if (r !== null && c !== null) {
                    const key = `${r}-${c}`;
                    if (!removableCandidatesMap[key]) {
                      removableCandidatesMap[key] = [];
                    }
                    
                    // 将所有候选数添加到该单元格的可删除列表中
                    removableCandidates.forEach(note => {
                      if (!removableCandidatesMap[key].includes(note)) {
                        removableCandidatesMap[key].push(note);
                      }
                    });
                  }
                });
              }
            }
          }
          
          // 更新已高亮的单元格或添加新的高亮单元格
          Object.keys(removableCandidatesMap).forEach(key => {
            const [r, c] = key.split('-').map(Number);
            const valuesToRemove = Array.isArray(removableCandidatesMap[key]) ? removableCandidatesMap[key] : [];
            
            // 检查是否已经高亮
            const existingIndex = cellsToHighlight.findIndex(
              cell => cell.row === r && cell.col === c
            );
            
            if (existingIndex === -1) {
              // 新的移除候选数单元格（无底色，仅用于定位候选数）
              cellsToHighlight.push({
                row: r,
                col: c,
                techniqueIndicator: true,
                techniqueType: technique.type,
                highlightType: 'removal', // 删除候选数标识
                notesToRemove: valuesToRemove,
                backgroundColor: 'transparent', // 透明背景
                borderColor: 'transparent' // 透明边框
              });
            } else {
              // 已有高亮的单元格，添加候选数移除信息
              // 合并已有的候选数和新的候选数，避免覆盖
              const existingNotes = cellsToHighlight[existingIndex].notesToRemove || [];
              const combinedNotes = [...new Set([...existingNotes, ...valuesToRemove])];
              cellsToHighlight[existingIndex].notesToRemove = combinedNotes;
              cellsToHighlight[existingIndex].highlightType = 'removal';
              cellsToHighlight[existingIndex].backgroundColor = 'transparent'; // 透明背景
              cellsToHighlight[existingIndex].borderColor = 'transparent'; // 透明边框
            }
          });
        }
      }
      
      return cellsToHighlight;
    };
    
    // 应用高亮策略
    const highlightedCells = handleTechniqueHighlighting(technique);
    setHighlightedCells(highlightedCells);
  }
    
    // 切换到解题步骤标签页
    setActiveTab('solution');
  };

  // 应用技巧
  const handleApplyTechnique = () => {
    console.log('handleApplyTechnique called', { selectedTechnique, isPencilMode, togglePencilMode });
    
    if (selectedTechnique) {
      // 检查技巧类型，确定是否是基础技巧
      const isBasicTechnique = selectedTechnique.type && (
        selectedTechnique.type === 'nakedSingle' ||
        selectedTechnique.type === 'notesSingle' ||
        selectedTechnique.type.includes('hiddenSingle')
      );
      
      console.log('Technique type check', { isBasicTechnique, techniqueType: selectedTechnique.type });
      
      // 对于基础技巧，直接应用
      if (isBasicTechnique) {
        console.log('Applying basic technique');
        const success = applyTechniqueToBoard(selectedTechnique);
        if (success) {
          // 彻底清除ALS-XZ和SDC的DOM样式（避免高亮遗留）
          alsXZIndicator.clearHighlights();
          sdcIndicator.clearHighlights();
          
          // 应用成功后，清除高亮
          if (setHighlightedCells) {
            setHighlightedCells([]);
          }
          // 取消单元格选中状态
          if (setSelectedCell) {
            setSelectedCell(null);
          }
          // 重新查找可用技巧
          findTechniques();
        }
      } else {
        console.log('Applying non-basic technique');
        // 对于其他技巧，弹窗提示用户手动删除候选数，并退出技巧指示模式
        // 显示提示信息
        toast.info(t('manualCandidateRemovalRequired', { 
          defaultMessage: '请手动清除选定候选数' 
        }), { 
          position: 'top-right',
          autoClose: 3000
        });
        
        // 退出技巧指示模式
        // 彻底清除ALS-XZ和SDC的DOM样式（避免高亮遗留）
        alsXZIndicator.clearHighlights();
        sdcIndicator.clearHighlights();
        
        // 清除高亮
        if (setHighlightedCells) {
          setHighlightedCells([]);
        }
        // 取消单元格选中状态
        if (setSelectedCell) {
          setSelectedCell(null);
        }
        // 切换到键盘标签页
        setActiveTab('keyboard');
        // 清除选中的技巧和步骤
        setSelectedTechnique(null);
        setTechniqueSteps([]);
        setCurrentPage(0);
      }
    } else {
      console.log('No selected technique');
    }
  };

  return (
    <div className="control-panel" style={{
      backgroundColor: '#ffffff',
      borderRadius: 'var(--border-radius, 8px)',
      padding: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
      display: 'flex',
      flexDirection: 'column',
      // 移除硬编码宽度，让CSS媒体查询控制宽度，确保竖屏模式下与棋盘等宽
      fontFamily: 'Arial, Microsoft YaHei, sans-serif',
      margin: 0,
      boxSizing: 'border-box',
      border: '1px solid #e0e0e0',
      position: 'relative',
      // 修复竖屏模式下的高度问题
      height: verticalMode ? 'auto' : 'var(--board-width)',
      maxHeight: verticalMode ? '400px' : 'var(--board-width)',
      minHeight: verticalMode ? '200px' : 'var(--board-width)', // 确保最小高度
      overflow: 'hidden',
      outline: 'none', // 移除聚焦轮廓
      WebkitTapHighlightColor: 'transparent' // 移除点击高亮
    }}>
      <h3 style={{ display: 'none' }}>控制面板</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: 0,
        minHeight: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '8px',
          paddingBottom: 0
        }}>
          <button 
              style={{
                flex: 1,
                padding: '4px 8px',
                backgroundColor: activeTab === 'keyboard' ? '#3498db15' : 'transparent',
                border: 'none',
                borderRadius: '4px 4px 0 0',
                color: activeTab === 'keyboard' ? '#3498db' : '#7f8c8d',
                cursor: 'pointer',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                transition: 'background-color 0.3s, color 0.3s'
              }}
              onClick={() => {
                setActiveTab('keyboard');
                // 取消选中单元格
                if (setSelectedCell) {
                  setSelectedCell(null);
                }
              }}
          >
            {t('keyboard')}
          </button>
          {/* 技巧标签页 - 只在学习模式下显示 */}
          {mode === 'learning' && (
            <button 
                style={{
                  flex: 1,
                  padding: '4px 8px',
                  backgroundColor: activeTab === 'techniques' ? '#3498db15' : 'transparent',
                  border: 'none',
                  borderRadius: '4px 4px 0 0',
                  color: activeTab === 'techniques' ? '#3498db' : '#7f8c8d',
                  cursor: 'pointer',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'background-color 0.3s, color 0.3s'
                }}
                onClick={() => {
                  setActiveTab('techniques');
                  // 取消选中单元格
                  if (setSelectedCell) {
                    setSelectedCell(null);
                  }
                }}
            >
              {t('techniques')}
            </button>
          )}
          {/* 解题标签页 - 只在学习模式下显示 */}
          {mode === 'learning' && (
            <button 
                style={{
                  flex: 1,
                  padding: '4px 8px',
                  backgroundColor: activeTab === 'solution' ? '#3498db15' : 'transparent',
                  border: 'none',
                  borderRadius: '6px 6px 0 0',
                  fontSize: '14px',
                  fontWeight: activeTab === 'solution' ? '700' : '500',
                  color: activeTab === 'solution' ? '#3498db' : '#7f8c8d',
                  cursor: 'pointer',
                  margin: '0 2px',
                  boxSizing: 'border-box',
                  minHeight: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                onClick={() => {
                  setActiveTab('solution');
                  // 取消选中单元格，进入技巧模式
                  if (setSelectedCell) {
                    setSelectedCell(null);
                  }
                  // 如果当前处于铅笔模式，切换到正常模式
                  if (isPencilMode && togglePencilMode) {
                    togglePencilMode();
                  }
                }}
              >
                {t('solutionTab')}
              </button>
          )}
        </div>
        
        {/* 标签页内容 */}
          <div style={{
            flex: 1,
            padding: '4px 0',
            overflow: 'visible',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0
          }}>
          {activeTab === 'keyboard' && (
            <>
              {window.innerWidth <= 768 ? (
                // 竖屏布局：数字1-6一行，数字7-9和操作按钮一行
                <>
                  {/* 第一行：数字按钮 1-6 */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', marginBottom: '8px', padding: '0 2px' }}>
                    {[1, 2, 3, 4, 5, 6].map(number => {
                      const remainingCount = remainingNumbers.hasOwnProperty(number) ? remainingNumbers[number] : 9;
                      const isDisabled = remainingCount === 0;
                      return (
                        <button
                          key={number}
                          className="number-button"
                          disabled={isDisabled}
                          onClick={(e) => {
                            e.stopPropagation();
                            !isDisabled && onNumberSelect(number);
                          }}
                          style={{
                            // 基础样式
                            position: 'relative',
                            backgroundColor: selectedNumber === number || isPencilMode ? '#3498db' : '#ffffff',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            border: 'none',
                            
                            // 核心布局属性
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            borderRadius: '8px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.2',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            boxSizing: 'border-box',
                            
                            // 尺寸控制 - 添加aspectRatio确保正方形
                            width: '100%',
                            aspectRatio: '1',
                            minHeight: '60px',
                            overflow: 'hidden',
                            
                            // 阴影和过渡
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ 
                            fontSize: 'clamp(40px, 12vw, 80px)',
                            fontWeight: '400',
                            lineHeight: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}>{number}</span>
                          <span style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            backgroundColor: 'transparent',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '1px 4px',
                            borderRadius: '8px',
                            minWidth: '16px',
                            textAlign: 'center',
                            display: isPencilMode || remainingCount === 0 ? 'none' : 'inline-block'
                          }}>
                            {remainingCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* 第二行：数字7-9和操作按钮 */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', padding: '0 2px' }}>
                    {/* 数字7-9 */}
                    {[7, 8, 9].map(number => {
                      const remainingCount = remainingNumbers.hasOwnProperty(number) ? remainingNumbers[number] : 9;
                      const isDisabled = remainingCount === 0;
                      return (
                        <button
                          key={number}
                          className="number-button"
                          disabled={isDisabled}
                          onClick={(e) => {
                            e.stopPropagation();
                            !isDisabled && onNumberSelect(number);
                          }}
                          style={{
                            // 基础样式
                            position: 'relative',
                            backgroundColor: selectedNumber === number || isPencilMode ? '#3498db' : '#ffffff',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            border: 'none',
                            
                            // 核心布局属性
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            borderRadius: '8px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.2',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            boxSizing: 'border-box',
                            
                            // 尺寸控制
                            width: '100%',
                            aspectRatio: '1',
                            minHeight: '60px',
                            overflow: 'hidden',
                            
                            // 阴影和过渡
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ 
                            fontSize: 'clamp(40px, 12vw, 80px)',
                            fontWeight: '400',
                            lineHeight: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}>{number}</span>
                          <span style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            backgroundColor: 'transparent',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '1px 4px',
                            borderRadius: '8px',
                            minWidth: '16px',
                            textAlign: 'center',
                            display: isPencilMode || remainingCount === 0 ? 'none' : 'inline-block'
                          }}>
                            {remainingCount}
                          </span>
                        </button>
                      );
                    })}
                    
                    {/* 撤回按钮 */}
                    <button
                      key="undo"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUndo();
                      }}
                      title={t('undoAction')}
                      style={{
                        // 基础样式
                        position: 'relative',
                        backgroundColor: '#ffffff',
                        color: '#3498db',
                        border: 'none',
                        
                        // 核心布局属性
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        borderRadius: '8px',
                        fontSize: '60px !important',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '600',
                        lineHeight: '1.2',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        
                        // 尺寸控制
                        width: '100%',
                        aspectRatio: '1',
                        minHeight: '60px',
                        overflow: 'hidden',
                        
                        // 阴影和过渡
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M3 7v6h6"/>
                        <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
                      </svg>
                    </button>
                    
                    {/* 清除按钮 */}
                    <button
                      key="clear"
                      onClick={(e) => {
                        e.stopPropagation();
                        // 检查是否有选中的单元格，如果没有则显示提示
                        if (!selectedCell) {
                          alert('请先选择一个单元格');
                          return;
                        }
                        onClearCell();
                      }}
                      title={t('clearCell')}
                      style={{
                        // 基础样式
                        position: 'relative',
                        backgroundColor: '#ff4444',
                        color: 'white',
                        border: 'none',
                        
                        // 核心布局属性
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        borderRadius: '8px',
                        fontSize: '24px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '600',
                        lineHeight: '1.2',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        
                        // 尺寸控制
                        width: '100%',
                        aspectRatio: '1',
                        minHeight: '60px',
                        overflow: 'hidden',
                        
                        // 阴影和过渡
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg 
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18"/>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        <line x1="10" x2="10" y1="11" y2="17"/>
                        <line x1="14" x2="14" y1="11" y2="17"/>
                      </svg>
                    </button>
                    
                    {/* 铅笔按钮 */}
                    <button
                      key="pencil"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePencilMode();
                      }}
                      title={isPencilMode ? t('exitPencilMode') : t('enterPencilMode')}
                      style={{
                        // 基础样式
                        position: 'relative',
                        backgroundColor: isPencilMode ? '#3498db' : '#ffffff',
                        color: isPencilMode ? 'white' : '#3498db',
                        border: 'none',
                        
                        // 核心布局属性
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        borderRadius: '8px',
                        fontSize: '24px',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '600',
                        lineHeight: '1.2',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        
                        // 尺寸控制
                        width: '100%',
                        aspectRatio: '1',
                        minHeight: '60px',
                        overflow: 'hidden',
                        
                        // 阴影和过渡
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                // 横屏布局：保持原有的九宫格布局，添加适当负边距上移，减小与顶部间距但不侵占标题栏
                <div className="number-pad" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', width: '100%', maxHeight: '100%', overflow: 'visible', padding: '4px', boxSizing: 'border-box', marginTop: '-10px' }}>
                  {/* 数字按钮 1-9 */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => {
                    // 使用hasOwnProperty确保当值为0时也能正确处理，而不是使用默认值9
                    const remainingCount = remainingNumbers.hasOwnProperty(number) ? remainingNumbers[number] : 9;
                    const isDisabled = remainingCount === 0; // 当剩余数量为0时禁用按钮
                    return (
                        <button
                        key={number}
                        className="number-button"
                        disabled={isDisabled}
                        onClick={(e) => {
                          e.stopPropagation(); // 阻止事件冒泡
                          !isDisabled && onNumberSelect(number);
                        }}
                        style={{
                          // 基础样式
                          position: 'relative',
                          backgroundColor: selectedNumber === number || isPencilMode ? '#3498db' : '#ffffff',
                          color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                          border: 'none',
                            
                          // 核心布局属性
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px',
                          borderRadius: '12px',
                          fontFamily: 'Arial, sans-serif',
                          fontWeight: '400', // 直接设置为400
                          lineHeight: '1',
                          cursor: isDisabled ? 'not-allowed' : 'pointer',
                          boxSizing: 'border-box',
                          
                          // 尺寸控制
                          width: '100%',
                          aspectRatio: '1',
                          minHeight: '60px',
                          maxHeight: '150px',
                          overflow: 'visible',
                          // 响应式按钮大小
                          fontSize: '0', // 让内容决定大小
                          
                          // 阴影和过渡
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                      <span style={{ 
                        fontSize: 'clamp(30px, 8vw, 70px)',
                        fontWeight: '400',
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box'
                      }}>{number}</span>
                      <span style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        backgroundColor: 'transparent',
                        color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '2px 6px',
                        borderRadius: '10px',
                        minWidth: '20px',
                        textAlign: 'center',
                        display: isPencilMode || remainingCount === 0 ? 'none' : 'inline-block'
                      }}>
                        {remainingCount}
                      </span>
                    </button>
                    );
                  })}
                  
                  {/* 操作按钮 - 使用与数字按钮相同的样式 */}
                  {/* 撤回按钮 - 使用左箭头图标 */}
                  <button
                    key="undo"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡
                      onUndo();
                    }}
                    title={t('undoAction')}
                    style={{
                      // 基础样式
                      position: 'relative',
                      backgroundColor: '#ffffff',
                      color: '#3498db',
                      border: 'none',
                      
                      // 核心布局属性
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                      borderRadius: '12px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: '600',
                      lineHeight: '1.2',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                       
                      // 尺寸控制 - 自适应容器大小，与数字按钮保持一致
                      width: '100%',
                      aspectRatio: '1',
                      minHeight: '60px',
                      maxHeight: '150px',
                      overflow: 'visible',
                      
                      // 阴影和过渡
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="60%" 
                      height="60%" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M3 7v6h6"/>
                      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
                    </svg>
                  </button>
                  
                  {/* 清除按钮 - 使用垃圾桶图标 */}
                  <button
                    key="clear"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡
                      // 检查是否有选中的单元格，如果没有则显示提示
                      if (!selectedCell) {
                        alert('请先选择一个单元格');
                        return;
                      }
                      onClearCell();
                    }}
                    title={t('clearCell')}
                    style={{
                      // 基础样式
                      position: 'relative',
                      backgroundColor: '#ff4444',
                      color: 'white',
                      border: 'none',
                      
                      // 核心布局属性
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                      borderRadius: '12px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: '600',
                      lineHeight: '1.2',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                       
                      // 尺寸控制 - 自适应容器大小，与数字按钮保持一致
                      width: '100%',
                      aspectRatio: '1',
                      minHeight: '60px',
                      maxHeight: '150px',
                      overflow: 'visible',
                      
                      // 阴影和过渡
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg 
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg" 
                      width="60%" 
                      height="60%" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                      <line x1="10" x2="10" y1="11" y2="17"/>
                      <line x1="14" x2="14" y1="11" y2="17"/>
                    </svg>
                  </button>
                  
                  {/* 铅笔按钮 - 使用铅笔图标 */}
                  <button
                    key="pencil"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡
                      togglePencilMode();
                    }}
                    title={isPencilMode ? t('exitPencilMode') : t('enterPencilMode')}
                    style={{
                      // 基础样式
                      position: 'relative',
                      backgroundColor: isPencilMode ? '#3498db' : '#ffffff',
                      color: isPencilMode ? 'white' : '#3498db',
                      border: 'none',
                      
                      // 核心布局属性
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                      borderRadius: '12px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: '600',
                      lineHeight: '1.2',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                       
                      // 尺寸控制 - 自适应容器大小，与数字按钮保持一致
                      width: '100%',
                      aspectRatio: '1',
                      minHeight: '60px',
                      maxHeight: '150px',
                      overflow: 'visible',
                      
                      // 阴影和过渡
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="60%" 
                      height="60%" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'techniques' && mode === 'learning' && (
            <div style={{ overflowY: 'auto', padding: '4px 8px 8px 8px' }}>
              {availableTechniques.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '20px', 
                  color: '#7f8c8d',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  {t('noTechniquesAvailable')}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                  {availableTechniques.map((technique, index) => {
                    // 根据技巧类型正确获取位置信息
                    let positionText = '';
                    let valueText = '';
                    
                    // 处理单一单元格技巧（有row和col属性）
                    if (typeof technique.row === 'number' && typeof technique.col === 'number') {
                      const row = technique.row + 1;
                      const col = technique.col + 1;
                      positionText = `(${row},${col})`;
                      valueText = technique.value !== undefined ? ` ${t('number')}: ${technique.value}` : '';
                    } 
                    // 处理多单元格技巧（有cells数组）
                    else if (Array.isArray(technique.cells) && technique.cells.length > 0) {
                      // 对于多单元格技巧，显示第一个单元格的位置或合并显示
                      if (technique.cells.length === 1 && Array.isArray(technique.cells[0])) {
                        const row = technique.cells[0][0] + 1;
                        const col = technique.cells[0][1] + 1;
                        positionText = `(${row},${col})`;
                      } else {
                        // 显示"多单元格"或具体位置列表
                        positionText = t('multipleCells');
                      }
                      // 显示values数组
                      if (Array.isArray(technique.values) && technique.values.length > 0) {
                        valueText = ` ${t('number')}: [${technique.values.join(',')}]`;
                      }
                    }
                    // 处理指向对法技巧（有sourceCells数组）
                    else if (technique.type.includes('pointingPairs') && Array.isArray(technique.sourceCells) && technique.sourceCells.length > 0) {
                      // 显示源单元格位置
                      if (technique.sourceCells.length > 0) {
                        const firstCell = technique.sourceCells[0];
                        if (Array.isArray(firstCell) && firstCell.length >= 2) {
                          const row = firstCell[0] + 1;
                          const col = firstCell[1] + 1;
                          positionText = `(${row},${col})`;
                        } else if (firstCell && typeof firstCell === 'object') {
                          const row = (firstCell.row !== undefined ? firstCell.row : firstCell[0]) + 1;
                          const col = (firstCell.col !== undefined ? firstCell.col : firstCell[1]) + 1;
                          positionText = `(${row},${col})`;
                        } else {
                          positionText = t('multipleCells');
                        }
                      } else {
                        positionText = t('multipleCells');
                      }
                      // 显示数字
                      if (technique.number !== undefined) {
                        valueText = ` ${t('number')}: ${technique.number}`;
                      }
                    }
                    // 调试：处理其他指向对法技巧的情况
                    else if (technique.type.includes('pointingPairs')) {
                      // 如果是指向对法但没有sourceCells，尝试其他方式获取位置信息
                      if (technique.boxRow !== undefined && technique.boxCol !== undefined) {
                        // 显示宫格信息
                        const boxNum = technique.boxRow * 3 + technique.boxCol + 1;
                        positionText = `${t('box')} ${boxNum}`;
                      } else {
                        positionText = t('multipleCells');
                      }
                      // 显示数字
                      if (technique.number !== undefined) {
                        valueText = ` ${t('number')}: ${technique.number}`;
                      }
                    }
                    // 处理宫行列排除法技巧（有sourceCells数组）
                    else if (technique.type.includes('boxLineReduction') && Array.isArray(technique.sourceCells) && technique.sourceCells.length > 0) {
                      // 显示源单元格位置
                      if (technique.sourceCells.length > 0) {
                        const firstCell = technique.sourceCells[0];
                        if (Array.isArray(firstCell) && firstCell.length >= 2) {
                          const row = firstCell[0] + 1;
                          const col = firstCell[1] + 1;
                          positionText = `(${row},${col})`;
                        } else if (firstCell && typeof firstCell === 'object') {
                          const row = (firstCell.row !== undefined ? firstCell.row : firstCell[0]) + 1;
                          const col = (firstCell.col !== undefined ? firstCell.col : firstCell[1]) + 1;
                          positionText = `(${row},${col})`;
                        } else {
                          positionText = t('multipleCells');
                        }
                      } else {
                        positionText = t('multipleCells');
                      }
                      // 显示数字
                      if (technique.number !== undefined) {
                        valueText = ` ${t('number')}: ${technique.number}`;
                      }
                    }
                    // 调试：处理其他宫行列排除法技巧的情况
                    else if (technique.type.includes('boxLineReduction')) {
                      // 如果是宫行列排除法但没有sourceCells，尝试其他方式获取位置信息
                      if (technique.boxRow !== undefined && technique.boxCol !== undefined) {
                        // 显示宫格信息
                        const boxNum = technique.boxRow * 3 + technique.boxCol + 1;
                        positionText = `${t('box')} ${boxNum}`;
                      } else {
                        positionText = t('multipleCells');
                      }
                      // 显示数字
                      if (technique.number !== undefined) {
                        valueText = ` ${t('number')}: ${technique.number}`;
                      }
                    }
                    else {
                      positionText = t('unknownPosition');
                    }
                    
                    // 根据技巧类型确定一级分类和二级类型
                    let primaryType = '';
                    let secondaryType = '';

                    // 定义应该保持英文的技巧名称
                    const englishOnlyTechniques = ['X-Wing', 'Y-Wing', 'XY-Wing', 'XYZ-Wing', 'Swordfish', 'Jellyfish'];

                    if (technique.type === 'nakedSingle' || technique.type === 'naked_single') {
                      primaryType = t('nakedSingleTechnique');
                      // 候选数唯一法是一级分类，这里可以根据需要添加二级类型
                    } else if (technique.type === 'notesSingle' || technique.type === 'singleCandidateTechnique') {
                      primaryType = t('notesSingleTechnique');
                      // 候选数唯一法是一级分类，这里可以根据需要添加二级类型
                    } else if (technique.type.includes('hidden_single') || technique.type.includes('hiddenSingle')) {
                      // 直接设置primaryType，不设置secondaryType避免重复
                      if (technique.type.includes('row') || technique.type.includes('Row')) {
                        primaryType = t('hiddenSingleRow');
                      } else if (technique.type.includes('col') || technique.type.includes('Col')) {
                        primaryType = t('hiddenSingleCol');
                      } else if (technique.type.includes('box') || technique.type.includes('Box')) {
                        primaryType = t('hiddenSingleBox');
                      }
                      // 清除secondaryType，避免重复显示
                      secondaryType = '';
                    } else if (technique.type === 'nakedPairs' || technique.type === 'naked_pairs' || technique.type.includes('nakedPair')) {
                      primaryType = t('nakedPairTechnique');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type === 'hiddenPairs' || technique.type === 'hidden_pairs' || technique.type.includes('hiddenPair')) {
                      primaryType = t('hiddenPairTechnique');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type.includes('nakedTriple')) {
                      primaryType = t('nakedTripleTechnique');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type.includes('hiddenTriple')) {
                      primaryType = t('hiddenTripleTechnique');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type.includes('pointingPairs')) {
                      primaryType = t('pointingPairsTechnique');
                      // 根据类型确定是行/列
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      }
                    } else if (technique.type.includes('boxLineReduction')) {
                      primaryType = t('boxLineReductionTechnique');
                      // 根据类型确定是行/列
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      }
                    } else if (technique.type.includes('xWing') || technique.type.includes('x-wing')) {
                      // X-Wing技巧保持英文
                      primaryType = 'X-Wing';
                      // 根据类型确定是行/列
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      }
                    } else if (technique.type.includes('yWing') || technique.type.includes('y-wing')) {
                      // Y-Wing技巧保持英文
                      primaryType = 'Y-Wing';
                      // Y-Wing通常不需要二级类型
                      secondaryType = '';
                    } else if (technique.type.includes('xyWing') || technique.type.includes('xy-wing')) {
                      // XY-Wing技巧保持英文
                      primaryType = 'XY-Wing';
                      // XY-Wing通常不需要二级类型
                      secondaryType = '';
                    } else if (technique.type.includes('xyzWing') || technique.type.includes('xyz-wing')) {
                      // XYZ-Wing技巧保持英文
                      primaryType = 'XYZ-Wing';
                      // XYZ-Wing通常不需要二级类型
                      secondaryType = '';
                    } else if (technique.type.includes('swordfish')) {
                      // Swordfish技巧保持英文
                      primaryType = 'Swordfish';
                      // 根据类型确定是行/列
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      }
                    } else if (technique.type.includes('jellyfish')) {
                      // Jellyfish技巧保持英文
                      primaryType = 'Jellyfish';
                      // 根据类型确定是行/列
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      }
                    } else if (technique.type.includes('alsXZ') || technique.type.includes('ALS-XZ')) {
                      // ALS-XZ技巧
                      primaryType = t('alsXZTechnique');
                      // ALS-XZ通常不需要二级类型
                      secondaryType = '';
                    } else if (technique.type === 'sdc' || technique.type.includes('Sue De Coq')) {
                      // SDC技巧
                      primaryType = t('sdc');
                      // SDC通常不需要二级类型
                      secondaryType = '';
                    } else if (technique.type.includes('uniqueness') || technique.type.includes('Unique Rectangle') || technique.type.includes('Avoidable Rectangle') || technique.type.includes('BUG')) {
                      // Uniqueness技巧
                      if (technique.type.includes('avoidable_rectangle_1') || technique.type.includes('Avoidable Rectangle Type 1')) {
                        primaryType = t('avoidableRectangleTechnique') + ' ' + t('type1');
                      } else if (technique.type.includes('avoidable_rectangle_2') || technique.type.includes('Avoidable Rectangle Type 2')) {
                        primaryType = t('avoidableRectangleTechnique') + ' ' + t('type2');
                      } else if (technique.type.includes('bug_plus_1') || technique.type.includes('BUG+1')) {
                        primaryType = t('uniquenessTechnique') + ' BUG+1';
                      } else if (technique.type.includes('uniqueness_1') || technique.type.includes('Unique Rectangle Type 1')) {
                        primaryType = t('uniquenessTechnique') + ' ' + t('type1');
                      } else {
                        primaryType = t('uniquenessTechnique');
                      }
                      // Uniqueness通常不需要二级类型
                      secondaryType = '';
                    } else {
                      // 检查是否是应该保持英文的技巧
                      let foundEnglishTechnique = false;
                      for (const engTech of englishOnlyTechniques) {
                        if (technique.description && technique.description.includes(engTech)) {
                          primaryType = engTech;
                          foundEnglishTechnique = true;
                          break;
                        }
                      }
                      
                      // 如果是未知类型且不是应该保持英文的技巧，使用翻译后的未知技巧
                      if (!foundEnglishTechnique) {
                        primaryType = t('unknownTechnique');
                      }
                    }

                    // 直接使用primaryType作为显示类型，因为已经包含了行/列/宫信息
                    const displayType = primaryType + (secondaryType ? ` ${secondaryType}` : '');
                    
                    return (
                      <div 
                        key={index}
                        onClick={() => handleTechniqueSelect(technique)}
                        style={{
                          padding: '8px 10px',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '6px',
                          border: '1px solid #e9ecef',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          marginBottom: '6px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#e9ecef';
                          e.currentTarget.style.borderColor = '#3498db';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8f9fa';
                          e.currentTarget.style.borderColor = '#e9ecef';
                        }}
                      >
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          fontWeight: '600', 
                          color: '#34495e',
                          flexWrap: 'wrap'
                        }}>
                          <span style={{ 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis',
                            flexShrink: 0
                          }}>
                            {displayType}
                          </span>
                          <span style={{ 
                            fontSize: '14px', 
                            color: '#7f8c8d', 
                            fontWeight: 'normal',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            flex: 1,
                            minWidth: 0
                          }}>
                            {t('position')}: {positionText}{valueText}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <button 
                onClick={() => {
                  // 核心功能：刷新候选数 - 负责复杂逻辑，包括候选数填充和技巧机会计算
                  let shouldFillCandidates = true;
                  
                  // 首先检查是否需要重新计算候选数
                  if (calculateTechniques) {
                    // calculateTechniques函数返回true表示需要重新填充候选数，false表示直接计算技巧
                    const result = calculateTechniques();
                    if (result === false) {
                      shouldFillCandidates = false;
                    }
                  }
                  
                  // 如果需要，执行候选数填充
                  if (shouldFillCandidates && fillAllCandidates) {
                    fillAllCandidates();
                  }
                  
                  // 总是加载技巧求解（无论是否需要重新填充候选数）
                  findTechniques();
                  // 切换到技巧标签页，方便用户查看结果
                  setActiveTab('techniques');
                  
                  // 检查是否有可用技巧
                  setTimeout(() => {
                    // 检查候选数是否完整填充
                    const isCandidatesComplete = areCandidatesComplete ? areCandidatesComplete() : false;
                    
                    if (availableTechniques.length === 0 && isCandidatesComplete) {
                      // 没有可用技巧且候选数已完整填充，显示弹窗提示
                      setConfirmModalConfig({
                        title: t('noTechniquesHelpTitle'),
                        message: t('noTechniquesHelpMessage'),
                        onConfirm: () => {
                          // 用户选择"是"，基于回溯法提供帮助
                          // 随机选中一个空白单元格，填入正确答案
                          if (sudokuContext && sudokuContext.solveOneCell) {
                            sudokuContext.solveOneCell();
                          }
                        }
                      });
                      setShowConfirmModal(true);
                    }
                  }, 100);
                }}
                style={{
                  width: '100%',
                  padding: '8px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'background-color 0.2s ease'
                }}
                title={t('refreshCandidatesTooltip')}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <NotesIcon />
                  {t('fillCandidates')}
                </div>
              </button>
            </div>
          )}
          
          {activeTab === 'solution' && mode === 'learning' && (
            <div style={{ overflowY: 'auto', padding: '8px', flex: 1, minHeight: '200px', maxHeight: '400px' }}>
              {selectedTechnique ? (
                <>
                  {/* 分页显示解题步骤 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '12px' }}>
                    {(() => {
                      // 根据步骤数量确定分页策略
                      const totalSteps = techniqueSteps.length;
                      let stepsToShow = [];
                      let showNextButton = false;
                      let showApplyButton = false;
                      
                      if (totalSteps === 2) {
                        // 2步：每页显示1步
                        if (currentPage === 0) {
                          stepsToShow = [techniqueSteps[0]];
                          showNextButton = true;
                        } else {
                          stepsToShow = [techniqueSteps[1]];
                          showApplyButton = true;
                        }
                      } else if (totalSteps === 3) {
                        // 3步：第一页显示2步，第二页显示1步
                        if (currentPage === 0) {
                          stepsToShow = [techniqueSteps[0], techniqueSteps[1]];
                          showNextButton = true;
                        } else {
                          stepsToShow = [techniqueSteps[2]];
                          showApplyButton = true;
                        }
                      } else if (totalSteps >= 4) {
                        // 4步或更多：每页显示2步
                        const startIndex = currentPage * 2;
                        const endIndex = Math.min(startIndex + 2, totalSteps);
                        stepsToShow = techniqueSteps.slice(startIndex, endIndex);
                        
                        if (endIndex < totalSteps) {
                          showNextButton = true;
                        } else {
                          showApplyButton = true;
                        }
                      } else {
                        // 1步或更少
                        stepsToShow = techniqueSteps;
                        showApplyButton = true;
                      }
                      
                      return (
                        <>
                          {stepsToShow.map((step, index) => {
                            // 如果是第一条记录且需要显示按钮，则调整布局
                            if (index === 0 && (showNextButton || showApplyButton)) {
                              return (
                                <div 
                                  key={step.step}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '12px',
                                    padding: '12px',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '8px',
                                    border: '1px solid #e9ecef',
                                    position: 'relative'
                                  }}
                                >
                                  <div style={{
                                    minWidth: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: '#3498db',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                  }}>
                                    {step.step}
                                  </div>
                                  <div style={{ flex: 1, fontSize: '14px', color: '#34495e', lineHeight: '1.5', paddingRight: '80px', minHeight: '40px' }}>
                                    {/* 完整显示描述文字 */}
                                    {step.description}
                                  </div>
                                  {/* 按钮与第一条记录同行，固定位置 */}
                                  <div style={{ 
                                    position: 'absolute',
                                    right: '12px',
                                    top: verticalMode ? '8px' : '12px',
                                    display: 'flex',
                                    gap: '6px'
                                  }}>
                                    {showNextButton && (
                                      <button 
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        style={{
                                          width: verticalMode ? '60px' : '70px',
                                          height: verticalMode ? '18px' : '32px',
                                          backgroundColor: '#3498db',
                                          color: 'white',
                                          border: 'none',
                                          borderRadius: '4px',
                                          cursor: 'pointer',
                                          fontSize: verticalMode ? '5px' : '13px',
                                          fontWeight: '600',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          boxShadow: '0 2px 4px rgba(52, 152, 219, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)',
                                          transition: 'all 0.2s ease',
                                          whiteSpace: 'nowrap'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.backgroundColor = '#2980b9';
                                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
                                          e.currentTarget.style.transform = 'translateY(-1px)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.backgroundColor = '#3498db';
                                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(52, 152, 219, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)';
                                          e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                      >
                                        {t('nextStep')}
                                      </button>
                                    )}
                                    
                                    {showApplyButton && (
                                      <button 
                                        onClick={(e) => {
                                          console.log('Apply button clicked');
                                          handleApplyTechnique();
                                        }}
                                        style={{
                                          width: verticalMode ? '60px' : '70px',
                                          height: verticalMode ? '18px' : '32px',
                                          backgroundColor: '#2ecc71', // 绿色背景
                                          color: 'white',
                                          border: 'none',
                                          borderRadius: '4px',
                                          cursor: 'pointer',
                                          fontSize: verticalMode ? '5px' : '13px',
                                          fontWeight: '600',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          boxShadow: '0 2px 4px rgba(46, 204, 113, 0.4), 0 1px 2px rgba(0, 0, 0, 0.15)',
                                          transition: 'all 0.2s ease',
                                          whiteSpace: 'nowrap'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.backgroundColor = '#27ae60';
                                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
                                          e.currentTarget.style.transform = 'translateY(-1px)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.backgroundColor = '#2ecc71';
                                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(46, 204, 113, 0.3), 0 1px 2px rgba(0, 0, 0, 0.12)';
                                          e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                      >
                                        {selectedTechnique && 
                                          (selectedTechnique.type === 'nakedSingle' || 
                                           selectedTechnique.type === 'notesSingle' || 
                                           selectedTechnique.type.includes('hiddenSingle')) 
                                          ? t('apply') 
                                          : t('manualHandle')}
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            }
                            
                            // 其他记录保持原有样式
                            return (
                              <div 
                                key={step.step}
                                style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '12px',
                                  padding: '12px',
                                  backgroundColor: '#f8f9fa',
                                  borderRadius: '8px',
                                  border: '1px solid #e9ecef'
                                }}
                              >
                                <div style={{
                                  minWidth: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  backgroundColor: '#3498db',
                                  color: 'white',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '14px',
                                  fontWeight: 'bold'
                                }}>
                                  {step.step}
                                </div>
                                <div style={{ flex: 1, fontSize: '14px', color: '#34495e', lineHeight: '1.5' }}>
                                  {step.description}
                                </div>
                              </div>
                            );
                          })}
                          
                          {/* 如果第一条记录没有按钮，则在下方显示按钮 */}
                          {stepsToShow.length > 0 && !(showNextButton || showApplyButton) && stepsToShow[0] !== stepsToShow[stepsToShow.length - 1] && (
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                              <button 
                                onClick={() => setCurrentPage(currentPage + 1)}
                                style={{
                                  width: verticalMode ? '75px' : '90px',
                                  height: verticalMode ? '22px' : '40px',
                                  backgroundColor: '#3498db',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer',
                                  fontSize: verticalMode ? '5px' : '14px',
                                  fontWeight: '600',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  boxShadow: '0 4px 8px rgba(52, 152, 219, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15)',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#2980b9';
                                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                                  e.currentTarget.style.transform = 'translateY(-1px)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = '#3498db';
                                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)';
                                  e.currentTarget.style.transform = 'translateY(0)';
                                }}
                              >
                                {t('nextStep')}
                              </button>
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '20px', 
                  color: '#7f8c8d',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  {t('selectTechniqueFirst')}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* 确认模态框 */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={confirmModalConfig.onConfirm}
        title={confirmModalConfig.title}
        message={confirmModalConfig.message}
        confirmText={t('noTechniquesHelpConfirm')}
        cancelText={t('noTechniquesHelpCancel')}
      />
    </div>
  );
};

// 调试函数：检查实际应用中的技巧对象
const debugSelectedTechnique = () => {
  if (typeof window !== 'undefined') {
    // 在全局对象中暴露调试函数
    window.debugSudokuTechnique = () => {
      console.log('=== 实际应用技巧对象调试 ===');
      
      // 尝试从React组件中获取selectedTechnique
      const controlPanel = document.querySelector('.control-panel');
      if (controlPanel) {
        console.log('找到ControlPanel组件');
        
        // 检查是否有全局变量存储技巧对象
        if (window.selectedTechnique) {
          console.log('window.selectedTechnique:', window.selectedTechnique);
        }
        
        // 检查localStorage中是否有技巧数据
        const storedTechnique = localStorage.getItem('selectedTechnique');
        if (storedTechnique) {
          console.log('localStorage selectedTechnique:', JSON.parse(storedTechnique));
        }
      }
      
      console.log('=== 调试结束 ===');
    };
    
    // 在组件挂载时存储技巧对象到全局变量
    window.storeSelectedTechnique = (technique) => {
      window.selectedTechnique = technique;
      localStorage.setItem('selectedTechnique', JSON.stringify(technique));
      console.log('技巧对象已存储到全局变量:', technique);
    };
    
    console.log('调试函数已加载:');
    console.log('- 在控制台输入 debugSudokuTechnique() 检查技巧对象');
    console.log('- 技巧对象会自动存储到 window.selectedTechnique');
  }
};

// 调用调试函数设置
debugSelectedTechnique();

// 测试函数：验证目标数字显示功能
const testNumberDisplay = () => {
  console.log('=== 开始测试目标数字显示功能 ===');
  
  // 测试数据1：模拟唯一余数法技巧
  const testTechnique1 = {
    type: 'nakedSingle',
    row: 3,
    col: 4,
    value: '5',
    number: '5'
  };
  
  // 测试数据2：模拟隐性唯一数法技巧
  const testTechnique2 = {
    type: 'hiddenSingleRow',
    row: 1,
    col: 2,
    value: '7',
    number: '7'
  };
  
  // 测试数据3：模拟没有value属性的技巧
  const testTechnique3 = {
    type: 'hiddenSingleCol',
    row: 5,
    col: 6,
    number: '3'
  };
  
  // 测试数据4：模拟从解题步骤中提取数字
  const testTechnique4 = {
    type: 'hiddenSingleBox',
    row: 7,
    col: 8
  };
  
  const testSteps = [
    { step: 1, description: '找到宫中的隐性唯一数' },
    { step: 2, description: '数字9只能出现在位置(8,9)' },
    { step: 3, description: '填入数字：9' }
  ];
  
  // 测试值提取逻辑
  const testValueExtraction = (technique, steps = []) => {
    let value = '';
    
    // 优先使用value属性
    value = technique.value || '';
    
    // 如果没有value属性，尝试从number属性获取
    if (!value && technique.number !== undefined) {
      value = technique.number;
    }
    
    // 如果还是没有，尝试从解题步骤中提取
    if (!value && steps.length > 0) {
      // 从第二页的解题步骤中提取目标数字
      const step2 = steps.find(step => step.step === 2);
      if (step2 && step2.description) {
        const numberMatch = step2.description.match(/\d+/);
        if (numberMatch) {
          value = numberMatch[0];
        }
      }
      
      // 如果第二页没有找到，尝试从第三页提取
      if (!value) {
        const step3 = steps.find(step => step.step === 3);
        if (step3 && step3.description) {
          const numberMatch = step3.description.match(/\d+/);
          if (numberMatch) {
            value = numberMatch[0];
          }
        }
      }
    }
    
    return value;
  };
  
  // 测试每个技巧
  console.log('测试技巧1 - 唯一余数法:', testValueExtraction(testTechnique1));
  console.log('测试技巧2 - 隐性唯一数法:', testValueExtraction(testTechnique2));
  console.log('测试技巧3 - 无value属性:', testValueExtraction(testTechnique3));
  console.log('测试技巧4 - 从步骤提取:', testValueExtraction(testTechnique4, testSteps));
  
  // 测试高亮单元格生成逻辑
  const testHighlightGeneration = (technique, page, value) => {
    const hasSingleCell = technique && typeof technique.row === 'number' && typeof technique.col === 'number';
    const row = hasSingleCell ? technique.row : 0;
    const col = hasSingleCell ? technique.col : 0;
    
    const cellsToHighlight = [];
    
    if (page === 1) { // 第二页
      // 确保目标单元格是数组中的第一个元素
      cellsToHighlight.unshift({
        row: row,
        col: col,
        techniqueIndicator: true,
        number: value,
        isTarget: true
      });
      
      console.log(`页面${page} - 目标单元格: (${row},${col}), 数字: ${value}`);
      console.log('高亮单元格数组:', cellsToHighlight);
    }
    
    return cellsToHighlight;
  };
  
  // 测试第二页的高亮生成
  console.log('\
测试第二页高亮生成:');
  testHighlightGeneration(testTechnique1, 1, '5');
  testHighlightGeneration(testTechnique2, 1, '7');
  
  console.log('=== 测试完成 ===');
};

// 导出测试函数（可选）
// export { testNumberDisplay };

export default ControlPanel;
