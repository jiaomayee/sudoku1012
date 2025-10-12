import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useSudoku } from '../context/SudokuContext';

const Nav = styled.nav`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    padding: 0 15px;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 8px 15px;
  }
`;

const Logo = styled(Link)`
  color: ${props => props.theme?.primary || '#4a6cf7'};
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 640px) {
    margin-bottom: 8px;
    font-size: 18px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme?.text || '#333333'};
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme?.background || '#f5f5f5'};
    color: ${props => props.theme?.primary || '#4a6cf7'};
  }
  
  &.active {
    background-color: ${props => props.theme?.primary || '#4a6cf7'};
    color: white;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GameStatus = styled.div`
  color: ${props => props.theme?.textSecondary || '#666666'};
  font-size: 12px;
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    display: none;
  }
`;

// 语言切换相关样式
const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.theme?.primary || '#4a6cf7'};
  color: ${props => props.theme?.primary || '#4a6cf7'};
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    background-color: ${props => props.theme?.primary ? `${props.theme.primary}11` : '#4a6cf711'};
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
  width: 100px;
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  font-size: 12px;
  color: ${props => props.theme?.text || '#333333'};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme?.background || '#f5f5f5'};
  }
  
  &.selected {
    background-color: ${props => props.theme?.primary ? `${props.theme.primary}22` : '#4a6cf722'};
    color: ${props => props.theme?.primary || '#4a6cf7'};
    font-weight: 600;
  }
`;

const LanguageIcon = styled.span`
  font-size: 10px;
`;

const Navbar = () => {
  const { theme } = useTheme();
  const { gameStarted, gameCompleted } = useSudoku();
  const location = useLocation();
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);
  
  // 语言切换状态
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('zh'); // zh or en

  // 监听屏幕方向变化
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // 获取当前活跃的导航项
  const getActiveNavItem = () => {
    const path = location.pathname;
    if (path === '/') return 'game';
    if (path === '/home') return 'home';
    if (path.includes('/game')) return 'game';
    if (path.includes('/techniques')) return 'techniques';
    if (path.includes('/progress')) return 'progress';
    if (path.includes('/stats')) return 'stats';
    return '';
  };

  // 格式化游戏状态文本
  const getGameStatusText = () => {
    if (!gameStarted) return '';
    return gameCompleted ? '游戏已完成' : '游戏进行中';
  };

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
        <Logo to="/home">
          数独学习
        </Logo>
        {!isPortrait && (
          <>
            <NavLinks>
              <NavLink 
                to="/home" 
                className={getActiveNavItem() === 'home' ? 'active' : ''}
              >
                首页
              </NavLink>
              <NavLink 
                to="/game" 
                className={getActiveNavItem() === 'game' ? 'active' : ''}
              >
                开始游戏
              </NavLink>
              <NavLink 
                to="/techniques" 
                className={getActiveNavItem() === 'techniques' ? 'active' : ''}
              >
                技巧学习
              </NavLink>
              <NavLink 
                to="/progress" 
                className={getActiveNavItem() === 'progress' ? 'active' : ''}
              >
                游戏进度
              </NavLink>
              <NavLink 
                to="/stats" 
                className={getActiveNavItem() === 'stats' ? 'active' : ''}
              >
                统计信息
              </NavLink>
            </NavLinks>
            <RightSection>
              {gameStarted && <GameStatus>{getGameStatusText()}</GameStatus>}
              <LanguageSelector className="language-selector">
                <LanguageButton onClick={toggleDropdown}>
                  <LanguageIcon>{selectedLanguage === 'zh' ? '🇨🇳' : '🇺🇸'}</LanguageIcon>
                  {selectedLanguage === 'zh' ? '中文' : 'English'}
                  <span>{isDropdownOpen ? '▲' : '▼'}</span>
                </LanguageButton>
                
                {isDropdownOpen && (
                  <LanguageDropdown>
                    <LanguageOption 
                      className={selectedLanguage === 'zh' ? 'selected' : ''}
                      onClick={() => handleLanguageSelect('zh')}
                    >
                      <LanguageIcon>🇨🇳</LanguageIcon> 中文
                    </LanguageOption>
                    <LanguageOption 
                      className={selectedLanguage === 'en' ? 'selected' : ''}
                      onClick={() => handleLanguageSelect('en')}
                    >
                      <LanguageIcon>🇺🇸</LanguageIcon> English
                    </LanguageOption>
                  </LanguageDropdown>
                )}
              </LanguageSelector>
            </RightSection>
          </>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;