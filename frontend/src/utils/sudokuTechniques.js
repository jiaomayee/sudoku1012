// 数独技巧实现：初级技巧集合
import { isValidMove } from './sudokuUtils.js';
import { findALSXZ } from './alsXZTechniques.js';

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
          description: 'nakedSingle',
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
 * 候选数唯一法 (Notes Single)：当单元格的候选数中只有一个数字时
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的候选数唯一法机会数组
 */
export const findNotesSingles = (board, pencilNotes = {}) => {
  const opportunities = [];
  const processedCells = new Set(); // 用于跟踪已处理的单元格
  
  // 1. 首先检查单元格候选数唯一的情况（单元格只有一个候选数）
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // 跳过已有数字的单元格
      if (board[row][col] !== 0) continue;
      
      const cellKey = `${row}-${col}`;
      const notes = pencilNotes[cellKey] || [];
      
      // 如果单元格只有一个候选数，就是唯一候选数
      if (notes.length === 1) {
        processedCells.add(cellKey);
        opportunities.push({
          type: 'notesSingle',
          description: 'notesSingle',
          row: row,
          col: col,
          value: notes[0],
          cells: [[row, col]],
          notes: notes,
          message: `单元格(${row+1},${col+1})只有一个候选数: ${notes[0]}`
        });
      }
    }
  }
  
  // 2. 然后检查行中的隐性唯一候选数法
  for (let row = 0; row < 9; row++) {
    const result = findNotesSinglesInRow(board, pencilNotes, row);
    for (const item of result) {
      const cellKey = `${item.row}-${item.col}`;
      if (!processedCells.has(cellKey) && board[item.row][item.col] === 0) {
        processedCells.add(cellKey);
        opportunities.push(item);
      }
    }
  }
  
  // 3. 检查列中的隐性唯一候选数法
  for (let col = 0; col < 9; col++) {
    const result = findNotesSinglesInCol(board, pencilNotes, col);
    for (const item of result) {
      const cellKey = `${item.row}-${item.col}`;
      if (!processedCells.has(cellKey) && board[item.row][item.col] === 0) {
        processedCells.add(cellKey);
        opportunities.push(item);
      }
    }
  }
  
  // 4. 检查3x3宫中的隐性唯一候选数法
  for (let box = 0; box < 9; box++) {
    const result = findNotesSinglesInBox(board, pencilNotes, box);
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
 * 在一行中查找候选数唯一法
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @param {number} rowIndex - 行索引
 * @returns {Array} - 找到的候选数唯一法机会数组
 */
const findNotesSinglesInRow = (board, pencilNotes, rowIndex) => {
  const opportunities = [];
  
  // 收集该行所有空单元格的候选数位置信息
  const numPositions = {};
  for (let num = 1; num <= 9; num++) {
    numPositions[num] = [];
  }
  
  for (let col = 0; col < 9; col++) {
    if (board[rowIndex][col] !== 0) continue;
    const notesKey = `${rowIndex}-${col}`;
    const notes = pencilNotes[notesKey] || [];
    // 对于每个候选数，记录它出现的单元格位置
    notes.forEach(num => {
      if (numPositions[num]) {
        numPositions[num].push(col);
      }
    });
  }
  
  // 检查是否存在只在单个单元格中出现的候选数
  for (let num = 1; num <= 9; num++) {
    if (numPositions[num].length === 1) {
      const col = numPositions[num][0];
      const notesKey = `${rowIndex}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      opportunities.push({
        type: 'notesSingle',
        description: 'notesSingle',
        row: rowIndex,
        col: col,
        value: num,
        cells: [[rowIndex, col]],
        notes: notes,
        message: `在第${rowIndex+1}行中，候选数${num}只能填入单元格(${rowIndex+1},${col+1})`
      });
    }
  }
  
  return opportunities;
};

/**
 * 在一列中查找候选数唯一法
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @param {number} colIndex - 列索引
 * @returns {Array} - 找到的候选数唯一法机会数组
 */
const findNotesSinglesInCol = (board, pencilNotes, colIndex) => {
  const opportunities = [];
  
  // 收集该列所有空单元格的候选数位置信息
  const numPositions = {};
  for (let num = 1; num <= 9; num++) {
    numPositions[num] = [];
  }
  
  for (let row = 0; row < 9; row++) {
    if (board[row][colIndex] !== 0) continue;
    const notesKey = `${row}-${colIndex}`;
    const notes = pencilNotes[notesKey] || [];
    // 对于每个候选数，记录它出现的单元格位置
    notes.forEach(num => {
      if (numPositions[num]) {
        numPositions[num].push(row);
      }
    });
  }
  
  // 检查是否存在只在单个单元格中出现的候选数
  for (let num = 1; num <= 9; num++) {
    if (numPositions[num].length === 1) {
      const row = numPositions[num][0];
      const notesKey = `${row}-${colIndex}`;
      const notes = pencilNotes[notesKey] || [];
      opportunities.push({
        type: 'notesSingle',
        description: 'notesSingle',
        row: row,
        col: colIndex,
        value: num,
        cells: [[row, colIndex]],
        notes: notes,
        message: `在第${colIndex+1}列中，候选数${num}只能填入单元格(${row+1},${colIndex+1})`
      });
    }
  }
  
  return opportunities;
};

/**
 * 在一个3x3宫中查找候选数唯一法
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @param {number} boxIndex - 宫索引 (0-8)
 * @returns {Array} - 找到的候选数唯一法机会数组
 */
const findNotesSinglesInBox = (board, pencilNotes, boxIndex) => {
  const opportunities = [];
  
  // 计算宫的起始行和列
  const startRow = Math.floor(boxIndex / 3) * 3;
  const startCol = (boxIndex % 3) * 3;
  
  // 收集该宫所有空单元格的候选数位置信息
  const numPositions = {};
  for (let num = 1; num <= 9; num++) {
    numPositions[num] = [];
  }
  
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = startRow + r;
      const col = startCol + c;
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      // 对于每个候选数，记录它出现的单元格位置
      notes.forEach(num => {
        if (numPositions[num]) {
          numPositions[num].push({ row, col, r, c });
        }
      });
    }
  }
  
  // 检查是否存在只在单个单元格中出现的候选数
  for (let num = 1; num <= 9; num++) {
    if (numPositions[num].length === 1) {
      const { row, col } = numPositions[num][0];
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      opportunities.push({
        type: 'notesSingle',
        description: 'notesSingle',
        row: row,
        col: col,
        value: num,
        cells: [[row, col]],
        notes: notes,
        message: `在第${boxIndex+1}宫中，候选数${num}只能填入单元格(${row+1},${col+1})`
      });
    }
  }
  
  return opportunities;
};

/**
 * 显性数对法 (Naked Pairs)：在同一行、列或宫中，两个单元格都只有相同的两个候选数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的显性数对法机会数组
 */
export const findNakedPairs = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查同一行中的显性数对
  const checkRowForNakedPairs = (row) => {
    // 存储有两个候选数的单元格
    const twoNotesCells = [];
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      if (notes.length === 2) {
        twoNotesCells.push({ row, col, notes });
      }
    }
    
    // 检查是否存在两个候选数相同的单元格对
    for (let i = 0; i < twoNotesCells.length - 1; i++) {
      for (let j = i + 1; j < twoNotesCells.length; j++) {
        const cell1 = twoNotesCells[i];
        const cell2 = twoNotesCells[j];
        // 检查两个单元格的候选数是否相同（不考虑顺序）
        if (cell1.notes.sort().join(',') === cell2.notes.sort().join(',')) {
          // 检查是否有可删除的候选数
          let hasRemovableCandidates = false;
          const targetCells = [];
          const removableCandidates = [];
          
          // 检查该行其他单元格是否包含这两个候选数
          for (let col = 0; col < 9; col++) {
            // 跳过数对所在的单元格
            if (col === cell1.col || col === cell2.col) continue;
            if (board[row][col] !== 0) continue;
            
            const notesKey = `${row}-${col}`;
            const cellNotes = pencilNotes[notesKey] || [];
            
            // 检查是否包含数对中的候选数
            const commonNotes = cellNotes.filter(note => cell1.notes.includes(note));
            if (commonNotes.length > 0) {
              hasRemovableCandidates = true;
              targetCells.push([row, col]);
              commonNotes.forEach(note => removableCandidates.push(note));
            }
          }
          
          // 只有当有可删除的候选数时，才添加机会
          if (hasRemovableCandidates) {
            opportunities.push({
              type: 'nakedPairRow',
              description: '显性数对法(行)',
              cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
              values: cell1.notes,
              targetCells,
              targetCellsDetails: targetCells.map((cell, index) => {
                const [r, c] = cell;
                const notesKey = `${r}-${c}`;
                const cellNotes = pencilNotes[notesKey] || [];
                const commonNotes = cellNotes.filter(note => cell1.notes.includes(note));
                return {
                  row: r,
                  col: c,
                  notesToRemove: commonNotes
                };
              }),
              removableCandidates,
              message: `在第${row+1}行，单元格(${cell1.col+1})和(${cell2.col+1})形成显性数对[${cell1.notes.join(',')}]`
            });
          }
        }
      }
    }
  };
  
  // 检查同一列中的显性数对
  const checkColForNakedPairs = (col) => {
    const twoNotesCells = [];
    for (let row = 0; row < 9; row++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      if (notes.length === 2) {
        twoNotesCells.push({ row, col, notes });
      }
    }
    
    for (let i = 0; i < twoNotesCells.length - 1; i++) {
      for (let j = i + 1; j < twoNotesCells.length; j++) {
        const cell1 = twoNotesCells[i];
        const cell2 = twoNotesCells[j];
        if (cell1.notes.sort().join(',') === cell2.notes.sort().join(',')) {
          // 检查是否有可删除的候选数
          let hasRemovableCandidates = false;
          const targetCells = [];
          const removableCandidates = [];
          
          // 检查该列其他单元格是否包含这两个候选数
          for (let row = 0; row < 9; row++) {
            // 跳过数对所在的单元格
            if (row === cell1.row || row === cell2.row) continue;
            if (board[row][col] !== 0) continue;
            
            const notesKey = `${row}-${col}`;
            const cellNotes = pencilNotes[notesKey] || [];
            
            // 检查是否包含数对中的候选数
            const commonNotes = cellNotes.filter(note => cell1.notes.includes(note));
            if (commonNotes.length > 0) {
              hasRemovableCandidates = true;
              targetCells.push([row, col]);
              commonNotes.forEach(note => removableCandidates.push(note));
            }
          }
          
          // 只有当有可删除的候选数时，才添加机会
          if (hasRemovableCandidates) {
            opportunities.push({
              type: 'nakedPairCol',
              description: '显性数对法(列)',
              cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
              values: cell1.notes,
              targetCells,
              targetCellsDetails: targetCells.map((cell, index) => {
                const [r, c] = cell;
                const notesKey = `${r}-${c}`;
                const cellNotes = pencilNotes[notesKey] || [];
                const commonNotes = cellNotes.filter(note => cell1.notes.includes(note));
                return {
                  row: r,
                  col: c,
                  notesToRemove: commonNotes
                };
              }),
              removableCandidates,
              message: `在第${col+1}列，单元格(${cell1.row+1})和(${cell2.row+1})形成显性数对[${cell1.notes.join(',')}]`
            });
          }
        }
      }
    }
  };
  
  // 检查同一宫中的显性数对
  const checkBoxForNakedPairs = (boxRow, boxCol) => {
    const twoNotesCells = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const row = boxRow * 3 + r;
        const col = boxCol * 3 + c;
        if (board[row][col] !== 0) continue;
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.length === 2) {
          twoNotesCells.push({ row, col, notes });
        }
      }
    }
    
    for (let i = 0; i < twoNotesCells.length - 1; i++) {
      for (let j = i + 1; j < twoNotesCells.length; j++) {
        const cell1 = twoNotesCells[i];
        const cell2 = twoNotesCells[j];
        if (cell1.notes.sort().join(',') === cell2.notes.sort().join(',')) {
          // 检查是否有可删除的候选数
          let hasRemovableCandidates = false;
          const targetCells = [];
          const removableCandidates = [];
          
          // 检查该宫其他单元格是否包含这两个候选数
          for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
              const row = boxRow * 3 + r;
              const col = boxCol * 3 + c;
              // 跳过数对所在的单元格
              if ((row === cell1.row && col === cell1.col) || (row === cell2.row && col === cell2.col)) continue;
              if (board[row][col] !== 0) continue;
              
              const notesKey = `${row}-${col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              
              // 检查是否包含数对中的候选数
              const commonNotes = cellNotes.filter(note => cell1.notes.includes(note));
              if (commonNotes.length > 0) {
                hasRemovableCandidates = true;
                targetCells.push([row, col]);
                commonNotes.forEach(note => removableCandidates.push(note));
              }
            }
          }
          
          // 只有当有可删除的候选数时，才添加机会
          if (hasRemovableCandidates) {
            opportunities.push({
              type: 'nakedPairBox',
              description: '显性数对法(宫)',
              cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
              values: cell1.notes,
              targetCells,
              targetCellsDetails: targetCells.map((cell, index) => {
                const [r, c] = cell;
                const notesKey = `${r}-${c}`;
                const cellNotes = pencilNotes[notesKey] || [];
                const commonNotes = cellNotes.filter(note => cell1.notes.includes(note));
                return {
                  row: r,
                  col: c,
                  notesToRemove: commonNotes
                };
              }),
              removableCandidates,
              message: `在第${boxRow*3+boxCol+1}宫，单元格(${cell1.row+1},${cell1.col+1})和(${cell2.row+1},${cell2.col+1})形成显性数对[${cell1.notes.join(',')}]`
            });
          }
        }
      }
    }
  };
  
  // 执行所有检查
  for (let i = 0; i < 9; i++) {
    checkRowForNakedPairs(i);
    checkColForNakedPairs(i);
  }
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      checkBoxForNakedPairs(boxRow, boxCol);
    }
  }
  
  return opportunities;
};
export const findHiddenPairs = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查行中的隐性数对
  const checkRowForHiddenPairs = (row) => {
    // 收集该行所有空单元格的候选数位置信息
    const numPositions = {};
    for (let num = 1; num <= 9; num++) {
      numPositions[num] = [];
    }
    
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      // 对于每个候选数，记录它出现的单元格位置
      notes.forEach(num => {
        if (numPositions[num]) {
          numPositions[num].push(col);
        }
      });
    }
    
    // 检查是否存在两个数字，它们的位置集合相同且大小为2
    const nums = Object.keys(numPositions).map(Number).filter(num => numPositions[num].length === 2);
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const num1 = nums[i];
        const num2 = nums[j];
        // 检查两个数字的位置集合是否完全相同（不考虑顺序）
        if (numPositions[num1].sort().join(',') === numPositions[num2].sort().join(',')) {
          const cols = numPositions[num1];
          
          // 检查是否有可删除的候选数
          let hasRemovableCandidates = false;
          const targetCells = [];
          const removableCandidates = [];
          const targetCellsDetails = []; // 添加详细的目标单元格信息
          
          // 检查这两个单元格是否有除了这两个数字以外的候选数
            cols.forEach(col => {
              const notesKey = `${row}-${col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              const extraNotes = cellNotes.filter(note => note !== num1 && note !== num2);
              if (extraNotes.length > 0) {
                hasRemovableCandidates = true;
                targetCells.push([row, col]);
                extraNotes.forEach(note => removableCandidates.push(note));
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: row,
                  col: col,
                  notesToRemove: extraNotes
                });
              }
            });
          
          // 只有当有可删除的候选数时，才添加机会
          if (hasRemovableCandidates) {
            opportunities.push({
              type: 'hiddenPairRow',
              description: '隐性数对法(行)',
              cells: [[row, cols[0]], [row, cols[1]]],
              values: [num1, num2],
              targetCells,
              targetCellsDetails, // 添加详细信息
              removableCandidates,
              message: `在第${row+1}行，数字${num1}和${num2}只能出现在单元格(${cols[0]+1})和(${cols[1]+1})中`
            });
          }
        }
      }
    }
  };
  
  // 检查列中的隐性数对
  const checkColForHiddenPairs = (col) => {
    const numPositions = {};
    for (let num = 1; num <= 9; num++) {
      numPositions[num] = [];
    }
    
    for (let row = 0; row < 9; row++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      notes.forEach(num => {
        if (numPositions[num]) {
          numPositions[num].push(row);
        }
      });
    }
    
    const nums = Object.keys(numPositions).map(Number).filter(num => numPositions[num].length === 2);
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const num1 = nums[i];
        const num2 = nums[j];
        if (numPositions[num1].sort().join(',') === numPositions[num2].sort().join(',')) {
          const rows = numPositions[num1];
          
          // 检查是否有可删除的候选数
          let hasRemovableCandidates = false;
          const targetCells = [];
          const removableCandidates = [];
          const targetCellsDetails = []; // 添加详细的目标单元格信息
          
          // 检查这两个单元格是否有除了这两个数字以外的候选数
          rows.forEach(row => {
            const notesKey = `${row}-${col}`;
            const cellNotes = pencilNotes[notesKey] || [];
            const extraNotes = cellNotes.filter(note => note !== num1 && note !== num2);
            if (extraNotes.length > 0) {
              hasRemovableCandidates = true;
              targetCells.push([row, col]);
              extraNotes.forEach(note => removableCandidates.push(note));
              // 添加详细信息，包括每个单元格需要删除的候选数
              targetCellsDetails.push({
                row: row,
                col: col,
                notesToRemove: extraNotes
              });
            }
          });
          
          // 只有当有可删除的候选数时，才添加机会
          if (hasRemovableCandidates) {
            opportunities.push({
              type: 'hiddenPairCol',
              description: '隐性数对法(列)',
              cells: [[rows[0], col], [rows[1], col]],
              values: [num1, num2],
              targetCells,
              targetCellsDetails, // 添加详细信息
              removableCandidates,
              message: `在第${col+1}列，数字${num1}和${num2}只能出现在单元格(${rows[0]+1})和(${rows[1]+1})中`
            });
          }
        }
      }
    }
  };
  
  // 检查宫中的隐性数对
  const checkBoxForHiddenPairs = (boxRow, boxCol) => {
    const numPositions = {};
    for (let num = 1; num <= 9; num++) {
      numPositions[num] = [];
    }
    
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const row = boxRow * 3 + r;
        const col = boxCol * 3 + c;
        if (board[row][col] !== 0) continue;
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        notes.forEach(num => {
          if (numPositions[num]) {
            numPositions[num].push({ row, col });
          }
        });
      }
    }
    
    const nums = Object.keys(numPositions).map(Number).filter(num => numPositions[num].length === 2);
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const num1 = nums[i];
        const num2 = nums[j];
        // 比较位置对象数组
        const positions1 = numPositions[num1].map(p => `${p.row}-${p.col}`).sort();
        const positions2 = numPositions[num2].map(p => `${p.row}-${p.col}`).sort();
        if (positions1.join(',') === positions2.join(',')) {
          const cells = numPositions[num1];
          
          // 检查是否有可删除的候选数
          let hasRemovableCandidates = false;
          const targetCells = [];
          const removableCandidates = [];
          const targetCellsDetails = []; // 添加详细的目标单元格信息
          
          // 检查这两个单元格是否有除了这两个数字以外的候选数
          cells.forEach(cell => {
            const notesKey = `${cell.row}-${cell.col}`;
            const cellNotes = pencilNotes[notesKey] || [];
            const extraNotes = cellNotes.filter(note => note !== num1 && note !== num2);
            if (extraNotes.length > 0) {
              hasRemovableCandidates = true;
              targetCells.push([cell.row, cell.col]);
              extraNotes.forEach(note => removableCandidates.push(note));
              // 添加详细信息，包括每个单元格需要删除的候选数
              targetCellsDetails.push({
                row: cell.row,
                col: cell.col,
                notesToRemove: extraNotes
              });
            }
          });
          
          // 只有当有可删除的候选数时，才添加机会
          if (hasRemovableCandidates) {
            opportunities.push({
              type: 'hiddenPairBox',
              description: '隐性数对法(宫)',
              cells: cells.map(p => [p.row, p.col]),
              values: [num1, num2],
              targetCells,
              targetCellsDetails, // 添加详细信息
              removableCandidates,
              message: `在第${boxRow*3+boxCol+1}宫，数字${num1}和${num2}只能出现在单元格(${cells[0].row+1},${cells[0].col+1})和(${cells[1].row+1},${cells[1].col+1})中`
            });
          }
        }
      }
    }
  };
  
  // 执行所有检查
  for (let i = 0; i < 9; i++) {
    checkRowForHiddenPairs(i);
    checkColForHiddenPairs(i);
  }
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      checkBoxForHiddenPairs(boxRow, boxCol);
    }
  }
  
  return opportunities;
};

/**
 * 显性三链数法 (Naked Triples)：在同一行、列或宫中，三个单元格只包含三个不同的候选数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的显性三链数法机会数组
 */
export const findNakedTriples = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查同一行中的显性三链数
  const checkRowForNakedTriples = (row) => {
    // 存储有1-3个候选数的单元格
    const fewNotesCells = [];
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      if (notes.length >= 1 && notes.length <= 3) {
        fewNotesCells.push({ row, col, notes });
      }
    }
    
    // 检查是否存在三个单元格，它们的候选数集合的并集恰好是三个数字
    for (let i = 0; i < fewNotesCells.length - 2; i++) {
      for (let j = i + 1; j < fewNotesCells.length - 1; j++) {
        for (let k = j + 1; k < fewNotesCells.length; k++) {
          const cell1 = fewNotesCells[i];
          const cell2 = fewNotesCells[j];
          const cell3 = fewNotesCells[k];
          
          // 合并所有候选数并去重
          const allNotes = [...new Set([...cell1.notes, ...cell2.notes, ...cell3.notes])];
          
          // 如果所有候选数的并集恰好是三个数字，则找到显性三链数
          if (allNotes.length === 3) {
            // 检查每个单元格的候选数是否都是这三个数字的子集
            const isSubset1 = cell1.notes.every(note => allNotes.includes(note));
            const isSubset2 = cell2.notes.every(note => allNotes.includes(note));
            const isSubset3 = cell3.notes.every(note => allNotes.includes(note));
            
            if (isSubset1 && isSubset2 && isSubset3) {
              // 检查是否有可删除的候选数
              let hasRemovableCandidates = false;
              const targetCells = [];
              const removableCandidates = [];
              
              // 检查该行其他单元格是否包含这三个候选数
              for (let col = 0; col < 9; col++) {
                // 跳过三链数所在的单元格
                if (col === cell1.col || col === cell2.col || col === cell3.col) continue;
                if (board[row][col] !== 0) continue;
                
                const notesKey = `${row}-${col}`;
                const cellNotes = pencilNotes[notesKey] || [];
                
                // 检查是否包含三链数中的候选数
                const commonNotes = cellNotes.filter(note => allNotes.includes(note));
                if (commonNotes.length > 0) {
                  hasRemovableCandidates = true;
                  targetCells.push([row, col]);
                  commonNotes.forEach(note => removableCandidates.push(note));
                }
              }
              
              // 只有当有可删除的候选数时，才添加机会
              if (hasRemovableCandidates) {
                opportunities.push({
                  type: 'nakedTripleRow',
                  description: '显性三链数法(行)',
                  cells: [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]],
                  values: allNotes,
                  targetCells,
                  removableCandidates,
                  // 添加每个条件单元格的实际候选数信息
                  conditionCellsDetails: [
                    { row: cell1.row, col: cell1.col, notes: cell1.notes },
                    { row: cell2.row, col: cell2.col, notes: cell2.notes },
                    { row: cell3.row, col: cell3.col, notes: cell3.notes }
                  ],
                  // 添加每个目标单元格需要删除的候选数信息
                  targetCellsDetails: targetCells.map((cell, index) => {
                    const [r, c] = cell;
                    const notesKey = `${r}-${c}`;
                    const cellNotes = pencilNotes[notesKey] || [];
                    const commonNotes = cellNotes.filter(note => allNotes.includes(note));
                    return {
                      row: r,
                      col: c,
                      notesToRemove: commonNotes
                    };
                  }),
                  message: `在第${row+1}行，单元格(${cell1.col+1})、(${cell2.col+1})和(${cell3.col+1})形成显性三链数[${allNotes.join(',')}]`
                });
              }
            }
          }
        }
      }
    }
  };
  
  // 检查同一列中的显性三链数
  const checkColForNakedTriples = (col) => {
    const fewNotesCells = [];
    for (let row = 0; row < 9; row++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      if (notes.length >= 1 && notes.length <= 3) {
        fewNotesCells.push({ row, col, notes });
      }
    }
    
    for (let i = 0; i < fewNotesCells.length - 2; i++) {
      for (let j = i + 1; j < fewNotesCells.length - 1; j++) {
        for (let k = j + 1; k < fewNotesCells.length; k++) {
          const cell1 = fewNotesCells[i];
          const cell2 = fewNotesCells[j];
          const cell3 = fewNotesCells[k];
          
          const allNotes = [...new Set([...cell1.notes, ...cell2.notes, ...cell3.notes])];
          
          if (allNotes.length === 3) {
            const isSubset1 = cell1.notes.every(note => allNotes.includes(note));
            const isSubset2 = cell2.notes.every(note => allNotes.includes(note));
            const isSubset3 = cell3.notes.every(note => allNotes.includes(note));
            
            if (isSubset1 && isSubset2 && isSubset3) {
              // 检查是否有可删除的候选数
              let hasRemovableCandidates = false;
              const targetCells = [];
              const removableCandidates = [];
              
              // 检查该列其他单元格是否包含这三个候选数
              for (let row = 0; row < 9; row++) {
                // 跳过三链数所在的单元格
                if (row === cell1.row || row === cell2.row || row === cell3.row) continue;
                if (board[row][col] !== 0) continue;
                
                const notesKey = `${row}-${col}`;
                const cellNotes = pencilNotes[notesKey] || [];
                
                // 检查是否包含三链数中的候选数
                const commonNotes = cellNotes.filter(note => allNotes.includes(note));
                if (commonNotes.length > 0) {
                  hasRemovableCandidates = true;
                  targetCells.push([row, col]);
                  commonNotes.forEach(note => removableCandidates.push(note));
                }
              }
              
              // 只有当有可删除的候选数时，才添加机会
              if (hasRemovableCandidates) {
                opportunities.push({
                  type: 'nakedTripleCol',
                  description: '显性三链数法(列)',
                  cells: [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]],
                  values: allNotes,
                  targetCells,
                  removableCandidates,
                  // 添加每个条件单元格的实际候选数信息
                  conditionCellsDetails: [
                    { row: cell1.row, col: cell1.col, notes: cell1.notes },
                    { row: cell2.row, col: cell2.col, notes: cell2.notes },
                    { row: cell3.row, col: cell3.col, notes: cell3.notes }
                  ],
                  // 添加每个目标单元格需要删除的候选数信息
                  targetCellsDetails: targetCells.map((cell, index) => {
                    const [r, c] = cell;
                    const notesKey = `${r}-${c}`;
                    const cellNotes = pencilNotes[notesKey] || [];
                    const commonNotes = cellNotes.filter(note => allNotes.includes(note));
                    return {
                      row: r,
                      col: c,
                      notesToRemove: commonNotes
                    };
                  }),
                  message: `在第${col+1}列，单元格(${cell1.row+1})、(${cell2.row+1})和(${cell3.row+1})形成显性三链数[${allNotes.join(',')}]`
                });
              }
            }
          }
        }
      }
    }
  };
  
  // 检查同一宫中的显性三链数
  const checkBoxForNakedTriples = (boxRow, boxCol) => {
    const fewNotesCells = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const row = boxRow * 3 + r;
        const col = boxCol * 3 + c;
        if (board[row][col] !== 0) continue;
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.length >= 1 && notes.length <= 3) {
          fewNotesCells.push({ row, col, notes });
        }
      }
    }
    
    for (let i = 0; i < fewNotesCells.length - 2; i++) {
      for (let j = i + 1; j < fewNotesCells.length - 1; j++) {
        for (let k = j + 1; k < fewNotesCells.length; k++) {
          const cell1 = fewNotesCells[i];
          const cell2 = fewNotesCells[j];
          const cell3 = fewNotesCells[k];
          
          const allNotes = [...new Set([...cell1.notes, ...cell2.notes, ...cell3.notes])];
          
          if (allNotes.length === 3) {
            const isSubset1 = cell1.notes.every(note => allNotes.includes(note));
            const isSubset2 = cell2.notes.every(note => allNotes.includes(note));
            const isSubset3 = cell3.notes.every(note => allNotes.includes(note));
            
            if (isSubset1 && isSubset2 && isSubset3) {
              // 检查是否有可删除的候选数
              let hasRemovableCandidates = false;
              const targetCells = [];
              const removableCandidates = [];
              
              // 检查该宫其他单元格是否包含这三个候选数
              for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                  const row = boxRow * 3 + r;
                  const col = boxCol * 3 + c;
                  // 跳过三链数所在的单元格
                  if ((row === cell1.row && col === cell1.col) || (row === cell2.row && col === cell2.col) || (row === cell3.row && col === cell3.col)) continue;
                  if (board[row][col] !== 0) continue;
                  
                  const notesKey = `${row}-${col}`;
                  const cellNotes = pencilNotes[notesKey] || [];
                  
                  // 检查是否包含三链数中的候选数
                  const commonNotes = cellNotes.filter(note => allNotes.includes(note));
                  if (commonNotes.length > 0) {
                    hasRemovableCandidates = true;
                    targetCells.push([row, col]);
                    commonNotes.forEach(note => removableCandidates.push(note));
                  }
                }
              }
              
              // 只有当有可删除的候选数时，才添加机会
              if (hasRemovableCandidates) {
                opportunities.push({
                  type: 'nakedTripleBox',
                  description: '显性三链数法(宫)',
                  cells: [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]],
                  values: allNotes,
                  targetCells,
                  removableCandidates,
                  // 添加每个条件单元格的实际候选数信息
                  conditionCellsDetails: [
                    { row: cell1.row, col: cell1.col, notes: cell1.notes },
                    { row: cell2.row, col: cell2.col, notes: cell2.notes },
                    { row: cell3.row, col: cell3.col, notes: cell3.notes }
                  ],
                  // 添加每个目标单元格需要删除的候选数信息
                  targetCellsDetails: targetCells.map((cell, index) => {
                    const [r, c] = cell;
                    const notesKey = `${r}-${c}`;
                    const cellNotes = pencilNotes[notesKey] || [];
                    const commonNotes = cellNotes.filter(note => allNotes.includes(note));
                    return {
                      row: r,
                      col: c,
                      notesToRemove: commonNotes
                    };
                  }),
                  message: `在第${boxRow*3+boxCol+1}宫，单元格(${cell1.row+1},${cell1.col+1})、(${cell2.row+1},${cell2.col+1})和(${cell3.row+1},${cell3.col+1})形成显性三链数[${allNotes.join(',')}]`
                });
              }
            }
          }
        }
      }
    }
  };
  
  // 执行所有检查
  for (let i = 0; i < 9; i++) {
    checkRowForNakedTriples(i);
    checkColForNakedTriples(i);
  }
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      checkBoxForNakedTriples(boxRow, boxCol);
    }
  }
  
  return opportunities;
};

/**
 * 隐性三链数法 (Hidden Triples)：在同一行、列或宫中，三个数字只能出现在三个单元格中
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的隐性三链数法机会数组
 */
export const findHiddenTriples = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查行中的隐性三链数
  const checkRowForHiddenTriples = (row) => {
    // 收集该行所有空单元格的候选数位置信息
    const numPositions = {};
    for (let num = 1; num <= 9; num++) {
      numPositions[num] = [];
    }
    
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      // 对于每个候选数，记录它出现的单元格位置
      notes.forEach(num => {
        if (numPositions[num]) {
          numPositions[num].push(col);
        }
      });
    }
    
    // 检查是否存在三个数字，它们的位置集合完全相同且大小为3
    const nums = Object.keys(numPositions).map(Number).filter(num => numPositions[num].length === 3);
    
    // 生成所有可能的三数字组合
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          const num1 = nums[i];
          const num2 = nums[j];
          const num3 = nums[k];
          
          // 检查这三个数字的位置集合是否完全相同（不考虑顺序）
          const pos1 = numPositions[num1].sort().join(',');
          const pos2 = numPositions[num2].sort().join(',');
          const pos3 = numPositions[num3].sort().join(',');
          
          if (pos1 === pos2 && pos2 === pos3) {
            const cols = numPositions[num1];
            
            // 检查是否有可删除的候选数
            let hasRemovableCandidates = false;
            const targetCells = [];
            const removableCandidates = [];
            const targetCellsDetails = []; // 添加详细的目标单元格信息
            
            // 检查这三个单元格是否有除了这三个数字以外的候选数
            cols.forEach(col => {
              const notesKey = `${row}-${col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              const extraNotes = cellNotes.filter(note => note !== num1 && note !== num2 && note !== num3);
              if (extraNotes.length > 0) {
                hasRemovableCandidates = true;
                targetCells.push([row, col]);
                extraNotes.forEach(note => removableCandidates.push(note));
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: row,
                  col: col,
                  notesToRemove: extraNotes
                });
              }
            });
            
            // 只有当有可删除的候选数时，才添加机会
            if (hasRemovableCandidates) {
              opportunities.push({
                type: 'hiddenTripleRow',
                description: '隐性三链数法(行)',
                cells: [[row, cols[0]], [row, cols[1]], [row, cols[2]]],
                values: [num1, num2, num3],
                targetCells,
                targetCellsDetails, // 添加详细信息
                removableCandidates,
                message: `在第${row+1}行，数字${num1}、${num2}和${num3}只能出现在单元格(${cols[0]+1})、(${cols[1]+1})和(${cols[2]+1})中`
              });
            }
          }
        }
      }
    }
  };
  
  // 检查列中的隐性三链数
  const checkColForHiddenTriples = (col) => {
    const numPositions = {};
    for (let num = 1; num <= 9; num++) {
      numPositions[num] = [];
    }
    
    for (let row = 0; row < 9; row++) {
      if (board[row][col] !== 0) continue;
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      notes.forEach(num => {
        if (numPositions[num]) {
          numPositions[num].push(row);
        }
      });
    }
    
    const nums = Object.keys(numPositions).map(Number).filter(num => numPositions[num].length === 3);
    
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          const num1 = nums[i];
          const num2 = nums[j];
          const num3 = nums[k];
          
          const pos1 = numPositions[num1].sort().join(',');
          const pos2 = numPositions[num2].sort().join(',');
          const pos3 = numPositions[num3].sort().join(',');
          
          if (pos1 === pos2 && pos2 === pos3) {
            const rows = numPositions[num1];
            
            // 检查是否有可删除的候选数
            let hasRemovableCandidates = false;
            const targetCells = [];
            const removableCandidates = [];
            const targetCellsDetails = []; // 添加详细的目标单元格信息
            
            // 检查这三个单元格是否有除了这三个数字以外的候选数
            rows.forEach(row => {
              const notesKey = `${row}-${col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              const extraNotes = cellNotes.filter(note => note !== num1 && note !== num2 && note !== num3);
              if (extraNotes.length > 0) {
                hasRemovableCandidates = true;
                targetCells.push([row, col]);
                extraNotes.forEach(note => removableCandidates.push(note));
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: row,
                  col: col,
                  notesToRemove: extraNotes
                });
              }
            });
            
            // 只有当有可删除的候选数时，才添加机会
            if (hasRemovableCandidates) {
              opportunities.push({
                type: 'hiddenTripleCol',
                description: '隐性三链数法(列)',
                cells: [[rows[0], col], [rows[1], col], [rows[2], col]],
                values: [num1, num2, num3],
                targetCells,
                targetCellsDetails, // 添加详细信息
                removableCandidates,
                message: `在第${col+1}列，数字${num1}、${num2}和${num3}只能出现在单元格(${rows[0]+1})、(${rows[1]+1})和(${rows[2]+1})中`
              });
            }
          }
        }
      }
    }
  };
  
  // 检查宫中的隐性三链数
  const checkBoxForHiddenTriples = (boxRow, boxCol) => {
    const numPositions = {};
    for (let num = 1; num <= 9; num++) {
      numPositions[num] = [];
    }
    
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const row = boxRow * 3 + r;
        const col = boxCol * 3 + c;
        if (board[row][col] !== 0) continue;
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        notes.forEach(num => {
          if (numPositions[num]) {
            numPositions[num].push({ row, col });
          }
        });
      }
    }
    
    const nums = Object.keys(numPositions).map(Number).filter(num => numPositions[num].length === 3);
    
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          const num1 = nums[i];
          const num2 = nums[j];
          const num3 = nums[k];
          
          // 比较位置对象数组
          const pos1 = numPositions[num1].map(p => `${p.row}-${p.col}`).sort().join(',');
          const pos2 = numPositions[num2].map(p => `${p.row}-${p.col}`).sort().join(',');
          const pos3 = numPositions[num3].map(p => `${p.row}-${p.col}`).sort().join(',');
          
          if (pos1 === pos2 && pos2 === pos3) {
            const cells = numPositions[num1];
            
            // 检查是否有可删除的候选数
            let hasRemovableCandidates = false;
            const targetCells = [];
            const removableCandidates = [];
            const targetCellsDetails = []; // 添加详细的目标单元格信息
            
            // 检查这三个单元格是否有除了这三个数字以外的候选数
            cells.forEach(cell => {
              const notesKey = `${cell.row}-${cell.col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              const extraNotes = cellNotes.filter(note => note !== num1 && note !== num2 && note !== num3);
              if (extraNotes.length > 0) {
                hasRemovableCandidates = true;
                targetCells.push([cell.row, cell.col]);
                extraNotes.forEach(note => removableCandidates.push(note));
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: cell.row,
                  col: cell.col,
                  notesToRemove: extraNotes
                });
              }
            });
            
            // 只有当有可删除的候选数时，才添加机会
            if (hasRemovableCandidates) {
              opportunities.push({
                type: 'hiddenTripleBox',
                description: '隐性三链数法(宫)',
                cells: cells.map(p => [p.row, p.col]),
                values: [num1, num2, num3],
                targetCells,
                targetCellsDetails, // 添加详细信息
                removableCandidates,
                message: `在第${boxRow*3+boxCol+1}宫，数字${num1}、${num2}和${num3}只能出现在单元格(${cells[0].row+1},${cells[0].col+1})、(${cells[1].row+1},${cells[1].col+1})和(${cells[2].row+1},${cells[2].col+1})中`
              });
            }
          }
        }
      }
    }
  };
  
  // 执行所有检查
  for (let i = 0; i < 9; i++) {
    checkRowForHiddenTriples(i);
    checkColForHiddenTriples(i);
  }
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      checkBoxForHiddenTriples(boxRow, boxCol);
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
          description: 'hiddenSingleRow',
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
          description: 'hiddenSingleCol',
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
          description: 'hiddenSingleBox',
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
 * 指向对法 (Pointing Pairs)：当一个数字在某个3x3宫格中只能出现在同一行或同一列时
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的指向对法机会数组
 */
export const findPointingPairs = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查每个宫格
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      // 检查每个数字
      for (let num = 1; num <= 9; num++) {
        // 获取该数字在当前宫格中的可能位置
        const possiblePositions = [];
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            const row = boxRow * 3 + r;
            const col = boxCol * 3 + c;
            
            // 如果该单元格已有数字，跳过
            if (board[row][col] !== 0) continue;
            
            // 检查数字是否有效
            if (isValidMove(board, row, col, num)) {
              possiblePositions.push({ row, col, r, c });
            }
          }
        }
        
        // 如果可能位置少于2个，无法形成指向对
        if (possiblePositions.length < 2) continue;
        
        // 检查是否所有可能位置都在同一行
        const allSameRow = possiblePositions.every(pos => pos.r === possiblePositions[0].r);
        // 检查是否所有可能位置都在同一列
        const allSameCol = possiblePositions.every(pos => pos.c === possiblePositions[0].c);
        
        if (allSameRow) {
          // 获取该数字所在的行
          const targetRow = possiblePositions[0].r;
          const actualRow = boxRow * 3 + targetRow;
          
          // 找出该行中需要删除候选数的单元格（不在当前宫格中的单元格）
          const targetCells = [];
          const removableCandidates = [];
          const targetCellsDetails = []; // 添加详细的目标单元格信息
          
          for (let col = 0; col < 9; col++) {
            // 跳过当前宫格中的列
            if (col >= boxCol * 3 && col < (boxCol + 1) * 3) continue;
            
            // 跳过已填数字的单元格
            if (board[actualRow][col] !== 0) continue;
            
            // 检查该单元格是否可以填入num
            if (isValidMove(board, actualRow, col, num)) {
              const notesKey = `${actualRow}-${col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              
              // 只有当单元格确实包含该候选数时，才将其添加为目标单元格
              if (cellNotes.includes(num)) {
                targetCells.push([actualRow, col]);
                removableCandidates.push(num);
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: actualRow,
                  col: col,
                  notesToRemove: [num]
                });
              }
            }
          }
          
          // 只有当有实际可删除的候选数时，才添加机会
          if (targetCells.length > 0) {
            opportunities.push({
              type: 'pointingPairsRow',
              description: '指向对法(行)',
              boxRow,
              boxCol,
              row: actualRow,
              number: num,
              sourceCells: possiblePositions.map(pos => [pos.row, pos.col]),
              targetCells,
              targetCellsDetails, // 添加详细信息
              removableCandidates,
              message: `在第${boxRow * 3 + boxCol + 1}宫，数字${num}只能出现在第${actualRow + 1}行，可以排除该行其他宫格中数字${num}的可能性`
            });
          }
        } else if (allSameCol) {
          // 获取该数字所在的列
          const targetCol = possiblePositions[0].c;
          const actualCol = boxCol * 3 + targetCol;
          
          // 找出该列中需要删除候选数的单元格（不在当前宫格中的单元格）
          const targetCells = [];
          const removableCandidates = [];
          const targetCellsDetails = []; // 添加详细的目标单元格信息
          
          for (let row = 0; row < 9; row++) {
            // 跳过当前宫格中的行
            if (row >= boxRow * 3 && row < (boxRow + 1) * 3) continue;
            
            // 跳过已填数字的单元格
            if (board[row][actualCol] !== 0) continue;
            
            // 检查该单元格是否可以填入num
            if (isValidMove(board, row, actualCol, num)) {
              const notesKey = `${row}-${actualCol}`;
              const cellNotes = pencilNotes[notesKey] || [];
              
              // 只有当单元格确实包含该候选数时，才将其添加为目标单元格
              if (cellNotes.includes(num)) {
                targetCells.push([row, actualCol]);
                removableCandidates.push(num);
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: row,
                  col: actualCol,
                  notesToRemove: [num]
                });
              }
            }
          }
          
          // 只有当有实际可删除的候选数时，才添加机会
          if (targetCells.length > 0) {
            opportunities.push({
              type: 'pointingPairsCol',
              description: '指向对法(列)',
              boxRow,
              boxCol,
              col: actualCol,
              number: num,
              sourceCells: possiblePositions.map(pos => [pos.row, pos.col]),
              targetCells,
              targetCellsDetails, // 添加详细信息
              removableCandidates,
              message: `在第${boxRow * 3 + boxCol + 1}宫，数字${num}只能出现在第${actualCol + 1}列，可以排除该列其他宫格中数字${num}的可能性`
            });
          }
        }
      }
    }
  }
  
  return opportunities;
};

/**
 * 宫行列排除法 (Box-Line Reduction)：当一个数字在某一行或列中只能出现在同一个3x3宫格内时
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的宫行列排除法机会数组
 */
export const findBoxLineReduction = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查每一行
  for (let row = 0; row < 9; row++) {
    // 检查每个数字
    for (let num = 1; num <= 9; num++) {
      // 获取该数字在当前行中的可能位置
      const possiblePositions = [];
      for (let col = 0; col < 9; col++) {
        // 如果该单元格已有数字，跳过
        if (board[row][col] !== 0) continue;
        
        // 检查数字是否有效
        if (isValidMove(board, row, col, num)) {
          possiblePositions.push({ row, col });
        }
      }
      
      // 如果可能位置少于2个，无法形成排除
      if (possiblePositions.length < 1) continue;
      
      // 检查是否所有可能位置都在同一个宫格中
      const boxCols = possiblePositions.map(pos => Math.floor(pos.col / 3));
      const allSameBox = boxCols.every(boxCol => boxCol === boxCols[0]);
      
      if (allSameBox) {
        const targetBoxCol = boxCols[0];
        const targetBoxRow = Math.floor(row / 3);
        
        // 找出该宫格中需要删除候选数的单元格（不在当前行中的单元格）
        const targetCells = [];
        const removableCandidates = [];
        const targetCellsDetails = []; // 添加详细的目标单元格信息
        
        for (let r = targetBoxRow * 3; r < (targetBoxRow + 1) * 3; r++) {
          // 跳过当前行
          if (r === row) continue;
          
          for (let c = targetBoxCol * 3; c < (targetBoxCol + 1) * 3; c++) {
            // 跳过已填数字的单元格
            if (board[r][c] !== 0) continue;
            
            // 检查该单元格是否可以填入num
            if (isValidMove(board, r, c, num)) {
              const notesKey = `${r}-${c}`;
              const cellNotes = pencilNotes[notesKey] || [];
              
              // 只有当单元格确实包含该候选数时，才将其添加为目标单元格
              if (cellNotes.includes(num)) {
                targetCells.push([r, c]);
                removableCandidates.push(num);
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: r,
                  col: c,
                  notesToRemove: [num]
                });
              }
            }
          }
        }
        
        // 只有当有实际可删除的候选数时，才添加机会
        if (targetCells.length > 0) {
          opportunities.push({
            type: 'boxLineReductionRow',
            description: '宫行列排除法(行)',
            row,
            boxRow: targetBoxRow,
            boxCol: targetBoxCol,
            number: num,
            sourceCells: possiblePositions.map(pos => [pos.row, pos.col]),
            targetCells,
            targetCellsDetails, // 添加详细信息
            removableCandidates,
            message: `在第${row + 1}行，数字${num}只能出现在第${targetBoxRow * 3 + targetBoxCol + 1}宫，可以排除该宫中其他行数字${num}的可能性`
          });
        }
      }
    }
  }
  
  // 检查每一列
  for (let col = 0; col < 9; col++) {
    // 检查每个数字
    for (let num = 1; num <= 9; num++) {
      // 获取该数字在当前列中的可能位置
      const possiblePositions = [];
      for (let row = 0; row < 9; row++) {
        // 如果该单元格已有数字，跳过
        if (board[row][col] !== 0) continue;
        
        // 检查数字是否有效
        if (isValidMove(board, row, col, num)) {
          possiblePositions.push({ row, col });
        }
      }
      
      // 如果可能位置少于2个，无法形成排除
      if (possiblePositions.length < 1) continue;
      
      // 检查是否所有可能位置都在同一个宫格中
      const boxRows = possiblePositions.map(pos => Math.floor(pos.row / 3));
      const allSameBox = boxRows.every(boxRow => boxRow === boxRows[0]);
      
      if (allSameBox) {
        const targetBoxRow = boxRows[0];
        const targetBoxCol = Math.floor(col / 3);
        
        // 找出该宫格中需要删除候选数的单元格（不在当前列中的单元格）
        const targetCells = [];
        const removableCandidates = [];
        const targetCellsDetails = []; // 添加详细的目标单元格信息
        
        for (let r = targetBoxRow * 3; r < (targetBoxRow + 1) * 3; r++) {
          for (let c = targetBoxCol * 3; c < (targetBoxCol + 1) * 3; c++) {
            // 跳过当前列
            if (c === col) continue;
            
            // 跳过已填数字的单元格
            if (board[r][c] !== 0) continue;
            
            // 检查该单元格是否可以填入num
            if (isValidMove(board, r, c, num)) {
              const notesKey = `${r}-${c}`;
              const cellNotes = pencilNotes[notesKey] || [];
              
              // 只有当单元格确实包含该候选数时，才将其添加为目标单元格
              if (cellNotes.includes(num)) {
                targetCells.push([r, c]);
                removableCandidates.push(num);
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: r,
                  col: c,
                  notesToRemove: [num]
                });
              }
            }
          }
        }
        
        // 只有当有实际可删除的候选数时，才添加机会
        if (targetCells.length > 0) {
          opportunities.push({
            type: 'boxLineReductionCol',
            description: '宫行列排除法(列)',
            col,
            boxRow: targetBoxRow,
            boxCol: targetBoxCol,
            number: num,
            sourceCells: possiblePositions.map(pos => [pos.row, pos.col]),
            targetCells,
            targetCellsDetails, // 添加详细信息
            removableCandidates,
            message: `在第${col + 1}列，数字${num}只能出现在第${targetBoxRow * 3 + targetBoxCol + 1}宫，可以排除该宫中其他列数字${num}的可能性`
          });
        }
      }
    }
  }
  
  return opportunities;
};

/**
 * X-Wing技巧：两行两列结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的X-Wing技巧机会数组
 */
export const findXWing = (board, pencilNotes) => {
  const opportunities = [];
  
  // 检查所有数字1-9
  for (let num = 1; num <= 9; num++) {
    // 检查行X-Wing
    findRowXWing(board, pencilNotes, num, opportunities);
    
    // 检查列X-Wing
    findColXWing(board, pencilNotes, num, opportunities);
  }
  
  return opportunities;
};

/**
 * 查找行X-Wing结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据
 * @param {number} num - 要检查的数字
 * @param {Array} opportunities - 技巧机会数组
 */
const findRowXWing = (board, pencilNotes, num, opportunities) => {
  // 收集每一行中包含数字num的候选单元格
  const rowCandidates = [];
  for (let row = 0; row < 9; row++) {
    const candidates = [];
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.includes(num)) {
          candidates.push(col);
        }
      }
    }
    rowCandidates.push(candidates);
  }
  
  // 查找2行的组合
  for (let r1 = 0; r1 < 8; r1++) {
    if (rowCandidates[r1].length !== 2) continue;
    
    for (let r2 = r1 + 1; r2 < 9; r2++) {
      if (rowCandidates[r2].length !== 2) continue;
      
      // 检查两行是否有相同的候选列
      if (rowCandidates[r1][0] === rowCandidates[r2][0] && 
          rowCandidates[r1][1] === rowCandidates[r2][1]) {
        const col1 = rowCandidates[r1][0];
        const col2 = rowCandidates[r1][1];
        
        // 查找目标单元格（在相同的2列中，但不在这2行中）
        const targetCells = [];
        const removableCandidates = [];
        [col1, col2].forEach(col => {
          for (let row = 0; row < 9; row++) {
            // 跳过源行
            if (row === r1 || row === r2) continue;
            
            if (board[row][col] === 0) {
              const notesKey = `${row}-${col}`;
              const notes = pencilNotes[notesKey] || [];
              if (notes.includes(num)) {
                targetCells.push([row, col]);
                removableCandidates.push(num);
              }
            }
          }
        });
        
        // 只有当有实际可删除的候选数时，才添加机会
        if (targetCells.length > 0) {
          opportunities.push({
            type: 'xWingRow',
            description: `X-Wing (Row) for number ${num}`,
            number: num,
            rows: [r1, r2],
            cols: [col1, col2],
            cells: [[r1, col1], [r1, col2], [r2, col1], [r2, col2]],
            targetCells: targetCells,
            removableCandidates: removableCandidates,
            message: `X-Wing技巧（行）：在第${r1 + 1}行和第${r2 + 1}行中，数字${num}只出现在第${col1 + 1}列和第${col2 + 1}列中，形成一个两行两列的矩形结构。由于这个数字在这两行中只能出现在相同的两列，因此可以确定该数字在这两列的其他行中不可能存在，可以删除第${col1 + 1}列和第${col2 + 1}列中除第${r1 + 1}行和第${r2 + 1}行外其他单元格的数字${num}候选数`
          });
        }
      }
    }
  }
};

/**
 * 查找列X-Wing结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据
 * @param {number} num - 要检查的数字
 * @param {Array} opportunities - 技巧机会数组
 */
const findColXWing = (board, pencilNotes, num, opportunities) => {
  // 收集每一列中包含数字num的候选单元格
  const colCandidates = [];
  for (let col = 0; col < 9; col++) {
    const candidates = [];
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === 0) {
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.includes(num)) {
          candidates.push(row);
        }
      }
    }
    colCandidates.push(candidates);
  }
  
  // 查找2列的组合
  for (let c1 = 0; c1 < 8; c1++) {
    if (colCandidates[c1].length !== 2) continue;
    
    for (let c2 = c1 + 1; c2 < 9; c2++) {
      if (colCandidates[c2].length !== 2) continue;
      
      // 检查两列是否有相同的候选行
      if (colCandidates[c1][0] === colCandidates[c2][0] && 
          colCandidates[c1][1] === colCandidates[c2][1]) {
        const row1 = colCandidates[c1][0];
        const row2 = colCandidates[c1][1];
        
        // 查找目标单元格（在相同的2行中，但不在这2列中）
        const targetCells = [];
        const removableCandidates = [];
        [row1, row2].forEach(row => {
          for (let col = 0; col < 9; col++) {
            // 跳过源列
            if (col === c1 || col === c2) continue;
            
            if (board[row][col] === 0) {
              const notesKey = `${row}-${col}`;
              const notes = pencilNotes[notesKey] || [];
              if (notes.includes(num)) {
                targetCells.push([row, col]);
                removableCandidates.push(num);
              }
            }
          }
        });
        
        // 只有当有实际可删除的候选数时，才添加机会
        if (targetCells.length > 0) {
          opportunities.push({
            type: 'xWingCol',
            description: `X-Wing (Col) for number ${num}`,
            number: num,
            rows: [row1, row2],
            cols: [c1, c2],
            cells: [[row1, c1], [row1, c2], [row2, c1], [row2, c2]],
            targetCells: targetCells,
            removableCandidates: removableCandidates,
            message: `X-Wing技巧（列）：在第${c1 + 1}列和第${c2 + 1}列中，数字${num}只出现在第${row1 + 1}行和第${row2 + 1}行中，形成一个两行两列的矩形结构。由于这个数字在这两列中只能出现在相同的两行，因此可以确定该数字在这两行的其他列中不可能存在，可以删除第${row1 + 1}行和第${row2 + 1}行中除第${c1 + 1}列和第${c2 + 1}列外其他单元格的数字${num}候选数`
          });
        }
      }
    }
  }
};

/**
 * Swordfish技巧：三行三列结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的Swordfish技巧机会数组
 */
export const findSwordfish = (board, pencilNotes) => {
  const opportunities = [];
  
  // 检查所有数字1-9
  for (let num = 1; num <= 9; num++) {
    // 检查行Swordfish
    findRowSwordfish(board, pencilNotes, num, opportunities);
    
    // 检查列Swordfish
    findColSwordfish(board, pencilNotes, num, opportunities);
  }
  
  return opportunities;
};

/**
 * 查找行Swordfish结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据
 * @param {number} num - 要检查的数字
 * @param {Array} opportunities - 技巧机会数组
 */
const findRowSwordfish = (board, pencilNotes, num, opportunities) => {
  // 收集每一行中包含数字num的候选单元格
  const rowCandidates = [];
  for (let row = 0; row < 9; row++) {
    const candidates = [];
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.includes(num)) {
          candidates.push(col);
        }
      }
    }
    rowCandidates.push(candidates);
  }
  
  // 查找3行的组合
  for (let r1 = 0; r1 < 7; r1++) {
    if (rowCandidates[r1].length < 2 || rowCandidates[r1].length > 3) continue;
    
    for (let r2 = r1 + 1; r2 < 8; r2++) {
      if (rowCandidates[r2].length < 2 || rowCandidates[r2].length > 3) continue;
      
      for (let r3 = r2 + 1; r3 < 9; r3++) {
        if (rowCandidates[r3].length < 2 || rowCandidates[r3].length > 3) continue;
        
        // 合并所有候选列
        const allCols = new Set([
          ...rowCandidates[r1],
          ...rowCandidates[r2],
          ...rowCandidates[r3]
        ]);
        
        // 如果候选列正好是3列，则找到Swordfish
        if (allCols.size === 3) {
          const allColsArray = Array.from(allCols).sort((a, b) => a - b);
          
          // 收集源单元格
          const sourceCells = [];
          [r1, r2, r3].forEach(row => {
            rowCandidates[row].forEach(col => {
              if (allCols.has(col)) {
                sourceCells.push([row, col]);
              }
            });
          });
          
          // 查找目标单元格（在相同的3列中，但不在这3行中）
          const targetCells = [];
          const removableCandidates = [];
          allColsArray.forEach(col => {
            for (let row = 0; row < 9; row++) {
              // 跳过源行
              if (row === r1 || row === r2 || row === r3) continue;
              
              if (board[row][col] === 0) {
                const notesKey = `${row}-${col}`;
                const notes = pencilNotes[notesKey] || [];
                if (notes.includes(num)) {
                  targetCells.push([row, col]);
                  removableCandidates.push(num);
                }
              }
            }
          });
          
          // 只有当有实际可删除的候选数时，才添加机会
          if (targetCells.length > 0) {
            opportunities.push({
              type: 'swordfishRow',
              description: `Swordfish (Row) for number ${num}`,
              number: num,
              rows: [r1, r2, r3],
              cols: allColsArray,
              cells: sourceCells,
              targetCells: targetCells,
              removableCandidates: removableCandidates,
              message: `Swordfish技巧（行）：在第${r1 + 1}行、第${r2 + 1}行和第${r3 + 1}行中，数字${num}只出现在第${allColsArray.map(c => c + 1).join('、')}列中，形成一个三行三列的结构。由于这个数字在这三行中只能出现在相同的三列，因此可以确定该数字在这三列的其他行中不可能存在，可以删除第${allColsArray.map(c => c + 1).join('、')}列中除这三行外其他单元格的数字${num}候选数`
            });
          }
        }
      }
    }
  }
};

/**
 * 查找列Swordfish结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据
 * @param {number} num - 要检查的数字
 * @param {Array} opportunities - 技巧机会数组
 */
const findColSwordfish = (board, pencilNotes, num, opportunities) => {
  // 收集每一列中包含数字num的候选单元格
  const colCandidates = [];
  for (let col = 0; col < 9; col++) {
    const candidates = [];
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === 0) {
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.includes(num)) {
          candidates.push(row);
        }
      }
    }
    colCandidates.push(candidates);
  }
  
  // 查找3列的组合
  for (let c1 = 0; c1 < 7; c1++) {
    if (colCandidates[c1].length < 2 || colCandidates[c1].length > 3) continue;
    
    for (let c2 = c1 + 1; c2 < 8; c2++) {
      if (colCandidates[c2].length < 2 || colCandidates[c2].length > 3) continue;
      
      for (let c3 = c2 + 1; c3 < 9; c3++) {
        if (colCandidates[c3].length < 2 || colCandidates[c3].length > 3) continue;
        
        // 合并所有候选行
        const allRows = new Set([
          ...colCandidates[c1],
          ...colCandidates[c2],
          ...colCandidates[c3]
        ]);
        
        // 如果候选行正好是3行，则找到Swordfish
        if (allRows.size === 3) {
          const allRowsArray = Array.from(allRows).sort((a, b) => a - b);
          
          // 收集源单元格
          const sourceCells = [];
          [c1, c2, c3].forEach(col => {
            colCandidates[col].forEach(row => {
              if (allRows.has(row)) {
                sourceCells.push([row, col]);
              }
            });
          });
          
          // 查找目标单元格（在相同的3行中，但不在这3列中）
          const targetCells = [];
          const removableCandidates = [];
          allRowsArray.forEach(row => {
            for (let col = 0; col < 9; col++) {
              // 跳过源列
              if (col === c1 || col === c2 || col === c3) continue;
              
              if (board[row][col] === 0) {
                const notesKey = `${row}-${col}`;
                const notes = pencilNotes[notesKey] || [];
                if (notes.includes(num)) {
                  targetCells.push([row, col]);
                  removableCandidates.push(num);
                }
              }
            }
          });
          
          // 只有当有实际可删除的候选数时，才添加机会
          if (targetCells.length > 0) {
            opportunities.push({
              type: 'swordfishCol',
              description: `Swordfish (Col) for number ${num}`,
              number: num,
              rows: allRowsArray,
              cols: [c1, c2, c3],
              cells: sourceCells,
              targetCells: targetCells,
              removableCandidates: removableCandidates,
              message: `Swordfish技巧（列）：在第${c1 + 1}列、第${c2 + 1}列和第${c3 + 1}列中，数字${num}只出现在第${allRowsArray.map(r => r + 1).join('、')}行中，形成一个三行三列的结构。由于这个数字在这三列中只能出现在相同的三行，因此可以确定该数字在这三行的其他列中不可能存在，可以删除第${allRowsArray.map(r => r + 1).join('、')}行中除这三列外其他单元格的数字${num}候选数`
            });
          }
        }
      }
    }
  }
};

/**
 * Jellyfish技巧：四行四列结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的Jellyfish技巧机会数组
 */
export const findJellyfish = (board, pencilNotes) => {
  const opportunities = [];
  
  // 检查所有数字1-9
  for (let num = 1; num <= 9; num++) {
    // 检查行Jellyfish
    findRowJellyfish(board, pencilNotes, num, opportunities);
    
    // 检查列Jellyfish
    findColJellyfish(board, pencilNotes, num, opportunities);
  }
  
  return opportunities;
};

/**
 * 查找行Jellyfish结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据
 * @param {number} num - 要检查的数字
 * @param {Array} opportunities - 技巧机会数组
 */
const findRowJellyfish = (board, pencilNotes, num, opportunities) => {
  // 收集每一行中包含数字num的候选单元格
  const rowCandidates = [];
  for (let row = 0; row < 9; row++) {
    const candidates = [];
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.includes(num)) {
          candidates.push(col);
        }
      }
    }
    rowCandidates.push(candidates);
  }
  
  // 查找4行的组合
  for (let r1 = 0; r1 < 6; r1++) {
    if (rowCandidates[r1].length < 2 || rowCandidates[r1].length > 4) continue;
    
    for (let r2 = r1 + 1; r2 < 7; r2++) {
      if (rowCandidates[r2].length < 2 || rowCandidates[r2].length > 4) continue;
      
      for (let r3 = r2 + 1; r3 < 8; r3++) {
        if (rowCandidates[r3].length < 2 || rowCandidates[r3].length > 4) continue;
        
        for (let r4 = r3 + 1; r4 < 9; r4++) {
          if (rowCandidates[r4].length < 2 || rowCandidates[r4].length > 4) continue;
          
          // 合并所有候选列
          const allCols = new Set([
            ...rowCandidates[r1],
            ...rowCandidates[r2],
            ...rowCandidates[r3],
            ...rowCandidates[r4]
          ]);
          
          // 如果候选列正好是4列，则找到Jellyfish
          if (allCols.size === 4) {
            const allColsArray = Array.from(allCols).sort((a, b) => a - b);
            
            // 收集源单元格
            const sourceCells = [];
            [r1, r2, r3, r4].forEach(row => {
              rowCandidates[row].forEach(col => {
                if (allCols.has(col)) {
                  sourceCells.push([row, col]);
                }
              });
            });
            
            // 查找目标单元格（在相同的4列中，但不在这4行中）
            const targetCells = [];
            const removableCandidates = [];
            allColsArray.forEach(col => {
              for (let row = 0; row < 9; row++) {
                // 跳过源行
                if (row === r1 || row === r2 || row === r3 || row === r4) continue;
                
                if (board[row][col] === 0) {
                  const notesKey = `${row}-${col}`;
                  const notes = pencilNotes[notesKey] || [];
                  if (notes.includes(num)) {
                    targetCells.push([row, col]);
                    removableCandidates.push(num);
                  }
                }
              }
            });
            
            // 只有当有实际可删除的候选数时，才添加机会
            if (targetCells.length > 0) {
              opportunities.push({
                type: 'jellyfishRow',
                description: `Jellyfish (Row) for number ${num}`,
                number: num,
                rows: [r1, r2, r3, r4],
                cols: allColsArray,
                cells: sourceCells,
                targetCells: targetCells,
                removableCandidates: removableCandidates,
                message: `Jellyfish技巧（行）：在第${r1 + 1}行、第${r2 + 1}行、第${r3 + 1}行和第${r4 + 1}行中，数字${num}只出现在第${allColsArray.map(c => c + 1).join('、')}列中，形成一个四行四列的结构。由于这个数字在这四行中只能出现在相同的四列，因此可以确定该数字在这四列的其他行中不可能存在，可以删除第${allColsArray.map(c => c + 1).join('、')}列中除这四行外其他单元格的数字${num}候选数`
              });
            }
          }
        }
      }
    }
  }
};

/**
 * 查找列Jellyfish结构
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据
 * @param {number} num - 要检查的数字
 * @param {Array} opportunities - 技巧机会数组
 */
const findColJellyfish = (board, pencilNotes, num, opportunities) => {
  // 收集每一列中包含数字num的候选单元格
  const colCandidates = [];
  for (let col = 0; col < 9; col++) {
    const candidates = [];
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === 0) {
        const notesKey = `${row}-${col}`;
        const notes = pencilNotes[notesKey] || [];
        if (notes.includes(num)) {
          candidates.push(row);
        }
      }
    }
    colCandidates.push(candidates);
  }
  
  // 查找4列的组合
  for (let c1 = 0; c1 < 6; c1++) {
    if (colCandidates[c1].length < 2 || colCandidates[c1].length > 4) continue;
    
    for (let c2 = c1 + 1; c2 < 7; c2++) {
      if (colCandidates[c2].length < 2 || colCandidates[c2].length > 4) continue;
      
      for (let c3 = c2 + 1; c3 < 8; c3++) {
        if (colCandidates[c3].length < 2 || colCandidates[c3].length > 4) continue;
        
        for (let c4 = c3 + 1; c4 < 9; c4++) {
          if (colCandidates[c4].length < 2 || colCandidates[c4].length > 4) continue;
          
          // 合并所有候选行
          const allRows = new Set([
            ...colCandidates[c1],
            ...colCandidates[c2],
            ...colCandidates[c3],
            ...colCandidates[c4]
          ]);
          
          // 如果候选行正好是4行，则找到Jellyfish
          if (allRows.size === 4) {
            const allRowsArray = Array.from(allRows).sort((a, b) => a - b);
            
            // 收集源单元格
            const sourceCells = [];
            [c1, c2, c3, c4].forEach(col => {
              colCandidates[col].forEach(row => {
                if (allRows.has(row)) {
                  sourceCells.push([row, col]);
                }
              });
            });
            
            // 查找目标单元格（在相同的4行中，但不在这4列中）
            const targetCells = [];
            const removableCandidates = [];
            allRowsArray.forEach(row => {
              for (let col = 0; col < 9; col++) {
                // 跳过源列
                if (col === c1 || col === c2 || col === c3 || col === c4) continue;
                
                if (board[row][col] === 0) {
                  const notesKey = `${row}-${col}`;
                  const notes = pencilNotes[notesKey] || [];
                  if (notes.includes(num)) {
                    targetCells.push([row, col]);
                    removableCandidates.push(num);
                  }
                }
              }
            });
            
            // 只有当有实际可删除的候选数时，才添加机会
            if (targetCells.length > 0) {
              opportunities.push({
                type: 'jellyfishCol',
                description: `Jellyfish (Col) for number ${num}`,
                number: num,
                rows: allRowsArray,
                cols: [c1, c2, c3, c4],
                cells: sourceCells,
                targetCells: targetCells,
                removableCandidates: removableCandidates,
                message: `Jellyfish技巧（列）：在第${c1 + 1}列、第${c2 + 1}列、第${c3 + 1}列和第${c4 + 1}列中，数字${num}只出现在第${allRowsArray.map(r => r + 1).join('、')}行中，形成一个四行四列的结构。由于这个数字在这四列中只能出现在相同的四行，因此可以确定该数字在这四行的其他列中不可能存在，可以删除第${allRowsArray.map(r => r + 1).join('、')}行中除这四列外其他单元格的数字${num}候选数`
              });
            }
          }
        }
      }
    }
  }
};

/**
 * 生成解题步骤
 * @param {Object} technique - 技巧对象
 * @returns {Array} - 解题步骤数组
 */
export const generateSteps = (technique) => {
  // ALS-XZ技巧的详细步骤
  if (technique.type === 'alsXZ') {
    const { x, z, als1, als2, removableCandidates, highlightInfo } = technique;
    
    // 格式化ALS1的单元格信息
    const als1CellsStr = als1.cells.map(([row, col]) => 
      `第${row + 1}行第${col + 1}列`
    ).join('、');
    
    // 格式化ALS2的单元格信息
    const als2CellsStr = als2.cells.map(([row, col]) => 
      `第${row + 1}行第${col + 1}列`
    ).join('、');
    
    // 格式化可删除的候选数信息
    const removableCellsStr = removableCandidates.map(rc => 
      `第${rc.row + 1}行第${rc.col + 1}列的候选数${rc.value}`
    ).join('、');
    
    // 获取ALS1中包含X的单元格信息
    let als1XCellsStr = '';
    if (highlightInfo && highlightInfo.xCells && highlightInfo.xCells.als1) {
      als1XCellsStr = highlightInfo.xCells.als1.map(([row, col]) => `第${row + 1}行第${col + 1}列`).join('、');
    }
    
    // 获取ALS2中包含X的单元格信息
    let als2XCellsStr = '';
    if (highlightInfo && highlightInfo.xCells && highlightInfo.xCells.als2) {
      als2XCellsStr = highlightInfo.xCells.als2.map(([row, col]) => `第${row + 1}行第${col + 1}列`).join('、');
    }
    
    // 获取ALS1中包含Z的单元格信息
    let als1ZCellsStr = '';
    if (highlightInfo && highlightInfo.zCells && highlightInfo.zCells.als1) {
      als1ZCellsStr = highlightInfo.zCells.als1.map(([row, col]) => `第${row + 1}行第${col + 1}列`).join('、');
    }
    
    // 获取ALS2中包含Z的单元格信息
    let als2ZCellsStr = '';
    if (highlightInfo && highlightInfo.zCells && highlightInfo.zCells.als2) {
      als2ZCellsStr = highlightInfo.zCells.als2.map(([row, col]) => `第${row + 1}行第${col + 1}列`).join('、');
    }
    
    // 获取目标单元格信息（用于步骤4）
    let targetCellsStr = '';
    if (removableCandidates.length > 0) {
      targetCellsStr = removableCandidates.map(rc => `第${rc.row + 1}行第${rc.col + 1}列`).join('、');
    }
    
    return [
      {
        step: 1,
        description: `步骤1：识别几乎锁定集(ALS)\n- ALS1：由${als1.cells.length}个单元格组成（${als1CellsStr}），包含${als1.candidates.length}个候选数：${als1.candidates.join(', ')}【深蓝色背景高亮区域】\n- ALS2：由${als2.cells.length}个单元格组成（${als2CellsStr}），包含${als2.candidates.length}个候选数：${als2.candidates.join(', ')}【浅蓝色背景高亮区域】\n\n重要概念解释：\n- 几乎锁定集(ALS)是指n个单元格恰好包含n+1个候选数的集合\n- ALS1满足：${als1.cells.length}个单元格，${als1.candidates.length}个候选数 → ${als1.cells.length}+1 = ${als1.candidates.length}\n- ALS2满足：${als2.cells.length}个单元格，${als2.candidates.length}个候选数 → ${als2.cells.length}+1 = ${als2.candidates.length}\n- ALS的特性：在ALS中，如果排除一个候选数，那么剩下的n个单元格恰好包含n个候选数，形成一个锁定集（必然包含这n个数字）`,
        highlight: 'als1_als2'
      },
      {
        step: 2,
        description: `步骤2：确定关键数字\n- 限制数X = ${x}：两个ALS共有的候选数【深绿色/绿色高亮候选数】\n- 删除数Z = ${z}：在两个ALS中都存在且用于后续排除的候选数【深蓝色/浅蓝色高亮候选数】\n\n关键数字的作用：\n- 限制数X：作为连接两个ALS的桥梁，确保它们之间存在逻辑关系\n- 删除数Z：我们最终要从某些单元格中排除的候选数\n- 重要条件：X和Z可以是相同的数字，也可以是不同的数字\n- 注意观察：高亮显示的数字${x}和${z}在两个ALS中的分布情况`,
        highlight: 'x_z_numbers'
      },
      {
        step: 3,
        description: `步骤3：深入分析ALS的内部逻辑\n- ALS1中包含X(${x})的单元格【深绿色高亮】：${als1XCellsStr || '无'}\n- ALS2中包含X(${x})的单元格【绿色高亮】：${als2XCellsStr || '无'}\n- ALS1中包含Z(${z})的单元格【深蓝色高亮】：${als1ZCellsStr || '无'}\n- ALS2中包含Z(${z})的单元格【浅蓝色高亮】：${als2ZCellsStr || '无'}\n\n逻辑推理过程：\n1. 在ALS1中，如果某个单元格填入X(${x})，那么根据ALS的性质，剩下的${als1.cells.length-1}个单元格必须包含剩下的${als1.candidates.length-1}个候选数，因此Z(${z})必须被排除\n2. 反之，如果ALS1中没有单元格填入X(${x})，那么X(${x})被排除，根据ALS的性质，Z(${z})必须保留在ALS1中的某个单元格中\n3. 同样的逻辑适用于ALS2\n\n这就形成了一个关键的逻辑链：无论X(${x})最终出现在哪个ALS中，总有一个ALS会保留Z(${z})`,
        highlight: 'z_candidates'
      },
      {
        step: 4,
        description: `步骤4：确定影响范围和目标单元格\n- 目标单元格：${targetCellsStr}【红色背景高亮区域】\n- 目标单元格的定义：同时能「看到」(与...在同一行、列或宫)ALS1中所有包含Z(${z})的单元格和ALS2中所有包含Z(${z})的单元格的单元格\n\n如何确定目标单元格：\n1. 找出与ALS1中所有包含Z(${z})的单元格在同一行、列或宫的单元格\n2. 找出与ALS2中所有包含Z(${z})的单元格在同一行、列或宫的单元格\n3. 两者的交集就是目标单元格\n\n这些目标单元格的特点是：无论Z(${z})最终出现在哪个ALS中，它们都会与Z(${z})所在的单元格产生冲突`,
        highlight: 'target_cells'
      },
      {
        step: 5,
        description: `步骤5：排除候选数的逻辑证明\n- 可删除的候选数【红色高亮】：${removableCellsStr}\n\n详细逻辑证明：\n情况1：如果X(${x})出现在ALS1中\n- 根据ALS1的性质，Z(${z})不能出现在ALS1中\n- 因此，Z(${z})必须出现在ALS2中的某个单元格\n- 目标单元格能看到ALS2中所有包含Z(${z})的单元格，因此Z(${z})不能出现在目标单元格中\n\n情况2：如果X(${x})出现在ALS2中\n- 根据ALS2的性质，Z(${z})不能出现在ALS2中\n- 因此，Z(${z})必须出现在ALS1中的某个单元格\n- 目标单元格能看到ALS1中所有包含Z(${z})的单元格，因此Z(${z})不能出现在目标单元格中\n\n结论：无论哪种情况，目标单元格中都不能包含Z(${z})作为候选数`,
        highlight: 'removable_candidates'
      },
      {
        step: 6,
        description: `步骤6：应用排除并观察结果\n- 操作：从所有目标单元格中删除候选数Z(${z})\n- 结果：${removableCandidates.length > 0 ? `成功删除${removableCandidates.length}个候选数` : '没有可删除的候选数'}\n\n实际应用建议：\n- 排除这些候选数后，检查是否产生了新的解题机会（如唯一数、数对等）\n- 记住这种逻辑推理模式，它是解决高级数独难题的关键技巧之一\n- 在实践中，尝试自己识别ALS-XZ结构，提高解题能力\n\n高级提示：ALS-XZ技巧是许多复杂技巧的基础，掌握它有助于理解更高级的技巧如ALS-XY-Wing等`,
        highlight: 'all'
      },
      {
        step: 7,
        description: `总结与回顾：ALS-XZ技巧深度解析\n\nALS-XZ技巧的核心思想：\n1. 利用两个几乎锁定集(ALS)之间的逻辑关系\n2. 通过限制数X建立ALS之间的联系\n3. 推导出删除数Z在目标单元格中的不可能性\n\n为什么这个技巧有效：\n- 它基于严格的逻辑推理，而非猜测\n- 它能够排除传统技巧无法发现的候选数\n- 它是连接基础技巧和超高级技巧的桥梁\n\n识别ALS-XZ的实用技巧：\n- 寻找具有n个单元格和n+1个候选数的单元格集合\n- 特别关注同一行、列或宫中的单元格组合\n- 注意观察不同ALS之间可能共享的候选数\n\n通过掌握ALS-XZ技巧，你将能够解决许多原本看似无法攻克的数独难题。`,
        highlight: 'all'
      }
    ];
  }
  
  // 隐藏唯一数（Hidden Single）技巧的详细步骤
  else if (technique.type === 'hiddenSingle' || technique.type === 'hiddenSingleRow' || technique.type === 'hiddenSingleCol' || technique.type === 'hiddenSingleBox') {
    const row = technique.row !== undefined ? technique.row : (technique.cell ? technique.cell[0] : 0);
    const col = technique.col !== undefined ? technique.col : (technique.cell ? technique.cell[1] : 0);
    const number = technique.number !== undefined ? technique.number : technique.value;
    const unitType = technique.type.includes('Row') ? '行' : (technique.type.includes('Col') ? '列' : '宫');
    const unitIndex = technique.type.includes('Row') ? row + 1 : (technique.type.includes('Col') ? col + 1 : Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1);
    
    return [
      {
        step: 1,
        description: `步骤1：分析${unitType}${unitIndex}中的候选数分布\n- 在${unitType}${unitIndex}中，数字${number}只能出现在第${row + 1}行第${col + 1}列\n- 这是因为该${unitType}中的其他单元格都不能填入数字${number}`,
        highlight: 'cell'
      },
      {
        step: 2,
        description: `步骤2：应用隐藏唯一数规则\n- 由于数字${number}在${unitType}${unitIndex}中只有一个可能的位置\n- 因此，第${row + 1}行第${col + 1}列必须填入数字${number}`,
        highlight: 'fill'
      },
      {
        step: 3,
        description: `步骤3：更新候选数\n- 将第${row + 1}行第${col + 1}列填入数字${number}\n- 清除该单元格的所有候选数\n- 清除相关行、列、宫中所有其他单元格的数字${number}候选数`,
        highlight: 'all'
      }
    ];
  }
  
  // 显性唯一数（Naked Single）技巧的详细步骤
  else if (technique.type === 'nakedSingle' || technique.type === 'notesSingle') {
    const row = technique.row !== undefined ? technique.row : (technique.cell ? technique.cell[0] : 0);
    const col = technique.col !== undefined ? technique.col : (technique.cell ? technique.cell[1] : 0);
    const number = technique.number !== undefined ? technique.number : technique.value;
    
    return [
      {
        step: 1,
        description: `步骤1：识别唯一候选数\n- 第${row + 1}行第${col + 1}列中，数字${number}是唯一的候选数\n- 这通常是因为该单元格所在的行、列、宫中已经存在其他8个数字`,
        highlight: 'cell'
      },
      {
        step: 2,
        description: `步骤2：应用显性唯一数规则\n- 由于该单元格只有数字${number}一个候选数\n- 因此，必须将第${row + 1}行第${col + 1}列填入数字${number}`,
        highlight: 'fill'
      },
      {
        step: 3,
        description: `步骤3：更新数独状态\n- 将第${row + 1}行第${col + 1}列填入数字${number}\n- 清除该单元格所在行、列、宫中其他单元格的数字${number}候选数\n- 这可能会在其他单元格中产生新的显性唯一数或隐藏唯一数`,
        highlight: 'all'
      }
    ];
  }
  
  // 显性数对（Naked Pair）技巧的详细步骤
  else if (technique.type === 'nakedPair') {
    const { cells, pair } = technique;
    const cell1Str = `第${cells[0][0] + 1}行第${cells[0][1] + 1}列`;
    const cell2Str = `第${cells[1][0] + 1}行第${cells[1][1] + 1}列`;
    const unitType = cells[0][0] === cells[1][0] ? '行' : (cells[0][1] === cells[1][1] ? '列' : '宫');
    const unitIndex = cells[0][0] === cells[1][0] ? cells[0][0] + 1 : 
                      (cells[0][1] === cells[1][1] ? cells[0][1] + 1 : 
                      Math.floor(cells[0][0] / 3) * 3 + Math.floor(cells[0][1] / 3) + 1);
    
    return [
      {
        step: 1,
        description: `步骤1：识别显性数对\n- 在${unitType}${unitIndex}中，${cell1Str}和${cell2Str}都只包含相同的两个候选数：${pair[0]}和${pair[1]}\n- 这两个单元格形成了一个显性数对`,
        highlight: 'pair_cells'
      },
      {
        step: 2,
        description: `步骤2：分析逻辑关系\n- 这两个单元格中的数字必然是${pair[0]}和${pair[1]}，只是顺序不确定\n- 因此，在同一${unitType}的其他单元格中，数字${pair[0]}和${pair[1]}不可能出现`,
        highlight: 'pair_numbers'
      },
      {
        step: 3,
        description: `步骤3：排除候选数\n- 从${unitType}${unitIndex}的其他所有单元格中删除候选数${pair[0]}和${pair[1]}\n- 这可以缩小搜索范围，帮助发现其他解题线索`,
        highlight: 'excluded_candidates'
      }
    ];
  }
  
  // 隐藏数对（Hidden Pair）技巧的详细步骤
  else if (technique.type === 'hiddenPair') {
    const { cells, pair, unitType, unitIndex } = technique;
    const cell1Str = `第${cells[0][0] + 1}行第${cells[0][1] + 1}列`;
    const cell2Str = `第${cells[1][0] + 1}行第${cells[1][1] + 1}列`;
    const unitTypeText = unitType === 'row' ? '行' : (unitType === 'col' ? '列' : '宫');
    
    return [
      {
        step: 1,
        description: `步骤1：识别隐藏数对\n- 在${unitTypeText}${unitIndex + 1}中，数字${pair[0]}和${pair[1]}只出现在${cell1Str}和${cell2Str}这两个单元格中\n- 这两个单元格形成了一个隐藏数对`,
        highlight: 'pair_cells'
      },
      {
        step: 2,
        description: `步骤2：分析逻辑关系\n- 这两个单元格必须包含数字${pair[0]}和${pair[1]}\n- 虽然这两个单元格可能还有其他候选数，但它们都可以被安全移除`,
        highlight: 'pair_numbers'
      },
      {
        step: 3,
        description: `步骤3：清理候选数\n- 从${cell1Str}和${cell2Str}中移除除${pair[0]}和${pair[1]}之外的所有其他候选数\n- 这可以简化数独状态，帮助发现其他解题技巧`,
        highlight: 'cleaned_candidates'
      }
    ];
  }
  
  // X-Wing技巧的详细步骤
  else if (technique.type === 'xWing') {
    const { rows, cols, number } = technique;
    const isRowXWing = rows && rows.length === 2;
    const baseUnits = isRowXWing ? 
      `第${rows[0] + 1}行和第${rows[1] + 1}行` : 
      `第${cols[0] + 1}列和第${cols[1] + 1}列`;
    const crossUnits = isRowXWing ? 
      `第${cols[0] + 1}列和第${cols[1] + 1}列` : 
      `第${rows[0] + 1}行和第${rows[1] + 1}行`;
    const unitType = isRowXWing ? '行' : '列';
    
    return [
      {
        step: 1,
        description: `步骤1：识别X-Wing结构\n- 在${baseUnits}中，数字${number}只出现在${crossUnits}中\n- 这些位置形成了一个矩形，四个角的单元格都包含候选数${number}`,
        highlight: 'wing_cells'
      },
      {
        step: 2,
        description: `步骤2：分析逻辑关系\n- 数字${number}在${unitType}中必须出现在这两列（或两行）中的某一列\n- 由于矩形的对角线关系，无论${number}出现在对角线上的哪个位置，交叉点所在的行或列的其他单元格都不能包含${number}`,
        highlight: 'wing_relations'
      },
      {
        step: 3,
        description: `步骤3：排除候选数\n- 从交叉点所在的${crossUnits}中，除了X-Wing的四个角之外的所有单元格中删除候选数${number}\n- 这是一个高级技巧，可以排除多个候选数`,
        highlight: 'excluded_candidates'
      }
    ];
  }
  
  // 默认返回空数组
  return [];
}

/**
 * Y-Wing(XY-Wing)技巧：通过三个双候选数单元格形成锚点结构排除交叉单元格的候选数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的Y-Wing技巧机会数组
 */
export const findYWing = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 获取所有只有两个候选数的单元格
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
  
  // 执行Y-Wing搜索
  const doubleCandidatesCells = getDoubleCandidatesCells();
  
  // 遍历每个可能的锚点单元格（XY单元格）
  for (let i = 0; i < doubleCandidatesCells.length; i++) {
    const anchorCell = doubleCandidatesCells[i];
    const [x, y] = anchorCell.notes;
    
    // 找到与锚点共享一个候选数且在同一单元的单元格
    const xLinkedCells = [];
    const yLinkedCells = [];
    
    for (let j = 0; j < doubleCandidatesCells.length; j++) {
      if (i === j) continue;
      
      const linkedCell = doubleCandidatesCells[j];
      if (!areInSameUnit(anchorCell, linkedCell)) continue;
      
      // 检查是否只有一个共享候选数
      const intersection = getIntersection(anchorCell.notes, linkedCell.notes);
      if (intersection.length === 1) {
        if (intersection[0] === x && linkedCell.notes.includes(x) && linkedCell.notes.includes(y)) continue; // 排除候选数相同的情况
        if (intersection[0] === x) {
          // 这个单元格是XZ单元格
          const z = linkedCell.notes.find(note => note !== x);
          if (z && z !== y) { // 确保Z不是Y
            xLinkedCells.push({ ...linkedCell, z });
          }
        } else if (intersection[0] === y) {
          // 这个单元格是YZ单元格
          const z = linkedCell.notes.find(note => note !== y);
          if (z && z !== x) { // 确保Z不是X
            yLinkedCells.push({ ...linkedCell, z });
          }
        }
      }
    }
    
    // 现在检查XZ和YZ单元格是否有相同的Z，并且它们共享一个交叉单元格
    for (const xzCell of xLinkedCells) {
      for (const yzCell of yLinkedCells) {
        if (xzCell.z !== yzCell.z) continue; // Z必须相同
        
        const z = xzCell.z;
        
        // 找到XZ和YZ单元格共同影响的单元格
        const targetCells = [];
        const removableCandidates = [];
        const targetCellsDetails = []; // 添加详细的目标单元格信息
        
        // 检查所有可能的交叉单元格
        for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
            // 跳过已填数字的单元格
            if (board[row][col] !== 0) continue;
            
            // 跳过锚点和链接单元格
            if ((row === anchorCell.row && col === anchorCell.col) ||
                (row === xzCell.row && col === xzCell.col) ||
                (row === yzCell.row && col === yzCell.col)) {
              continue;
            }
            
            // 检查该单元格是否同时与XZ和YZ单元格在同一行、列或宫
            const sharesWithXZ = (row === xzCell.row || col === xzCell.col ||
                                 (Math.floor(row / 3) === Math.floor(xzCell.row / 3) &&
                                  Math.floor(col / 3) === Math.floor(xzCell.col / 3)));
            
            const sharesWithYZ = (row === yzCell.row || col === yzCell.col ||
                                 (Math.floor(row / 3) === Math.floor(yzCell.row / 3) &&
                                  Math.floor(col / 3) === Math.floor(yzCell.col / 3)));
            
            if (sharesWithXZ && sharesWithYZ) {
              // 检查该单元格是否可以填入Z，且候选数中包含Z
              const notesKey = `${row}-${col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              
              if (cellNotes.includes(z)) {
                targetCells.push([row, col]);
                removableCandidates.push(z);
                // 添加详细信息，包括每个单元格需要删除的候选数
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
            type: 'yWing',
            description: 'Y-Wing(XY-Wing)',
            anchorCell: [anchorCell.row, anchorCell.col],
            xzCell: [xzCell.row, xzCell.col],
            yzCell: [yzCell.row, yzCell.col],
            cells: [
              [anchorCell.row, anchorCell.col],
              [xzCell.row, xzCell.col],
              [yzCell.row, yzCell.col]
            ],
            x, y, z,
            targetCells,
            targetCellsDetails, // 添加详细信息
            removableCandidates,
            message: `Y-Wing技巧：这是一个由三个双候选数单元格组成的特殊结构。锚点单元格(${anchorCell.row + 1},${anchorCell.col + 1})包含候选数[${x},${y}]，XZ单元格(${xzCell.row + 1},${xzCell.col + 1})包含候选数[${x},${z}]，YZ单元格(${yzCell.row + 1},${yzCell.col + 1})包含候选数[${y},${z}]。由于锚点单元格与XZ、YZ单元格分别共享候选数x和y，且XZ和YZ单元格都包含候选数z，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数z不可能存在，可以删除这些交叉单元格中的数字${z}候选数`
          });
        }
      }
    }
  }
  
  return opportunities;
}

