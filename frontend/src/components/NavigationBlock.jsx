import React, { useState, useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useSudoku, DIFFICULTY_LEVELS } from '../context/SudokuContext';
import { useLoading } from '../context/LoadingContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'react-toastify';
import { getHint } from '../utils/sudokuUtils'; // 添加 getHint 导入
import DifficultySelectModal from './DifficultySelectModal';
import ModeSwitchModal from './ModeSwitchModal';
import ConfirmModal from './ConfirmModal';

// 导入模式上下文
import { ModeContext } from '../context/ModeContext';

const NavBlockContainer = styled.div.attrs({ className: 'nav-block' })`
  background-color: ${props => props.theme?.background || '#f8f9fa'};
  border-radius: var(--border-radius, 8px);
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  width: 100%; // 与数独棋盘同宽
  font-family: 'Arial', 'Microsoft YaHei', sans-serif;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  
  // 添加悬停效果
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  // 确保在父容器中正确对齐
  align-self: flex-start;
  
  // 移除滚动吸附功能，允许自由滚动
  
  // 竖屏模式下调整上下边距一致
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 4px 4px; // 确保上下左右内边距一致
    min-height: auto; // 让高度自适应内容
    border-bottom-width: 2px;
    display: flex;
    align-items: center;
  }
`;

const NavTitle = styled.h3`
  font-size: 14px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 4px 0;
  padding-bottom: 4px;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  display: none; // 竖屏模式下隐藏标题以节省空间
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5个按钮平均分布
  gap: 2px;
  margin: 0;
  padding: 2px 0; // 进一步减小内边距以减小整体高度
  
  // 竖屏模式下确保上下内边距一致
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 2px 0; // 上下内边距一致
    width: 100%;
  }
`;

const NavButton = styled(({ isActive, ...props }) => <button {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isActive ? (props.theme?.primary || '#3498db') : (props.theme?.background || '#f8f9fa')};
  color: ${props => props.isActive ? 'white' : (props.theme?.text || '#666666')};
  border: none;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px; // 减小最小高度
  height: auto; // 允许高度自适应内容
  
  // 竖屏模式下确保按钮在容器中垂直居中
  @media (max-width: 768px) and (orientation: portrait) {
    min-height: 32px;
    height: 32px; // 固定高度以确保一致性
    padding: 0; // 移除内边距以控制高度
    margin: 0;
  }
  font-size: 12px;
  font-family: inherit;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  
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
  
  &:hover {
    background-color: ${props => props.isActive ? 
      (props.theme?.primary || '#3498db') : 
      (props.theme?.primary || '#3498db') + '15'};
    border-color: ${props => props.theme?.primary || '#3498db'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.primary || '#3498db'};
  }
  
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`;

const ButtonIcon = styled.span`
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 简单的图标组件
const Icons = {
  NewGame: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  ),
  Pause: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  ),
  Play: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  ),
  Hint: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD700">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
    </svg>
  ),
  Notes: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      {/* 数独格子背景 */}
      <rect x="4" y="4" width="16" height="16" rx="2" fill="transparent" stroke="currentColor" strokeWidth="1.5"/>
      {/* 添加2x2网格分割线 */}
      <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
      <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
      {/* 显示两个数字：2（左上角）和5（右下角） */}
      <text x="7" y="10" fontSize="6" fontWeight="bold">2</text>
      <text x="15" y="18" fontSize="6" fontWeight="bold">5</text>
      {/* 添加右上角的"1"角标（在图标外部，继续向右移动） */}
      <text x="25" y="6" fontSize="7" fontWeight="900" fill="currentColor">1</text>
    </svg>
  ),
  Settings: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  )
};

