// SDC (Sue De Coq) 技巧实现（部分实现）
// Sue De Coq技巧是一种高级数独技巧，用于删除候选数
// 它结合了行/列与宫的交叉，通过分析候选数的分布来消除不可能的候选数
// 
// 注意：当前版本为简化实现，仅能检测候选数有明确分离的情况
// 完整实现需要组合搜索算法，能够尝试所有可能的候选数分配方案

/**
 * 查找SDC技巧机会
 * Sue De Coq技巧规则：
 * 1. 在一个宫中找到2个空单元格（称为SDC单元格），它们在同一行或同一列
 * 2. 这2个单元格的候选数并集为N个数字（N>=3）
 * 3. 将这N个数字分为两组：组A（在该行/列的其他宫中的单元格）和组B（在该宫的其他行/列中的单元格）
 * 4. 如果组A的候选数恰好覆盖SDC单元格的部分候选数，组B的候选数恰好覆盖SDC单元格的另一部分候选数
 * 5. 那么可以从相关单元格中删除这些候选数
 * 
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的SDC技巧机会数组
 */
export const findSDC = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 遍历每个宫
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      // 在每个宫中查找SDC模式
      const sdcInBox = findSDCInBox(board, pencilNotes, boxRow, boxCol);
      opportunities.push(...sdcInBox);
      
      // 限制机会数量，避免过多计算
      if (opportunities.length >= 5) {
        return opportunities.slice(0, 5);
      }
    }
  }
  
  return opportunities;
};

/**
 * 在指定宫中查找SDC模式
 */
const findSDCInBox = (board, pencilNotes, boxRow, boxCol) => {
  const opportunities = [];
  const boxStartRow = boxRow * 3;
  const boxStartCol = boxCol * 3;
  
  // 收集该宫中的所有空单元格
  const emptyCellsInBox = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = boxStartRow + r;
      const col = boxStartCol + c;
      if (board[row][col] === 0) {
        const cellKey = `${row}-${col}`;
        const candidates = pencilNotes[cellKey] || [];
        if (candidates.length >= 2) {
          emptyCellsInBox.push({ row, col, candidates });
        }
      }
    }
  }
  
  // SDC需要至少2个空单元格
  if (emptyCellsInBox.length < 2) {
    return opportunities;
  }
  
  // 检查所有2单元格组合（SDC单元格对）
  for (let i = 0; i < emptyCellsInBox.length - 1; i++) {
    for (let j = i + 1; j < emptyCellsInBox.length; j++) {
      const cell1 = emptyCellsInBox[i];
      const cell2 = emptyCellsInBox[j];
      
      // SDC要求两个单元格在同一行或同一列
      const sameRow = cell1.row === cell2.row;
      const sameCol = cell1.col === cell2.col;
      
      if (!sameRow && !sameCol) {
        continue; // 不在同一行或列，跳过
      }
      
      // 合并两个单元格的候选数
      const sdcCandidates = [...new Set([...cell1.candidates, ...cell2.candidates])];
      
      // SDC候选数至少需要3个数字
      if (sdcCandidates.length < 3) {
        continue;
      }
      
      // 分析SDC模式
      const sdcPattern = analyzeSDCPattern(
        board, 
        pencilNotes, 
        cell1, 
        cell2, 
        sdcCandidates,
        sameRow,
        boxRow,
        boxCol
      );
      
      if (sdcPattern && sdcPattern.removableCandidates.length > 0) {
        opportunities.push(sdcPattern);
      }
    }
  }
  
  return opportunities;
};

/**
 * 分析SDC模式
 * 根据HoDoKu的实现逻辑：
 * 1. SDC单元格（C）是宫和行/列交叉的单元格
 * 2. V是C中的所有候选数，|V| >= |C| + 2
 * 3. 在宫中找到单元格CB，在行/列中找到单元格CR
 * 4. CB和CR的候选数VB和VR必须从 V 中抽取
 * 5. 关键：VB和VR不能有交集！
 * 6. 可以从宫中删除V\VB，从行/列中删除V\VR
 */
