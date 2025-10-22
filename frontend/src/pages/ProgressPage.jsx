import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';
import { useSudoku } from '../context/SudokuContext';
import { useLoading } from '../context/LoadingContext';
import { useLanguage } from '../context/LanguageContext';
import { api } from '../services/api';

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin: 0;
`;

const ClearAllButton = styled.button`
  background-color: ${props => props.theme.error};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.error}aa;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: ${props => props.theme.disabled};
    cursor: not-allowed;
    transform: none;
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.primary : props.theme.surface};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 2px solid ${props => props.active ? props.theme.primary : props.theme.border};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.primary : props.theme.background};
  }
`;

const ProgressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ProgressCard = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 5px solid ${props => {
    switch (props.status) {
      case 'in-progress': return props.theme.warning;
      case 'completed': return props.theme.success;
      case 'paused': return props.theme.info;
      default: return props.theme.primary;
    }
  }};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: ${props => props.theme.text};
  margin: 0;
`;

const StatusBadge = styled.div`
  background-color: ${props => {
    switch (props.status) {
      case 'in-progress': return props.theme.warning;
      case 'completed': return props.theme.success;
      case 'paused': return props.theme.info;
      default: return props.theme.primary;
    }
  }};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

const CardDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DetailLabel = styled.span`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`;

const DetailValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

const CardActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  background-color: ${props => {
    switch (props.type) {
      case 'primary': return props.theme.primary;
      case 'danger': return props.theme.error;
      case 'secondary': return props.theme.surface;
      default: return props.theme.surface;
    }
  }};
  color: ${props => props.type === 'secondary' ? props.theme.text : 'white'};
  border: ${props => props.type === 'secondary' ? `2px solid ${props.theme.border}` : 'none'};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${props => props.theme.textSecondary};
`;

const EmptyStateIcon = styled.div`
  font-size: 72px;
  margin-bottom: 20px;
  color: ${props => props.theme.disabled};
`;

const EmptyStateTitle = styled.h3`
  font-size: 24px;
  color: ${props => props.theme?.text || '#333333'};
  margin-bottom: 10px;
`;

const EmptyStateDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme?.textSecondary || '#666666'};
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  background-color: ${props => props.theme?.primary || '#4a6cf7'};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => (props.theme?.primary || '#4a6cf7')}aa;
    transform: translateY(-2px);
  }
`;

const ConfirmationModal = styled.div`
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

const ModalContent = styled.div`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.h3`
  font-size: 24px;
  color: ${props => props.theme?.text || '#333333'};
  margin-top: 0;
  margin-bottom: 20px;
`;

const ModalMessage = styled.p`
  font-size: 16px;
  color: ${props => props.theme?.textSecondary || '#666666'};
  margin-bottom: 30px;
  line-height: 1.6;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
