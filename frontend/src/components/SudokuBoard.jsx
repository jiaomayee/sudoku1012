import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

// 棋盘容器样式 - 按照导航栏风格美化
const BoardContainer = styled.div.attrs({ className: 'sudoku-board' })`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border: 3px solid ${props => props.theme?.gridLineThick || '#34495e'};
  border-radius: 12px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  position: relative;
  width: 100% !important;
  aspect-ratio: 1 / 1 !important;
  margin: 0 auto !important;
  padding: 0;
  box-sizing: border-box;
  overflow: visible !important;
  z-index: 1;
  grid-gap: 0;
  // 使用多层阴影增加立体感
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
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

// 单元格基础样式 - 只负责显示，不包含复杂逻辑判断
const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--board-width) * 0.08);
  font-weight: 500;
  cursor: pointer;
  background-color: ${props => props.theme?.cellBackground || '#ffffff'};
  color: #3498db; /* 修改为蓝色，用于用户输入的数字 */
  border: 1px dashed ${props => props.theme?.gridLine || '#e0e0e0'};
    transition: all 0.2s ease;
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
    
    /* 完全移除3x3子网格之间的虚线边框，避免与粗边框重叠 */
     /* 处理列方向的网格分隔线 */
     ${props => props.col % 3 === 0 && props.col > 0 && `border-left: none;`}
     ${props => props.col % 3 === 2 && `border-right: none;`}
     /* 处理行方向的网格分隔线 */
     ${props => props.row % 3 === 0 && props.row > 0 && `border-top: none;`}
     ${props => props.row % 3 === 2 && `border-bottom: none;`}

  /* 基础样式类 */
  &.prefilled {
    cursor: default;
    color: ${props => props.theme?.textOriginal || '#666666'};
    font-weight: 400; /* 将预填数字字体调整为较细 */
  }
  
  &.highlighted {
    background-color: #cce5ff;
  }
  
  &.selected {
    background-color: #ffffff;
    z-index: 2;
    /* 为选中的单元格添加蓝色实线边框 */
    border: 2px solid ${props => props.theme?.primary || '#3498db'} !important;
  }
  
  &.error,
  &.incorrect {
    color: ${props => props.theme?.error || 'red'};
    background-color: ${props => (props.theme?.error || '#e74c3c') + '20'};
    border-color: ${props => props.theme?.error || 'red'};
  }
  
  &.same-number {
    background-color: #d1ecf1;
  }
  
  &.same-region {
    background-color: #e8f4fd;
  }
  
  &.same-note {
    background-color: #fff3cd;
  }
  
  &.technique-indicator {
    background-color: #ffeaa7;
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
  
  /* 3x3子网格（宫）之间的分隔 */
  ${props => {
    let borders = '';
    if (props.col % 3 === 0 && props.col > 0) {
      borders += 'border-left: 2px solid ' + (props.theme?.gridLineThick || '#34495e') + ';';
    }
    if (props.row % 3 === 0 && props.row > 0) {
      borders += 'border-top: 2px solid ' + (props.theme?.gridLineThick || '#34495e') + ';';
    }
    return borders;
  }}
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:not(.prefilled):hover {
      background-color: ${props => (props.theme?.primary || '#3498db') + '15'} !important;
    }
  }
  
  // 触摸反馈
  &:active {
    transform: scale(0.97);
  }
  
  // 横屏模式下调整字体大小
  @media (min-width: 992px) {
    font-size: calc(var(--board-width) * 0.09);
  }
  
  // 屏幕较大时适当减小字体比例以避免文字过大
  @media (min-width: 992px) and (min-height: 800px) {
    font-size: calc(var(--board-width) * 0.08);
  }
  
  // 屏幕非常大时进一步减小字体比例
  @media (min-width: 992px) and (min-height: 900px) {
    font-size: calc(var(--board-width) * 0.075);
  }
  
  // 高度不足时的字体大小调整
  @media (min-width: 992px) and (max-height: 700px) {
    font-size: calc(var(--board-width) * 0.08);
  }
  
  @media (min-width: 992px) and (max-height: 600px) {
    font-size: calc(var(--board-width) * 0.07);
  }
  
  // 竖屏模式下调整字体大小
  @media (max-width: 991px) {
    font-size: calc(var(--board-width) * 0.07);
    min-height: 36px;
  }
`;

