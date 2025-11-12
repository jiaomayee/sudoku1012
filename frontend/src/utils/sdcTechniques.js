/**
 * Sue de Coq (SDC) 技巧实现
 * 基于HoDoKu的原始实现进行移植
 * 
 * 原始定义（来自Player's Forum）：
 * Consider the set of unfilled cells C that lies at the intersection of Box B and Row (or Column) R.
 * Suppose |C|>=2. Let V be the set of candidate values to occur in C. Suppose |V|>= |C|+2.
 * The pattern requires that we find |V|-|C| cells in B and R, with at least one cell in each,
 * with candidates drawn entirely from V. Label the sets of cells CB and CR and their candidates VB and VR.
 * Crucially, no candidate is allowed to appear in VB and VR. Then C must contain V\(VB U VR) [possibly empty],
 * |VB|-|CB| elements of VB and |VR|-|CR| elements of VR.
 * 
 * 扩展：
 * - C不必包含intersection的所有单元格
 * - VB和VR可以包含额外候选数，但每个额外候选数需要一个额外单元格
 */

/**
 * 主入口：查找所有SDC机会
 * 限制最多返回5条机会，防止程序卡顿
 */
export const findSDC = (board, pencilNotes = {}, solution = null) => {
  const opportunities = [];
  
  // 获取所有空单元格
  const emptyCells = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        emptyCells.push({ row, col });
      }
    }
  }
  
  // 检查每一行与每个宫的交叉
  for (let row = 0; row < 9; row++) {
    const boxRow = Math.floor(row / 3);
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const boxIndex = boxRow * 3 + boxCol;
      const result = checkRowBoxIntersection(board, pencilNotes, row, boxIndex, emptyCells, solution);
      if (result.length > 0) {
        opportunities.push(...result);
        
        // 限制解题机会数量，当达到5条时停止求解
        if (opportunities.length >= 5) {
          console.log(`SDC原始结果: ${opportunities.length}条（已达到限制）`);
          return opportunities;
        }
      }
    }
  }
  
  // 检查每一列与每个宫的交叉
  for (let col = 0; col < 9; col++) {
    const boxCol = Math.floor(col / 3);
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      const boxIndex = boxRow * 3 + boxCol;
      const result = checkColBoxIntersection(board, pencilNotes, col, boxIndex, emptyCells, solution);
      if (result.length > 0) {
        opportunities.push(...result);
        
        // 限制解题机会数量，当达到5条时停止求解
        if (opportunities.length >= 5) {
          console.log(`SDC原始结果: ${opportunities.length}条（已达到限制）`);
          return opportunities;
        }
      }
    }
  }
  
  console.log(`SDC原始结果: ${opportunities.length}条`);
  
  // 去重
  const uniqueOpportunities = deduplicateSDC(opportunities);
  console.log(`去重后: ${uniqueOpportunities.length}条`);
  
  // 按删除数量排序
  uniqueOpportunities.sort((a, b) => b.removableCandidates.length - a.removableCandidates.length);
  
  return uniqueOpportunities;
};

/**
 * 检查行与宫的交叉
 */
function checkRowBoxIntersection(board, pencilNotes, row, boxIndex, emptyCells, solution) {
  const opportunities = [];
  const boxRow = Math.floor(boxIndex / 3);
  const boxCol = boxIndex % 3;
  const boxStartCol = boxCol * 3;
  
  // 获取交叉点的空单元格
  const intersection = [];
  for (let c = 0; c < 3; c++) {
    const col = boxStartCol + c;
    if (board[row][col] === 0) {
      const cellKey = `${row}-${col}`;
      const candidates = pencilNotes[cellKey] || [];
      if (candidates.length >= 2) {
        intersection.push({ row, col, candidates });
      }
    }
  }
  
  if (intersection.length < 2) {
    return opportunities;
  }
  
  // 检查所有intersection的组合（2个或3个单元格）
  checkIntersectionCombinations(board, pencilNotes, intersection, row, boxIndex, true, emptyCells, solution, opportunities);
  
  return opportunities;
}

/**
 * 检查列与宫的交叉
 */
