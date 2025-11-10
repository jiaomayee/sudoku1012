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

  // 提取需要高亮的相关区域 - 支持基础技巧和ALS-XZ技巧
  const renderRelatedAreas = useMemo(() => {
    const areaHighlights = [];
    
    // 收集所有需要高亮的区域信息
    techniqueCells.forEach(cell => {
      // 基础技巧区域高亮
      const isBasicTechnique = cell.techniqueType && (
        cell.techniqueType === 'nakedSingle' ||
        cell.techniqueType === 'notesSingle' ||
        cell.techniqueType.includes('hiddenSingle')
      );
      
      if (isBasicTechnique && cell.relatedAreas && Array.isArray(cell.relatedAreas)) {
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
    // 对于ALS-XZ技巧，不使用notesToRemove，而是使用alsXZCandidates.removableCandidates
    if (cell.techniqueType && cell.techniqueType.includes('alsXZ')) {
      return null; // ALS-XZ的候选数在renderConditionNotes中处理
    }
    
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
            zIndex: 60, // 提高z-index确保在所有单元格底色上方
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

  // 渲染高亮候选数组
  const renderHighlightGroups = (highlightGroups, cell) => {
    return highlightGroups.map((group, groupIndex) => {
      return group.notes.map((note) => {
        if (typeof note !== 'number' || note < 1 || note > 9) return null;
        
        // 计算候选数的位置（3x3网格）
        const noteIndex = note - 1; // 转换为0-8的索引
        const noteRow = Math.floor(noteIndex / 3);
        const noteCol = noteIndex % 3;
        
        // 计算位置偏移，使候选数在单元格中居中排列
        const noteSize = Math.min(cellWidth, cellHeight) * 0.35; // 统一使用0.35比例
        const containerPadding = Math.min(cellWidth, cellHeight) * 0.05; // 统一使用0.05比例
        const gridSize = Math.min(cellWidth, cellHeight) - 2 * containerPadding;
        const gridCellSize = gridSize / 3;
        const left = containerPadding + noteCol * gridCellSize + (gridCellSize - noteSize) / 2;
        const top = containerPadding + noteRow * gridCellSize + (gridCellSize - noteSize) / 2;
        
        // 根据类型设置样式，统一使用圆形背景和相同字体大小
        let backgroundColor, textColor, boxShadow, borderRadius, zIndex;
        
        switch (group.type) {
          case 'alsXZ-x':
            backgroundColor = '#ADD8E6'; // 浅蓝底，用于X候选数
            textColor = '#000000'; // 黑色文字
            boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
            borderRadius = '50%'; // 圆形背景
            zIndex = 85;
            break;
          case 'alsXZ-als1-other':
            backgroundColor = '#90EE90'; // 浅绿底，用于ALS1中的其他候选数
            textColor = '#000000'; // 黑色文字
            boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
            borderRadius = '50%'; // 圆形背景
            zIndex = 80;
            break;
          case 'alsXZ-als2-other':
            backgroundColor = '#DDA0DD'; // 浅紫底，用于ALS2中的其他候选数
            textColor = '#000000'; // 黑色文字
            boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
            borderRadius = '50%'; // 圆形背景
            zIndex = 75;
            break;
          case 'alsXZ-z':
            backgroundColor = '#1E90FF'; // 深蓝底，用于Z候选数
            textColor = '#FFFFFF'; // 白色文字
            boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
            borderRadius = '50%'; // 圆形背景
            zIndex = 85;
            break;
          case 'alsXZ-removeable':
            backgroundColor = '#FF0000'; // 红底，用于可删除的候选数
            textColor = '#FFFFFF'; // 白色文字
            boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
            borderRadius = '50%'; // 圆形背景
            zIndex = 90; // 最高层级
            break;
          default:
            backgroundColor = '#FFFFFF';
            textColor = '#000000';
            boxShadow = '0 1px 2px rgba(0,0,0,0.3)';
            borderRadius = '50%'; // 圆形背景
            zIndex = 70;
            break;
        }
        
        return (
          <div
            key={`alsXZ-${groupIndex}-${cell.row}-${cell.col}-${note}-${group.type}`}
            style={{
              position: 'absolute',
              left: `${left}px`,
              top: `${top}px`,
              width: `${noteSize}px`,
              height: `${noteSize}px`,
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: zIndex,
              fontWeight: 'bold',
              border: 'none',
              boxShadow: boxShadow,
              transform: 'scale(1)',
              transition: 'all 0.2s ease'
            }}
          >
            <span
              style={{
                fontSize: `${noteSize * 0.7}px`,
                fontWeight: 'bold',
                color: textColor,
                zIndex: 75,
                fontFamily: 'Arial, sans-serif'
              }}
            >
              {note}
            </span>
          </div>
        );
      });
    });
  };
  
  // 渲染条件候选数高亮
  const renderConditionNotes = (cell) => {
    // 优先检查是否为ALS-XZ技巧，使用新的alsXZCandidates属性
    if (cell.techniqueType && cell.techniqueType.includes('alsXZ') && cell.alsXZCandidates) {
      const highlightGroups = [];
      const { xCandidates, als1Candidates, als2Candidates, removableCandidates } = cell.alsXZCandidates;
      
      // 1. X候选数（浅蓝底黑字）- 优先级最高
      if (xCandidates && xCandidates.length > 0) {
        highlightGroups.push({
          notes: xCandidates,
          type: 'alsXZ-x'
        });
      }
      
      // 2. ALS1集合中的其他候选数（浅绿底黑字）
      if (als1Candidates && als1Candidates.length > 0) {
        highlightGroups.push({
          notes: als1Candidates,
          type: 'alsXZ-als1-other'
        });
      }
      
      // 3. ALS2集合中的其他候选数（浅紫底黑字）
      if (als2Candidates && als2Candidates.length > 0) {
        highlightGroups.push({
          notes: als2Candidates,
          type: 'alsXZ-als2-other'
        });
      }
      
      // 4. 可删除的目标候选数（红底白字）- 优先级最高
      if (removableCandidates && removableCandidates.length > 0) {
        highlightGroups.push({
          notes: removableCandidates,
          type: 'alsXZ-removeable'
        });
      }
      
      // 渲染所有高亮组
      if (highlightGroups.length > 0) {
        return renderHighlightGroups(highlightGroups, cell);
      }
      
      return null;
    }
    
    // 如果是ALS-XZ技巧，不执行常规高亮（已在上面处理）
    if (cell.techniqueType && cell.techniqueType.includes('alsXZ')) {
      return null;
    }
    
    // 常规候选数高亮处理
    // 对于显性数对法，使用pairNotes
    const notesToHighlight = cell.pairNotes || cell.highlightedValues || [];
    
    if (!Array.isArray(notesToHighlight) || notesToHighlight.length === 0) {
      return null;
    }

    return notesToHighlight.map((note) => {
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
      
      // 默认绿色背景表示条件候选数，统一使用圆形背景和相同字体大小
      let backgroundColor = '#00FF00'; // 默认绿色背景
      let textColor = '#000000'; // 默认黑色文字
      let borderWidth = '1px';
      let borderColor = 'rgba(255, 255, 255, 0.5)'; // 白色边框
      let boxShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
      let textShadow = '1px 1px 1px rgba(255, 255, 255, 0.5)';
      let borderRadius = '50%'; // 圆形背景
      
      // 对于Y-Wing技巧，如果cell.zValue等于当前note，则使用浅蓝底黑字
      if (cell.techniqueType && cell.techniqueType.includes('yWing') && cell.zValue === note) {
        backgroundColor = '#ADD8E6'; // 浅蓝色背景
        textColor = '#000000'; // 黑色文字
      }
      
      // 对于XYZ-Wing技巧，如果cell.zValue等于当前note，则使用浅蓝底黑字
      if (cell.techniqueType && cell.techniqueType.includes('xyzWing') && cell.zValue === note) {
        backgroundColor = '#ADD8E6'; // 浅蓝色背景
        textColor = '#000000'; // 黑色文字
      }
      
      // 对于XYZ-Wing技巧，x和y候选数使用绿底黑字高亮
      if (cell.techniqueType && cell.techniqueType.includes('xyzWing') && cell.x !== undefined && cell.y !== undefined && cell.z !== undefined) {
        // 检查当前单元格是否是枢纽单元格
        const isPivotCell = cell.pivotCell && 
          ((Array.isArray(cell.pivotCell) && cell.pivotCell[0] === cell.row && cell.pivotCell[1] === cell.col) ||
           (cell.pivotCell.row === cell.row && cell.pivotCell.col === cell.col));
        
        // 检查当前单元格是否是XZ或YZ翼单元格
        const isXZCell = cell.xzCell && 
          ((Array.isArray(cell.xzCell) && cell.xzCell[0] === cell.row && cell.xzCell[1] === cell.col) ||
           (cell.xzCell.row === cell.row && cell.xzCell.col === cell.col));
        
        const isYZCell = cell.yzCell && 
          ((Array.isArray(cell.yzCell) && cell.yzCell[0] === cell.row && cell.yzCell[1] === cell.col) ||
           (cell.yzCell.row === cell.row && cell.yzCell.col === cell.col));
        
        // 对于枢纽单元格中的x和y候选数，使用绿底黑字
        if (isPivotCell && (note === cell.x || note === cell.y)) {
          backgroundColor = '#00FF00'; // 绿色背景
          textColor = '#000000'; // 黑色文字
        }
        
        // 对于XZ翼单元格中的x候选数，使用绿底黑字
        if (isXZCell && note === cell.x) {
          backgroundColor = '#00FF00'; // 绿色背景
          textColor = '#000000'; // 黑色文字
        }
        
        // 对于YZ翼单元格中的y候选数，使用绿底黑字
        if (isYZCell && note === cell.y) {
          backgroundColor = '#00FF00'; // 绿色背景
          textColor = '#000000'; // 黑色文字
        }
      }
      
      return (
        <div
          key={`condition-note-${cell.row}-${cell.col}-${note}`}
          style={{
            position: 'absolute',
            left: `${left}px`,
            top: `${top}px`,
            width: `${noteSize}px`,
            height: `${noteSize}px`,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius, // 使用动态设置的圆角
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            fontWeight: 'bold',
            border: `${borderWidth} solid ${borderColor}`,
            boxShadow: boxShadow,
            transform: 'scale(1)',
            transition: 'all 0.2s ease'
          }}
        >
          <span
            style={{
              fontSize: `${noteSize * 0.7}px`,
              fontWeight: 'bold',
              color: textColor,
              zIndex: 55,
              fontFamily: 'Arial, sans-serif',
              textShadow: textShadow
            }}
          >
            {note}
          </span>
        </div>
      );
    });
  };

  // 获取单元格的样式 - 用于技巧高亮
  const getCellStyle = (cell) => {
    // 检查是否为ALS-XZ技巧，如果是，移除单元格高亮
    const isALSXZTechnique = cell.techniqueType && cell.techniqueType.includes('alsXZ');
    const isBasicTechnique = cell.techniqueType && (
      cell.techniqueType === 'nakedSingle' ||
      cell.techniqueType === 'notesSingle' ||
      cell.techniqueType.includes('hiddenSingle') ||
      cell.techniqueType.includes('pair') ||
      cell.techniqueType.includes('triple') ||
      cell.techniqueType.includes('quad') ||
      cell.techniqueType.includes('xWing') ||
      cell.techniqueType.includes('swordfish') ||
      cell.techniqueType.includes('yWing') ||
      cell.techniqueType.includes('xyzWing')
    );
    
    // 对于ALS-XZ技巧，只高亮候选数，不高亮单元格
    if (isALSXZTechnique) {
      return null;
    }
    
    // 基础技巧（唯一余数、隐性唯一数、候选数唯一法）使用SudokuBoard中的新指示系统，TechniqueOverlay不处理
    if (isBasicTechnique) {
      return null;
    }
    
    // 对于X-Wing、Swordfish、Y-Wing、XYZ-Wing、显性三链数等技巧，不高亮removal类型的单元格
    // 这些技巧只需要在候选数级别高亮删除目标，不需要单元格级别的红底高亮
    const isAdvancedTechnique = cell.techniqueType && (
      cell.techniqueType.includes('xWing') ||
      cell.techniqueType.includes('swordfish') ||
      cell.techniqueType.includes('yWing') ||
      cell.techniqueType.includes('xyzWing') ||
      cell.techniqueType.includes('nakedTriple')
    );
    
    if (isAdvancedTechnique) {
      return null; // 所有高级技巧：不高亮单元格
    }
    
    // 所有其他技巧（显性数寸、昔性数寸、指向对法、宫行列排除法等）：不高亮单元格
    return null;
  };

  // 渲染单个单元格
  const renderCell = (cell) => {
    // 基础技巧使用SudokuBoard中的新指示系统，跳过TechniqueOverlay的处理
    const isBasicTechnique = cell.techniqueType === 'nakedSingle' || 
                              cell.techniqueType === 'notesSingle' || 
                              cell.techniqueType?.includes('hiddenSingle');
    
    if (isBasicTechnique) {
      return null; // 跳过基础技巧的整个渲染
    }
    
    // 获取单元格样式
    const cellStyle = getCellStyle(cell);
    
    // 计算单元格位置
    const left = cell.col * cellWidth;
    const top = cell.row * cellHeight;
    
    return (
      <div
        key={`tech-cell-${cell.row}-${cell.col}`}
        style={{
          position: 'absolute',
          left: `${left}px`,
          top: `${top}px`,
          width: `${cellWidth}px`,
          height: `${cellHeight}px`,
          zIndex: 1
        }}
      >
        {/* 渲染单元格背景高亮 */}
        {cellStyle && <div style={cellStyle} />}
        
        {/* 渲染条件候选数高亮 */}
        {renderConditionNotes(cell)}
        
        {/* 渲染需要删除的候选数高亮 */}
        {renderRemovableNotes(cell)}
        
        {/* 如果有技巧值，渲染技巧值 */}
        {(cell.value !== undefined && cell.value !== null || cell.number !== undefined && cell.number !== null) && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100, // 提高zIndex确保数字在所有背景之上
              pointerEvents: 'none'
            }}
          >
            <span
              style={{
                fontSize: fontSize,
                fontWeight: 'bold',
                // 唯一余数、隐性唯一数、候选数唯一法使用白色字体，其他技巧使用红色字体
                color: (cell.techniqueType === 'nakedSingle' || 
                        cell.techniqueType === 'notesSingle' || 
                        cell.techniqueType?.includes('hiddenSingle')) 
                       ? '#FFFFFF' 
                       : '#FF0000'
                // 不使用阴影，按用户要求
              }}
            >
              {cell.value !== undefined && cell.value !== null ? cell.value : cell.number}
            </span>
          </div>
        )}
      </div>
    );
  };

  // 渲染高亮区域
  const renderArea = (area) => {
    const { type } = area;
    let style = {};
    
    if (type === 'row') {
      style = {
        position: 'absolute',
        left: 0,
        top: `${area.row * cellHeight}px`,
        width: boardWidth,
        height: cellHeight,
        backgroundColor: area.isALSXZ ? 'rgba(173, 216, 230, 0.2)' : 'rgba(0, 255, 0, 0.3)',
        zIndex: 5,
        pointerEvents: 'none'
      };
    } else if (type === 'col') {
      style = {
        position: 'absolute',
        left: `${area.col * cellWidth}px`,
        top: 0,
        width: cellWidth,
        height: overlayHeight,
        backgroundColor: area.isALSXZ ? 'rgba(173, 216, 230, 0.2)' : 'rgba(0, 255, 0, 0.3)',
        zIndex: 5,
        pointerEvents: 'none'
      };
    } else if (type === 'box') {
      const { boxRow, boxCol } = area;
      style = {
        position: 'absolute',
        left: `${boxCol * 3 * cellWidth}px`,
        top: `${boxRow * 3 * cellHeight}px`,
        width: `${3 * cellWidth}px`,
        height: `${3 * cellHeight}px`,
        backgroundColor: area.isALSXZ ? 'rgba(173, 216, 230, 0.2)' : 'rgba(0, 255, 0, 0.3)',
        zIndex: 5,
        pointerEvents: 'none'
      };
    }
    
    return <div key={area.key} style={style} />;
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: boardWidth,
        height: overlayHeight,
        pointerEvents: 'none'
      }}
    >
      {/* 渲染高亮区域 */}
      {renderRelatedAreas.map(renderArea)}
      
      {/* 渲染高亮单元格 */}
      {techniqueCells.map(renderCell)}
    </div>
  );
};

export default TechniqueOverlay;