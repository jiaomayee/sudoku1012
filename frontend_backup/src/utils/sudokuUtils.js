// 数独游戏核心逻辑工具函数

// 创建空的9x9数独板
export const createEmptyBoard = () => {
  return Array(9).fill().map(() => Array(9).fill(0));
};

// 检查在指定位置放置数字是否有效
export const isValidMove = (board, row, col, num) => {
  // 检查行
  for (let c = 0; c < 9; c++) {
    if (c !== col && board[row][c] === num) {
      return false;
    }
  }

  // 检查列
  for (let r = 0; r < 9; r++) {
    if (r !== row && board[r][col] === num) {
      return false;
    }
  }

  // 检查3x3宫格
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if (r !== row && c !== col && board[r][c] === num) {
        return false;
      }
    }
  }

  return true;
};

// 查找空单元格（值为0的单元格）
export const findEmptyCell = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
};

// 使用回溯算法求解数独
export const solveSudoku = (board) => {
  // 创建副本避免修改原数组
  const grid = board.map(row => [...row]);
  
  const solve = () => {
    const empty = findEmptyCell(grid);
    if (!empty) return true; // 没有空单元格，数独已解决
    
    const [row, col] = empty;
    
    // 尝试1-9的数字
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(grid, row, col, num)) {
        grid[row][col] = num;
        
        if (solve()) return true; // 递归求解
        
        grid[row][col] = 0; // 回溯
      }
    }
    
    return false; // 没有找到解
  };
  
  solve();
  return grid;
};

// 检查数独是否有唯一解
export const hasUniqueSolution = (board) => {
  // 复制当前数独板
  const grid = board.map(row => [...row]);
  let solutionsCount = 0;
  
  const findSolutions = () => {
    if (solutionsCount > 1) return; // 一旦找到超过1个解，立即停止
    
    const empty = findEmptyCell(grid);
    if (!empty) {
      solutionsCount++;
      return;
    }
    
    const [row, col] = empty;
    
    // 尝试1-9的数字
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(grid, row, col, num)) {
        grid[row][col] = num;
        findSolutions();
        grid[row][col] = 0; // 回溯
      }
    }
  };
  
  findSolutions();
  return solutionsCount === 1;
};

// 生成随机打乱的1-9数组
export const generateRandomNumbers = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Fisher-Yates 洗牌算法
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers;
};

// 生成完整的数独解（填充整个棋盘）
export const generateCompletedBoard = () => {
  const board = createEmptyBoard();
  
  // 填充对角线的3x3宫格
  for (let box = 0; box < 9; box += 3) {
    const numbers = generateRandomNumbers();
    let index = 0;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        board[box + row][box + col] = numbers[index++];
      }
    }
  }
  
  // 求解剩余部分
  const solve = () => {
    const empty = findEmptyCell(board);
    if (!empty) return true;
    
    const [row, col] = empty;
    const numbers = generateRandomNumbers(); // 使用随机顺序增加变化性
    
    for (const num of numbers) {
      if (isValidMove(board, row, col, num)) {
        board[row][col] = num;
        
        if (solve()) return true;
        
        board[row][col] = 0; // 回溯
      }
    }
    
    return false;
  };
  
  solve();
  return board;
};

// 根据难度级别生成数独谜题
export const generateSudoku = (difficulty = 'medium') => {
  // 首先生成完整的数独解
  const solution = generateCompletedBoard();
  const board = solution.map(row => [...row]);
  
  // 根据难度决定要移除的数字数量
  let cellsToRemove;
  switch (difficulty) {
    case 'easy':
      cellsToRemove = 40; // 保留41个数字
      break;
    case 'medium':
      cellsToRemove = 50; // 保留31个数字
      break;
    case 'hard':
      cellsToRemove = 55; // 保留26个数字
      break;
    case 'expert':
      cellsToRemove = 60; // 保留21个数字
      break;
    default:
      cellsToRemove = 50;
  }
  
  // 移除单元格数字，同时确保数独仍有唯一解
  let removedCells = 0;
  const positions = [];
  
  // 生成所有单元格位置
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      positions.push([row, col]);
    }
  }
  
  // 打乱位置顺序
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }
  
  // 逐个尝试移除数字
  for (const [row, col] of positions) {
    if (removedCells >= cellsToRemove) break;
    
    const temp = board[row][col];
    board[row][col] = 0;
    
    // 检查移除后是否仍有唯一解
    if (hasUniqueSolution(board)) {
      removedCells++;
    } else {
      // 如果移除后解不唯一，恢复该数字
      board[row][col] = temp;
    }
  }
  
  return {
    puzzle: board,
    solution: solution
  };
};

