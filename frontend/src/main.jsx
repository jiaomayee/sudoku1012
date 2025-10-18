import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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