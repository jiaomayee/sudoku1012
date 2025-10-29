import React, { useMemo } from 'react';

// 独立的技巧遮罩覆盖层组件 - 专门处理唯一余数技巧的遮罩效果
const TechniqueMaskOverlay = ({ highlightedCells, boardWidth, boardHeight, isPortrait = false }) => {
  // 严格检查highlightedCells，确保它是有效的数组
  if (!highlightedCells || !Array.isArray(highlightedCells)) {
    return null;
  }

  // 过滤技巧高亮单元格
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

  // 根据屏幕方向使用不同的计算逻辑
  let cellWidth, cellHeight, overlayHeight;
  
  if (isPortrait && boardHeight) {
    // 竖屏模式
    cellWidth = boardWidth / 9;
    cellHeight = boardHeight / 9;
    overlayHeight = boardHeight;
  } else {
    // 横屏模式
    cellWidth = boardWidth / 9;
    cellHeight = cellWidth;
    overlayHeight = boardWidth;
  }

  // 检查是否为唯一余数技巧（nakedSingle）
  const isNakedSingle = techniqueCells.some(cell => {
    // 检查技巧类型字段
    if (cell.techniqueType === 'nakedSingle') return true;
    
    // 检查技巧字段
    if (cell.technique && cell.technique.includes('nakedSingle')) return true;
    
    // 检查是否有nakedSingle相关的标识
    if (cell.highlightType === 'primary' && cell.isTarget) {
      // 检查是否只有一个目标单元格，这是唯一余数技巧的特征
      const targetCells = techniqueCells.filter(c => c.isTarget);
      if (targetCells.length === 1) return true;
    }
    
    // 检查是否有行、列、宫的高亮类型，这是唯一余数技巧的特征
    const hasRowHighlight = techniqueCells.some(c => c.highlightType === 'row');
    const hasColHighlight = techniqueCells.some(c => c.highlightType === 'col');
    const hasBoxHighlight = techniqueCells.some(c => c.highlightType === 'box');
    
    // 如果同时有行、列、宫的高亮，且有一个目标单元格，则认为是唯一余数技巧
    if (hasRowHighlight && hasColHighlight && hasBoxHighlight) {
      const targetCells = techniqueCells.filter(c => c.isTarget);
      if (targetCells.length === 1) return true;
    }
    
    return false;
  });

  // 如果不是唯一余数技巧，不显示遮罩
  if (!isNakedSingle) {
    return null;
  }

  // 计算需要排除遮罩的区域（高亮区域）
  const exclusionAreas = [];
  
  // 收集所有需要高亮的区域信息
  techniqueCells.forEach(cell => {
    const { row, col, highlightType, relatedAreas } = cell;
    
    // 首先处理目标单元格本身
    if (!exclusionAreas.some(area => area.type === 'cell' && area.row === row && area.col === col)) {
      exclusionAreas.push({
        type: 'cell',
        row: row,
        col: col,
        key: `cell-${row}-${col}`
      });
    }
    
    // 处理relatedAreas字段（行、列、宫高亮区域）
    if (relatedAreas && Array.isArray(relatedAreas)) {
      relatedAreas.forEach(areaType => {
        if (areaType === 'row') {
          // 检查是否已存在相同的行排除区域
          if (!exclusionAreas.some(area => area.type === 'row' && area.row === row)) {
            exclusionAreas.push({
              type: 'row',
              row,
              key: `row-${row}`
            });
          }
        }
        
        if (areaType === 'col') {
          // 检查是否已存在相同的列排除区域
          if (!exclusionAreas.some(area => area.type === 'col' && area.col === col)) {
            exclusionAreas.push({
              type: 'col',
              col,
              key: `col-${col}`
            });
          }
        }
        
        if (areaType === 'box') {
          const boxRow = Math.floor(row / 3);
          const boxCol = Math.floor(col / 3);
          // 检查是否已存在相同的宫排除区域
          if (!exclusionAreas.some(area => area.type === 'box' && area.boxRow === boxRow && area.boxCol === boxCol)) {
            exclusionAreas.push({
              type: 'box',
              boxRow,
              boxCol,
              key: `box-${boxRow}-${boxCol}`
            });
          }
        }
      });
    }
    
    // 处理highlightType字段（兼容旧逻辑）
    if (highlightType === 'row') {
      // 检查是否已存在相同的行排除区域
      if (!exclusionAreas.some(area => area.type === 'row' && area.row === row)) {
        exclusionAreas.push({
          type: 'row',
          row,
          key: `row-${row}`
        });
      }
    }
    
    if (highlightType === 'col') {
      // 检查是否已存在相同的列排除区域
      if (!exclusionAreas.some(area => area.type === 'col' && area.col === col)) {
        exclusionAreas.push({
          type: 'col',
          col,
          key: `col-${col}`
        });
      }
    }
    
    if (highlightType === 'box') {
      const boxRow = Math.floor(row / 3);
      const boxCol = Math.floor(col / 3);
      // 检查是否已存在相同的宫排除区域
      if (!exclusionAreas.some(area => area.type === 'box' && area.boxRow === boxRow && area.boxCol === boxCol)) {
        exclusionAreas.push({
          type: 'box',
          boxRow,
          boxCol,
          key: `box-${boxRow}-${boxCol}`
        });
      }
    }
  });

  // 使用更精确的遮罩生成算法：完全避开高亮区域
  const maskAreas = [];
  
  // 如果没有排除区域，则整个棋盘都需要遮罩
  if (exclusionAreas.length === 0) {
    maskAreas.push({
      top: 0,
      left: 0,
      width: boardWidth,
      height: overlayHeight,
      key: 'full-mask'
    });
  } else {
    // 创建高亮区域映射表，更精确地识别高亮区域
    const highlightMap = Array(9).fill().map(() => Array(9).fill(false));
    
    // 标记所有高亮区域
    exclusionAreas.forEach(area => {
      if (area.type === 'row') {
        // 标记整行
        for (let col = 0; col < 9; col++) {
          highlightMap[area.row][col] = true;
        }
      }
      
      if (area.type === 'col') {
        // 标记整列
        for (let row = 0; row < 9; row++) {
          highlightMap[row][area.col] = true;
        }
      }
      
      if (area.type === 'box') {
        // 标记整个宫
        const startRow = area.boxRow * 3;
        const startCol = area.boxCol * 3;
        for (let r = startRow; r < startRow + 3; r++) {
          for (let c = startCol; c < startCol + 3; c++) {
            highlightMap[r][c] = true;
          }
        }
      }
      
      if (area.type === 'cell') {
        // 标记单个单元格
        highlightMap[area.row][area.col] = true;
      }
    });
    
    // 生成遮罩区域：只遮罩非高亮的单元格
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // 如果这个单元格不在高亮区域内，则添加遮罩
        if (!highlightMap[row][col]) {
          maskAreas.push({
            top: row * cellHeight,
            left: col * cellWidth,
            width: cellWidth,
            height: cellHeight,
            key: `cell-${row}-${col}`
          });
        }
      }
    }
    
    // 遮罩区域已生成
  }

  return (
    <div 
      className="technique-mask-overlay"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${boardWidth}px`,
        height: `${overlayHeight}px`,
        pointerEvents: 'none',
        zIndex: 10, // 降低层级，确保在高亮组件之下（高亮组件zIndex是15-16）
        boxSizing: 'border-box'
      }}
    >
      {/* 渲染多个遮罩矩形，只覆盖非高亮区域 */}
      {maskAreas.map(area => (
        <div
          key={area.key}
          style={{
            position: 'absolute',
            top: `${area.top}px`,
            left: `${area.left}px`,
            width: `${area.width}px`,
            height: `${area.height}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // 适中的半透明遮罩
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}
    </div>
  );
};

// 导出组件
export default TechniqueMaskOverlay;