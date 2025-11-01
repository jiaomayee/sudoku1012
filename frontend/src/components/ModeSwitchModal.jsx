import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

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
  max-width: 400px;
  width: 100%;
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

const ModalTitle = styled.h2`
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

// ModalMessage component removed as per requirement

const ModeInfoCard = styled.div`
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${props => props.theme?.background || '#f5f5f5'};
  border-radius: 8px;
  border-left: 4px solid ${props => props.theme?.primary || '#3498db'};
  text-align: center;
`;

const ModeTitle = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${props => props.theme?.primary || '#3498db'};
  font-size: 18px;
`;

const ModeDescription = styled.div`
  font-size: 14px;
  opacity: 0.9;
  line-height: 1.5;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 16px;
`;

const CancelButton = styled.button`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  color: ${props => props.theme?.text || '#333333'};
  border: 2px solid ${props => props.theme?.border || '#e0e0e0'};
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme?.background || '#f5f5f5'};
  }
`;

const ConfirmButton = styled.button`
  background-color: ${props => props.theme?.primary || '#3498db'};
  color: white;
  border: 2px solid ${props => props.theme?.primary || '#3498db'};
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme?.primaryDark || '#2980b9'};
  }
`;

const ModeSwitchModal = ({ isOpen, onClose, currentMode, onConfirm }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  const targetMode = currentMode === 'game' ? 'learning' : 'game';
  
  if (!isOpen) return null;
  
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  return (
    <ModalOverlay onClick={onClose} onKeyDown={handleKeyDown}>
      <ModalContainer theme={theme} onClick={(e) => e.stopPropagation()}>
        <ModalTitle theme={theme}>
          {currentMode === 'game' ? t('switchToLearningMode', '切换到学习模式') : t('switchToGameMode', '切换到游戏模式')}
        </ModalTitle>
        

        
        <ModeInfoCard theme={theme}>
          <ModeTitle theme={theme}>
            {targetMode === 'learning' ? t('learningMode', '学习模式') : t('gameMode', '游戏模式')}
          </ModeTitle>
          <ModeDescription theme={theme}>
            {targetMode === 'learning' 
              ? t('learningModeDescription', '提供技巧学习辅助，帮助您学习数独解题技巧。')
              : t('gameModeDescription', '关闭技巧学习辅助功能，专注于游戏体验。')
            }
          </ModeDescription>
        </ModeInfoCard>
        
        <ButtonRow>
          <CancelButton theme={theme} onClick={onClose}>{t('cancel', '取消')}</CancelButton>
          <ConfirmButton theme={theme} onClick={onConfirm}>
            {targetMode === 'learning' ? t('switchToLearningMode', '切换到学习模式') : t('switchToGameMode', '切换到游戏模式')}
          </ConfirmButton>
        </ButtonRow>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModeSwitchModal;