import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useSudoku } from '../context/SudokuContext';
import { useLoading } from '../context/LoadingContext';
import LoadingSpinner from '../components/LoadingSpinner';

// 定义挑战卡片类型
const challengeCards = [
  {
    id: 'easy',
    titleKey: 'beginnerChallenge',
    descriptionKey: 'beginnerDescription',
    icon: '👶',
    difficulty: 'easy',
    timeKey: 'timeEasy'
  },
  {
    id: 'medium',
    titleKey: 'intermediateChallenge',
    descriptionKey: 'intermediateDescription',
    icon: '🧩',
    difficulty: 'medium',
    timeKey: 'timeMedium'
  },
  {
    id: 'hard',
    titleKey: 'expertChallenge',
    descriptionKey: 'expertDescription',
    icon: '💪',
    difficulty: 'hard',
    timeKey: 'timeHard'
  },
  {
    id: 'expert',
    titleKey: 'masterChallenge',
    descriptionKey: 'masterDescription',
    icon: '🎯',
    difficulty: 'expert',
    timeKey: 'timeExpert'
  },
  {
    id: 'daily',
    titleKey: 'dailyChallenge',
    descriptionKey: 'dailyDescription',
    icon: '📅',
    difficulty: 'medium',
    timeKey: 'timeDaily'
  },
  {
    id: 'special',
    titleKey: 'specialChallenge',
    descriptionKey: 'specialDescription',
    icon: '🔥',
    difficulty: 'hard',
    timeKey: 'timeSpecial'
  }
];

const ChallengesPage = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { setDifficulty, startNewGame } = useSudoku();
  const { executeWithLoading, isLoading } = useLoading();

  // 获取难度对应的标签颜色
  const getDifficultyBadgeColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return theme.success || '#28a745';
      case 'medium':
        return theme.warning || '#ffc107';
      case 'hard':
        return theme.error || '#dc3545';
      case 'expert':
        return theme.primary || '#007bff';
      default:
        return theme.textSecondary || '#6c757d';
    }
  };

  // 首字母大写
  const capitalizeFirst = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // 格式化时间显示
  const formatTime = (time) => {
    return time;
  };

  // 处理挑战卡片点击
  const handleChallengeClick = async (challenge) => {
    try {
      setDifficulty(challenge.difficulty);
      const puzzle = await executeWithLoading(
        () => startNewGame(null, challenge.difficulty),
        t('generatingNewPuzzle')
      );
      
      if (puzzle) {
        navigate(`/game/${puzzle.id}`);
      }
    } catch (error) {
      console.error('启动挑战失败:', error);
    }
  };

  return (
    <PageContainer theme={theme}>
      <PageTitle theme={theme}>{t('difficulty')}</PageTitle>
      
      {isLoading ? (
        <LoadingContainer>
          <LoadingSpinner showMessage={true} message={t('loading')} />
        </LoadingContainer>
      ) : (
        <ChallengesGrid theme={theme}>
          {challengeCards.map((challenge) => (
            <ChallengeCard 
              key={challenge.id}
              theme={theme}
              onClick={() => handleChallengeClick(challenge)}
            >
              <IconContainer theme={theme}>
                <Icon>{challenge.icon}</Icon>
              </IconContainer>
              
              <DifficultyBadge 
                theme={theme} 
                color={getDifficultyBadgeColor(challenge.difficulty)}
              >
                {capitalizeFirst(challenge.difficulty)}
              </DifficultyBadge>
              
              <CardTitle theme={theme}>{t(challenge.titleKey)}</CardTitle>
              <CardDescription theme={theme}>{t(challenge.descriptionKey)}</CardDescription>
              
              <CardFooter theme={theme}>
                <TimeInfo theme={theme}>
                  ⏱️ {t(challenge.timeKey)}
                </TimeInfo>
                <StartButton 
                  theme={theme} 
                  onClick={(e) => {
                    e.stopPropagation(); // 阻止事件冒泡，避免触发卡片的点击事件
                    handleChallengeClick(challenge);
                  }}
                >
                  {t('startGame')}
                </StartButton>
              </CardFooter>
            </ChallengeCard>
          ))}
        </ChallengesGrid>
      )}
    </PageContainer>
  );
};

// 样式定义
const PageContainer = styled.div`
  padding: 20px 0;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${props => props.theme.text || '#333'};
  text-align: center;
  @media (max-width: 640px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ChallengeCard = styled.div`
  background-color: ${props => props.theme.surface || '#fff'};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${props => props.theme.background || '#f5f5f5'};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 24px;
  max-width: 32px;
  max-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DifficultyBadge = styled.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${props => props.color};
  color: white;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${props => props.theme.text || '#333'};
`;

const CardDescription = styled.p`
  color: ${props => props.theme.textSecondary || '#666'};
  margin-bottom: 15px;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeInfo = styled.div`
  color: ${props => props.theme.textSecondary || '#666'};
  font-size: 0.9rem;
`;

const StartButton = styled.button`
  background-color: ${props => props.theme.primary || '#007bff'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.primaryDark || '#0056b3'};
  }
`;

export default ChallengesPage;