function checkColBoxIntersection(board, pencilNotes, col, boxIndex, emptyCells, solution) {
  const opportunities = [];
  const boxRow = Math.floor(boxIndex / 3);
  const boxCol = boxIndex % 3;
  const boxStartRow = boxRow * 3;
  
  // 获取交叉点的空单元格
  const intersection = [];
  for (let r = 0; r < 3; r++) {
    const row = boxStartRow + r;
    if (board[row][col] === 0) {
      const cellKey = `${row}-${col}`;
      const candidates = pencilNotes[cellKey] || [];
      if (candidates.length >= 2) {
        intersection.push({ row, col, candidates });
      }
    }
  }
  
  if (intersection.length < 2) {
    return opportunities;
  }
  
  // 检查所有intersection的组合（2个或3个单元格）
  checkIntersectionCombinations(board, pencilNotes, intersection, col, boxIndex, false, emptyCells, solution, opportunities);
  
  return opportunities;
}

/**
 * 检查intersection的所有组合
 * 根据Hodoku: 可以是2个单元格或3个单元格
 */
function checkIntersectionCombinations(board, pencilNotes, intersection, lineIndex, boxIndex, isRow, emptyCells, solution, opportunities) {
  const max = intersection.length;
  
  // 检查2个单元格的组合
  for (let i = 0; i < max - 1; i++) {
    for (let j = i + 1; j < max; j++) {
      const cells = [intersection[i], intersection[j]];
      const cands = getCandidateUnion(cells);
      const nPlus = cands.length - cells.length;
      
      if (nPlus >= 2) {
        // 可能的SDC
        checkSDCPattern(board, pencilNotes, cells, cands, lineIndex, boxIndex, isRow, emptyCells, solution, opportunities);
      }
    }
  }
  
  // 检查3个单元格的组合
  if (max >= 3) {
    for (let i = 0; i < max - 2; i++) {
      for (let j = i + 1; j < max - 1; j++) {
        for (let k = j + 1; k < max; k++) {
          const cells = [intersection[i], intersection[j], intersection[k]];
          const cands = getCandidateUnion(cells);
          const nPlus = cands.length - cells.length;
          
          if (nPlus >= 2) {
            // 可能的SDC
            checkSDCPattern(board, pencilNotes, cells, cands, lineIndex, boxIndex, isRow, emptyCells, solution, opportunities);
          }
        }
      }
    }
  }
}

/**
 * 获取候选数并集
 */
function getCandidateUnion(cells) {
  const union = new Set();
  for (const cell of cells) {
    for (const cand of cell.candidates) {
      union.add(cand);
    }
  }
  return Array.from(union).sort((a, b) => a - b);
}

/**
 * 检查SDC模式
 * 这是核心逻辑，对应Hodoku的checkHouses方法
 */
function checkSDCPattern(board, pencilNotes, intersectionCells, intersectionCands, lineIndex, boxIndex, isRow, emptyCells, solution, opportunities) {
  const nPlus = intersectionCands.length - intersectionCells.length;
  const intersectionCandSet = arrayToMask(intersectionCands);
  
  // 获取行/列中可用的单元格（不在intersection中）
  const lineCells = getLineCells(board, pencilNotes, lineIndex, isRow, intersectionCells, boxIndex);
  
  // 获取宫中可用的单元格（不在intersection中）
  const boxCells = getBoxCells(board, pencilNotes, boxIndex, isRow, intersectionCells, lineIndex);
  
  if (lineCells.length === 0 || boxCells.length === 0) {
    return;
  }
  
  // 第一次搜索：在行/列中找单元格组合
  searchLineCombinations(board, pencilNotes, lineCells, boxCells, intersectionCells, intersectionCandSet, nPlus, isRow, lineIndex, boxIndex, solution, opportunities);
}

/**
 * 在行/列中搜索单元格组合
 * 对应Hodoku的checkHouses第一次调用（secondCheck=false）
 */
