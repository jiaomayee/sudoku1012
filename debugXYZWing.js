// 调试XYZ-Wing实现
const board = [
  [0, 0, 4, 0, 5, 0, 3, 0, 7],
  [0, 9, 7, 0, 4, 0, 0, 0, 0],
  [3, 0, 5, 7, 0, 8, 0, 0, 0],
  [5, 3, 6, 4, 0, 0, 0, 7, 1],
  [0, 1, 0, 5, 3, 7, 0, 2, 0],
  [4, 7, 2, 0, 0, 0, 5, 3, 0],
  [7, 0, 0, 2, 0, 4, 1, 0, 3],
  [0, 0, 1, 0, 6, 0, 7, 4, 0],
  [0, 4, 3, 0, 7, 0, 2, 0, 0]
];

// 简化的候选数数据（用于测试XYZ-Wing）
const pencilNotes = {
  // 单元格(4,5) - 应该是枢纽单元格，包含候选数[2,8,9]
  "4-5": [2, 8, 9],
  // 单元格(4,6) - 应该是XZ单元格，包含候选数[2,9]
  "4-6": [2, 9],
  // 单元格(7,5) - 应该是YZ单元格，包含候选数[8,9]
  "7-5": [8, 9],
  // 目标单元格(6,5) - 应该可以删除候选数9
  "6-5": [1, 6, 9]
};

console.log("测试XYZ-Wing技巧:");
console.log("棋盘状态:");
board.forEach((row, index) => {
  console.log(`${index + 1}: ${row.map(cell => cell === 0 ? '.' : cell).join(' ')}`);
});

console.log("\n候选数状态:");
for (const key in pencilNotes) {
  console.log(`单元格(${key}): [${pencilNotes[key].join(', ')}]`);
}

// 检查单元格位置是否正确
console.log("\n验证单元格位置:");
console.log("枢纽单元格(4,5) - 数组索引[3][4]:", board[3][4]);
console.log("XZ单元格(4,6) - 数组索引[3][5]:", board[3][5]);
console.log("YZ单元格(7,5) - 数组索引[6][4]:", board[6][4]);
console.log("目标单元格(6,5) - 数组索引[5][4]:", board[5][4]);

// 检查单元格是否在同一单元中
const areInSameUnit = (cell1, cell2) => {
  // 共享行
  if (cell1.row === cell2.row) return true;
  // 共享列
  if (cell1.col === cell2.col) return true;
  // 共享宫
  const boxRow1 = Math.floor(cell1.row / 3);
  const boxCol1 = Math.floor(cell1.col / 3);
  const boxRow2 = Math.floor(cell2.row / 3);
  const boxCol2 = Math.floor(cell2.col / 3);
  return boxRow1 === boxRow2 && boxCol1 === boxCol2;
};

// 测试单元格关系
const pivotCell = { row: 3, col: 4 }; // (4,5)
const xzCell = { row: 3, col: 5 };    // (4,6)
const yzCell = { row: 6, col: 4 };    // (7,5)
const targetCell = { row: 5, col: 4 }; // (6,5)

console.log("\n单元格关系检查:");
console.log("枢纽与XZ在同一行:", areInSameUnit(pivotCell, xzCell));
console.log("枢纽与YZ在同一列:", areInSameUnit(pivotCell, yzCell));
console.log("XZ与目标在同一列:", areInSameUnit(xzCell, targetCell));
console.log("YZ与目标在同一列:", areInSameUnit(yzCell, targetCell));

