import React, { useMemo } from 'react';

// 重新设计的技巧高亮覆盖层组件 - 与techniqueIndicator.js保持一致的高亮逻辑
const TechniqueOverlay = ({ highlightedCells, boardWidth, boardHeight, isPortrait = false }) => {
  // 严格检查highlightedCells，确保它是有效的数组
  if (!highlightedCells || !Array.isArray(highlightedCells)) {
    return null;
  }

  // 过滤并处理技巧高亮单元格
  const techniqueCells = highlightedCells.filter(cell => 
    cell && 
    cell.techniqueIndicator === true && 
    typeof cell.row === 'number' && 
    typeof cell.col === 'number' &&
    cell.row >= 0 && cell.row < 9 && 
    cell.col >= 0 && cell.col < 9
  );

  if (techniqueCells.length === 0) {
    return null;
  }

  // 移除调试日志以提高性能

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

  // 提取需要高亮的相关区域
  const renderRelatedAreas = useMemo(() => {
    const areaHighlights = [];
    
    // 收集所有需要高亮的区域信息
    techniqueCells.forEach(cell => {
      if (cell.relatedAreas && Array.isArray(cell.relatedAreas)) {
        const { row, col } = cell;
        
        // 高亮行
        if (cell.relatedAreas.includes('row')) {
          areaHighlights.push({
            type: 'row',
            row,
            key: `row-${row}`
          });
        }
        
        // 高亮列
        if (cell.relatedAreas.includes('col')) {
          areaHighlights.push({
            type: 'col',
            col,
            key: `col-${col}`
          });
        }
        
        // 高亮宫
        if (cell.relatedAreas.includes('box')) {
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          areaHighlights.push({
            type: 'box',
            boxRow,
            boxCol,
            key: `box-${boxRow}-${boxCol}`
          });
        }
      }
    });
    
    return areaHighlights;
  }, [techniqueCells, cellWidth, cellHeight]);

  // 渲染需要删除的候选数高亮 - 增强显示效果
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

  // 为不同类型的单元格设置不同的高亮样式 - 与techniqueIndicator.js保持一致
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

    // 支持primary和secondary高亮类型（与techniqueIndicator.js保持一致）
    const highlightStyles = {
      'primary': {
        backgroundColor: cell.backgroundColor || 'rgba(76, 175, 80, 0.3)', // 绿色半透明（关键单元格）
        borderColor: cell.borderColor || '#4CAF50',
        border: `3px solid ${cell.borderColor || '#4CAF50'}`,
        zIndex: 35 // 最高层级
      },
      'primary-removal': {
        backgroundColor: cell.backgroundColor || 'rgba(76, 175, 80, 0.3)', // 绿色半透明（关键单元格且有候选数删除）
        borderColor: cell.borderColor || '#4CAF50',
        border: `3px solid ${cell.borderColor || '#4CAF50'}`,
        zIndex: 35
      },
      'secondary': {
        backgroundColor: cell.backgroundColor || 'rgba(33, 150, 243, 0.3)', // 蓝色半透明（目标单元格）
        borderColor: cell.borderColor || '#2196F3',
        border: `3px solid ${cell.borderColor || '#2196F3'}`,
        zIndex: 30
      },
      'removal': {
        // 专门用于显示需要删除候选数的单元格
        backgroundColor: cell.backgroundColor || 'rgba(231, 76, 60, 0.25)', // 淡红色背景
        borderColor: cell.borderColor || '#e74c3c',
        border: `2px dashed ${cell.borderColor || '#e74c3c'}`, // 红色虚线边框
        zIndex: 25
      },
      'row': {
        backgroundColor: 'rgba(52, 152, 219, 0.3)', // 蓝色半透明
        border: '1px solid #3498db',
        zIndex: 20
      },
      'col': {
        backgroundColor: 'rgba(231, 76, 60, 0.3)', // 红色半透明
        border: '1px solid #e74c3c',
        zIndex: 20
      },
      'box': {
        backgroundColor: 'rgba(46, 204, 113, 0.3)', // 绿色半透明
        border: '1px solid #2ecc71',
        zIndex: 20
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
        backgroundColor: 'rgba(33, 150, 243, 0.3)', // 蓝色半透明
        border: '3px solid #2196F3',
        zIndex: 30
      };
    }
    
    // 默认样式
    return {
      ...baseStyle,
      backgroundColor: 'rgba(249, 231, 159, 0.5)', // 淡金色背景
      border: '3px solid #ffffff',
      zIndex: 25
    };
  };

  return (
    <div 
      className="technique-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${boardWidth}px`,
        height: `${overlayHeight}px`,
        pointerEvents: 'none',
        zIndex: 10,
        boxSizing: 'border-box',
        background: 'transparent'
      }}
    >
      {/* 1. 渲染相关区域高亮（行、列、宫）- 放在最底层 */}
      {renderRelatedAreas.map((area) => {
        if (area.type === 'row') {
          return (
            <div
              key={area.key}
              style={{
                position: 'absolute',
                left: 0,
                top: `${area.row * cellHeight}px`,
                width: `${boardWidth}px`,
                height: `${cellHeight}px`,
                backgroundColor: 'rgba(52, 152, 219, 0.25)',
                border: '1px solid rgba(52, 152, 219, 0.5)',
                zIndex: 15,
                pointerEvents: 'none'
              }}
            />
          );
        }
        
        if (area.type === 'col') {
          return (
            <div
              key={area.key}
              style={{
                position: 'absolute',
                left: `${area.col * cellWidth}px`,
                top: 0,
                width: `${cellWidth}px`,
                height: `${overlayHeight}px`,
                backgroundColor: 'rgba(52, 152, 219, 0.25)',
                border: '1px solid rgba(52, 152, 219, 0.5)',
                zIndex: 15,
                pointerEvents: 'none'
              }}
            />
          );
        }
        
        if (area.type === 'box') {
          return (
            <div
              key={area.key}
              style={{
                position: 'absolute',
                left: `${area.boxCol * 3 * cellWidth}px`,
                top: `${area.boxRow * 3 * cellHeight}px`,
                width: `${3 * cellWidth}px`,
                height: `${3 * cellHeight}px`,
                backgroundColor: 'rgba(46, 204, 113, 0.25)',
                border: '2px solid rgba(46, 204, 113, 0.6)',
                borderRadius: '6px',
                zIndex: 16,
                pointerEvents: 'none'
              }}
            />
          );
        }
        
        return null;
      })}
      
      {/* 2. 渲染单元格高亮 */}
      {techniqueCells.map((cell) => {
        const cellStyle = getCellStyle(cell);
        
        // 数字颜色统一使用蓝色，与棋盘中的数字颜色风格一致
        const numberColor = '#2196F3'; // 蓝色
        
        return (
          <div
            key={`tech-${cell.row}-${cell.col}-${cell.highlightType || 'default'}-${cell.isTarget ? 'target' : 'normal'}`}
            style={cellStyle}
          >
            {/* 显示预填入数字 */}
            {cell.number && (
              <span
                style={{
                  fontSize: fontSize,
                  fontWeight: '600', // 与棋盘中的字体粗细一致
                  color: '#2196F3', // 蓝色，与棋盘中的数字颜色风格一致
                  zIndex: 50,
                  textShadow: 'none', // 移除阴影，使样式更接近棋盘
                  fontFamily: 'inherit' // 继承父元素的字体
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

export default TechniqueOverlay;