`;

const ProgressPage = () => {
  const { theme } = useTheme();
  const { userId } = useUser();
  const { loadSavedGame } = useSudoku();
  const { executeWithLoading } = useLoading();
  const { t } = useLanguage();
  const [progressItems, setProgressItems] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'in-progress'
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null); // 'clear-all' or a specific id

  // 加载用户游戏进度
  useEffect(() => {
    loadProgressItems();
  }, []);

  const loadProgressItems = async () => {
    try {
      await executeWithLoading(async () => {
        const response = await api.getUserProgress(userId);
        setProgressItems(response.data || []);
      }, '加载游戏进度中...');
    } catch (error) {
      console.error('加载进度失败:', error);
      // 如果API加载失败，使用模拟数据
      setProgressItems(getMockProgressItems());
    }
  };

  // 模拟进度数据
  const getMockProgressItems = () => {
    return [
      {
        id: '1',
        puzzleId: 'puzzle-1',
        difficulty: 'easy',
        startTime: '2023-10-15T14:30:00',
        lastUpdated: '2023-10-15T15:45:00',
        completed: false,
        completionTime: null,
        filledCells: 42,
        totalCells: 81,
        status: 'in-progress',
        puzzleState: [], // 实际应用中会保存棋盘状态
      },
      {
        id: '2',
        puzzleId: 'puzzle-2',
        difficulty: 'medium',
        startTime: '2023-10-14T09:15:00',
        lastUpdated: '2023-10-14T10:30:00',
        completed: true,
        completionTime: '2023-10-14T10:30:00',
        filledCells: 81,
        totalCells: 81,
        status: 'completed',
        puzzleState: [],
      },
      {
        id: '3',
        puzzleId: 'puzzle-3',
        difficulty: 'hard',
        startTime: '2023-10-13T18:00:00',
        lastUpdated: '2023-10-13T18:30:00',
        completed: false,
        completionTime: null,
        filledCells: 28,
        totalCells: 81,
        status: 'paused',
        puzzleState: [],
      },
    ];
  };

  // 处理过滤
  const filteredProgress = progressItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'completed') return item.status === 'completed';
    if (filter === 'in-progress') return item.status !== 'completed';
    return true;
  });

  // 继续游戏
  const handleContinueGame = async (progressId) => {
    try {
      await executeWithLoading(async () => {
        const progress = progressItems.find(item => item.id === progressId);
        if (progress) {
          // 加载保存的游戏状态
          await loadSavedGame(progress.puzzleState, progress.puzzleId);
          // 导航到游戏页面
          window.location.href = '/game';
        }
      }, '加载游戏中...');
    } catch (error) {
      console.error('加载游戏失败:', error);
      alert('加载游戏失败，请稍后重试');
    }
  };

  // 删除单个进度
  const handleDeleteProgress = async (progressId) => {
    try {
      await executeWithLoading(async () => {
        // 实际应用中调用API删除进度
        // await api.deleteProgress(userId, progressId);
        setProgressItems(prev => prev.filter(item => item.id !== progressId));
      }, '删除进度中...');
    } catch (error) {
      console.error('删除进度失败:', error);
      alert('删除进度失败，请稍后重试');
    }
  };

  // 清空所有进度
  const handleClearAllProgress = async () => {
    try {
      await executeWithLoading(async () => {
        // 实际应用中调用API清空所有进度
        // await api.clearAllProgress(userId);
        setProgressItems([]);
      }, '清空进度中...');
    } catch (error) {
      console.error('清空进度失败:', error);
      alert('清空进度失败，请稍后重试');
    }
  };

  // 打开确认模态框
  const openConfirmModal = (action) => {
    setConfirmAction(action);
    setShowConfirmModal(true);
  };

  // 关闭确认模态框
  const closeConfirmModal = () => {
    setShowConfirmModal(false);
    setConfirmAction(null);
  };

  // 执行确认操作
  const executeConfirmAction = () => {
    if (confirmAction === 'clear-all') {
      handleClearAllProgress();
    } else if (typeof confirmAction === 'string') {
      handleDeleteProgress(confirmAction);
    }
    closeConfirmModal();
  };

  // 格式化日期
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // 获取难度文本
  const getDifficultyText = (difficulty) => {
    switch (difficulty) {
      case 'easy': return t('easy');
      case 'medium': return t('medium');
      case 'hard': return t('hard');
      case 'expert': return t('expert');
      default: return difficulty;
    }
  };

  // 计算完成百分比
  const calculateCompletionPercentage = (filled, total) => {
    return Math.round((filled / total) * 100);
  };

  return (
    <ProgressContainer>
      <ProgressHeader>
        <ProgressTitle>{t('progress')}</ProgressTitle>
        {progressItems.length > 0 && (
          <ClearAllButton 
            onClick={() => openConfirmModal('clear-all')}
          >
            {t('clearAllProgress')}
          </ClearAllButton>
        )}
      </ProgressHeader>

      {progressItems.length > 0 && (
        <FilterBar>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            {t('allProgress')}
          </FilterButton>
          <FilterButton 
            active={filter === 'in-progress'} 
            onClick={() => setFilter('in-progress')}
          >
            {t('inProgress')}
          </FilterButton>
          <FilterButton 
            active={filter === 'completed'} 
            onClick={() => setFilter('completed')}
          >
            {t('completed')}
          </FilterButton>
        </FilterBar>
      )}

      {filteredProgress.length > 0 ? (
        <ProgressList>
          {filteredProgress.map(progress => (
            <ProgressCard 
              key={progress.id} 
              status={progress.status}
            >
              <CardHeader>
                <CardTitle>
                  {t('sudokuGame')} #{progress.id}
                </CardTitle>
                <StatusBadge status={progress.status} theme={theme}>
                  {progress.status === 'completed' ? t('completed') : 
                   progress.status === 'in-progress' ? t('inProgress') : t('paused')}
                </StatusBadge>
              </CardHeader>

              <CardDetails>
                <DetailItem>
                  <DetailLabel theme={theme}>{t('difficulty')}</DetailLabel>
                  <DetailValue theme={theme}>
                    {getDifficultyText(progress.difficulty)}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel theme={theme}>{t('startTime')}</DetailLabel>
                  <DetailValue theme={theme}>
                    {formatDate(progress.startTime)}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel theme={theme}>{t('lastUpdated')}</DetailLabel>
                  <DetailValue theme={theme}>
                    {formatDate(progress.lastUpdated)}
                  </DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel theme={theme}>{t('completionProgress')}</DetailLabel>
                  <DetailValue theme={theme}>
                    {calculateCompletionPercentage(progress.filledCells, progress.totalCells)}%
                  </DetailValue>
                </DetailItem>
              </CardDetails>

              <CardActions>
                {progress.status !== 'completed' && (
                  <ActionButton 
                    type="primary" 
                    onClick={() => handleContinueGame(progress.id)}
                  >
                    {t('continueGame')}
                  </ActionButton>
                )}
                <ActionButton 
                  type="danger" 
                  onClick={() => openConfirmModal(progress.id)}
                >
                  {t('deleteProgress')}
                </ActionButton>
              </CardActions>
            </ProgressCard>
          ))}
        </ProgressList>
      ) : (
        <EmptyState>
          <EmptyStateIcon>📝</EmptyStateIcon>
          <EmptyStateTitle>{t('noProgress')}</EmptyStateTitle>
          <EmptyStateDescription>
              {filter !== 'all' ? t('noFilteredProgress') : t('noStartedGames')}
          </EmptyStateDescription>
          <StartButton 
            onClick={() => window.location.href = '/game'}
          >
            {t('startNewGame')}
          </StartButton>
        </EmptyState>
      )}

      {showConfirmModal && (
        <ConfirmationModal>
          <ModalContent>
            <ModalTitle>
              {confirmAction === 'clear-all' ? t('confirmClearAllProgress') : t('confirmDeleteProgress')}
            </ModalTitle>
            <ModalMessage>
              {confirmAction === 'clear-all' 
                ? t('clearAllProgressWarning')
                : t('deleteProgressWarning')
              }
            </ModalMessage>
            <ModalActions>
              <ActionButton 
                type="secondary" 
                onClick={closeConfirmModal}
              >
                {t('cancel')}
              </ActionButton>
              <ActionButton 
                type="danger" 
                onClick={executeConfirmAction}
              >
                {t('confirmDelete')}
              </ActionButton>
            </ModalActions>
          </ModalContent>
        </ConfirmationModal>
      )}
    </ProgressContainer>
  );
};

export default ProgressPage;