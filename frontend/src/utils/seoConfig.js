/**
 * SEO配置文件 - 包含内链策略、关键词分布等优化配置
 */

// 页面间的相关链接配置（用于建立内链）
export const internalLinkConfig = {
  '/techniques': {
    relatedLinks: [
      { url: '/game', title: 'Play Sudoku Game' },
      { url: '/challenges', title: 'Expert Challenges' },
      { url: '/progress', title: 'Track Progress' }
    ]
  },
  '/game': {
    relatedLinks: [
      { url: '/techniques', title: 'Learn Techniques' },
      { url: '/challenges', title: 'Try Challenges' },
      { url: '/stats', title: 'View Statistics' }
    ]
  },
  '/challenges': {
    relatedLinks: [
      { url: '/game', title: 'Play Regular Game' },
      { url: '/techniques', title: 'Learn Techniques' },
      { url: '/progress', title: 'Check Progress' }
    ]
  },
  '/progress': {
    relatedLinks: [
      { url: '/techniques', title: 'Learn Techniques' },
      { url: '/stats', title: 'Detailed Statistics' },
      { url: '/challenges', title: 'Try Challenges' }
    ]
  },
  '/stats': {
    relatedLinks: [
      { url: '/progress', title: 'Overall Progress' },
      { url: '/game', title: 'Play More Games' },
      { url: '/techniques', title: 'Learn More' }
    ]
  }
};

// 页面级别的关键词分布配置
export const keywordDistributionConfig = {
  '/': {
    primaryKeywords: ['sudoku', 'advanced techniques', 'free game'],
    secondaryKeywords: ['X-Wing', 'XY-Wing', 'Swordfish', 'expert puzzles'],
    longTailKeywords: ['learn advanced sudoku', 'sudoku solving strategies']
  },
  '/techniques': {
    primaryKeywords: ['sudoku techniques', 'solving methods', 'strategy'],
    secondaryKeywords: ['X-Wing', 'XY-Wing', 'Swordfish', 'BUG+1', 'ALS-XZ'],
    longTailKeywords: ['advanced sudoku solving', 'how to solve expert sudoku']
  },
  '/game': {
    primaryKeywords: ['play sudoku', 'sudoku game', 'puzzle'],
    secondaryKeywords: ['difficulty levels', 'learning mode', 'practice'],
    longTailKeywords: ['free online sudoku game', 'sudoku with learning']
  },
  '/challenges': {
    primaryKeywords: ['expert sudoku', 'master challenges', 'difficulty'],
    secondaryKeywords: ['puzzle collection', 'competitive', 'ranking'],
    longTailKeywords: ['expert level sudoku puzzles', 'hardest sudoku challenges']
  },
  '/progress': {
    primaryKeywords: ['progress tracking', 'learning statistics', 'mastery'],
    secondaryKeywords: ['technique progress', 'performance metrics'],
    longTailKeywords: ['track sudoku learning progress', 'improvement tracking']
  }
};

// 结构化数据配置（Schema.org）
export const structuredDataConfig = {
  '@context': 'https://schema.org',
  '@type': 'EducationalApplication',
  'name': 'SudokuTech',
  'description': 'Advanced Sudoku techniques learning platform',
  'applicationCategory': 'EducationalApplication',
  'url': 'https://sudokutech.org.cn',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'CNY',
    'availability': 'https://schema.org/InStock'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'ratingCount': '100',
    'reviewCount': '50'
  },
  'author': {
    '@type': 'Organization',
    'name': 'SudokuTech',
    'url': 'https://sudokutech.org.cn'
  }
};

// 搜索引擎提交端点
export const searchEngineEndpoints = {
  google: 'https://www.google.com/ping?sitemap=',
  bing: 'https://ssl.bing.com/webmaster/api.svc/ping?siteMap=',
  baidu: 'https://data.zhanzhang.baidu.com/urls'
};

// 页面性能和Core Web Vitals指标配置
export const performanceConfig = {
  targetMetrics: {
    LCP: 2500, // Largest Contentful Paint (ms)
    FID: 100,  // First Input Delay (ms)
    CLS: 0.1   // Cumulative Layout Shift
  },
  imageLazyLoading: true,
  enablePrefetch: true,
  prefetchRoutes: ['/game', '/techniques', '/challenges']
};

/**
 * 获取页面的相关内链
 */
export const getRelatedLinks = (pathname) => {
  return internalLinkConfig[pathname] || internalLinkConfig['/'];
};

/**
 * 获取页面的关键词分布配置
 */
export const getKeywordDistribution = (pathname) => {
  return keywordDistributionConfig[pathname] || keywordDistributionConfig['/'];
};

export default {
  internalLinkConfig,
  keywordDistributionConfig,
  structuredDataConfig,
  searchEngineEndpoints,
  performanceConfig
};
