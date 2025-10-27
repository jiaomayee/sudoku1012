import React, { useState, useEffect, useCallback } from 'react';
// 移除styled-components导入
import { useTheme } from '../context/ThemeContext';
import { useSudoku } from '../context/SudokuContext';
import { useLanguage } from '../context/LanguageContext';

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
      'notesSingle': t('singleCandidateTechnique'),
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
      'hiddenTripleBox': t('hiddenTripleTechnique')
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
  const [activeTab, setActiveTab] = useState('keyboard'); // 'keyboard', 'techniques', 'solution'
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // 添加分页状态
  
  // 从上下文获取技巧和应用技巧的方法
  const sudokuContext = useSudoku();
  const { identifyTechniques, applyTechniqueToBoard, gameStarted, currentBoard, setHighlightedCells, setSelectedCell, selectedCell } = sudokuContext || {};
  
  // 退出技巧模式的函数
  const exitTechniqueMode = useCallback(() => {
    // 切换到键盘标签页
    setActiveTab('keyboard');
    // 清除高亮
    if (setHighlightedCells) {
      setHighlightedCells([]);
    }
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
  
  // 当游戏状态变化时，重置技巧数据
  useEffect(() => {
    setAvailableTechniques([]);
  }, [gameStarted, currentBoard]); // 游戏重新开始时清空技巧列表

  // 处理技巧选择
  // 技巧选择处理函数
  const handleTechniqueSelect = (technique) => {
    setSelectedTechnique(technique);
    const steps = [];
    
    // 添加默认值处理
    const hasSingleCell = typeof technique.row === 'number' && typeof technique.col === 'number';
    const row = hasSingleCell ? technique.row : 0;
    const col = hasSingleCell ? technique.col : 0;
    const position = hasSingleCell ? `(${row + 1},${col + 1})` : t('multipleCells');
    const value = technique.value || '';
    
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
        : t('relatedCells');
      
      steps.push(
        { step: 1, description: t('findTripleInRegion', { regionType: regionType, regionNum: regionNum }), highlight: '' },
        { step: 2, description: t('foundNakedTriple', { numbers: tripleNumbers, cells: formattedCells }), highlight: position },
        { step: 3, description: t('removeCandidatesFromTargets', { numbers: tripleNumbers, targets: formattedTargetCells }), highlight: position }
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
    
    // 对于候选数唯一法、隐性唯一数法和唯一数法，在第一、二页高亮目标单元格和相应区域
    if (setHighlightedCells && selectedTechnique && hasSingleCell && 
        ['nakedSingle', 'hiddenSingleRow', 'hiddenSingleCol', 'hiddenSingleBox', 'notesSingle'].includes(selectedTechnique.type)) {
      
      // 在第一页或第二页时，高亮目标单元格和相应区域
      if (newPage === 0 || newPage === 1) {
        const cellsToHighlight = [];
        
        // 添加目标单元格
        cellsToHighlight.push({
          row: row,
          col: col,
          techniqueIndicator: true,
          number: value,
          isTarget: true
        });
        
        // 根据技巧类型确定高亮区域
        if (selectedTechnique.type === 'hiddenSingleRow') {
          // 行隐性唯一数法：仅高亮目标单元格的行
          for (let c = 0; c < 9; c++) {
            if (c !== col) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                highlightType: 'row'
              });
            }
          }
        } else if (selectedTechnique.type === 'hiddenSingleCol') {
          // 列隐性唯一数法：仅高亮目标单元格的列
          for (let r = 0; r < 9; r++) {
            if (r !== row) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                highlightType: 'col'
              });
            }
          }
        } else if (selectedTechnique.type === 'hiddenSingleBox') {
          // 宫隐性唯一数法：仅高亮目标单元格的宫
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              if (r !== row || c !== col) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  highlightType: 'box'
                });
              }
            }
          }
        } else {
          // 候选数唯一法和唯一数法：保持原有逻辑，高亮所有区域
          // 添加目标单元格所在的整行
          for (let c = 0; c < 9; c++) {
            if (c !== col) {
              cellsToHighlight.push({
                row: row,
                col: c,
                techniqueIndicator: true,
                highlightType: 'row'
              });
            }
          }
          
          // 添加目标单元格所在的整列
          for (let r = 0; r < 9; r++) {
            if (r !== row) {
              cellsToHighlight.push({
                row: r,
                col: col,
                techniqueIndicator: true,
                highlightType: 'col'
              });
            }
          }
          
          // 添加目标单元格所在的整宫
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
            for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
              if (r !== row || c !== col) {
                cellsToHighlight.push({
                  row: r,
                  col: c,
                  techniqueIndicator: true,
                  highlightType: 'box'
                });
              }
            }
          }
        }
        
        setHighlightedCells(cellsToHighlight);
      } else {
        // 第三页只高亮目标单元格
        setHighlightedCells([{
          row: row,
          col: col,
          techniqueIndicator: true,
          number: value,
          isTarget: true
        }]);
      }
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
      
      // 基础辅助函数 - 对应techniqueIndicator.js的高亮类型
      const pushPrimaryCell = (r, c, num = null, notesToRemove = []) => {
        cellsToHighlight.push({
          row: r,
          col: c,
          techniqueIndicator: true,
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
            const exists = cellsToHighlight.some(c => c.row === r && c.col === c);
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
            const exists = cellsToHighlight.some(c => c.row === r && c.col === c);
            if (!exists) {
              pushSecondaryCell(r, c, technique.number);
            }
          }
        });
      }
      
      // 3. 处理单一单元格技巧的特殊情况
      if (hasSingleCell && typeof row === 'number' && typeof col === 'number') {
        // 检查目标单元格是否已经高亮
        const targetExists = cellsToHighlight.some(c => c.row === row && c.col === col);
        
        if (!targetExists) {
          pushPrimaryCell(row, col, value);
        }
        
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
            const existingIndex = cellsToHighlight.findIndex(c => c.row === r && c.col === c);
            
            if (existingIndex !== -1) {
              cellsToHighlight[existingIndex].highlightType = 'primary';
              cellsToHighlight[existingIndex].isTarget = true;
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
    if (selectedTechnique) {
      const success = applyTechniqueToBoard(selectedTechnique);
      if (success) {
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
    }
  };

  return (
    <div className="control-panel" style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
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
                color: activeTab === 'keyboard' ? '#3498db' : '#333',
                cursor: 'pointer',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                transition: 'background-color 0.3s, color 0.3s'
              }}
              onClick={() => setActiveTab('keyboard')}
          >
            {t('keyboard')}
          </button>
          <button 
              style={{
                flex: 1,
                padding: '4px 8px',
                backgroundColor: activeTab === 'techniques' ? '#3498db15' : 'transparent',
                border: 'none',
                borderRadius: '4px 4px 0 0',
                color: activeTab === 'techniques' ? '#3498db' : '#333',
                cursor: 'pointer',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                transition: 'background-color 0.3s, color 0.3s'
              }}
              onClick={() => {
                setActiveTab('techniques');
              }}
          >
            {t('techniques')}
          </button>
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
                // 横屏布局：保持原有的九宫格布局
                <div className="number-pad" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', width: '100%', maxHeight: '100%', overflow: 'visible', padding: '4px', boxSizing: 'border-box' }}>
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
                       
                      // 尺寸控制
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
                       
                      // 尺寸控制
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
                      width="24" 
                      height="24" 
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
                       
                      // 尺寸控制
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
          
          {activeTab === 'techniques' && (
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
                      primaryType = t('nakedPairs');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type === 'hiddenPairs' || technique.type === 'hidden_pairs' || technique.type.includes('hiddenPair')) {
                      primaryType = t('hiddenPairs');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type.includes('nakedTriple')) {
                      primaryType = t('nakedTriple');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type.includes('hiddenTriple')) {
                      primaryType = t('hiddenTriple');
                      // 根据类型确定是行/列/宫
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      } else if (technique.type.includes('Box')) {
                        secondaryType = t('boxSuffix');
                      }
                    } else if (technique.type.includes('pointingPairs')) {
                      primaryType = t('pointingPairs');
                      // 根据类型确定是行/列
                      if (technique.type.includes('Row')) {
                        secondaryType = t('rowSuffix');
                      } else if (technique.type.includes('Col')) {
                        secondaryType = t('colSuffix');
                      }
                    } else if (technique.type.includes('boxLineReduction')) {
                      primaryType = t('boxLineReduction');
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
                  let shouldFindTechniques = true;
                  
                  // 首先检查是否需要重新计算候选数
                  if (calculateTechniques) {
                    // calculateTechniques函数在特定条件下会返回false，表示不需要查找技巧
                    const result = calculateTechniques();
                    if (result === false) {
                      shouldFindTechniques = false;
                    }
                  }
                  
                  // 如果需要，执行候选数填充
                  if (shouldFindTechniques && fillAllCandidates) {
                    fillAllCandidates();
                  }
                  
                  // 只有在需要时才加载所有技巧求解
                  if (shouldFindTechniques) {
                    findTechniques();
                    // 切换到技巧标签页，方便用户查看结果
                    setActiveTab('techniques');
                  }
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
          
          {activeTab === 'solution' && (
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
                                        onClick={handleApplyTechnique}
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
                                        {t('apply')}
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
    </div>
  );
};

export default ControlPanel;