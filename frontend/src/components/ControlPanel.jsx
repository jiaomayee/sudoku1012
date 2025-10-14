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

const NumberButton = styled(({isActive, disabled, isPencilMode, ...props}) => <button {...props} />)`
  background-color: ${props => {
    if (props.disabled) return props.theme?.disabled || '#f5f5f5';
    if (props.isActive) return props.theme?.primary || '#3498db';
    if (props.isPencilMode) return '#e0f7fa';
    return props.theme?.surface || '#ffffff';
  }};
  color: ${props => {
    if (props.disabled) return props.theme?.textDisabled || '#bdc3c7';
    if (props.isActive) return 'white';
    if (props.isPencilMode) return '#00838f';
    return props.theme?.text || '#333333';
  }};
  border: 2px solid ${props => props.isPencilMode ? '#26a69a' : (props.theme?.primary || '#3498db')};
  padding: 8px;
  border-radius: 8px;
  font-size: calc(var(--board-width) * 0.055);
  font-weight: 600;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  // 简化transition，只保留必要的颜色变化，移除所有可能导致尺寸/位置变化的属性
  transition: background-color 0.2s ease;
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
  
  /* 横屏模式下增大按钮尺寸和文字大小 */
  @media (min-width: 992px) {
    padding: 12px;
    font-size: calc(var(--board-width) * 0.065);
    min-height: 50px;
    max-height: 80px;
    border-radius: 10px;
  }
  
  /* 竖屏模式下减小按钮尺寸和字体 */
  @media (max-width: 991px) {
    padding: 6px;
    font-size: calc(var(--board-width) * 0.045);
    min-height: 36px;
    border-radius: 6px;
    border-width: 1.5px;
  }
  
  &:hover:not(:disabled) {
    background-color: ${props => {
      if (props.isActive) return props.theme?.primaryDark || '#2980b9';
      if (props.isPencilMode) return '#b2ebf2';
      return (props.theme?.primary || '#3498db') + '22';
    }};
    // 确保没有任何transform或box-shadow效果
  }
  
  &:active:not(:disabled) {
    // 移除box-shadow，确保按钮保持完全稳定
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

const ActionButton = styled(({isDanger, isActive, ...props}) => <button {...props} />)`
  background-color: ${props => {
    if (props.isDanger) return props.theme?.error || '#ff4444';
    if (props.isActive) return props.theme?.primary || '#3498db';
    return props.theme?.surface || '#ffffff';
  }};
  color: ${props => {
    if (props.isDanger) return 'white';
    if (props.isActive) return 'white';
    return props.theme?.text || '#333333';
  }};
  border: 2px solid ${props => {
    if (props.isDanger) return props.theme?.error || '#ff4444';
    if (props.isActive) return props.theme?.primary || '#3498db';
    return props.theme?.border || '#e0e0e0';
  }};
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
    background-color: ${props => {
      if (props.isDanger) return (props.theme?.error || '#ff4444') + 'aa';
      if (props.isActive) return props.theme?.primaryDark || '#2980b9';
      return (props.theme?.border || '#e0e0e0') + '44';
    }};
    // 移除transform，防止鼠标移入时的位置变化
  }
  
  &:active {
    // 移除transform，保持按钮稳定
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
  selectedNumber,
  isPencilMode
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
            键盘
          </TabButton>
          <TabButton 
            isActive={activeTab === 'techniques'} 
            className={activeTab === 'techniques' ? 'active' : ''}
            onClick={() => setActiveTab('techniques')}
          >
            技巧
          </TabButton>
          <TabButton 
            isActive={activeTab === 'solution'} 
            className={activeTab === 'solution' ? 'active' : ''}
            onClick={() => setActiveTab('solution')}
          >
            解题
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
                    isPencilMode={isPencilMode}
                    onClick={() => onNumberSelect(number)}
                  >
                    {number}
                  </NumberButton>
                ))}
              </NumberPad>
              
              <ActionButtons style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '4px', alignItems: 'center', justifyContent: 'center'}}>
                {/* 撤回按钮 - 使用左箭头图标表示撤回操作 */}
                <ActionButton 
                  onClick={onUndo}
                  title="撤回"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </ActionButton>
                
                {/* 清除按钮 - 使用垃圾桶图标表示清空单元格内容 */}
                <ActionButton 
                  onClick={onClearCell}
                  title="清空单元格"
                  isDanger
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    <line x1="10" x2="10" y1="11" y2="17"/>
                    <line x1="14" x2="14" y1="11" y2="17"/>
                  </svg>
                </ActionButton>
                
                {/* 铅笔按钮 - 使用铅笔图标表示铅笔模式 */}
                <ActionButton 
                  onClick={onTogglePencilMode}
                  title={isPencilMode ? "退出铅笔模式" : "进入铅笔模式"}
                  isActive={isPencilMode}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                  </svg>
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