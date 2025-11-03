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
      
      // 计算位置偏移，使候选数在单元格中居中排列，确保不超出单元格边界
      const noteSize = Math.min(cellWidth, cellHeight) * 0.25; // 候选数大小为单元格的25%
      const containerPadding = Math.min(cellWidth, cellHeight) * 0.05; // 容器内边距
      
      // 计算3x3网格的总大小
      const gridSize = Math.min(cellWidth, cellHeight) - 2 * containerPadding;
      const gridCellSize = gridSize / 3;
      
      // 计算候选数在网格中的位置
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
            backgroundColor: '#e74c3c', // 红色背景表示需要删除
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 60, // 提高z-index确保在所有单元格底色上方
            fontWeight: 'bold',
            border: '1px solid rgba(255, 255, 255, 0.5)', // 白色边框
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        >
          <span
            style={{
              fontSize: `${noteSize * 0.6}px`, // 字体大小为候选数区域的60%
              fontWeight: 'bold',
              color: '#ffffff',
              zIndex: 65, // 确保文字在候选数背景上方
              textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'
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
        backgroundColor: cell.backgroundColor || 'rgba(144, 238, 144, 0.3)', // 增加透明度到0.3
        borderColor: cell.borderColor || 'rgba(0, 0, 0, 0.5)',
        border: `1px solid ${cell.borderColor || 'rgba(0, 0, 0, 0.5)'}`, // 实线边框
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

    // 确保isTarget属性优先应用，特别处理唯一余数技巧的目标单元格
    if (cell.isTarget) {
      // 增强唯一余数技巧(hiddenSingle)的目标单元格样式
      const isHiddenSingleTechnique = cell.techniqueType && cell.techniqueType.includes('hiddenSingle');
      
      return {
        ...baseStyle,
        backgroundColor: isHiddenSingleTechnique ? 'rgba(76, 175, 80, 0.85)' : 'rgba(76, 175, 80, 0.8)', // 绿色半透明底色
        border: `3px solid ${isHiddenSingleTechnique ? '#4CAF50' : '#4CAF50'}`,
        zIndex: 30,
        color: 'white' // 设置默认文本颜色为白色
      };
    }
    
    // 然后再检查highlightType
    if (cell.highlightType && highlightStyles[cell.highlightType]) {
      return {
        ...baseStyle,
        ...highlightStyles[cell.highlightType]
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
        zIndex: 12, // 设置为中层，确保目标单元格显示在遮罩层之上，条件单元格之下
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
                  // 为目标单元格设置更大的字体大小，确保与其他单元格数字大小一致
                  fontSize: cell.isTarget ? `calc(${fontSize} * 1.35)` : fontSize, 
                  fontWeight: cell.isTarget ? 'normal' : '600', // 目标单元格使用正常粗细字体
                  color: cell.isTarget ? 'white' : '#2196F3', // 目标单元格使用白色字体
                  zIndex: 50,
                  textShadow: cell.isTarget ? 'none' : 'none', // 完全移除阴影以避免视觉上缩小字体
                  fontFamily: 'inherit', // 继承父元素的字体
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1', // 确保行高不影响字体显示
                  margin: '0', // 移除边距
                  padding: '0' // 移除内边距
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