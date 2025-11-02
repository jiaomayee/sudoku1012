import React, { useMemo } from 'react';

// 显性数对法高亮覆盖层组件 - 专门用于显性数对技巧的视觉指示
const NakedPairOverlay = ({ highlightedCells, boardWidth, boardHeight, isPortrait = false }) => {
  // 严格检查highlightedCells，确保它是有效的数组
  if (!highlightedCells || !Array.isArray(highlightedCells)) {
    return null;
  }

  // 过滤并处理显性数对高亮单元格
  const techniqueCells = highlightedCells.filter(cell => 
    cell && 
    cell.techniqueIndicator === true && 
    cell.techniqueType && 
    cell.techniqueType.includes('nakedPair') &&
    typeof cell.row === 'number' && 
    typeof cell.col === 'number' &&
    cell.row >= 0 && cell.row < 9 && 
    cell.col >= 0 && cell.col < 9
  );

  if (techniqueCells.length === 0) {
    return null;
  }

  // 根据屏幕方向使用不同的计算逻辑
  let cellWidth, cellHeight, fontSize, noteFontSize, overlayHeight;
  
  if (isPortrait && boardHeight) {
    // 竖屏模式
    cellWidth = boardWidth / 9;
    cellHeight = boardHeight / 9;
    fontSize = `${Math.max(16, Math.min(cellWidth, cellHeight) * 0.45)}px`; // 增大字体
    noteFontSize = `${Math.max(12, Math.min(cellWidth, cellHeight) * 0.25)}px`; // 更大的候选数字体
    overlayHeight = boardHeight;
  } else {
    // 横屏模式
    cellWidth = boardWidth / 9;
    cellHeight = cellWidth;
    fontSize = `${Math.max(16, cellWidth * 0.45)}px`; // 增大字体
    noteFontSize = `${Math.max(12, cellWidth * 0.25)}px`; // 更大的候选数字体
    overlayHeight = boardWidth;
  }

  // 渲染数对候选数高亮
  const renderPairNotes = (cell) => {
    if (!cell.pairNotes || !Array.isArray(cell.pairNotes) || cell.pairNotes.length === 0) {
      return null;
    }

    return cell.pairNotes.map((note) => {
      if (typeof note !== 'number' || note < 1 || note > 9) return null;
      
      // 计算候选数的位置（3x3网格）
      const noteIndex = note - 1; // 转换为0-8的索引
      const noteRow = Math.floor(noteIndex / 3);
      const noteCol = noteIndex % 3;
      
      // 计算位置偏移，使候选数在单元格中居中排列
      const noteSize = cellWidth * 0.3; // 候选数大小
      const offset = (cellWidth - 3 * noteSize) / 2 + noteCol * noteSize;
      const topOffset = (cellHeight - 3 * noteSize) / 2 + noteRow * noteSize;
      
      return (
        <div
          key={`pair-note-${cell.row}-${cell.col}-${note}`}
          style={{
            position: 'absolute',
            left: `${offset}px`,
            top: `${topOffset}px`,
            width: `${noteSize}px`,
            height: `${noteSize}px`,
            backgroundColor: 'rgba(0, 0, 255, 0.8)', // 半透明蓝色背景表示数对候选数
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 38,
            fontWeight: 'bold',
            border: '1px solid rgba(0, 0, 0, 0.3)' // 半透明黑色边框
          }}
        >
          <span
            style={{
              fontSize: noteFontSize,
              fontWeight: 'bold',
              color: '#FFFFFF', // 白色文字
              zIndex: 43,
              textShadow: 'none'
            }}
          >
            {note}
          </span>
        </div>
      );
    });
  };

  // 为显性数对法设置专门的高亮样式
  const getCellStyle = (cell) => {
    const baseStyle = {
      position: 'absolute',
      left: `${cell.col * cellWidth}px`,
      top: `${cell.row * cellHeight}px`,
      width: `${cellWidth}px`,
      height: `${cellHeight}px`,
      pointerEvents: 'none',
      boxSizing: 'border-box',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease'
    };

    // 显性数对法专用高亮样式
    const highlightStyles = {
      // 条件单元格 - 半透明浅蓝色底色
      'pair': {
        backgroundColor: 'rgba(173, 216, 230, 0.6)', // 半透明浅蓝色背景
        borderColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        zIndex: 35
      },
      // 目标单元格 - 半透明浅绿色底色
      'target': {
        backgroundColor: 'rgba(144, 238, 144, 0.6)', // 半透明浅绿色背景
        borderColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        zIndex: 30
      },
      // 需要删除候选数的单元格 - 半透明浅绿色底色（与目标单元格相同）
      'removal': {
        backgroundColor: 'rgba(144, 238, 144, 0.6)', // 半透明浅绿色背景
        borderColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        zIndex: 25
      },
      // 默认样式
      'default': {
        backgroundColor: 'rgba(173, 216, 230, 0.6)', // 半透明浅蓝色背景
        borderColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(0, 0, 0, 0.5)',
        zIndex: 35
      }
    };

    // 优先使用highlightType
    if (cell.highlightType && highlightStyles[cell.highlightType]) {
      return {
        ...baseStyle,
        ...highlightStyles[cell.highlightType]
      };
    }

    // 兼容旧的isTarget属性
    if (cell.isTarget) {
      return {
        ...baseStyle,
        ...highlightStyles['target']
      };
    }
    
    // 默认使用条件单元格样式
    return {
      ...baseStyle,
      ...highlightStyles['pair']
    };
  };

  return (
    <div 
      className="naked-pair-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${boardWidth}px`,
        height: `${overlayHeight}px`,
        pointerEvents: 'none',
        zIndex: 12,
        boxSizing: 'border-box',
        background: 'transparent'
      }}
    >
      {/* 渲染显性数对法单元格高亮 */}
      {techniqueCells.map((cell) => {
        const cellStyle = getCellStyle(cell);
        
        return (
          <div
            key={`naked-pair-${cell.row}-${cell.col}-${cell.highlightType || 'default'}-${cell.isTarget ? 'target' : 'normal'}`}
            style={cellStyle}
          >
            {/* 显示数对中的数字 */}
            {cell.number && (
              <span
                style={{
                  fontSize: fontSize,
                  fontWeight: '600',
                  color: '#000000', // 黑色数字
                  zIndex: 50,
                  textShadow: 'none',
                  fontFamily: 'inherit'
                }}
              >
                {cell.number}
              </span>
            )}
            
            {/* 渲染数对候选数高亮 */}
            {renderPairNotes(cell)}
            
            {/* 注意：不再渲染需要删除的候选数，避免与TechniqueOverlay.jsx重复 */}
          </div>
        );
      })}
    </div>
  );
};

export default NakedPairOverlay;