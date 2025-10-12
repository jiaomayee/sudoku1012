// DLX算法实现，用于高效求解数独
// Dancing Links算法是一种回溯算法，专门用于解决精确覆盖问题
// 数独问题可以转化为精确覆盖问题进行求解

class Node {
  constructor(row, col) {
    this.row = row; // 行号
    this.col = col; // 列号
    this.up = this; // 向上指向的节点
    this.down = this; // 向下指向的节点
    this.left = this; // 向左指向的节点
    this.right = this; // 向右指向的节点
    this.colHead = null; // 列头节点
  }
}

class ColumnHeader extends Node {
  constructor(col) {
    super(-1, col); // 行号为-1表示列头
    this.size = 0; // 该列包含的节点数量
  }
}

class DLX { constructor() { this.root = new Node(-1, -1); // 根节点 this.colHeaders = []; // 列头节点数组 this.solution = []; // 存储解决方案 this.rows = []; // 存储所有行节点 } // 将数独问题转换为精确覆盖问题的矩阵 setupSudokuMatrix(puzzle) { // 数独问题转换为精确覆盖问题需要4种约束： // 1. 单元格约束：每个单元格必须填入一个数字 // 2. 行约束：每一行中每个数字必须恰好出现一次 // 3. 列约束：每一列中每个数字必须恰好出现一次 // 4. 3x3宫格约束：每个3x3宫格中每个数字必须恰好出现一次 
    const N = 9; // 数独大小
    const NUM_CONSTRAINTS = 4 * N * N; // 约束数量
    const NUM_POSSIBLE_PLACEMENTS = N * N * N; // 可能的放置方式数量
    
    // 初始化列头节点
    this.colHeaders = [];
    for (let i = 0; i < NUM_CONSTRAINTS; i++) {
      const colHeader = new ColumnHeader(i);
      this.colHeaders.push(colHeader);
    }
    
    // 连接列头节点
    let current = this.root;
    for (let i = 0; i < NUM_CONSTRAINTS; i++) {
      current.right = this.colHeaders[i];
      this.colHeaders[i].left = current;
      current = this.colHeaders[i];
    }
    current.right = this.root;
    this.root.left = current;
    
    // 构建行节点
    this.rows = [];
    