const analyzeSDCPattern = (board, pencilNotes, cell1, cell2, sdcCandidates, sameRow, boxRow, boxCol) => {
  const sdcCells = [cell1, cell2];
  const lineIndex = sameRow ? cell1.row : cell1.col; // 行号或列号
  const isRow = sameRow;
  
  // 候选数必须比单元格数多至少2个
  const nPlus = sdcCandidates.length - sdcCells.length;
  if (nPlus < 2) {
    return null;
  }
  
  // 获取该行/列在其他宫中的单元格（组A - 行/列方向）
  const lineCellsInOtherBoxes = getLineCellsInOtherBoxes(
    board, 
    pencilNotes, 
    lineIndex, 
    isRow, 
    boxRow, 
    boxCol
  );
  
  // 获取该宫中其他行/列的单元格（组B - 宫方向）
  const boxCellsInOtherLines = getBoxCellsInOtherLines(
    board, 
    pencilNotes, 
    lineIndex, 
    isRow, 
    boxRow, 
    boxCol
  );
  
  // 如果两组都为空，无法形成SDC
  if (lineCellsInOtherBoxes.length === 0 || boxCellsInOtherLines.length === 0) {
    return null;
  }
  
  // 收集组A和组B的所有候选数
  const allLineCandidates = collectCandidates(lineCellsInOtherBoxes);
  const allBoxCandidates = collectCandidates(boxCellsInOtherLines);
  const onlyInLine = sdcCandidates.filter(c => 
    allLineCandidates.includes(c) && !allBoxCandidates.includes(c)
  );
  // 找到只在组B中的候选数（且在SDC中）
  const onlyInBox = sdcCandidates.filter(c => 
    !allLineCandidates.includes(c) && allBoxCandidates.includes(c)
  );
  // 同时在两组中的候选数
  const inBoth = sdcCandidates.filter(c => 
    allLineCandidates.includes(c) && allBoxCandidates.includes(c)
  );
  // 只在SDC中的候选数
  const onlyInSDC = sdcCandidates.filter(c => 
    !allLineCandidates.includes(c) && !allBoxCandidates.includes(c)
  );
  
  // SDC条件：必须有只在一组中的候选数，否则无法删除
  if (onlyInLine.length === 0 && onlyInBox.length === 0) {
    return null;
  }
  
  // 现在我们需要分配那些“同时在两组中”的候选数
  // 最简单的方法：将它们分配给组A或组B，使得两组没有交集
  // 我们不分配，直接检查是否能删除候选数
  
  const lineCandidates = [...onlyInLine, ...inBoth];
  const boxCandidates = [...onlyInBox, ...inBoth];
  
  // 检查覆盖性
  const covered = [...new Set([...lineCandidates, ...boxCandidates])];
  const notCovered = sdcCandidates.filter(c => !covered.includes(c));
  
  // 找出可以删除的候选数
  const removableCandidates = [];
  
  // 从行/列的其他单元格中删除“只在组B中”的候选数
  lineCellsInOtherBoxes.forEach(cell => {
    const cellKey = `${cell.row}-${cell.col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    onlyInBox.forEach(num => {
      if (cellCandidates.includes(num)) {
        removableCandidates.push({
          row: cell.row,
          col: cell.col,
          value: num,
          reason: 'onlyInBox'
        });
      }
    });
  });
  
  // 从宫的其他单元格中删除“只在组A中”的候选数
  boxCellsInOtherLines.forEach(cell => {
    const cellKey = `${cell.row}-${cell.col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    onlyInLine.forEach(num => {
      if (cellCandidates.includes(num)) {
        removableCandidates.push({
          row: cell.row,
          col: cell.col,
          value: num,
          reason: 'onlyInLine'
        });
      }
    });
  });
  
  // 去重
  const uniqueRemovable = removableCandidates.filter((item, index, self) => 
    index === self.findIndex(t => t.row === item.row && t.col === item.col && t.value === item.value)
  );
  
  if (uniqueRemovable.length === 0) {
    return null;
  }
  
  // 构建SDC机会对象
  return {
    type: 'sdc',
    description: `Sue De Coq技巧`,
    sdcCells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
    sdcCandidates: sdcCandidates,
    lineType: isRow ? 'row' : 'col',
    lineIndex: lineIndex,
    boxIndex: boxRow * 3 + boxCol,
    groupA: {
      cells: lineCellsInOtherBoxes.map(c => [c.row, c.col]),
      candidates: onlyInLine
    },
    groupB: {
      cells: boxCellsInOtherLines.map(c => [c.row, c.col]),
      candidates: onlyInBox
    },
    removableCandidates: uniqueRemovable,
    cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
    sourceCells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
    targetCells: uniqueRemovable.map(rc => [rc.row, rc.col]),
    values: sdcCandidates,
    // 为高亮指示添加额外信息
    highlightInfo: {
      sdcCells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
      groupACells: lineCellsInOtherBoxes.map(c => [c.row, c.col]),
      groupBCells: boxCellsInOtherLines.map(c => [c.row, c.col]),
      sdcCandidates: sdcCandidates,
      groupACandidates: onlyInLine,
      groupBCandidates: onlyInBox,
      targetCandidates: uniqueRemovable
    },
    message: generateSDCMessage(isRow, lineIndex, boxRow * 3 + boxCol, sdcCandidates, uniqueRemovable.length)
  };
};

/**
 * 获取该行/列在其他宫中的空单元格（组A）
 */
const getLineCellsInOtherBoxes = (board, pencilNotes, lineIndex, isRow, currentBoxRow, currentBoxCol) => {
  const cells = [];
  
  if (isRow) {
    // 遍历该行的其他宫
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      if (boxCol === currentBoxCol) continue; // 跳过当前宫
      
      const boxStartCol = boxCol * 3;
      for (let c = 0; c < 3; c++) {
        const col = boxStartCol + c;
        if (board[lineIndex][col] === 0) {
          const cellKey = `${lineIndex}-${col}`;
          const candidates = pencilNotes[cellKey] || [];
          if (candidates.length > 0) {
            cells.push({ row: lineIndex, col, candidates });
          }
        }
      }
    }
  } else {
    // 遍历该列的其他宫
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      if (boxRow === currentBoxRow) continue; // 跳过当前宫
      
      const boxStartRow = boxRow * 3;
      for (let r = 0; r < 3; r++) {
        const row = boxStartRow + r;
        if (board[row][lineIndex] === 0) {
          const cellKey = `${row}-${lineIndex}`;
          const candidates = pencilNotes[cellKey] || [];
          if (candidates.length > 0) {
            cells.push({ row, col: lineIndex, candidates });
          }
        }
      }
    }
  }
  
  return cells;
};

/**
 * 获取该宫中其他行/列的空单元格（组B）
 */
const getBoxCellsInOtherLines = (board, pencilNotes, lineIndex, isRow, boxRow, boxCol) => {
  const cells = [];
  const boxStartRow = boxRow * 3;
  const boxStartCol = boxCol * 3;
  
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = boxStartRow + r;
      const col = boxStartCol + c;
      
      // 跳过SDC单元格所在的行/列
      if (isRow && row === lineIndex) continue;
      if (!isRow && col === lineIndex) continue;
      
      if (board[row][col] === 0) {
        const cellKey = `${row}-${col}`;
        const candidates = pencilNotes[cellKey] || [];
        if (candidates.length > 0) {
          cells.push({ row, col, candidates });
        }
      }
    }
  }
  
  return cells;
};

/**
 * 收集单元格数组的所有候选数（去重）
 */
const collectCandidates = (cells) => {
  const allCandidates = new Set();
  cells.forEach(cell => {
    cell.candidates.forEach(num => allCandidates.add(num));
  });
  return Array.from(allCandidates).sort((a, b) => a - b);
};

/**
 * 生成SDC提示消息
 */
const generateSDCMessage = (isRow, lineIndex, boxIndex, sdcCandidates, removableCount) => {
  const lineType = isRow ? '行' : '列';
  const lineNumber = lineIndex + 1;
  const boxNumber = boxIndex + 1;
  const candidatesStr = sdcCandidates.join(',');
  
  return `Sue De Coq技巧：在第${boxNumber}宫的第${lineNumber}${lineType}中，候选数${candidatesStr}形成SDC模式，可以从${removableCount}个单元格中删除相关候选数。`;
};

/**
 * 应用SDC技巧
 * @param {Object} sdcOpportunity SDC机会对象
 * @param {Object} pencilNotes 候选数对象
 * @returns {Object} 更新后的候选数对象和删除的候选数列表
 */
export const applySDC = (sdcOpportunity, pencilNotes) => {
  const updatedNotes = { ...pencilNotes };
  const removedCandidates = [];
  
  // 删除所有可删除的候选数
  sdcOpportunity.removableCandidates.forEach(({ row, col, value }) => {
    const cellKey = `${row}-${col}`;
    if (updatedNotes[cellKey]) {
      const originalCandidates = [...updatedNotes[cellKey]];
      updatedNotes[cellKey] = updatedNotes[cellKey].filter(num => num !== value);
      
      if (originalCandidates.length !== updatedNotes[cellKey].length) {
        removedCandidates.push({ row, col, value });
      }
    }
  });
  
  return {
    pencilNotes: updatedNotes,
    removedCandidates
  };
};

export default { findSDC, applySDC };
