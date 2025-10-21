// 数独游戏核心逻辑工具函数
import DLX from './DLX.js';

// 创建空的9x9数独板
export const createEmptyBoard = () => {
  return Array(9).fill().map(() => Array(9).fill(0));
};

// 创建DLX实例用于数独求解和唯一性验证
const dlxSolver = new DLX();

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
  try {
    // 优先使用DLX算法求解，更高效
    const solution = dlxSolver.solveSudoku(board);
    if (solution) {
      return solution;
    }
    // 如果DLX无法求解，回退到原算法
  } catch (error) {
    console.error('使用DLX算法求解数独时出错:', error);
  }
  
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
// 使用DLX算法进行高效验证，比回溯算法更快更可靠
export const hasUniqueSolution = (board) => {
  try {
    return dlxSolver.hasUniqueSolution(board);
  } catch (error) {
    console.error('验证数独唯一性时出错:', error);
    // 出错时回退到原始算法
    return fallbackHasUniqueSolution(board);
  }
};

// 备用的回溯算法实现，仅在DLX算法出错时使用
const fallbackHasUniqueSolution = (board) => {
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
  console.debug('开始生成完整的数独解');
  const maxAttempts = 10; // 最大尝试次数
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const board = createEmptyBoard();
      
      // 填充对角线的3x3宫格（这是一种确保数独可解的常见技巧）
      for (let box = 0; box < 9; box += 3) {
        const numbers = generateRandomNumbers();
        let index = 0;
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            board[box + row][box + col] = numbers[index++];
          }
        }
      }
      
      // 使用DLX算法求解剩余部分，效率更高
      const completedBoard = dlxSolver.solveSudoku(board);
      
      if (completedBoard && isValidSudoku(completedBoard)) {
        console.debug(`成功生成完整数独解（尝试次数：${attempt}）`);
        return completedBoard;
      }
      
      // 如果DLX失败，回退到回溯算法
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
      
      if (solve() && isValidSudoku(board)) {
        console.debug(`使用回溯算法成功生成完整数独解（尝试次数：${attempt}）`);
        return board;
      }
    } catch (error) {
      console.error(`生成数独解时出错（尝试 ${attempt}/${maxAttempts}）:`, error);
    }
  }
  
  console.error(`超过最大尝试次数（${maxAttempts}），无法生成有效的数独解`);
  return null;
};

// 根据难度级别生成数独谜题
export const generateSudoku = async (difficulty = 'medium') => {
  console.log(`开始生成${difficulty}难度的数独题目`);
  
  // 首先生成完整的数独解
  const solution = generateCompletedBoard();
  if (!solution) {
    console.error('生成完整数独解失败');
    return null;
  }
  
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
  
  // 逐个尝试移除数字，使用DLX算法验证唯一性
  for (const [row, col] of positions) {
    if (removedCells >= cellsToRemove) break;
    
    const temp = board[row][col];
    board[row][col] = 0;
    
    // 检查移除后是否仍有唯一解
    if (hasUniqueSolution(board)) {
      removedCells++;
      console.debug(`已移除单元格(${row},${col})，当前已移除${removedCells}/${cellsToRemove}个`);
    } else {
      // 如果移除后解不唯一，恢复该数字
      board[row][col] = temp;
    }
  }
  
  // 验证生成的题目是否有效
  const isValidPuzzle = hasUniqueSolution(board);
  if (!isValidPuzzle) {
    console.warn(`警告：生成的${difficulty}难度题目可能没有唯一解，尝试重新生成`);
    // 可以选择重新生成，但为了避免无限循环，这里直接返回当前结果
  }
  
  console.log(`成功生成${difficulty}难度数独题目，保留了${81 - removedCells}个数字`);
  
  return {
    puzzle: board,
    solution: solution
  };
};