// 详细调试XYZ-Wing实现
const findXYZWing = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 获取所有只有两个候选数的单元格（双候选数单元格）
  const getDoubleCandidatesCells = () => {
    const cells = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] !== 0) continue;
        
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.length === 2) {
          cells.push({ row, col, notes });
        }
      }
    }
    return cells;
  };
  
  // 获取所有有三个候选数的单元格（三候选数单元格）
  const getTripleCandidatesCells = () => {
    const cells = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] !== 0) continue;
        
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.length === 3) {
          cells.push({ row, col, notes });
        }
      }
    }
    return cells;
  };
  
  // 检查两个单元格是否共享行、列或宫
  const areInSameUnit = (cell1, cell2) => {
    // 共享行
    if (cell1.row === cell2.row) return true;
    // 共享列
    if (cell1.col === cell2.col) return true;
    // 共享宫
    const boxRow1 = Math.floor(cell1.row / 3);
    const boxCol1 = Math.floor(cell1.col / 3);
    const boxRow2 = Math.floor(cell2.row / 3);
    const boxCol2 = Math.floor(cell2.col / 3);
    return boxRow1 === boxRow2 && boxCol1 === boxCol2;
  };
  
  // 获取两个单元格候选数的交集
  const getIntersection = (notes1, notes2) => {
    return notes1.filter(note => notes2.includes(note));
  };
  
  // 执行XYZ-Wing搜索
  const doubleCandidatesCells = getDoubleCandidatesCells();
  const tripleCandidatesCells = getTripleCandidatesCells();
  
  console.log("\n候选数单元格:");
  console.log("三候选数单元格:", tripleCandidatesCells);
  console.log("双候选数单元格:", doubleCandidatesCells);
  
  // 遍历每个可能的枢纽单元格（XYZ单元格）
  for (let i = 0; i < tripleCandidatesCells.length; i++) {
    const pivotCell = tripleCandidatesCells[i];
    const [x, y, z] = pivotCell.notes;
    
    console.log(`\n检查枢纽单元格 (${pivotCell.row + 1},${pivotCell.col + 1}) 候选数 [${pivotCell.notes.join(', ')}]`);
    
    // 找到与枢纽在同一单元的双候选数单元格
    const linkedCells = [];
    
    for (let j = 0; j < doubleCandidatesCells.length; j++) {
      const linkedCell = doubleCandidatesCells[j];
      if (!areInSameUnit(pivotCell, linkedCell)) {
        continue;
      }
      
      // 检查是否有共享候选数
      const intersection = getIntersection(pivotCell.notes, linkedCell.notes);
      if (intersection.length >= 1) {
        linkedCells.push({ ...linkedCell, shared: intersection });
        console.log(`  找到链接单元格 (${linkedCell.row + 1},${linkedCell.col + 1}) 候选数 [${linkedCell.notes.join(', ')}] 共享候选数 [${intersection.join(', ')}]`);
      }
    }
    
    // 现在检查所有可能的XYZ-Wing组合
    for (let j = 0; j < linkedCells.length; j++) {
      for (let k = j + 1; k < linkedCells.length; k++) {
        const cell1 = linkedCells[j];
        const cell2 = linkedCells[k];
        
        // 确保不是同一个单元格
        if (cell1.row === cell2.row && cell1.col === cell2.col) continue;
        
        // 找到三个单元格的公共候选数
        const commonCandidates = cell1.shared.filter(note => cell2.shared.includes(note));
        
        console.log(`\n  检查组合: 枢纽(${pivotCell.row + 1},${pivotCell.col + 1}) XZ(${cell1.row + 1},${cell1.col + 1}) YZ(${cell2.row + 1},${cell2.col + 1})`);
        console.log(`    XZ共享候选数: [${cell1.shared.join(', ')}]`);
        console.log(`    YZ共享候选数: [${cell2.shared.join(', ')}]`);
        console.log(`    公共候选数: [${commonCandidates.join(', ')}]`);
        
        if (commonCandidates.length >= 1) {
          // 修正：不再要求所有单元格必须在同一宫中
          // XYZ-Wing只需要：
          // 1. 枢纽与XZ在同一单元
          // 2. 枢纽与YZ在同一单元
          // 3. 目标单元格同时与XZ和YZ在同一单元
          
          // 对于每个公共候选数，检查是否可以形成XYZ-Wing
          for (const common of commonCandidates) {
            console.log(`    检查公共候选数: ${common}`);
            
            // 找到受XYZ-Wing影响的单元格
            const targetCells = [];
            const removableCandidates = [];
            const targetCellsDetails = [];
            
            // 检查所有可能的交叉单元格
            for (let row = 0; row < 9; row++) {
              for (let col = 0; col < 9; col++) {
                // 跳过已填数字的单元格
                if (board[row][col] !== 0) continue;
                
                // 跳过枢纽和链接单元格
                if ((row === pivotCell.row && col === pivotCell.col) ||
                    (row === cell1.row && col === cell1.col) ||
                    (row === cell2.row && col === cell2.col)) {
                  continue;
                }
                
                // 检查该单元格是否同时与两个链接单元格在同一行、列或宫
                const sharesWithCell1 = areInSameUnit({row, col}, cell1);
                const sharesWithCell2 = areInSameUnit({row, col}, cell2);
                
                if (sharesWithCell1 && sharesWithCell2) {
                  // 检查该单元格是否包含公共候选数
                  const notesKey = `${row}-${col}`;
                  const cellNotes = pencilNotes[notesKey] || [];
                  
                  if (cellNotes.includes(common)) {
                    targetCells.push([row, col]);
                    removableCandidates.push(common);
                    targetCellsDetails.push({
                      row: row,
                      col: col,
                      notesToRemove: [common]
                    });
                    console.log(`      找到目标单元格 (${row + 1},${col + 1}) 包含候选数 ${common}`);
                  }
                }
              }
            }
            
            // 只有当有实际可删除的候选数时，才添加机会
            if (targetCells.length > 0) {
              console.log(`      找到XYZ-Wing机会!`);
              opportunities.push({
                type: 'xyzWing',
                description: 'XYZ-Wing',
                pivotCell: [pivotCell.row, pivotCell.col],
                xzCell: [cell1.row, cell1.col],
                yzCell: [cell2.row, cell2.col],
                cells: [
                  [pivotCell.row, pivotCell.col],
                  [cell1.row, cell1.col],
                  [cell2.row, cell2.col]
                ],
                x, y, z, common: common,
                targetCells,
                targetCellsDetails,
                removableCandidates,
                message: `XYZ-Wing技巧：这是一个由一个三候选数单元格和两个双候选数单元格组成的特殊结构。枢纽单元格(${pivotCell.row + 1},${pivotCell.col + 1})包含候选数[${x},${y},${z}]，XZ单元格(${cell1.row + 1},${cell1.col + 1})包含候选数[${cell1.notes.join(',')}],YZ单元格(${cell2.row + 1},${cell2.col + 1})包含候选数[${cell2.notes.join(',')}].由于枢纽单元格与XZ、YZ单元格分别共享候选数，且XZ和YZ单元格都包含候选数${common}，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数${common}不可能存在，可以删除这些交叉单元格中的数字${common}候选数`
              });
            } else {
              console.log(`      未找到目标单元格`);
            }
          }
        }
      }
    }
  }
  
  return opportunities;
};

