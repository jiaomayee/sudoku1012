// SDC (Sue De Coq) 技巧实现
// 基于HoDoKu的完整实现
// Sue De Coq技巧是一种高级数独技巧，用于删除候选数
// 它结合了行/列与宫的交叉，通过分析候选数的分布来消除不可能的候选数
//
// 算法流程：
// 1. 找到行/列与宫的交叉点（2-3个空单元格）
// 2. 检查交叉点候选数是否比单元格数多至少2个（nPlus >= 2）
// 3. 递归搜索：在行/列和宫中各找nPlus个单元格
// 4. 验证：两组单元格的候选数不能有交集
// 5. 删除：从相应位置删除候选数

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
 * 分析SDC模式（基于HoDoKu的完整实现）
 * 核心逻辑：
 * 1. 需要在行/列和宫中各找nPlus个单元格
 * 2. 这些单元格的候选数必须是SDC候选数的子集
 * 3. 两组候选数不能有交集
 * 4. 需要搜索所有可能的单元格组合
 */
const analyzeSDCPattern = (board, pencilNotes, cell1, cell2, sdcCandidates, sameRow, boxRow, boxCol) => {
  const sdcCells = [cell1, cell2];
  const lineIndex = sameRow ? cell1.row : cell1.col;
  const isRow = sameRow;
  
  const nPlus = sdcCandidates.length - sdcCells.length;
  if (nPlus < 2) {
    return null;
  }
  
  // 获取可用的单元格集合
  const lineCells = getLineCellsInOtherBoxes(board, pencilNotes, lineIndex, isRow, boxRow, boxCol);
  const boxCells = getBoxCellsInOtherLines(board, pencilNotes, lineIndex, isRow, boxRow, boxCol);
  
  if (lineCells.length === 0 || boxCells.length === 0) {
    return null;
  }
  
  // 将SDC候选数转换为位掩码形式（优化性能）
  const sdcCandMask = candidatesToMask(sdcCandidates);
  
  // 递归搜索行/列中的nPlus个单元格组合
  const lineResults = searchCombinations(lineCells, nPlus, sdcCandMask);
  
  // 对每个行/列组合，搜索匹配的宫组合
  for (const lineCombo of lineResults) {
    // 宫中允许的候选数 = SDC候选数 - 行/列组合的候选数
    const boxAllowedMask = sdcCandMask & ~lineCombo.candMask;
    
    // 搜索宫中的nPlus个单元格组合
    const boxResults = searchCombinations(boxCells, nPlus, boxAllowedMask);
    
    for (const boxCombo of boxResults) {
      // 检查两组候选数是否有交集
      if ((lineCombo.candMask & boxCombo.candMask) !== 0) {
        continue; // 有交集，跳过
      }
      
      // 找到有效的SDC！现在检查可删除的候选数
      const removable = findRemovableCandidates(
        pencilNotes,
        lineCells,
        boxCells,
        lineCombo,
        boxCombo,
        sdcCandidates
      );
      
      if (removable.length > 0) {
        // 构建SDC机会对象
        const lineCandidates = maskToCandidates(lineCombo.candMask);
        const boxCandidates = maskToCandidates(boxCombo.candMask);
        
        return {
          type: 'sdc',
          description: `Sue De Coq技巧`,
          sdcCells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
          sdcCandidates: sdcCandidates,
          lineType: isRow ? 'row' : 'col',
          lineIndex: lineIndex,
          boxIndex: boxRow * 3 + boxCol,
          groupA: {
            cells: lineCombo.cells.map(idx => {
              const cell = lineCells[idx];
              return [cell.row, cell.col];
            }),
            candidates: lineCandidates
          },
          groupB: {
            cells: boxCombo.cells.map(idx => {
              const cell = boxCells[idx];
              return [cell.row, cell.col];
            }),
            candidates: boxCandidates
          },
          removableCandidates: removable,
          cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
          sourceCells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
          targetCells: removable.map(rc => [rc.row, rc.col]),
          values: sdcCandidates,
          highlightInfo: {
            sdcCells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
            groupACells: lineCombo.cells.map(idx => {
              const cell = lineCells[idx];
              return [cell.row, cell.col];
            }),
            groupBCells: boxCombo.cells.map(idx => {
              const cell = boxCells[idx];
              return [cell.row, cell.col];
            }),
            sdcCandidates: sdcCandidates,
            groupACandidates: lineCandidates,
            groupBCandidates: boxCandidates,
            targetCandidates: removable
          },
          message: generateSDCMessage(isRow, lineIndex, boxRow * 3 + boxCol, sdcCandidates, removable.length)
        };
      }
    }
  }
  
  return null;
};

