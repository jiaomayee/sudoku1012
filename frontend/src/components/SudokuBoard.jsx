import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

// 棋盘容器样式
const BoardContainer = styled.div.attrs({ className: 'sudoku-board' })`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border: 2px solid ${props => props.theme?.gridLineThick || '#34495e'};
  border-radius: 10px;
  background-color: #ffffff;
  position: relative;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  overflow: hidden !important;
  z-index: 1;
  aspect-ratio: 1;
  grid-gap: 0;
`;

// 单元格基础样式 - 只负责显示，不包含复杂逻辑判断
const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--board-width) * 0.10);
  font-weight: 300;
  cursor: pointer;
  background-color: #ffffff;
  color: #3498db; /* 修改为蓝色，用于用户输入的数字 */
  border: 0.5px dashed ${props => props.theme?.gridLine || '#e0e0e0'};
  transition: all 0.2s ease;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 0;
  min-width: 0;
  width: 100%;
  height: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: 0;

  /* 基础样式类 */
  &.prefilled {
    cursor: default;
    color: #666666;
  }
  
  &.highlighted {
    background-color: #cce5ff;
  }
  
  &.selected {
    background-color: #ffffff;
    z-index: 2;
  }
  
  &.error,
  &.incorrect {
    color: red;
    background-color: #ffe6e6;
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
  
  &:not(.prefilled):hover {
    background-color: #3498db11;
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
`;

// 铅笔模式下的数字标注组件
const PencilNotes = ({ notes = [], highlightedNumber = null }) => {
  // 定义九宫格布局的样式
  const notesContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    width: '100%',
    height: '100%',
    padding: '2px'
  };

  // 为每个数字创建位置映射
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

  return (
    <div style={notesContainer}>
      {notes.map(number => {
        const isHighlighted = number === highlightedNumber;
        return (
          <div
            key={number}
            style={{
              ...numberPositions[number],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              fontWeight: isHighlighted ? 'bold' : '500',
              color: isHighlighted ? '#007bff' : '#4A6FA5',
              backgroundColor: isHighlighted ? '#fff3cd' : 'transparent'
            }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

// JS逻辑函数
const SudokuBoard = ({ board, selectedCell, onCellClick, originalPuzzle, isPencilMode, pencilNotes }) => {
  const { theme } = useTheme();
  
  // 直接使用预设的棋盘数据进行测试
  const testBoard = [
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
  
  // 使用测试数据或props中的board
  const displayBoard = board || testBoard;
  
  // 单元格属性判断逻辑
  const isCellPrefilled = (value, row, col) => {
    // 如果有原始谜题，使用它来判断预填数字
    if (originalPuzzle && originalPuzzle[row] && originalPuzzle[row][col] !== null && originalPuzzle[row][col] !== 0) {
      return true;
    }
    // 备用逻辑：如果没有原始谜题，对于测试数据使用原来的判断方式
    if (displayBoard === testBoard) {
      return value !== null && value !== 0 && typeof value === 'number';
    }
    // 默认不标记为预填
    return false;
  };
  
  const isCellError = (value) => {
    return value === 'error';
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
    const currentCellNotes = pencilNotes && pencilNotes[cellKey] || [];
    
    // 基础状态类
    if (isCellPrefilled(value, row, col)) classes.push('prefilled');
    if (isCellError(value)) classes.push('error');
    // 选中状态和相关高亮
    if (selectedCell && selectedCell.row === row && selectedCell.col === col) {
      classes.push('selected');
      classes.push(isPencilMode ? 'pencil-selected' : 'normal-selected');
    } else if (selectedCell) {
      const selectedValue = displayBoard[selectedCell.row][selectedCell.col];
      const selectedCellKey = `${selectedCell.row}-${selectedCell.col}`;
      const selectedCellNotes = pencilNotes && pencilNotes[selectedCellKey] || [];
      
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
          const cellNotes = pencilNotes && pencilNotes[cellKey] || [];
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
              
              // 最终确认：只有预填数字或非错误的用户输入才触发高亮
              if (isSelectedPrefilled || !isSelectedError) {
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
                  <PencilNotes notes={cellNotes} highlightedNumber={highlightedNumber} />
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