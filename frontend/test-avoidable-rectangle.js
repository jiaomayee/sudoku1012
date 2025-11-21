// 测试Avoidable Rectangle Type 1功能
// 这个脚本基于前端uniquenessTechniques.js的实现来测试

// 模拟数独数据结构
function createTestSudoku() {
    // 创建一个包含Avoidable Rectangle Type 1的测试场景
    const grid = Array(81).fill(0); // 初始化为空
    const candidates = Array(81).fill().map(() => Array(10).fill(false)); // 候选数
    const fixedCells = new Set(); // 固定单元格集合
    
    // 设置已解决的单元格（非提示数）
    // (0,0) = 5（已解决，非提示数）
    grid[0] = 5;
    // 不添加到fixedCells，表示这是一个已解决但非提示数的单元格
    
    // (0,1) 候选数：5,7
    candidates[1][5] = true;
    candidates[1][7] = true;
    
    // (1,0) 候选数：5,8
    candidates[9][5] = true;
    candidates[9][8] = true;
    
    // (1,1) 候选数：7,8
    candidates[10][7] = true;
    candidates[10][8] = true;
    
    return { grid, candidates, fixedCells };
}

// 从uniquenessTechniques.js中复制isFixedCell函数
function isFixedCell(index, fixedCells) {
    return fixedCells.has(index);
}

// 从uniquenessTechniques.js中复制findAvoidableRectangleType1函数
function findAvoidableRectangleType1(grid, candidates, fixedCells) {
    console.log('开始查找Avoidable Rectangle Type 1...');
    
    // 查找所有非提示数的已解决单元格
    const solvedNonFixed = [];
    for (let i = 0; i < 81; i++) {
        if (grid[i] !== 0 && !isFixedCell(i, fixedCells)) {
            solvedNonFixed.push(i);
        }
    }
    
    console.log(`找到 ${solvedNonFixed.length} 个非提示数的已解决单元格`);
    
    // 检查每个非提示数的已解决单元格是否参与Avoidable Rectangle
    for (const solvedIndex of solvedNonFixed) {
        const value = grid[solvedIndex];
        const row = Math.floor(solvedIndex / 9);
        const col = solvedIndex % 9;
        
        console.log(`检查单元格 (${row},${col}) 值为 ${value} 的潜在矩形...`);
        
        // 查找同一区块内的其他单元格
        const boxStartRow = Math.floor(row / 3) * 3;
        const boxStartCol = Math.floor(col / 3) * 3;
        
        // 在同一区块内找到另一个已解决的单元格（如果有）
        for (let r = boxStartRow; r < boxStartRow + 3; r++) {
            for (let c = boxStartCol; c < boxStartCol + 3; c++) {
                const otherIndex = r * 9 + c;
                
                // 跳过自身和已经是提示数的单元格
                if (otherIndex === solvedIndex || isFixedCell(otherIndex, fixedCells)) {
                    continue;
                }
                
                // 检查是否可以形成矩形的其他两个角
                const corner1 = row * 9 + c;
                const corner2 = r * 9 + col;
                
                // 确保两个角都是空的
                if (grid[corner1] === 0 && grid[corner2] === 0) {
                    console.log(`找到潜在矩形: (${row},${col})=${value}, (${row},${c})=?, (${r},${col})=?, (${r},${c})=${grid[otherIndex]}`);
                    
                    // 检查corner1是否包含value作为候选数
                    if (candidates[corner1][value]) {
                        console.log(`发现Avoidable Rectangle Type 1! 从单元格 (${row},${c}) 删除候选数 ${value}`);
                        return {
                            type: 'AVOIDABLE_RECTANGLE_1',
                            deletions: [{ index: corner1, candidate: value }],
                            rectangle: [solvedIndex, corner1, corner2, otherIndex]
                        };
                    }
                    
                    // 检查corner2是否包含value作为候选数
                    if (candidates[corner2][value]) {
                        console.log(`发现Avoidable Rectangle Type 1! 从单元格 (${r},${col}) 删除候选数 ${value}`);
                        return {
                            type: 'AVOIDABLE_RECTANGLE_1',
                            deletions: [{ index: corner2, candidate: value }],
                            rectangle: [solvedIndex, corner1, corner2, otherIndex]
                        };
                    }
                }
            }
        }
    }
    
    console.log('未找到Avoidable Rectangle Type 1');
    return null;
}

// 运行测试
function runTest() {
    console.log('=== Avoidable Rectangle Type 1 测试 ===');
    
    // 创建测试数据
    const { grid, candidates, fixedCells } = createTestSudoku();
    
    // 运行算法
    const result = findAvoidableRectangleType1(grid, candidates, fixedCells);
    
    // 验证结果
    if (result && result.deletions.length > 0) {
        const deletion = result.deletions[0];
        const row = Math.floor(deletion.index / 9);
        const col = deletion.index % 9;
        
        console.log('\n=== 测试结果 ===');
        console.log(`找到Avoidable Rectangle Type 1!`);
        console.log(`从单元格 (${row},${col}) 删除候选数 ${deletion.candidate}`);
        
        // 验证是否是预期的删除
        if (deletion.index === 1 && deletion.candidate === 5) {
            console.log('✓ 测试通过：正确识别并删除了候选数5！');
        } else {
            console.log('✗ 测试失败：删除的候选数与预期不符！');
        }
    } else {
        console.log('\n=== 测试结果 ===');
        console.log('✗ 测试失败：未找到Avoidable Rectangle Type 1！');
    }
}

// 导出函数以便在浏览器控制台中运行
if (typeof module !== 'undefined') {
    module.exports = { runTest, createTestSudoku, findAvoidableRectangleType1 };
} else {
    // 在浏览器环境中直接运行
    runTest();
}

// 如果直接运行此脚本，执行测试
if (require.main === module) {
    runTest();
}
