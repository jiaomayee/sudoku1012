/**
 * Uniqueness技巧集合
 * 实现各种基于唯一性原则的数独解题技巧
 */

/**
 * 检查两个单元格是否在同一单元（行、列或宫）
 */
function areInSameUnit(cell1, cell2) {
  const [row1, col1] = cell1;
  const [row2, col2] = cell2;
  
  // 检查是否在同一行或同一列
  if (row1 === row2 || col1 === col2) return true;
  
  // 检查是否在同一宫
  const box1 = Math.floor(row1 / 3) * 3 + Math.floor(col1 / 3);
  const box2 = Math.floor(row2 / 3) * 3 + Math.floor(col2 / 3);
  return box1 === box2;
}

/**
 * 获取单元格所在的宫
 */
function getBox(row, col) {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}

/**
 * 获取单元格在宫中的位置索引
 */
function getBoxIndex(row, col) {
  return (row % 3) * 3 + (col % 3);
}

/**
 * 获取指定位置的候选数
 */
function getCandidates(pencilNotes, row, col) {
  return pencilNotes[`${row}-${col}`] || [];
}

/**
 * 检查单元格是否为固定数（不是通过推理填入的）
 */
function isFixedCell(fixedCells, row, col) {
  return fixedCells.some(cell => cell[0] === row && cell[1] === col);
}

/**
 * Avoidable Rectangle Type 1
 * 基于已填数字的矩形模式，避免出现多解情况
 */
export const findAvoidableRectangleType1 = (board, pencilNotes, fixedCells = []) => {
  const opportunities = [];
  
  // 扫描所有已填入的数字（1-9）
  for (let number = 1; number <= 9; number++) {
    // 找出所有包含该数字的非固定单元格
    const filledCells = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === number && !isFixedCell(fixedCells, row, col)) {
          filledCells.push({ row, col, value: number });
        }
      }
    }
    
    // 检查所有可能的矩形组合
    for (let i = 0; i < filledCells.length; i++) {
      for (let j = i + 1; j < filledCells.length; j++) {
        const cell1 = filledCells[i];
        const cell2 = filledCells[j];
        
        // 检查是否在同一行或同一列
        if (cell1.row === cell2.row || cell1.col === cell2.col) continue;
        
        // 创建矩形的另外两个位置
        const cell3 = { row: cell1.row, col: cell2.col };
        const cell4 = { row: cell2.row, col: cell1.col };
        
        // 检查另外两个位置是否有一个已填且非固定，另一个为空
        let filledCorner = null;
        let emptyCorner = null;
        
        if (board[cell3.row][cell3.col] !== 0 && !isFixedCell(fixedCells, cell3.row, cell3.col)) {
          if (board[cell4.row][cell4.col] === 0) {
            filledCorner = cell3;
            emptyCorner = cell4;
          }
        } else if (board[cell4.row][cell4.col] !== 0 && !isFixedCell(fixedCells, cell4.row, cell4.col)) {
          if (board[cell3.row][cell3.col] === 0) {
            filledCorner = cell4;
            emptyCorner = cell3;
          }
        }
        
        // 如果找到了符合条件的矩形
        if (filledCorner && emptyCorner) {
          const emptyCandidates = getCandidates(pencilNotes, emptyCorner.row, emptyCorner.col);
          
          // 检查空角是否包含数字number作为候选
          if (emptyCandidates.includes(number)) {
            // 创建避免矩形机会
            opportunities.push({
              type: 'uniqueness_avoidable_rectangle_1',
              description: 'Avoidable Rectangle Type 1',
              arCells: [
                [cell1.row, cell1.col],
                [cell2.row, cell2.col],
                [filledCorner.row, filledCorner.col],
                [emptyCorner.row, emptyCorner.col]
              ],
              basePair: [number, filledCorner.value || number], // 基对数字
              keyCell: [emptyCorner.row, emptyCorner.col],
              // 添加ControlPanel需要的属性
              cellsWithExtra: [{ row: emptyCorner.row, col: emptyCorner.col }],
              cellsWithoutExtra: [
                [cell1.row, cell1.col],
                [cell2.row, cell2.col],
                [filledCorner.row, filledCorner.col]
              ],
              targetCells: [[emptyCorner.row, emptyCorner.col]],
              removableCandidates: [{
                row: emptyCorner.row,
                col: emptyCorner.col,
                value: number
              }],
              cells: [
                [cell1.row, cell1.col],
                [cell2.row, cell2.col],
                [filledCorner.row, filledCorner.col],
                [emptyCorner.row, emptyCorner.col]
              ],
              message: `Avoidable Rectangle Type 1：删除r${emptyCorner.row + 1}c${emptyCorner.col + 1}的候选数${number}`
            });
          }
        }
      }
    }
  }
  
  // 去重并返回结果
  return deduplicateAROpportunities(opportunities);
};

/**
 * Avoidable Rectangle Type 2
 * 两个对角已填，另外两个角为空且有相同的额外候选数
 */
