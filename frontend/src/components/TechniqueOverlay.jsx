import React from 'react';

const TechniqueOverlay = ({ highlightedCells, boardWidth, pencilNotes }) => {
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
            
            {/* 候选数高亮标记 */}
            {isTechniqueCell && cell.number && pencilNotes && Array.isArray(pencilNotes) && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridTemplateRows: 'repeat(3, 1fr)',
                  pointerEvents: 'none',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* 找到该单元格的候选数 */}
                {pencilNotes.map(note => {
                  if (note.row === cell.row && note.col === cell.col && note.number === cell.number) {
                    const noteIndex = note.number - 1;
                    const row = Math.floor(noteIndex / 3);
                    const col = noteIndex % 3;
                    
                    return (
                        <div
                          key={`${note.row}-${note.col}-${note.number}`}
                          style={{
                            position: 'absolute',
                            gridColumn: col + 1,
                            gridRow: row + 1,
                            width: `${cellWidth * 0.6}px`,
                            height: `${cellWidth * 0.6}px`,
                            backgroundColor: '#2ecc71', // 绿色背景
                            borderRadius: '50%', // 圆形背景
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: `${cellWidth * 0.2}px`,
                            color: 'white', // 白色字体
                            opacity: 0.8,
                            transform: 'translate(-50%, -50%)',
                            left: '50%',
                            top: '50%'
                          }}
                        >
                          {note.number}
                        </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechniqueOverlay;