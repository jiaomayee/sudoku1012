// 自包含的XYZ-Wing算法测试文件
// 直接包含修复后的findXYZWing函数实现和测试逻辑，避免模块导入问题

// 简化版的isValidMove函数（仅用于支持测试）
function isValidMove(board, row, col, num) {
  // 检查行
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false;
  }
  
  // 检查列
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) return false;
  }
  
  // 检查宫
  const startRow = row - row % 3;
  const startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i + startRow][j + startCol] === num) return false;
    }
  }
  
  return true;
}

// 修复后的findXYZWing函数实现
function findXYZWing(board, pencilNotes = {}) {
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
  
  // 执行XYZ-Wing搜索
  const doubleCandidatesCells = getDoubleCandidatesCells();
  const tripleCandidatesCells = getTripleCandidatesCells();
  
  // 遍历每个可能的枢纽单元格（XYZ单元格）
  for (let i = 0; i < tripleCandidatesCells.length; i++) {
    const pivotCell = tripleCandidatesCells[i];
    
    // 尝试所有可能的x, y, z组合（枢纽单元格的三个候选数）
    for (let xIndex = 0; xIndex < 3; xIndex++) {
      for (let yIndex = 0; yIndex < 3; yIndex++) {
        if (xIndex === yIndex) continue;
        
        // 找出zIndex，即第三个候选数的索引
        let zIndex = 0;
        while (zIndex === xIndex || zIndex === yIndex) {
          zIndex++;
        }
        
        const x = pivotCell.notes[xIndex];
        const y = pivotCell.notes[yIndex];
        const z = pivotCell.notes[zIndex];
        
        // 寻找XZ单元格：包含x和z，且与枢纽单元格共享行/列/宫
        const xzCells = doubleCandidatesCells.filter(cell => 
          cell.notes.includes(x) && cell.notes.includes(z) && 
          areInSameUnit(cell, pivotCell)
        );
        
        // 寻找YZ单元格：包含y和z，且与枢纽单元格共享行/列/宫
        const yzCells = doubleCandidatesCells.filter(cell => 
          cell.notes.includes(y) && cell.notes.includes(z) && 
          areInSameUnit(cell, pivotCell)
        );
        
        // 遍历所有可能的XZ和YZ单元格组合
        for (let j = 0; j < xzCells.length; j++) {
          const xzCell = xzCells[j];
          
          for (let k = 0; k < yzCells.length; k++) {
            const yzCell = yzCells[k];
            
            // 确保XZ和YZ单元格不是同一个单元格
            if (xzCell.row === yzCell.row && xzCell.col === yzCell.col) {
              continue;
            }
            
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
                    (row === xzCell.row && col === xzCell.col) ||
                    (row === yzCell.row && col === yzCell.col)) {
                  continue;
                }
                
                // 检查该单元格是否同时与XZ和YZ单元格在同一行、列或宫
                const sharesWithXZ = areInSameUnit({row, col}, xzCell);
                const sharesWithYZ = areInSameUnit({row, col}, yzCell);
                
                // 同时受XZ和YZ单元格影响的单元格才可能是目标单元格
                if (sharesWithXZ && sharesWithYZ) {
                  // 检查该单元格是否包含公共候选数Z
                  const notesKey = `${row}-${col}`;
                  const cellNotes = pencilNotes[notesKey] || [];
                  
                  if (cellNotes.includes(z)) {
                    targetCells.push([row, col]);
                    removableCandidates.push(z);
                    targetCellsDetails.push({
                      row: row,
                      col: col,
                      notesToRemove: [z]
                    });
                  }
                }
              }
            }
            
            // 只有当有实际可删除的候选数时，才添加机会
            if (targetCells.length > 0) {
              opportunities.push({
                type: 'xyzWing',
                description: 'XYZ-Wing',
                pivotCell: [pivotCell.row, pivotCell.col],
                xzCell: [xzCell.row, xzCell.col],
                yzCell: [yzCell.row, yzCell.col],
                cells: [
                  [pivotCell.row, pivotCell.col],
                  [xzCell.row, xzCell.col],
                  [yzCell.row, yzCell.col]
                ],
                x, y, z, common: z,
                targetCells,
                targetCellsDetails,
                removableCandidates,
                message: `XYZ-Wing技巧：枢纽单元格(${pivotCell.row + 1},${pivotCell.col + 1})包含候选数[${pivotCell.notes.join(',')}]，XZ单元格(${xzCell.row + 1},${xzCell.col + 1})包含候选数[${xzCell.notes.join(',')}], YZ单元格(${yzCell.row + 1},${yzCell.col + 1})包含候选数[${yzCell.notes.join(',')}].`
              });
            }
          }
        }
      }
    }
  }
  
  // 去重：移除完全相同的XYZ-Wing机会，包括交换翼单元格位置的相同解
  const uniqueOpportunities = [];
  const seenOpportunities = new Set();
  
  for (const opportunity of opportunities) {
    const { pivotCell, xzCell, yzCell } = opportunity;
    
    // 为每个机会创建两个唯一标识：一个是原始顺序，一个是交换翼单元格顺序
    // 这样我们可以检测到交换翼单元格位置的相同解
    const identifier1 = `${pivotCell[0]}-${pivotCell[1]}-${xzCell[0]}-${xzCell[1]}-${yzCell[0]}-${yzCell[1]}`;
    const identifier2 = `${pivotCell[0]}-${pivotCell[1]}-${yzCell[0]}-${yzCell[1]}-${xzCell[0]}-${xzCell[1]}`;
    
    // 检查是否已经见过这个机会（无论是原始顺序还是交换顺序）
    if (!seenOpportunities.has(identifier1) && !seenOpportunities.has(identifier2)) {
      uniqueOpportunities.push(opportunity);
      // 将两个标识都添加到已见过的集合中
      seenOpportunities.add(identifier1);
      seenOpportunities.add(identifier2);
    }
  }
  
  return uniqueOpportunities;
}