function searchLineCombinations(board, pencilNotes, lineCells, boxCells, intersectionCells, intersectionCandSet, nPlus, isRow, lineIndex, boxIndex, solution, opportunities) {
  const maxCells = lineCells.length;
  
  // 使用递归搜索所有可能的单元格组合
  function search(startIndex, selectedIndices, selectedCandMask, depth) {
    // 计算当前组合的有效候选数和额外候选数
    const containedCands = selectedCandMask & intersectionCandSet; // 来自intersection的候选数
    const extraCands = selectedCandMask & ~intersectionCandSet; // 额外候选数
    const anzContained = countBits(containedCands);
    const anzExtra = countBits(extraCands);
    
    // Hodoku的关键判断：
    // - anzContained > 0：必须包含intersection的候选数
    // - depth > anzExtra：单元格数必须大于额外候选数（确保有效）
    // - depth - anzExtra < nPlus：有效单元格数必须小于nPlus（还要给box留空间）
    if (anzContained > 0 && depth > anzExtra && depth - anzExtra < nPlus) {
      // 找到有效的line组合，现在搜索box组合
      const lineActSet = selectedIndices;
      const lineActCandSet = selectedCandMask;
      
      // box中不允许line组合的候选数（除了额外候选数，它们可以在两边都有）
      let blockAllowedCandSet = ~lineActCandSet;
      blockAllowedCandSet |= extraCands; // 允许额外候选数
      
      // 搜索box组合
      const remainingNPlus = nPlus - (depth - anzExtra);
      searchBoxCombinations(board, pencilNotes, boxCells, lineCells, lineActSet, lineActCandSet, intersectionCells, intersectionCandSet, remainingNPlus, blockAllowedCandSet, isRow, lineIndex, boxIndex, solution, opportunities);
    }
    
    // 继续搜索下一层
    if (startIndex < maxCells) {
      for (let i = startIndex; i < maxCells; i++) {
        const cell = lineCells[i];
        const cellCandMask = arrayToMask(cell.candidates);
        const newIndices = [...selectedIndices, i];
        const newCandMask = selectedCandMask | cellCandMask;
        
        //只搜索候选数在intersectionCandSet中或有少量额外候选数的组合
        if ((newCandMask & ~intersectionCandSet) === newCandMask) {
          // 所有候选数都不在intersection中，跳过
          continue;
        }
        
        search(i + 1, newIndices, newCandMask, depth + 1);
      }
    }
  }
  
  search(0, [], 0, 0);
}

/**
 * 在宯中搜索单元格组合
 * 对应Hodoku的checkHouses第二次调用（secondCheck=true）
 */
function searchBoxCombinations(board, pencilNotes, boxCells, lineCells, lineActSet, lineActCandSet, intersectionCells, intersectionCandSet, nPlus, allowedCandSet, isRow, lineIndex, boxIndex, solution, opportunities) {
  const maxCells = boxCells.length;
  
  function search(startIndex, selectedIndices, selectedCandMask, depth) {
    const containedCands = selectedCandMask & intersectionCandSet;
    const extraCands = selectedCandMask & ~intersectionCandSet;
    const anzContained = countBits(containedCands);
    const anzExtra = countBits(extraCands);
    
    // Hodoku的关键判断：
    // - anzContained > 0：必须包含intersection的候选数
    // - depth - anzExtra == nPlus：有效单元格数必须正好等于nPlus
    if (anzContained > 0 && depth - anzExtra === nPlus) {
      // 找到有效的SDC！检查是否可以删除候选数
      const blockActSet = selectedIndices;
      const blockActCandSet = selectedCandMask;
      
      // 检查VR和VB是否有交集（关键约束！）
      const lineOnlyCands = lineActCandSet & intersectionCandSet;
      const blockOnlyCands = blockActCandSet & intersectionCandSet;
      if ((lineOnlyCands & blockOnlyCands) !== 0) {
        // 有交集，不是有效的SDC
        return;
      }
      
      // 计算可删除的候选数
      const result = findRemovableCandidates(
        board,
        pencilNotes,
        intersectionCells,
        intersectionCandSet,
        lineActSet,
        lineActCandSet,
        blockActSet,
        blockActCandSet,
        lineCells,
        boxCells,
        isRow,
        lineIndex,
        boxIndex,
        solution
      );
      
      if (result && result.removableCandidates.length > 0) {
        opportunities.push(result);
      }
    }
    
    // 继续搜索
    if (startIndex < maxCells) {
      for (let i = startIndex; i < maxCells; i++) {
        const cell = boxCells[i];
        const cellCandMask = arrayToMask(cell.candidates);
        
        // 候选数必须符合allowedCandSet的约束
        if ((cellCandMask & ~allowedCandSet) !== 0) {
          // 包含不允许的候选数，跳过
          continue;
        }
        
        const newIndices = [...selectedIndices, i];
        const newCandMask = selectedCandMask | cellCandMask;
        
        search(i + 1, newIndices, newCandMask, depth + 1);
      }
    }
  }
  
  search(0, [], 0, 0);
}

/**
 * 获取行/列中的可用单元格
 */