export const findAvoidableRectangleType2 = (board, pencilNotes, fixedCells = []) => {
  const opportunities = [];
  
  // 扫描所有可能的矩形组合
  for (let number = 1; number <= 9; number++) {
    // 找出所有包含该数字的非固定单元格
    const filledCells = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === number && !isFixedCell(fixedCells, row, col)) {
          filledCells.push({ row, col, value: number });
        }
      }
    }
    
    // 检查所有可能的矩形组合
    for (let i = 0; i < filledCells.length; i++) {
      for (let j = i + 1; j < filledCells.length; j++) {
        const cell1 = filledCells[i];
        const cell2 = filledCells[j];
        
        // 检查是否在同一行或同一列
        if (cell1.row === cell2.row || cell1.col === cell2.col) continue;
        
        // 创建矩形的另外两个位置
        const cell3 = { row: cell1.row, col: cell2.col };
        const cell4 = { row: cell2.row, col: cell1.col };
        
        // 检查另外两个位置是否都为空
        if (board[cell3.row][cell3.col] === 0 && board[cell4.row][cell4.col] === 0) {
          const candidates3 = getCandidates(pencilNotes, cell3.row, cell3.col);
          const candidates4 = getCandidates(pencilNotes, cell4.row, cell4.col);
          
          // 检查两个空角是否都包含数字number和另一个相同的候选数
          if (candidates3.includes(number) && candidates4.includes(number)) {
            // 找出共同的额外候选数
            const commonCandidates = candidates3.filter(c => c !== number && candidates4.includes(c));
            
            for (const extraCandidate of commonCandidates) {
              // 找到所有能同时看到两个空角的单元格
              const targetCells = [];
              for (let r = 0; r < 9; r++) {
                for (let c = 0; c < 9; c++) {
                  if (board[r][c] === 0 && 
                      areInSameUnit([r, c], [cell3.row, cell3.col]) && 
                      areInSameUnit([r, c], [cell4.row, cell4.col])) {
                    const targetCandidates = getCandidates(pencilNotes, r, c);
                    if (targetCandidates.includes(extraCandidate)) {
                      targetCells.push({
                        row: r,
                        col: c,
                        value: extraCandidate
                      });
                    }
                  }
                }
              }
              
              if (targetCells.length > 0) {
                opportunities.push({
                  type: 'uniqueness_avoidable_rectangle_2',
                  description: 'Avoidable Rectangle Type 2',
                  arCells: [
                    [cell1.row, cell1.col],
                    [cell2.row, cell2.col],
                    [cell3.row, cell3.col],
                    [cell4.row, cell4.col]
                  ],
                  basePair: [number, cell2.value],
                  extraCandidate: extraCandidate,
                  emptyCells: [
                    [cell3.row, cell3.col],
                    [cell4.row, cell4.col]
                  ],
                  removableCandidates: targetCells,
                  cells: [
                    [cell1.row, cell1.col],
                    [cell2.row, cell2.col],
                    [cell3.row, cell3.col],
                    [cell4.row, cell4.col]
                  ],
                  message: `Avoidable Rectangle Type 2：删除能同时看到两个空角的单元格中的候选数${extraCandidate}`
                });
              }
            }
          }
        }
      }
    }
  }
  
  return opportunities;
};

/**
 * Unique Rectangle Type 1
 * 三个单元格只有两个候选数，第四个单元格有额外候选数，删除第四个单元格中的两个基础候选数
 */
export const findUniqueRectangleType1 = (board, pencilNotes) => {
  const opportunities = [];
  const bivalueCells = [];
  
  // 收集所有双候选数单元格
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const candidates = getCandidates(pencilNotes, row, col);
        if (candidates.length === 2) {
          bivalueCells.push({ row, col, candidates });
        }
      }
    }
  }
  
  // 检查所有可能的矩形组合
  for (let i = 0; i < bivalueCells.length; i++) {
    for (let j = i + 1; j < bivalueCells.length; j++) {
      const cell1 = bivalueCells[i];
      const cell2 = bivalueCells[j];
      
      // 检查是否在同一行或同一列
      if (cell1.row === cell2.row || cell1.col === cell2.col) continue;
      
      // 检查候选数是否相同
      if (!cell1.candidates.every(c => cell2.candidates.includes(c))) continue;
      
      const [cand1, cand2] = cell1.candidates;
      
      // 创建矩形的另外两个位置
      const cell3Pos = [cell1.row, cell2.col];
      const cell4Pos = [cell2.row, cell1.col];
      
      // 检查另外两个位置是否为空
      if (board[cell3Pos[0]][cell3Pos[1]] !== 0 || board[cell4Pos[0]][cell4Pos[1]] !== 0) continue;
      
      const candidates3 = getCandidates(pencilNotes, cell3Pos[0], cell3Pos[1]);
      const candidates4 = getCandidates(pencilNotes, cell4Pos[0], cell4Pos[1]);
      
      // 检查三个单元格是否只有两个候选数，第四个有额外候选数
      let threeBivalue = 0;
      let extraCell = null;
      
      if (candidates3.length === 2 && candidates3.includes(cand1) && candidates3.includes(cand2)) threeBivalue++;
      if (candidates4.length === 2 && candidates4.includes(cand1) && candidates4.includes(cand2)) threeBivalue++;
      
      if (candidates3.length > 2 && candidates3.includes(cand1) && candidates3.includes(cand2)) extraCell = cell3Pos;
      if (candidates4.length > 2 && candidates4.includes(cand1) && candidates4.includes(cand2)) extraCell = cell4Pos;
      
      if (threeBivalue === 2 && extraCell) {
        opportunities.push({
          type: 'uniqueness_1',
          description: 'Unique Rectangle Type 1',
          urCells: [
            [cell1.row, cell1.col],
            [cell2.row, cell2.col],
            [cell3Pos[0], cell3Pos[1]],
            [cell4Pos[0], cell4Pos[1]]
          ],
          basePair: [cand1, cand2],
          extraCell: extraCell,
          removableCandidates: [
            { row: extraCell[0], col: extraCell[1], value: cand1 },
            { row: extraCell[0], col: extraCell[1], value: cand2 }
          ],
          cells: [
            [cell1.row, cell1.col],
            [cell2.row, cell2.col],
            [cell3Pos[0], cell3Pos[1]],
            [cell4Pos[0], cell4Pos[1]]
          ],
          message: `Unique Rectangle Type 1：删除r${extraCell[0] + 1}c${extraCell[1] + 1}的候选数${cand1}和${cand2}`
        });
      }
    }
  }
  
  return opportunities;
};

