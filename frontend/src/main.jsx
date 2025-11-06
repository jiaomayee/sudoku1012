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

// 注册 Service Worker 以启用 PWA 功能
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker 注册成功:', registration.scope);
        
        // 监听service worker更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // 有新版本可用
                console.log('发现新版本，提示用户刷新');
              }
            });
          }
        });
        
        // 检查控制当前页面的service worker是否更新
        if (registration.active) {
          // 发送消息给service worker，检查是否有更新
          registration.active.postMessage({ type: 'CHECK_FOR_UPDATE' });
        }
      })
      .catch((error) => {
        console.log('ServiceWorker 注册失败:', error);
      });
    
    // 监听来自service worker的消息
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'CACHE_UPDATED') {
        console.log('收到缓存更新通知');
        // 显示更新提示
        const updateNotification = document.createElement('div');
        updateNotification.style.cssText = `
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #28a745;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;
        
        updateNotification.innerHTML = `
          <span>发现新版本!</span>
          <button id="refreshBtn" style="background: white; color: #28a745; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">
            立即刷新
          </button>
        `;
        
        document.body.appendChild(updateNotification);
        
        // 添加刷新按钮事件
        document.getElementById('refreshBtn').addEventListener('click', () => {
          // 强制刷新，清除缓存
          window.location.reload(true);
        });
        
        // 如果用户30秒内没有点击刷新按钮，自动刷新
        setTimeout(() => {
          if (document.body.contains(updateNotification)) {
            window.location.reload(true);
          }
        }, 30000);
      }
    });
    
    // 定期检查更新
    setInterval(() => {
      navigator.serviceWorker.ready.then((registration) => {
        registration.update().then((updated) => {
          if (updated) {
            console.log('已更新到新版本');
          }
        });
      });
    }, 60000); // 每分钟检查一次更新
  });
}