/**
 * XYZ-Wing技巧：通过一个三候选数单元格和两个双候选数单元格形成特殊结构排除交叉单元格的候选数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的XYZ-Wing技巧机会数组
 */
export const findXYZWing = (board, pencilNotes = {}) => {
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
                message: `XYZ-Wing技巧：这是一个由一个三候选数单元格和两个双候选数单元格组成的特殊结构。枢纽单元格(${pivotCell.row + 1},${pivotCell.col + 1})包含候选数[${pivotCell.notes.join(',')}]，XZ单元格(${xzCell.row + 1},${xzCell.col + 1})包含候选数[${xzCell.notes.join(',')}], YZ单元格(${yzCell.row + 1},${yzCell.col + 1})包含候选数[${yzCell.notes.join(',')}]. 由于枢纽单元格与XZ、YZ单元格分别共享候选数，且XZ和YZ单元格都包含候选数${z}，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数${z}不可能存在，可以删除这些交叉单元格中的数字${z}候选数`
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
};

export const applyTechnique = (technique, board) => {
  // 创建棋盘副本
  const newBoard = board.map(row => [...row]);
  
  // 根据技巧类型应用操作
  switch (technique.type) {
    // 单一数字填入技巧
    case 'nakedSingle':
    case 'notesSingle':
    case 'hiddenSingleRow':
    case 'hiddenSingleCol':
    case 'hiddenSingleBox':
      // 应用数字填入
      if (technique.row !== undefined && technique.col !== undefined && technique.value !== undefined) {
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
      }
      break;
    
    // ALS-XZ技巧特殊处理，提供详细的高亮指示
    case 'alsXZ':
      // 对于ALS-XZ技巧，提供详细的高亮指示
      return {
        board: newBoard,
        operation: {
          type: 'highlight',
          cells: technique.cells || technique.sourceCells,
          targetCells: technique.targetCells,
          values: technique.values || [technique.number],
          removableCandidates: technique.removableCandidates,
          // ALS-XZ特定的高亮信息
          highlightType: 'alsXZ',
          highlightInfo: technique.highlightInfo || {}
        }
      };
    
    // 数对和三链数技巧（主要用于提示，暂不自动填入数字）
    case 'nakedPairRow':
    case 'nakedPairCol':
    case 'nakedPairBox':
    case 'hiddenPairRow':
    case 'hiddenPairCol':
    case 'hiddenPairBox':
    case 'nakedTripleRow':
    case 'nakedTripleCol':
    case 'nakedTripleBox':
    case 'hiddenTripleRow':
    case 'hiddenTripleCol':
    case 'hiddenTripleBox':
    case 'pointingPairsRow':
    case 'pointingPairsCol':
    case 'boxLineReductionRow':
    case 'boxLineReductionCol':
    case 'swordfishRow':
    case 'swordfishCol':
    case 'xyzWing':
    case 'jellyfishRow':
    case 'jellyfishCol':
      // 对于这些技巧，主要是提供视觉提示，暂不自动修改棋盘
      return {
        board: newBoard,
        operation: {
          type: 'highlight',
          cells: technique.cells || technique.sourceCells,
          targetCells: technique.targetCells,
          values: technique.values || [technique.number],
          removableCandidates: technique.removableCandidates
        }
      };
    
    default:
      console.warn('未知的技巧类型:', technique.type);
      return {
        board: newBoard,
        operation: null
      };
  }
  
  // 如果执行到这里，说明技巧类型有效但缺少必要参数
  return {
    board: newBoard,
    operation: null
  };
}

