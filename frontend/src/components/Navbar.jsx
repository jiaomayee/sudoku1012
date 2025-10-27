import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

// 创建模式上下文
const ModeContext = createContext();

// 模式提供者组件
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('game'); // 'game' 或 'learning'

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

// 使用模式的钩子
export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

const Nav = styled.nav`
  background-color: #2196F3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  
  /* 竖屏显示时减小标题栏高度 */
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 8px 16px;
  }
`;

const Logo = styled(Link)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  /* 竖屏显示时减小字体大小 */
  @media (max-width: 768px) and (orientation: portrait) {
    font-size: 16px;
    gap: 6px;
  }
`;

const LogoIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
  
  /* 竖屏显示时减小图标尺寸 */
  @media (max-width: 768px) and (orientation: portrait) {
    width: 22px;
    height: 22px;
  }
`;

// 语言切换相关样式
const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border: none;
  color: ${props => props.theme?.text || '#333333'};
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-height: 36px;
  
  /* 竖屏显示时减小按钮尺寸 */
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 6px 12px;
    font-size: 12px;
    min-height: 30px;
    gap: 6px;
  }
  
  &:hover {
    background-color: ${props => props.theme?.surfaceHover || '#f8f9fa'};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1001;
`;

const LanguageOption = styled.button`
  background-color: transparent;
  border: none;
  width: 110px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  font-size: 13px;
  color: ${props => props.theme?.text || '#333333'};
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: ${props => props.theme?.background || '#f5f5f5'};
  }
  
  &.selected {
    background-color: ${props => props.theme?.primary ? `${props.theme.primary}22` : '#4a6cf722'};
    color: ${props => props.theme?.primary || '#4a6cf7'};
    font-weight: 600;
  }
`;

const FlagContainer = styled.span`
  width: 20px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-size: 12px;
  font-weight: bold;
`;

// 更美观的SVG语言图标组件
const LanguageFlagIcon = ({ langCode, size = 20 }) => {
  if (langCode === 'zh-CN') {
    // 中国国旗SVG - 正确的五星红旗设计
    return (
      <svg width={size} height={size * 0.667} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 红色背景 */}
        <rect width="30" height="20" fill="#DE2910"/>
        {/* 大五角星 */}
        <path d="M5,7 L6.176,7.382 L5.727,8.25 L5,8.5 L4.273,8.25 L3.824,7.382 L4.049,6.691 L4.824,6.382 L5.447,6.691 L5,7 Z" fill="#FFDE00"/>
        {/* 第一个小五角星 */}
        <path d="M10,2 L10.588,2.191 L10.364,2.625 L10,2.75 L9.636,2.625 L9.412,2.191 L9.555,1.846 L9.824,1.685 L10.134,1.846 L10,2 Z" fill="#FFDE00"/>
        {/* 第二个小五角星 */}
        <path d="M11,3 L11.588,3.191 L11.364,3.625 L11,3.75 L10.636,3.625 L10.412,3.191 L10.555,2.846 L10.824,2.685 L11.134,2.846 L11,3 Z" fill="#FFDE00"/>
        {/* 第三个小五角星 */}
        <path d="M11,5 L11.588,5.191 L11.364,5.625 L11,5.75 L10.636,5.625 L10.412,5.191 L10.555,4.846 L10.824,4.685 L11.134,4.846 L11,5 Z" fill="#FFDE00"/>
        {/* 第四个小五角星 */}
        <path d="M10,6 L10.588,6.191 L10.364,6.625 L10,6.75 L9.636,6.625 L9.412,6.191 L9.555,5.846 L9.824,5.685 L10.134,5.846 L10,6 Z" fill="#FFDE00"/>
      </svg>
    );
  } else {
    // 美国国旗SVG
    return (
      <svg width={size} height={size * 0.667} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#B22234"/>
        <rect y="2" width="30" height="2" fill="white"/>
        <rect y="6" width="30" height="2" fill="white"/>
        <rect y="10" width="30" height="2" fill="white"/>
        <rect y="14" width="30" height="2" fill="white"/>
        <rect y="18" width="30" height="2" fill="white"/>
        <rect width="12" height="11" fill="#3C3B6E"/>
        <g fill="white">
          <rect x="1" y="1" width="1" height="1"/>
          <rect x="3" y="1" width="1" height="1"/>
          <rect x="5" y="1" width="1" height="1"/>
          <rect x="7" y="1" width="1" height="1"/>
          <rect x="9" y="1" width="1" height="1"/>
          <rect x="1" y="3" width="1" height="1"/>
          <rect x="3" y="3" width="1" height="1"/>
          <rect x="5" y="3" width="1" height="1"/>
          <rect x="7" y="3" width="1" height="1"/>
          <rect x="9" y="3" width="1" height="1"/>
          <rect x="1" y="5" width="1" height="1"/>
          <rect x="3" y="5" width="1" height="1"/>
          <rect x="5" y="5" width="1" height="1"/>
          <rect x="7" y="5" width="1" height="1"/>
          <rect x="9" y="5" width="1" height="1"/>
          <rect x="1" y="7" width="1" height="1"/>
          <rect x="3" y="7" width="1" height="1"/>
          <rect x="5" y="7" width="1" height="1"/>
          <rect x="7" y="7" width="1" height="1"/>
          <rect x="9" y="7" width="1" height="1"/>
          <rect x="1" y="9" width="1" height="1"/>
          <rect x="3" y="9" width="1" height="1"/>
          <rect x="5" y="9" width="1" height="1"/>
          <rect x="7" y="9" width="1" height="1"/>
          <rect x="9" y="9" width="1" height="1"/>
        </g>
      </svg>
    );
  }
};

// 设置图标组件
const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

// 游戏模式图标组件
const GameModeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 17c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
  </svg>
);

// 学习模式图标组件
const LearningModeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    <path d="M12 15.4l-3.78 1.98 0.69-4.06-2.97-2.88 4.08-0.6 1.98-3.7 1.98 3.7 4.08 0.6-2.97 2.88 0.69 4.06L12 15.4z"/>
  </svg>
);

const Navbar = () => {
  const { theme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { mode, setMode } = useMode(); // 使用模式上下文
  const navigate = useNavigate();
  
  // 语言切换状态
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 移除导航栏滚动隐藏功能，使其与主界面一体

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 语言切换处理
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (langCode) => {
    changeLanguage(langCode);
    setIsDropdownOpen(false);
  };

  // 切换模式
  const toggleMode = () => {
    setMode(mode === 'game' ? 'learning' : 'game');
  };

  // 跳转到设置页面
  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoIcon src="/sudoku-app-logo.svg" alt="Sudoku Logo" />
          SudokuTech
        </Logo>
        <div style={{ display: 'flex', gap: '10px' }}>
          <LanguageSelector className="language-selector">
              <LanguageButton onClick={toggleDropdown}>
                <LanguageFlagIcon langCode={language} size={20} />
                {language === 'zh-CN' ? '中文' : 'English'}
              </LanguageButton>
              
              {isDropdownOpen && (
                <LanguageDropdown>
                  <LanguageOption 
                    className={language === 'zh-CN' ? 'selected' : ''}
                    onClick={() => handleLanguageSelect('zh-CN')}
                  >
                    <LanguageFlagIcon langCode="zh-CN" size={16} />
                    中文
                  </LanguageOption>
                  <LanguageOption 
                    className={language === 'en-US' ? 'selected' : ''}
                    onClick={() => handleLanguageSelect('en-US')}
                  >
                    <LanguageFlagIcon langCode="en-US" size={16} />
                    English
                  </LanguageOption>
                </LanguageDropdown>
              )}
          </LanguageSelector>
          
          {/* 模式切换按钮 */}
          <LanguageButton onClick={toggleMode} title={mode === 'game' ? '切换到学习模式' : '切换到游戏模式'}>
            {mode === 'game' ? <LearningModeIcon /> : <GameModeIcon />}
            <span style={{ marginLeft: '6px' }}>
              {mode === 'game' ? (language === 'zh-CN' ? '学习模式' : 'Learning') : (language === 'zh-CN' ? '游戏模式' : 'Game')}
            </span>
          </LanguageButton>
          
          {/* 设置按钮 */}
          <LanguageButton onClick={goToSettings} title="设置">
            <SettingsIcon />
          </LanguageButton>
        </div>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;