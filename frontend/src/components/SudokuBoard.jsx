import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const BoardContainer = styled.div.attrs({ className: 'sudoku-board' })`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  /* 设计边框样式 */
  border: 2px solid ${props => props.theme?.gridLineThick || '#34495e'};
  border-radius: 5px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
  /* 确保网格在任何情况下都不会变形 */
  aspect-ratio: 1;
  /* 确保网格单元之间没有间隙 */
  grid-gap: 0;
`;

const Cell = styled(({isPrefilled, isHighlighted, isSelected, isError, row, col, theme, ...props}) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* 使用基于棋盘宽度的字体大小计算，更适合响应式布局 */
  font-size: calc(var(--board-width) * 0.08);
  font-weight: ${props => props.isPrefilled ? 700 : 500};
  cursor: ${props => props.isPrefilled ? 'default' : 'pointer'};
  background-color: ${props => {
    if (props.isError) return (props.theme?.error || '#e74c3c') + '22';
    if (props.isHighlighted) return props.theme?.highlight || '#e0efff';
    if (props.isSelected) return (props.theme?.primary || '#3498db') + '33';
    return props.theme?.surface || '#ffffff';
  }};
  color: ${props => {
    if (props.isPrefilled) return props.theme?.text || '#34495e';
    if (props.isError) return props.theme?.error || '#e74c3c';
    return props.theme?.primary || '#3498db';
  }};
  /* 基础边框样式 */
  border: 0.5px solid ${props => props.theme?.gridLine || '#e0e0e0'};
  /* 边缘单元格处理 */
  ${props => props.row === 0 && `border-top: none;`}
  ${props => props.row === 8 && `border-bottom: none;`}
  ${props => props.col === 0 && `border-left: none;`}
  ${props => props.col === 8 && `border-right: none;`}
  /* 四个角落单元格的特殊处理 */
  ${props => props.row === 0 && props.col === 0 && `
    border-radius: 5px 0 0 0;
  `}
  ${props => props.row === 0 && props.col === 8 && `
    border-radius: 0 5px 0 0;
  `}
  ${props => props.row === 8 && props.col === 0 && `
    border-radius: 0 0 0 5px;
  `}
  ${props => props.row === 8 && props.col === 8 && `
    border-radius: 0 0 5px 0;
  `}
  transition: all 0.2s ease;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 0;
  min-width: 0;
  /* 确保单元格完全填充其网格区域 */
  width: 100%;
  height: 100%;
  /* 确保文本不会溢出 */
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  
  /* 确保边框始终可见 */
  outline: 0;
  
  /* 粗边框表示3x3子网格 */
  ${props => {
    let borders = '';
    if (props.col % 3 === 0 && props.col > 0) {
      borders += 'border-left: 1.5px solid ' + (props.theme?.gridLineThick || '#34495e') + ';';
    }
    if (props.row % 3 === 0 && props.row > 0) {
      borders += 'border-top: 1.5px solid ' + (props.theme?.gridLineThick || '#34495e') + ';';
    }
    return borders;
  }}
  
  &:hover {
    ${props => !props.isPrefilled && `
      background-color: ${(props.theme?.primary || '#3498db')}11;
    `}
  }
`;

const SudokuBoard = ({ board, selectedCell, highlightedCells, onCellClick }) => {
  const { theme } = useTheme();
  
  // 创建一个示例棋盘数据（如果没有提供）
  const displayBoard = board || Array(9).fill().map(() => Array(9).fill(0));
  
  const handleCellClick = (row, col) => {
    if (onCellClick) {
      onCellClick(row, col);
    }
  };
  
  const isCellHighlighted = (row, col) => {
    return highlightedCells && Array.isArray(highlightedCells) && 
           highlightedCells.some(cell => cell.row === row && cell.col === col);
  };
  
  const isCellSelected = (row, col) => {
    return selectedCell && selectedCell.row === row && selectedCell.col === col;
  };
  
  const isCellPrefilled = (value) => {
    return value !== null && value !== 0 && typeof value === 'number';
  };
  
  const isCellError = (value) => {
    return value === 'error';
  };
  
  return (
    <BoardContainer theme={theme}>
      {displayBoard.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          const isPrefilled = isCellPrefilled(value);
          const isHighlighted = isCellHighlighted(rowIndex, colIndex);
          const isSelected = isCellSelected(rowIndex, colIndex);
          const isError = isCellError(value);
          
          return (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              isPrefilled={isPrefilled}
              isHighlighted={isHighlighted}
              isSelected={isSelected}
              isError={isError}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              theme={theme}
            >
              {value && value !== 0 && value !== 'error' ? value : ''}
            </Cell>
          );
        })
      )}
    </BoardContainer>
  );
};

export default SudokuBoard;