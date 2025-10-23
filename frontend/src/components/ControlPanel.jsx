import React, { useState, useEffect, useCallback } from 'react';
// 移除styled-components导入
import { useTheme } from '../context/ThemeContext';
import { useSudoku } from '../context/SudokuContext';
import { useLanguage } from '../context/LanguageContext';

// 候选数图标组件（从NavigationBlock复制并修改为白色）
const NotesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    {/* 数独格子背景 */}
    <rect x="4" y="4" width="16" height="16" rx="2" fill="transparent" stroke="white" strokeWidth="1.5"/>
    {/* 添加2x2网格分割线 */}
    <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="1" strokeDasharray="1"/>
    <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="1" strokeDasharray="1"/>
    {/* 显示两个数字：2（左上角）和5（右下角） */}
    <text x="7" y="10" fontSize="6" fontWeight="bold" fill="white">2</text>
    <text x="15" y="18" fontSize="6" fontWeight="bold" fill="white">5</text>
  </svg>
);

// 获取技巧显示名称
// 获取技巧显示名称
const getTechniqueDisplayType = (primaryType, secondaryType) => {
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

// 清理所有残留的CSS代码

// 清理所有残留的styled-components定义
  
// 清理所有残留的styled-components定义

// 清理所有残留的styled-components定义

const ControlPanel = ({ 
  onNumberSelect, 
  onClearCell,
  onUndo,
  togglePencilMode,
  fillAllCandidates,
  selectedNumber,
  isPencilMode,
  remainingNumbers = {} // 添加剩余数字数量属性，默认为空对象
}) => {
  // 检测是否为竖屏模式
  const isVerticalMode = () => {
    return window.innerWidth < 768 && window.innerHeight > window.innerWidth;
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
    setTechniqueSteps([]);
  }, [setHighlightedCells]);
  
  // 监听选中单元格的变化，当用户点击单元格时退出技巧模式
  useEffect(() => {
    if (selectedCell && activeTab !== 'keyboard') {
      exitTechniqueMode();
    }
  }, [selectedCell, activeTab, exitTechniqueMode]);
  
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
      if (regionType === '行' && regionNum > 0) {
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
      } else if (regionType === '列' && regionNum > 0) {
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
      } else if (regionType === '宫' && regionNum > 0) {
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
    } else {
        // 通用解题步骤，确保至少有内容显示
        steps.push(
          { step: 1, description: t('applyTechnique', { technique: t(technique.description) || technique.type }), highlight: '' },
        { step: 2, description: t('relatedPosition', { position: position }), highlight: position },
        { step: 3, description: value ? t('relatedNumber', { number: value }) : t('analysisCompleted'), highlight: position }
      );
    }
    
    setTechniqueSteps(steps);
    
    // 设置技巧指示高亮 - 使用真实的技巧机会数据
    if (setHighlightedCells) {
      // 从技巧对象中提取候选数信息
      const notes = technique.notes || (Array.isArray(technique.cells) && technique.cells.length > 0 ? [value] : []);
      
      // 处理不同类型的技巧高亮
      if (hasSingleCell) {
        // 单一单元格技巧
        setHighlightedCells([{
          row: row,
          col: col,
          techniqueIndicator: true,
          number: value,
          notes: notes // 添加notes属性，用于候选数高亮显示
        }]);
      } else if (Array.isArray(technique.cells)) {
        // 多单元格技巧（如数对、三链数等）
        const highlightCells = technique.cells.map(cell => ({
          row: cell.row,
          col: cell.col,
          techniqueIndicator: true,
          number: cell.value || value,
          notes: cell.notes || notes
        }));
        setHighlightedCells(highlightCells);
      } else {
        // 默认空高亮
        setHighlightedCells([]);
      }
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
      height: window.innerWidth <= 576 ? 'auto' : 'var(--board-width)',
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
                borderRadius: '6px 6px 0 0',
                fontSize: '14px',
                fontWeight: activeTab === 'keyboard' ? '700' : '500',
                color: activeTab === 'keyboard' ? '#3498db' : '#7f8c8d',
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
                // 点击键盘标签页，退出技巧模式
                exitTechniqueMode();
              }}
            >
              {t('keyboardTab')}
            </button>
            <button 
              style={{
                flex: 1,
                padding: '4px 8px',
                backgroundColor: activeTab === 'techniques' ? '#3498db15' : 'transparent',
                border: 'none',
                borderRadius: '6px 6px 0 0',
                fontSize: '14px',
                fontWeight: activeTab === 'techniques' ? '700' : '500',
                color: activeTab === 'techniques' ? '#3498db' : '#7f8c8d',
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
                setActiveTab('techniques');
                // 取消选中单元格，进入技巧模式
                if (setSelectedCell) {
                  setSelectedCell(null);
                }
              }}
            >
              {t('techniquesTab')}
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
              }}
            >
              {t('solutionTab')}
            </button>
        </div>
        
        {/* 标签页内容 */}
          <div style={{
            flex: 1,
            padding: '4px 0',
            overflow: 'hidden',
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', marginBottom: '8px' }}>
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' }}>
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
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
                    title="撤回"
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
                    title="清空单元格"
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
                    title={isPencilMode ? "退出铅笔模式" : "进入铅笔模式"}
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
                    else {
                      positionText = '(未知位置)';
                    }
                    
                    // 根据技巧类型确定一级分类和二级类型
                    let primaryType = '';
                    let secondaryType = '';
                    
                    if (technique.type === 'nakedSingle' || technique.type === 'naked_single') {
                      primaryType = t(technique.description || 'singleCandidateTechnique');
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
                    } else {
                      // 如果是未知类型，使用原始描述
                      primaryType = technique.description || t('unknownTechnique');
                    }
                    
                    // 直接使用primaryType作为显示类型，因为已经包含了行/列/宫信息
                    const displayType = primaryType + secondaryType;
                    
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
                          transition: 'all 0.2s ease'
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: '#34495e' }}>
                          <span>{displayType}</span>
                          <span style={{ fontSize: '14px', color: '#7f8c8d', fontWeight: 'normal' }}>{t('position')}: {positionText}{valueText}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <button 
                onClick={() => {
                  // 核心功能：刷新候选数
                  if (fillAllCandidates) {
                    fillAllCandidates();
                  }
                  // 加载所有技巧求解
                  findTechniques();
                  // 切换到技巧标签页，方便用户查看结果
                  setActiveTab('techniques');
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
            <div style={{ overflowY: 'auto', padding: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h4 style={{ margin: 0, color: '#34495e', fontSize: '16px', fontWeight: '600' }}>
                  {t('solutionSteps')}
                </h4>
                {selectedTechnique && (
                  <button 
                    onClick={handleApplyTechnique}
                    style={{
                      width: verticalMode ? '70px' : '100px',
                      height: verticalMode ? '24px' : '36px',
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: verticalMode ? '12px' : '16px',
                      padding: verticalMode ? '2px 4px' : '4px 8px',
                      whiteSpace: 'nowrap',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: verticalMode ? '0 1px 2px rgba(52, 152, 219, 0.3), 0 1px 1px rgba(0, 0, 0, 0.1)' : '0 4px 8px rgba(52, 152, 219, 0.4), 0 2px 4px rgba(0, 0, 0, 0.15)',
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
                    {t('applyTechnique')}
                  </button>
                )}
              </div>
              {selectedTechnique ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '12px' }}>
                  {techniqueSteps.map((step) => (
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
                  ))}
                </div>
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