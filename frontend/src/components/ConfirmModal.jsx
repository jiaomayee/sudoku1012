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
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const ModalMessage = styled.p`
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 24px 0;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
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
  flex: 1;
  max-width: 120px;

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
  flex: 1;
  max-width: 120px;

  &:hover {
    background-color: ${props => props.theme?.primaryDark || '#2980b9'};
  }
`;

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText, cancelText }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  
  if (!isOpen) return null;
  
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  return (
    <ModalOverlay onClick={onClose} onKeyDown={handleKeyDown}>
      <ModalContainer theme={theme} onClick={(e) => e.stopPropagation()}>
        <ModalTitle theme={theme}>{title}</ModalTitle>
        <ModalMessage theme={theme}>{message}</ModalMessage>
        <ButtonRow>
          <CancelButton theme={theme} onClick={onClose}>
            {cancelText || t('cancel', '取消')}
          </CancelButton>
          <ConfirmButton theme={theme} onClick={() => {
            onConfirm();
            onClose();
          }}>
            {confirmText || t('confirm', '确认')}
          </ConfirmButton>
        </ButtonRow>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmModal;