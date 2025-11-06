// 测试XYZ-Wing技巧实现
const { findXYZWing } = require('./frontend/src/utils/sudokuTechniques.js');

// 提供的测试题目
// 004050307097040000305708000536400071010537020472000530700204103001060740043070200
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
console.log(pencilNotes);

console.log("\n查找XYZ-Wing技巧机会:");
const xyzWingOpportunities = findXYZWing(board, pencilNotes);
console.log(`找到 ${xyzWingOpportunities.length} 个XYZ-Wing技巧机会`);

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

// 额外测试：检查单元格是否在同一宫中
console.log("\n验证单元格位置关系:");
const pivotCell = { row: 4, col: 5 };
const xzCell = { row: 4, col: 6 };
const yzCell = { row: 7, col: 5 };

console.log(`枢纽单元格(4,5): 第${Math.floor(pivotCell.row / 3) * 3 + Math.floor(pivotCell.col / 3) + 1}宫`);
console.log(`XZ单元格(4,6): 第${Math.floor(xzCell.row / 3) * 3 + Math.floor(xzCell.col / 3) + 1}宫`);
console.log(`YZ单元格(7,5): 第${Math.floor(yzCell.row / 3) * 3 + Math.floor(yzCell.col / 3) + 1}宫`);

// 检查是否在同一宫
const sameBox = (cell1, cell2) => {
  const boxRow1 = Math.floor(cell1.row / 3);
  const boxCol1 = Math.floor(cell1.col / 3);
  const boxRow2 = Math.floor(cell2.row / 3);
  const boxCol2 = Math.floor(cell2.col / 3);
  return boxRow1 === boxRow2 && boxCol1 === boxCol2;
};

console.log(`枢纽和XZ单元格是否在同一宫: ${sameBox(pivotCell, xzCell)}`);
console.log(`枢纽和YZ单元格是否在同一宫: ${sameBox(pivotCell, yzCell)}`);
console.log(`XZ和YZ单元格是否在同一宫: ${sameBox(xzCell, yzCell)}`);