console.log("\n查找XYZ-Wing技巧机会:");
const xyzWingOpportunities = findXYZWing(board, pencilNotes);
console.log(`\n总共找到 ${xyzWingOpportunities.length} 个XYZ-Wing技巧机会`);

if (xyzWingOpportunities.length > 0) {
  xyzWingOpportunities.forEach((opportunity, index) => {
    console.log(`\n机会 ${index + 1}:`);
    console.log(`类型: ${opportunity.type}`);
    console.log(`描述: ${opportunity.description}`);
    console.log(`枢纽单元格: (${opportunity.pivotCell[0] + 1},${opportunity.pivotCell[1] + 1})`);
    console.log(`XZ单元格: (${opportunity.xzCell[0] + 1},${opportunity.xzCell[1] + 1})`);
    console.log(`YZ单元格: (${opportunity.yzCell[0] + 1},${opportunity.yzCell[1] + 1})`);
    console.log(`候选数: X=${opportunity.x}, Y=${opportunity.y}, Z=${opportunity.z}`);
    console.log(`公共候选数: ${opportunity.common}`);
    console.log(`目标单元格: ${opportunity.targetCells.map(cell => `(${cell[0] + 1},${cell[1] + 1})`).join(', ')}`);
    console.log(`可删除候选数: ${opportunity.removableCandidates.join(', ')}`);
    console.log(`消息: ${opportunity.message}`);
  });
} else {
  console.log("未找到XYZ-Wing技巧机会");
}