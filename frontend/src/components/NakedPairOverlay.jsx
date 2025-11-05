import React from 'react';

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
      
      // 计算位置偏移，使候选数在单元格中居中排列，确保不超出单元格边界
      const noteSize = Math.min(cellWidth, cellHeight) * 0.35; // 增大候选数大小为单元格的35%
      const containerPadding = Math.min(cellWidth, cellHeight) * 0.05; // 容器内边距
      
      // 计算3x3网格的总大小
      const gridSize = Math.min(cellWidth, cellHeight) - 2 * containerPadding;
      const gridCellSize = gridSize / 3;
      
      // 计算候选数在网格中的位置，确保在中心
      const left = containerPadding + noteCol * gridCellSize + (gridCellSize - noteSize) / 2;
      const top = containerPadding + noteRow * gridCellSize + (gridCellSize - noteSize) / 2;
      
      return (
        <div
          key={`pair-note-${cell.row}-${cell.col}-${note}`}
          style={{
            position: 'absolute',
            left: `${left}px`,
            top: `${top}px`,
            width: `${noteSize}px`,
            height: `${noteSize}px`,
            backgroundColor: '#00FF00', // 绿色背景表示数对候选数
            borderRadius: '50%', // 圆形背景
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 60, // 确保在单元格底色上方
            fontWeight: 'bold',
            border: '1px solid rgba(255, 255, 255, 0.5)', // 白色边框
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        >
          <span
            style={{
              fontSize: `${noteSize * 0.7}px`, // 增大字体大小为候选数区域的70%
              fontWeight: 'bold',
              color: '#000000', // 黑色文字
              zIndex: 65,
              textShadow: '1px 1px 1px rgba(255, 255, 255, 0.5)'
            }}
          >
            {note}
          </span>
        </div>
      );
    });
  };

  // 渲染需要删除的候选数高亮
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
      
      // 计算位置偏移，使候选数在单元格中居中排列，确保不超出单元格边界
      const noteSize = Math.min(cellWidth, cellHeight) * 0.35; // 增大候选数大小为单元格的35%
      const containerPadding = Math.min(cellWidth, cellHeight) * 0.05; // 容器内边距
      
      // 计算3x3网格的总大小
      const gridSize = Math.min(cellWidth, cellHeight) - 2 * containerPadding;
      const gridCellSize = gridSize / 3;
      
      // 计算候选数在网格中的位置，确保在中心
      const left = containerPadding + noteCol * gridCellSize + (gridCellSize - noteSize) / 2;
      const top = containerPadding + noteRow * gridCellSize + (gridCellSize - noteSize) / 2;
      
      return (
        <div
          key={`removable-note-${cell.row}-${cell.col}-${note}`}
          style={{
            position: 'absolute',
            left: `${left}px`,
            top: `${top}px`,
            width: `${noteSize}px`,
            height: `${noteSize}px`,
            backgroundColor: '#FF0000', // 红色背景表示需要删除
            borderRadius: '50%', // 圆形背景
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 60, // 确保在单元格底色上方
            fontWeight: 'bold',
            border: '1px solid rgba(255, 255, 255, 0.5)', // 白色边框
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        >
          <span
            style={{
              fontSize: `${noteSize * 0.7}px`, // 增大字体大小为候选数区域的70%
              fontWeight: 'bold',
              color: '#FFFFFF', // 白色文字
              zIndex: 65,
              textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'
            }}
          >
            {note}
          </span>
        </div>
      );
    });
  };

  // 为显性数对法设置专门的高亮样式 - 不再高亮单元格，仅用于定位候选数
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

    // 显性数对法专用高亮样式 - 不再高亮单元格
    const highlightStyles = {
      // 条件单元格 - 透明背景
      'pair': {
        backgroundColor: 'transparent', // 透明背景
        borderColor: 'transparent', // 透明边框
        border: 'none',
        zIndex: 35
      },
      // 目标单元格 - 透明背景
      'target': {
        backgroundColor: 'transparent', // 透明背景
        borderColor: 'transparent', // 透明边框
        border: 'none',
        zIndex: 30
      },
      // 需要删除候选数的单元格 - 透明背景
      'removal': {
        backgroundColor: 'transparent', // 透明背景
        borderColor: 'transparent', // 透明边框
        border: 'none',
        zIndex: 25
      },
      // 默认样式 - 透明背景
      'default': {
        backgroundColor: 'transparent', // 透明背景
        borderColor: 'transparent', // 透明边框
        border: 'none',
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
        zIndex: 14, // 设置为最高层，确保条件单元格显示在目标单元格之上
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
            {/* 显示数对中的数字 - 不再显示 */}
            
            {/* 渲染数对候选数高亮 */}
            {renderPairNotes(cell)}
            
            {/* 渲染需要删除的候选数高亮 */}
            {renderRemovableNotes(cell)}
          </div>
        );
      })}
    </div>
  );
};

export default NakedPairOverlay;