// ALS-XZ技巧增强测试

// 模拟数独板
const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// 模拟候选数（铅笔标记）
// 这里创建一个明确的ALS-XZ示例
const pencilNotes = {
  // ALS1: 单元格 (0,0), (0,1), (0,2) - 3个单元格，4个候选数
  '0-0': [1, 2, 3],
  '0-1': [1, 4],
  '0-2': [4],
  
  // ALS2: 单元格 (1,0), (2,0), (3,0) - 3个单元格，4个候选数
  '1-0': [1, 2, 5],
  '2-0': [1, 5],
  '3-0': [5],
  
  // 目标单元格 - 可以同时看到两个ALS中所有包含Z的单元格
  '0-3': [2], // 应该可以删除候选数2
  '1-3': [2], // 应该可以删除候选数2
  '4-0': [2]  // 应该可以删除候选数2
};

// 导入ALS-XZ技巧函数
const findALSXZ = require('./frontend/src/utils/alsXZTechniques').findALSXZ;

// 执行测试
console.log('开始ALS-XZ技巧测试...');
const result = findALSXZ(board, pencilNotes);

// 输出结果
console.log('测试结果:', result);
console.log('找到的机会数量:', result ? result.length : 0);

if (result && result.length > 0) {
  const opportunity = result[0];
  console.log('\nALS-XZ详细信息:');
  console.log(`- X值(限制数): ${opportunity.x}`);
  console.log(`- Z值(删除数): ${opportunity.z}`);
  console.log(`- ALS1单元格: ${JSON.stringify(opportunity.als1.cells)}`);
  console.log(`- ALS1候选数: ${opportunity.als1.candidates.join(', ')}`);
  console.log(`- ALS2单元格: ${JSON.stringify(opportunity.als2.cells)}`);
  console.log(`- ALS2候选数: ${opportunity.als2.candidates.join(', ')}`);
  console.log(`- 共同可见单元格: ${JSON.stringify(opportunity.commonCells)}`);
  console.log('\n可删除的候选数:');
  opportunity.removableCandidates.forEach(rc => {
    console.log(`- 单元格(${rc.row},${rc.col}) 的候选数 ${rc.value}`);
  });
  
  // 高亮信息
  if (opportunity.highlightInfo) {
    console.log('\n高亮信息:');
    console.log('- X相关单元格:');
    console.log(`  ALS1: ${JSON.stringify(opportunity.highlightInfo.xCells.als1)}`);
    console.log(`  ALS2: ${JSON.stringify(opportunity.highlightInfo.xCells.als2)}`);
    console.log('- Z相关单元格:');
    console.log(`  ALS1: ${JSON.stringify(opportunity.highlightInfo.zCells.als1)}`);
    console.log(`  ALS2: ${JSON.stringify(opportunity.highlightInfo.zCells.als2)}`);
    console.log('- 目标候选数:');
    opportunity.highlightInfo.targetCandidates.forEach(tc => {
      console.log(`  单元格(${tc.row},${tc.col}) 的候选数 ${tc.value}`);
    });
  }
} else {
  console.log('未找到ALS-XZ技巧应用机会');
}

// 测试不同的X和Z组合
console.log('\n测试不同的X和Z组合...');
// 这里可以添加更多的测试用例