// 检查数独是否已完成
export const isSudokuComplete = (board) => {
  // 检查是否有空单元格
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return false;
      }
    }
  }
  
  // 检查所有行、列和宫格是否有效
  return isValidSudoku(board);
};

// 获取单元格的候选数
export const getCellCandidates = (board, row, col) => {
  if (board[row][col] !== 0) return []; // 如果单元格已有数字，没有候选数
  
  const candidates = [];
  for (let num = 1; num <= 9; num++) {
    if (isValidMove(board, row, col, num)) {
      candidates.push(num);
    }
  }
  
  return candidates;
};

// 为整个数独板计算所有候选数
export const calculateAllCandidates = (board) => {
  const candidates = Array(9).fill().map(() => Array(9).fill([]));
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      candidates[row][col] = getCellCandidates(board, row, col);
    }
  }
  
  return candidates;
};

// 应用基本的数独技巧并获取提示
export const getHint = (board) => {
  const candidates = calculateAllCandidates(board);
  
  // 1. 寻找唯一候选数（Naked Single）
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0 && candidates[row][col].length === 1) {
        return {
          row,
          col,
          value: candidates[row][col][0],
          technique: 'nakedSingle',
          description: '唯一候选数：该单元格只有一个可能的数字'
        };
      }
    }
  }
  
  // 2. 寻找隐性唯一（Hidden Single）
  // 检查每一行
  for (let row = 0; row < 9; row++) {
    for (let num = 1; num <= 9; num++) {
      let count = 0;
      let lastCol = -1;
      
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0 && candidates[row][col].includes(num)) {
          count++;
          lastCol = col;
        }
      }
      
      if (count === 1) {
        return {
          row,
          col: lastCol,
          value: num,
          technique: 'hiddenSingle',
          description: '隐性唯一：该数字在这一行只能放在这个位置'
        };
      }
    }
  }
  
  // 检查每一列
  for (let col = 0; col < 9; col++) {
    for (let num = 1; num <= 9; num++) {
      let count = 0;
      let lastRow = -1;
      
      for (let row = 0; row < 9; row++) {
        if (board[row][col] === 0 && candidates[row][col].includes(num)) {
          count++;
          lastRow = row;
        }
      }
      
      if (count === 1) {
        return {
          row: lastRow,
          col,
          value: num,
          technique: 'hiddenSingle',
          description: '隐性唯一：该数字在这一列只能放在这个位置'
        };
      }
    }
  }
  
  // 检查每个3x3宫格
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      for (let num = 1; num <= 9; num++) {
        let count = 0;
        let lastRow = -1;
        let lastCol = -1;
        
        for (let r = 0; r < 3; r++) {
          for (let c = 0; c < 3; c++) {
            const row = boxRow * 3 + r;
            const col = boxCol * 3 + c;
            if (board[row][col] === 0 && candidates[row][col].includes(num)) {
              count++;
              lastRow = row;
              lastCol = col;
            }
          }
        }
        
        if (count === 1) {
          return {
            row: lastRow,
            col: lastCol,
            value: num,
            technique: 'hiddenSingle',
            description: '隐性唯一：该数字在这个宫格只能放在这个位置'
          };
        }
      }
    }
  }
  
  // 如果没有找到简单的提示，返回第一个空单元格的任何可能值
  const empty = findEmptyCell(board);
  if (empty) {
    const [row, col] = empty;
    if (candidates[row][col].length > 0) {
      return {
        row,
        col,
        value: candidates[row][col][0],
        technique: 'random',
        description: '提示：这是一个可能的数字'
      };
    }
  }
  
  return null;
};

