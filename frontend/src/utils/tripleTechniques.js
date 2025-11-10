// 三链数技巧模块
import { getBoxCells } from './sudokuUtils';

/**
 * 显性三链数法 - 检查行中的显性三链数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findNakedTriplesInRow(board, pencilNotes, solution = null) {
  for (let row = 0; row < 9; row++) {
    const rowCells = [];
    
    // 收集行中所有有候选数的空格
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0 && pencilNotes[row][col] && pencilNotes[row][col].length > 0 && pencilNotes[row][col].length <= 3) {
        rowCells.push({
          row,
          col,
          notes: pencilNotes[row][col],
          key: `${row}-${col}`
        });
      }
    }
    
    // 检查是否存在三链数
    for (let i = 0; i < rowCells.length - 2; i++) {
      for (let j = i + 1; j < rowCells.length - 1; j++) {
        for (let k = j + 1; k < rowCells.length; k++) {
          const cell1 = rowCells[i];
          const cell2 = rowCells[j];
          const cell3 = rowCells[k];
          
          // 合并三个单元格的候选数集合
          const allNotes = [...new Set([...cell1.notes, ...cell2.notes, ...cell3.notes])];
          
          // 显性三链数的条件：三个单元格的候选数全部来自三个数字，且这三个数字都出现了
          if (allNotes.length === 3) {
            // 候选数保护检查
            let validPair = true;
            if (solution) {
              const solution1 = solution[cell1.row][cell1.col];
              const solution2 = solution[cell2.row][cell2.col];
              const solution3 = solution[cell3.row][cell3.col];
              
              // 确保三个单元格的答案都在这三个数字中
              if (!allNotes.includes(solution1) || !allNotes.includes(solution2) || !allNotes.includes(solution3)) {
                validPair = false;
              }
            }
            
            if (!validPair) continue;
            
            // 检查其他单元格是否有可以删除的候选数
            const affectedCells = [];
            const tripleCells = [cell1, cell2, cell3];
            const tripleCellKeys = new Set(tripleCells.map(c => c.key));
            
            for (let col = 0; col < 9; col++) {
              const cellKey = `${row}-${col}`;
              // 跳过三链数本身的单元格
              if (tripleCellKeys.has(cellKey) || board[row][col] !== 0) continue;
              
              const cellNotes = pencilNotes[row][col];
              if (!cellNotes || cellNotes.length === 0) continue;
              
              // 查找这个单元格中属于三链数的候选数
              const removableNotes = cellNotes.filter(note => allNotes.includes(note));
              if (removableNotes.length > 0) {
                affectedCells.push({
                  row,
                  col,
                  removableNotes
                });
              }
            }
            
            if (affectedCells.length > 0) {
              const cells = [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]];
              const targetCells = affectedCells.map(cell => [cell.row, cell.col]);
              const values = allNotes;
              
              // 构建result对象
              const result = {
                action: 'removeCandidates',
                cells: affectedCells.map(cell => ({
                  cell: [cell.row, cell.col],
                  action: 'remove',
                  values: cell.removableNotes
                }))
              };
              
              return {
                type: 'nakedTripleRow',
                description: `显性三链数法(行${row + 1})`,
                cells,
                values,
                targetCells,
                removableCandidates: values,
                message: `在行${row + 1}中，单元格${cells.map(c => `(${c[0] + 1},${c[1] + 1})`).join(', ')}形成了显性三链数${values.join(', ')}`,
                technique: '显性三链数法',
                reason: `这三个单元格的候选数全部来自${values.join(', ')}，且这三个数字都出现了`,
                result
              };
            }
          }
        }
      }
    }
  }
  return null;
}

/**
 * 显性三链数法 - 检查列中的显性三链数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findNakedTriplesInCol(board, pencilNotes, solution = null) {
  for (let col = 0; col < 9; col++) {
    const colCells = [];
    
    // 收集列中所有有候选数的空格
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === 0 && pencilNotes[row][col] && pencilNotes[row][col].length > 0 && pencilNotes[row][col].length <= 3) {
        colCells.push({
          row,
          col,
          notes: pencilNotes[row][col],
          key: `${row}-${col}`
        });
      }
    }
    
    // 检查是否存在三链数
    for (let i = 0; i < colCells.length - 2; i++) {
      for (let j = i + 1; j < colCells.length - 1; j++) {
        for (let k = j + 1; k < colCells.length; k++) {
          const cell1 = colCells[i];
          const cell2 = colCells[j];
          const cell3 = colCells[k];
          
          // 合并三个单元格的候选数集合
          const allNotes = [...new Set([...cell1.notes, ...cell2.notes, ...cell3.notes])];
          
          // 显性三链数的条件：三个单元格的候选数全部来自三个数字，且这三个数字都出现了
          if (allNotes.length === 3) {
            // 候选数保护检查
            let validPair = true;
            if (solution) {
              const solution1 = solution[cell1.row][cell1.col];
              const solution2 = solution[cell2.row][cell2.col];
              const solution3 = solution[cell3.row][cell3.col];
              
              // 确保三个单元格的答案都在这三个数字中
              if (!allNotes.includes(solution1) || !allNotes.includes(solution2) || !allNotes.includes(solution3)) {
                validPair = false;
              }
            }
            
            if (!validPair) continue;
            
            // 检查其他单元格是否有可以删除的候选数
            const affectedCells = [];
            const tripleCells = [cell1, cell2, cell3];
            const tripleCellKeys = new Set(tripleCells.map(c => c.key));
            
            for (let row = 0; row < 9; row++) {
              const cellKey = `${row}-${col}`;
              // 跳过三链数本身的单元格
              if (tripleCellKeys.has(cellKey) || board[row][col] !== 0) continue;
              
              const cellNotes = pencilNotes[row][col];
              if (!cellNotes || cellNotes.length === 0) continue;
              
              // 查找这个单元格中属于三链数的候选数
              const removableNotes = cellNotes.filter(note => allNotes.includes(note));
              if (removableNotes.length > 0) {
                affectedCells.push({
                  row,
                  col,
                  removableNotes
                });
              }
            }
            
            if (affectedCells.length > 0) {
              const cells = [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]];
              const targetCells = affectedCells.map(cell => [cell.row, cell.col]);
              const values = allNotes;
              
              // 构建result对象
              const result = {
                action: 'removeCandidates',
                cells: affectedCells.map(cell => ({
                  cell: [cell.row, cell.col],
                  action: 'remove',
                  values: cell.removableNotes
                }))
              };
              
              return {
                type: 'nakedTripleCol',
                description: `显性三链数法(列${col + 1})`,
                cells,
                values,
                targetCells,
                removableCandidates: values,
                message: `在列${col + 1}中，单元格${cells.map(c => `(${c[0] + 1},${c[1] + 1})`).join(', ')}形成了显性三链数${values.join(', ')}`,
                technique: '显性三链数法',
                reason: `这三个单元格的候选数全部来自${values.join(', ')}，且这三个数字都出现了`,
                result
              };
            }
          }
        }
      }
    }
  }
  return null;
}

/**
 * 显性三链数法 - 检查宫中的显性三链数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findNakedTriplesInBox(board, pencilNotes, solution = null) {
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const boxCells = [];
      
      // 收集宫中所有有候选数的空格
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const row = boxRow * 3 + r;
          const col = boxCol * 3 + c;
          if (board[row][col] === 0 && pencilNotes[row][col] && pencilNotes[row][col].length > 0 && pencilNotes[row][col].length <= 3) {
            boxCells.push({
              row,
              col,
              notes: pencilNotes[row][col],
              key: `${row}-${col}`
            });
          }
        }
      }
      
      // 检查是否存在三链数
      for (let i = 0; i < boxCells.length - 2; i++) {
        for (let j = i + 1; j < boxCells.length - 1; j++) {
          for (let k = j + 1; k < boxCells.length; k++) {
            const cell1 = boxCells[i];
            const cell2 = boxCells[j];
            const cell3 = boxCells[k];
            
            // 合并三个单元格的候选数集合
            const allNotes = [...new Set([...cell1.notes, ...cell2.notes, ...cell3.notes])];
            
            // 显性三链数的条件：三个单元格的候选数全部来自三个数字，且这三个数字都出现了
            if (allNotes.length === 3) {
              // 候选数保护检查
              let validPair = true;
              if (solution) {
                const solution1 = solution[cell1.row][cell1.col];
                const solution2 = solution[cell2.row][cell2.col];
                const solution3 = solution[cell3.row][cell3.col];
                
                // 确保三个单元格的答案都在这三个数字中
                if (!allNotes.includes(solution1) || !allNotes.includes(solution2) || !allNotes.includes(solution3)) {
                  validPair = false;
                }
              }
              
              if (!validPair) continue;
              
              // 检查其他单元格是否有可以删除的候选数
              const affectedCells = [];
              const tripleCells = [cell1, cell2, cell3];
              const tripleCellKeys = new Set(tripleCells.map(c => c.key));
              
              for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                  const row = boxRow * 3 + r;
                  const col = boxCol * 3 + c;
                  const cellKey = `${row}-${col}`;
                  
                  // 跳过三链数本身的单元格
                  if (tripleCellKeys.has(cellKey) || board[row][col] !== 0) continue;
                  
                  const cellNotes = pencilNotes[row][col];
                  if (!cellNotes || cellNotes.length === 0) continue;
                  
                  // 查找这个单元格中属于三链数的候选数
                  const removableNotes = cellNotes.filter(note => allNotes.includes(note));
                  if (removableNotes.length > 0) {
                    affectedCells.push({
                      row,
                      col,
                      removableNotes
                    });
                  }
                }
              }
              
              if (affectedCells.length > 0) {
                const cells = [[cell1.row, cell1.col], [cell2.row, cell2.col], [cell3.row, cell3.col]];
                const targetCells = affectedCells.map(cell => [cell.row, cell.col]);
                const values = allNotes;
                const boxNum = boxRow * 3 + boxCol + 1;
                
                // 构建result对象
                const result = {
                  action: 'removeCandidates',
                  cells: affectedCells.map(cell => ({
                    cell: [cell.row, cell.col],
                    action: 'remove',
                    values: cell.removableNotes
                  }))
                };
                
                return {
                  type: 'nakedTripleBox',
                  description: `显性三链数法(宫${boxNum})`,
                  cells,
                  values,
                  targetCells,
                  removableCandidates: values,
                  message: `在宫${boxNum}中，单元格${cells.map(c => `(${c[0] + 1},${c[1] + 1})`).join(', ')}形成了显性三链数${values.join(', ')}`,
                  technique: '显性三链数法',
                  reason: `这三个单元格的候选数全部来自${values.join(', ')}，且这三个数字都出现了`,
                  result
                };
              }
            }
          }
        }
      }
    }
  }
  return null;
}

/**
 * 隐性三链数法 - 检查行中的隐性三链数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findHiddenTriplesInRow(board, pencilNotes, solution = null) {
  for (let row = 0; row < 9; row++) {
    // 统计每个数字可能出现的单元格位置
    const digitPositions = {};
    for (let digit = 1; digit <= 9; digit++) {
      digitPositions[digit] = [];
    }
    
    // 收集行中每个数字可能出现的位置
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0 && pencilNotes[row][col]) {
        pencilNotes[row][col].forEach(digit => {
          digitPositions[digit].push(col);
        });
      }
    }
    
    // 检查所有可能的数字组合
    const digits = Object.keys(digitPositions).filter(d => digitPositions[d].length > 0);
    
    for (let i = 0; i < digits.length - 2; i++) {
      for (let j = i + 1; j < digits.length - 1; j++) {
        for (let k = j + 1; k < digits.length; k++) {
          const d1 = parseInt(digits[i]);
          const d2 = parseInt(digits[j]);
          const d3 = parseInt(digits[k]);
          
          // 获取三个数字的位置集合
          const pos1 = new Set(digitPositions[d1]);
          const pos2 = new Set(digitPositions[d2]);
          const pos3 = new Set(digitPositions[d3]);
          
          // 合并三个位置集合
          const allPositions = new Set([...pos1, ...pos2, ...pos3]);
          
          // 隐性三链数的条件：三个数字只能出现在三个特定的单元格中
          if (allPositions.size === 3) {
            // 候选数保护检查
            let validTriple = true;
            if (solution) {
              const targetCols = Array.from(allPositions);
              let foundCount = 0;
              
              // 检查这三个数字是否在这三个单元格的答案中
              targetCols.forEach(col => {
                const sol = solution[row][col];
                if (sol === d1 || sol === d2 || sol === d3) {
                  foundCount++;
                }
              });
              
              // 应该恰好找到三个匹配（每个数字对应一个单元格）
              if (foundCount !== 3) {
                validTriple = false;
              }
            }
            
            if (!validTriple) continue;
            
            // 检查这三个单元格是否有除了这三个数字以外的候选数
            const targetCols = Array.from(allPositions);
            const affectedCells = [];
            
            targetCols.forEach(col => {
              const cellNotes = pencilNotes[row][col];
              const removableNotes = cellNotes.filter(note => note !== d1 && note !== d2 && note !== d3);
              
              if (removableNotes.length > 0) {
                affectedCells.push({
                  row,
                  col,
                  removableNotes
                });
              }
            });
            
            if (affectedCells.length > 0) {
              const cells = targetCols.map(col => [row, col]);
              const values = [d1, d2, d3];
              
              // 构建result对象
              const result = {
                action: 'removeCandidates',
                cells: affectedCells.map(cell => ({
                  cell: [cell.row, cell.col],
                  action: 'remove',
                  values: cell.removableNotes
                }))
              };
              
              return {
                type: 'hiddenTripleRow',
                description: `隐性三链数法(行${row + 1})`,
                cells,
                values,
                targetCells: cells,
                removableCandidates: affectedCells.flatMap(cell => cell.removableNotes),
                message: `在行${row + 1}中，数字${values.join(', ')}只能出现在单元格${cells.map(c => `(${c[0] + 1},${c[1] + 1})`).join(', ')}`,
                technique: '隐性三链数法',
                reason: `这三个数字只能出现在三个特定的单元格中`,
                result
              };
            }
          }
        }
      }
    }
  }
  return null;
}

/**
 * 隐性三链数法 - 检查列中的隐性三链数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findHiddenTriplesInCol(board, pencilNotes, solution = null) {
  for (let col = 0; col < 9; col++) {
    // 统计每个数字可能出现的单元格位置
    const digitPositions = {};
    for (let digit = 1; digit <= 9; digit++) {
      digitPositions[digit] = [];
    }
    
    // 收集列中每个数字可能出现的位置
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === 0 && pencilNotes[row][col]) {
        pencilNotes[row][col].forEach(digit => {
          digitPositions[digit].push(row);
        });
      }
    }
    
    // 检查所有可能的数字组合
    const digits = Object.keys(digitPositions).filter(d => digitPositions[d].length > 0);
    
    for (let i = 0; i < digits.length - 2; i++) {
      for (let j = i + 1; j < digits.length - 1; j++) {
        for (let k = j + 1; k < digits.length; k++) {
          const d1 = parseInt(digits[i]);
          const d2 = parseInt(digits[j]);
          const d3 = parseInt(digits[k]);
          
          // 获取三个数字的位置集合
          const pos1 = new Set(digitPositions[d1]);
          const pos2 = new Set(digitPositions[d2]);
          const pos3 = new Set(digitPositions[d3]);
          
          // 合并三个位置集合
          const allPositions = new Set([...pos1, ...pos2, ...pos3]);
          
          // 隐性三链数的条件：三个数字只能出现在三个特定的单元格中
          if (allPositions.size === 3) {
            // 候选数保护检查
            let validTriple = true;
            if (solution) {
              const targetRows = Array.from(allPositions);
              let foundCount = 0;
              
              // 检查这三个数字是否在这三个单元格的答案中
              targetRows.forEach(row => {
                const sol = solution[row][col];
                if (sol === d1 || sol === d2 || sol === d3) {
                  foundCount++;
                }
              });
              
              // 应该恰好找到三个匹配（每个数字对应一个单元格）
              if (foundCount !== 3) {
                validTriple = false;
              }
            }
            
            if (!validTriple) continue;
            
            // 检查这三个单元格是否有除了这三个数字以外的候选数
            const targetRows = Array.from(allPositions);
            const affectedCells = [];
            
            targetRows.forEach(row => {
              const cellNotes = pencilNotes[row][col];
              const removableNotes = cellNotes.filter(note => note !== d1 && note !== d2 && note !== d3);
              
              if (removableNotes.length > 0) {
                affectedCells.push({
                  row,
                  col,
                  removableNotes
                });
              }
            });
            
            if (affectedCells.length > 0) {
              const cells = targetRows.map(row => [row, col]);
              const values = [d1, d2, d3];
              
              // 构建result对象
              const result = {
                action: 'removeCandidates',
                cells: affectedCells.map(cell => ({
                  cell: [cell.row, cell.col],
                  action: 'remove',
                  values: cell.removableNotes
                }))
              };
              
              return {
                type: 'hiddenTripleCol',
                description: `隐性三链数法(列${col + 1})`,
                cells,
                values,
                targetCells: cells,
                removableCandidates: affectedCells.flatMap(cell => cell.removableNotes),
                message: `在列${col + 1}中，数字${values.join(', ')}只能出现在单元格${cells.map(c => `(${c[0] + 1},${c[1] + 1})`).join(', ')}`,
                technique: '隐性三链数法',
                reason: `这三个数字只能出现在三个特定的单元格中`,
                result
              };
            }
          }
        }
      }
    }
  }
  return null;
}

/**
 * 隐性三链数法 - 检查宫中的隐性三链数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findHiddenTriplesInBox(board, pencilNotes, solution = null) {
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      // 统计每个数字可能出现的单元格位置
      const digitPositions = {};
      for (let digit = 1; digit <= 9; digit++) {
        digitPositions[digit] = [];
      }
      
      // 收集宫中每个数字可能出现的位置
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const row = boxRow * 3 + r;
          const col = boxCol * 3 + c;
          if (board[row][col] === 0 && pencilNotes[row][col]) {
            pencilNotes[row][col].forEach(digit => {
              digitPositions[digit].push(`${row}-${col}`);
            });
          }
        }
      }
      
      // 检查所有可能的数字组合
      const digits = Object.keys(digitPositions).filter(d => digitPositions[d].length > 0);
      
      for (let i = 0; i < digits.length - 2; i++) {
        for (let j = i + 1; j < digits.length - 1; j++) {
          for (let k = j + 1; k < digits.length; k++) {
            const d1 = parseInt(digits[i]);
            const d2 = parseInt(digits[j]);
            const d3 = parseInt(digits[k]);
            
            // 获取三个数字的位置集合
            const pos1 = new Set(digitPositions[d1]);
            const pos2 = new Set(digitPositions[d2]);
            const pos3 = new Set(digitPositions[d3]);
            
            // 合并三个位置集合
            const allPositions = new Set([...pos1, ...pos2, ...pos3]);
            
            // 隐性三链数的条件：三个数字只能出现在三个特定的单元格中
            if (allPositions.size === 3) {
              // 候选数保护检查
              let validTriple = true;
              if (solution) {
                const targetPositions = Array.from(allPositions);
                let foundCount = 0;
                
                // 检查这三个数字是否在这三个单元格的答案中
                targetPositions.forEach(pos => {
                  const [row, col] = pos.split('-').map(Number);
                  const sol = solution[row][col];
                  if (sol === d1 || sol === d2 || sol === d3) {
                    foundCount++;
                  }
                });
                
                // 应该恰好找到三个匹配（每个数字对应一个单元格）
                if (foundCount !== 3) {
                  validTriple = false;
                }
              }
              
              if (!validTriple) continue;
              
              // 检查这三个单元格是否有除了这三个数字以外的候选数
              const targetPositions = Array.from(allPositions);
              const affectedCells = [];
              const cells = [];
              
              targetPositions.forEach(pos => {
                const [row, col] = pos.split('-').map(Number);
                cells.push([row, col]);
                const cellNotes = pencilNotes[row][col];
                const removableNotes = cellNotes.filter(note => note !== d1 && note !== d2 && note !== d3);
                
                if (removableNotes.length > 0) {
                  affectedCells.push({
                    row,
                    col,
                    removableNotes
                  });
                }
              });
              
              if (affectedCells.length > 0) {
                const values = [d1, d2, d3];
                const boxNum = boxRow * 3 + boxCol + 1;
                
                // 构建result对象
                const result = {
                  action: 'removeCandidates',
                  cells: affectedCells.map(cell => ({
                    cell: [cell.row, cell.col],
                    action: 'remove',
                    values: cell.removableNotes
                  }))
                };
                
                return {
                  type: 'hiddenTripleBox',
                  description: `隐性三链数法(宫${boxNum})`,
                  cells,
                  values,
                  targetCells: cells,
                  removableCandidates: affectedCells.flatMap(cell => cell.removableNotes),
                  message: `在宫${boxNum}中，数字${values.join(', ')}只能出现在单元格${cells.map(c => `(${c[0] + 1},${c[1] + 1})`).join(', ')}`,
                  technique: '隐性三链数法',
                  reason: `这三个数字只能出现在三个特定的单元格中`,
                  result
                };
              }
            }
          }
        }
      }
    }
  }
  return null;
}

/**
 * 显性三链数法主函数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findNakedTriples(board, pencilNotes, solution = null) {
  // 按优先级顺序检查行、列、宫
  return findNakedTriplesInRow(board, pencilNotes, solution) || 
         findNakedTriplesInCol(board, pencilNotes, solution) || 
         findNakedTriplesInBox(board, pencilNotes, solution);
}

/**
 * 隐性三链数法主函数
 * @param {Array} board - 数独棋盘
 * @param {Array} pencilNotes - 候选数数组
 * @param {Array} solution - 答案数组（可选，用于候选数保护）
 * @returns {Object|null} - 找到的技巧应用信息或null
 */
function findHiddenTriples(board, pencilNotes, solution = null) {
  // 按优先级顺序检查行、列、宫
  return findHiddenTriplesInRow(board, pencilNotes, solution) || 
         findHiddenTriplesInCol(board, pencilNotes, solution) || 
         findHiddenTriplesInBox(board, pencilNotes, solution);
}

// 三链数技巧集合
const tripleTechniques = {
  findNakedTriples,
  findHiddenTriples
};

// 三链数技巧多语言名称映射
export const tripleTechniqueNames = {
  'zh-CN': {
    findNakedTriples: '显性三链数法',
    findHiddenTriples: '隐性三链数法'
  },
  'en-US': {
    findNakedTriples: 'Naked Triples',
    findHiddenTriples: 'Hidden Triples'
  },
  'ja-JP': {
    findNakedTriples: 'ネイキッドトリプル',
    findHiddenTriples: 'ヒドゥントリプル'
  }
};

export default tripleTechniques;
export { findNakedTriples, findHiddenTriples };