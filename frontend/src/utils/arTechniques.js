/**
 * AR Type 1（可避免矩形）：基于三个已填入的相同数字和一个含该数字候选的空格
 * 三个已填相同数字 + 一个含该数字的空格候选 = 致命模式
 * 推理：若关键格填入该数字，会导致题目多解，因此该候选数可删除
 * @param {Array<Array<number>>} board - 数独棋盘
 * @param {Object} pencilNotes - 候选数标注 {"row-col": [候选数数组]}
 * @param {Array<Array<number>>} solution - 数独答案（可选）
 * @returns {Array} - 找到的 AR Type 1 机会数组
 */
export const findARType1 = (board, pencilNotes = {}, solution = null) => {
  const opportunities = [];
  
  console.log(`[AR Type 1] 开始检查AR Type 1模式（基于已填数字）...`);
  
  // 扫描所有已填入的数字（1-9），查找出现3次或以上的情况
  for (let number = 1; number <= 9; number++) {
    // 找出所有包含该数字的单元格（已填入）
    const filledCells = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === number) {
          filledCells.push({ row, col });
        }
      }
    }
    
    // 如果该数字出现少于3次，无法形成AR结构
    if (filledCells.length < 3) continue;
    
    // 对所有包含该数字的已填单元格进行组合，寻找能形成矩形的三个单元格
    for (let i = 0; i < filledCells.length; i++) {
      for (let j = i + 1; j < filledCells.length; j++) {
        for (let k = j + 1; k < filledCells.length; k++) {
          const cell1 = filledCells[i];
          const cell2 = filledCells[j];
          const cell3 = filledCells[k];
          
          // 检查这三个单元格是否能形成矩形的三个角
          const rectangles = findRectangleCompletions(cell1, cell2, cell3);
          
          for (const rect of rectangles) {
            const { row1, col1, row2, col2, keyCell } = rect;
            
            // 检查第四个单元格（关键单元格）是否为空格且候选数包含该数字
            const cellKey = `${keyCell.row}-${keyCell.col}`;
            if (board[keyCell.row][keyCell.col] !== 0) continue; // 必须是空格
            
            const candidates = pencilNotes[cellKey] || [];
            if (!candidates.includes(number)) continue; // 关键单元格必须有该数字的候选
            
            // 找到了一个有效的AR Type 1结构
            const result = createARType1Opportunity(
              number,
              [cell1, cell2, cell3],
              keyCell,
              candidates,
              pencilNotes
            );
            
            if (result) {
              opportunities.push(result);
            }
          }
        }
      }
    }
  }
  
  // 去重：移除重复的机会
  const uniqueOpportunities = deduplicateOpportunities(opportunities);
  
  if (uniqueOpportunities.length > 0) {
    console.log(`[AR Type 1] 找到 ${uniqueOpportunities.length} 个AR Type 1机会`);
  } else {
    console.log(`[AR Type 1] 没有找到有效的AR Type 1模式`);
  }
  
  // 按可删除候选数数量排序，多的优先
  uniqueOpportunities.sort((a, b) => b.removableCandidates.length - a.removableCandidates.length);
  
  return uniqueOpportunities.slice(0, 5);
};

/**
 * 检查三个已填单元格是否能完成矩形，返回所有可能的第四个单元格位置
 */
function findRectangleCompletions(cell1, cell2, cell3) {
  const cells = [cell1, cell2, cell3];
  const rectangles = [];
  
  // 提取所有行和列
  const rows = new Set(cells.map(c => c.row));
  const cols = new Set(cells.map(c => c.col));
  
  // AR矩形需要恰好2行和2列（或特殊情况）
  // 标准情况：3个已填单元格分布在2行2列中的3个位置，第4个位置是空格
  if (rows.size === 2 && cols.size === 2) {
    const rowArray = Array.from(rows);
    const colArray = Array.from(cols);
    const row1 = rowArray[0];
    const row2 = rowArray[1];
    const col1 = colArray[0];
    const col2 = colArray[1];
    
    // 找出缺少的第四个位置
    const occupied = new Set(cells.map(c => `${c.row}-${c.col}`));
    const fourthCell = [row1, row2]
      .flatMap(r => [col1, col2].map(c => ({ row: r, col: c })))
      .find(c => !occupied.has(`${c.row}-${c.col}`));
    
    if (fourthCell) {
      rectangles.push({
        row1: row1,
        col1: col1,
        row2: row2,
        col2: col2,
        keyCell: fourthCell
      });
    }
  }
  
  return rectangles;
}

/**
 * 创建AR Type 1机会对象
 */
function createARType1Opportunity(number, filledCells, keyCellPos, keyCharCandidates, pencilNotes) {
  // AR Type 1：删除关键单元格的该数字候选
  const removableCandidates = [{
    row: keyCellPos.row,
    col: keyCellPos.col,
    value: number
  }];
  
  return {
    type: 'arType1',
    description: 'Avoidable Rectangle Type 1 技巧',
    number: number,
    filledCells: filledCells.map(c => [c.row, c.col]),
    keyCell: [keyCellPos.row, keyCellPos.col],
    arCells: [...filledCells.map(c => [c.row, c.col]), [keyCellPos.row, keyCellPos.col]],
    removableCandidates: removableCandidates,
    cells: [...filledCells.map(c => [c.row, c.col]), [keyCellPos.row, keyCellPos.col]],
    sourceCells: filledCells.map(c => [c.row, c.col]),
    targetCells: [[keyCellPos.row, keyCellPos.col]],
    values: [number],
    message: `Avoidable Rectangle Type 1：删除r${keyCellPos.row + 1}c${keyCellPos.col + 1}的候选数${number}`
  };
}

/**
 * 去重：移除重复的AR Type 1机会
 */
function deduplicateOpportunities(opportunities) {
  const seen = new Set();
  const unique = [];
  
  for (const opp of opportunities) {
    // 使用关键单元格位置 + 删除的数字作为唯一标识
    const key = `${opp.keyCell[0]}-${opp.keyCell[1]}-${opp.number}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(opp);
    }
  }
  
  return unique;
}


