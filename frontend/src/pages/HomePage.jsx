import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import { useSudoku, DIFFICULTY_LEVELS } from '../context/SudokuContext';
import { useLoading } from '../context/LoadingContext';
import { useLanguage } from '../context/LanguageContext';
import LoadingSpinner from '../components/LoadingSpinner';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0;
  @media (max-width: 640px) {
    gap: 30px;
    padding: 10px 0;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 40px 20px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 30px 15px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  color: ${props => props.theme?.primary || '#4a6cf7'};
  margin-bottom: 20px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${props => props.theme?.textSecondary || '#666666'};
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: ${props => props.theme?.primary || '#4a6cf7'};
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  min-width: 200px;
  text-align: center;
  
  &:hover {
    background-color: ${props => props.theme?.primary ? `${props.theme.primary}aa` : '#4a6cf7aa'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  color: ${props => props.theme?.primary || '#4a6cf7'};
  border: 2px solid ${props => props.theme?.primary || '#4a6cf7'};
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 200px;
  text-align: center;
  
  &:hover {
    background-color: ${props => props.theme?.primary ? `${props.theme.primary}11` : '#4a6cf711'};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    width: 100%;
    max-width: 300px;
  }
`;

const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  @media (max-width: 640px) {
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 48px;
  color: ${props => props.theme?.primary || '#4a6cf7'};
  display: flex;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme?.textSecondary || '#666666'};
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

const QuickStartSection = styled.section`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme?.text || '#333333'};
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

const DifficultyButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const DifficultyButton = styled.button`
  background-color: ${props => props.selected ? (props.theme?.primary || '#4a6cf7') : (props.theme?.surface || '#ffffff')};
  color: ${props => props.selected ? 'white' : (props.theme?.text || '#333333')};
  border: 2px solid ${props => props.theme?.primary || '#4a6cf7'};
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.selected ? (props.theme?.primary || '#4a6cf7') : `${props.theme?.primary || '#4a6cf7'}22`};
    transform: translateY(-2px);
  }
`;

const StartButton = styled.button`
  background-color: ${props => props.theme?.secondary || '#f5a623'};
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 25px;
  width: 100%;
  max-width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
  &:hover {
    background-color: ${props => props.theme?.secondary ? `${props.theme.secondary}aa` : '#f5a623aa'};
    transform: translateY(-2px);
  }
`;

const UserStatsSection = styled.section`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  background-color: ${props => props.theme?.background || '#f5f5f5'};
  border-radius: 8px;
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.theme?.primary || '#4a6cf7'};
  margin-bottom: 10px;
  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: ${props => props.theme?.textSecondary || '#666666'};
`;

const HomePage = () => {
  const { theme } = useTheme();
  const { userStats } = useUser();
  const { setDifficulty, startNewGame } = useSudoku();
  const { executeWithLoading, isLoading } = useLoading();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(DIFFICULTY_LEVELS.MEDIUM);

  // 处理难度选择
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  // 开始游戏
  const handleStartGame = async () => {
    setDifficulty(selectedDifficulty);
    const puzzle = await executeWithLoading(
      () => startNewGame(null, selectedDifficulty),
      '准备游戏中...'
    );
    
    if (puzzle) {
      navigate(`/game/${puzzle.id}`);
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>{t('homePage.welcomeTitle')}</HeroTitle>
        <HeroSubtitle>
          {t('homePage.welcomeSubtitle')}
        </HeroSubtitle>
        <ButtonGroup>
          <PrimaryButton to="/game">{t('homePage.startGame')}</PrimaryButton>
          <SecondaryButton to="/techniques">{t('homePage.learnTechniques')}</SecondaryButton>
        </ButtonGroup>
      </HeroSection>

      <FeatureSection>
        <FeatureCard>
          <FeatureIcon>🧠</FeatureIcon>
          <FeatureTitle>{t('homePage.multiDifficulty')}</FeatureTitle>
          <FeatureDescription>
            {t('homePage.multiDifficultyDesc')}
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>💡</FeatureIcon>
          <FeatureTitle>{t('homePage.techniqueLearning')}</FeatureTitle>
          <FeatureDescription>
            {t('homePage.techniqueLearningDesc')}
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>📊</FeatureIcon>
          <FeatureTitle>{t('homePage.progressTracking')}</FeatureTitle>
          <FeatureDescription>
            {t('homePage.progressTrackingDesc')}
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🎯</FeatureIcon>
          <FeatureTitle>{t('homePage.realTimeHints')}</FeatureTitle>
          <FeatureDescription>
            {t('homePage.realTimeHintsDesc')}
          </FeatureDescription>
        </FeatureCard>
      </FeatureSection>

      <QuickStartSection>
        <SectionTitle>{t('homePage.quickStart')}</SectionTitle>
        <DifficultyButtons>
          <DifficultyButton 
            selected={selectedDifficulty === DIFFICULTY_LEVELS.EASY}
            onClick={() => handleDifficultySelect(DIFFICULTY_LEVELS.EASY)}
          >
            {t('easy')}
          </DifficultyButton>
          <DifficultyButton 
            selected={selectedDifficulty === DIFFICULTY_LEVELS.MEDIUM}
            onClick={() => handleDifficultySelect(DIFFICULTY_LEVELS.MEDIUM)}
          >
            {t('medium')}
          </DifficultyButton>
          <DifficultyButton 
            selected={selectedDifficulty === DIFFICULTY_LEVELS.HARD}
            onClick={() => handleDifficultySelect(DIFFICULTY_LEVELS.HARD)}
          >
            {t('hard')}
          </DifficultyButton>
          <DifficultyButton 
            selected={selectedDifficulty === DIFFICULTY_LEVELS.EXPERT}
            onClick={() => handleDifficultySelect(DIFFICULTY_LEVELS.EXPERT)}
          >
            {t('expert')}
          </DifficultyButton>
        </DifficultyButtons>
        <StartButton 
          onClick={handleStartGame} 
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner showMessage={false} /> : t('homePage.startGame')}
        </StartButton>
      </QuickStartSection>

      <UserStatsSection>
        <SectionTitle>{t('homePage.yourProgress')}</SectionTitle>
        <StatsGrid>
          <StatItem>
            <StatValue>{userStats.puzzlesStarted}</StatValue>
            <StatLabel>{t('homePage.puzzlesStarted')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{userStats.puzzlesCompleted}</StatValue>
            <StatLabel>{t('homePage.puzzlesCompleted')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{userStats.puzzlesSolved}</StatValue>
            <StatLabel>{t('homePage.puzzlesSolved')}</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>{Math.floor(userStats.totalTimePlayed / 60)}</StatValue>
            <StatLabel>{t('homePage.gameMinutes')}</StatLabel>
          </StatItem>
        </StatsGrid>
      </UserStatsSection>
    </HomeContainer>
  );
};

export default HomePage;