/**
 * 识别所有可用的技巧
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @param {boolean} includeCandidateTechniques - 是否包含候选数相关技巧
 * @returns {Array} - 所有可用的技巧机会
 */
export const identifyAllTechniques = (board, pencilNotes = {}, includeCandidateTechniques = true) => {
  // 查找所有可用技巧机会
  const nakedSingles = findNakedSingles(board);
  const hiddenSingles = findHiddenSingles(board);
  // 添加候选数唯一法技巧识别
  const notesSingles = includeCandidateTechniques && Object.keys(pencilNotes).length > 0 ? findNotesSingles(board, pencilNotes) : [];
  
  // 只在需要时查找候选数相关技巧
  let nakedPairs = [];
  let hiddenPairs = [];
  let pointingPairs = [];
  let boxLineReduction = [];
  let nakedTriples = [];
  let hiddenTriples = [];
  let xWing = [];
  let yWing = [];
  let swordfish = [];
  let xyzWing = [];
  let jellyfish = [];
  let alsXZ = [];
  
  if (includeCandidateTechniques && Object.keys(pencilNotes).length > 0) {
    nakedPairs = findNakedPairs(board, pencilNotes);
    hiddenPairs = findHiddenPairs(board, pencilNotes);
    pointingPairs = findPointingPairs(board, pencilNotes);
    boxLineReduction = findBoxLineReduction(board, pencilNotes);
    nakedTriples = findNakedTriples(board, pencilNotes);
    hiddenTriples = findHiddenTriples(board, pencilNotes);
    // 高级技巧
    xWing = findXWing(board, pencilNotes);
    yWing = findYWing(board, pencilNotes);
    swordfish = findSwordfish(board, pencilNotes);
    xyzWing = findXYZWing(board, pencilNotes);
    // 添加Jellyfish技巧
    jellyfish = findJellyfish(board, pencilNotes);
    // 添加ALS-XZ技巧
    alsXZ = findALSXZ(board, pencilNotes);
  }
  
  // 按技巧难度顺序合并所有技巧机会
  const result = [
    // 基础技巧（第一优先级）
    ...nakedSingles,
    ...hiddenSingles,
    // 候选数基础技巧（第二优先级）
    ...notesSingles
  ];
  
  // 只在需要时添加候选数相关技巧
  if (includeCandidateTechniques && Object.keys(pencilNotes).length > 0) {
    // 中级技巧（第三优先级）
    result.push(...nakedPairs);
    result.push(...hiddenPairs);
    result.push(...pointingPairs);
    result.push(...boxLineReduction);
    // 高级技巧（第四优先级）
    result.push(...nakedTriples);
    result.push(...hiddenTriples);
    // Hodoku风格高级技巧（第五优先级）
      result.push(...xWing);
      result.push(...yWing);
      result.push(...swordfish);
      result.push(...xyzWing);
      // 添加Jellyfish技巧
      result.push(...jellyfish);
      // 添加ALS-XZ技巧（最高优先级的高级技巧）
      result.push(...alsXZ);
  }
  
  return result;
};