// 游戏模式图标组件 - 使用用户提供的SVG并添加装饰
const GameModeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 256 256" fill="currentColor">
    <path d="m18 82.85c-2.3 3.07-1.51 73.57 0 76s105.83 59.7 108.54 59.7 111.26-62.11 111.86-64.22 1.81-67.54 0-69-54.22-29.33-57.54-29.33-50.65 26.53-53.37 26.53-49.14-27.11-52.76-27.11-54.88 25.02-56.73 27.43z"/>
    <path d="m126.59 226.53c-2.48 0-4.11 0-58.58-29.93s-55.41-31.38-56.75-33.53c-1.2-1.92-2.44-3.9-2.64-41.94-.21-38.76 1.29-40.76 3-43.08 1.2-1.59 2.55-3.4 30.57-17s30.64-13.63 32.54-13.63c3.33 0 6.33 1.28 33.23 16 6.7 3.67 15.43 8.45 19.59 10.51 4.35-2.07 13.65-7 20.78-10.73 26.67-14.06 29.37-15.2 32.53-15.2 2.32 0 4.16 0 33 15 4.54 2.35 27.31 14.18 29.67 16.15 3.29 2.74 3.5 6 3.73 17.11.15 7.47.12 16.85.06 23.41-.11 12.58-.42 34.1-1.21 36.87-1 3.33-3.11 4.69-8.31 7.95-3 1.87-7.23 4.44-12.65 7.66-9.9 5.88-23.36 13.71-37.9 22-14.25 8.21-27.88 15.85-38.25 21.64-19.38 10.74-20 10.74-22.41 10.74zm-101.14-72.31c14.41 8.86 85.68 48.05 101.07 55.58 15.71-8 89.25-50.18 104.23-59.78.52-11.66 1-48.65.35-59.82-10.07-5.62-41.48-22-50.19-25.72-4.85 2.19-16.82 8.5-25.12 12.87-24.1 12.7-25.4 13.19-28.3 13.19s-4.19-.48-27.22-13.09c-8.54-4.67-20.92-11.45-25.74-13.64-8.53 3.29-40.18 18.59-49.28 23.84-1.09 11.6-.74 54.56.2 66.57z"/>
    <path d="m18 82.85c-2.3 3.07-1.51 73.57 0 76s105.83 59.7 108.54 59.7 111.26-62.11 111.86-64.22 1.81-67.54 0-69-54.22-29.33-57.54-29.33-50.65 26.53-53.37 26.53-49.14-27.11-52.76-27.11-54.88 25.02-56.73 27.43z"/>
    <path d="m69.43 110.77c-.9 3.61-2.07 7.49-10.58 8.39-11 1.16-11 11.87 0 13.17 6.77.8 10 5.39 10.24 7.84 1.53 14.82 13.36 17.48 15.74 2.44.92-5.81 2.22-9.9 8.86-10.85 11.76-1.68 11.92-10.69 2.14-12.83-3-.66-8.77-1.17-10.24-7.79-2.86-12.89-12.49-15.04-16.16-.37z"/>
    <path d="m189.74 106.26c0 6.08-6 12.51-10.77 11.92-5.5-.69-10.54-5.61-10.54-11.69s4.24-10.1 10.31-10.31c6.64-.23 11 4 11 10.08z"/>
    <path d="m168.42 148.13c0-6.08 6-12.51 10.77-11.92 5.5.69 10.54 5.61 10.54 11.69s-4.24 10.1-10.31 10.31c-6.64.23-11-4.01-11-10.08z"/>
    <path d="m200 137.85c-6.08 0-12.51-6-11.92-10.77.69-5.5 5.61-10.54 11.69-10.54s10.1 4.24 10.31 10.31c.25 6.64-3.99 11-10.08 11z"/>
    <path d="m158.15 116.54c6.08 0 12.51 6 11.92 10.77-.69 5.5-5.61 10.54-11.69 10.54s-10.1-4.24-10.31-10.31c-.23-6.65 4-11 10.08-11z"/>
    
    {/* 中心左侧白色加号 - 向下移动一点点 */}
    <path d="M40 110h24v-24h24v24h24v24h-24v24h-24v-24h-24v-24z" fill="white" stroke="black" strokeWidth="4"/>
    
    {/* 中心右侧菱形四个白色圆点 - 向下移动5px */}
    <circle cx="190" cy="95" r="14" fill="white" stroke="black" strokeWidth="4"/>
    <circle cx="214" cy="119" r="14" fill="white" stroke="black" strokeWidth="4"/>
    <circle cx="190" cy="143" r="14" fill="white" stroke="black" strokeWidth="4"/>
    <circle cx="166" cy="119" r="14" fill="white" stroke="black" strokeWidth="4"/>
  </svg>
);

