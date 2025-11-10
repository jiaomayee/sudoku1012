import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import HomePage from './pages/HomePage';
import SudokuGamePage from './pages/SudokuGamePage';
import TechniqueLearningPage from './pages/TechniqueLearningPage';
import ProgressPage from './pages/ProgressPage';
import StatsPage from "./pages/StatisticsPage.jsx";
import SettingsPage from './pages/SettingsPage';
import ChallengesPage from './pages/ChallengesPage.jsx';
import { SudokuContextProvider } from './context/SudokuContext';
import { UserContextProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider } from './context/LoadingContext';
import './styles/global.css'; // 全局样式

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

// 获取当前路由对应的元数据
const getMetadataForPath = (pathname) => {
  // 精确匹配
  if (pageMetadata[pathname]) {
    return pageMetadata[pathname];
  }
  // 路径前缀匹配
  for (const [path, metadata] of Object.entries(pageMetadata)) {
    if (pathname.startsWith(path) && path !== '/') {
      return metadata;
    }
  }
  // 默认返回首页元数据
  return pageMetadata['/'];
};

// 更新页面标题和Meta标签的函数
const updatePageMetadata = (pathname) => {
  const metadata = getMetadataForPath(pathname);
  
  // 更新页面标题
  document.title = metadata.title;
  
  // 更新description Meta标签
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) descriptionMeta.content = metadata.description;
  
  // 更新keywords Meta标签
  let keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta) keywordsMeta.content = metadata.keywords;
  
  // 更新Open Graph标签
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = metadata.title.split(' |')[0].trim();
  
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = metadata.description;
  
  // 更新Twitter Card标签
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.content = metadata.title.split(' |')[0].trim();
  
  let twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.content = metadata.description;
};

// 初始化元数据
updatePageMetadata(window.location.pathname);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
      <LoadingProvider>
        <UserContextProvider>
          <SudokuContextProvider>
            <Router>
                <App>
                  <Routes>
                    <Route path="/" element={<SudokuGamePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/game" element={<SudokuGamePage />} />
                    <Route path="/game/:puzzleId" element={<SudokuGamePage />} />
                    <Route path="/techniques" element={<TechniqueLearningPage />} />
                    <Route path="/progress" element={<ProgressPage />} />
                    <Route path="/stats" element={<StatsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/difficulty" element={<ChallengesPage />} />
                    <Route path="/challenges" element={<ChallengesPage />} />
                  </Routes>
                </App>
              </Router>
          </SudokuContextProvider>
        </UserContextProvider>
      </LoadingProvider>
      </LanguageProvider>
    </ThemeProvider>
    <ToastContainer 
      position="top-right" 
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </React.StrictMode>
);

// 版本信息已移至config/version.js，并由Footer组件显示

// 注册 Service Worker 以启用 PWA 功能
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker 注册成功:', registration.scope);
        
        // 监听service worker更新 - 这是真正检测新版本的地方
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // 有新版本可用 - 只在真正有新版本时显示弹窗
                console.log('发现新版本，提示用户刷新');
                showUpdateNotification();
              }
            });
          }
        });
      })
      .catch((error) => {
        console.log('ServiceWorker 注册失败:', error);
      });
  });
}

// 显示更新通知的函数
function showUpdateNotification() {
  // 检查是否已存在更新通知，避免重复创建
  if (document.getElementById('update-notification')) {
    console.log('更新通知已存在，不再创建');
    return;
  }
  
  // 获取当前语言设置，默认为英文
  const currentLang = localStorage.getItem('language') || 'en';
  const messages = {
    en: { updateAvailable: 'New version available!', updateNow: 'Update Now' },
    zh: { updateAvailable: '网站有新版本可用！', updateNow: '立即更新' }
  };
  
  // 显示更新提示，使用蓝色背景以与用户描述一致
  const updateNotification = document.createElement('div');
  updateNotification.id = 'update-notification';
  updateNotification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4a6fa5;
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;
  
  updateNotification.innerHTML = `
    <span>${messages[currentLang].updateAvailable}</span>
    <button id="refreshBtn" style="background: white; color: #4a6fa5; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">
      ${messages[currentLang].updateNow}
    </button>
  `;
  
  document.body.appendChild(updateNotification);
  
  // 简单直接的按钮点击处理
  updateNotification.querySelector('button').onclick = function() {
    // 立即移除弹窗
    if (updateNotification.parentNode === document.body) {
      document.body.removeChild(updateNotification);
    }
    
    // 刷新页面加载新版本
    setTimeout(() => {
      window.location.reload();
    }, 10);
  };
  
  // 如果用户30秒内没有点击刷新按钮，自动移除弹窗但不自动刷新
  setTimeout(() => {
    if (document.body.contains(updateNotification)) {
      document.body.removeChild(updateNotification);
      console.log('更新通知已自动移除');
    }
  }, 30000);
}