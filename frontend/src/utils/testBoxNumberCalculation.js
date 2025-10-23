// 宫号计算测试脚本 - 详细调试版
// 用于深入验证宫号计算逻辑和参数传递问题

// 导入需要测试的函数
import { getDisplayBoxNumberFromBoxCoords, getBoxIndex } from './sudokuUtils.js';

// 测试所有可能的boxRow和boxCol组合
export const testBoxNumberCalculation = () => {
  console.log('===== 宫号计算详细测试开始 =====');
  
  // 1. 标准测试：所有boxRow和boxCol组合
  console.log('\n1. 标准宫号计算测试:');
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      // 计算预期的宫号
      const expectedBoxNumber = boxRow * 3 + boxCol + 1;
      
      // 使用函数计算宫号
      const actualBoxNumber = getDisplayBoxNumberFromBoxCoords(boxRow, boxCol);
      
      // 从实际单元格位置计算验证
      const sampleRow = boxRow * 3 + 1; // 取宫中间的行
      const sampleCol = boxCol * 3 + 1; // 取宫中间的列
      const calculatedBoxIndex = getBoxIndex(sampleRow, sampleCol);
      const calculatedBoxNumber = calculatedBoxIndex + 1;
      
      console.log(`\n测试 boxRow=${boxRow}, boxCol=${boxCol}:`);
      console.log(`  计算过程: boxRow * 3 + boxCol + 1 = ${boxRow} * 3 + ${boxCol} + 1 = ${expectedBoxNumber}`);
      console.log(`  函数返回: ${actualBoxNumber}`);
      console.log(`  从单元格(${sampleRow},${sampleCol})计算:`);
      console.log(`    Math.floor(${sampleRow}/3) = ${Math.floor(sampleRow/3)}, Math.floor(${sampleCol}/3) = ${Math.floor(sampleCol/3)}`);
      console.log(`    宫索引: ${Math.floor(sampleRow/3)} * 3 + ${Math.floor(sampleCol/3)} = ${calculatedBoxIndex}`);
      console.log(`    宫号: ${calculatedBoxNumber}`);
      
      // 验证结果一致性
      if (actualBoxNumber === expectedBoxNumber && actualBoxNumber === calculatedBoxNumber) {
        console.log('  ✅ 测试通过: 所有计算结果一致');
      } else {
        console.log('  ❌ 测试失败: 计算结果不一致!');
        console.log(`    差异详情: expected=${expectedBoxNumber}, actual=${actualBoxNumber}, fromCell=${calculatedBoxNumber}`);
      }
    }
  }
  
  // 2. 参数顺序测试：交换boxRow和boxCol
  console.log('\n2. 参数顺序测试（交换boxRow和boxCol）:');
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      if (boxRow !== boxCol) { // 只测试不相等的情况
        const normalBoxNumber = getDisplayBoxNumberFromBoxCoords(boxRow, boxCol);
        const swappedBoxNumber = getDisplayBoxNumberFromBoxCoords(boxCol, boxRow);
        
        console.log(`\n交换测试 boxRow=${boxRow}, boxCol=${boxCol}:`);
        console.log(`  正常参数: ${normalBoxNumber}`);
        console.log(`  交换参数: ${swappedBoxNumber}`);
        if (normalBoxNumber !== swappedBoxNumber) {
          console.log('  ✅ 参数顺序影响结果（预期行为）');
        } else {
          console.log('  ⚠️ 参数顺序不影响结果（可能存在问题）');
        }
      }
    }
  }
  
  // 3. 模拟pairTechniques.js中可能的调用方式
  console.log('\n3. 模拟pairTechniques.js调用测试:');
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      // 模拟直接计算
      const directCalculation = boxRow * 3 + boxCol + 1;
      
      // 模拟从单元格坐标计算
      const cellsInBox = [];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const row = boxRow * 3 + r;
          const col = boxCol * 3 + c;
          const cellBoxIndex = getBoxIndex(row, col);
          cellsInBox.push(`(${row},${col})→${cellBoxIndex+1}`);
        }
      }
      
      console.log(`\nBox ${boxRow},${boxCol}:`);
      console.log(`  直接计算宫号: ${directCalculation}`);
      console.log(`  宫中单元格及计算宫号: ${cellsInBox.join(', ')}`);
    }
  }
  
  console.log('\n===== 宫号计算详细测试完成 =====');
};

// 执行测试
testBoxNumberCalculation();