// 铅笔模式下的数字标注组件
const PencilNotes = ({ notes = [] }) => {
  // 计算实际包含的数字数量
  const activeNotes = Array.isArray(notes) ? 
    notes : 
    Object.keys(notes).filter(num => notes[num]).map(Number);
  
  // 使用固定的网格布局，确保所有单元格中的候选数位置保持一致
  // 无论候选数有多少，都使用相同的网格结构
  const getContainerStyle = () => {
    return {
      display: 'grid',
      width: '100%',
      height: '100%',
      padding: '0px',
      boxSizing: 'border-box',
      // 固定的3x3网格，确保所有候选数位置一致
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      gridGap: '0px'
    };
  };
  
  // 为每个数字创建固定的位置映射
  const numberPositions = {
    1: { gridRow: 1, gridColumn: 1 },
    2: { gridRow: 1, gridColumn: 2 },
    3: { gridRow: 1, gridColumn: 3 },
    4: { gridRow: 2, gridColumn: 1 },
    5: { gridRow: 2, gridColumn: 2 },
    6: { gridRow: 2, gridColumn: 3 },
    7: { gridRow: 3, gridColumn: 1 },
    8: { gridRow: 3, gridColumn: 2 },
    9: { gridRow: 3, gridColumn: 3 }
  };
  
  // 为所有情况使用统一的字体大小，但根据屏幕方向响应式调整
  const getFontSize = () => {
    // 增加默认字体大小
    let size = '0.92rem'; // 略微增大默认字体
    
    // 竖屏模式下略微增大字体大小
    if (window.innerWidth <= 991) {
      // 根据屏幕宽度进一步调整
      if (window.innerWidth <= 576) {
        size = '0.82rem'; // 小屏手机继续微调
      } else {
        size = '0.88rem'; // 一般竖屏设备继续微调
      }
    }
    
    return size;
  };
  
  const fontSize = getFontSize();
  
  return (
    <div style={getContainerStyle()}>
      {activeNotes.map((number) => (
        <div
          key={number}
          style={{
            ...numberPositions[number],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: fontSize,
            fontWeight: '500',
            color: '#4A6FA5',
            backgroundColor: 'transparent',
            margin: '0',
            padding: '0',
            lineHeight: '0.82',
            letterSpacing: '-0.04em',
            boxSizing: 'border-box',
            overflow: 'visible',
            textAlign: 'center'
          }}
        >
          {number}
        </div>
      ))}
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
      
      // 移除这段代码，因为我们现在直接在PencilNotes组件中高亮标注数字本身，而不是整个单元格
      // 高亮具有相同标注数字的单元格
      // if (currentCellNotes.length > 0 && selectedCellNotes.length > 0) {
      //   const hasCommonNote = currentCellNotes.some(note => selectedCellNotes.includes(note));
      //   if (hasCommonNote) {
      //     classes.push('same-note');
      //   }
      // }
      
      // 高亮同行、同列、同宫的单元格
      if (isSameRegion(row, col, selectedCell.row, selectedCell.col)) {
        classes.push('same-region');
      }
    }
    
    return classes.join(' ');
  };
  
  // 单元格点击处理
  const handleCellClick = (row, col) => {
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
          
          // 计算是否需要高亮标注数字
          let highlightedNumber = null;
          // 严格条件检查：
          // 1. 确保选中单元格存在且有有效坐标
          // 2. 确保选中单元格有实际数字（非0）
          // 3. 确保数字有效（非error）
          if (selectedCell && 
              selectedCell.row !== undefined && 
              selectedCell.col !== undefined && 
              displayBoard[selectedCell.row] && 
              displayBoard[selectedCell.row][selectedCell.col]) {
              
            const selectedCellValue = displayBoard[selectedCell.row][selectedCell.col];
            
            // 关键条件：必须有实际数字（非0）且非错误
            if (selectedCellValue !== 0 && selectedCellValue !== 'error') {
              const isSelectedPrefilled = isCellPrefilled(selectedCellValue, selectedCell.row, selectedCell.col);
              const isSelectedError = isCellError(selectedCellValue);
              const isSelectedIncorrect = isCellIncorrect(selectedCell.row, selectedCell.col);
              
              // 最终确认：只有预填数字或非错误的用户输入才触发高亮
              if (isSelectedPrefilled || (!isSelectedError && !isSelectedIncorrect)) {
                highlightedNumber = selectedCellValue;
              }
            }
          }
          
          return (
              <Cell
                key={cellKey}
                row={rowIndex}
                col={colIndex}
                className={cellClasses}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                theme={theme}
              >
                {value && value !== 0 && value !== 'error' ? (
                  value
                ) : hasNotes ? (
                  <PencilNotes notes={cellNotes} />
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