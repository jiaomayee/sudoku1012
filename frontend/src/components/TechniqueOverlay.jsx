import React from 'react';

const TechniqueOverlay = ({ highlightedCells, boardWidth }) => {
  // 检查highlightedCells是否存在且为数组
  if (!highlightedCells || !Array.isArray(highlightedCells) || highlightedCells.length === 0) {
    return null;
  }

  return (
    <div 
      className="technique-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${boardWidth}px`,
        height: `${boardWidth}px`,
        pointerEvents: 'none', // 确保不干扰原有棋盘交互
        zIndex: 10, // 确保在棋盘上方但不影响UI交互
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gridTemplateRows: 'repeat(9, 1fr)'
      }}
    >
      {highlightedCells.map((cell, index) => {
        if (!cell || typeof cell.row !== 'number' || typeof cell.col !== 'number') {
          return null;
        }
        
        const cellWidth = boardWidth / 9;
        const cellHeight = boardWidth / 9;
        
        // 检查是否有技巧指示属性
        const isTechniqueCell = cell.techniqueIndicator;
        
        return (
          <div
            key={`${cell.row}-${cell.col}-${index}`}
            style={{
              position: 'relative',
              gridColumn: cell.col + 1,
              gridRow: cell.row + 1
            }}
          >
            {/* 单元格背景高亮 */}
            {isTechniqueCell && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#ffeaa7', // 柔和的黄色背景
                  opacity: 0.6,
                  pointerEvents: 'none'
                }}
              />
            )}
            
            {/* 仅保留单元格背景高亮，移除候选数高亮标记 */}
          </div>
        );
      })}
    </div>
  );
};

export default TechniqueOverlay;