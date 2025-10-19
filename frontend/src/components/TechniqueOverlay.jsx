import React from 'react';

// 技巧提示用的候选数组件 - 直接绘制方式
const TechniquePencilNotes = ({ notes = [], cellWidth }) => {
  // 确保notes是数组且不为null或undefined
  const activeNotes = Array.isArray(notes) ? notes : [];
  
  // 计算字体大小，确保在各种尺寸下都清晰可见
  const fontSize = Math.max(10, cellWidth * 0.15);
  
  // 计算数字背景圆的大小
  const circleSize = cellWidth * 0.22;
  
  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 30 // 确保在最顶层
      }}
    >
      {activeNotes.map((number) => {
        // 计算数字在单元格中的位置 (1-9的3x3网格)
        const col = ((number - 1) % 3); // 0, 1, 2
        const row = Math.floor((number - 1) / 3); // 0, 1, 2
        
        // 计算精确的位置，基于单元格尺寸
        const cellPadding = cellWidth * 0.1;
        const positionX = cellPadding + (cellWidth - cellPadding * 2) / 3 * (col + 0.5) - circleSize / 2;
        const positionY = cellPadding + (cellWidth - cellPadding * 2) / 3 * (row + 0.5) - circleSize / 2;
        
        return (
          <div
            key={number}
            style={{
              position: 'absolute',
              left: `${positionX}px`,
              top: `${positionY}px`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              backgroundColor: '#2ecc71', // 绿色背景
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: `${fontSize}px`,
              fontWeight: 'bold',
              color: '#ffffff',
              border: '1px solid #ffffff',
              boxShadow: '0 0 6px rgba(46, 204, 113, 0.8)',
              opacity: 1 // 确保完全不透明
            }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

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
        zIndex: 15, // 提高z-index确保覆盖棋盘但不干扰交互
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
        // 检查是否有候选数需要显示
        const hasNotes = cell.notes && Array.isArray(cell.notes) && cell.notes.length > 0;
        
        return (
          <div
            key={`${cell.row}-${cell.col}-${index}`}
            style={{
              position: 'relative',
              gridColumn: cell.col + 1,
              gridRow: cell.row + 1,
              width: '100%',
              height: '100%'
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
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
            )}
            
            {/* 显示候选数高亮标记 - 使用绿色背景 */}
            {isTechniqueCell && hasNotes && (
              <TechniquePencilNotes 
                notes={cell.notes} 
                cellWidth={cellWidth} 
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechniqueOverlay;