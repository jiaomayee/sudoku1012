import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.theme?.textSecondary || '#666666'};
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme?.background || '#f5f5f5'};
    color: ${props => props.theme?.text || '#333333'};
  }
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.span`
  color: ${props => props.theme?.text || '#333333'};
  font-size: 16px;
`;

const ThemeToggle = styled.button`
  background-color: ${props => props.theme?.background || '#f5f5f5'};
  color: ${props => props.theme?.text || '#333333'};
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;
  
  &:hover {
    background-color: ${props => props.theme?.primary || '#4a6cf7'};
    color: white;
    border-color: ${props => props.theme?.primary || '#4a6cf7'};
  }
`;

const SettingsModal = ({ isOpen, onClose }) => {
  const { theme, toggleTheme, themeMode } = useTheme();
  
  if (!isOpen) return null;
  
  const handleToggleTheme = () => {
    toggleTheme();
  };
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>设置</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <SettingItem>
          <SettingLabel>主题切换</SettingLabel>
          <ThemeToggle onClick={handleToggleTheme}>
            {themeMode === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
        </SettingItem>
        
        {/* 这里可以添加其他设置项 */}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SettingsModal;