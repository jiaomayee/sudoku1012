import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ControlPanelContainer = styled.div.attrs({ className: 'control-panel' })`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: calc(var(--board-width) * 2 / 3);
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  
  /* 横屏模式下，高度与棋盘一致 */
  height: var(--board-width);
  overflow-y: auto;
  
  /* 竖屏模式下自适应高度 */
  @media (max-width: 991px) {
    height: auto;
    width: 100%;
    padding: 12px;
    border-radius: 6px;
  }
`;

const PanelTitle = styled.h3`
  font-size: 14px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 8px 0;
  padding-bottom: 6px;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  display: none; // 隐藏标题以节省空间
`;

// 标签页容器
const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  min-height: 0; /* 允许flex子元素缩小 */
  overflow: hidden;
`;

// 标签页标题栏
const TabBar = styled.div`
  display: flex;
  border-bottom: 2px solid ${props => props.theme?.border || '#e0e0e0'};
  margin-bottom: 12px;
  padding-bottom: 4px;
`;

// 标签按钮
const TabButton = styled(({ isActive, ...props }) => <button {...props} />)`
  flex: 1;
  padding: 8px 16px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.isActive ? (props.theme?.primary || '#3498db') : (props.theme?.textSecondary || '#7f8c8d')};
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0;
  box-sizing: border-box;
  
  &:hover {
    color: ${props => props.theme?.primary || '#3498db'};
  }
  
  &.active {
    border-bottom-color: ${props => props.theme?.primary || '#3498db'};
    color: ${props => props.theme?.primary || '#3498db'};
  }
`;

// 标签页内容区域
const TabContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 0;
  padding: 2px;
`;

// 数字键盘标签页内容
const NumberPad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 15px;
  padding: 4px;
  align-content: start;
  
  /* 竖屏模式下使用6列布局，缩小按钮尺寸 */
  @media (max-width: 991px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    padding: 4px;
  }
