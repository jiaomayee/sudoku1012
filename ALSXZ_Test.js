// ALS-XZ技巧测试文件

// 导入必要的函数
const { findALSXZ } = require('./frontend/src/utils/alsXZTechniques.js');

// 测试用例1：包含ALS-XZ模式的数独棋盘
const testBoard1 = [
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

// 测试用例1的候选数
const testPencilNotes1 = {
  // ALS1: 两个单元格，三个候选数
  "0-0": [1, 2, 3],
  "0-1": [2, 3],
  // ALS2: 两个单元格，三个候选数
  "1-0": [1, 4, 5],
  "1-1": [4, 5],
  // 可以删除候选数1的单元格
  "2-0": [1, 6, 7],
  "3-0": [1, 8, 9]
};

// 运行测试
console.log('运行ALS-XZ技巧测试...');
try {
  const results = findALSXZ(testBoard1, testPencilNotes1);
  console.log(`找到 ${results.length} 个ALS-XZ技巧机会`);
  
  if (results.length > 0) {
    console.log('技巧详情:');
    results.forEach((technique, index) => {
      console.log(`\n机会 ${index + 1}:`);
      console.log(`类型: ${technique.type}`);
      console.log(`消息: ${technique.message}`);
      console.log(`ALS1单元格: ${JSON.stringify(technique.als1.cells)}`);
      console.log(`ALS2单元格: ${JSON.stringify(technique.als2.cells)}`);
      console.log(`X: ${technique.x}, Z: ${technique.z}`);
      console.log(`可删除候选数: ${JSON.stringify(technique.removableCandidates)}`);
    });
  }
} catch (error) {
  console.error('测试失败:', error);
}

console.log('\n测试完成!');