/**
 * BUG+1技巧
 * 几乎所有单元格都只有两个候选数，只有一个单元格有三个候选数
 */
export const findBugPlus1 = (board, pencilNotes) => {
  let threeCandidateCell = null;
  let threeCandidateValues = [];
  
  // 检查是否只有一个单元格有三个候选数，其余都是两个或更少
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const candidates = getCandidates(pencilNotes, row, col);
        if (candidates.length > 3) {
          return []; // 存在超过三个候选数的单元格，不是BUG+1
        } else if (candidates.length === 3) {
          if (threeCandidateCell) {
            return []; // 有多个三个候选数的单元格，不是BUG+1
          }
          threeCandidateCell = [row, col];
          threeCandidateValues = candidates;
        }
      }
    }
  }
  
  if (!threeCandidateCell) return []; // 没有三个候选数的单元格，不是BUG+1
  
  // 检查每个候选数在三个约束（行、列、宫）中是否出现三次
  const [row, col] = threeCandidateCell;
  const box = getBox(row, col);
  
  for (const candidate of threeCandidateValues) {
    let rowCount = 0, colCount = 0, boxCount = 0;
    
    // 检查行
    for (let c = 0; c < 9; c++) {
      const candidates = getCandidates(pencilNotes, row, c);
      if (candidates.includes(candidate)) rowCount++;
    }
    
    // 检查列
    for (let r = 0; r < 9; r++) {
      const candidates = getCandidates(pencilNotes, r, col);
      if (candidates.includes(candidate)) colCount++;
    }
    
    // 检查宫
    const boxRow = Math.floor(box / 3) * 3;
    const boxCol = (box % 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) {
        const candidates = getCandidates(pencilNotes, r, c);
        if (candidates.includes(candidate)) boxCount++;
      }
    }
    
    // 如果某个候选数在三个约束中都出现三次，删除其他两个候选数
    if (rowCount === 3 && colCount === 3 && boxCount === 3) {
      const removableCandidates = threeCandidateValues
        .filter(c => c !== candidate)
        .map(c => ({ row, col, value: c }));
      
      return [{
        type: 'uniqueness_bug_plus_1',
        description: 'BUG+1',
        threeCandidateCell: threeCandidateCell,
        validCandidate: candidate,
        removableCandidates: removableCandidates,
        cells: [threeCandidateCell],
        message: `BUG+1：删除r${row + 1}c${col + 1}的候选数${removableCandidates.map(c => c.value).join('和')}`
      }];
    }
  }
  
  return [];
};

/**
 * 去重AR机会
 */
function deduplicateAROpportunities(opportunities) {
  const seen = new Set();
  const unique = [];
  
  for (const opp of opportunities) {
    // 使用关键信息作为唯一标识
    const key = `${opp.keyCell[0]}-${opp.keyCell[1]}-${opp.removableCandidates[0].value}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(opp);
    }
  }
  
  return unique;
}

/**
 * 主函数：查找所有Uniqueness技巧机会
 */
export const findUniquenessOpportunities = (board, pencilNotes, fixedCells = []) => {
  const allOpportunities = [];
  
  // 查找各种Uniqueness技巧
  const arType1 = findAvoidableRectangleType1(board, pencilNotes, fixedCells);
  const arType2 = findAvoidableRectangleType2(board, pencilNotes, fixedCells);
  const urType1 = findUniqueRectangleType1(board, pencilNotes);
  const bugPlus1 = findBugPlus1(board, pencilNotes);
  
  // 合并所有机会
  allOpportunities.push(...arType1, ...arType2, ...urType1, ...bugPlus1);
  
  return allOpportunities;
};
