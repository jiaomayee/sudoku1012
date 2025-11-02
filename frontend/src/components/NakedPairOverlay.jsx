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

  // 渲染需要删除的候选数高亮 - 为显性数对法优化显示效果
  const renderRemovableNotes = (cell) => {
    if (!cell.notesToRemove || !Array.isArray(cell.notesToRemove) || cell.notesToRemove.length === 0) {
      return null;
    }

    return cell.notesToRemove.map((note) => {
      if (typeof note !== 'number' || note < 1 || note > 9) return null;
      
      // 计算候选数的位置（3x3网格）
      const noteIndex = note - 1; // 转换为0-8的索引
      const noteRow = Math.floor(noteIndex / 3);
      const noteCol = noteIndex % 3;
      
      // 计算位置偏移，使候选数在单元格中居中排列
      const noteSize = cellWidth * 0.32; // 增大候选数显示区域
      const offset = cellWidth * 0.1; // 调整偏移使布局更合理
      const left = offset + noteCol * noteSize;
      const top = offset + noteRow * noteSize;
      
      return (
        <div
          key={`removable-note-${cell.row}-${cell.col}-${note}`}
          style={{
            position: 'absolute',
            left: `${left}px`,
            top: `${top}px`,
            width: `${noteSize}px`,
            height: `${noteSize}px`,
            backgroundColor: '#e74c3c', // 红色背景表示需要删除
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 40,
            fontWeight: 'bold',
            border: '2px solid #c0392b', // 添加深色边框
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          <span
            style={{
              fontSize: noteFontSize,
              fontWeight: 'bold',
              color: '#ffffff',
              zIndex: 45,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
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
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease'
    };

    // 显性数对法专用高亮样式
    const highlightStyles = {
      // 数对单元格 - 紫色高亮
      'pair': {
        backgroundColor: 'rgba(155, 89, 182, 0.4)', // 紫色半透明
        borderColor: '#9B59B6',
        border: '3px solid #9B59B6',
        zIndex: 35
      },
      // 目标单元格 - 蓝色高亮
      'target': {
        backgroundColor: 'rgba(52, 152, 219, 0.3)', // 蓝色半透明
        borderColor: '#3498DB',
        border: '3px solid #3498DB',
        zIndex: 30
      },
      // 需要删除候选数的单元格 - 红色虚线边框
      'removal': {
        backgroundColor: 'rgba(231, 76, 60, 0.25)', // 淡红色背景
        borderColor: '#e74c3c',
        border: '2px dashed #e74c3c',
        zIndex: 25
      },
      // 默认样式
      'default': {
        backgroundColor: 'rgba(155, 89, 182, 0.4)', // 紫色半透明
        borderColor: '#9B59B6',
        border: '3px solid #9B59B6',
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
    
    // 默认使用数对单元格样式
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
                  color: '#9B59B6', // 紫色，与数对高亮颜色一致
                  zIndex: 50,
                  textShadow: 'none',
                  fontFamily: 'inherit'
                }}
              >
                {cell.number}
              </span>
            )}
            
            {/* 渲染需要删除的候选数高亮 */}
            {renderRemovableNotes(cell)}
          </div>
        );
      })}
    </div>
  );
};

export default NakedPairOverlay;