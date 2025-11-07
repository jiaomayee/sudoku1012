import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import { useLanguage } from '../context/LanguageContext';
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
  border-left: 5px solid ${props => props.$mastered ? props.theme.success : props.theme.primary};
  
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
  background-color: ${props => props.$mastered ? props.theme.success : props.theme.primary};
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
  background-color: ${props => props.$mastered ? props.theme.success : props.theme.primary};
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
  const { t } = useLanguage();
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  const navigate = useNavigate();

  // 获取技巧数据（根据当前语言）
  const getTechniques = () => {
    return [
      {
        id: 'nakedSingles',
        name: t('nakedSingleTechnique'),
        description: t('nakedSingleTechniqueDescription'),
        details: {
          description: t('nakedSingleTechniqueDetail'),
          steps: [
            t('nakedSingleStep1'),
            t('nakedSingleStep2'),
            t('nakedSingleStep3'),
            t('nakedSingleStep4'),
            t('nakedSingleStep5')
          ],
          examples: t('nakedSingleExample')
        }
      },
      {
        id: 'hiddenSingles',
        name: t('hiddenSingleTechnique'),
        description: t('hiddenSingleTechniqueDescription'),
        details: {
          description: t('hiddenSingleTechniqueDetail'),
          steps: [
            t('hiddenSingleStep1'),
            t('hiddenSingleStep2'),
            t('hiddenSingleStep3'),
            t('hiddenSingleStep4')
          ],
          examples: t('hiddenSingleExample')
        }
      },
      {
        id: 'nakedPairs',
        name: t('nakedPairTechnique'),
        description: t('nakedPairTechniqueDescription'),
        details: {
          description: t('nakedPairTechniqueDetail'),
          steps: [
            t('nakedPairStep1'),
            t('nakedPairStep2'),
            t('nakedPairStep3')
          ],
          examples: t('nakedPairExample')
        }
      },
      {
        id: 'hiddenPairs',
        name: t('hiddenPairTechnique'),
        description: t('hiddenPairTechniqueDescription'),
        details: {
          description: t('hiddenPairTechniqueDetail'),
          steps: [
            t('hiddenPairStep1'),
            t('hiddenPairStep2'),
            t('hiddenPairStep3')
          ],
          examples: t('hiddenPairExample')
        }
      },
      {
        id: 'pointingPairs',
        name: t('pointingPairsTechnique'),
        description: t('pointingPairsTechniqueDescription'),
        details: {
          description: t('pointingPairsTechniqueDetail'),
          steps: [
            t('pointingPairsStep1'),
            t('pointingPairsStep2'),
            t('pointingPairsStep3'),
            t('pointingPairsStep4')
          ],
          examples: t('pointingPairsExample')
        }
      },
      {
        id: 'boxLineReduction',
        name: t('boxLineReductionTechnique'),
        description: t('boxLineReductionTechniqueDescription'),
        details: {
          description: t('boxLineReductionTechniqueDetail'),
          steps: [
            t('boxLineReductionStep1'),
            t('boxLineReductionStep2'),
            t('boxLineReductionStep3'),
            t('boxLineReductionStep4')
          ],
          examples: t('boxLineReductionExample')
        }
      }
    ];
  };
  
  const techniques = getTechniques();

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
    // 跳转到游戏页面，传递技巧ID作为参数
    const techniqueName = techniques.find(t => t.id === techniqueId)?.name;
    toast.info(t('startPractice', { techniqueName }), {
      position: 'top-right',
      autoClose: 2000
    });
    // 导航到游戏页面，并传递当前技巧ID作为查询参数
    navigate(`/game?techniqueId=${techniqueId}`);
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
            <CloseButton onClick={handleCloseDetail} theme={theme}>{t('close')}</CloseButton>
          </DetailHeader>
          <DetailContent>
            <div>
              <SectionTitle theme={theme}>{t('techniqueDescription')}</SectionTitle>
              <p style={{ fontSize: '16px', color: theme.textSecondary, lineHeight: '1.6' }}>
                {selectedTechnique.details.description}
              </p>
            </div>
            
            <div>
              <SectionTitle theme={theme}>{t('techniqueSteps')}</SectionTitle>
              <StepsList>
                {selectedTechnique.details.steps.map((step, index) => (
                  <StepItem key={index} theme={theme}>{step}</StepItem>
                ))}
              </StepsList>
            </div>
            
            <div>
              <SectionTitle theme={theme}>{t('techniqueExamples')}</SectionTitle>
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
              {t('startPracticeButton')}
            </PracticeButton>
          </DetailContent>
        </TechniqueDetail>
      ) : (
        <>
          <h2 style={{ fontSize: '32px', color: theme.text, margin: 0 }}>{t('techniqueLearningTitle')}</h2>
          <p style={{ fontSize: '18px', color: theme.textSecondary, marginBottom: '30px' }}>
            {t('techniqueLearningDescription')}
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
                  $mastered={mastered}
                  theme={theme}
                >
                  <TechniqueHeader>
                    <TechniqueTitle theme={theme}>{technique.name}</TechniqueTitle>
                    <MasteryBadge $mastered={mastered} theme={theme}>
                      {mastered ? t('mastered') : t('learning')}
                    </MasteryBadge>
                  </TechniqueHeader>
                  <TechniqueDescription theme={theme}>{technique.description}</TechniqueDescription>
                  <ProgressBar theme={theme}>
                    <ProgressFill percentage={percentage} $mastered={mastered} theme={theme} />
                  </ProgressBar>
                  <PracticeInfo theme={theme}>
                    <span>{t('practiceCount')}: {progress.practiced}</span>
                    <span>{t('masteryLevel')}: {percentage.toFixed(0)}%</span>
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