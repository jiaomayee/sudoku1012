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

const DiagramSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const DiagramContainer = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.border};
`;

const SudokuGridSmall = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 0;
  width: 100%;
  aspect-ratio: 1;
  max-width: 400px;
  border: 2px solid ${props => props.theme.text};
  margin-bottom: 20px;
`;

const GridCell = styled.div`
  border: 1px solid ${props => props.theme.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  background-color: ${props => {
    if (props.$highlighted) return 'rgba(100, 181, 246, 0.3)';
    if (props.$filled) return props.theme.surface;
    return 'white';
  }};
  color: ${props => props.$filled ? props.theme.text : props.theme.textSecondary};
  border-right: ${props => (props.$col + 1) % 3 === 0 && props.$col !== 8 ? '2px solid ' + props.theme.text : '1px solid ' + props.theme.textSecondary};
  border-bottom: ${props => (props.$row + 1) % 3 === 0 && props.$row !== 8 ? '2px solid ' + props.theme.text : '1px solid ' + props.theme.textSecondary};
`;

const LegendContainer = styled.div`
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  width: 100%;
  max-width: 600px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const LegendColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: ${props => props.$color};
  border: 1px solid ${props => props.theme.border};
  flex-shrink: 0;
`;

const LegendText = styled.span`
  font-size: 14px;
  color: ${props => props.theme.text};
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
          examples: t('nakedSingleExample'),
          diagram: {
            type: 'nakedSingle',
            grid: [
              [5, 3, 0, 0, 7, 0, 0, 0, 0],
              [6, 0, 0, 1, 9, 5, 0, 0, 0],
              [0, 9, 8, 0, 0, 0, 0, 6, 0],
              [8, 0, 0, 0, 6, 0, 0, 0, 3],
              [4, 0, 0, 8, 0, 3, 0, 0, 1],
              [7, 0, 0, 0, 2, 0, 0, 0, 6],
              [0, 6, 0, 0, 0, 0, 2, 8, 0],
              [0, 0, 0, 4, 1, 9, 0, 0, 5],
              [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ],
            highlightedCells: [[0, 2]],
            cellValues: { '0,2': '2' },
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '第(0,2)位为2（该行缺少数字2）' }
            ]
          }
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
          examples: t('hiddenSingleExample'),
          diagram: {
            type: 'hiddenSingle',
            grid: [
              [5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 1]],
            cellValues: { },
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '数块5的候选数仅在第一行的(0,0)的位置' }
            ]
          }
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
          examples: t('nakedPairExample'),
          diagram: {
            type: 'nakedPair',
            grid: [
              [5, 3, 0, 0, 7, 0, 0, 0, 0],
              [6, 0, 0, 1, 9, 5, 0, 0, 0],
              [0, 9, 8, 0, 0, 0, 0, 6, 0],
              [8, 0, 0, 0, 6, 0, 0, 0, 3],
              [4, 0, 0, 8, 0, 3, 0, 0, 1],
              [7, 0, 0, 0, 2, 0, 0, 0, 6],
              [0, 6, 0, 0, 0, 0, 2, 8, 0],
              [0, 0, 0, 4, 1, 9, 0, 0, 5],
              [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 1]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { color: 'rgba(255, 152, 0, 0.3)', label: t('relatedCell') || '相关单元格' },
              { label: '(0,0)和(0,1)两个格子的候选数仅有{3,7}' }
            ]
          }
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
          examples: t('hiddenPairExample'),
          diagram: {
            type: 'hiddenPair',
            grid: [
              [5, 3, 0, 0, 7, 0, 0, 0, 0],
              [6, 0, 0, 1, 9, 5, 0, 0, 0],
              [0, 9, 8, 0, 0, 0, 0, 6, 0],
              [8, 0, 0, 0, 6, 0, 0, 0, 3],
              [4, 0, 0, 8, 0, 3, 0, 0, 1],
              [7, 0, 0, 0, 2, 0, 0, 0, 6],
              [0, 6, 0, 0, 0, 0, 2, 8, 0],
              [0, 0, 0, 4, 1, 9, 0, 0, 5],
              [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 1]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '数块4和6仅出现在(0,0)和(0,1)两个格子' }
            ]
          }
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
          examples: t('pointingPairsExample'),
          diagram: {
            type: 'pointingPairs',
            grid: [
              [5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 1], [1, 0], [1, 1]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '数块8在第一个宫格中仅出现在第1行' }
            ]
          }
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
          examples: t('boxLineReductionExample'),
          diagram: {
            type: 'boxLineReduction',
            grid: [
              [5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 1], [0, 2]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '数块8在第1行仅出现在第一个宫格' }
            ]
          }
        }
      },
      {
        id: 'nakedTriples',
        name: t('nakedTripleTechnique'),
        description: t('nakedTripleTechniqueDescription'),
        details: {
          description: t('nakedTripleTechniqueDetail'),
          steps: [
            t('nakedTripleStep1'),
            t('nakedTripleStep2'),
            t('nakedTripleStep3')
          ],
          examples: t('nakedTripleExample'),
          diagram: {
            type: 'nakedTriple',
            grid: [
              [5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 1], [0, 2]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '3个格子的候选数仅有{2,3,4}' }
            ]
          }
        }
      },
      {
        id: 'hiddenTriples',
        name: t('hiddenTripleTechnique'),
        description: t('hiddenTripleTechniqueDescription'),
        details: {
          description: t('hiddenTripleTechniqueDetail'),
          steps: [
            t('hiddenTripleStep1'),
            t('hiddenTripleStep2'),
            t('hiddenTripleStep3')
          ],
          examples: t('hiddenTripleExample'),
          diagram: {
            type: 'hiddenTriple',
            grid: [
              [5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 1], [0, 2]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '数字3、5、7仅出现在三个格子中' }
            ]
          }
        }
      },
      {
        id: 'xWing',
        name: t('xWingTechnique'),
        description: t('xWingTechniqueDescription'),
        details: {
          description: t('xWingTechniqueDetail'),
          steps: [
            t('xWingStep1'),
            t('xWingStep2'),
            t('xWingStep3'),
            t('xWingStep4')
          ],
          examples: t('xWingExample'),
          diagram: {
            type: 'xWing',
            grid: [
              [5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 4], [7, 0], [7, 4]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '数字6在第0行和第7行中都仅出现在第0列和第4列位置' }
            ]
          }
        }
      },
      {
        id: 'yWing',
        name: t('yWingTechnique'),
        description: t('yWingTechniqueDescription'),
        details: {
          description: t('yWingTechniqueDetail'),
          steps: [
            t('yWingStep1'),
            t('yWingStep2'),
            t('yWingStep3'),
            t('yWingStep4')
          ],
          examples: t('yWingExample'),
          diagram: {
            type: 'yWing',
            grid: [
              [5, 3, 4, 6, 7, 8, 9, 1, 2],
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ],
            highlightedCells: [[0, 0], [0, 3], [3, 0]],
            legend: [
              { color: 'rgba(100, 181, 246, 0.3)', label: t('highlightedCell') || '高亮单元格' },
              { label: '枢纽(0,0)与两个Y-翼共享候选数' }
            ]
          }
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
            
            {selectedTechnique.details.diagram && (
              <div>
                <SectionTitle theme={theme}>{t('techniqueDiagram') || '图例'}</SectionTitle>
                <DiagramSection theme={theme}>
                  <DiagramContainer theme={theme}>
                    <SudokuGridSmall theme={theme}>
                      {Array.from({ length: 81 }).map((_, index) => {
                        const row = Math.floor(index / 9);
                        const col = index % 9;
                        const diagram = selectedTechnique.details.diagram;
                        const isHighlighted = diagram.highlightedCells && diagram.highlightedCells.some(cell => cell[0] === row && cell[1] === col);
                        const cellValue = diagram.grid ? diagram.grid[row][col] : 0;
                        const cellKey = `${row},${col}`;
                        const displayValue = diagram.cellValues && diagram.cellValues[cellKey] ? diagram.cellValues[cellKey] : cellValue;
                        return (
                          <GridCell
                            key={index}
                            theme={theme}
                            $row={row}
                            $col={col}
                            $highlighted={isHighlighted}
                            $filled={cellValue !== 0}
                          >
                            {displayValue !== 0 && displayValue}
                          </GridCell>
                        );
                      })}
                    </SudokuGridSmall>
                    {selectedTechnique.details.diagram.legend && selectedTechnique.details.diagram.legend.length > 0 && (
                      <LegendContainer theme={theme}>
                        {selectedTechnique.details.diagram.legend.map((item, index) => (
                          <LegendItem key={index}>
                            {item.color && <LegendColor theme={theme} $color={item.color} />}
                            <LegendText theme={theme}>{item.label}</LegendText>
                          </LegendItem>
                        ))}
                      </LegendContainer>
                    )}
                  </DiagramContainer>
                </DiagramSection>
              </div>
            )}
            
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