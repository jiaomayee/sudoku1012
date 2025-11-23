import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

// 棋盘容器样式 - 进一步优化，确保完全控制边界
const BoardContainer = styled.div.attrs({ className: 'sudoku-board' })`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border-radius: var(--border-radius, 8px);
  background-color: #ffffff; /* 使用纯白色背景 */
  position: relative;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden !important;
  z-index: 1;
  grid-gap: 0;
  // 取消棋盘四周的蓝线，使用无边框设计
  border: none;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  
  // 移除悬停效果，避免干扰
  &:hover {
    border-color: ${props => props.theme?.border || '#3498db'};
  }
`;

// 单元格基础样式 - 优化性能，移除高消耗的磨砂玻璃效果
const Cell = styled.div`
  position: relative; /* 为绝对定位的子元素（HintsLayer）提供定位基准 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--board-width) * 0.08);
  font-weight: 500;
  cursor: pointer;
  /* 进一步优化性能：简化样式 */
  background: #ffffff; /* 纯色背景 */
  border-right: 0.5px solid #e0e0e0; /* 只设置右边框 */
  border-bottom: 0.5px solid #e0e0e0; /* 只设置下边框 */
  border-top: none;
  border-left: none;
  color: #3498db; /* 修改为蓝色，用于用户输入的数字 */
  transition: none; /* 移除过渡效果以提升性能 */
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
  height: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: 0;
    
    /* 保留3x3子网格之间的分隔线，但使用更明确的样式 */
     /* 处理列方向的网格分隔线 - 移除none设置，让分隔线显示 */
     /* 处理行方向的网格分隔线 - 移除none设置，让分隔线显示 */

  /* 基础样式类 - 优化性能，移除高消耗的磨砂玻璃效果 */
  &.prefilled {
    cursor: default;
    color: ${props => props.theme?.textOriginal || '#666666'};
    font-weight: 400; /* 将预填数字字体调整为较细 */
    /* 使用与空白单元格相同的白色底色 */
    background: #ffffff;
    /* 移除边框定义，让预填单元格继承基础单元格的边框设置 */
  }
  
  &.highlighted {
    /* 使用纯色背景 */
    background: #64B5F6 !important; /* 保持现有蓝色背景 */
    color: #666666 !important; /* 修改为灰色字体 */
    border: 1px solid transparent; /* 保持边框一致性 */
    opacity: 1; /* 确保完全不透明 */
    box-sizing: border-box !important; /* 使用border-box确保尺寸正确 */
    box-shadow: inset 0 0 0 2px white; /* 创建2px宽的内部白边 */
  }
  
  /* 非基础技巧水标 - 浅化错务 */
  &.advanced-technique-highlight {
    background: rgba(100, 181, 246, 0.3) !important; /* 半透明蓝色 */
    color: #666666 !important;
    opacity: 1;
    box-sizing: border-box !important;
    border: 1px solid #64B5F6 !important; /* 蓝色边框 */
  }
  

  
  /* 基础选中状态样式 - 确保在所有设备上的高对比度和可见性 */
  &.selected {
    /* 使用与.same-number和.highlighted类一致的高亮颜色 */
    background: #64B5F6 !important; /* 与highlighted状态完全一致的蓝色 */
    color: white !important; /* 一直保持白色字体 */
    z-index: 2;
    /* 使用更明显的边框 */
    border: 2px solid #42A5F5 !important;
    font-weight: bold !important; /* 使用粗体增强可读性 */
    /* 确保在所有平台上的渲染一致性 */
    -webkit-tap-highlight-color: transparent;
  }
  
  /* 普通选中状态 - 与基础选中状态保持一致 */
  &.normal-selected {
    background: #64B5F6 !important;
    color: white !important; /* 一直保持白色字体 */
    border: 2px solid #42A5F5 !important;
    font-weight: bold !important; /* 使用粗体增强可读性 */
  }
  
  /* 铅笔模式选中状态 */
  &.pencil-selected {
    background: #0097a7 !important;
    color: white !important; /* 一直保持白色字体 */
    border: 2px solid #00796b !important;
    font-weight: bold !important; /* 使用粗体增强可读性 */
  }
  
  &.error,
  &.incorrect {
    color: ${props => props.theme?.error || '#e74c3c'}; /* 使用更浅的红色 */
    /* 只保留红色文本，不改变背景色 */
  }
  
  /* 确保错误数字没有阴影效果，并保持红色文字 */
  &.error,
  &.incorrect {
    color: ${props => props.theme?.error || '#e74c3c'} !important; /* 使用更浅的红色 */
    text-shadow: none !important;
  }
  
  /* 确保选中状态下的错误单元格显示红色文字，无阴影，且取消选中底色 */
  &.selected.error,
  &.selected.incorrect,
  &.normal-selected.error,
  &.normal-selected.incorrect,
  &.pencil-selected.error,
  &.pencil-selected.incorrect {
    color: ${props => props.theme?.error || '#e74c3c'} !important; /* 使用更浅的红色 */
    text-shadow: none !important;
    background-color: transparent !important; /* 取消选中底色 */
    border-color: ${props => props.theme?.error || '#e74c3c'} !important; /* 使用错误颜色作为边框 */
  }
  
  &.same-number {
    /* 使用纯色背景 */
    background: #90CAF9; /* 保持现有浅蓝色背景 */
    color: #666666 !important; /* 修改为灰色字体 */
    border: 1px solid transparent; /* 保持边框一致性 */
    box-sizing: border-box !important; /* 使用border-box确保尺寸正确 */
    box-shadow: inset 0 0 0 2px white; /* 创建2px宽的内部白边 */
  }
  


  &.same-region {
    /* 优化性能：使用纯色背景 */
    background: #e8f4fd;
  }
  
  &.same-note {
    /* 优化性能：使用纯色背景 */
    background: #fff3cd;
  }
  
  &.technique-indicator {
    /* 优化性能：使用纯色背景 */
    background: #ffeaa7;
  }

  /* 优化边缘单元格处理，确保棋盘边缘完整 */
  ${props => props.$row === 0 && `border-top: none;`}
  ${props => props.$row === 8 && `border-bottom: none;`}
  ${props => props.$col === 0 && `border-left: none;`}
  ${props => props.$col === 8 && `border-right: none;`}
  
  /* 简化角落单元格处理，仅保留基本圆角 */
  ${props => props.$row === 0 && props.$col === 0 && `border-radius: var(--border-radius, 8px) 0 0 0;`}
  ${props => props.$row === 0 && props.$col === 8 && `border-radius: 0 var(--border-radius, 8px) 0 0;`}
  ${props => props.$row === 8 && props.$col === 0 && `border-radius: 0 0 0 var(--border-radius, 8px);`}
  ${props => props.$row === 8 && props.$col === 8 && `border-radius: 0 0 var(--border-radius, 8px) 0;`}
  
  /* 确保所有状态下圆角正确应用 */
  ${props => props.$row === 8 && props.$col === 0 && `overflow: hidden;`}
  ${props => props.$row === 8 && props.$col === 8 && `overflow: hidden;`}
  
  /* 3x3子网格分隔线 - 使用0.5px深色实线 */
  ${props => (props.$col === 2 || props.$col === 5) && `border-right: 0.5px solid #333333;`}
  ${props => (props.$row === 2 || props.$row === 5) && `border-bottom: 0.5px solid #333333;`}
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:not(.prefilled):not(.selected):not(.normal-selected):not(.pencil-selected):hover {
      background-color: ${props => (props.theme?.primary || '#3498db') + '15'} !important;
    }
    
    // 更加强化的选中状态悬停规则 - 直接指定颜色值而不是使用inherit
    &.selected:hover:not(.error):not(.incorrect) {
      background-color: #42a5f5 !important; /* 直接使用与.selected相同的颜色值 */
      color: white !important; /* 确保文字颜色也不变 */
      border-color: #1e88e5 !important; /* 确保边框颜色也不变 */
    }
    
    &.normal-selected:hover:not(.error):not(.incorrect) {
      background-color: #42a5f5 !important;
      color: white !important;
      border-color: #1e88e5 !important;
    }
    
    &.pencil-selected:hover:not(.error):not(.incorrect) {
      background-color: #0097a7 !important;
      color: white !important;
      border-color: #00796b !important;
    }
    
    // 确保错误单元格在悬停时保持红色文字，且不显示选中底色
    &.selected:hover.error,
    &.selected:hover.incorrect,
    &.normal-selected:hover.error,
    &.normal-selected:hover.incorrect,
    &.pencil-selected:hover.error,
    &.pencil-selected:hover.incorrect {
      color: ${props => props.theme?.error || '#e74c3c'} !important;
      text-shadow: none !important;
      background-color: transparent !important; /* 悬停时也不显示选中底色 */
      border-color: ${props => props.theme?.error || '#e74c3c'} !important; /* 使用错误颜色作为边框 */
    }
    
    // 额外添加:focus和:active状态以确保在所有交互情况下保持选中效果
    &.selected:focus,
    &.selected:active,
    &.normal-selected:focus,
    &.normal-selected:active,
    &.pencil-selected:focus,
    &.pencil-selected:active {
      background-color: inherit !important; /* 保持原有选中背景色 */
      color: white !important;
      border-color: inherit !important;
    }
  }
  
  // 触摸反馈和选中状态优化
  &:active {
    transform: scale(0.97);
  }
  
  /* 增强触摸设备的选中效果 - 使用更通用的移动设备检测方案 */
  @media (hover: none) {
    /* 确保选中状态在所有触摸设备上有更强的视觉反馈 */
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      /* 移除可能导致渲染不一致的过渡效果 */
      transition: none;
      /* 增加更明显的内阴影，确保在所有设备上都有突出显示 */
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8);
      /* 添加更强的外阴影，增强立体效果 */
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 8px rgba(0, 0, 0, 0.2);
      /* 增强边框效果 */
      border-width: 3px !important;
    }
    
    /* 触摸设备上的活动状态 */
    &:active {
      /* 使用缩放效果提供即时反馈 */
      transform: scale(0.97);
      /* 确保所有浏览器兼容性 */
      -webkit-transform: scale(0.97);
      -moz-transform: scale(0.97);
      -ms-transform: scale(0.97);
    }
  }
  
  /* 针对特定移动设备视口的优化 */
  @media screen and (max-width: 768px) and (orientation: portrait),
         screen and (max-height: 768px) and (orientation: landscape) {
    /* 增加选中状态的对比和可见性 */
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      /* 调整边框宽度以适应小屏幕 */
      border-width: 2.5px !important;
      /* 增加阴影强度 */
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.9), 0 0 6px rgba(0, 0, 0, 0.3);
    }
  }
  
  /* 横屏模式下增强选中单元格的白色边框 */
  @media screen and (orientation: landscape) {
    /* 为选中的单元格添加白色边框 */
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      box-shadow: inset 0 0 0 3px white; /* 使用内阴影创建白色边框效果 */
    }
  }
  
  /* 小屏幕横屏模式下调整选中单元格的白色边框 */
  @media screen and (max-height: 768px) and (orientation: landscape) {
    &.selected,
    &.normal-selected,
    &.pencil-selected {
      box-shadow: inset 0 0 0 2.5px white; /* 调整白色边框宽度 */
    }
  }
  
  // 统一的字体大小设置，适用于所有屏幕尺寸
  font-size: calc(var(--board-width) * 0.08);
  min-height: 36px;
  
  // 仅调整非常大屏幕的字体大小以避免文字过大
  @media (min-width: 1200px) and (min-height: 900px) {
    font-size: calc(var(--board-width) * 0.075);
  }
  
  // 仅调整非常小屏幕的字体大小
  @media (max-width: 480px) {
    font-size: calc(var(--board-width) * 0.07);
  }
