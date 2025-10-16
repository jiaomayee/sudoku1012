import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContainer = styled.div`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-family: inherit;
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  transform: translateY(0);
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: translateY(-20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  // 小屏幕适配
  @media (max-width: 576px) {
    padding: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 24px;
  text-align: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 22px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme?.primary || '#3498db'};
    border-radius: 3px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.theme?.textSecondary || '#666666'};
  padding: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme?.background || '#f5f5f5'};
    color: ${props => props.theme?.text || '#333333'};
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme?.borderLight || '#f0f0f0'};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.span`
  color: ${props => props.theme?.text || '#333333'};
  font-size: 14px;
  font-weight: 500;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${props => props.theme?.primary || '#4a6cf7'};
    color: white;
    border-color: ${props => props.theme?.primary || '#4a6cf7'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

const SettingsSection = styled.div`
  margin-bottom: 24px;
  
  h3 {
    margin: 0 0 12px 0;
    color: ${props => props.theme?.text || '#333333'};
    font-size: 16px;
    font-weight: 600;
  }
`;

const ThemeOption = styled.button`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 8px;
  border: 2px solid ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.border || '#e0e0e0')};
  border-radius: 8px;
  background-color: ${props => props.isSelected ? (props.theme?.surfaceHighlight || '#f5f5f5') : (props.theme?.surface || '#ffffff')};
  color: ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.text || '#333333')};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    border-color: ${props => props.theme?.primary || '#3498db'};
    background-color: ${props => props.theme?.surfaceHighlight || '#f5f5f5'};
    transform: translateX(2px);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  span.check {
    color: ${props => props.theme?.primary || '#3498db'};
    font-weight: bold;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.checked ? (props.theme?.primary || '#3498db') : (props.theme?.border || '#ccc')};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 24px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  span:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: ${props => props.checked ? 'translateX(24px) scale(1.1)' : 'scale(1)'};
  }
  
  input:checked + span:before {
    transform: translateX(24px) scale(1.1);
  }
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    span:hover:before {
      transform: ${props => props.checked ? 'translateX(24px) scale(1.2)' : 'scale(1.2)'};
    }
  }
`;

const SettingsModal = ({ isOpen, onClose }) => {
  const { theme, themeMode, toggleTheme, availableThemes } = useTheme();
  
  if (!isOpen) return null;
  
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer theme={theme} onClick={e => e.stopPropagation()}>
        <ModalHeader theme={theme}>
          <ModalTitle>设置</ModalTitle>
          <CloseButton theme={theme} onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <SettingsSection theme={theme}>
          <h3>主题选择</h3>
          {availableThemes && availableThemes.map((availableTheme) => (
            <ThemeOption
              key={availableTheme.id}
              theme={theme}
              isSelected={themeMode === availableTheme.id}
              onClick={() => toggleTheme(availableTheme.id)}
            >
              {availableTheme.name}
              {themeMode === availableTheme.id && <span className="check">✓</span>}
            </ThemeOption>
          ))}
        </SettingsSection>
        
        <SettingsSection theme={theme}>
          <h3>游戏设置</h3>
          <SettingItem theme={theme}>
            <SettingLabel>音效</SettingLabel>
            <ToggleSwitch theme={theme} checked={false}>
              <input type="checkbox" />
              <span></span>
            </ToggleSwitch>
          </SettingItem>
          <SettingItem theme={theme}>
            <SettingLabel>自动检查</SettingLabel>
            <ToggleSwitch theme={theme} checked={true}>
              <input type="checkbox" defaultChecked />
              <span></span>
            </ToggleSwitch>
          </SettingItem>
          <SettingItem theme={theme}>
            <SettingLabel>显示提示</SettingLabel>
            <ToggleSwitch theme={theme} checked={true}>
              <input type="checkbox" defaultChecked />
              <span></span>
            </ToggleSwitch>
          </SettingItem>
        </SettingsSection>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SettingsModal;