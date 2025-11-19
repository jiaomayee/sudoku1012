/**
 * 在棋盘中查找所有 AR Type 1 机会
 * @param {Array<Array<number>>} board - 数独棋盘
 * @param {Object} pencilNotes - 候选数标注 {"row-col": [候选数数组]}
 * @param {Array<Array<number>>} solution - 数独答案（可选）
 * @returns {Array} - 找到的 AR Type 1 机会数组
 */
export const findARType1 = (board, pencilNotes = {}, solution = null) => {
  const opportunities = [];
  
  // 建立候选数表
  const candidatesMap = {};
  let emptyCellCount = 0;
  let cellsWithCandidatesCount = 0;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        emptyCellCount++;
        const cellKey = `${row}-${col}`;
        const cands = pencilNotes[cellKey] || [];
        if (cands.length > 0) cellsWithCandidatesCount++;
        candidatesMap[cellKey] = {
          row,
          col,
          candidates: cands
        };
      }
    }
  }
  
  // 仅当有足够的候选数时才找查 AR
  if (cellsWithCandidatesCount < 4) {
    console.log(`[AR Type 1] 候选数不足，跳过检查 (${cellsWithCandidatesCount} < 4)`);
    return [];
  }
  
  console.log(`[AR Type 1] 空单元格=${emptyCellCount}, 有候选数=${cellsWithCandidatesCount}, 开始检查矩形...`);
  
  // 检查所有可能的矩形（由两行两列组成）
  for (let row1 = 0; row1 < 9; row1++) {
    for (let row2 = row1 + 1; row2 < 9; row2++) {
      for (let col1 = 0; col1 < 9; col1++) {
        for (let col2 = col1 + 1; col2 < 9; col2++) {
          // 获取四个角单元格
          const cell1 = candidatesMap[`${row1}-${col1}`];
          const cell2 = candidatesMap[`${row1}-${col2}`];
          const cell3 = candidatesMap[`${row2}-${col1}`];
          const cell4 = candidatesMap[`${row2}-${col2}`];
          
          // 跳过希疏的矩形（需要所有四个单元格都有候选数）
          if (!cell1 || !cell2 || !cell3 || !cell4) continue;
          if (cell1.candidates.length === 0 || cell2.candidates.length === 0 || 
              cell3.candidates.length === 0 || cell4.candidates.length === 0) continue;
          
          // 检查 AR Type 1 模式
          const result = checkARType1Pattern(board, pencilNotes, cell1, cell2, cell3, cell4, solution);
          if (result) {
            console.log(`[AR Type 1] 找到模式于 (${row1},${col1}), (${row1},${col2}), (${row2},${col1}), (${row2},${col2}), 基础数对=${result.basePair}`);
            opportunities.push(result);
          }
        }
      }
    }
  }
  
  // 调试：输出找到的机会数量
  if (opportunities.length > 0) {
    console.log(`[AR Type 1] 输出结果: 找到 ${opportunities.length} 个机会`);
    opportunities.forEach((opp, i) => {
      console.log(`  机会${i+1}: ${opp.message}`);
    });
  } else {
    console.log(`[AR Type 1] 没有找到有效模式`);
  }
  
  // 按可删除候选数数量排序，多的优先
  opportunities.sort((a, b) => b.removableCandidates.length - a.removableCandidates.length);
  
  // 返回最多前5条机会
  return opportunities.slice(0, 5);
};

/**
 * 检查 AR Type 1 模式
 * 四个单元格都有相同的两个候选数（基础数对），至少一个有额外的候选数
 */
function checkARType1Pattern(board, pencilNotes, cell1, cell2, cell3, cell4, solution) {
  // AR Type 1: 找一对候选数作为基础数对
  // 四个单元格都必须包含这对数字
  // 至少一个单元格有额外候选数
  // 矩形需要跟越两个宫
  
  const cells = [cell1, cell2, cell3, cell4];
  
  // 检查是否有候选数
  if (cells.some(c => !c || c.candidates.length === 0)) {
    return null;
  }
  
  // 检查是否跟越两个宫（定义：并际不是全部在同一个宫）
  const boxes = cells.map(c => {
    const boxRow = Math.floor(c.row / 3);
    const boxCol = Math.floor(c.col / 3);
    return boxRow * 3 + boxCol;
  });
  const uniqueBoxes = new Set(boxes);
  // AR 类冶预是对跟越两个宫的特殊结构的优化
  // 但通绋的定义是：并非所有两个的組合都在一个宫中
  // 为了漈且有效，我们此处不强制要求跟越条件
  
  // 获取所有四个单元格中出现的候选数
  const allNumbers = new Set();
  cells.forEach(cell => {
    cell.candidates.forEach(c => allNumbers.add(c));
  });
  
  // 转换为数组并排序
  const numberList = Array.from(allNumbers).sort((a, b) => a - b);
  
  // 尝试所有可能的基础数对
  for (let i = 0; i < numberList.length; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      const basePair = [numberList[i], numberList[j]];
      const result = checkARType1WithBasePair(cells, basePair, solution);
      if (result) {
        console.log(`[AR Type 1] 找到有效模式于 (${cell1.row},${cell1.col}), (${cell2.row},${cell2.col}), (${cell3.row},${cell3.col}), (${cell4.row},${cell4.col}), 基础数对=${basePair}`);
        return result;
      }
    }
  }
  
  return null;
}

/**
 * 用给定的基础数对检查 AR Type 1 模式
 */
function checkARType1WithBasePair(cells, basePair, solution) {
  const cellsWithExtra = [];
  const cellsWithoutExtra = [];
  
  // 检查四个单元格是否都包含基础数对
  for (const cell of cells) {
    const hasBase1 = cell.candidates.includes(basePair[0]);
    const hasBase2 = cell.candidates.includes(basePair[1]);
    
    if (!hasBase1 || !hasBase2) {
      // 不是有效的 AR（至少一个单元格不包含基础数对）
      return null;
    }
    
    // 检查是否有额外候选数
    const extraCandidates = cell.candidates.filter(
      c => c !== basePair[0] && c !== basePair[1]
    );
    
    if (extraCandidates.length > 0) {
      cellsWithExtra.push({
        ...cell,
        extraCandidates: extraCandidates
      });
    } else {
      cellsWithoutExtra.push(cell);
    }
  }
  
  // AR Type 1 需要至少一个单元格有额外候选数，且至少一个单元格没有
  if (cellsWithExtra.length === 0 || cellsWithoutExtra.length === 0) {
    return null;
  }
  
  // AR Type 1 只能有一个单元格有额外候选数
  if (cellsWithExtra.length !== 1) {
    return null;
  }
  
  // 计算可删除的候选数
  const removableCandidates = [];
  const extraCell = cellsWithExtra[0];
  
  // AR Type 1 策略：从不含额外候选数的单元格中删除基础数对中的某个数
  // 为了避免多重解，需要删除其中一个基础数
  // 我们尝试两种情况：先尝试删除basePair[0]，如果没有可删除的就尝试basePair[1]
  
  // 先尝试删除 basePair[0]
  let candidates0 = 0;
  for (const cell of cellsWithoutExtra) {
    if (cell.candidates.includes(basePair[0])) {
      removableCandidates.push({
        row: cell.row,
        col: cell.col,
        value: basePair[0]
      });
      candidates0++;
    }
  }
  
  // 如果删除basePair[0]没有结果，尝试删除basePair[1]
  if (candidates0 === 0) {
    removableCandidates.length = 0; // 清空
    for (const cell of cellsWithoutExtra) {
      if (cell.candidates.includes(basePair[1])) {
        removableCandidates.push({
          row: cell.row,
          col: cell.col,
          value: basePair[1]
        });
      }
    }
  }
  
  if (removableCandidates.length === 0) {
    return null;
  }

  // 构建 AR Type 1 机会对象
  return {
    type: 'arType1',
    description: 'Avoidable Rectangle Type 1 技巧',
    basePair: basePair,
    arCells: cells.map(c => [c.row, c.col]),
    cellsWithExtra: cellsWithExtra.map(c => ({
      row: c.row,
      col: c.col,
      extraCandidates: c.extraCandidates
    })),
    cellsWithoutExtra: cellsWithoutExtra.map(c => [c.row, c.col]),
    removableCandidates: removableCandidates,
    cells: cells.map(c => [c.row, c.col]),
    sourceCells: cells.map(c => [c.row, c.col]),
    targetCells: removableCandidates.map(r => [r.row, r.col]),
    values: basePair,
    message: `Avoidable Rectangle Type 1：${removableCandidates.length}个候选数可删除`
  };
}
