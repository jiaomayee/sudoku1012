// 测试数独宫号计算函数

/**
 * 测试宫号计算是否正确
 * 标准数独宫号：
 * 宫1: boxRow=0, boxCol=0
 * 宫2: boxRow=0, boxCol=1
 * 宫3: boxRow=0, boxCol=2
 * 宫4: boxRow=1, boxCol=0
 * 宫5: boxRow=1, boxCol=1
 * 宫6: boxRow=1, boxCol=2
 * 宫7: boxRow=2, boxCol=0
 * 宫8: boxRow=2, boxCol=1
 * 宫9: boxRow=2, boxCol=2
 */
function testBoxCalculation() {
  console.log('开始测试数独宫号计算...');
  
  // 测试所有宫的计算
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const boxNumber = boxRow * 3 + boxCol + 1;
      console.log(`boxRow=${boxRow}, boxCol=${boxCol} => boxNumber=${boxNumber}`);
      
      // 测试该宫中的代表性单元格
      const centerRow = boxRow * 3 + 1;
      const centerCol = boxCol * 3 + 1;
      const cellBoxRow = Math.floor(centerRow / 3);
      const cellBoxCol = Math.floor(centerCol / 3);
      const cellBoxNumber = cellBoxRow * 3 + cellBoxCol + 1;
      console.log(`  单元格(${centerRow},${centerCol}) => boxRow=${cellBoxRow}, boxCol=${cellBoxCol}, boxNumber=${cellBoxNumber}`);
      
      // 验证一致性
      if (boxNumber !== cellBoxNumber) {
        console.error(`  ❌ 计算不一致: 预期=${boxNumber}, 实际=${cellBoxNumber}`);
      } else {
        console.log(`  ✅ 计算正确`);
      }
    }
  }
  
  console.log('测试完成！');
  return true;
}

// 导出测试函数供其他文件调用
export { testBoxCalculation };

// 模块导出版本号，用于触发HMR更新
export const TEST_VERSION = '1.0.1';