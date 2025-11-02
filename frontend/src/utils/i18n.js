// 多语言配置文件
const translations = {
  zh: {
    // 网站核心内容
    siteTitle: '数独高级技巧学习 - 开源无广告数独游戏',
    siteDescription: '专注于高级数独技巧学习的开源平台',
    
    // 导航栏
    navHome: '首页',
    navGame: '开始游戏',
    navTechniques: '高级技巧',
    navDifficulty: '难度挑战',
    navAbout: '关于我们',
    
    // 核心功能介绍
    featureAdvancedTechniques: '高级技巧学习',
    featureAdvancedTechniquesDesc: '学习X-Wing、XY-Wing、Swordfish等高级数独解法',
    featureHardPuzzles: '高难度数独',
    featureHardPuzzlesDesc: '专家级、骨灰级难度数独题目挑战',
    featureAdFree: '无广告数独',
    featureAdFreeDesc: '纯净的数独游戏体验，无任何广告干扰',
    featureOpenSource: '开源项目',
    featureOpenSourceDesc: '完全开源的数独游戏，欢迎贡献代码',
    
    // 技巧页面
    techniqueXWing: 'X-Wing 解法',
    techniqueXYWing: 'XY-Wing 数独',
    techniqueBUG: 'BUG+1 技巧',
    techniqueFish: '数独链列技巧',
    
    // 难度页面
    difficultyExpert: '专家级数独挑战',
    difficultyMaster: '骨灰级数独题目',
    difficultyChampionship: '世界谜题锦标赛级数独',
    
    // 用户意图相关
    learnTechniques: '数独技巧学习网站',
    openSourceGame: '开源数独游戏推荐',
    playAdFree: '无广告数独在线玩',
    
    // 按钮文本
    startGame: '开始游戏',
    learnMore: '了解更多',
    changeLanguage: '切换语言',
    
    // 游戏界面
    selectDifficulty: '选择难度',
    applyTechnique: '应用技巧',
    getHint: '获取提示',
    checkSolution: '检查答案'
  },
  
  en: {
    // Website core content
    siteTitle: 'Sudoku Advanced Techniques - Open Source Ad-Free Sudoku Game',
    siteDescription: 'An open-source platform focused on learning advanced Sudoku techniques',
    
    // Navigation
    navHome: 'Home',
    navGame: 'Start Game',
    navTechniques: 'Advanced Techniques',
    navDifficulty: 'Difficulty Challenge',
    navAbout: 'About Us',
    
    // Core features
    featureAdvancedTechniques: 'Advanced Techniques Learning',
    featureAdvancedTechniquesDesc: 'Learn X-Wing, XY-Wing, Swordfish and other advanced Sudoku solving methods',
    featureHardPuzzles: 'Hard Sudoku Puzzles',
    featureHardPuzzlesDesc: 'Expert and master level Sudoku challenges',
    featureAdFree: 'Ad-Free Sudoku',
    featureAdFreeDesc: 'Pure Sudoku gaming experience without any ads',
    featureOpenSource: 'Open Source Project',
    featureOpenSourceDesc: 'Fully open-source Sudoku game, contributions welcome',
    
    // Technique pages
    techniqueXWing: 'X-Wing Technique',
    techniqueXYWing: 'XY-Wing Sudoku',
    techniqueBUG: 'BUG+1 Technique',
    techniqueFish: 'Sudoku Fish Techniques',
    
    // Difficulty pages
    difficultyExpert: 'Expert Sudoku Challenges',
    difficultyMaster: 'Master Level Sudoku Puzzles',
    difficultyChampionship: 'World Puzzle Championship Sudoku',
    
    // User intent related
    learnTechniques: 'Sudoku Techniques Learning Website',
    openSourceGame: 'Open Source Sudoku Game Recommendations',
    playAdFree: 'Play Ad-Free Sudoku Online',
    
    // Button text
    startGame: 'Start Game',
    learnMore: 'Learn More',
    changeLanguage: 'Change Language',
    
    // Game interface
    selectDifficulty: 'Select Difficulty',
    applyTechnique: 'Apply Technique',
    getHint: 'Get Hint',
    checkSolution: 'Check Solution'
  }
};

// 获取当前语言
function getCurrentLanguage() {
  // 从localStorage获取语言设置
  const savedLang = localStorage.getItem('sudoku-language');
  if (savedLang && translations[savedLang]) {
    return savedLang;
  }
  
  // 从浏览器语言推断
  const browserLang = navigator.language.split('-')[0];
  if (translations[browserLang]) {
    return browserLang;
  }
  
  // 默认语言
  return 'en';
}

// 设置语言
function setLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('sudoku-language', lang);
    // 更新页面语言属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    // 触发自定义事件通知应用更新
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
}

// 获取翻译文本
function t(key, lang = getCurrentLanguage()) {
  return translations[lang]?.[key] || key;
}

// SEO优化函数：更新页面元数据
function updateSEOMetadata(lang = getCurrentLanguage()) {
  // 标题不再在此处修改，已在main.jsx中通过Object.defineProperty硬编码
  
  // 描述和其他元数据仍然根据当前语言更新
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.content = t('siteDescription', lang);
  }
  
  // 只更新描述相关的元标签，不再修改标题
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = t('siteDescription', lang);
  
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.content = t('siteDescription', lang);
}

export {
  translations,
  getCurrentLanguage,
  setLanguage,
  t,
  updateSEOMetadata
};

// 页面加载时立即更新SEO元数据
updateSEOMetadata();