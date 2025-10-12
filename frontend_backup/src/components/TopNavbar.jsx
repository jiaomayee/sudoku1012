import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const GameLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme?.primary || '#4a6cf7'};
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  
  @media (max-width: 640px) {
    font-size: 20px;
    
    /* 在小屏幕横屏设备上简化为图标 */
    @media (orientation: landscape) {
      font-size: 32px;
      letter-spacing: -5px;
      overflow: hidden;
      width: 32px;
    }
  }
`;

const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => props.theme?.primary || '#4a6cf7'};
  color: ${props => props.theme?.primary || '#4a6cf7'};
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background-color: ${props => props.theme?.primary ? `${props.theme.primary}11` : '#4a6cf711'};
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1001;
`;

const LanguageOption = styled.button`
  background-color: transparent;
  border: none;
  width: 120px;
  padding: 10px 16px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
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
  font-size: 12px;
`;

const TopNavbar = () => {
  const { theme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('zh'); // zh or en

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
    // 这里可以添加语言切换的逻辑
    console.log('切换语言为:', lang);
  };

  // 点击外部关闭下拉菜单
  React.useEffect(() => {
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

  return (
    <NavbarContainer>
      <LogoContainer>
        <GameLogo>数独学习应用</GameLogo>
      </LogoContainer>
      
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
    </NavbarContainer>
  );
};

export default TopNavbar;