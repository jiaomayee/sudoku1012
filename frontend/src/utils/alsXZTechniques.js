// ALS-XZ技巧实现

/**
 * 查找ALS-XZ技巧机会
 * ALS-XZ技巧是一种高级数独技巧，用于删除候选数
 * @param {Array<Array<number>>} board - 当前数独棋盘
 * @param {Object} pencilNotes - 铅笔标注数据 {"row-col": [候选数数组]}
 * @returns {Array} - 找到的ALS-XZ技巧机会数组
 */
export const findALSXZ = (board, pencilNotes = {}) => {
  const opportunities = [];
  
  // 获取所有空单元格的候选数信息
  const cellCandidates = getCellCandidates(board, pencilNotes);
  
  // 生成所有可能的ALS（Almost Locked Sets）
  const allALS = generateAllALS(cellCandidates);
  
  // 检查每对ALS之间是否形成ALS-XZ模式
  for (let i = 0; i < allALS.length; i++) {
    for (let j = i + 1; j < allALS.length; j++) {
      const als1 = allALS[i];
      const als2 = allALS[j];
      
      // 检查ALS1和ALS2是否相交
      const intersection = getIntersection(als1.cells, als2.cells);
      if (intersection.length > 0) {
        continue; // ALS不能相交
      }
      
      // 寻找X（限制数）和Z（删除数）
          const result = findXZ(als1, als2, board, pencilNotes);
          if (result) {
            const { x, z, commonCells } = result;
            
            // 查找可以删除候选数Z的单元格
            const removableCandidates = findRemovableCandidates(board, pencilNotes, commonCells, z);
        
        if (removableCandidates.length > 0) {
          // 收集ALS1和ALS2中包含X的单元格
          const als1XCells = [];
          const als2XCells = [];
          
          // 收集ALS1和ALS2中包含Z的单元格
          const als1ZCells = [];
          const als2ZCells = [];
          
          // 收集ALS1和ALS2中包含其他候选数的单元格
          const als1OtherCells = [];
          const als2OtherCells = [];
          
          // 为每个ALS中的单元格分类
          for (const [row, col] of als1.cells) {
            const cellKey = `${row}-${col}`;
            const cellCandidates = pencilNotes[cellKey] || [];
            
            if (cellCandidates.includes(x)) {
              als1XCells.push([row, col]);
            }
            if (cellCandidates.includes(z)) {
              als1ZCells.push([row, col]);
            }
            if (!cellCandidates.includes(x) && !cellCandidates.includes(z)) {
              als1OtherCells.push([row, col]);
            }
          }
          
          for (const [row, col] of als2.cells) {
            const cellKey = `${row}-${col}`;
            const cellCandidates = pencilNotes[cellKey] || [];
            
            if (cellCandidates.includes(x)) {
              als2XCells.push([row, col]);
            }
            if (cellCandidates.includes(z)) {
              als2ZCells.push([row, col]);
            }
            if (!cellCandidates.includes(x) && !cellCandidates.includes(z)) {
              als2OtherCells.push([row, col]);
            }
          }
          
          // 确保有可删除的候选数
          if (removableCandidates.length > 0) {
            opportunities.push({
              type: 'alsXZ',
              description: `ALS-XZ技巧：X=${x}, Z=${z}`,
              als1: {
                cells: als1.cells,
                candidates: als1.candidates
              },
              als2: {
                cells: als2.cells,
                candidates: als2.candidates
              },
              x: x,
              z: z,
              commonCells: commonCells,
              removableCandidates: removableCandidates,
              cells: [...als1.cells, ...als2.cells],
              sourceCells: [...als1.cells, ...als2.cells],
              targetCells: removableCandidates.map(rc => [rc.row, rc.col]),
              values: [x, z],
              // 为高亮指示添加额外信息
              highlightInfo: {
                // X相关高亮
                xCells: {
                  als1: als1XCells,
                  als2: als2XCells
                },
                // Z相关高亮
                zCells: {
                  als1: als1ZCells,
                  als2: als2ZCells
                },
                // 其他候选数高亮
                otherCells: {
                  als1: als1OtherCells,
                  als2: als2OtherCells
                },
                // 目标删除候选数（与XYZ-Wing保持一致）
                targetCandidates: removableCandidates,
                // 所有ALS单元格信息
                als1Cells: als1.cells,
                als2Cells: als2.cells,
                // 所有候选数信息，用于渲染高亮
                candidates: generateAllCandidates(als1.cells, als2.cells, pencilNotes)
              },
              // 更详细的提示信息
              message: `ALS-XZ技巧：在两个几乎锁定集(ALS)中，X=${x}是限制数，Z=${z}是删除数。可以从${removableCandidates.length}个单元格中删除候选数${z}。`
            });
            
            // 限制解题机会数量，当达到5条时停止求解
            if (opportunities.length >= 5) {
              return opportunities;
            }
          }
        }
      }
    }
  }
  
  return opportunities;
};