// 学习模式图标组件 - 星标图标
const LearningModeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    <path d="M12 15.4l-3.78 1.98 0.69-4.06-2.97-2.88 4.08-0.6 1.98-3.7 1.98 3.7 4.08 0.6-2.97 2.88 0.69 4.06L12 15.4z"/>
  </svg>
);

const NavigationBlock = ({ onNewGame, onPauseTimer, onGetHint, onShowTechniques, onToggleNotes, onSettings, isNotesMode = false, isTimerActive = true, gameCompleted = false }) => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { mode, setMode } = useContext(ModeContext); // 使用模式上下文
  const sudokuContext = useSudoku();
  const { startLoading, stopLoading } = useLoading();
  const [showDifficultyModal, setShowDifficultyModal] = useState(false); // 控制难度选择模态框显示
  const [isNotesButtonActive, setIsNotesButtonActive] = useState(false); // 控制候选数按钮激活状态
  const [showModeSwitchModal, setShowModeSwitchModal] = useState(false); // 控制模式切换确认模态框显示
  const [isLongPressActive, setIsLongPressActive] = useState(false); // 控制长按状态
  const [showProgressBar, setShowProgressBar] = useState(false); // 控制进度条显示
  const [progress, setProgress] = useState(0); // 进度条进度
  const [showConfirmModal, setShowConfirmModal] = useState(false); // 控制确认对话框显示
  const [confirmModalConfig, setConfirmModalConfig] = useState({}); // 确认对话框配置
  const progressTimer = useRef(null); // 进度条动画计时器
  const longPressTimer = useRef(null); // 长按计计时器
  
  // 添加状态用于跟踪技巧提示功能
  const [techniqueIndex, setTechniqueIndex] = useState(0); // 跟踪当前技巧索引
  const [availableTechniques, setAvailableTechniques] = useState([]); // 存储可用技巧列表
  
  // 添加对自动打开新游戏窗口事件的监听
  useEffect(() => {
    const handleOpenNewGameWindow = () => {
      console.log('NavigationBlock: 接收到打开新游戏窗口的事件');
      // 重置候选数按钮激活状态
      setIsNotesButtonActive(false);
      // 显示难度选择模态框
      setShowDifficultyModal(true);
    };
    
    window.addEventListener('openNewGameWindow', handleOpenNewGameWindow);
    
    return () => {
      window.removeEventListener('openNewGameWindow', handleOpenNewGameWindow);
    };
  }, []);

  // 处理新建游戏按钮点击
  const handleNewGameClick = () => {
    console.log('NavigationBlock: 打开难度选择模态框');
    // 立即重置候选数按钮激活状态，避免在生成新游戏前保持激活
    setIsNotesButtonActive(false);
    // 显示难度选择模态框
    setShowDifficultyModal(true);
  };

  // 处理难度选择
  const handleDifficultySelect = async (selectedDifficulty) => {
    console.log('NavigationBlock: 选择难度:', selectedDifficulty);
    try {
      // 重置候选数按钮激活状态
      setIsNotesButtonActive(false);
      
      // 确保技巧提示功能被关闭 - 如果提供了相关方法
      if (onShowTechniques) {
        // 这里我们不直接调用onShowTechniques，因为它会触发技巧查找
        // 而是依赖SudokuContext中的startNewGame来重置技巧相关状态
        console.log('将在生成新游戏时重置技巧状态');
      }
      
      if (startLoading) {
        startLoading(t('generatingNewPuzzle'));
      }

      // 尝试使用上下文的函数
      if (sudokuContext?.startNewGame) {
        console.log('调用 context.startNewGame');
        await sudokuContext.startNewGame(null, selectedDifficulty);
        console.log('startNewGame 完成');
      } else if (sudokuContext?.generateNewPuzzle) {
        console.log('调用 context.generateNewPuzzle');
        await sudokuContext.generateNewPuzzle(selectedDifficulty);
        console.log('generateNewPuzzle 完成');
      } else {
        console.error('上下文函数不可用');
      }
    } catch (error) {
      console.error('生成新游戏失败:', error);
    } finally {
      if (stopLoading) {
        stopLoading();
      }
    }
  };

  // 打开模式切换确认窗口
  const openModeSwitchModal = () => {
    setShowModeSwitchModal(true);
  };

  // 处理模式切换确认
  const handleModeSwitchConfirm = () => {
    const newMode = mode === 'game' ? 'learning' : 'game';
    setMode(newMode);
    setShowModeSwitchModal(false);
  };

  // 关闭模式切换窗口
  const handleModeSwitchClose = () => {
    setShowModeSwitchModal(false);
  };
  
  // 修改处理技巧提示按钮点击的函数
  const handleHintClick = () => {
    // 取消选中棋盘单元格
    if (sudokuContext && typeof sudokuContext.setSelectedCell === 'function') {
      sudokuContext.setSelectedCell(null);
    }
    
    // 检查sudokuContext是否存在identifyTechniques函数
    if (sudokuContext && typeof sudokuContext.identifyTechniques === 'function') {
      try {
        // 获取所有可用的技巧机会
        const techniques = sudokuContext.identifyTechniques();
        
        // 检查是否有可用技巧
        if (techniques && techniques.length > 0) {
          // 如果这是第一次点击或技巧列表已更新，重置索引
          if (availableTechniques.length !== techniques.length || 
              JSON.stringify(availableTechniques) !== JSON.stringify(techniques)) {
            setAvailableTechniques(techniques);
            setTechniqueIndex(0);
          }
          
          // 获取当前技巧
          const currentTechnique = techniques[techniqueIndex];
          
          // 格式化技巧信息进行显示
          let techniqueInfo = t('foundTechnique', '找到技巧：');
          
          // 获取技巧名称（支持国际化）
          const techniqueName = t(currentTechnique.type) || t('unknownTechnique') || currentTechnique.type;
          techniqueInfo += techniqueName;
          
          // 添加位置信息
          if (currentTechnique.row !== undefined && currentTechnique.col !== undefined) {
            const positionLabel = t('position', { defaultMessage: '位置' });
            techniqueInfo += ` ${positionLabel}:(${currentTechnique.row + 1},${currentTechnique.col + 1})`;
          }
          
          // 添加数字信息（如果有）
          if (currentTechnique.value !== undefined) {
            const numberLabel = t('number', { defaultMessage: '数字' });
            techniqueInfo += ` ${numberLabel}:${currentTechnique.value}`;
          }
          
          // 弹窗提示当前技巧
          toast.info(techniqueInfo, {
            position: 'top-right',
            autoClose: 3000
          });
          
          // 启动该技巧的指示功能
          if (sudokuContext.setHighlightedCells) {
            // 处理技巧高亮
            handleTechniqueHighlighting(currentTechnique);
          }
          
          // 更新索引，准备下次点击时显示下一个技巧
          const nextIndex = (techniqueIndex + 1) % techniques.length;
          setTechniqueIndex(nextIndex);
        } else {
          // 没有可用技巧时的处理逻辑
          handleNoTechniquesAvailable();
        }
      } catch (error) {
        console.error('获取技巧失败:', error);
        toast.error(t('techniqueError', { defaultMessage: '获取技巧时出错，请重试' }), {
          position: 'top-right',
          autoClose: 2000
        });
      }
    } else {
      console.error('identifyTechniques 函数不可用');
      // 如果无法获取技巧，回退到原来的随机提示功能
      if (onGetHint) {
        onGetHint();
      }
    }
  };
  
  // 处理没有可用技巧的情况
  const handleNoTechniquesAvailable = () => {
    // 检查候选数是否完整
    if (sudokuContext && typeof sudokuContext.areCandidatesComplete === 'function') {
      const candidatesComplete = sudokuContext.areCandidatesComplete();
      
      if (!candidatesComplete) {
        // 候选数不完整，提示用户是否刷新候选数
        setConfirmModalConfig({
          title: t('candidatesIncompleteTitle', '候选数不完整'),
          message: t('candidatesIncompleteMessage', '当前候选数不完整，是否需要刷新填充候选数并查找新的技巧机会？'),
          confirmText: t('yes', '是'),
          cancelText: t('no', '否'),
          onConfirm: () => {
            // 执行刷新候选数操作
            if (sudokuContext.fillAllCandidates) {
              sudokuContext.fillAllCandidates();
            }
          }
        });
        setShowConfirmModal(true);
      } else {
        // 候选数完整，提示用户是否需要答案提示
        setConfirmModalConfig({
          title: t('noTechniquesAvailableTitle', '没有可用技巧'),
          message: t('noTechniquesAvailableMessage', '当前没有可用的技巧机会，是否需要提示一个答案？'),
          confirmText: t('yes', '是'),
          cancelText: t('no', '否'),
          onConfirm: () => {
            // 提供答案提示
            provideAnswerHint();
          }
        });
        setShowConfirmModal(true);
      }
    } else {
      // 如果无法检查候选数完整性，直接显示提示
      toast.info(t('noTechniquesAvailable', { defaultMessage: '当前没有可用的技巧机会' }), {
        position: 'top-right',
        autoClose: 2000
      });
    }
  };
  
  // 提供答案提示
  const provideAnswerHint = async () => {
    try {
      // 直接使用前端的utils函数获取提示，不调用后端API
      const hint = getHintFromUtils();
      
      if (hint) {
        // 显示提示信息
        toast.info(`${t('answerHint', '答案提示')}: ${hint.description}`, {
          position: 'top-right',
          autoClose: 3000
        });
        
        // 高亮显示提示的单元格
        if (sudokuContext.setHighlightedCells) {
          sudokuContext.setHighlightedCells([{
            row: hint.row,
            col: hint.col,
            techniqueIndicator: true,
            targetNumber: hint.value,
            isTarget: true,
            techniqueType: 'hint'
          }]);
        }
        
        // 实际填入答案
        if (sudokuContext.fillCell) {
          // 添加调试日志
          console.log('准备填入答案:', hint);
          
          // 延迟填入答案，确保高亮显示不会被清除
          // 使用forceFill=true确保即使在铅笔模式下也能正确填入数字
          setTimeout(() => {
            console.log('实际填入答案:', hint.row, hint.col, hint.value);
            sudokuContext.fillCell(hint.row, hint.col, hint.value, true);
          }, 100);
        }
      } else {
        toast.info(t('noHintAvailable', { defaultMessage: '无法提供答案提示' }), {
          position: 'top-right',
          autoClose: 2000
        });
      }
    } catch (error) {
      console.error('获取答案提示失败:', error);
      toast.error(t('hintError', { defaultMessage: '获取答案提示时出错，请重试' }), {
        position: 'top-right',
        autoClose: 2000
      });
    }
  };
  
  // 从utils中获取提示
  const getHintFromUtils = () => {
    if (sudokuContext && sudokuContext.currentBoard) {
      return getHint(sudokuContext.currentBoard);
    }
    return null;
  };
  
  // 处理技巧高亮的函数（与ControlPanel中的一致）
  const handleTechniqueHighlighting = (technique) => {
    const cellsToHighlight = [];
    
    // 确保必要的字段存在
    const { cells = [], targetCells = [], values = [], removableCandidates = [], result = {} } = technique;
    const { operation } = result;
    
    // 检查是否为基础技巧
    const isBasicTechnique = technique.type && (
      technique.type === 'nakedSingle' ||
      technique.type === 'notesSingle' ||
      technique.type.includes('hiddenSingle')
    );
    
    // 基础技巧使用特殊的高亮逻辑
    if (isBasicTechnique) {
      const hasSingleCell = typeof technique.row === 'number' && typeof technique.col === 'number';
      if (!hasSingleCell) {
        sudokuContext.setHighlightedCells(cellsToHighlight);
        return cellsToHighlight; // 如果没有单元格信息，返回空数组
      }
      
      const row = technique.row;
      const col = technique.col;
      let value = technique.value || technique.number || '';
      
      // 添加目标单元格
      cellsToHighlight.push({
        row: row,
        col: col,
        techniqueIndicator: true,
        targetNumber: value,
        isTarget: true,
        techniqueType: technique.type
      });
      
      // 根据技巧类型添加区域高亮单元格
      if (technique.type === 'hiddenSingleRow') {
        for (let c = 0; c < 9; c++) {
          if (c !== col) {
            cellsToHighlight.push({
              row: row,
              col: c,
              techniqueIndicator: true,
              regionHighlight: true
            });
          }
        }
      } else if (technique.type === 'hiddenSingleCol') {
        for (let r = 0; r < 9; r++) {
          if (r !== row) {
            cellsToHighlight.push({
              row: r,
              col: col,
              techniqueIndicator: true,
              regionHighlight: true
            });
          }
        }
      } else if (technique.type === 'hiddenSingleBox') {
        const boxRow = Math.floor(row / 3);
        const boxCol = Math.floor(col / 3);
        for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
          for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
            if (r !== row || c !== col) {
              cellsToHighlight.push({
                row: r,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true
              });
            }
          }
        }
      } else if (technique.type === 'nakedSingle' || technique.type === 'notesSingle') {
        // 唯一余数：高亮所有区域（行、列、宫）
        // 使用Set来去重
        const addedCells = new Set();
        addedCells.add(`${row}-${col}`); // 目标单元格
        
        // 添加整行
        for (let c = 0; c < 9; c++) {
          const key = `${row}-${c}`;
          if (!addedCells.has(key)) {
            cellsToHighlight.push({
              row: row,
              col: c,
              techniqueIndicator: true,
              regionHighlight: true
            });
            addedCells.add(key);
          }
        }
        
        // 添加整列
        for (let r = 0; r < 9; r++) {
          const key = `${r}-${col}`;
          if (!addedCells.has(key)) {
            cellsToHighlight.push({
              row: r,
              col: col,
              techniqueIndicator: true,
              regionHighlight: true
            });
            addedCells.add(key);
          }
        }
        
        // 添加整宫
        const boxRow = Math.floor(row / 3);
        const boxCol = Math.floor(col / 3);
        for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
          for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
            const key = `${r}-${c}`;
            if (!addedCells.has(key)) {
              cellsToHighlight.push({
                row: r,
                col: c,
                techniqueIndicator: true,
                regionHighlight: true
              });
              addedCells.add(key);
            }
          }
        }
      }
    } else {
      // 对于其他技巧，使用统一的高亮逻辑
      // 高亮条件单元格
      if (Array.isArray(cells) && cells.length > 0) {
        cells.forEach(cell => {
          const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
          const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
          
          if (r !== null && c !== null) {
            cellsToHighlight.push({
              row: r,
              col: c,
              techniqueIndicator: true,
              techniqueType: technique.type,
              highlightType: 'condition',
              isTarget: false,
              backgroundColor: 'transparent', // 非基础技巧不高亮单元格背景
              borderColor: 'transparent'
            });
          }
        });
      }
      
      // 高亮目标单元格
      if (Array.isArray(targetCells) && targetCells.length > 0) {
        targetCells.forEach(cell => {
          const r = Array.isArray(cell) ? cell[0] : (typeof cell.row === 'number' ? cell.row : null);
          const c = Array.isArray(cell) ? cell[1] : (typeof cell.col === 'number' ? cell.col : null);
          
          if (r !== null && c !== null) {
            // 检查是否已经作为条件单元格高亮
            const existingIndex = cellsToHighlight.findIndex(
              cell => cell.row === r && cell.col === c
            );
            if (existingIndex === -1) {
              // 新的目标单元格
              cellsToHighlight.push({
                row: r,
                col: c,
                techniqueIndicator: true,
                techniqueType: technique.type,
                highlightType: 'target', // 目标单元格标识
                isTarget: true,
                backgroundColor: 'transparent', // 透明背景
                borderColor: 'transparent' // 透明边框
              });
            } else {
              // 如果已存在，更新类型为target
              cellsToHighlight[existingIndex].highlightType = 'target';
              cellsToHighlight[existingIndex].isTarget = true;
              cellsToHighlight[existingIndex].backgroundColor = 'transparent'; // 透明背景
              cellsToHighlight[existingIndex].borderColor = 'transparent'; // 透明边框
            }
          }
        });
      }
    }
    
    // 设置高亮单元格
    sudokuContext.setHighlightedCells(cellsToHighlight);
  };
  
  // 处理按钮按下
  const handleMouseDown = () => {
    // 立即开始显示填充动画，不延迟
    setShowProgressBar(true);
    setProgress(0);
    
    // 启动填充动画（3秒内完成）
    const startTime = Date.now();
    const duration = 3000; // 3秒，符合用户要求
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        progressTimer.current = requestAnimationFrame(updateProgress);
      } else {
        // 填充动画完成，执行长按操作
        handleLongPress();
      }
    };
    
    progressTimer.current = requestAnimationFrame(updateProgress);
  };
  
  // 处理按钮释放
  const handleMouseUp = () => {
    // 清除长按计时器
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    
    // 清除进度条计时器
    if (progressTimer.current) {
      cancelAnimationFrame(progressTimer.current);
      progressTimer.current = null;
    }
    
    // 如果进度条正在显示但未完成，执行短点击操作
    if (showProgressBar && progress < 100) {
      handleShortClick();
    }
    
    // 重置状态
    setShowProgressBar(false);
    setProgress(0);
  };
  
  // 添加防抖标志
  const [isProcessingClick, setIsProcessingClick] = useState(false);
  
  // 处理短点击
  const handleShortClick = () => {
    // 防止短时间内重复触发
    if (isProcessingClick) return;
    
    setIsProcessingClick(true);
    console.log('候选数按钮短点击');
    console.log('sudokuContext:', sudokuContext);
    
    // 检查sudokuContext是否存在
    if (!sudokuContext) {
      console.log('sudokuContext不存在');
      toast.info(t('errorOccurred', { defaultMessage: '系统错误，请刷新页面重试' }), {
        position: 'top-right',
        autoClose: 2000
      });
      
      // 延迟重置状态，确保不会重复触发
      setTimeout(() => setIsProcessingClick(false), 500);
      return;
    }
    
    // 检查是否有选中的单元格
    if (sudokuContext.selectedCell) {
      const { row, col } = sudokuContext.selectedCell;
      console.log('选中的单元格:', row, col);
      
      // 检查单元格是否为空白（值为0）
      if (sudokuContext.currentBoard && sudokuContext.currentBoard[row] && sudokuContext.currentBoard[row][col] === 0) {
        console.log('单元格是空白的，准备填充候选数');
        // 为选中的空白单元格填充候选数
        if (sudokuContext.fillSelectedCellCandidates) {
          console.log('调用fillSelectedCellCandidates方法');
          sudokuContext.fillSelectedCellCandidates(row, col);
        } else {
          console.log('fillSelectedCellCandidates方法不存在');
          toast.info(t('functionNotAvailable', { defaultMessage: '该功能暂不可用' }), {
            position: 'top-right',
            autoClose: 2000
          });
        }
      } else {
        console.log('单元格不是空白的或currentBoard不存在');
        // 如果选中的不是空白单元格，显示提示信息
        toast.info(t('selectEmptyCell', { defaultMessage: '请选择一个空白单元格' }), {
          position: 'top-right',
          autoClose: 2000
        });
      }
    } else {
      console.log('没有选中的单元格');
      // 如果没有选中的单元格，显示提示信息
      toast.info(t('selectCellForCandidates', { defaultMessage: '请先选择一个空白单元格' }), {
        position: 'top-right',
        autoClose: 2000
      });
    }
    
    // 延迟重置状态，确保不会重复触发
    setTimeout(() => setIsProcessingClick(false), 500);
  };
  
  // 处理长按
  const handleLongPress = () => {
    console.log('候选数按钮长按');
    setIsLongPressActive(true);
    // 为所有空白单元格填充候选数
    if (onToggleNotes) {
      onToggleNotes();
      setIsNotesButtonActive(true); // 设置为激活状态
    }
    
    // 3秒后自动恢复按钮状态
    setTimeout(() => {
      setIsLongPressActive(false);
      setShowProgressBar(false);
      setProgress(0);
    }, 3000);
  };
  
  // 处理触摸事件（移动端支持）
  const handleTouchStart = (e) => {
    handleMouseDown();
  };
  
  const handleTouchEnd = (e) => {
    handleMouseUp();
  };
  
  return (
    <>
      <NavBlockContainer>
        <ButtonGrid>
          {/* 新建游戏按钮 - 打开难度选择模态框 */}
          <NavButton onClick={handleNewGameClick} title={t('newGame')}>
            <ButtonIcon><Icons.NewGame /></ButtonIcon>
          </NavButton>
          
          {/* 暂停计时按钮 */}
          <NavButton onClick={!gameCompleted ? onPauseTimer : undefined} disabled={gameCompleted} title={gameCompleted ? t('gameCompleted') : (isTimerActive ? t('pauseTimer') : t('resume'))}>
            <ButtonIcon>
              {gameCompleted || isTimerActive ? <Icons.Pause /> : <Icons.Play />}
            </ButtonIcon>
          </NavButton>
          
          {/* 技巧提示按钮 - 修改为依次显示技巧 */}
          <NavButton onClick={handleHintClick} title={t('hint')}>
            <ButtonIcon><Icons.Hint /></ButtonIcon>
          </NavButton>
          
          {/* 候选数按钮 */}
          <NavButton 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            title={t('notes')} 
            isActive={isNotesButtonActive || isLongPressActive}
            style={{ position: 'relative' }} // 为进度条定位添加相对定位
          >
            <ButtonIcon>
              {isLongPressActive ? (
                // 长按状态下显示"All"角标的图标
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  {/* 数独格子背景 */}
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="transparent" stroke="currentColor" strokeWidth="1.5"/>
                  {/* 添加2x2网格分割线 */}
                  <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="1"/>
                  {/* 显示两个数字：2（左上角）和5（右下角） */}
                  <text x="7" y="10" fontSize="6" fontWeight="bold">2</text>
                  <text x="15" y="18" fontSize="6" fontWeight="bold">5</text>
                  {/* 添加"All"角标 */}
                  <text x="18" y="6" fontSize="6" fontWeight="900" fill="currentColor">All</text>
                </svg>
              ) : (
                // 正常状态下显示原来的图标
                <Icons.Notes />
              )}
            </ButtonIcon>
            
            {/* 从左向右的底色填充特效 */}
            {showProgressBar && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${progress}%`,
                height: '100%',
                backgroundColor: 'rgba(52, 152, 219, 0.3)', // 半透明蓝色
                zIndex: -1, // 确保在按钮内容下方
                transition: 'width 0.1s linear'
              }} />
            )}
          </NavButton>
          
          {/* 模式切换按钮 */}
          <NavButton onClick={openModeSwitchModal} title={mode === 'game' ? (t('switchToLearningMode') || '切换到学习模式') : (t('switchToGameMode') || '切换到游戏模式')}>
            <ButtonIcon>
              {mode === 'game' ? <GameModeIcon /> : <LearningModeIcon />}
            </ButtonIcon>
          </NavButton>
        </ButtonGrid>
      </NavBlockContainer>
      
      {/* 难度选择模态框 */}
      <DifficultySelectModal
        isOpen={showDifficultyModal}
        onClose={() => setShowDifficultyModal(false)}
        onSelectDifficulty={handleDifficultySelect}
        initialDifficulty={sudokuContext?.difficulty || DIFFICULTY_LEVELS.MEDIUM}
      />
      
      {/* 模式切换确认模态框 */}
      <ModeSwitchModal
        isOpen={showModeSwitchModal}
        onClose={handleModeSwitchClose}
        currentMode={mode}
        onConfirm={handleModeSwitchConfirm}
      />
      
      {/* 确认对话框 */}
      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={confirmModalConfig.onConfirm}
        title={confirmModalConfig.title}
        message={confirmModalConfig.message}
        confirmText={confirmModalConfig.confirmText}
        cancelText={confirmModalConfig.cancelText}
      />
    </>
  );
};

export default NavigationBlock;