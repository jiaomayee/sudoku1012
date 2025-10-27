import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    // 中国国旗SVG
    return (
      <svg width={size} height={size * 0.7} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#DE2910"/>
        <path d="M0 0L10 10L0 20V0Z" fill="#FFDE00"/>
        <path d="M12 7H14V9H12V7Z" fill="#FFDE00"/>
        <path d="M16 7H18V9H16V7Z" fill="#FFDE00"/>
        <path d="M12 11H14V13H12V11Z" fill="#FFDE00"/>
        <path d="M16 11H18V13H16V11Z" fill="#FFDE00"/>
        <path d="M20 11H22V13H20V11Z" fill="#FFDE00"/>
      </svg>
    );
  } else {
    // 美国国旗SVG
    return (
      <svg width={size} height={size * 0.7} viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="20" fill="#B22234"/>
        <rect y="2" width="30" height="2" fill="white"/>
        <rect y="6" width="30" height="2" fill="white"/>
        <rect y="10" width="30" height="2" fill="white"/>
        <rect y="14" width="30" height="2" fill="white"/>
        <rect y="18" width="30" height="2" fill="white"/>
        <rect width="12" height="11" fill="#3C3B6E"/>
        <rect x="1" y="1" width="1" height="1" fill="white"/>
        <rect x="3" y="1" width="1" height="1" fill="white"/>
        <rect x="5" y="1" width="1" height="1" fill="white"/>
        <rect x="7" y="1" width="1" height="1" fill="white"/>
        <rect x="9" y="1" width="1" height="1" fill="white"/>
        <rect x="1" y="3" width="1" height="1" fill="white"/>
        <rect x="3" y="3" width="1" height="1" fill="white"/>
        <rect x="5" y="3" width="1" height="1" fill="white"/>
        <rect x="7" y="3" width="1" height="1" fill="white"/>
        <rect x="9" y="3" width="1" height="1" fill="white"/>
        <rect x="1" y="5" width="1" height="1" fill="white"/>
        <rect x="3" y="5" width="1" height="1" fill="white"/>
        <rect x="5" y="5" width="1" height="1" fill="white"/>
        <rect x="7" y="5" width="1" height="1" fill="white"/>
        <rect x="9" y="5" width="1" height="1" fill="white"/>
        <rect x="1" y="7" width="1" height="1" fill="white"/>
        <rect x="3" y="7" width="1" height="1" fill="white"/>
        <rect x="5" y="7" width="1" height="1" fill="white"/>
        <rect x="7" y="7" width="1" height="1" fill="white"/>
        <rect x="9" y="7" width="1" height="1" fill="white"/>
        <rect x="1" y="9" width="1" height="1" fill="white"/>
        <rect x="3" y="9" width="1" height="1" fill="white"/>
        <rect x="5" y="9" width="1" height="1" fill="white"/>
        <rect x="7" y="9" width="1" height="1" fill="white"/>
        <rect x="9" y="9" width="1" height="1" fill="white"/>
      </svg>
    );
  }
};

const Navbar = () => {
  const { theme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  
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

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoIcon src="/sudoku-app-logo.svg" alt="Sudoku Logo" />
          SudokuTech
        </Logo>
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
      </NavContainer>
    </Nav>
  );
};

export default Navbar;