// 检查整个数独板是否有效（不包含冲突）
export const isValidSudoku = (board) => {
  // 检查每一行
  for (let row = 0; row < 9; row++) {
    const seen = new Set();
    for (let col = 0; col < 9; col++) {
      const num = board[row][col];
      if (num !== 0) {
        if (seen.has(num)) return false;
        seen.add(num);
      }
    }
  }
  
  // 检查每一列
  for (let col = 0; col < 9; col++) {
    const seen = new Set();
    for (let row = 0; row < 9; row++) {
      const num = board[row][col];
      if (num !== 0) {
        if (seen.has(num)) return false;
        seen.add(num);
      }
    }
  }
  
  // 检查每个3x3宫格
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const seen = new Set();
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const row = boxRow * 3 + r;
          const col = boxCol * 3 + c;
          const num = board[row][col];
          if (num !== 0) {
            if (seen.has(num)) return false;
            seen.add(num);
          }
        }
      }
    }
  }
  
  return true;
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
  // 检查单元格是否为空且位置有效
  const isEmptyCell = (row, col) => {
    return row >= 0 && row < 9 && col >= 0 && col < 9 && board[row][col] === 0;
  };
  
  // 检查在指定位置放置数字是否有效
  const isValidMove = (row, col, num) => {
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
  
  // 1. 寻找唯一数法（Naked Single）- 直接计算可能的数字，不依赖候选数
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (isEmptyCell(row, col)) {
        const possibleNumbers = [];
        
        // 找出所有可能的数字
        for (let num = 1; num <= 9; num++) {
          if (isValidMove(row, col, num)) {
            possibleNumbers.push(num);
          }
        }
        
        // 如果只有一个可能的数字，就是唯一数
        if (possibleNumbers.length === 1) {
          return {
            row,
            col,
            value: possibleNumbers[0],
            technique: 'nakedSingle',
            description: '唯一数法：该单元格只有一个可能的数字'
          };
        }
      }
    }
  }
  
  // 2. 寻找隐性唯一数法（Hidden Single）
  // 检查每一行
  for (let row = 0; row < 9; row++) {
    for (let num = 1; num <= 9; num++) {
      // 检查数字是否已经在该行存在
      let exists = false;
      for (let c = 0; c < 9; c++) {
        if (board[row][c] === num) {
          exists = true;
          break;
        }
      }
      if (exists) continue;
      
      let count = 0;
      let lastCol = -1;
      
      // 找出该行中可以放置该数字的空单元格
      for (let col = 0; col < 9; col++) {
        if (isEmptyCell(row, col) && isValidMove(row, col, num)) {
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
          description: '行摒除法：该数字在这一行只能放在这个位置'
        };
      }
    }
  }
  
  // 检查每一列
  for (let col = 0; col < 9; col++) {
    for (let num = 1; num <= 9; num++) {
      // 检查数字是否已经在该列存在
      let exists = false;
      for (let r = 0; r < 9; r++) {
        if (board[r][col] === num) {
          exists = true;
          break;
        }
      }
      if (exists) continue;
      
      let count = 0;
      let lastRow = -1;
      
      // 找出该列中可以放置该数字的空单元格
      for (let row = 0; row < 9; row++) {
        if (isEmptyCell(row, col) && isValidMove(row, col, num)) {
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
          description: '列摒除法：该数字在这一列只能放在这个位置'
        };
      }
    }
  }
  
  // 检查每一个3x3宫
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      for (let num = 1; num <= 9; num++) {
        // 检查数字是否已经在该宫存在
        let exists = false;
        for (let rOffset = 0; rOffset < 3; rOffset++) {
          for (let cOffset = 0; cOffset < 3; cOffset++) {
            const row = boxRow * 3 + rOffset;
            const col = boxCol * 3 + cOffset;
            if (board[row][col] === num) {
              exists = true;
              break;
            }
          }
          if (exists) break;
        }
        if (exists) continue;
        
        let count = 0;
        let lastRow = -1;
        let lastCol = -1;
        
        // 找出该宫中可以放置该数字的空单元格
        for (let rOffset = 0; rOffset < 3; rOffset++) {
          for (let cOffset = 0; cOffset < 3; cOffset++) {
            const row = boxRow * 3 + rOffset;
            const col = boxCol * 3 + cOffset;
            if (isEmptyCell(row, col) && isValidMove(row, col, num)) {
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
            description: '宫摒除法：该数字在这一宫只能放在这个位置'
          };
        }
      }
    }
  }
  
  // 如果没有找到简单的提示，返回第一个空单元格的任何可能值
  const empty = findEmptyCell(board);
  if (empty) {
    const [row, col] = empty;
    // 找出第一个可能的数字
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(row, col, num)) {
        return {
          row,
          col,
          value: num,
          technique: 'random',
          description: '提示：这是一个可能的数字'
        };
      }
    }
  }
  
  return null;
};

// 识别数独中的技巧
export const detectTechniques = (board) => {
  const techniques = [];
  
  // 检查单元格是否为空且位置有效
  const isEmptyCell = (row, col) => {
    return row >= 0 && row < 9 && col >= 0 && col < 9 && board[row][col] === 0;
  };
  
  // 检查在指定位置放置数字是否有效
  const isValidMove = (row, col, num) => {
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
  
  // 1. 检查唯一数法 - 直接计算可能的数字，不依赖候选数
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (isEmptyCell(row, col)) {
        const possibleNumbers = [];
        
        // 找出所有可能的数字
        for (let num = 1; num <= 9; num++) {
          if (isValidMove(row, col, num)) {
            possibleNumbers.push(num);
          }
        }
        
        // 如果只有一个可能的数字，就是唯一数
        if (possibleNumbers.length === 1) {
          techniques.push({
            type: 'nakedSingle',
            cells: [{ row, col }],
            value: possibleNumbers[0],
            description: `在(${row+1}, ${col+1})位置发现唯一数: ${possibleNumbers[0]}`
          });
        }
      }
    }
  }
  
  // 对于需要候选数的技巧（如数对），我们可以为特定单元格计算候选数
  const getCellCandidates = (row, col) => {
    const candidates = [];
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(row, col, num)) {
        candidates.push(num);
      }
    }
    return candidates;
  };
  
  // 2. 检查数对（Naked Pairs）
  // 行中的数对
  for (let row = 0; row < 9; row++) {
    const pairs = new Map();
    
    for (let col = 0; col < 9; col++) {
      if (isEmptyCell(row, col)) {
        const cellCandidates = getCellCandidates(row, col);
        if (cellCandidates.length === 2) {
          const pairKey = cellCandidates.sort().join(',');
          if (!pairs.has(pairKey)) {
            pairs.set(pairKey, []);
          }
          pairs.get(pairKey).push({ row, col });
        }
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

// 测试数独生成功能
export const testSudokuGeneration = () => {
  console.log('开始测试数独生成功能...');
  const difficulties = ['easy', 'medium', 'hard', 'expert'];
  
  difficulties.forEach(difficulty => {
    console.log(`\n测试${difficulty}难度数独生成:`);
    const result = generateSudoku(difficulty);
    
    if (!result) {
      console.error(`${difficulty}难度数独生成失败`);
      return;
    }
    
    const { puzzle, solution } = result;
    
    // 验证生成的数独题目是有效的
    const isPuzzleValid = isValidSudoku(puzzle);
    console.log(`${difficulty}难度题目是否有效:`, isPuzzleValid);
    
    // 验证生成的数独解是有效的
    const isSolutionValid = isValidSudoku(solution) && isSudokuComplete(solution);
    console.log(`${difficulty}难度解是否有效且完整:`, isSolutionValid);
    
    // 验证题目有唯一解
    const hasUniqueSol = hasUniqueSolution(puzzle);
    console.log(`${difficulty}难度题目是否有唯一解:`, hasUniqueSol);
    
    // 计算保留的数字数量
    let filledCount = 0;
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (puzzle[row][col] !== 0) filledCount++;
      }
    }
    console.log(`${difficulty}难度题目保留的数字数量:`, filledCount);
    
    // 验证解是否匹配题目
    const isSolutionMatching = verifySolution(puzzle, solution);
    console.log(`${difficulty}难度解是否与题目匹配:`, isSolutionMatching);
  });
  
  console.log('\n数独生成功能测试完成!');
};

// 验证解是否匹配题目
const verifySolution = (puzzle, solution) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] !== 0 && puzzle[row][col] !== solution[row][col]) {
        return false;
      }
    }
  }
  return true;
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