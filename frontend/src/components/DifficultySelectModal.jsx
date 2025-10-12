import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { DIFFICULTY_LEVELS } from '../context/SudokuContext';

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
  max-width: 400px;
  width: 90%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: modalFadeIn 0.3s ease-out;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalTitle = styled.h2`
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 20px 0;
  font-size: 20px;
  text-align: center;
`;

const DifficultyButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`;

const DifficultyButton = styled(({ isSelected, ...props }) => <button {...props} />)`
  background-color: ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.surface || '#ffffff')};
  color: ${props => props.isSelected ? 'white' : (props.theme?.text || '#333333')};
  border: 2px solid ${props => props.theme?.primary || '#3498db'};
  padding: 16px 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${props => props.isSelected ? (props.theme?.primaryDark || '#2980b9') : (props.theme?.primary || '#3498db') + '22'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const DifficultyDescription = styled.div`
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.7;
  font-weight: normal;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
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

const difficultySettings = {
  [DIFFICULTY_LEVELS.EASY]: {
    name: '简单',
    description: '初学者友好，空格较少'
  },
  [DIFFICULTY_LEVELS.MEDIUM]: {
    name: '中等',
    description: '进阶挑战，需要一定技巧'
  },
  [DIFFICULTY_LEVELS.HARD]: {
    name: '困难',
    description: '专家级别，逻辑推理'
  },
  [DIFFICULTY_LEVELS.EXPERT]: {
    name: '专家',
    description: '极高难度，需要高级技巧'
  }
};

const DifficultySelectModal = ({ isOpen, onClose, onSelectDifficulty, initialDifficulty }) => {
  const { theme } = useTheme();
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(initialDifficulty || DIFFICULTY_LEVELS.MEDIUM);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelectDifficulty(selectedDifficulty);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  return (
    <ModalOverlay onClick={onClose} onKeyDown={handleKeyDown}>
      <ModalContainer theme={theme} onClick={(e) => e.stopPropagation()}>
        <ModalTitle theme={theme}>选择难度</ModalTitle>
        
        <DifficultyButtons>
          {Object.entries(DIFFICULTY_LEVELS).map(([key, value]) => {
            const setting = difficultySettings[value];
            return (
              <DifficultyButton
                key={key}
                isSelected={selectedDifficulty === value}
                onClick={() => setSelectedDifficulty(value)}
                theme={theme}
              >
                {setting.name}
                <DifficultyDescription>{setting.description}</DifficultyDescription>
              </DifficultyButton>
            );
          })}
        </DifficultyButtons>
        
        <ButtonRow>
          <CancelButton theme={theme} onClick={onClose}>取消</CancelButton>
          <ConfirmButton theme={theme} onClick={handleConfirm}>开始游戏</ConfirmButton>
        </ButtonRow>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DifficultySelectModal;