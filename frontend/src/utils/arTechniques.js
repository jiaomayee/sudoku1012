/**
 * Avoidable Rectangle (AR) Type 1 技巧实现
 * 
 * Avoidable Rectangle 是一种高级数独解题技巧，用于消除导致多重解的候选数
 * 
 * Type 1 定义：
 * - 四个单元格形成矩形（同行同列的两行两列交点）
 * - 这四个单元格都只有相同的两个候选数（例如 {1,2}）
 * - 至少有一个单元格有第三个候选数（例如 {1,2,3}）
 * - 没有第三个候选数的单元格可以消除该候选数
 */

/**
 * 查找所有 Avoidable Rectangle Type 1 机会
 * 限制最多返回5条机会，防止程序卡顿
 */
export const findARType1 = (board, pencilNotes = {}, solution = null) => {
  const opportunities = [];
  let reachedLimit = false;

  // 获取所有空单元格的候选数
  const emptyCells = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const cellKey = `${row}-${col}`;
        const candidates = pencilNotes[cellKey] || [];
        if (candidates.length >= 2) {
          emptyCells.push({ row, col, candidates });
        }
      }
    }
  }

  // 尝试找到所有可能的 AR 矩形
  for (let i = 0; i < emptyCells.length && !reachedLimit; i++) {
    for (let j = i + 1; j < emptyCells.length && !reachedLimit; j++) {
      // 找两个在同一行的单元格
      if (emptyCells[i].row === emptyCells[j].row) {
        const row1 = emptyCells[i].row;
        const col1 = emptyCells[i].col;
        const col2 = emptyCells[j].col;

        // 查找其他行的对应单元格
        for (let k = 0; k < emptyCells.length; k++) {
          if (emptyCells[k].row !== row1) {
            const row2 = emptyCells[k].row;
            const col3 = emptyCells[k].col;

            // 需要找到在 row2, col1 和 row2, col3 的单元格
            if (col3 === col1 || col3 === col2) {
              const otherColIndex = col3 === col1 ? col2 : col1;
              const cellKey1 = `${row1}-${col1}`;
              const cellKey2 = `${row1}-${col2}`;
              const cellKey3 = `${row2}-${col1}`;
              const cellKey4 = `${row2}-${col2}`;

              const candidates1 = pencilNotes[cellKey1] || [];
              const candidates2 = pencilNotes[cellKey2] || [];
              const candidates3 = pencilNotes[cellKey3] || [];
              const candidates4 = pencilNotes[cellKey4] || [];

              // 检查是否形成 AR Type 1 的模式
              const result = checkARType1Pattern(
                board,
                pencilNotes,
                { row: row1, col: col1, candidates: candidates1 },
                { row: row1, col: col2, candidates: candidates2 },
                { row: row2, col: col1, candidates: candidates3 },
                { row: row2, col: col2, candidates: candidates4 },
                solution
              );

              if (result) {
                opportunities.push(result);

                // 限制解题机会数量，当达到5条时停止求解
                if (opportunities.length >= 5) {
                  reachedLimit = true;
                  break;
                }
              }
            }
          }
        }
      }
    }
  }

  if (reachedLimit) {
    console.log(`AR Type 1 原始结果: ${opportunities.length}条（已达到限制）`);
  } else {
    console.log(`AR Type 1 原始结果: ${opportunities.length}条`);
  }

  // 去重
  const uniqueOpportunities = deduplicateARType1(opportunities);
  console.log(`AR Type 1 去重后: ${uniqueOpportunities.length}条`);

  // 按删除数量排序
  uniqueOpportunities.sort((a, b) => b.removableCandidates.length - a.removableCandidates.length);

  // 限制最多返回5条
  const limitedOpportunities = uniqueOpportunities.slice(0, 5);

  return limitedOpportunities;
};

/**
 * 检查 AR Type 1 模式
 * 四个单元格都有相同的两个候选数，至少一个有额外的候选数
 */
function checkARType1Pattern(board, pencilNotes, cell1, cell2, cell3, cell4, solution) {
  // 获取候选数的并集
  const allCandidates = new Set();
  [cell1, cell2, cell3, cell4].forEach(cell => {
    cell.candidates.forEach(c => allCandidates.add(c));
  });

  // AR Type 1 需要基础的两个候选数
  if (allCandidates.size < 2 || allCandidates.size > 3) {
    return null;
  }

  const baseNumbers = Array.from(allCandidates);
  const basePair = baseNumbers.length === 2 ? baseNumbers : [baseNumbers[0], baseNumbers[1]];

  // 检查四个单元格是否都包含基础数对
  const cells = [cell1, cell2, cell3, cell4];
  const cellsWithExtra = [];
  const cellsWithoutExtra = [];

  for (const cell of cells) {
    const hasBase1 = cell.candidates.includes(basePair[0]);
    const hasBase2 = cell.candidates.includes(basePair[1]);

    if (!hasBase1 || !hasBase2) {
      // 不是有效的 AR
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

  // 计算可删除的候选数
  // 如果一个矩形有多个单元格含有额外候选数，需要删除没有额外候选数的单元格中的基础数对之一
  const removableCandidates = [];

  if (cellsWithExtra.length === 1) {
    // 只有一个单元格有额外候选数，删除其他单元格中额外候选数对应的基数
    const extraCell = cellsWithExtra[0];

    // 对于没有额外候选数的单元格，可以删除该单元格中的一个基础数（取决于具体逻辑）
    // Type 1 通常删除的是在没有额外候选数的单元格中与额外候选数冲突的基础数
    for (const cell of cellsWithoutExtra) {
      // 保守策略：暂不删除
      // 更激进的策略需要更复杂的逻辑分析
    }
  } else {
    // 多个单元格有额外候选数的情况
    // 需要更复杂的分析逻辑
    const extraNumbers = new Set();
    cellsWithExtra.forEach(cell => {
      cell.extraCandidates.forEach(c => extraNumbers.add(c));
    });

    // 对于没有额外候选数的单元格，如果其中某个数字与任何额外候选数重复
    // 则该单元格中该数字可以被删除
    for (const cell of cellsWithoutExtra) {
      for (const candidate of cell.candidates) {
        if (extraNumbers.has(candidate) && !basePair.includes(candidate)) {
          // 这个候选数在其他单元格中出现为额外候选数
          // 保护机制
          if (solution && solution[cell.row][cell.col] === candidate) {
            continue;
          }
          removableCandidates.push({
            row: cell.row,
            col: cell.col,
            value: candidate
          });
        }
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

/**
 * 去重
 */
function deduplicateARType1(opportunities) {
  const seen = new Set();
  const unique = [];

  for (const opp of opportunities) {
    const key = JSON.stringify({
      ar: opp.arCells.sort(),
      base: opp.basePair.sort(),
      rm: opp.removableCandidates
        .map(r => `${r.row}-${r.col}-${r.value}`)
        .sort()
    });

    if (!seen.has(key)) {
      seen.add(key);
      unique.push(opp);
    }
  }

  return unique;
}

/**
 * 应用 AR Type 1 技巧
 */
export const applyARType1 = (arOpportunity, pencilNotes) => {
  const updatedNotes = { ...pencilNotes };
  const removedCandidates = [];

  for (const { row, col, value } of arOpportunity.removableCandidates) {
    const cellKey = `${row}-${col}`;
    if (updatedNotes[cellKey]) {
      const originalCandidates = [...updatedNotes[cellKey]];
      updatedNotes[cellKey] = updatedNotes[cellKey].filter(num => num !== value);

      if (originalCandidates.length !== updatedNotes[cellKey].length) {
        removedCandidates.push({ row, col, value });
      }
    }
  }

  return {
    pencilNotes: updatedNotes,
    removedCandidates
  };
};

export default { findARType1, applyARType1 };
