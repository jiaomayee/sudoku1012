// 位置计算验证测试脚本
// 用于验证数独棋盘位置计算函数的一致性

// 导入位置计算相关函数
import { validatePositionCalculations, getPositionValidationMap, getBoxInfo } from './sudokuUtils.js';

// 运行位置计算验证
export const testPositionsFromFile = () => {
  console.log('开始测试位置计算函数...');
  
  // 验证所有计算方法的一致性
  const isValid = validatePositionCalculations();
  
  if (isValid) {
    console.log('\n位置计算测试通过！所有方法返回一致的结果。');
    
    // 输出宫的映射关系，便于人工确认
    console.log('\n宫索引与显示宫号的映射关系：');
    const boxOrderMapping = [
      { boxIndex: 0, boxNumber: 1, boxRow: 0, boxCol: 0, description: '左上宫' },
      { boxIndex: 1, boxNumber: 2, boxRow: 0, boxCol: 1, description: '中上宫' },
      { boxIndex: 2, boxNumber: 3, boxRow: 0, boxCol: 2, description: '右上宫' },
      { boxIndex: 3, boxNumber: 4, boxRow: 1, boxCol: 0, description: '左中宫' },
      { boxIndex: 4, boxNumber: 5, boxRow: 1, boxCol: 1, description: '中宫' },
      { boxIndex: 5, boxNumber: 6, boxRow: 1, boxCol: 2, description: '右中宫' },
      { boxIndex: 6, boxNumber: 7, boxRow: 2, boxCol: 0, description: '左下宫' },
      { boxIndex: 7, boxNumber: 8, boxRow: 2, boxCol: 1, description: '中下宫' },
      { boxIndex: 8, boxNumber: 9, boxRow: 2, boxCol: 2, description: '右下宫' }
    ];
    
    boxOrderMapping.forEach(box => {
      console.log(`宫索引 ${box.boxIndex}: 显示宫号 ${box.boxNumber} (${box.description})`);
    });
    
    // 输出部分单元格的位置信息作为示例
    console.log('\n部分单元格位置信息示例：');
    const validationMap = getPositionValidationMap();
    
    // 测试所有宫的左上角单元格
    const testCases = [
      { row: 0, col: 0, expectedBoxIndex: 0, expectedBoxNumber: 1, description: '左上宫左上角' },
      { row: 0, col: 3, expectedBoxIndex: 1, expectedBoxNumber: 2, description: '中上宫左上角' },
      { row: 0, col: 6, expectedBoxIndex: 2, expectedBoxNumber: 3, description: '右上宫左上角' },
      { row: 3, col: 0, expectedBoxIndex: 3, expectedBoxNumber: 4, description: '左中宫左上角' },
      { row: 3, col: 3, expectedBoxIndex: 4, expectedBoxNumber: 5, description: '中宫左上角' },
      { row: 3, col: 6, expectedBoxIndex: 5, expectedBoxNumber: 6, description: '右中宫左上角' },
      { row: 6, col: 0, expectedBoxIndex: 6, expectedBoxNumber: 7, description: '左下宫左上角' },
      { row: 6, col: 3, expectedBoxIndex: 7, expectedBoxNumber: 8, description: '中下宫左上角' },
      { row: 6, col: 6, expectedBoxIndex: 8, expectedBoxNumber: 9, description: '右下宫左上角' }
    ];
    
    testCases.forEach(test => {
      const boxInfo = getBoxInfo(test.expectedBoxIndex);
      console.log(`\n${test.description} (行${test.row}, 列${test.col}):`);
      console.log(`  宫索引: ${test.expectedBoxIndex}`);
      console.log(`  显示宫号: ${boxInfo.boxNumber}`);
      console.log(`  宫描述: ${boxInfo.description}`);
    });
    
    // 验证关键位置
    console.log('\n验证关键位置：');
    const box4Cell = validationMap.find(item => item.boxNumber === 4);
    const box5Cell = validationMap.find(item => item.boxNumber === 5);
    const box7Cell = validationMap.find(item => item.boxNumber === 7);
    const box8Cell = validationMap.find(item => item.boxNumber === 8);
    
    console.log(`宫4（${box4Cell?.boxDescription}）- 索引${box4Cell?.boxIndex}，位于第${Math.floor(box4Cell?.boxIndex / 3) + 1}行第${box4Cell?.boxIndex % 3 + 1}列`);
    console.log(`宫5（${box5Cell?.boxDescription}）- 索引${box5Cell?.boxIndex}，位于第${Math.floor(box5Cell?.boxIndex / 3) + 1}行第${box5Cell?.boxIndex % 3 + 1}列`);
    console.log(`宫7（${box7Cell?.boxDescription}）- 索引${box7Cell?.boxIndex}，位于第${Math.floor(box7Cell?.boxIndex / 3) + 1}行第${box7Cell?.boxIndex % 3 + 1}列`);
    console.log(`宫8（${box8Cell?.boxDescription}）- 索引${box8Cell?.boxIndex}，位于第${Math.floor(box8Cell?.boxIndex / 3) + 1}行第${box8Cell?.boxIndex % 3 + 1}列`);
    
  } else {
    console.error('位置计算测试失败！发现不一致的情况。');
  }
};

// 如果直接运行此文件，执行测试
if (typeof window === 'undefined' && typeof require !== 'undefined') {
  // Node.js 环境
  testPositions();
}

// 浏览器环境支持
if (typeof window !== 'undefined') {
  // 在浏览器环境中
  window.testPositions = testPositions;
  console.log('位置验证函数已注册为全局函数: testPositions()');
}