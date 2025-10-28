import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

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
        {/* 大五角星 - 缩小并移至左上角 */}
        <path d="M4 3 L6 4.5 L4 6 L3 4.5 Z" fill="#FFDE00"/>
        {/* 右上小五角星 - 缩小并移至左上角区域 */}
        <path d="M7.5 1.5 L8 2.5 L9 2.5 L8.25 3.25 L8.5 4 L7.5 3.25 L6.5 4 L6.75 3.25 L6 2.5 L7 2.5 Z" fill="#FFDE00" transform="rotate(-30 7.5 3)"/>
        {/* 左上小五角星 - 缩小并移至左上角区域 */}
        <path d="M9.5 2.5 L10 3.5 L11 3.5 L10.25 4.25 L10.5 5 L9.5 4.25 L8.5 5 L8.75 4.25 L8 3.5 L9 3.5 Z" fill="#FFDE00" transform="rotate(-10 9.5 4)"/>
        {/* 左下小五角星 - 缩小并移至左上角区域 */}
        <path d="M9.5 5.5 L10 6.5 L11 6.5 L10.25 7.25 L10.5 8 L9.5 7.25 L8.5 8 L8.75 7.25 L8 6.5 L9 6.5 Z" fill="#FFDE00" transform="rotate(70 9.5 7)"/>
        {/* 右下小五角星 - 缩小并移至左上角区域 */}
        <path d="M7.5 7 L8 8 L9 8 L8.25 8.75 L8.5 9.5 L7.5 8.75 L6.5 9.5 L6.75 8.75 L6 8 L7 8 Z" fill="#FFDE00" transform="rotate(110 7.5 8.5)"/>
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

const Navbar = () => {
  const { theme } = useTheme();
  const { language, changeLanguage } = useLanguage();
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