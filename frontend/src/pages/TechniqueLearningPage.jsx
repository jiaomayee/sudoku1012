import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';

const LearningContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TechniqueList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const TechniqueCard = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 5px solid ${props => props.mastered ? props.theme.success : props.theme.primary};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const TechniqueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const TechniqueTitle = styled.h3`
  font-size: 22px;
  color: ${props => props.theme.text};
  margin: 0;
`;

const MasteryBadge = styled.div`
  background-color: ${props => props.mastered ? props.theme.success : props.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

const TechniqueDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.background};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: ${props => props.mastered ? props.theme.success : props.theme.primary};
  border-radius: 4px;
  width: ${props => props.percentage}%;
  transition: width 0.3s ease;
`;

const PracticeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`;

const TechniqueDetail = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const DetailTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.border};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    border-color: ${props => props.theme.primary};
  }
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.text};
  margin: 0;
`;

const ExampleContainer = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 20px;
`;

const StepsList = styled.ol`
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StepItem = styled.li`
  font-size: 16px;
  color: ${props => props.theme.text};
  line-height: 1.6;
`;

const PracticeButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: ${props => props.theme.primary}aa;
    transform: translateY(-2px);
  }
`;

const TechniqueLearningPage = () => {
  const { theme } = useTheme();
  const { techniquesProgress, incrementTechniquePractice } = useUser();
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  // 技巧数据
  const techniques = [
    {
      id: 'nakedSingles',
      name: '唯一候选数 (Naked Single)',
      description: '最简单的数独技巧，当一个格子只有一个可能的数字时填入该数字。',
      details: {
        description: '唯一候选数是最基础的数独解题技巧。当一个空格子所在的行、列和3x3宫格中已经包含了除一个数字外的所有其他数字时，这个空格子只能填入剩下的那个数字。',
        steps: [
          '观察一个空格子',
          '检查该格子所在的行，列出已经存在的数字',
          '检查该格子所在的列，列出已经存在的数字',
          '检查该格子所在的3x3宫格，列出已经存在的数字',
          '如果以上三个区域已经包含了除一个数字外的所有数字（1-9），则填入剩下的那个数字'
        ],
        examples: '例如：一个格子所在的行包含数字1、2、3、4、5、6、7、9，所在的列包含数字1、2、3、4、5、6、8，所在的宫格包含数字1、2、3、4、5、7、8、9。那么这个格子只能填入数字8。'
      }
    },
    {
      id: 'hiddenSingles',
      name: '隐性唯一 (Hidden Single)',
      description: '当一个数字只能出现在某一行、列或宫格的某个特定格子时，填入该数字。',
      details: {
        description: '隐性唯一技巧比唯一候选数稍微复杂一些。当一个数字在某一行、列或3x3宫格中只能出现在一个特定的空格子时，即使该格子可能有其他候选数，但这个数字必须填入该格子。',
        steps: [
          '选择一个数字（1-9）',
          '检查某一行，确定该数字可能的放置位置',
          '如果在该行中，该数字只能放在一个特定格子，则填入该数字',
          '对每一列和每个3x3宫格重复同样的检查'
        ],
        examples: '例如：在某一行中，数字5只能放在某个特定格子中，尽管该格子可能还有其他候选数（如2和5），但因为数字5在该行中没有其他可能的放置位置，所以这个格子必须填入5。'
      }
    },
    {
      id: 'nakedPairs',
      name: '数对 (Naked Pairs)',
      description: '当两个格子在同一区域（行、列或宫格）中具有相同的两个候选数时，可以排除该区域其他格子中这两个数字。',
      details: {
        description: '数对技巧是一种排除法技巧。当在同一行、列或3x3宫格中有两个格子都只有相同的两个候选数时，这两个数字必须分别填入这两个格子，因此可以从该区域的其他格子的候选数中排除这两个数字。',
        steps: [
          '在同一行、列或3x3宫格中寻找两个格子',
          '确认这两个格子恰好有相同的两个候选数',
          '从该区域的其他格子的候选数中排除这两个数字'
        ],
        examples: '例如：在同一行中，两个格子都只有候选数3和7。这意味着这两个数字必须分别填入这两个格子，因此该行的其他格子中不可能是3或7，可以从它们的候选数中排除这两个数字。'
      }
    },
    {
      id: 'hiddenPairs',
      name: '隐性数对 (Hidden Pairs)',
      description: '当两个数字只能出现在同一区域的两个特定格子中时，可以排除这两个格子中的其他候选数。',
      details: {
        description: '隐性数对是数对的一种变体。当在同一行、列或3x3宫格中，两个特定的数字只能出现在两个特定的格子中时，这两个格子必须包含这两个数字，可以排除这两个格子中的其他候选数。',
        steps: [
          '在同一行、列或3x3宫格中选择两个数字',
          '检查这两个数字是否只能出现在该区域的两个特定格子中',
          '如果是，则可以从这两个格子中排除所有其他候选数，只保留这两个数字'
        ],
        examples: '例如：在同一行中，数字4和6只能出现在两个特定的格子中，尽管这两个格子可能有其他候选数。这意味着这两个格子必须包含数字4和6，所以可以从这两个格子中删除其他候选数。'
      }
    },
    {
      id: 'pointingPairs',
      name: '指向对 (Pointing Pairs)',
      description: '当一个数字在某个3x3宫格中只能出现在同一行或同一列时，可以排除该行或列中其他宫格内该数字的可能性。',
      details: {
        description: '指向对技巧利用3x3宫格和行/列的关系进行排除。当在某个3x3宫格中，一个数字只能出现在同一行或同一列的格子中时，这个数字在该行或列的其他3x3宫格中就不能出现在相同的行或列位置。',
        steps: [
          '选择一个3x3宫格',
          '对于某个数字，检查它在该宫格中可能的位置',
          '如果这些位置全部位于同一行或同一列',
          '则可以从该行或列的其他3x3宫格中排除该数字出现在相同行或列位置的可能性'
        ],
        examples: '例如：在某个3x3宫格中，数字2只能出现在该宫格的第一行的两个格子中。这意味着在这一行的其他3x3宫格中，数字2不能出现在第一行的位置。'
      }
    },
    {
      id: 'boxLineReduction',
      name: '宫行列排除 (Box-Line Reduction)',
      description: '当一个数字在某一行或列中只能出现在同一个3x3宫格内时，可以排除该宫格中其他格子的该数字可能性。',
      details: {
        description: '宫行列排除是指向对的反向应用。当在某一行或列中，一个数字只能出现在某个特定的3x3宫格中时，可以排除该宫格中其他格子出现该数字的可能性。',
        steps: [
          '选择某一行或列',
          '对于某个数字，检查它在该行或列中可能的位置',
          '如果这些位置全部位于同一个3x3宫格中',
          '则可以从该3x3宫格的其他格子中排除该数字'
        ],
        examples: '例如：在某一行中，数字8只能出现在该行的前三个格子（属于第一个3x3宫格）。这意味着在第一个3x3宫格中，数字8只能出现在这三个格子中，可以从该宫格的其他六个格子中排除数字8。'
      }
    }
  ];

  // 处理技巧选择
  const handleTechniqueSelect = (technique) => {
    setSelectedTechnique(technique);
  };

  // 关闭技巧详情
  const handleCloseDetail = () => {
    setSelectedTechnique(null);
  };

  // 练习技巧
  const handlePracticeTechnique = (techniqueId) => {
    incrementTechniquePractice(techniqueId);
    // 跳转到游戏页面或特定的练习模式
    // 使用翻译系统的toast提示
    const techniqueName = techniques.find(t => t.id === techniqueId)?.name;
    toast.info(t('startPractice', { techniqueName }), {
      position: 'top-right',
      autoClose: 2000
    });
  };

  // 计算技巧掌握程度
  const getMasteryPercentage = (techniqueId) => {
    const progress = techniquesProgress[techniqueId] || { mastered: 0, practiced: 0 };
    // 简化的掌握度计算：每练习10次增加20%的掌握度，最高100%
    return Math.min(100, (progress.practiced / 10) * 20);
  };

  // 判断技巧是否已掌握
  const isTechniqueMastered = (techniqueId) => {
    return getMasteryPercentage(techniqueId) >= 80;
  };

  return (
    <LearningContainer>
      {selectedTechnique ? (
        <TechniqueDetail theme={theme}>
          <DetailHeader>
            <DetailTitle theme={theme}>{selectedTechnique.name}</DetailTitle>
            <CloseButton onClick={handleCloseDetail} theme={theme}>关闭</CloseButton>
          </DetailHeader>
          <DetailContent>
            <div>
              <SectionTitle theme={theme}>技巧说明</SectionTitle>
              <p style={{ fontSize: '16px', color: theme.textSecondary, lineHeight: '1.6' }}>
                {selectedTechnique.details.description}
              </p>
            </div>
            
            <div>
              <SectionTitle theme={theme}>使用步骤</SectionTitle>
              <StepsList>
                {selectedTechnique.details.steps.map((step, index) => (
                  <StepItem key={index} theme={theme}>{step}</StepItem>
                ))}
              </StepsList>
            </div>
            
            <div>
              <SectionTitle theme={theme}>示例</SectionTitle>
              <ExampleContainer theme={theme}>
                <p style={{ fontSize: '16px', color: theme.textSecondary, lineHeight: '1.6' }}>
                  {selectedTechnique.details.examples}
                </p>
              </ExampleContainer>
            </div>
            
            <PracticeButton 
              onClick={() => handlePracticeTechnique(selectedTechnique.id)} 
              theme={theme}
            >
              开始练习
            </PracticeButton>
          </DetailContent>
        </TechniqueDetail>
      ) : (
        <>
          <h2 style={{ fontSize: '32px', color: theme.text, margin: 0 }}>数独技巧学习</h2>
          <p style={{ fontSize: '18px', color: theme.textSecondary, marginBottom: '30px' }}>
            点击技巧卡片了解详情，掌握各种数独解题方法
          </p>
          <TechniqueList>
            {techniques.map(technique => {
              const progress = techniquesProgress[technique.id] || { mastered: 0, practiced: 0 };
              const percentage = getMasteryPercentage(technique.id);
              const mastered = isTechniqueMastered(technique.id);
              
              return (
                <TechniqueCard 
                  key={technique.id}
                  onClick={() => handleTechniqueSelect(technique)}
                  mastered={mastered}
                  theme={theme}
                >
                  <TechniqueHeader>
                    <TechniqueTitle theme={theme}>{technique.name}</TechniqueTitle>
                    <MasteryBadge mastered={mastered} theme={theme}>
                      {mastered ? '已掌握' : '学习中'}
                    </MasteryBadge>
                  </TechniqueHeader>
                  <TechniqueDescription theme={theme}>{technique.description}</TechniqueDescription>
                  <ProgressBar theme={theme}>
                    <ProgressFill percentage={percentage} mastered={mastered} theme={theme} />
                  </ProgressBar>
                  <PracticeInfo theme={theme}>
                    <span>练习次数: {progress.practiced}</span>
                    <span>掌握度: {percentage.toFixed(0)}%</span>
                  </PracticeInfo>
                </TechniqueCard>
              );
            })}
          </TechniqueList>
        </>
      )}
    </LearningContainer>
  );
};

export default TechniqueLearningPage;