`;

const NumberButton = styled(({isActive, disabled, ...props}) => <button {...props} />)`
  background-color: ${props => props.disabled ? (props.theme?.disabled || '#f5f5f5') : 
                      (props.isActive ? (props.theme?.primary || '#3498db') : (props.theme?.surface || '#ffffff'))};
  color: ${props => props.disabled ? (props.theme?.textDisabled || '#bdc3c7') : 
           (props.isActive ? 'white' : (props.theme?.text || '#333333'))};
  border: 2px solid ${props => props.theme?.primary || '#3498db'};
  padding: 8px;
  border-radius: 8px;
  font-size: calc(var(--board-width) * 0.055);
  font-weight: 600;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all 0.2s ease;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  /* 增加触摸区域大小，更适合手机操作 */
  min-height: 40px;
  max-height: 60px;
  
  /* 竖屏模式下减小按钮尺寸和字体 */
  @media (max-width: 991px) {
    padding: 6px;
    font-size: calc(var(--board-width) * 0.045);
    min-height: 36px;
    border-radius: 6px;
    border-width: 1.5px;
  }
  
  &:hover:not(:disabled) {
    background-color: ${props => props.isActive ? (props.theme?.primaryDark || '#2980b9') : (props.theme?.primary || '#3498db') + '22'};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// 操作按钮区域
const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 4px;
  margin-top: auto;
  
  /* 竖屏模式下减小内边距和间距 */
  @media (max-width: 991px) {
    padding: 2px;
    gap: 4px;
  }
`;

const ActionButton = styled(({isDanger, ...props}) => <button {...props} />)`
  background-color: ${props => props.isDanger ? (props.theme?.error || '#ff4444') : (props.theme?.surface || '#ffffff')};
  color: ${props => props.isDanger ? 'white' : (props.theme?.text || '#333333')};
  border: 2px solid ${props => props.isDanger ? (props.theme?.error || '#ff4444') : (props.theme?.border || '#e0e0e0')};
  padding: 14px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  margin: 4px 0;
  box-sizing: border-box;
  /* 增加触摸区域大小 */
  min-height: 50px;
  
  /* 竖屏模式下调整按钮尺寸 */
  @media (max-width: 991px) {
    padding: 10px 12px;
    font-size: 13px;
    min-height: 40px;
    margin: 2px 0;
    border-width: 1.5px;
  }
  
  &:hover {
    background-color: ${props => props.isDanger ? (props.theme?.error || '#ff4444') + 'aa' : (props.theme?.border || '#e0e0e0') + '44'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// 技巧列表项
const TechniqueItem = styled.div`
  padding: 12px;
  margin-bottom: 8px;
  background-color: ${props => props.isActive ? (props.theme?.primary || '#3498db') + '15' : (props.theme?.surface || '#ffffff')};
  border: 1px solid ${props => props.isActive ? (props.theme?.primary || '#3498db') : (props.theme?.border || '#e0e0e0')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => (props.theme?.primary || '#3498db') + '10'};
    transform: translateX(2px);
  }
`;

const TechniqueName = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.isActive ? (props.theme?.primary || '#3498db') : (props.theme?.text || '#34495e')};
  margin: 0 0 4px 0;
`;

const TechniqueDescription = styled.p`
  font-size: 12px;
  color: ${props => props.theme?.textSecondary || '#7f8c8d'};
  margin: 0;
  line-height: 1.3;
`;

// 技巧解题说明
const TechniqueSolution = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 10px;
`;

const SolutionTitle = styled.h4`
  font-size: 16px;
  color: ${props => props.theme?.text || '#34495e'};
  margin: 0;
`;

const SolutionStep = styled.div`
  padding: 10px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 6px;
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
`;

const StepNumber = styled.span`
  font-weight: 600;
  color: ${props => props.theme?.primary || '#3498db'};
  margin-right: 8px;
`;

// 候选数切换
const NotesToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 8px;
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  margin-top: auto;
`;

const ToggleLabel = styled.span`
  font-size: 14px;
  color: ${props => props.theme?.text || '#34495e'};
  font-weight: 500;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: ${props => props.theme?.primary || '#3498db'};
  }
  
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme?.border || '#e0e0e0'};
  transition: 0.4s;
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ControlPanel = ({ 
  onNumberSelect, 
  onClearCell,
  onUndo,
  onTogglePencilMode,
  selectedNumber 
}) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('keyboard'); // 'keyboard', 'techniques', 'solution'
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  
  // 模拟可用技巧数据
  const availableTechniques = [
    {
      id: 'naked_single',
      name: '唯一数法',
      description: '某个单元格只有一个可能的数字可填'
    },
    {
      id: 'hidden_single',
      name: '隐性唯一数法',
      description: '某一行/列/宫格中某个数字只能填在一个单元格'
    },
    {
      id: 'naked_pair',
      name: '数对法',
      description: '两个单元格中只有两个可能的数字'
    },
    {
      id: 'hidden_pair',
      name: '隐性数对法',
      description: '某一行/列/宫格中两个数字只能填在两个单元格'
    }
  ];
  
  // 模拟技巧解题步骤
  const techniqueSteps = {
    naked_single: [
      '在宫格(1,2)中，检查所有可能的数字',
      '发现该单元格只能填入数字5',
      '确认行、列、宫格中没有其他5'
    ],
    hidden_single: [
      '查看第一行中数字7的可能位置',
      '发现数字7只能填在单元格(1,5)',
      '即使该单元格还有其他可能数字，但数字7只能填在这里'
    ],
    naked_pair: [
      '在第二行中，单元格(2,3)和(2,7)中都只有数字3和8',
      '这两个单元格形成数对，可以排除该行其他单元格中的3和8',
      '在该行的其他单元格中删除候选数3和8'
    ],
    hidden_pair: [
      '在第三宫格中，数字4和6只能出现在两个单元格中',
      '这两个单元格形成隐性数对',
      '可以删除这两个单元格中的其他候选数'
    ]
  };

  const handleTechniqueSelect = (techniqueId) => {
    setSelectedTechnique(techniqueId);
    setActiveTab('solution');
  };

  return (
    <ControlPanelContainer theme={theme}>
      <TabsContainer>
        {/* 标签页标题栏 */}
        <TabBar>
          <TabButton 
            isActive={activeTab === 'keyboard'} 
            className={activeTab === 'keyboard' ? 'active' : ''}
            onClick={() => setActiveTab('keyboard')}
          >
            数字键盘
          </TabButton>
          <TabButton 
            isActive={activeTab === 'techniques'} 
            className={activeTab === 'techniques' ? 'active' : ''}
            onClick={() => setActiveTab('techniques')}
          >
            可用技巧
          </TabButton>
          <TabButton 
            isActive={activeTab === 'solution'} 
            className={activeTab === 'solution' ? 'active' : ''}
            onClick={() => setActiveTab('solution')}
          >
            技巧解题
          </TabButton>
        </TabBar>
        
        {/* 标签页内容 */}
        <TabContent>
          {activeTab === 'keyboard' && (
            <>
              <NumberPad>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
                  <NumberButton
                    key={number}
                    isActive={selectedNumber === number}
                    onClick={() => onNumberSelect(number)}
                  >
                    {number}
                  </NumberButton>
                ))}
              </NumberPad>
              
              <ActionButtons>
                <ActionButton onClick={onUndo}>
                  撤回
                </ActionButton>
                <ActionButton isDanger onClick={onClearCell}>
                  清除
                </ActionButton>
                <ActionButton onClick={onTogglePencilMode}>
                  铅笔
                </ActionButton>
              </ActionButtons>
            </>
          )}
          
          {activeTab === 'techniques' && (
            <>
              {availableTechniques.map(technique => (
                <TechniqueItem
                  key={technique.id}
                  isActive={selectedTechnique === technique.id}
                  onClick={() => handleTechniqueSelect(technique.id)}
                >
                  <TechniqueName isActive={selectedTechnique === technique.id}>
                    {technique.name}
                  </TechniqueName>
                  <TechniqueDescription>{technique.description}</TechniqueDescription>
                </TechniqueItem>
              ))}
              
              {availableTechniques.length === 0 && (
                <div style={{ textAlign: 'center', padding: '20px', color: theme?.textSecondary || '#666' }}>
                  当前没有可应用的技巧
                </div>
              )}
            </>
          )}
          
          {activeTab === 'solution' && (
            <TechniqueSolution>
              {selectedTechnique ? (
                <>
                  <SolutionTitle>
                    {availableTechniques.find(t => t.id === selectedTechnique)?.name || '技巧详解'}
                  </SolutionTitle>
                  {techniqueSteps[selectedTechnique]?.map((step, index) => (
                    <SolutionStep key={index}>
                      <StepNumber>{index + 1}.</StepNumber>
                      {step}
                    </SolutionStep>
                  ))}
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: theme?.textSecondary || '#666' }}>
                  请先从"可用技巧"标签页选择一个技巧
                </div>
              )}
            </TechniqueSolution>
          )}
        </TabContent>
      </TabsContainer>
    </ControlPanelContainer>
  );
};

export default ControlPanel;