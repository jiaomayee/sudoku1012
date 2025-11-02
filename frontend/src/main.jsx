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
      })
      .catch((error) => {
        console.log('ServiceWorker 注册失败:', error);
      });
  });
}