function getLineCells(board, pencilNotes, lineIndex, isRow, intersectionCells, boxIndex) {
  const cells = [];
  const intersectionSet = new Set(intersectionCells.map(c => `${c.row}-${c.col}`));
  
  if (isRow) {
    const row = lineIndex;
    const currentBoxCol = boxIndex % 3; // 当前宯的列索引
    for (let col = 0; col < 9; col++) {
      const boxCol = Math.floor(col / 3);
      if (boxCol === currentBoxCol) continue; // 跳过当前宯
      
      if (board[row][col] === 0) {
        const cellKey = `${row}-${col}`;
        if (!intersectionSet.has(cellKey)) {
          const candidates = pencilNotes[cellKey] || [];
          if (candidates.length > 0) {
            cells.push({ row, col, candidates });
          }
        }
      }
    }
  } else {
    const col = lineIndex;
    const currentBoxRow = Math.floor(boxIndex / 3); // 当前宯的行索引
    for (let row = 0; row < 9; row++) {
      const boxRow = Math.floor(row / 3);
      if (boxRow === currentBoxRow) continue; // 跳过当前宯
      
      if (board[row][col] === 0) {
        const cellKey = `${row}-${col}`;
        if (!intersectionSet.has(cellKey)) {
          const candidates = pencilNotes[cellKey] || [];
          if (candidates.length > 0) {
            cells.push({ row, col, candidates });
          }
        }
      }
    }
  }
  
  return cells;
}

/**
 * 获取宫中的可用单元格
 */
function getBoxCells(board, pencilNotes, boxIndex, isRow, intersectionCells, lineIndex) {
  const cells = [];
  const intersectionSet = new Set(intersectionCells.map(c => `${c.row}-${c.col}`));
  
  const boxRow = Math.floor(boxIndex / 3);
  const boxCol = boxIndex % 3;
  const boxStartRow = boxRow * 3;
  const boxStartCol = boxCol * 3;
  
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = boxStartRow + r;
      const col = boxStartCol + c;
      
      // 跳过intersection所在的行/列
      if (isRow && row === lineIndex) continue;
      if (!isRow && col === lineIndex) continue;
      
      if (board[row][col] === 0) {
        const cellKey = `${row}-${col}`;
        if (!intersectionSet.has(cellKey)) {
          const candidates = pencilNotes[cellKey] || [];
          if (candidates.length > 0) {
            cells.push({ row, col, candidates });
          }
        }
      }
    }
  }
  
  return cells;
}

/**
 * 查找可删除的候选数
 */