    // 为每个可能的数字放置创建一行
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        for (let num = 1; num <= N; num++) {
          // 如果当前单元格已经有数字且与尝试放置的数字不同，则跳过
          if (puzzle[row][col] !== 0 && puzzle[row][col] !== num) {
            continue;
          }
          
          // 计算该行对应的4个约束列索引
          const cellConstraint = row * N + col; // 单元格约束
          const rowConstraint = N * N + row * N + (num - 1); // 行约束
          const colConstraint = 2 * N * N + col * N + (num - 1); // 列约束
          const boxConstraint = 3 * N * N + (Math.floor(row / 3) * 3 + Math.floor(col / 3)) * N + (num - 1); // 宫格约束
          
          // 创建该行的节点
          const constraints = [cellConstraint, rowConstraint, colConstraint, boxConstraint];
          const rowNodes = [];
          
          for (let constraint of constraints) {
            const node = new Node(this.rows.length, constraint);
            node.colHead = this.colHeaders[constraint];
            rowNodes.push(node);
          }
          
          // 连接该行的节点
          for (let i = 0; i < rowNodes.length; i++) {
            rowNodes[i].left = rowNodes[(i - 1 + rowNodes.length) % rowNodes.length];
            rowNodes[i].right = rowNodes[(i + 1) % rowNodes.length];
          }
          
          // 将节点插入到对应的列中
          for (let node of rowNodes) {
            const colHeader = node.colHead;
            
            // 插入到列的底部
            node.up = colHeader.up;
            colHeader.up.down = node;
            node.down = colHeader;
            colHeader.up = node;
            
            // 更新列的大小
            colHeader.size++;
          }
          
          // 存储该行信息：(row, col, num)
          this.rows.push([row, col, num]);
        }
      }
    }
  }
  
  // 选择一个列头节点（选择包含最少节点的列以提高效率）
  selectColumn() {
    let minSize = Infinity;
    let selectedCol = null;
    
    for (let col = this.root.right; col !== this.root; col = col.right) {
      if (col.size < minSize) {
        minSize = col.size;
        selectedCol = col;
      }
    }
    
    return selectedCol;
  }
  
  // 覆盖指定列
  coverColumn(col) {
    // 从根节点断开该列
    col.left.right = col.right;
    col.right.left = col.left;
    
    // 覆盖该列中的所有行
    for (let row = col.down; row !== col; row = row.down) {
      for (let node = row.right; node !== row; node = node.right) {
        // 从列中移除该节点
        node.up.down = node.down;
        node.down.up = node.up;
        
        // 减少列的大小
        node.colHead.size--;
      }
    }
  }
  
  // 恢复指定列
  uncoverColumn(col) {
    // 恢复该列中的所有行
    for (let row = col.up; row !== col; row = row.up) {
      for (let node = row.left; node !== row; node = node.left) {
        // 将节点重新插入到列中
        node.up.down = node;
        node.down.up = node;
        
        // 增加列的大小
        node.colHead.size++;
      }
    }
    
    // 将列重新连接到根节点
    col.left.right = col;
    col.right.left = col;
  }
  
  // 搜索解决方案（带解数量限制）
  search(maxSolutions = 2) { // 默认只需要找到2个解来验证是否唯一
    const solutions = [];
    
    const backtrack = () => {
      // 如果所有列都被覆盖，找到一个解决方案
      if (this.root.right === this.root) {
        solutions.push([...this.solution]);
        return solutions.length < maxSolutions; // 找到足够的解后停止
      }
      
      // 选择一个列
      const col = this.selectColumn();
      
      // 覆盖该列
      this.coverColumn(col);
      
      // 尝试该列中的每一行
      for (let rowNode = col.down; rowNode !== col; rowNode = rowNode.down) {
        // 将该行添加到解决方案中
        this.solution.push(this.rows[rowNode.row]);
        
        // 覆盖与该行相关的所有列
        for (let node = rowNode.right; node !== rowNode; node = node.right) {
          this.coverColumn(node.colHead);
        }
        
        // 递归搜索
        if (!backtrack()) {
          return false; // 找到足够的解后停止
        }
        
        // 移除该行从解决方案中
        this.solution.pop();
        
        // 恢复与该行相关的所有列
        for (let node = rowNode.left; node !== rowNode; node = node.left) {
          this.uncoverColumn(node.colHead);
        }
      }
      
      // 恢复该列
      this.uncoverColumn(col);
      
      return true;
    };
    
    backtrack();
    return solutions;
  }
  
  // 解决数独问题
  solveSudoku(puzzle) {
    // 重置DLX结构
    this.root = new Node(-1, -1);
    this.colHeaders = [];
    this.solution = [];
    this.rows = [];
    
    // 设置数独矩阵
    this.setupSudokuMatrix(puzzle);
    
    // 搜索解决方案
    const solutions = this.search(1); // 只需要找到一个解
    
    if (solutions.length === 0) {
      return null; // 无解
    }
    
    // 构建解决方案矩阵
    const solutionMatrix = Array(9).fill().map(() => Array(9).fill(0));
    for (let [row, col, num] of solutions[0]) {
      solutionMatrix[row][col] = num;
    }
    
    return solutionMatrix;
  }
  
  // 检查数独是否有唯一解
  hasUniqueSolution(puzzle) {
    // 重置DLX结构
    this.root = new Node(-1, -1);
    this.colHeaders = [];
    this.solution = [];
    this.rows = [];
    
    // 设置数独矩阵
    this.setupSudokuMatrix(puzzle);
    
    // 搜索解决方案（最多找2个）
    const solutions = this.search(2);
    
    // 如果只有一个解，则是唯一解
    return solutions.length === 1;
  }
}

export default DLX;