// 数独技巧实现：唯一数法和隐性唯一数法

/**
 * 唯一数法 (Naked Single)：查找只有一个可能数字的单元格
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @returns {Array} - 找到的唯一数法机会数组
 */
export const findNakedSingles = (board) => {
  const opportunities = [];
  
  // 遍历所有单元格
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // 跳过已填入数字的单元格
      if (board[row][col] !== 0) continue;
      
      // 直接计算可能的数字，不依赖候选数
      const possibleNumbers = [];
      for (let num = 1; num <= 9; num++) {
        if (isValidMove(board, row, col, num)) {
          possibleNumbers.push(num);
        }
      }
      
      // 如果只有一个可能的数字，找到唯一数法机会
      if (possibleNumbers.length === 1) {
        opportunities.push({
          type: 'nakedSingle',
          description: '唯一数法',
          row,
          col,
          value: possibleNumbers[0],
          cells: [[row, col]],
          message: `单元格(${row+1},${col+1})只有数字${possibleNumbers[0]}可以填入`
        });
      }
    }
  }
  
  return opportunities;
};

/**
 * 隐性唯一数法 (Hidden Single)：查找在特定区域中只有一个位置可以填入特定数字的情况
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @returns {Array} - 找到的隐性唯一数法机会数组（避免同一单元格重复）
 */
export const findHiddenSingles = (board) => {
  const opportunities = [];
  const processedCells = new Set(); // 用于跟踪已处理的单元格
  
  // 检查每一行
  for (let row = 0; row < 9; row++) {
    const result = findHiddenSinglesInRow(board, row);
    for (const item of result) {
      const cellKey = `${item.row}-${item.col}`;
      if (!processedCells.has(cellKey) && board[item.row][item.col] === 0) {
        processedCells.add(cellKey);
        opportunities.push(item);
      }
    }
  }
  
  // 检查每一列
  for (let col = 0; col < 9; col++) {
    const result = findHiddenSinglesInCol(board, col);
    for (const item of result) {
      const cellKey = `${item.row}-${item.col}`;
      if (!processedCells.has(cellKey) && board[item.row][item.col] === 0) {
        processedCells.add(cellKey);
        opportunities.push(item);
      }
    }
  }
  
  // 检查每一个3x3宫
  for (let box = 0; box < 9; box++) {
    const result = findHiddenSinglesInBox(board, box);
    for (const item of result) {
      const cellKey = `${item.row}-${item.col}`;
      if (!processedCells.has(cellKey) && board[item.row][item.col] === 0) {
        processedCells.add(cellKey);
        opportunities.push(item);
      }
    }
  }
  
  return opportunities;
};

/**
 * 在一行中查找隐性唯一数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {number} rowIndex - 行索引
 * @returns {Array} - 找到的隐性唯一数法机会数组
 */
const findHiddenSinglesInRow = (board, rowIndex) => {
  const opportunities = [];
  
  // 检查每个数字1-9
  for (let num = 1; num <= 9; num++) {
    // 如果数字已经存在于该行，则跳过
    let foundCount = 0;
    let possibleCol = -1;
    
    // 检查该行的每个单元格
    for (let col = 0; col < 9; col++) {
      // 如果单元格已有数字，则跳过
      if (board[rowIndex][col] !== 0) continue;
      
      // 检查该数字是否可以填入此单元格
      if (isValidMove(board, rowIndex, col, num)) {
        foundCount++;
        possibleCol = col;
      }
      
      // 如果已经找到两个可能的位置，则不需要继续检查
      if (foundCount > 1) break;
    }
    
    // 如果该数字在该行中只有一个可能的位置，则找到隐性唯一数
    if (foundCount === 1) {
      opportunities.push({
        type: 'hiddenSingleRow',
        description: '行摒除法',
        row: rowIndex,
        col: possibleCol,
        value: num,
        cells: [[rowIndex, possibleCol]],
        message: `在第${rowIndex+1}行中，数字${num}只能填入单元格(${rowIndex+1},${possibleCol+1})`
      });
    }
  }
  
  return opportunities;
};

/**
 * 在一列中查找隐性唯一数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {number} colIndex - 列索引
 * @returns {Array} - 找到的隐性唯一数法机会数组
 */
const findHiddenSinglesInCol = (board, colIndex) => {
  const opportunities = [];
  
  // 检查每个数字1-9
  for (let num = 1; num <= 9; num++) {
    // 如果数字已经存在于该列，则跳过
    let foundCount = 0;
    let possibleRow = -1;
    
    // 检查该列的每个单元格
    for (let row = 0; row < 9; row++) {
      // 如果单元格已有数字，则跳过
      if (board[row][colIndex] !== 0) continue;
      
      // 检查该数字是否可以填入此单元格
      if (isValidMove(board, row, colIndex, num)) {
        foundCount++;
        possibleRow = row;
      }
      
      // 如果已经找到两个可能的位置，则不需要继续检查
      if (foundCount > 1) break;
    }
    
    // 如果该数字在该列中只有一个可能的位置，则找到隐性唯一数
    if (foundCount === 1) {
      opportunities.push({
        type: 'hiddenSingleCol',
        description: '列摒除法',
        row: possibleRow,
        col: colIndex,
        value: num,
        cells: [[possibleRow, colIndex]],
        message: `在第${colIndex+1}列中，数字${num}只能填入单元格(${possibleRow+1},${colIndex+1})`
      });
    }
  }
  
  return opportunities;
};

/**
 * 在一个3x3宫中查找隐性唯一数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {number} boxIndex - 宫索引 (0-8)
 * @returns {Array} - 找到的隐性唯一数法机会数组
 */
const findHiddenSinglesInBox = (board, boxIndex) => {
  const opportunities = [];
  
  // 计算宫的起始行和列
  const startRow = Math.floor(boxIndex / 3) * 3;
  const startCol = (boxIndex % 3) * 3;
  
  // 检查每个数字1-9
  for (let num = 1; num <= 9; num++) {
    let foundCount = 0;
    let possibleRow = -1;
    let possibleCol = -1;
    
    // 检查宫中的每个单元格
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const row = startRow + r;
        const col = startCol + c;
        
        // 如果单元格已有数字，则跳过
        if (board[row][col] !== 0) continue;
        
        // 检查该数字是否可以填入此单元格
        if (isValidMove(board, row, col, num)) {
          foundCount++;
          possibleRow = row;
          possibleCol = col;
        }
        
        // 如果已经找到两个可能的位置，则不需要继续检查
        if (foundCount > 1) break;
      }
      if (foundCount > 1) break;
    }
    
    // 如果该数字在该宫中只有一个可能的位置，则找到隐性唯一数
    if (foundCount === 1) {
      opportunities.push({
        type: 'hiddenSingleBox',
        description: '宫摒除法',
        row: possibleRow,
        col: possibleCol,
        value: num,
        cells: [[possibleRow, possibleCol]],
        message: `在第${boxIndex+1}宫中，数字${num}只能填入单元格(${possibleRow+1},${possibleCol+1})`
      });
    }
  }
  
  return opportunities;
};

/**
 * 检查在指定位置填入数字是否有效
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {number} row - 行索引
 * @param {number} col - 列索引
 * @param {number} num - 要填入的数字
 * @returns {boolean} - 是否可以填入
 */
const isValidMove = (board, row, col, num) => {
  // 检查同一行
  for (let c = 0; c < 9; c++) {
    if (board[row][c] === num) {
      return false;
    }
  }
  
  // 检查同一列
  for (let r = 0; r < 9; r++) {
    if (board[r][col] === num) {
      return false;
    }
  }
  
  // 检查同一3x3宫
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if (board[r][c] === num) {
        return false;
      }
    }
  }
  
  return true;
};

/**
 * 识别所有可用的技巧
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}（不再使用）
 * @returns {Array} - 所有可用的技巧机会
 */
export const identifyAllTechniques = (board, pencilNotes = {}) => {
  // 查找唯一数法机会（不再依赖候选数）
  const nakedSingles = findNakedSingles(board);
  
  // 查找隐性唯一数法机会
  const hiddenSingles = findHiddenSingles(board);
  
  // 合并所有技巧机会，先返回唯一数法，再返回隐性唯一数法
  return [...nakedSingles, ...hiddenSingles];
};

/**
 * 应用技巧
 * @param {Object} technique - 要应用的技巧对象
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @returns {Object} - 包含更新后的棋盘和操作信息
 */
export const applyTechnique = (technique, board) => {
  // 创建棋盘副本
  const newBoard = board.map(row => [...row]);
  
  // 根据技巧类型应用操作
  switch (technique.type) {
    case 'nakedSingle':
    case 'hiddenSingleRow':
    case 'hiddenSingleCol':
    case 'hiddenSingleBox':
      // 应用数字填入
      newBoard[technique.row][technique.col] = technique.value;
      return {
        board: newBoard,
        operation: {
          type: 'fill',
          row: technique.row,
          col: technique.col,
          value: technique.value
        }
      };
    
    default:
      console.warn('未知的技巧类型:', technique.type);
      return {
        board: newBoard,
        operation: null
      };
  }
};