// 调试XYZ-Wing实现

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

console.log("数独题目:");
board.forEach((row, index) => {
  console.log(`${index + 1}: ${row.map(cell => cell === 0 ? '.' : cell).join(' ')}`);
});

// 检查指定单元格的预填数字
console.log("\n检查指定单元格的预填数字:");
console.log(`单元格(4,5): ${board[4][5]}`); // 应该是0（空）
console.log(`单元格(4,6): ${board[4][6]}`); // 应该是0（空）
console.log(`单元格(7,5): ${board[7][5]}`); // 应该是0（空）
console.log(`目标单元格(6,5): ${board[6][5]}`); // 应该是0（空）

// 验证XYZ-Wing单元格位置
console.log("\n验证XYZ-Wing单元格位置:");
const pivotCell = { row: 4, col: 5 };  // (4,5)
const xzCell = { row: 4, col: 6 };     // (4,6)
const yzCell = { row: 7, col: 5 };     // (7,5)
const targetCell = { row: 6, col: 5 }; // (6,5)

console.log(`枢纽单元格(4,5): 值=${board[pivotCell.row][pivotCell.col]}`);
console.log(`XZ单元格(4,6): 值=${board[xzCell.row][xzCell.col]}`);
console.log(`YZ单元格(7,5): 值=${board[yzCell.row][yzCell.col]}`);
console.log(`目标单元格(6,5): 值=${board[targetCell.row][targetCell.col]}`);

// 检查单元格是否在同一行、列或宫
console.log("\n检查单元格关系:");

// 检查是否在同一行
console.log(`枢纽和XZ单元格是否在同一行: ${pivotCell.row === xzCell.row}`);
console.log(`枢纽和YZ单元格是否在同一列: ${pivotCell.col === yzCell.col}`);

// 检查是否在同一宫
const getBox = (row, col) => {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};

console.log(`枢纽单元格(4,5)在第${getBox(pivotCell.row, pivotCell.col) + 1}宫`);
console.log(`XZ单元格(4,6)在第${getBox(xzCell.row, xzCell.col) + 1}宫`);
console.log(`YZ单元格(7,5)在第${getBox(yzCell.row, yzCell.col) + 1}宫`);

const sameBox = (cell1, cell2) => {
  return getBox(cell1.row, cell1.col) === getBox(cell2.row, cell2.col);
};

console.log(`枢纽和XZ单元格是否在同一宫: ${sameBox(pivotCell, xzCell)}`);
console.log(`枢纽和YZ单元格是否在同一宫: ${sameBox(pivotCell, yzCell)}`);
console.log(`XZ和YZ单元格是否在同一宫: ${sameBox(xzCell, yzCell)}`);

// 检查目标单元格是否与XYZ-Wing单元格有关系
console.log("\n检查目标单元格关系:");
console.log(`目标单元格与XZ单元格是否在同一行: ${targetCell.row === xzCell.row}`);
console.log(`目标单元格与YZ单元格是否在同一列: ${targetCell.col === yzCell.col}`);
console.log(`目标单元格与枢纽单元格是否在同一宫: ${sameBox(targetCell, pivotCell)}`);

// 检查目标单元格是否同时与XZ和YZ单元格有关系
const sharesUnitWith = (cell1, cell2) => {
  // 同一行
  if (cell1.row === cell2.row) return true;
  // 同一列
  if (cell1.col === cell2.col) return true;
  // 同一宫
  return sameBox(cell1, cell2);
};

const sharesWithXZ = sharesUnitWith(targetCell, xzCell);
const sharesWithYZ = sharesUnitWith(targetCell, yzCell);
const sharesWithPivot = sharesUnitWith(targetCell, pivotCell);

console.log(`目标单元格与XZ单元格有关系: ${sharesWithXZ}`);
console.log(`目标单元格与YZ单元格有关系: ${sharesWithYZ}`);
console.log(`目标单元格与枢纽单元格有关系: ${sharesWithPivot}`);
console.log(`目标单元格同时与XZ和YZ单元格有关系: ${sharesWithXZ && sharesWithYZ}`);
console.log(`目标单元格同时与XZ、YZ和枢纽单元格有关系: ${sharesWithXZ && sharesWithYZ && sharesWithPivot}`);