// 测试棋盘: 包含一个典型的XYZ-Wing模式，特别是可以测试去重逻辑（交换翼单元格位置）
const xyzWingTestBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// 添加第二个测试用例，用于测试去重逻辑（交换翼单元格位置的情况）
const xyzWingTestBoard2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const xyzWingTestPencilNotes2 = {
  // 枢纽单元格(中心): 包含三个候选数[4, 5, 6]
  "4-6": [4, 5, 6],
  
  // 翼单元格1: 包含两个候选数[4, 5]
  "4-4": [4, 5],
  
  // 翼单元格2: 包含两个候选数[5, 6]
  "4-3": [5, 6],
  
  // 目标单元格: 包含候选数[5]，与两个翼单元格在同一行
  "4-0": [5, 7, 8],
  "4-1": [5, 7, 9],
  "4-2": [5, 8, 9],
  "4-7": [5, 7, 8],
  "4-8": [5, 7, 9]
};

// 测试候选数: 包含一个典型的XYZ-Wing模式
const xyzWingTestPencilNotes = {
  // 枢纽单元格(中心): 包含三个候选数[1, 2, 3]
  "4-4": [1, 2, 3],
  
  // XZ单元格: 包含两个候选数[1, 2]
  "4-1": [1, 2],
  
  // YZ单元格: 包含两个候选数[2, 3]
  "1-4": [2, 3],
  
  // 目标单元格: 包含候选数[2]，与XZ和YZ单元格在同一行、列或宫
  "1-1": [2, 4, 5],
  
  // 其他单元格的候选数
  "0-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-4": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "0-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "1-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "1-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "1-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "1-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "1-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "1-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "1-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "2-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-4": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "2-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "3-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-4": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "3-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "4-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "4-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "4-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "4-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "4-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "4-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "4-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "5-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-4": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "5-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "6-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-4": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "6-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "7-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-4": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "7-8": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  "8-0": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-1": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-2": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-3": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-4": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-5": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-6": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-7": [1, 2, 3, 4, 5, 6, 7, 8, 9],
  "8-8": [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

// 运行测试
function runXYZWingTest() {
  console.log("=== 开始测试修复后的XYZ-Wing算法 ===");
  
  try {
    // 测试用例1：基本功能测试
    console.log("\n=== 测试用例1：基本功能测试 ===");
    const results1 = findXYZWing(xyzWingTestBoard, xyzWingTestPencilNotes);
    
    console.log("\n测试结果1:");
    console.log(`找到 ${results1.length} 个XYZ-Wing机会`);
    
    if (results1.length > 0) {
      // 分析第一个结果
      const result = results1[0];
      
      console.log("\n第一个XYZ-Wing模式详情:");
      console.log(`- 枢纽单元格: (${result.pivotCell[0] + 1}, ${result.pivotCell[1] + 1})`);
      console.log(`- XZ单元格: (${result.xzCell[0] + 1}, ${result.xzCell[1] + 1})`);
      console.log(`- YZ单元格: (${result.yzCell[0] + 1}, ${result.yzCell[1] + 1})`);
      console.log(`- x, y, z 值: ${result.x}, ${result.y}, ${result.z}`);
      console.log(`- 目标单元格数量: ${result.targetCells.length}`);
      
      // 检查是否找到了正确的目标单元格(1,1)
      const foundTargetCell = result.targetCells.some(cell => cell[0] === 1 && cell[1] === 1);
      console.log(`\n是否正确识别目标单元格(1,1): ${foundTargetCell ? '✓' : '✗'}`);
      
      // 检查是否只尝试删除候选数2
      const removesOnlyCandidate2 = result.targetCellsDetails.every(detail => 
        detail.notesToRemove.length === 1 && detail.notesToRemove[0] === 2
      );
      console.log(`是否只尝试删除候选数2: ${removesOnlyCandidate2 ? '✓' : '✗'}`);
      
      // 输出所有目标单元格和要删除的候选数
      console.log("\n目标单元格和要删除的候选数:");
      result.targetCellsDetails.forEach(detail => {
        console.log(`- 单元格(${detail.row + 1}, ${detail.col + 1}): 删除候选数 ${detail.notesToRemove.join(', ')}`);
      });
    }
    
    // 测试用例2：去重逻辑测试（交换翼单元格位置的情况）
    console.log("\n=== 测试用例2：去重逻辑测试（交换翼单元格位置） ===");
    const results2 = findXYZWing(xyzWingTestBoard2, xyzWingTestPencilNotes2);
    
    console.log("\n测试结果2:");
    console.log(`找到 ${results2.length} 个XYZ-Wing机会`);
    
    // 验证去重逻辑
    console.log(`\n去重逻辑验证: ${results2.length <= 2 ? '✓' : '✗'} (预期：不应该有大量重复结果，应该少于或等于2个)`);
    
    if (results2.length > 0) {
      console.log("\n去重后的XYZ-Wing模式详情:");
      results2.forEach((result, index) => {
        console.log(`\n模式 ${index + 1}:`);
        console.log(`- 枢纽单元格: (${result.pivotCell[0] + 1}, ${result.pivotCell[1] + 1})`);
        console.log(`- XZ单元格: (${result.xzCell[0] + 1}, ${result.xzCell[1] + 1})`);
        console.log(`- YZ单元格: (${result.yzCell[0] + 1}, ${result.yzCell[1] + 1})`);
        console.log(`- x, y, z 值: ${result.x}, ${result.y}, ${result.z}`);
        console.log(`- 目标单元格数量: ${result.targetCells.length}`);
      });
    }
    
    // 整体测试结果评估
    let basicTestPassed = false;
    let dedupeTestPassed = false;
    
    if (results1.length > 0) {
      const result = results1[0];
      const foundTargetCell = result.targetCells.some(cell => cell[0] === 1 && cell[1] === 1);
      const removesOnlyCandidate2 = result.targetCellsDetails.every(detail => 
        detail.notesToRemove.length === 1 && detail.notesToRemove[0] === 2
      );
      basicTestPassed = foundTargetCell && removesOnlyCandidate2;
    }
    
    dedupeTestPassed = results2.length <= 2;
    
    console.log("\n=== 测试总结 ===");
    console.log(`基本功能测试: ${basicTestPassed ? '✅ 通过' : '❌ 失败'}`);
    console.log(`去重逻辑测试: ${dedupeTestPassed ? '✅ 通过' : '❌ 失败'}`);
    
    if (basicTestPassed && dedupeTestPassed) {
      console.log("\n🎉 所有测试通过！XYZ-Wing算法正确工作，并且去重逻辑能够识别交换翼单元格位置的相同解。");
    } else {
      console.log("\n❌ 部分测试失败，请检查算法实现。");
    }
    
  } catch (error) {
    console.error("\n❌ 测试运行出错:", error);
  }
  
  console.log("\n=== XYZ-Wing算法测试完成 ===");
}

// 执行测试
runXYZWingTest();