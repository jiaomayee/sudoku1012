import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

// 棋盘容器样式 - 按照导航栏风格美化
const BoardContainer = styled.div.attrs({ className: 'sudoku-board' })`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border-radius: 12px;
  background-color: #ffffff; /* 使用纯白色背景 */
  position: relative;
  width: 100% !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 auto !important;
  padding: 0; /* 移除容器内边距，改为在单元格上处理边框 */
  box-sizing: border-box;
  overflow: visible !important;
  z-index: 1;
  grid-gap: 0;
  // 使用多层阴影增加立体感
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.15),
    0 12px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 2px rgba(255, 255, 255, 0.6);
  border: 2px solid ${props => props.theme?.border || '#3498db'};
  transition: all 0.3s ease;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  
  // 增加悬停效果，与导航栏保持一致
  &:hover {
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.15),
      0 12px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }
  
  // 在横屏模式下增加更深的阴影效果
  @media (min-width: 992px) {
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.15),
      0 16px 48px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    
    &:hover {
      box-shadow: 
        0 12px 32px rgba(0, 0, 0, 0.18),
        0 20px 64px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    }
  }
`;

// 单元格基础样式 - 优化性能，移除高消耗的磨砂玻璃效果
const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--board-width) * 0.08);
  font-weight: 500;
  cursor: pointer;
  /* 进一步优化性能：简化样式 */
  background: #ffffff; /* 纯色背景 */
  border: 1px solid #e0e0e0; /* 使用纯色边框替代半透明 */
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
    
    /* 保留3x3子网格之间的分隔线，但使用更明显的样式 */
     /* 处理列方向的网格分隔线 - 移除none设置，让分隔线显示 */
     /* 处理行方向的网格分隔线 - 移除none设置，让分隔线显示 */

  /* 基础样式类 - 优化性能，移除高消耗的磨砂玻璃效果 */
  &.prefilled {
    cursor: default;
    color: ${props => props.theme?.textOriginal || '#666666'};
    font-weight: 400; /* 将预填数字字体调整为较细 */
    /* 使用与空白单元格相同的白色底色 */
    background: #ffffff;
    border-color: rgba(102, 102, 102, 0.3);
  }
  
  &.highlighted {
    /* 优化性能：使用纯色背景 */
    background: #d1ecf1;
    border-color: rgba(52, 152, 219, 0.5);
  }
  
  /* 基础选中状态样式 - 确保在所有设备上的高对比度和可见性 */
  &.selected {
    /* 使用更鲜明的主色调，提高对比度 */
    background: #2196f3 !important; /* 使用Material Design主色，在更多设备上表现一致 */
    color: white !important;
    z-index: 2;
    /* 使用更明显的边框和阴影组合，增强视觉反馈 */
    border: 2px solid #1976d2 !important;
    font-weight: bold;
    /* 确保在所有平台上的渲染一致性 */
    -webkit-tap-highlight-color: transparent;
  }
  
  /* 普通选中状态 - 与基础选中状态保持一致 */
  &.normal-selected {
    background: #2196f3 !important;
    color: white !important;
    border: 2px solid #1976d2 !important;
  }
  
  /* 铅笔模式选中状态 - 略微调整颜色但保持高对比度 */
  &.pencil-selected {
    background: #0097a7 !important; /* 调整为更统一的青色系 */
    color: white !important;
    border: 2px solid #00796b !important;
  }
  
  &.error,
  &.incorrect {
    color: ${props => props.theme?.error || '#cc3333'}; /* 使用暗红色替代亮红色 */
    /* 只保留红色文本，不改变背景色 */
  }
  
  /* 确保错误数字没有阴影效果，并保持红色文字 */
  &.error,
  &.incorrect {
    color: ${props => props.theme?.error || '#cc3333'} !important; /* 使用暗红色替代亮红色 */
    text-shadow: none !important;
  }
  
  /* 确保选中状态下的错误单元格显示红色文字，无阴影 */
  &.selected.error,
  &.selected.incorrect,
  &.normal-selected.error,
  &.normal-selected.incorrect,
  &.pencil-selected.error,
  &.pencil-selected.incorrect {
    color: ${props => props.theme?.error || '#cc3333'} !important; /* 使用暗红色替代亮红色 */
    text-shadow: none !important;
  }
  
  &.same-number {
    /* 优化性能：使用纯色背景 */
    background: #d1ecf1;
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

  /* 边缘单元格处理 */
  ${props => props.row === 0 && `border-top: none;`}
  ${props => props.row === 8 && `border-bottom: none;`}
  ${props => props.col === 0 && `border-left: none;`}
  ${props => props.col === 8 && `border-right: none;`}
  
  /* 四个角落单元格的特殊处理 */
  ${props => props.row === 0 && props.col === 0 && `border-radius: 5px 0 0 0;`}
  ${props => props.row === 0 && props.col === 8 && `border-radius: 0 5px 0 0;`}
  ${props => props.row === 8 && props.col === 0 && `border-radius: 0 0 0 5px;`}
  ${props => props.row === 8 && props.col === 8 && `border-radius: 0 0 5px 0;`}
  
  /* 3x3子网格（宫）之间的分隔 - 使用浅灰色细线 */
  ${props => {
    let borders = '';
    if (props.col % 3 === 0 && props.col > 0) {
      borders += 'border-left: 2px solid #888888 !important;';
    }
    if (props.row % 3 === 0 && props.row > 0) {
      borders += 'border-top: 2px solid #888888 !important;';
    }
    return borders;
  }}
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:not(.prefilled):not(.selected):not(.normal-selected):not(.pencil-selected):hover {
      background-color: ${props => (props.theme?.primary || '#3498db') + '15'} !important;
    }
    
    // 更加强化的选中状态悬停规则 - 直接指定颜色值而不是使用inherit
    &.selected:hover:not(.error):not(.incorrect) {
      background-color: #2196f3 !important; /* 直接使用与.selected相同的颜色值 */
      color: white !important; /* 确保文字颜色也不变 */
      border-color: #1976d2 !important; /* 确保边框颜色也不变 */
    }
    
    &.normal-selected:hover:not(.error):not(.incorrect) {
      background-color: #2196f3 !important;
      color: white !important;
      border-color: #1976d2 !important;
    }
    
    &.pencil-selected:hover:not(.error):not(.incorrect) {
      background-color: #0097a7 !important;
      color: white !important;
      border-color: #00796b !important;
    }
    
    // 确保错误单元格在悬停时保持红色文字
    &.selected:hover.error,
    &.selected:hover.incorrect,
    &.normal-selected:hover.error,
    &.normal-selected:hover.incorrect,
    &.pencil-selected:hover.error,
    &.pencil-selected:hover.incorrect {
      color: ${props => props.theme?.error || '#cc3333'} !important;
      text-shadow: none !important;
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
const PencilNotes = ({ notes = [], highlightedNumber = null, selected = false }) => {
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
    color: '#ffffff',
    backgroundColor: '#3498db', // 与按钮数字选中颜色相同
    borderRadius: '4px', // 改为矩形背景，使用4px圆角
    fontWeight: 'bold',
    width: '80%',
    height: '80%'
  };
  
  return (
    <div style={containerStyle}>
      {/* 只渲染活跃的候选数 */}
      {activeNotes.map((number) => {
        // 计算每个数字在网格中的位置
        const col = ((number - 1) % 3);
        const row = Math.floor((number - 1) / 3);
        
        // 判断是否需要高亮此候选数
        const isHighlighted = highlightedNumber && number === highlightedNumber;
        
        return (
          <div
            key={number}
            style={{
              ...baseItemStyle,
              gridColumn: col + 1,
              gridRow: row + 1,
              // 如果是高亮数字，应用高亮样式
              ...(isHighlighted && highlightedItemStyle)
            }}
          >
            {number}
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
    zIndex: 10
  };
  
  // 高亮圆圈样式 - 更合适的尺寸和样式
  const hintStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#e74c3c',
    borderRadius: '50%',
    width: '25%',
    height: '25%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    border: '1px solid #ffffff',
    zIndex: 100
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
      const isHighlighted = highlightedCells.some(cell => cell.row === row && cell.col === col);
      if (isHighlighted) {
        classes.push('highlighted');
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
          let highlightedNumber = null;
          
          // 逻辑1：选中预填入和用户填入正确数字的单元格时，相同数字的单元格和相同数字的候选数高亮
          if (selectedCell && 
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
          
          // 逻辑2：没有单元格被选中时，点击数字按钮，与其相同的数字和候选数高亮
          if (!highlightedNumber && highlightedCells && Array.isArray(highlightedCells) && highlightedCells.length > 0) {
            // 检查highlightedCells数组中是否包含数字信息
            const firstHighlighted = highlightedCells[0];
            if (firstHighlighted && firstHighlighted.number && firstHighlighted.number !== 0 && firstHighlighted.number !== 'error') {
              highlightedNumber = firstHighlighted.number;
            }
          }
          
          // 生成通用的事件处理函数引用，减少重复代码
          const interactionHandler = (e) => handleCellInteraction(rowIndex, colIndex, e);
          
          return (
              <Cell
                key={cellKey}
                row={rowIndex}
                col={colIndex}
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
                ) : hasNotes ? (
                  // 原有候选数系统 - 传递highlightedNumber和选中状态以支持候选数高亮和白色显示
                  <PencilNotes notes={cellNotes} highlightedNumber={highlightedNumber} selected={selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex} />
                ) : (
                  ''
                )}
              </Cell>
            );
        })
      )}
    </BoardContainer>
  );
};

export default SudokuBoard;