function findRemovableCandidates(board, pencilNotes, intersectionCells, intersectionCandSet, lineActSet, lineActCandSet, blockActSet, blockActCandSet, lineCells, boxCells, isRow, lineIndex, boxIndex, solution) {
  const removable = [];
  
  // 获取额外候选数（在line和block中都有的）
  const extraCands = lineActCandSet & blockActCandSet;
  
  // 从宫中删除：(intersectionCandSet | blockActCandSet) & ~lineActCandSet | extraCands
  const blockDeleteCands = ((intersectionCandSet | blockActCandSet) & ~lineActCandSet) | extraCands;
  
  // 从行/列中删除：(intersectionCandSet | lineActCandSet) & ~blockActCandSet | extraCands
  const lineDeleteCands = ((intersectionCandSet | lineActCandSet) & ~blockActCandSet) | extraCands;
  
  // 在宫中查找可删除的候选数
  const blockActCellSet = new Set(blockActSet.map(i => `${boxCells[i].row}-${boxCells[i].col}`));
  const intersectionCellSet = new Set(intersectionCells.map(c => `${c.row}-${c.col}`));
  
  const boxRow = Math.floor(boxIndex / 3);
  const boxCol = boxIndex % 3;
  const boxStartRow = boxRow * 3;
  const boxStartCol = boxCol * 3;
  
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = boxStartRow + r;
      const col = boxStartCol + c;
      const cellKey = `${row}-${col}`;
      
      if (blockActCellSet.has(cellKey) || intersectionCellSet.has(cellKey)) {
        continue;
      }
      
      if (board[row][col] === 0) {
        const candidates = pencilNotes[cellKey] || [];
        for (const cand of candidates) {
          if ((1 << (cand - 1)) & blockDeleteCands) {
            // 保护机制：检查是否是正确答案
            if (solution && solution[row][col] === cand) {
              continue;
            }
            removable.push({ row, col, value: cand });
          }
        }
      }
    }
  }
  
  // 在行/列中查找可删除的候选数
  const lineActCellSet = new Set(lineActSet.map(i => `${lineCells[i].row}-${lineCells[i].col}`));
  
  if (isRow) {
    const row = lineIndex;
    for (let col = 0; col < 9; col++) {
      const cellKey = `${row}-${col}`;
      if (lineActCellSet.has(cellKey) || intersectionCellSet.has(cellKey)) {
        continue;
      }
      
      if (board[row][col] === 0) {
        const candidates = pencilNotes[cellKey] || [];
        for (const cand of candidates) {
          if ((1 << (cand - 1)) & lineDeleteCands) {
            // 保护机制
            if (solution && solution[row][col] === cand) {
              continue;
            }
            removable.push({ row, col, value: cand });
          }
        }
      }
    }
  } else {
    const col = lineIndex;
    for (let row = 0; row < 9; row++) {
      const cellKey = `${row}-${col}`;
      if (lineActCellSet.has(cellKey) || intersectionCellSet.has(cellKey)) {
        continue;
      }
      
      if (board[row][col] === 0) {
        const candidates = pencilNotes[cellKey] || [];
        for (const cand of candidates) {
          if ((1 << (cand - 1)) & lineDeleteCands) {
            // 保护机制
            if (solution && solution[row][col] === cand) {
              continue;
            }
            removable.push({ row, col, value: cand });
          }
        }
      }
    }
  }
  
  if (removable.length === 0) {
    return null;
  }
  
  // 构建SDC机会对象
  const lineCandidates = maskToArray(lineActCandSet & intersectionCandSet);
  const boxCandidates = maskToArray(blockActCandSet & intersectionCandSet);
  
  return {
    type: 'sdc',
    description: 'Sue De Coq技巧',
    sdcCells: intersectionCells.map(c => [c.row, c.col]),
    sdcCandidates: maskToArray(intersectionCandSet),
    lineType: isRow ? 'row' : 'col',
    lineIndex: lineIndex,
    boxIndex: boxIndex,
    groupA: {
      cells: lineActSet.map(i => [lineCells[i].row, lineCells[i].col]),
      candidates: lineCandidates
    },
    groupB: {
      cells: blockActSet.map(i => [boxCells[i].row, boxCells[i].col]),
      candidates: boxCandidates
    },
    removableCandidates: removable,
    cells: intersectionCells.map(c => [c.row, c.col]),
    sourceCells: intersectionCells.map(c => [c.row, c.col]),
    targetCells: removable.map(r => [r.row, r.col]),
    values: maskToArray(intersectionCandSet),
    message: `Sue De Coq技巧：${removable.length}个候选数可删除`
  };
}

/**
 * 去重
 */
function deduplicateSDC(opportunities) {
  const seen = new Set();
  const unique = [];
  
  for (const opp of opportunities) {
    const key = JSON.stringify({
      sdc: opp.sdcCells.sort(),
      v: opp.sdcCandidates.sort(),
      cr: opp.groupA.cells.sort(),
      cb: opp.groupB.cells.sort(),
      rm: opp.removableCandidates.map(r => `${r.row}-${r.col}-${r.value}`).sort()
    });
    
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(opp);
    }
  }
  
  return unique;
}

/**
 * 工具函数：数组转位掩码
 */
function arrayToMask(arr) {
  let mask = 0;
  for (const num of arr) {
    mask |= (1 << (num - 1));
  }
  return mask;
}

/**
 * 工具函数：位掩码转数组
 */
function maskToArray(mask) {
  const arr = [];
  for (let i = 0; i < 9; i++) {
    if (mask & (1 << i)) {
      arr.push(i + 1);
    }
  }
  return arr;
}

/**
 * 工具函数：计算位掩码中1的个数
 */
function countBits(mask) {
  let count = 0;
  while (mask) {
    count += mask & 1;
    mask >>= 1;
  }
  return count;
}

/**
 * 应用SDC技巧
 */
export const applySDC = (sdcOpportunity, pencilNotes) => {
  const updatedNotes = { ...pencilNotes };
  const removedCandidates = [];
  
  for (const { row, col, value } of sdcOpportunity.removableCandidates) {
    const cellKey = `${row}-${col}`;
    if (updatedNotes[cellKey]) {
      const originalCandidates = [...updatedNotes[cellKey]];
      updatedNotes[cellKey] = updatedNotes[cellKey].filter(num => num !== value);
      
      if (originalCandidates.length !== updatedNotes[cellKey].length) {
        removedCandidates.push({ row, col, value });
      }
    }
  }
  
  return {
    pencilNotes: updatedNotes,
    removedCandidates
  };
};

export default { findSDC, applySDC };
