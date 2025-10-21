import React from 'react';

// 完全隔离的技巧高亮覆盖层组件 - 实现基础技巧指示功能
const TechniqueOverlay = ({ highlightedCells, boardWidth, boardHeight, isPortrait = false }) => {
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

  // 根据屏幕方向使用不同的计算逻辑
  let cellWidth, cellHeight, fontSize, overlayHeight;
  
  if (isPortrait && boardHeight) {
    // 竖屏模式：使用boardHeight进行计算，修复位置不准确问题
    cellWidth = boardWidth / 9;
    cellHeight = boardHeight / 9;
    fontSize = `${Math.max(16, Math.min(cellWidth, cellHeight) * 0.4)}px`;
    overlayHeight = boardHeight;
  } else {
    // 横屏模式：保持原有逻辑，确保横屏显示正常
    cellWidth = boardWidth / 9;
    cellHeight = cellWidth; // 横屏模式下宽度和高度保持一致
    fontSize = `${Math.max(16, cellWidth * 0.4)}px`;
    overlayHeight = boardWidth;
  }

  return (
    <div 
      className="technique-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${boardWidth}px`,
        height: `${overlayHeight}px`, // 根据屏幕方向设置高度
        pointerEvents: 'none', // 完全禁用所有事件，不干扰原系统
        zIndex: 15, // 适当的z-index确保可见但不影响原系统
        boxSizing: 'border-box',
        background: 'transparent' // 确保背景完全透明
      }}
    >
      {/* 渲染技巧高亮单元格 - 为每个技巧单元格添加不太明亮的黄色背景和白色粗边框 */}
      {techniqueCells.map((cell) => {
        return (
          <div
            key={`tech-${cell.row}-${cell.col}`}
            style={{
              position: 'absolute',
              left: `${cell.col * cellWidth}px`,
              top: `${cell.row * cellHeight}px`, // 根据屏幕方向使用不同的垂直定位
              width: `${cellWidth}px`,
              height: `${cellHeight}px`, // 根据屏幕方向使用不同的高度
              pointerEvents: 'none',
              zIndex: 20,
              // 为技巧指示单元格添加不太明亮的黄色背景
              backgroundColor: '#f9e79f', // 不太明亮的黄色背景
              border: '3px solid #ffffff', // 粗白色边框
              boxSizing: 'border-box',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* 显示绿色的预填入数字，字体大小与用户填入数字大小相同 */}
            {cell.number && (
              <span
                style={{
                  fontSize: fontSize,
                  fontWeight: 'bold',
                  color: '#2ecc71', // 绿色
                  zIndex: 30
                }}
              >
                {cell.number}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechniqueOverlay;