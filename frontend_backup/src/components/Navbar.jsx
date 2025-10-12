import React from 'react';
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

const ThemeToggle = styled.button`
  background-color: ${props => props.theme?.background || '#f5f5f5'};
  color: ${props => props.theme?.text || '#333333'};
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  
  &:hover {
    background-color: ${props => props.theme?.primary || '#4a6cf7'};
    color: white;
    border-color: ${props => props.theme?.primary || '#4a6cf7'};
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

const Navbar = () => {
  const { theme, toggleTheme, themeMode } = useTheme();
  const { gameStarted, gameCompleted } = useSudoku();
  const location = useLocation();

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

  return (
    <Nav>
      <NavContainer>
        <Logo to="/home">
          数独学习
        </Logo>
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
          <ThemeToggle 
            onClick={toggleTheme} 
            title={`切换到${themeMode === 'light' ? '深色' : '浅色'}主题`}
          >
            {themeMode === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
        </RightSection>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;