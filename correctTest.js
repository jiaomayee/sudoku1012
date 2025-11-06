// 正确的XYZ-Wing测试用例

// 模拟棋盘
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

console.log('Board:');
board.forEach((row, i) => console.log(i, row.map(cell => cell === 0 ? '.' : cell).join(' ')));

// 检查指定位置的值
console.log('\nChecking specified positions:');
console.log('(4,4) (0-indexed):', board[4][4]); // 应该是3
console.log('(4,5) (0-indexed):', board[4][5]); // 应该是7
console.log('(6,4) (0-indexed):', board[6][4]); // 应该是0 (空)
console.log('(5,4) (0-indexed):', board[5][4]); // 应该是0 (空)

// 如果用户使用的是1索引，那么：
console.log('\nIf using 1-indexed positions:');
console.log('(4,5) (1-indexed) -> (3,4) (0-indexed):', board[3][4]); // 应该是0 (空)
console.log('(4,6) (1-indexed) -> (3,5) (0-indexed):', board[3][5]); // 应该是0 (空)
console.log('(7,5) (1-indexed) -> (6,4) (0-indexed):', board[6][4]); // 应该是0 (空)
console.log('(6,5) (1-indexed) -> (5,4) (0-indexed):', board[5][4]); // 应该是0 (空)

// 获取所有有三个候选数的单元格（三候选数单元格）
const getTripleCandidatesCells = (pencilNotes) => {
  const cells = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== 0) {
        continue;
      }
      
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      
      if (notes.length === 3) {
        cells.push({ row, col, notes });
      }
    }
  }
  return cells;
};

// 获取所有只有两个候选数的单元格（双候选数单元格）
const getDoubleCandidatesCells = (pencilNotes) => {
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

// 测试候选数数据 - 使用1索引转换为0索引的位置
const pencilNotes = {
  // 枢纽单元格(4,5) 1-indexed -> (3,4) 0-indexed
  "3-4": [1, 2, 9],
  
  // XZ单元格(4,6) 1-indexed -> (3,5) 0-indexed
  "3-5": [1, 9],
  
  // YZ单元格(7,5) 1-indexed -> (6,4) 0-indexed
  "6-4": [2, 9],
  
  // 目标单元格(6,5) 1-indexed -> (5,4) 0-indexed，包含候选数9
  "5-4": [8, 9],
};

console.log('\nPencil Notes:');
for (const [key, notes] of Object.entries(pencilNotes)) {
  console.log(`${key}: [${notes.join(', ')}]`);
}

console.log('\nGetting candidate cells...');
const tripleCandidatesCells = getTripleCandidatesCells(pencilNotes);
console.log('Triple candidates cells found:', tripleCandidatesCells);

const doubleCandidatesCells = getDoubleCandidatesCells(pencilNotes);
console.log('Double candidates cells found:', doubleCandidatesCells);