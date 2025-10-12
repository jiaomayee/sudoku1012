import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const BoardContainer = styled.div.attrs({ className: 'sudoku-board' })`
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  border: 3px solid ${props => props.theme?.gridLineThick || '#333333'};
  border-radius: 8px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  position: relative;
  width: var(--board-width);
  height: var(--board-width);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Cell = styled(({isPrefilled, isHighlighted, isSelected, isError, row, col, theme, ...props}) => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--board-width) * 0.1);
  font-weight: ${props => props.isPrefilled ? 700 : 500};
  cursor: ${props => props.isPrefilled ? 'default' : 'pointer'};
  background-color: ${props => {
    if (props.isError) return (props.theme?.error || '#ff4444') + '22';
    if (props.isHighlighted) return props.theme?.highlight || '#e0efff';
    if (props.isSelected) return (props.theme?.primary || '#4a6cf7') + '33';
    return props.theme?.surface || '#ffffff';
  }};
  color: ${props => {
    if (props.isPrefilled) return props.theme?.text || '#333333';
    if (props.isError) return props.theme?.error || '#ff4444';
    return props.theme?.primary || '#4a6cf7';
  }};
  border: 1px solid ${props => props.theme?.gridLine || '#cccccc'};
  transition: all 0.2s ease;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  
  /* 粗边框表示3x3子网格 */
  ${props => {
    let borders = '';
    if (props.col % 3 === 0 && props.col > 0) {
      borders += 'border-left: 2px solid ' + (props.theme?.gridLineThick || '#333333') + ';';
    }
    if (props.row % 3 === 0 && props.row > 0) {
      borders += 'border-top: 2px solid ' + (props.theme?.gridLineThick || '#333333') + ';';
    }
    return borders;
  }}
  
  &:hover {
    ${props => !props.isPrefilled && `
      background-color: ${(props.theme?.primary || '#4a6cf7')}11;
    `}
  }
`;

const SudokuBoard = ({ board, selectedCell, highlightedCells, onCellClick }) => {
  const { theme } = useTheme();
  
  // 创建一个示例棋盘数据（如果没有提供）
  const displayBoard = board || Array(9).fill().map(() => Array(9).fill(null));
  
  const handleCellClick = (row, col) => {
    if (onCellClick) {
      onCellClick(row, col);
    }
  };
  
  const isCellHighlighted = (row, col) => {
    return highlightedCells.some(cell => cell.row === row && cell.col === col);
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
    <BoardContainer>
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