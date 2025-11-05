// 数独技巧实现：初级技巧集合
import { isValidMove } from './sudokuUtils.js';

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
  
  // 遍历所有单元格
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // 跳过已填入数字的单元格
      if (board[row][col] !== 0) continue;
      
      // 获取该单元格的候选数
      const notesKey = `${row}-${col}`;
      const notes = pencilNotes[notesKey] || [];
      
      // 如果候选数只有一个，找到候选数唯一法机会
      if (notes.length === 1) {
        opportunities.push({
          type: 'notesSingle',
          description: 'singleCandidateTechnique',
          row,
          col,
          value: notes[0],
          cells: [[row, col]],
          notes: notes,
          message: `单元格(${row+1},${col+1})的候选数中只有数字${notes[0]}`
        });
      }
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

/**
 * 隐性数对法 (Hidden Pairs)：在同一行、列或宫中，两个数字只能出现在两个单元格中
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的隐性数对法机会数组
 */
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
 * X-Wing技巧：在两行（或两列）中，某个数字只出现在相同的两列（或两行）中
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的X-Wing技巧机会数组
 */
export const findXWing = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查每一行的X-Wing
  const checkRowXWing = () => {
    // 检查每个数字
    for (let num = 1; num <= 9; num++) {
      // 存储只有两个候选位置的行
      const rowsWithTwoPositions = [];
      
      for (let row = 0; row < 9; row++) {
        // 收集该行中该数字可能的位置（列索引）
        const possibleCols = [];
        for (let col = 0; col < 9; col++) {
          // 如果单元格已有数字，跳过
          if (board[row][col] !== 0) continue;
          
          // 检查该单元格是否可以填入num，或者候选数中包含num
          const notesKey = `${row}-${col}`;
          const cellNotes = pencilNotes[notesKey] || [];
          if (isValidMove(board, row, col, num) && cellNotes.includes(num)) {
            possibleCols.push(col);
          }
        }
        
        // 如果该行只有两个可能的列，将其添加到列表中
        if (possibleCols.length === 2) {
          rowsWithTwoPositions.push({ row, cols: possibleCols });
        }
      }
      
      // 检查是否存在两行有相同的两个可能列
      for (let i = 0; i < rowsWithTwoPositions.length - 1; i++) {
        for (let j = i + 1; j < rowsWithTwoPositions.length; j++) {
          const row1 = rowsWithTwoPositions[i];
          const row2 = rowsWithTwoPositions[j];
          
          // 检查两列是否完全相同（不考虑顺序）
          const cols1Set = new Set(row1.cols);
          const cols2Set = new Set(row2.cols);
          
          if (cols1Set.size === cols2Set.size && [...cols1Set].every(col => cols2Set.has(col))) {
            // 找到X-Wing，现在计算可以排除的候选数
            const targetCells = [];
            const removableCandidates = [];
            const targetCellsDetails = []; // 添加详细的目标单元格信息
            
            // 对于这两个列，排除其他行中的该数字候选数
            row1.cols.forEach(col => {
              for (let r = 0; r < 9; r++) {
                // 跳过X-Wing所在的行
                if (r === row1.row || r === row2.row) continue;
                
                // 跳过已填数字的单元格
                if (board[r][col] !== 0) continue;
                
                const notesKey = `${r}-${col}`;
                const cellNotes = pencilNotes[notesKey] || [];
                
                // 如果单元格候选数中包含该数字，将其添加为目标单元格
                if (cellNotes.includes(num)) {
                  targetCells.push([r, col]);
                  removableCandidates.push(num);
                  // 添加详细信息，包括每个单元格需要删除的候选数
                  targetCellsDetails.push({
                    row: r,
                    col: col,
                    notesToRemove: [num]
                  });
                }
              }
            });
            
            // 只有当有实际可删除的候选数时，才添加机会
            if (targetCells.length > 0) {
              opportunities.push({
                type: 'xWingRow',
                description: 'X-Wing(行)',
                number: num,
                cells: [
                  [row1.row, row1.cols[0]],
                  [row1.row, row1.cols[1]],
                  [row2.row, row2.cols[0]],
                  [row2.row, row2.cols[1]]
                ],
                targetCells,
                targetCellsDetails, // 添加详细信息
                removableCandidates,
                message: `X-Wing技巧：在第${row1.row + 1}行和第${row2.row + 1}行中，数字${num}只出现在第${row1.cols[0] + 1}列和第${row1.cols[1] + 1}列中，形成一个矩形结构。由于这个数字在这两行中只能出现在相同的两列，因此可以确定该数字在这两列的其他行中不可能存在，可以删除第${row1.cols[0] + 1}列和第${row1.cols[1] + 1}列中除这两行外其他单元格的数字${num}候选数`
              });
            }
          }
        }
      }
    }
  };
  
  // 检查每一列的X-Wing
  const checkColXWing = () => {
    // 检查每个数字
    for (let num = 1; num <= 9; num++) {
      // 存储只有两个候选位置的列
      const colsWithTwoPositions = [];
      
      for (let col = 0; col < 9; col++) {
        // 收集该列中该数字可能的位置（行索引）
        const possibleRows = [];
        for (let row = 0; row < 9; row++) {
          // 如果单元格已有数字，跳过
          if (board[row][col] !== 0) continue;
          
          // 检查该单元格是否可以填入num，或者候选数中包含num
          const notesKey = `${row}-${col}`;
          const cellNotes = pencilNotes[notesKey] || [];
          if (isValidMove(board, row, col, num) && cellNotes.includes(num)) {
            possibleRows.push(row);
          }
        }
        
        // 如果该列只有两个可能的行，将其添加到列表中
        if (possibleRows.length === 2) {
          colsWithTwoPositions.push({ col, rows: possibleRows });
        }
      }
      
      // 检查是否存在两列有相同的两个可能行
      for (let i = 0; i < colsWithTwoPositions.length - 1; i++) {
        for (let j = i + 1; j < colsWithTwoPositions.length; j++) {
          const col1 = colsWithTwoPositions[i];
          const col2 = colsWithTwoPositions[j];
          
          // 检查两行是否完全相同（不考虑顺序）
          const rows1Set = new Set(col1.rows);
          const rows2Set = new Set(col2.rows);
          
          if (rows1Set.size === rows2Set.size && [...rows1Set].every(row => rows2Set.has(row))) {
            // 找到X-Wing，现在计算可以排除的候选数
            const targetCells = [];
            const removableCandidates = [];
            const targetCellsDetails = []; // 添加详细的目标单元格信息
            
            // 对于这两个行，排除其他列中的该数字候选数
            col1.rows.forEach(row => {
              for (let c = 0; c < 9; c++) {
                // 跳过X-Wing所在的列
                if (c === col1.col || c === col2.col) continue;
                
                // 跳过已填数字的单元格
                if (board[row][c] !== 0) continue;
                
                const notesKey = `${row}-${c}`;
                const cellNotes = pencilNotes[notesKey] || [];
                
                // 如果单元格候选数中包含该数字，将其添加为目标单元格
                if (cellNotes.includes(num)) {
                  targetCells.push([row, c]);
                  removableCandidates.push(num);
                  // 添加详细信息，包括每个单元格需要删除的候选数
                  targetCellsDetails.push({
                    row: row,
                    col: c,
                    notesToRemove: [num]
                  });
                }
              }
            });
            
            // 只有当有实际可删除的候选数时，才添加机会
            if (targetCells.length > 0) {
              opportunities.push({
                type: 'xWingCol',
                description: 'X-Wing(列)',
                number: num,
                cells: [
                  [col1.rows[0], col1.col],
                  [col1.rows[1], col1.col],
                  [col2.rows[0], col2.col],
                  [col2.rows[1], col2.col]
                ],
                targetCells,
                targetCellsDetails, // 添加详细信息
                removableCandidates,
                message: `X-Wing技巧：在第${col1.col + 1}列和第${col2.col + 1}列中，数字${num}只出现在第${col1.rows[0] + 1}行和第${col1.rows[1] + 1}行中，形成一个矩形结构。由于这个数字在这两列中只能出现在相同的两行，因此可以确定该数字在这两行的其他列中不可能存在，可以删除第${col1.rows[0] + 1}行和第${col1.rows[1] + 1}行中除这两列外其他单元格的数字${num}候选数`
              });
            }
          }
        }
      }
    }
  };
  
  // 执行行和列的X-Wing检查
  checkRowXWing();
  checkColXWing();
  
  return opportunities;
};