`;

// 原始的铅笔模式数字标注组件 - 恢复高亮功能
const PencilNotes = ({ notes = [], highlightedNumber = null, selected = false, targetCandidateNumber = null }) => {
  // 确保notes是数组且不为null或undefined
  const activeNotes = Array.isArray(notes) ? notes : [];
  
  // 容器样式 - 使用grid布局实现9宫格
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  };
  
  // 每个数字位置的基础样式
  const baseItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // 动态计算字体大小，使用相对单位
    fontSize: 'calc(var(--board-width) * 0.025)',
    fontWeight: '500',
    color: selected ? '#ffffff' : '#4A6FA5', // 选中时显示白色，非选中时显示正常颜色
    // 确保单元格内有适当的内边距
    padding: '1px'
  };
  
  // 高亮候选数的样式 - 与数字按钮颜色保持一致
  const highlightedItemStyle = {
    backgroundColor: '#42a5f5',
    color: 'white',
    borderRadius: '4px', // 改为矩形背景，使用4px圆角
    fontWeight: 'bold',
    width: '80%',
    height: '80%',
    // 确保高亮数字在背景中心
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0' // 重置内边距，确保居中效果
  };
  
  // 候选数唯一法的绿色圆形高亮样式
  const targetCandidateStyle = {
    backgroundColor: '#4CAF50', // 绿色背景
    color: 'white', // 白色字体
    borderRadius: '50%', // 圆形背景
    fontWeight: 'bold',
    width: '80%',
    height: '80%',
    aspectRatio: '1', // 确保是正圆
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0'
  };
  
  return (
    <div style={containerStyle}>
      {/* 渲染所有9个位置的固定容器，确保位置固定不变 */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
        // 计算每个数字在网格中的位置
        const col = ((number - 1) % 3);
        const row = Math.floor((number - 1) / 3);
        
        // 判断该数字是否在活跃候选数列表中
        const isActive = activeNotes.includes(number);
        
        // 判断是否需要高亮此候选数
        const isHighlighted = highlightedNumber && number === highlightedNumber;
        
        // 判断是否为候选数唯一法的目标候选数（绿色圆形高亮）
        const isTargetCandidate = targetCandidateNumber && number === targetCandidateNumber;
        
        return (
          <div
            key={number}
            style={{
              ...baseItemStyle,
              gridColumn: col + 1,
              gridRow: row + 1,
              // 根据位置添加特定边距调整
              paddingTop: row === 0 ? '2px' : '1px', // 第一行(123)增大上边距
              // 竖屏模式下第三行(789)增加额外1px下边距
              paddingBottom: row === 2 ? (window.innerHeight > window.innerWidth ? '3px' : '2px') : '1px', // 第三行(789)增大下边距
              paddingLeft: col === 0 ? '2px' : '1px', // 第一列(147)增大左边距
              paddingRight: col === 2 ? '2px' : '1px', // 第三列(369)增大右边距
              // 优先应用候选数唯一法的绿色圆形高亮
              ...(isActive && isTargetCandidate ? targetCandidateStyle : 
                  // 其次应用普通高亮样式
                  isActive && isHighlighted ? highlightedItemStyle : {}),
              // 非活跃候选数的透明度设为0，保持布局但不显示
              opacity: isActive ? 1 : 0
            }}
          >
            {isActive && number}
          </div>
        );
      })}
    </div>
  );
};

// 独立的技巧指示层组件 - 使用DOM叠加方式实现，完全独立于原系统
const HintsLayer = ({ highlightedNumber = null }) => {
  // 如果没有需要高亮的数字，不渲染任何内容
  if (!highlightedNumber || highlightedNumber === 0 || highlightedNumber === 'error') {
    return null;
  }
  
  // 容器样式 - 使用绝对定位覆盖在单元格上
  const containerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // 确保不影响原有交互
    zIndex: 100 // 提高zIndex确保在最上层
  };
  
  // 数字显示样式 - 白色大字体，与棋盘预填数字相同大小
  const hintStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(var(--board-width) * 0.08)', // 与棋盘数字大小一致
    fontWeight: '400', // 与预填数字相同字重
    color: '#FFFFFF', // 白色字体
    zIndex: 101 // 确保数字在最前面
    // 不使用阴影和背景，按用户要求
  };
  
  return (
    <div style={containerStyle}>
      <div style={hintStyle}>
        {highlightedNumber}
      </div>
    </div>
  );
};

// JS逻辑函数
const SudokuBoard = ({ board, selectedCell, onCellClick, originalPuzzle, isPencilMode, pencilNotes, incorrectCells, highlightedCells }) => {
  const { theme } = useTheme();
  
  // 使用传入的board数据，如果为空则使用空的9x9数组作为备选
  const displayBoard = board || Array(9).fill().map(() => Array(9).fill(0));
  const displayOriginalPuzzle = originalPuzzle || Array(9).fill().map(() => Array(9).fill(0));
  // 确保pencilNotes对象存在
  const displayPencilNotes = pencilNotes || {};
  // 确保incorrectCells集合存在
  const displayIncorrectCells = incorrectCells || new Set();
  
  // 单元格属性判断逻辑
  const isCellPrefilled = (value, row, col) => {
    // 使用displayOriginalPuzzle来判断预填数字
    if (displayOriginalPuzzle && displayOriginalPuzzle[row] && displayOriginalPuzzle[row][col] !== null && displayOriginalPuzzle[row][col] !== 0) {
      return true;
    }
    // 默认不标记为预填
    return false;
  };
  
  const isCellError = (value) => {
    return value === 'error';
  };
  
  // 检查单元格是否为错误单元格
  const isCellIncorrect = (row, col) => {
    const cellKey = `${row}-${col}`;
    // 使用displayIncorrectCells来检查错误单元格
    if (displayIncorrectCells instanceof Set) {
      return displayIncorrectCells.has(cellKey);
    }
    // 兼容数组格式
    if (Array.isArray(displayIncorrectCells)) {
      return displayIncorrectCells.some(cell => cell.row === row && cell.col === col);
    }
    return false;
  };
  
  // 获取单元格所在的宫索引
  const getBoxIndex = (row, col) => {
    return Math.floor(row / 3) * 3 + Math.floor(col / 3);
  };
  
  // 检查两个单元格是否在同一行、同一列或同一宫
  const isSameRegion = (row1, col1, row2, col2) => {
    return row1 === row2 || col1 === col2 || getBoxIndex(row1, col1) === getBoxIndex(row2, col2);
  };
  
  // 生成单元格的CSS类名
  const getCellClasses = (row, col, value) => {
    const classes = [];
    const cellKey = `${row}-${col}`;
    const currentCellNotes = displayPencilNotes[cellKey] || [];
    
    // 基础状态类
    if (isCellPrefilled(value, row, col)) classes.push('prefilled');
    if (isCellError(value) || isCellIncorrect(row, col)) classes.push('error');
    
    // 检查是否在高亮单元格列表中
    if (!selectedCell && highlightedCells && Array.isArray(highlightedCells)) {
      const currentCellData = highlightedCells.find(cell => cell.row === row && cell.col === col);
      
      // 如果是区域高亮单元格，添加same-region样式
      if (currentCellData && currentCellData.regionHighlight) {
        classes.push('same-region');
      } else if (currentCellData) {
        // 判断是否为基础技巧
        const isBasicTechnique = currentCellData.techniqueType && (
          currentCellData.techniqueType === 'nakedSingle' ||
          currentCellData.techniqueType === 'notesSingle' ||
          currentCellData.techniqueType.includes('hiddenSingle')
        );
        
        // 基础技巧使用原始 highlighted 类，非基础技巧使用 advanced-technique-highlight 类
        if (isBasicTechnique) {
          classes.push('highlighted');
        } else {
          classes.push('advanced-technique-highlight');
        }
      }
    }
    
    // 选中状态和相关高亮
    if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
      classes.push('selected');
      classes.push(isPencilMode ? 'pencil-selected' : 'normal-selected');
    } else if (selectedCell) {
      const selectedValue = displayBoard[selectedCell.row][selectedCell.col];
      const selectedCellKey = `${selectedCell.row}-${selectedCell.col}`;
      const selectedCellNotes = displayPencilNotes[selectedCellKey] || [];
      
      // 高亮相同数字的单元格
      if (value && value === selectedValue) {
        classes.push('same-number');
      }
      
      // 移除高亮相同候选数的功能，避免多个单元格背景变黄
      // 注释掉以下代码，因为根据软件要求，不需要这个逻辑
      /*
      if (currentCellNotes.length > 0 && selectedCellNotes.length > 0) {
        const hasCommonNote = currentCellNotes.some(note => selectedCellNotes.includes(note));
        if (hasCommonNote) {
          classes.push('same-note');
        }
      }
      */
      
      // 高亮同行、同列、同宫的单元格
      if (isSameRegion(row, col, selectedCell.row, selectedCell.col)) {
        classes.push('same-region');
      }
    }
    
    return classes.join(' ');
  };
  
  // 通用单元格交互处理函数 - 简化实现，提高兼容性
  const handleCellInteraction = (row, col, event) => {
    // 防止事件冒泡和默认行为，确保跨设备一致性
    if (event) {
      event.stopPropagation();
      // 对于触摸事件，我们阻止默认行为来避免潜在的滚动问题
      if (event.type === 'touchstart') {
        event.preventDefault();
      }
    }
    
    if (onCellClick) {
      onCellClick(row, col);
    }
  };
  
  return (
    <BoardContainer theme={theme}>
      {displayBoard.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          const cellClasses = getCellClasses(rowIndex, colIndex, value);
          const cellKey = `${rowIndex}-${colIndex}`;
          const cellNotes = displayPencilNotes[cellKey] || [];
          const hasNotes = cellNotes.length > 0;
          
          // 计算是否需要高亮数字（单元格数字和候选数）
          let highlightedNumber = null; // 用于高亮候选数
          let targetCandidateNumber = null; // 候选数唯一法的目标候选数
          let displayTargetNumber = null; // 技巧指示要显示的数字
          let isTechniqueTarget = false; // 是否为技巧目标单元格
          
          // 逻辑1：检查是否为技巧指示的目标单元格（优先级最高）
          if (highlightedCells && Array.isArray(highlightedCells) && highlightedCells.length > 0) {
            // 查找当前单元格在highlightedCells中的数据
            const currentCellData = highlightedCells.find(cell => cell.row === rowIndex && cell.col === colIndex);
            
            // 如果当前单元格是目标单元格且有targetNumber，显示该数字
            if (currentCellData && currentCellData.isTarget && currentCellData.targetNumber) {
              displayTargetNumber = currentCellData.targetNumber;
              isTechniqueTarget = true;
              
              // 如果是候选数唯一法，记录目标候选数用于绿色圆形高亮
              if (currentCellData.techniqueType === 'notesSingle') {
                targetCandidateNumber = currentCellData.targetNumber;
              }
            }
          }
          
          // 逻辑2：选中预填入和用户填入正确数字的单元格时，相同数字的单元格和相同数字的候选数高亮
          // 只有在不是技巧目标单元格时才应用此逻辑
          if (!isTechniqueTarget && selectedCell && 
              selectedCell.row !== undefined && 
              selectedCell.col !== undefined && 
              displayBoard[selectedCell.row] && 
              displayBoard[selectedCell.row][selectedCell.col]) {
              
            const selectedCellValue = displayBoard[selectedCell.row][selectedCell.col];
            
            // 如果选中单元格有有效数字
            if (selectedCellValue !== 0 && selectedCellValue !== 'error') {
              highlightedNumber = selectedCellValue;
            }
          }
          
          // 生成通用的事件处理函数引用，减少重复代码
          const interactionHandler = (e) => handleCellInteraction(rowIndex, colIndex, e);
          
          return (
              <Cell
                key={cellKey}
                $row={rowIndex}
                $col={colIndex}
                className={cellClasses}
                onClick={interactionHandler}
                onTouchStart={interactionHandler}
                onMouseDown={interactionHandler} // 添加鼠标按下事件以增强桌面端交互
                style={{
                  touchAction: 'manipulation', // 优化移动设备交互
                  userSelect: 'none' // 防止文本选择
                }}
                theme={theme}
              >
                {value && value !== 0 && value !== 'error' ? (
                  value
                ) : (
                  // 单元格内容渲染
                  <>
                    {/* 候选数系统 */}
                    {hasNotes && (
                      <PencilNotes 
                        notes={cellNotes} 
                        highlightedNumber={highlightedNumber} 
                        selected={selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex}
                        targetCandidateNumber={targetCandidateNumber}
                      />
                    )}
                    {/* 技巧指示数字 - 用白色显示 */}
                    {displayTargetNumber && (
                      <HintsLayer highlightedNumber={displayTargetNumber} />
                    )}
                  </>
                )}
              </Cell>
            );
        })
      )}
    </BoardContainer>
  );
};

export default SudokuBoard;