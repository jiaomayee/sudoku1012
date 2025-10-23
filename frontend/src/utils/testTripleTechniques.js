// 三链数技巧测试文件
import { findNakedTriples, findHiddenTriples } from './tripleTechniques';

/**
 * 测试显性三链数法
 */
function testNakedTriples() {
  console.log('测试显性三链数法...');
  
  // 测试用例1：行中的显性三链数
  const board1 = [
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
  
  const pencilNotes1 = Array(9).fill().map(() => Array(9).fill([]));
  // 第8行（索引7）中，单元格(7,0)、(7,1)、(7,2)形成显性三链数 [1,2,3]
  pencilNotes1[7][0] = [1, 2];
  pencilNotes1[7][1] = [2, 3];
  pencilNotes1[7][2] = [1, 3];
  // 其他单元格包含这三个数字的候选数
  pencilNotes1[7][3] = [1, 4];
  
  const result1 = findNakedTriples(board1, pencilNotes1);
  console.log('行中的显性三链数测试结果:', result1 ? '通过' : '失败');
  if (result1) {
    console.log('  描述:', result1.description);
    console.log('  涉及单元格:', result1.cells);
    console.log('  三链数数字:', result1.values);
  }
  
  // 测试用例2：列中的显性三链数
  const board2 = [
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
  
  const pencilNotes2 = Array(9).fill().map(() => Array(9).fill([]));
  // 第0列中，单元格(0,0)、(1,0)、(2,0)形成显性三链数 [4,5,6]
  pencilNotes2[0][0] = [4, 5];
  pencilNotes2[1][0] = [5, 6];
  pencilNotes2[2][0] = [4, 6];
  // 其他单元格包含这三个数字的候选数
  pencilNotes2[3][0] = [4, 7];
  
  const result2 = findNakedTriples(board2, pencilNotes2);
  console.log('列中的显性三链数测试结果:', result2 ? '通过' : '失败');
  if (result2) {
    console.log('  描述:', result2.description);
    console.log('  涉及单元格:', result2.cells);
    console.log('  三链数数字:', result2.values);
  }
  
  // 测试用例3：宫中的显性三链数
  const board3 = [
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
  
  const pencilNotes3 = Array(9).fill().map(() => Array(9).fill([]));
  // 第0宫中，单元格(0,0)、(0,1)、(1,0)形成显性三链数 [7,8,9]
  pencilNotes3[0][0] = [7, 8];
  pencilNotes3[0][1] = [8, 9];
  pencilNotes3[1][0] = [7, 9];
  // 其他单元格包含这三个数字的候选数
  pencilNotes3[2][2] = [7, 1];
  
  const result3 = findNakedTriples(board3, pencilNotes3);
  console.log('宫中的显性三链数测试结果:', result3 ? '通过' : '失败');
  if (result3) {
    console.log('  描述:', result3.description);
    console.log('  涉及单元格:', result3.cells);
    console.log('  三链数数字:', result3.values);
  }
}

/**
 * 测试隐性三链数法
 */
function testHiddenTriples() {
  console.log('\n测试隐性三链数法...');
  
  // 测试用例1：行中的隐性三链数
  const board1 = [
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
  
  const pencilNotes1 = Array(9).fill().map(() => Array(9).fill([]));
  // 第8行（索引7）中，数字1、2、3只能出现在三个单元格中
  pencilNotes1[7][0] = [1, 2, 3, 4];
  pencilNotes1[7][1] = [1, 2, 3, 5];
  pencilNotes1[7][2] = [1, 2, 3, 6];
  // 其他单元格不包含1、2、3
  pencilNotes1[7][3] = [4, 5, 6];
  
  const result1 = findHiddenTriples(board1, pencilNotes1);
  console.log('行中的隐性三链数测试结果:', result1 ? '通过' : '失败');
  if (result1) {
    console.log('  描述:', result1.description);
    console.log('  涉及单元格:', result1.cells);
    console.log('  三链数数字:', result1.values);
  }
  
  // 测试用例2：列中的隐性三链数
  const board2 = [
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
  
  const pencilNotes2 = Array(9).fill().map(() => Array(9).fill([]));
  // 第0列中，数字4、5、6只能出现在三个单元格中
  pencilNotes2[0][0] = [4, 5, 6, 7];
  pencilNotes2[1][0] = [4, 5, 6, 8];
  pencilNotes2[2][0] = [4, 5, 6, 9];
  // 其他单元格不包含4、5、6
  pencilNotes2[3][0] = [7, 8, 9];
  
  const result2 = findHiddenTriples(board2, pencilNotes2);
  console.log('列中的隐性三链数测试结果:', result2 ? '通过' : '失败');
  if (result2) {
    console.log('  描述:', result2.description);
    console.log('  涉及单元格:', result2.cells);
    console.log('  三链数数字:', result2.values);
  }
  
  // 测试用例3：宫中的隐性三链数
  const board3 = [
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
  
  const pencilNotes3 = Array(9).fill().map(() => Array(9).fill([]));
  // 第0宫中，数字7、8、9只能出现在三个单元格中
  pencilNotes3[0][0] = [7, 8, 9, 1];
  pencilNotes3[0][1] = [7, 8, 9, 2];
  pencilNotes3[1][0] = [7, 8, 9, 3];
  // 宫中其他单元格不包含7、8、9
  pencilNotes3[2][2] = [1, 2, 3];
  
  const result3 = findHiddenTriples(board3, pencilNotes3);
  console.log('宫中的隐性三链数测试结果:', result3 ? '通过' : '失败');
  if (result3) {
    console.log('  描述:', result3.description);
    console.log('  涉及单元格:', result3.cells);
    console.log('  三链数数字:', result3.values);
  }
}

/**
 * 运行所有测试
 */
function runAllTests() {
  console.log('===== 三链数技巧测试开始 =====');
  testNakedTriples();
  testHiddenTriples();
  console.log('===== 三链数技巧测试结束 =====');
}

// 导出测试函数，便于在控制台运行
export { runAllTests, testNakedTriples, testHiddenTriples };

// 如果直接运行此文件，则执行所有测试
if (typeof window === 'undefined' && typeof module !== 'undefined') {
  runAllTests();
}