/**
 * 生成所有候选数信息，用于高亮显示
 */
const generateAllCandidates = (als1Cells, als2Cells, pencilNotes) => {
  const allCandidates = [];
  const allCells = [...als1Cells, ...als2Cells];
  
  // 为每个单元格收集所有候选数
  for (const [row, col] of allCells) {
    const cellKey = `${row}-${col}`;
    const candidates = pencilNotes[cellKey] || [];
    
    for (const value of candidates) {
      allCandidates.push({
        row: row,
        col: col,
        value: value
      });
    }
  }
  
  return allCandidates;
};

/**
 * 获取单元格的候选数信息
 */
const getCellCandidates = (board, pencilNotes) => {
  const cellCandidates = [];
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) { // 只处理空单元格
        const cellKey = `${row}-${col}`;
        const candidates = pencilNotes[cellKey] || [];
        if (candidates.length > 0) {
          cellCandidates.push({
            row: row,
            col: col,
            candidates: candidates,
            box: Math.floor(row / 3) * 3 + Math.floor(col / 3)
          });
        }
      }
    }
  }
  
  return cellCandidates;
};

/**
 * 生成所有可能的ALS
 */
const generateAllALS = (cellCandidates) => {
  const allALS = [];
  const maxALSsize = 4; // 限制ALS的最大大小以提高性能
  
  // 按区域（行、列、宫）生成ALS
  for (let areaType of ['row', 'col', 'box']) {
    for (let areaIndex = 0; areaIndex < 9; areaIndex++) {
      const areaCells = cellCandidates.filter(cell => {
        if (areaType === 'row') return cell.row === areaIndex;
        if (areaType === 'col') return cell.col === areaIndex;
        return cell.box === areaIndex;
      });
      
      // 生成所有可能的组合作为ALS候选
      for (let size = 2; size <= Math.min(areaCells.length, maxALSsize); size++) {
        const combinations = generateCombinations(areaCells, size);
        
        for (let combination of combinations) {
          const allCandidates = new Set();
          combination.forEach(cell => {
            cell.candidates.forEach(num => allCandidates.add(num));
          });
          
          // ALS的定义：n个单元格包含n+1个候选数
          if (allCandidates.size === size + 1) {
            allALS.push({
              cells: combination.map(cell => [cell.row, cell.col]),
              candidates: Array.from(allCandidates),
              areaType: areaType,
              areaIndex: areaIndex
            });
          }
        }
      }
    }
  }
  
  return allALS;
};

/**
 * 生成组合
 */
const generateCombinations = (array, size) => {
  const results = [];
  
  const backtrack = (start, currentCombination) => {
    if (currentCombination.length === size) {
      results.push([...currentCombination]);
      return;
    }
    
    for (let i = start; i < array.length; i++) {
      currentCombination.push(array[i]);
      backtrack(i + 1, currentCombination);
      currentCombination.pop();
    }
  };
  
  backtrack(0, []);
  return results;
};

/**
 * 获取两个单元格集合的交集
 */
const getIntersection = (cells1, cells2) => {
  const cellSet = new Set(cells1.map(cell => `${cell[0]}-${cell[1]}`));
  return cells2.filter(cell => cellSet.has(`${cell[0]}-${cell[1]}`));
};

/**
 * 检查两个单元格是否能互相看到（同行、同列或同宫）
 */
const canSeeEachOther = (row1, col1, row2, col2) => {
  // 同一行
  if (row1 === row2) return true;
  // 同一列
  if (col1 === col2) return true;
  // 同一宫
  if (Math.floor(row1 / 3) === Math.floor(row2 / 3) && 
      Math.floor(col1 / 3) === Math.floor(col2 / 3)) {
    return true;
  }
  return false;
};

/**
 * 验证候选数x是否为两个ALS的RCC（Restricted Common Candidate）
 * RCC的定义：ALS1中所有包含x的单元格都能看到ALS2中所有包含x的单元格
 */
