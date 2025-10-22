// 数独技巧实现：初级技巧集合

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
          opportunities.push({
            type: 'nakedPairRow',
            description: '显性数对法(行)',
            cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
            values: cell1.notes,
            message: `在第${row+1}行，单元格(${cell1.col+1})和(${cell2.col+1})形成显性数对[${cell1.notes.join(',')}]`
          });
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
          opportunities.push({
            type: 'nakedPairCol',
            description: '显性数对法(列)',
            cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
            values: cell1.notes,
            message: `在第${col+1}列，单元格(${cell1.row+1})和(${cell2.row+1})形成显性数对[${cell1.notes.join(',')}]`
          });
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
          opportunities.push({
            type: 'nakedPairBox',
            description: '显性数对法(宫)',
            cells: [[cell1.row, cell1.col], [cell2.row, cell2.col]],
            values: cell1.notes,
            message: `在第${boxRow*3+boxCol+1}宫，单元格(${cell1.row+1},${cell1.col+1})和(${cell2.row+1},${cell2.col+1})形成显性数对[${cell1.notes.join(',')}]`
          });
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
          opportunities.push({
            type: 'hiddenPairRow',
            description: '隐性数对法(行)',
            cells: [[row, cols[0]], [row, cols[1]]],
            values: [num1, num2],
            message: `在第${row+1}行，数字${num1}和${num2}只能出现在单元格(${cols[0]+1})和(${cols[1]+1})中`
          });
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
          opportunities.push({
            type: 'hiddenPairCol',
            description: '隐性数对法(列)',
            cells: [[rows[0], col], [rows[1], col]],
            values: [num1, num2],
            message: `在第${col+1}列，数字${num1}和${num2}只能出现在单元格(${rows[0]+1})和(${rows[1]+1})中`
          });
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
          opportunities.push({
            type: 'hiddenPairBox',
            description: '隐性数对法(宫)',
            cells: cells.map(p => [p.row, p.col]),
            values: [num1, num2],
            message: `在第${boxRow*3+boxCol+1}宫，数字${num1}和${num2}只能出现在单元格(${cells[0].row+1},${cells[0].col+1})和(${cells[1].row+1},${cells[1].col+1})中`
          });
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
              opportunities.push({
                type: 'nakedTripleRow',
                description: '显性三链数法(行)',
                cells: [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]],
                values: allNotes,
                message: `在第${row+1}行，单元格(${cell1.col+1})、(${cell2.col+1})和(${cell3.col+1})形成显性三链数[${allNotes.join(',')}]`
              });
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
              opportunities.push({
                type: 'nakedTripleCol',
                description: '显性三链数法(列)',
                cells: [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]],
                values: allNotes,
                message: `在第${col+1}列，单元格(${cell1.row+1})、(${cell2.row+1})和(${cell3.row+1})形成显性三链数[${allNotes.join(',')}]`
              });
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
              opportunities.push({
                type: 'nakedTripleBox',
                description: '显性三链数法(宫)',
                cells: [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]],
                values: allNotes,
                message: `在第${boxRow*3+boxCol+1}宫，单元格(${cell1.row+1},${cell1.col+1})、(${cell2.row+1},${cell2.col+1})和(${cell3.row+1},${cell3.col+1})形成显性三链数[${allNotes.join(',')}]`
              });
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
            opportunities.push({
              type: 'hiddenTripleRow',
              description: '隐性三链数法(行)',
              cells: [[row, cols[0]], [row, cols[1]], [row, cols[2]]],
              values: [num1, num2, num3],
              message: `在第${row+1}行，数字${num1}、${num2}和${num3}只能出现在单元格(${cols[0]+1})、(${cols[1]+1})和(${cols[2]+1})中`
            });
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
            opportunities.push({
              type: 'hiddenTripleCol',
              description: '隐性三链数法(列)',
              cells: [[rows[0], col], [rows[1], col], [rows[2], col]],
              values: [num1, num2, num3],
              message: `在第${col+1}列，数字${num1}、${num2}和${num3}只能出现在单元格(${rows[0]+1})、(${rows[1]+1})和(${rows[2]+1})中`
            });
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
            opportunities.push({
              type: 'hiddenTripleBox',
              description: '隐性三链数法(宫)',
              cells: cells.map(p => [p.row, p.col]),
              values: [num1, num2, num3],
              message: `在第${boxRow*3+boxCol+1}宫，数字${num1}、${num2}和${num3}只能出现在单元格(${cells[0].row+1},${cells[0].col+1})、(${cells[1].row+1},${cells[1].col+1})和(${cells[2].row+1},${cells[2].col+1})中`
            });
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
  // 查找所有可用技巧机会
  const nakedSingles = findNakedSingles(board);
  const hiddenSingles = findHiddenSingles(board);
  const notesSingles = findNotesSingles(board, pencilNotes);
  const nakedPairs = findNakedPairs(board, pencilNotes);
  const hiddenPairs = findHiddenPairs(board, pencilNotes);
  const nakedTriples = findNakedTriples(board, pencilNotes);
  const hiddenTriples = findHiddenTriples(board, pencilNotes);
  
  // 按技巧难度顺序合并所有技巧机会
  return [
    // 基础技巧（第一优先级）
    ...nakedSingles,
    ...hiddenSingles,
    // 候选数基础技巧（第二优先级）
    ...notesSingles,
    // 中级技巧（第三优先级）
    ...nakedPairs,
    ...hiddenPairs,
    // 高级技巧（第四优先级）
    ...nakedTriples,
    ...hiddenTriples
  ];
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
    case 'notesSingle':
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
      // 对于这些技巧，主要是提供视觉提示，暂不自动修改棋盘
      return {
        board: newBoard,
        operation: {
          type: 'highlight',
          cells: technique.cells,
          values: technique.values
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
};