/**
 * Swordfish技巧：在三行（或三列）中，某个数字只出现在相同的三列（或三行）中
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的Swordfish技巧机会数组
 */
export const findSwordfish = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 检查每一行的Swordfish
  const checkRowSwordfish = () => {
    // 检查每个数字
    for (let num = 1; num <= 9; num++) {
      // 存储只有2个或3个候选位置的行
      const rowsWithValidPositions = [];
      
      for (let row = 0; row < 9; row++) {
        // 收集该行中该数字可能的位置（列索引）
        const possibleCols = [];
        for (let col = 0; col < 9; col++) {
          // 如果单元格已有数字，跳过
          if (board[row][col] !== 0) continue;
          
          // 检查该单元格是否可以填入num，或者候选数中包含num
          const notesKey = `${row}-${col}`;
          const cellNotes = pencilNotes[notesKey] || [];
          if (isValidMove(board, row, col, num) && cellNotes.includes(num)) {
            possibleCols.push(col);
          }
        }
        
        // 如果该行有2个或3个可能的列，将其添加到列表中
        if (possibleCols.length === 2 || possibleCols.length === 3) {
          rowsWithValidPositions.push({ row, cols: possibleCols });
        }
      }
      
      // 检查是否存在三行有相同的三个可能列
      for (let i = 0; i < rowsWithValidPositions.length - 2; i++) {
        for (let j = i + 1; j < rowsWithValidPositions.length - 1; j++) {
          for (let k = j + 1; k < rowsWithValidPositions.length; k++) {
            const row1 = rowsWithValidPositions[i];
            const row2 = rowsWithValidPositions[j];
            const row3 = rowsWithValidPositions[k];
            
            // 检查三列是否完全相同（不考虑顺序）
            const cols1Set = new Set(row1.cols);
            const cols2Set = new Set(row2.cols);
            const cols3Set = new Set(row3.cols);
            
            // 合并所有列
            const allCols = new Set([...row1.cols, ...row2.cols, ...row3.cols]);
            
            // 检查是否只有三个不同的列
            if (allCols.size === 3) {
              // 检查每行都包含这三个列中的某些列
              const isValid = [...allCols].every(col => 
                cols1Set.has(col) || cols2Set.has(col) || cols3Set.has(col)
              );
              
              if (isValid) {
                // 找到Swordfish，现在计算可以排除的候选数
                const targetCells = [];
                const removableCandidates = [];
                const targetCellsDetails = []; // 添加详细的目标单元格信息
                const allColsArray = [...allCols];
                
                // 对于这三个列，排除其他行中的该数字候选数
                allColsArray.forEach(col => {
                  for (let r = 0; r < 9; r++) {
                    // 跳过Swordfish所在的行
                    if (r === row1.row || r === row2.row || r === row3.row) continue;
                    
                    // 跳过已填数字的单元格
                    if (board[r][col] !== 0) continue;
                    
                    const notesKey = `${r}-${col}`;
                    const cellNotes = pencilNotes[notesKey] || [];
                    
                    // 如果单元格候选数中包含该数字，将其添加为目标单元格
                    if (cellNotes.includes(num)) {
                      targetCells.push([r, col]);
                      removableCandidates.push(num);
                      // 添加详细信息，包括每个单元格需要删除的候选数
                      targetCellsDetails.push({
                        row: r,
                        col: col,
                        notesToRemove: [num]
                      });
                    }
                  }
                });
                
                // 只有当有实际可删除的候选数时，才添加机会
                if (targetCells.length > 0) {
                  opportunities.push({
                    type: 'swordfishRow',
                    description: 'Swordfish(行)',
                    number: num,
                    cells: [
                      ...row1.cols.map(col => [row1.row, col]),
                      ...row2.cols.map(col => [row2.row, col]),
                      ...row3.cols.map(col => [row3.row, col])
                    ],
                    targetCells,
                    targetCellsDetails, // 添加详细信息
                    removableCandidates,
                    message: `Swordfish技巧：在第${row1.row + 1}行、第${row2.row + 1}行和第${row3.row + 1}行中，数字${num}只出现在第${allColsArray.map(c => c + 1).join('、')}列中，形成一个三行三列的结构。由于这个数字在这三行中只能出现在相同的三列，因此可以确定该数字在这三列的其他行中不可能存在，可以删除第${allColsArray.map(c => c + 1).join('、')}列中除这三行外其他单元格的数字${num}候选数`
                  });
                }
              }
            }
          }
        }
      }
    }
  };
  
  // 检查每一列的Swordfish
  const checkColSwordfish = () => {
    // 检查每个数字
    for (let num = 1; num <= 9; num++) {
      // 存储只有2个或3个候选位置的列
      const colsWithValidPositions = [];
      
      for (let col = 0; col < 9; col++) {
        // 收集该列中该数字可能的位置（行索引）
        const possibleRows = [];
        for (let row = 0; row < 9; row++) {
          // 如果单元格已有数字，跳过
          if (board[row][col] !== 0) continue;
          
          // 检查该单元格是否可以填入num，或者候选数中包含num
          const notesKey = `${row}-${col}`;
          const cellNotes = pencilNotes[notesKey] || [];
          if (isValidMove(board, row, col, num) && cellNotes.includes(num)) {
            possibleRows.push(row);
          }
        }
        
        // 如果该列有2个或3个可能的行，将其添加到列表中
        if (possibleRows.length === 2 || possibleRows.length === 3) {
          colsWithValidPositions.push({ col, rows: possibleRows });
        }
      }
      
      // 检查是否存在三列有相同的三个可能行
      for (let i = 0; i < colsWithValidPositions.length - 2; i++) {
        for (let j = i + 1; j < colsWithValidPositions.length - 1; j++) {
          for (let k = j + 1; k < colsWithValidPositions.length; k++) {
            const col1 = colsWithValidPositions[i];
            const col2 = colsWithValidPositions[j];
            const col3 = colsWithValidPositions[k];
            
            // 检查三行是否完全相同（不考虑顺序）
            const rows1Set = new Set(col1.rows);
            const rows2Set = new Set(col2.rows);
            const rows3Set = new Set(col3.rows);
            
            // 合并所有行
            const allRows = new Set([...col1.rows, ...col2.rows, ...col3.rows]);
            
            // 检查是否只有三个不同的行
            if (allRows.size === 3) {
              // 检查每列都包含这三个行中的某些行
              const isValid = [...allRows].every(row => 
                rows1Set.has(row) || rows2Set.has(row) || rows3Set.has(row)
              );
              
              if (isValid) {
                // 找到Swordfish，现在计算可以排除的候选数
                const targetCells = [];
                const removableCandidates = [];
                const targetCellsDetails = []; // 添加详细的目标单元格信息
                const allRowsArray = [...allRows];
                
                // 对于这三个行，排除其他列中的该数字候选数
                allRowsArray.forEach(row => {
                  for (let c = 0; c < 9; c++) {
                    // 跳过Swordfish所在的列
                    if (c === col1.col || c === col2.col || c === col3.col) continue;
                    
                    // 跳过已填数字的单元格
                    if (board[row][c] !== 0) continue;
                    
                    const notesKey = `${row}-${c}`;
                    const cellNotes = pencilNotes[notesKey] || [];
                    
                    // 如果单元格候选数中包含该数字，将其添加为目标单元格
                    if (cellNotes.includes(num)) {
                      targetCells.push([row, c]);
                      removableCandidates.push(num);
                      // 添加详细信息，包括每个单元格需要删除的候选数
                      targetCellsDetails.push({
                        row: row,
                        col: c,
                        notesToRemove: [num]
                      });
                    }
                  }
                });
                
                // 只有当有实际可删除的候选数时，才添加机会
                if (targetCells.length > 0) {
                  opportunities.push({
                    type: 'swordfishCol',
                    description: 'Swordfish(列)',
                    number: num,
                    cells: [
                      ...col1.rows.map(row => [row, col1.col]),
                      ...col2.rows.map(row => [row, col2.col]),
                      ...col3.rows.map(row => [row, col3.col])
                    ],
                    targetCells,
                    targetCellsDetails, // 添加详细信息
                    removableCandidates,
                    message: `Swordfish技巧：在第${col1.col + 1}列、第${col2.col + 1}列和第${col3.col + 1}列中，数字${num}只出现在第${allRowsArray.map(r => r + 1).join('、')}行中，形成一个三行三列的结构。由于这个数字在这三列中只能出现在相同的三行，因此可以确定该数字在这三行的其他列中不可能存在，可以删除第${allRowsArray.map(r => r + 1).join('、')}行中除这三列外其他单元格的数字${num}候选数`
                  });
                }
              }
            }
          }
        }
      }
    }
  };
  
  // 执行行和列的Swordfish检查
  checkRowSwordfish();
  checkColSwordfish();
  
  return opportunities;
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
    const [x, y, z] = pivotCell.notes;
    
    // 找到与枢纽共享一个候选数且在同一单元的双候选数单元格
    const xLinkedCells = [];
    const yLinkedCells = [];
    const zLinkedCells = [];
    
    for (let j = 0; j < doubleCandidatesCells.length; j++) {
      const linkedCell = doubleCandidatesCells[j];
      if (!areInSameUnit(pivotCell, linkedCell)) continue;
      
      // 检查是否只有一个共享候选数
      const intersection = getIntersection(pivotCell.notes, linkedCell.notes);
      if (intersection.length === 1) {
        if (intersection[0] === x) {
          // 这个单元格是XZ单元格
          const otherNote = linkedCell.notes.find(note => note !== x);
          if (otherNote && otherNote !== y && otherNote !== z) continue; // 确保另一个候选数是y或z
          xLinkedCells.push({ ...linkedCell, other: otherNote });
        } else if (intersection[0] === y) {
          // 这个单元格是YZ单元格
          const otherNote = linkedCell.notes.find(note => note !== y);
          if (otherNote && otherNote !== x && otherNote !== z) continue; // 确保另一个候选数是x或z
          yLinkedCells.push({ ...linkedCell, other: otherNote });
        } else if (intersection[0] === z) {
          // 这个单元格是XZ或YZ单元格
          const otherNote = linkedCell.notes.find(note => note !== z);
          if (otherNote && otherNote !== x && otherNote !== y) continue; // 确保另一个候选数是x或y
          zLinkedCells.push({ ...linkedCell, other: otherNote });
        }
      }
    }
    
    // 现在检查XZ和YZ单元格是否有相同的other候选数，并且它们共享一个交叉单元格
    // 检查X链接和Y链接的情况
    for (const xzCell of [...xLinkedCells, ...zLinkedCells]) {
      for (const yzCell of [...yLinkedCells, ...zLinkedCells]) {
        // 确保不是同一个单元格
        if (xzCell.row === yzCell.row && xzCell.col === yzCell.col) continue;
        
        // 检查是否有相同的other候选数
        if (xzCell.other !== yzCell.other) continue;
        
        const commonCandidate = xzCell.other;
        
        // 检查三个单元格是否在同一宫中
        const pivotBoxRow = Math.floor(pivotCell.row / 3);
        const pivotBoxCol = Math.floor(pivotCell.col / 3);
        const xzBoxRow = Math.floor(xzCell.row / 3);
        const xzBoxCol = Math.floor(xzCell.col / 3);
        const yzBoxRow = Math.floor(yzCell.row / 3);
        const yzBoxCol = Math.floor(yzCell.col / 3);
        
        if (!(pivotBoxRow === xzBoxRow && pivotBoxCol === xzBoxCol &&
              pivotBoxRow === yzBoxRow && pivotBoxCol === yzBoxCol)) continue;
        
        // 找到XZ和YZ单元格共同影响的单元格
        const targetCells = [];
        const removableCandidates = [];
        const targetCellsDetails = []; // 添加详细的目标单元格信息
        
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
            const sharesWithXZ = (row === xzCell.row || col === xzCell.col ||
                                 (Math.floor(row / 3) === Math.floor(xzCell.row / 3) &&
                                  Math.floor(col / 3) === Math.floor(xzCell.col / 3)));
            
            const sharesWithYZ = (row === yzCell.row || col === yzCell.col ||
                                 (Math.floor(row / 3) === Math.floor(yzCell.row / 3) &&
                                  Math.floor(col / 3) === Math.floor(yzCell.col / 3)));
            
            // 检查是否在同一宫中
            const sharesWithPivot = (Math.floor(row / 3) === Math.floor(pivotCell.row / 3) &&
                                    Math.floor(col / 3) === Math.floor(pivotCell.col / 3));
            
            if (sharesWithXZ && sharesWithYZ && sharesWithPivot) {
              // 检查该单元格是否可以填入commonCandidate，且候选数中包含commonCandidate
              const notesKey = `${row}-${col}`;
              const cellNotes = pencilNotes[notesKey] || [];
              
              if (cellNotes.includes(commonCandidate)) {
                targetCells.push([row, col]);
                removableCandidates.push(commonCandidate);
                // 添加详细信息，包括每个单元格需要删除的候选数
                targetCellsDetails.push({
                  row: row,
                  col: col,
                  notesToRemove: [commonCandidate]
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
            x, y, z, common: commonCandidate,
            targetCells,
            targetCellsDetails, // 添加详细信息
            removableCandidates,
            message: `XYZ-Wing技巧：这是一个由一个三候选数单元格和两个双候选数单元格组成的特殊结构。枢纽单元格(${pivotCell.row + 1},${pivotCell.col + 1})包含候选数[${x},${y},${z}]，XZ单元格(${xzCell.row + 1},${xzCell.col + 1})包含候选数[${xzCell.notes.join(',')}],YZ单元格(${yzCell.row + 1},${yzCell.col + 1})包含候选数[${yzCell.notes.join(',')}].由于枢纽单元格与XZ、YZ单元格分别共享候选数，且XZ和YZ单元格都包含候选数${commonCandidate}，因此可以确定在同时受XZ和YZ单元格影响的交叉单元格中，候选数${commonCandidate}不可能存在，可以删除这些交叉单元格中的数字${commonCandidate}候选数`
          });
        }
      }
    }
  }
  
  return opportunities;
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
    
    // 创建已识别单元格的集合，避免重复识别
    const identifiedCells = new Set();
    
    // 添加已识别的单元格到集合中
    const addToIdentified = (techniques) => {
      techniques.forEach(technique => {
        if (technique.cells) {
          technique.cells.forEach(([row, col]) => {
            identifiedCells.add(`${row}-${col}`);
          });
        }
      });
    };
    
    // 先添加基础技巧识别的单元格
    addToIdentified(nakedSingles);
    addToIdentified(hiddenSingles);
    

  }
  
  // 按技巧难度顺序合并所有技巧机会
  const result = [
    // 基础技巧（第一优先级）
    ...nakedSingles,
    ...hiddenSingles
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
  }
  
  return result;

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
    // 单一数字填入技巧
    case 'nakedSingle':
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