const isRestrictedCommon = (als1, als2, x, pencilNotes) => {
  // 找出ALS1中包含x的所有单元格
  const als1XCells = [];
  for (const [row, col] of als1.cells) {
    const cellKey = `${row}-${col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    if (cellCandidates.includes(x)) {
      als1XCells.push([row, col]);
    }
  }
  
  // 找出ALS2中包含x的所有单元格
  const als2XCells = [];
  for (const [row, col] of als2.cells) {
    const cellKey = `${row}-${col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    if (cellCandidates.includes(x)) {
      als2XCells.push([row, col]);
    }
  }
  
  // 如果任何一个ALS中没有x，则x不是RCC
  if (als1XCells.length === 0 || als2XCells.length === 0) {
    return false;
  }
  
  // 验证ALS1中每个包含x的单元格都能看到ALS2中所有包含x的单元格
  for (const [row1, col1] of als1XCells) {
    for (const [row2, col2] of als2XCells) {
      if (!canSeeEachOther(row1, col1, row2, col2)) {
        return false; // 有一对不能互相看到，x不是RCC
      }
    }
  }
  
  return true; // 所有包含x的单元格都能互相看到，x是RCC
};

/**
 * 寻找X和Z
 */
const findXZ = (als1, als2, board, pencilNotes) => {
  // X是两个ALS共享的候选数
  const commonCandidates = als1.candidates.filter(num => als2.candidates.includes(num));
  
  for (const x of commonCandidates) {
    // 验证X是否是RCC（Restricted Common Candidate）
    // RCC的定义：ALS1中所有包含X的单元格都能看到ALS2中所有包含X的单元格
    if (!isRestrictedCommon(als1, als2, x, pencilNotes)) {
      continue; // X不是RCC，跳过
    }
    
    // Z是als1中的候选数（除了X）
    for (const z of als1.candidates) {
      if (z === x) continue;
      
      // Z必须在als2中存在
      if (als2.candidates.includes(z)) {
        // 找到同时能看到als1和als2中所有包含Z的单元格的单元格
        const commonCells = findCommonCells(als1, als2, z, board, pencilNotes);
        
        if (commonCells.length > 0) {
          return { x, z, commonCells };
        }
      }
    }
  }
  
  return null;
};

/**
 * 查找同时能看到als1和als2中所有包含Z的单元格的单元格
 */
const findCommonCells = (als1, als2, z, board, pencilNotes) => {
  const commonCells = [];
  
  // 找出als1中包含Z的单元格
  const als1Zcells = [];
  for (const [row, col] of als1.cells) {
    const cellKey = `${row}-${col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    if (cellCandidates.includes(z)) {
      als1Zcells.push([row, col]);
    }
  }
  
  // 找出als2中包含Z的单元格
  const als2Zcells = [];
  for (const [row, col] of als2.cells) {
    const cellKey = `${row}-${col}`;
    const cellCandidates = pencilNotes[cellKey] || [];
    if (cellCandidates.includes(z)) {
      als2Zcells.push([row, col]);
    }
  }
  
  // 只有当两个ALS都有包含Z的单元格时，才继续查找
  if (als1Zcells.length === 0 || als2Zcells.length === 0) {
    return [];
  }
  
  // 遍历所有空单元格，找到同时能看到als1Zcells和als2Zcells中所有单元格的单元格
  // 这些单元格不能是ALS1或ALS2的一部分
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // 跳过已填入数字的单元格
      if (board[row][col] !== 0) continue;
      
      // 跳过ALS1和ALS2中的单元格
      const isInAls1 = als1.cells.some(([r, c]) => r === row && c === col);
      const isInAls2 = als2.cells.some(([r, c]) => r === row && c === col);
      if (isInAls1 || isInAls2) continue;
      
      // 检查是否能看到als1Zcells中的所有单元格
      const canSeeAls1 = als1Zcells.every(([r1, c1]) => {
        return row === r1 || col === c1 || (Math.floor(row / 3) === Math.floor(r1 / 3) && Math.floor(col / 3) === Math.floor(c1 / 3));
      });
      
      // 检查是否能看到als2Zcells中的所有单元格
      const canSeeAls2 = als2Zcells.every(([r2, c2]) => {
        return row === r2 || col === c2 || (Math.floor(row / 3) === Math.floor(r2 / 3) && Math.floor(col / 3) === Math.floor(c2 / 3));
      });
      
      if (canSeeAls1 && canSeeAls2) {
        commonCells.push({ row, col });
      }
    }
  }
  
  return commonCells;
};

/**
 * 查找可以删除候选数Z的单元格
 */
const findRemovableCandidates = (board, pencilNotes, commonCells, z) => {
  const removableCandidates = [];
  
  for (const { row, col } of commonCells) {
    // 跳过已填入数字的单元格
    if (board[row][col] !== 0) continue;
    
    const cellKey = `${row}-${col}`;
    const candidates = pencilNotes[cellKey] || [];
    
    // 如果单元格包含候选数Z，则可以删除
    if (candidates.includes(z)) {
      removableCandidates.push({
        row: row,
        col: col,
        value: z
      });
    }
  }
  
  return removableCandidates;
};