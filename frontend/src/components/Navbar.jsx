import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
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
`;

const Logo = styled(Link)`
  color: ${props => props.theme?.primary || '#4a6cf7'};
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

// 语言切换相关样式
const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border: none;
  color: ${props => props.theme?.text || '#333333'};
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
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
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 2px;
`;

const Navbar = () => {
  const { theme } = useTheme();
  
  // 语言切换状态
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('zh'); // zh or en

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

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    // 这里可以添加语言切换的逻辑
    console.log('切换语言为:', lang);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoIcon src="/logo-main.svg" alt="Sudoku Logo" />
          SudokuTech
        </Logo>
        <LanguageSelector className="language-selector">
            <LanguageButton onClick={toggleDropdown}>
              <FlagContainer>CN</FlagContainer> 中文 {isDropdownOpen ? '▲' : '▼'}
            </LanguageButton>
            
            {isDropdownOpen && (
              <LanguageDropdown>
                <LanguageOption 
                  className={selectedLanguage === 'zh' ? 'selected' : ''}
                  onClick={() => handleLanguageSelect('zh')}
                >
                  <FlagContainer>CN</FlagContainer> 中文
                </LanguageOption>
                <LanguageOption 
                  className={selectedLanguage === 'en' ? 'selected' : ''}
                  onClick={() => handleLanguageSelect('en')}
                >
                  <FlagContainer>US</FlagContainer> English
                </LanguageOption>
              </LanguageDropdown>
            )}
        </LanguageSelector>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;