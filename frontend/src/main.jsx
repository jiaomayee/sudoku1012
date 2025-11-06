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
import ThemeEditorPage from './pages/ThemeEditorPage';
import { SudokuContextProvider } from './context/SudokuContext';
import { UserContextProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LoadingProvider } from './context/LoadingContext';
import './styles/global.css'; // 全局样式

// 硬编码英文标题，直接覆盖原生document.title属性
Object.defineProperty(document, 'title', {
  get: function() {
    return 'Sudoku Advanced Techniques - Open Source Sudoku Game | Expert Sudoku Challenges';
  },
  set: function(newValue) {
    // 忽略任何尝试修改标题的操作
    console.log('标题修改尝试已阻止');
  },
  configurable: true
});

// 立即设置OG和Twitter标题元标签
const setOgAndTwitterTitles = () => {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (ogTitle) ogTitle.content = 'SudokuTech - Sudoku Techniques Learning Platform';
  if (twitterTitle) twitterTitle.content = 'SudokuTech - Sudoku Techniques Learning Platform';
};

// 立即执行设置元标签
setOgAndTwitterTitles();

// 页面加载完成后再次确认
window.addEventListener('DOMContentLoaded', setOgAndTwitterTitles);
window.addEventListener('load', setOgAndTwitterTitles);

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
                    <Route path="/techniques" element={<TechniqueLearningPage />} />
                    <Route path="/progress" element={<ProgressPage />} />
                    <Route path="/stats" element={<StatsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/settings/theme-editor" element={<ThemeEditorPage />} />
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

// 添加版本信息显示
const addVersionInfo = () => {
  // 创建版本信息元素
  const versionInfo = document.createElement('div');
  versionInfo.id = 'version-info';
  versionInfo.style.cssText = `
    color: #666;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    text-align: center;
    padding: 20px 0;
    margin-top: 20px;
    border-top: 1px solid #eee;
    clear: both;
  `;
  
  // 获取当前日期作为版本标识
  const now = new Date();
  const versionDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  // 从localStorage获取版本计数器，如果不存在则初始化为1
  let versionCount = localStorage.getItem(`version_${versionDate}_count`) || 1;
  // 递增计数器（这里可以根据需要调整逻辑，比如只在构建时增加）
  // 为了演示，我们暂时不自动递增，使用固定值1
  
  versionInfo.textContent = `版本: ${versionDate}.${versionCount}`;
  
  // 将版本信息添加到页面底部
  document.body.appendChild(versionInfo);
};

// 页面加载完成后添加版本信息
window.addEventListener('load', addVersionInfo);

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