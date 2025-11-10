import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 页面标题和元数据映射配置
const pageMetadata = {
  '/': {
    title: 'Sudoku Advanced Techniques - Learn & Master Expert Sudoku Strategies',
    description: 'Free open-source Sudoku game platform focused on advanced techniques. Learn X-Wing, XY-Wing, Swordfish, and expert puzzle solving.',
    keywords: 'sudoku,advanced sudoku techniques,X-Wing solution,XY-Wing sudoku,expert sudoku'
  },
  '/home': {
    title: 'Sudoku Learning Platform - Advanced Techniques & Expert Challenges',
    description: 'Master advanced Sudoku solving techniques with interactive tutorials and practice challenges.',
    keywords: 'sudoku learning,sudoku techniques,sudoku tutorial,expert sudoku'
  },
  '/game': {
    title: 'Play Sudoku - Advanced Techniques Learning Game | SudokuTech',
    description: 'Play challenging Sudoku puzzles and learn advanced solving techniques in real-time.',
    keywords: 'play sudoku,sudoku game,sudoku puzzle solver,sudoku strategies'
  },
  '/techniques': {
    title: 'Sudoku Advanced Techniques Tutorial - X-Wing, Swordfish & More',
    description: 'Complete guide to advanced Sudoku techniques including X-Wing, XY-Wing, Swordfish, BUG+1, and ALS-XZ solving strategies.',
    keywords: 'sudoku techniques,X-Wing,XY-Wing,Swordfish,BUG+1,ALS-XZ,sudoku solving'
  },
  '/challenges': {
    title: 'Expert Sudoku Challenges - Master & Expert Difficulty Puzzles',
    description: 'Challenge yourself with expert and master level Sudoku puzzles. Test your skills and improve your solving speed.',
    keywords: 'sudoku challenges,expert sudoku,master sudoku,difficult sudoku puzzles'
  },
  '/difficulty': {
    title: 'Expert Sudoku Challenges - Master & Expert Difficulty Puzzles',
    description: 'Challenge yourself with expert and master level Sudoku puzzles. Test your skills and improve your solving speed.',
    keywords: 'sudoku challenges,expert sudoku,master sudoku,difficult sudoku puzzles'
  },
  '/progress': {
    title: 'Your Sudoku Progress - Track Learning & Mastery | SudokuTech',
    description: 'Monitor your Sudoku solving progress and track your technique mastery levels.',
    keywords: 'sudoku progress,learning tracker,sudoku statistics'
  },
  '/stats': {
    title: 'Sudoku Statistics - Analyze Your Solving Performance',
    description: 'Detailed statistics and analytics of your Sudoku solving performance and technique usage.',
    keywords: 'sudoku stats,solving analysis,technique statistics'
  },
  '/settings': {
    title: 'Settings - Customize Your Sudoku Experience',
    description: 'Configure your preferences for the Sudoku learning platform.',
    keywords: 'sudoku settings,preferences,configuration'
  }
};

/**
 * 获取当前路径对应的元数据
 */
const getMetadataForPath = (pathname) => {
  // 精确匹配
  if (pageMetadata[pathname]) {
    return pageMetadata[pathname];
  }
  
  // 路径前缀匹配（排除首页）
  for (const [path, metadata] of Object.entries(pageMetadata)) {
    if (pathname.startsWith(path) && path !== '/') {
      return metadata;
    }
  }
  
  // 默认返回首页元数据
  return pageMetadata['/'];
};

/**
 * SEO更新器组件 - 在路由变化时更新页面Meta标签
 */
export const SEOUpdater = () => {
  const location = useLocation();
  
  useEffect(() => {
    // 获取当前路由的元数据
    const metadata = getMetadataForPath(location.pathname);
    
    // 更新页面标题
    document.title = metadata.title;
    
    // 更新 description Meta标签
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.content = metadata.description;
    } else {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      descriptionMeta.content = metadata.description;
      document.head.appendChild(descriptionMeta);
    }
    
    // 更新 keywords Meta标签
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
      keywordsMeta.content = metadata.keywords;
    } else {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = metadata.keywords;
      document.head.appendChild(keywordsMeta);
    }
    
    // 更新 Open Graph标签（用于社交分享）
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = metadata.title.split(' |')[0].trim();
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = metadata.description;
    }
    
    // 更新 Twitter Card标签
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.content = metadata.title.split(' |')[0].trim();
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.content = metadata.description;
    }
    
    // 向搜索引擎提交URL更新
    if (window.location.hostname !== 'localhost') {
      // 仅在生产环境提交
      submitURLToSearchEngines(window.location.href);
    }
    
  }, [location.pathname]);
  
  return null; // 这个组件不需要渲染任何内容
};

/**
 * 向搜索引擎提交URL更新
 */
const submitURLToSearchEngines = (url) => {
  // Google提交
  try {
    new Image().src = 'https://www.google.com/ping?sitemap=' + encodeURIComponent(url);
  } catch (e) {
    // 静默处理错误
  }
  
  // Bing提交
  try {
    new Image().src = 'https://ssl.bing.com/webmaster/api.svc/ping?siteMap=' + encodeURIComponent(url);
  } catch (e) {
    // 静默处理错误
  }
};

export default SEOUpdater;