// 识别数独中的技巧
export const detectTechniques = (board) => {
  const techniques = [];
  const candidates = calculateAllCandidates(board);
  
  // 1. 检查唯一候选数
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0 && candidates[row][col].length === 1) {
        techniques.push({
          type: 'nakedSingle',
          cells: [{ row, col }],
          value: candidates[row][col][0],
          description: `在(${row+1}, ${col+1})位置发现唯一候选数: ${candidates[row][col][0]}`
        });
      }
    }
  }
  
  // 2. 检查数对（Naked Pairs）
  // 行中的数对
  for (let row = 0; row < 9; row++) {
    const pairs = new Map();
    
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0 && candidates[row][col].length === 2) {
        const pairKey = candidates[row][col].sort().join(',');
        if (!pairs.has(pairKey)) {
          pairs.set(pairKey, []);
        }
        pairs.get(pairKey).push({ row, col });
      }
    }
    
    pairs.forEach((cells, pairKey) => {
      if (cells.length === 2) {
        techniques.push({
          type: 'nakedPairs',
          cells,
          values: pairKey.split(',').map(Number),
          description: `在第${cells[0].row+1}行发现数对: ${pairKey}`
        });
      }
    });
  }
  
  // 这里可以添加更多技巧检测...
  
  return techniques;
};

// 获取冲突的单元格
export const getConflictingCells = (board) => {
  const conflicts = [];
  
  // 检查每一行中的冲突
  for (let row = 0; row < 9; row++) {
    const seen = new Map();
    for (let col = 0; col < 9; col++) {
      const num = board[row][col];
      if (num !== 0) {
        if (!seen.has(num)) {
          seen.set(num, []);
        }
        seen.get(num).push({ row, col });
      }
    }
    
    seen.forEach((cells, num) => {
      if (cells.length > 1) {
        cells.forEach(cell => conflicts.push(cell));
      }
    });
  }
  
  // 检查每一列中的冲突
  for (let col = 0; col < 9; col++) {
    const seen = new Map();
    for (let row = 0; row < 9; row++) {
      const num = board[row][col];
      if (num !== 0) {
        if (!seen.has(num)) {
          seen.set(num, []);
        }
        seen.get(num).push({ row, col });
      }
    }
    
    seen.forEach((cells, num) => {
      if (cells.length > 1) {
        cells.forEach(cell => conflicts.push(cell));
      }
    });
  }
  
  // 检查每个3x3宫格中的冲突
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const seen = new Map();
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const row = boxRow * 3 + r;
          const col = boxCol * 3 + c;
          const num = board[row][col];
          if (num !== 0) {
            if (!seen.has(num)) {
              seen.set(num, []);
            }
            seen.get(num).push({ row, col });
          }
        }
      }
      
      seen.forEach((cells, num) => {
        if (cells.length > 1) {
          cells.forEach(cell => conflicts.push(cell));
        }
      });
    }
  }
  
  // 去重
  const uniqueConflicts = [];
  const seenCells = new Set();
  
  conflicts.forEach(cell => {
    const key = `${cell.row},${cell.col}`;
    if (!seenCells.has(key)) {
      seenCells.add(key);
      uniqueConflicts.push(cell);
    }
  });
  
  return uniqueConflicts;
};

// 克隆数独板
export const cloneBoard = (board) => {
  return board.map(row => [...row]);
};

// 计算数独完成进度百分比
export const calculateProgress = (board) => {
  let filledCells = 0;
  let totalCells = 0;
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      totalCells++;
      if (board[row][col] !== 0) {
        filledCells++;
      }
    }
  }
  
  return Math.round((filledCells / totalCells) * 100);
};

// 转换行号和列号为宫格索引
export const getBoxIndex = (row, col) => {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
};

// 获取指定宫格的所有单元格位置
export const getBoxCells = (boxIndex) => {
  const cells = [];
  const rowOffset = Math.floor(boxIndex / 3) * 3;
  const colOffset = (boxIndex % 3) * 3;
  
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      cells.push({ row: rowOffset + r, col: colOffset + c });
    }
  }
  
  return cells;
};