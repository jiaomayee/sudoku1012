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
  margin: 0 0 24px 0;
  font-size: 22px;
  text-align: center;
  font-weight: 700;
  position: relative;
  display: inline-block;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme?.primary || '#3498db'};
    border-radius: 3px;
  }
`;

const DifficultyButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 20px;
`;

const DifficultyButton = styled(({ isSelected, ...props }) => <button {...props} />)`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.border || '#e0e0e0')};
  border-radius: 8px;
  background-color: ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.surface || '#ffffff')};
  color: ${props => props.isSelected ? 'white' : (props.theme?.text || '#333333')};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-align: left;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
  box-sizing: border-box;
  
  // 添加渐变背景效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(52, 152, 219, 0.1), transparent);
    transition: all 0.5s ease;
  }
  
  // 悬停效果（仅在非移动设备上）
  @media (hover: hover) {
    &:hover {
      background-color: ${props => props.isSelected ? (props.theme?.primaryDark || '#2980b9') : (props.theme?.surfaceHighlight || '#f5f5f5')};
      transform: translateX(4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
      
      &::before {
        left: 100%;
      }
    }
  }
  
  // 触摸反馈
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* 移除:last-child选择器，使用grid的gap属性控制间距 */
  
  // 不同难度的特殊样式
  &.easy {
    border-color: ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.success || '#2ecc71')};
    
    &:hover {
      background-color: ${props => props.isSelected ? (props.theme?.primaryDark || '#2980b9') : (props.theme?.success || '#2ecc71') + '10'};
    }
  }
  
  &.medium {
    border-color: ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.warning || '#f39c12')};
    
    &:hover {
      background-color: ${props => props.isSelected ? (props.theme?.primaryDark || '#2980b9') : (props.theme?.warning || '#f39c12') + '10'};
    }
  }
  
  &.hard {
    border-color: ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.error || '#e74c3c')};
    
    &:hover {
      background-color: ${props => props.isSelected ? (props.theme?.primaryDark || '#2980b9') : (props.theme?.error || '#e74c3c') + '10'};
    }
  }
  
  &.expert {
    border-color: ${props => props.isSelected ? (props.theme?.primary || '#3498db') : (props.theme?.text || '#34495e')};
    
    &:hover {
      background-color: ${props => props.isSelected ? (props.theme?.primaryDark || '#2980b9') : (props.theme?.text || '#34495e') + '10'};
    }
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
                className={key.toLowerCase()}
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