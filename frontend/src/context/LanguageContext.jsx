import React, { createContext, useState, useEffect, useContext } from 'react';

// 语言包定义
const translations = {
  'zh-CN': {
    // 通用
    home: '首页',
    game: '游戏',
    techniques: '技巧',
    progress: '进度',
    statistics: '统计',
    settings: '设置',
    // 导航按钮标题
    newGame: '新建游戏',
    pauseTimer: '暂停计时',
    resume: '继续',
    gameCompleted: '游戏已完成',
    hint: '技巧提示',
    notes: '候选数',
    // 难度选择
    selectDifficulty: '选择难度',
    easyDifficulty: '简单',
    easyDescription: '初学者友好，空格较少',
    mediumDifficulty: '中等',
    mediumDescription: '进阶挑战，需要一定技巧',
    hardDifficulty: '困难',
    hardDescription: '专家级别，逻辑推理',
    expertDifficulty: '专家',
    expertDescription: '极高难度，需要高级技巧',
    cancel: '取消',
    startGame: '开始游戏',
    
    // 设置页面
    settingsPageTitle: '设置',
    language: '语言',
    theme: '主题',
    lightTheme: '浅色主题',
    darkTheme: '深色主题',
    systemTheme: '跟随系统',
    customTheme: '自定义主题',
    editTheme: '编辑主题',
    saveChanges: '保存更改',
    cancel: '取消',
    themeSelection: '主题选择',
    gameSettings: '游戏设置',
    soundEffects: '音效',
    autoCheck: '自动检查',
    showHints: '显示提示',
    
    // 主题编辑器
    themeEditor: '主题编辑器',
    backgroundColor: '背景颜色',
    surfaceColor: '表面颜色',
    textColor: '文字颜色',
    textSecondaryColor: '次要文字颜色',
    primaryColor: '主色调',
    secondaryColor: '次色调',
    successColor: '成功颜色',
    warningColor: '警告颜色',
    errorColor: '错误颜色',
    borderColor: '边框颜色',
    gridLineColor: '网格线颜色',
    gridLineThickColor: '粗网格线颜色',
    highlightColor: '高亮颜色',
    preview: '预览',
    reset: '重置',
    exportTheme: '导出主题',
    importTheme: '导入主题',
    
    // 其他常用文本
    confirm: '确认',
    delete: '删除',
    back: '返回',
    continue: '继续',
    complete: '完成',
    start: '开始',
    pause: '暂停',
    resume: '继续',
    newGame: '新游戏',
    difficulty: '难度',
    time: '时间',
    easy: '简单',
    medium: '中等',
    hard: '困难',
    expert: '专家',
    // Footer
    aboutUs: '关于我们',
    help: '使用帮助',
    sudokuRules: '数独规则',
    contactUs: '联系我们',
    copyright: '版权所有',
    version: '版本',
    appName: '数独学习应用',
    // 游戏页面提示
    enterPencilMode: '进入铅笔模式，可以添加候选数字',
    exitPencilMode: '退出铅笔模式，返回正常输入',
    notesCalculated: '已为所有空白格子计算并填充候选数',
    // 解题技巧和步骤
      findSingleCandidateCell: '查找唯一候选数的单元格',
      cellOnlyHasSingleCandidate: '单元格{position}只有唯一候选数{value}',
      fillNumber: '填入数字{value}',
      findHiddenSingleInRegion: '在{regionType}{regionNum}中查找隐藏的唯一数字',
      numberOnlyInPosition: '数字{value}在{regionType}{regionNum}中只能出现在{position}',
      row: '行',
      col: '列',
      box: '宫',
      multipleCells: '多单元格',
      // 额外翻译
      error: '错误',
      singleCandidateTechnique: '候选数唯一法',
    // 技巧名称
      nakedSingle: '唯一数法',
      hiddenSingleRow: '隐性唯一数法(行)',
      hiddenSingleCol: '隐性唯一数法(列)',
      hiddenSingleBox: '隐性唯一数法(宫)',
      nakedPairsRow: '显性数对法(行)',
      nakedPairsCol: '显性数对法(列)',
      nakedPairsBox: '显性数对法(宫)',
      hiddenPairsRow: '隐性数对法(行)',
      hiddenPairsCol: '隐性数对法(列)',
      hiddenPairsBox: '隐性数对法(宫)',
      nakedTripleRow: '显性三链数法(行)',
      nakedTripleCol: '显性三链数法(列)',
      nakedTripleBox: '显性三链数法(宫)',
      hiddenTripleRow: '隐性三链数法(行)',
      hiddenTripleCol: '隐性三链数法(列)',
      hiddenTripleBox: '隐性三链数法(宫)',
      unknownTechnique: '未知技巧',
      rowSuffix: '(行)',
      colSuffix: '(列)',
      boxSuffix: '(宫)',
      // 额外技巧名称
      nakedPair: '显性数对法',
      nakedPairRow: '行显性数对',
      nakedPairCol: '列显性数对',
      nakedPairBox: '宫显性数对',
      hiddenPair: '隐性数对法',
      hiddenPairRow: '行隐性数对',
      hiddenPairCol: '列隐性数对',
      hiddenPairBox: '宫隐性数对',
      nakedTriple: '显性三链数法',
      hiddenTriple: '隐性三链数法',
      // 控制面板标签
      keyboardTab: '键盘',
      techniquesTab: '技巧',
      solutionTab: '解题',
      pencilMode: '铅笔模式',
      undoAction: '撤销',
      clearCell: '清空单元格',
      fillCandidates: '刷新候选数',
      applyTechnique: '应用',
      solutionSteps: '解题步骤',
      selectTechniqueFirst: '请先从技巧列表中选择一个技巧',
      noTechniquesAvailable: '当前棋盘没有找到可用技巧',
      enterPencilMode: '进入铅笔模式',
      exitPencilMode: '退出铅笔模式',
      refreshCandidatesTooltip: '点击刷新候选数并加载所有技巧求解',
      // 新增翻译键
      candidatesTab: '候选数',
      hintsTab: '提示',
      solveStep: '解题一步',
      solveAll: '全部解题',
      relatedPosition: '相关位置: {position}',
      relatedNumber: '涉及数字: {number}',
      analysisCompleted: '分析完成',
      findPairInRegion: '在{regionType}{regionNum}中查找数对',
      foundNakedPair: '发现数字{numbers}的显性数对，位于单元格{cells}',
      removeCandidatesFromTargets: '这些数字只能出现在这两个单元格中，需要从目标单元格{targets}中删除候选数{numbers}',
      findHiddenPairInRegion: '在{regionType}{regionNum}中查找只能出现在两个单元格中的数字对',
      foundNumbersOnlyInCells: '发现数字{numbers}只能出现在单元格{cells}',
      removeOtherCandidates: '目标单元格{cells}中只能填入数字{numbers}，需要移除其他候选数',
      findTripleInRegion: '在{regionType}{regionNum}中查找三链数',
      foundNakedTriple: '发现数字{numbers}的显性三链数，位于单元格{cells}',
      findHiddenTripleInRegion: '在{regionType}{regionNum}中查找只能出现在三个单元格中的数字组',
  },
  'en-US': {
    // Common
    home: 'Home',
    game: 'Game',
    techniques: 'Techniques',
    progress: 'Progress',
    statistics: 'Statistics',
    settings: 'Settings',
    // Navigation button titles
    newGame: 'New Game',
    pauseTimer: 'Pause Timer',
    resume: 'Resume',
    gameCompleted: 'Game Completed',
    hint: 'Hint',
    notes: 'Notes',
    // Difficulty selection
    selectDifficulty: 'Select Difficulty',
    easyDifficulty: 'Easy',
    easyDescription: 'Beginner friendly, fewer empty cells',
    mediumDifficulty: 'Medium',
    mediumDescription: 'Moderate challenge, requires some techniques',
    hardDifficulty: 'Hard',
    hardDescription: 'Expert level, logical reasoning required',
    expertDifficulty: 'Expert',
    expertDescription: 'Extremely difficult, advanced techniques needed',
    cancel: 'Cancel',
    startGame: 'Start Game',
    
    // Settings page
    settingsPageTitle: 'Settings',
    language: 'Language',
    theme: 'Theme',
    lightTheme: 'Light Theme',
    darkTheme: 'Dark Theme',
    systemTheme: 'System Theme',
    customTheme: 'Custom Theme',
    editTheme: 'Edit Theme',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',
    themeSelection: 'Theme Selection',
    gameSettings: 'Game Settings',
    soundEffects: 'Sound Effects',
    autoCheck: 'Auto Check',
    showHints: 'Show Hints',
    
    // Theme editor
    themeEditor: 'Theme Editor',
    backgroundColor: 'Background Color',
    surfaceColor: 'Surface Color',
    textColor: 'Text Color',
    textSecondaryColor: 'Secondary Text Color',
    primaryColor: 'Primary Color',
    secondaryColor: 'Secondary Color',
    successColor: 'Success Color',
    warningColor: 'Warning Color',
    errorColor: 'Error Color',
    borderColor: 'Border Color',
    gridLineColor: 'Grid Line Color',
    gridLineThickColor: 'Thick Grid Line Color',
    highlightColor: 'Highlight Color',
    preview: 'Preview',
    reset: 'Reset',
    exportTheme: 'Export Theme',
    importTheme: 'Import Theme',
    
    // 其他常用文本
    confirm: 'Confirm',
    delete: 'Delete',
    back: 'Back',
    continue: 'Continue',
    complete: 'Complete',
    start: 'Start',
    pause: 'Pause',
    resume: 'Resume',
    newGame: 'New Game',
    difficulty: 'Difficulty',
    time: 'Time',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    expert: 'Expert',
    // Footer
    aboutUs: 'About Us',
    help: 'Help',
    sudokuRules: 'Sudoku Rules',
    contactUs: 'Contact Us',
    copyright: 'All Rights Reserved',
    version: 'Version',
    appName: 'Sudoku Learning App',
    // Game page hints
    enterPencilMode: 'Enter pencil mode, you can add candidate numbers',
    exitPencilMode: 'Exit pencil mode, return to normal input',
    notesCalculated: 'Candidate numbers have been calculated and filled for all empty cells',
    // Solving techniques and steps
      findSingleCandidateCell: 'Find cells with a single candidate number',
      cellOnlyHasSingleCandidate: 'Cell {position} has only one candidate: {value}',
      fillNumber: 'Fill in number {value}',
      findHiddenSingleInRegion: 'Find hidden single number in {regionType} {regionNum}',
      numberOnlyInPosition: 'Number {value} can only appear at {position} in {regionType} {regionNum}',
      row: 'Row',
      col: 'Column',
      box: 'Box',
      multipleCells: 'Multiple cells',
      // Additional translations
      error: 'Mistake',
      singleCandidateTechnique: 'Single Candidate Technique',
    // Technique names
      nakedSingle: 'Naked Single',
      hiddenSingleRow: 'Hidden Single (Row)',
      hiddenSingleCol: 'Hidden Single (Column)',
      hiddenSingleBox: 'Hidden Single (Box)',
      nakedPairsRow: 'Naked Pairs (Row)',
      nakedPairsCol: 'Naked Pairs (Column)',
      nakedPairsBox: 'Naked Pairs (Box)',
      hiddenPairsRow: 'Hidden Pairs (Row)',
      hiddenPairsCol: 'Hidden Pairs (Column)',
      hiddenPairsBox: 'Hidden Pairs (Box)',
      nakedTripleRow: 'Naked Triple (Row)',
      nakedTripleCol: 'Naked Triple (Column)',
      nakedTripleBox: 'Naked Triple (Box)',
      hiddenTripleRow: 'Hidden Triple (Row)',
      hiddenTripleCol: 'Hidden Triple (Column)',
      hiddenTripleBox: 'Hidden Triple (Box)',
      unknownTechnique: 'Unknown Technique',
      rowSuffix: '(Row)',
      colSuffix: '(Column)',
      boxSuffix: '(Box)',
      // Additional technique names
      nakedPair: 'Naked Pairs',
      nakedPairRow: 'Naked Pairs (Row)',
      nakedPairCol: 'Naked Pairs (Column)',
      nakedPairBox: 'Naked Pairs (Box)',
      hiddenPair: 'Hidden Pairs',
      hiddenPairRow: 'Hidden Pairs (Row)',
      hiddenPairCol: 'Hidden Pairs (Column)',
      hiddenPairBox: 'Hidden Pairs (Box)',
      nakedTriple: 'Naked Triple',
      hiddenTriple: 'Hidden Triple',
      // Control panel tabs
      keyboardTab: 'Keyboard',
      techniquesTab: 'Techniques',
      solutionTab: 'Solution',
      pencilMode: 'Pencil Mode',
      undoAction: 'Undo',
      clearCell: 'Clear Cell',
      fillCandidates: 'Refresh Candidates',
      applyTechnique: 'Apply Technique',
      solutionSteps: 'Solution Steps',
      selectTechniqueFirst: 'Please select a technique from the list first',
      noTechniquesAvailable: 'No techniques available for the current board',
      enterPencilMode: 'Enter Pencil Mode',
      exitPencilMode: 'Exit Pencil Mode',
      refreshCandidatesTooltip: 'Click to refresh candidates and load all solving techniques',
      // New translation keys
      candidatesTab: 'Candidates',
      hintsTab: 'Hints',
      solveStep: 'Solve Step',
      solveAll: 'Solve All',
      relatedPosition: 'Related Position: {position}',
      relatedNumber: 'Involving Number: {number}',
      analysisCompleted: 'Analysis Completed',
      findPairInRegion: 'Find pair in {regionType} {regionNum}',
      foundNakedPair: 'Found naked pair of numbers {numbers} in cells {cells}',
      removeCandidatesFromTargets: 'These numbers can only appear in these two cells, remove candidates {numbers} from target cells {targets}',
      findHiddenPairInRegion: 'Find number pairs that can only appear in two cells in {regionType} {regionNum}',
      foundNumbersOnlyInCells: 'Numbers {numbers} can only appear in cells {cells}',
      removeOtherCandidates: 'Target cells {cells} can only contain numbers {numbers}, remove other candidates',
      findTripleInRegion: 'Find triple in {regionType} {regionNum}',
      foundNakedTriple: 'Found naked triple of numbers {numbers} in cells {cells}',
      findHiddenTripleInRegion: 'Find number groups that can only appear in three cells in {regionType} {regionNum}'
  }
};

// 创建语言上下文
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // 从localStorage获取保存的语言或使用浏览器默认语言
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 
    (navigator.language === 'zh-CN' ? 'zh-CN' : 'en-US')
  );
  
  // 获取当前语言的翻译
  const t = (key) => {
    return translations[language]?.[key] || key;
  };
  
  // 切换语言
  const changeLanguage = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem('language', langCode);
  };
  
  const value = {
    language,
    t,
    changeLanguage,
    availableLanguages: [
      { code: 'zh-CN', name: '中文简体' },
      { code: 'en-US', name: 'English' }
    ]
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义Hook，方便使用语言上下文
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};