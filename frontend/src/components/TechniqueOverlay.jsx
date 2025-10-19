import React from 'react';

// 技巧提示用的候选数组件 - 使用精确的DOM叠加方式
const TechniquePencilNotes = ({ notes = [], cellWidth }) => {
  // 确保notes是数组且不为null或undefined
  const activeNotes = Array.isArray(notes) ? notes : [];
  
  // 计算合适的字体大小
  const fontSize = `${Math.max(10, cellWidth * 0.15)}px`;
  
  // 与原系统候选数位置精确对齐的映射
  const getNotePosition = (number) => {
    // 3x3网格中每个位置的百分比坐标
    const positions = {
      1: { top: '15%', left: '15%' },
      2: { top: '15%', left: '50%' },
      3: { top: '15%', left: '85%' },
      4: { top: '50%', left: '15%' },
      5: { top: '50%', left: '50%' },
      6: { top: '50%', left: '85%' },
      7: { top: '85%', left: '15%' },
      8: { top: '85%', left: '50%' },
      9: { top: '85%', left: '85%' }
    };
    return positions[number] || { top: '50%', left: '50%' };
  };
  
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
        const pos = getNotePosition(number);
        
        return (
          <div
            key={number}
            style={{
              position: 'absolute',
              left: pos.left,
              top: pos.top,
              transform: 'translate(-50%, -50%)',
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
              width: `${cellWidth * 0.22}px`,
              height: `${cellWidth * 0.22}px`,
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

// 完全隔离的技巧高亮覆盖层组件 - 实现基础技巧指示功能
const TechniqueOverlay = ({ highlightedCells, boardWidth }) => {
  // 严格检查highlightedCells，确保它是有效的数组
  if (!highlightedCells || !Array.isArray(highlightedCells)) {
    return null;
  }

  // 极其严格的过滤逻辑，只处理明确的技巧高亮单元格
  const techniqueCells = highlightedCells.filter(cell => 
    cell && 
    cell.techniqueIndicator === true && // 必须显式标记为技巧单元格
    typeof cell.row === 'number' && 
    typeof cell.col === 'number' &&
    cell.row >= 0 && cell.row < 9 && // 确保行列值有效
    cell.col >= 0 && cell.col < 9
  );

  // 如果没有明确的技巧高亮单元格，返回null
  if (techniqueCells.length === 0) {
    return null;
  }

  // 计算单元格宽度
  const cellWidth = boardWidth / 9;

  return (
    <div 
      className="technique-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${boardWidth}px`,
        height: `${boardWidth}px`,
        pointerEvents: 'none', // 完全禁用所有事件，不干扰原系统
        zIndex: 15, // 适当的z-index确保可见但不影响原系统
        boxSizing: 'border-box',
        background: 'transparent' // 确保背景完全透明
      }}
    >
      {/* 渲染技巧高亮单元格 - 为每个技巧单元格添加黄色背景高亮 */}
      {techniqueCells.map((cell) => {
        // 检查是否有候选数需要显示
        const hasNotes = cell.notes && Array.isArray(cell.notes) && cell.notes.length > 0;
        
        return (
          <div
            key={`tech-${cell.row}-${cell.col}`}
            style={{
              position: 'absolute',
              left: `${cell.col * cellWidth}px`,
              top: `${cell.row * cellWidth}px`,
              width: `${cellWidth}px`,
              height: `${cellWidth}px`,
              pointerEvents: 'none',
              zIndex: 20,
              // 为技巧指示单元格添加黄色背景
              backgroundColor: '#ffeaa7', // 黄色背景
              border: '2px solid #f39c12', // 橙色边框增强视觉效果
              boxSizing: 'border-box',
              borderRadius: '4px'
            }}
          >
            {/* 如果有候选数需要显示，则渲染技巧候选数 */}
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