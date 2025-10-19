import React from 'react';

// 技巧提示用的候选数组件 - 与原系统保持一致的位置
const TechniquePencilNotes = ({ notes = [], cellWidth }) => {
  // 确保notes是数组且不为null或undefined
  const activeNotes = Array.isArray(notes) ? notes : [];
  
  // 调整字体大小计算方式，与原系统保持一致
  const fontSize = `${cellWidth * 0.25}px`;
  
  // 调整数字背景大小
  const noteSize = cellWidth * 0.18;
  
  // 与原系统一致的3x3网格布局
  const gridPositions = {
    1: { row: 0, col: 0 }, // 左上
    2: { row: 0, col: 1 }, // 中上
    3: { row: 0, col: 2 }, // 右上
    4: { row: 1, col: 0 }, // 左中
    5: { row: 1, col: 1 }, // 中
    6: { row: 1, col: 2 }, // 右中
    7: { row: 2, col: 0 }, // 左下
    8: { row: 2, col: 1 }, // 中下
    9: { row: 2, col: 2 }  // 右下
  };
  
  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: '1px', // 与原系统保持一致的内边距
        boxSizing: 'border-box',
        zIndex: 30 // 确保在最顶层
      }}
    >
      {activeNotes.map((number) => {
        const pos = gridPositions[number];
        if (!pos) return null;
        
        // 计算每个数字在3x3网格中的精确位置
        const gridWidth = cellWidth - 2; // 减去1px内边距
        const gridHeight = cellWidth - 2;
        const cellPadding = gridWidth * 0.05;
        
        const availableWidth = gridWidth - (cellPadding * 2);
        const availableHeight = gridHeight - (cellPadding * 2);
        
        const cellSize = availableWidth / 3;
        const cellSizeHeight = availableHeight / 3;
        
        // 计算位置，确保与原系统一致
        const positionX = cellPadding + (pos.col * cellSize) + (cellSize / 2) - (noteSize / 2);
        const positionY = cellPadding + (pos.row * cellSizeHeight) + (cellSizeHeight / 2) - (noteSize / 2);
        
        return (
          <div
            key={number}
            style={{
              position: 'absolute',
              left: `${positionX}px`,
              top: `${positionY}px`,
              width: `${noteSize}px`,
              height: `${noteSize}px`,
              backgroundColor: '#2ecc71', // 绿色背景
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSize,
              fontWeight: 'bold',
              color: '#ffffff',
              border: '1px solid #ffffff',
              boxShadow: '0 0 4px rgba(46, 204, 113, 0.8)',
              opacity: 1,
              pointerEvents: 'none' // 确保不干扰交互
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

  // 过滤出只有明确需要技巧高亮的单元格
  const techniqueCells = highlightedCells.filter(cell => 
    cell && cell.techniqueIndicator === true && 
    typeof cell.row === 'number' && typeof cell.col === 'number'
  );

  // 如果没有需要技巧高亮的单元格，返回null
  if (techniqueCells.length === 0) {
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
      {techniqueCells.map((cell) => {
        const cellWidth = boardWidth / 9;
        
        // 检查是否有候选数需要显示
        const hasNotes = cell.notes && Array.isArray(cell.notes) && cell.notes.length > 0;
        
        return (
          <div
            key={`tech-${cell.row}-${cell.col}`}
            style={{
              position: 'relative',
              gridColumn: cell.col + 1,
              gridRow: cell.row + 1,
              width: '100%',
              height: '100%'
            }}
          >
            {/* 单元格背景高亮 - 使用更精确的选择器 */}
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
            
            {/* 显示候选数高亮标记 - 使用绿色背景 */}
            {hasNotes && (
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