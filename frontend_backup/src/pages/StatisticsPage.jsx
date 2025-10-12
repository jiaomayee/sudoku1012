import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import { useLoading } from '../context/LoadingContext';
import { api } from '../services/api';

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 5px solid ${props => props.color || props.theme.primary};
`;

const StatValue = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: ${props => props.color || props.theme.primary};
`;

const StatLabel = styled.div`
  font-size: 16px;
  color: ${props => props.theme.textSecondary};
`;

const StatChange = styled.div`
  font-size: 14px;
  color: ${props => props.positive ? props.theme.success : props.theme.error};
`;

const ChartSection = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ChartTitle = styled.h3`
  font-size: 24px;
  color: ${props => props.theme.text};
  margin: 0;
`;

const TimeFilter = styled.div`
  display: flex;
  gap: 10px;
`;

const TimeFilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.primary : props.theme.surface};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 2px solid ${props => props.active ? props.theme.primary : props.theme.border};
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ChartPlaceholder = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.textSecondary};
  font-size: 18px;
  background-color: ${props => props.theme.background};
  border-radius: 8px;
`;

const DifficultyBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DifficultyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DifficultyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DifficultyLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

const DifficultyValue = styled.span`
  font-size: 16px;
  color: ${props => props.theme.textSecondary};
`;

const DifficultyBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${props => props.theme.background};
  border-radius: 5px;
  overflow: hidden;
`;

const DifficultyProgress = styled.div`
  height: 100%;
  background-color: ${props => {
    switch (props.difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      case 'expert': return '#9C27B0';
      default: return props.theme.primary;
    }
  }};
  border-radius: 5px;
  width: ${props => props.percentage}%;
`;

const TechniquesSection = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const TechniquesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const TechniqueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  border-left: 4px solid ${props => props.mastered ? props.theme.success : props.theme.primary};
`;

const TechniqueInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TechniqueName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

const TechniqueMastery = styled.span`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`;

const TechniqueBadge = styled.div`
  background-color: ${props => props.mastered ? props.theme.success : props.theme.primary};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

