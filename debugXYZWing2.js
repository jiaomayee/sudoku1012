// 进一步调试XYZ-Wing实现
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

// 检查所有空单元格的候选数
console.log("\n检查所有空单元格:");
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === 0) {
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      console.log(`单元格(${row + 1},${col + 1}) - 数组索引[${row}][${col}]: 候选数 [${notes.join(', ')}]`);
    }
  }
}

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

const doubleCandidatesCells = getDoubleCandidatesCells();
const tripleCandidatesCells = getTripleCandidatesCells();

console.log("\n候选数单元格:");
console.log("三候选数单元格:", tripleCandidatesCells);
console.log("双候选数单元格:", doubleCandidatesCells);

// 检查枢纽单元格(4,5)是否被正确识别
const pivotRow = 3; // 0-based index for row 4
const pivotCol = 4; // 0-based index for column 5
const pivotNotesKey = `${pivotRow}-${pivotCol}`;
const pivotNotes = pencilNotes[pivotNotesKey] || [];
console.log(`\n枢纽单元格(${pivotRow + 1},${pivotCol + 1})的候选数: [${pivotNotes.join(', ')}]`);
console.log(`候选数数量: ${pivotNotes.length}`);
console.log(`是否为三候选数: ${pivotNotes.length === 3}`);