/**
 * 将候选数数组转换为位掩码
 */
const candidatesToMask = (candidates) => {
  let mask = 0;
  for (const cand of candidates) {
    mask |= (1 << (cand - 1));
  }
  return mask;
};

/**
 * 将位掩码转换为候选数数组
 */
const maskToCandidates = (mask) => {
  const candidates = [];
  for (let i = 0; i < 9; i++) {
    if (mask & (1 << i)) {
      candidates.push(i + 1);
    }
  }
  return candidates;
};

/**
 * 递归搜索单元格组合，找到所有可能的nPlus个单元格的组合
 * 其候选数是allowedMask的子集
 * 
 * 注意：HoDoKu允许单元格有额外的候选数，但需要额外的单元格来容纳。
 * 这里我们先实现简化版本：允许单元格有任何候选数，只要它们的交集在allowedMask中
 * 
 * @param {Array} cells 候选单元格数组
 * @param {number} nPlus 需要选择的单元格数量
 * @param {number} allowedMask 允许的候选数位掩码
 * @returns {Array} 组合数组，每个元素包含{cells: [索引], candMask: 候选数掩码}
 */
const searchCombinations = (cells, nPlus, allowedMask) => {
  const results = [];
  
  // 如果nPlus为0，返回空组合
  if (nPlus === 0) {
    return [{ cells: [], candMask: 0 }];
  }
  
  // 如果可用单元格不足，返回空
  if (cells.length < nPlus) {
    return [];
  }
  
  // 预计算每个单元格的候选数掩码
  const cellMasks = cells.map(cell => candidatesToMask(cell.candidates));
  
  // 递归搜索
  const search = (startIdx, selectedIndices, combinedMask, depth) => {
    if (depth === nPlus) {
      // 找到了nPlus个单元格
      // 检查组合的候选数与allowedMask的交集
      const intersection = combinedMask & allowedMask;
      if (intersection !== 0) {
        // 至少有一些候选数在允许范围内
        results.push({
          cells: [...selectedIndices],
          candMask: intersection  // 只保留在allowedMask中的候选数
        });
      }
      return;
    }
    
    // 计算还需要选择的单元格数
    const remaining = nPlus - depth;
    
    // 遍历剩余的单元格
    for (let i = startIdx; i <= cells.length - remaining; i++) {
      const cellMask = cellMasks[i];
      
      // 检查该单元格是否有任何候选数在allowedMask中
      if ((cellMask & allowedMask) === 0) {
        continue; // 该单元格没有允许的候选数，跳过
      }
      
      // 选择该单元格，继续递归
      selectedIndices.push(i);
      search(i + 1, selectedIndices, combinedMask | cellMask, depth + 1);
      selectedIndices.pop();
    }
  };
  
  search(0, [], 0, 0);
  return results;
};

/**
 * 查找可删除的候选数
 */
const findRemovableCandidates = (pencilNotes, lineCells, boxCells, lineCombo, boxCombo, sdcCandidates) => {
  const removable = [];
  
  // 获取两组的候选数
  const lineCandidates = maskToCandidates(lineCombo.candMask);
  const boxCandidates = maskToCandidates(boxCombo.candMask);
  
  // 从行/列的其他单元格中删除“只在宫中”的候选数
  for (let i = 0; i < lineCells.length; i++) {
    if (lineCombo.cells.includes(i)) {
      continue; // 跳过已选择的单元格
    }
    
    const cell = lineCells[i];
    const cellKey = `${cell.row}-${cell.col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    
    for (const num of boxCandidates) {
      if (cellCandidates.includes(num)) {
        removable.push({
          row: cell.row,
          col: cell.col,
          value: num,
          reason: 'boxOnly'
        });
      }
    }
  }
  
  // 从宫的其他单元格中删除“只在行/列中”的候选数
  for (let i = 0; i < boxCells.length; i++) {
    if (boxCombo.cells.includes(i)) {
      continue; // 跳过已选择的单元格
    }
    
    const cell = boxCells[i];
    const cellKey = `${cell.row}-${cell.col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    
    for (const num of lineCandidates) {
      if (cellCandidates.includes(num)) {
        removable.push({
          row: cell.row,
          col: cell.col,
          value: num,
          reason: 'lineOnly'
        });
      }
    }
  }
  
  // 去重
  const unique = removable.filter((item, index, self) => 
    index === self.findIndex(t => t.row === item.row && t.col === item.col && t.value === item.value)
  );
  
  return unique;
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