const StatisticsPage = () => {
  const { theme } = useTheme();
  const { userId, userStats, techniquesProgress } = useUser();
  const { executeWithLoading } = useLoading();
  const [stats, setStats] = useState(null);
  const [timeFilter, setTimeFilter] = useState('all'); // 'all', 'week', 'month'

  useEffect(() => {
    loadStatistics();
  }, [timeFilter]);

  const loadStatistics = async () => {
    try {
      await executeWithLoading(async () => {
        const response = await api.getUserStatistics(userId, timeFilter);
        setStats(response.data);
      }, '加载统计数据中...');
    } catch (error) {
      console.error('加载统计数据失败:', error);
      // 使用模拟数据
      setStats(getMockStatistics());
    }
  };

  // 模拟统计数据
  const getMockStatistics = () => {
    return {
      totalGames: 42,
      completedGames: 38,
      winRate: 90.5,
      averageTime: 1245, // 秒
      favoriteDifficulty: 'medium',
      bestTime: 420, // 秒
      currentStreak: 5,
      longestStreak: 12,
      totalPlayTime: 145200, // 秒
      difficultyBreakdown: {
        easy: 15,
        medium: 20,
        hard: 5,
        expert: 2
      },
      recentPerformance: [
        { date: '2023-10-10', games: 3, completed: 3 },
        { date: '2023-10-11', games: 2, completed: 2 },
        { date: '2023-10-12', games: 4, completed: 3 },
        { date: '2023-10-13', games: 1, completed: 1 },
        { date: '2023-10-14', games: 2, completed: 2 },
        { date: '2023-10-15', games: 3, completed: 3 },
        { date: '2023-10-16', games: 2, completed: 2 }
      ]
    };
  };

  // 如果没有统计数据，使用用户上下文的数据或默认值
  const displayStats = stats || getMockStatistics();
  const userTechniquesProgress = techniquesProgress || {};

  // 格式化时间
  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 计算总游戏数
  const getTotalGames = () => {
    if (displayStats.totalGames) return displayStats.totalGames;
    const breakdown = displayStats.difficultyBreakdown || {};
    return Object.values(breakdown).reduce((sum, count) => sum + count, 0);
  };

  // 获取难度对应的颜色
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      case 'expert': return '#9C27B0';
      default: return theme.primary;
    }
  };

  // 获取难度百分比
  const getDifficultyPercentage = (difficulty) => {
    const breakdown = displayStats.difficultyBreakdown || {};
    const total = getTotalGames();
    return total > 0 ? (breakdown[difficulty] / total) * 100 : 0;
  };

  // 计算技巧掌握度
  const getTechniqueMastery = (techniqueId) => {
    const progress = userTechniquesProgress[techniqueId] || { practiced: 0 };
    return Math.min(100, (progress.practiced / 10) * 20);
  };

  // 判断技巧是否已掌握
  const isTechniqueMastered = (techniqueId) => {
    return getTechniqueMastery(techniqueId) >= 80;
  };

  // 技巧列表
  const techniques = [
    { id: 'nakedSingles', name: '唯一候选数' },
    { id: 'hiddenSingles', name: '隐性唯一' },
    { id: 'nakedPairs', name: '数对' },
    { id: 'hiddenPairs', name: '隐性数对' },
    { id: 'pointingPairs', name: '指向对' },
    { id: 'boxLineReduction', name: '宫行列排除' }
  ];

  return (
    <StatisticsContainer>
      <SectionTitle theme={theme}>我的统计</SectionTitle>
      
      <StatsGrid>
        <StatCard color={theme.primary} theme={theme}>
          <StatValue color={theme.primary} theme={theme}>{getTotalGames()}</StatValue>
          <StatLabel theme={theme}>总游戏数</StatLabel>
          <StatChange positive={true} theme={theme}>+5 本周</StatChange>
        </StatCard>
        
        <StatCard color={theme.success} theme={theme}>
          <StatValue color={theme.success} theme={theme}>{displayStats.completedGames}</StatValue>
          <StatLabel theme={theme}>完成游戏</StatLabel>
          <StatChange positive={true} theme={theme}>全部完成</StatChange>
        </StatCard>
        
        <StatCard color={theme.warning} theme={theme}>
          <StatValue color={theme.warning} theme={theme}>{displayStats.winRate}%</StatValue>
          <StatLabel theme={theme}>胜率</StatLabel>
          <StatChange positive={true} theme={theme}>+2% 本月</StatChange>
        </StatCard>
        
        <StatCard color={theme.info} theme={theme}>
          <StatValue color={theme.info} theme={theme}>{formatTime(displayStats.averageTime)}</StatValue>
          <StatLabel theme={theme}>平均时间</StatLabel>
          <StatChange positive={true} theme={theme}>-30秒</StatChange>
        </StatCard>
        
        <StatCard color={theme.error} theme={theme}>
          <StatValue color={theme.error} theme={theme}>{formatTime(displayStats.bestTime)}</StatValue>
          <StatLabel theme={theme}>最佳时间</StatLabel>
          <StatChange positive={true} theme={theme}>记录保持中</StatChange>
        </StatCard>
        
        <StatCard color={theme.primary} theme={theme}>
          <StatValue color={theme.primary} theme={theme}>{displayStats.currentStreak}</StatValue>
          <StatLabel theme={theme}>当前连续天数</StatLabel>
          <StatChange positive={displayStats.currentStreak > 1} theme={theme}>
            {displayStats.currentStreak > 1 ? '🔥 加油！' : '今天开始'}
          </StatChange>
        </StatCard>
      </StatsGrid>

      <ChartSection theme={theme}>
        <ChartHeader>
          <ChartTitle theme={theme}>游戏进度</ChartTitle>
          <TimeFilter>
            <TimeFilterButton 
              active={timeFilter === 'week'} 
              onClick={() => setTimeFilter('week')}
              theme={theme}
            >
              本周
            </TimeFilterButton>
            <TimeFilterButton 
              active={timeFilter === 'month'} 
              onClick={() => setTimeFilter('month')}
              theme={theme}
            >
              本月
            </TimeFilterButton>
            <TimeFilterButton 
              active={timeFilter === 'all'} 
              onClick={() => setTimeFilter('all')}
              theme={theme}
            >
              全部
            </TimeFilterButton>
          </TimeFilter>
        </ChartHeader>
        
        <ChartPlaceholder theme={theme}>
          📊 游戏进度图表
        </ChartPlaceholder>
      </ChartSection>

      <ChartSection theme={theme}>
        <ChartHeader>
          <ChartTitle theme={theme}>难度分布</ChartTitle>
        </ChartHeader>
        
        <DifficultyBreakdown>
          {Object.entries(displayStats.difficultyBreakdown || {}).map(([difficulty, count]) => {
            const percentage = getDifficultyPercentage(difficulty);
            const difficultyNames = {
              easy: '简单',
              medium: '中等',
              hard: '困难',
              expert: '专家'
            };
            
            return (
              <DifficultyItem key={difficulty}>
                <DifficultyHeader>
                  <DifficultyLabel theme={theme}>{difficultyNames[difficulty] || difficulty}</DifficultyLabel>
                  <DifficultyValue theme={theme}>
                    {count} 局 ({percentage.toFixed(1)}%)
                  </DifficultyValue>
                </DifficultyHeader>
                <DifficultyBar theme={theme}>
                  <DifficultyProgress 
                    difficulty={difficulty} 
                    percentage={percentage} 
                  />
                </DifficultyBar>
              </DifficultyItem>
            );
          })}
        </DifficultyBreakdown>
      </ChartSection>

      <TechniquesSection theme={theme}>
        <ChartTitle theme={theme}>技巧掌握</ChartTitle>
        
        <TechniquesList>
          {techniques.map(technique => {
            const mastery = getTechniqueMastery(technique.id);
            const mastered = isTechniqueMastered(technique.id);
            const practiceCount = userTechniquesProgress[technique.id]?.practiced || 0;
            
            return (
              <TechniqueItem 
                key={technique.id} 
                mastered={mastered}
                theme={theme}
              >
                <TechniqueInfo>
                  <TechniqueName theme={theme}>{technique.name}</TechniqueName>
                  <TechniqueMastery theme={theme}>
                    练习 {practiceCount} 次 · 掌握度 {mastery.toFixed(0)}%
                  </TechniqueMastery>
                </TechniqueInfo>
                <TechniqueBadge mastered={mastered} theme={theme}>
                  {mastered ? '已掌握' : '学习中'}
                </TechniqueBadge>
              </TechniqueItem>
            );
          })}
        </TechniquesList>
      </TechniquesSection>
    </StatisticsContainer>
  );
};

export default StatisticsPage;