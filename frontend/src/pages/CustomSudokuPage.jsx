import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SudokuBoard from '../components/SudokuBoard';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useSudoku } from '../context/SudokuContext';
import { api } from '../services/api';
import { solveSudoku, isValidSudoku } from '../utils/sudokuUtils';
import styled from 'styled-components';

const CustomSudokuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  padding: 20px;
  gap: 20px;
`;

const CustomSudokuContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const BoardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const KeyboardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
`;

const CustomSudokuPage = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // 初始化一个空的棋盘
  const [board, setBoard] = useState(Array(9).fill().map(() => Array(9).fill(0)));
  const [selectedCell, setSelectedCell] = useState(null);
  const [pencilNotes, setPencilNotes] = useState({});
  const boardContainerRef = useRef(null);

  // 处理单元格点击
  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  // 处理数字选择
  const handleNumberSelect = (number) => {
    if (!selectedCell) return;

    // 正常模式：填入数字
    const newBoard = board.map(row => [...row]);
    newBoard[selectedCell.row][selectedCell.col] = number;
    setBoard(newBoard);
  };

  // 处理清除单元格
  const handleClearCell = () => {
    if (!selectedCell) {
      return;
    }
    
    const newBoard = board.map(row => [...row]);
    newBoard[selectedCell.row][selectedCell.col] = 0;
    setBoard(newBoard);
    
    // 清除该单元格的候选数
    const cellKey = `${selectedCell.row}-${selectedCell.col}`;
    const newPencilNotes = { ...pencilNotes };
    delete newPencilNotes[cellKey];
    setPencilNotes(newPencilNotes);
  };

  // 处理切换铅笔模式
  // 字段删除：此函数不再使用

  // 处理保存并返回
  const handleSaveAndReturn = async () => {
    // 1. 验证数齐是否符合数独规则
    if (!isValidSudoku(board)) {
      alert(t('invalidSudoku') || '数独不符合规则，请检查棋盘数据');
      return;
    }

    try {
      // 2. 验证是否有其他数一第
      // 使用后端 API 执行严格验证
      const response = await api.validateSudoku(board);
      
      if (!response || !response.unique_solution) {
        alert(
          response && !response.has_solution 
            ? (t('noSolution') || '该数独不可解，请检查棋盘数据')
            : (t('notUniqueSolution') || '该数独不仅有帮一个解，请修改棋盘数据')
        );
        return;
      }

      // 3. 求解
      const solution = solveSudoku(board);
      if (!solution) {
        alert(t('noSolution') || '无法求解');
        return;
      }

      // 4. 保存到本地缓存
      const customPuzzleData = {
        puzzle: board,
        solution: solution,
        difficulty: 'custom',
        timestamp: Date.now()
      };
      localStorage.setItem('customPuzzle', JSON.stringify(customPuzzleData));

      // 5. 跟跃到开始游戏页面设置数据
      // 第一步：旅转到游戏页面
      navigate('/game');

      // 第二步：在游戏页面 useEffect 中检查 localStorage 并加载自定义数独
      // 会由游戏页面负责加载
    } catch (error) {
      console.error('数独验证失败:', error);
      alert(t('validationError') || '验证失败，请检查棋盘数据');
    }
  };

  // 计算剩余数字数量
  const calculateRemainingNumbers = () => {
    const remainingCounts = {};
    for (let num = 1; num <= 9; num++) {
      remainingCounts[num] = 9;
    }
    
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== 0) {
          remainingCounts[board[i][j]]--;
        }
      }
    }
    
    return remainingCounts;
  };

  const remainingNumbers = calculateRemainingNumbers();

  return (
    <CustomSudokuContainer theme={theme}>
      <Title theme={theme}>{t('customSudoku')}</Title>
      
      <CustomSudokuContent>
        {/* 棋盘区块 */}
        <BoardSection>
          <div 
            className="board-container" 
            ref={boardContainerRef} 
            onClick={(e) => e.stopPropagation()} 
            style={{ position: 'relative' }}
          >
            <SudokuBoard
              board={board}
              originalPuzzle={Array(9).fill().map(() => Array(9).fill(0))}
              selectedCell={selectedCell}
              highlightedCells={[]}
              incorrectCells={new Set()}
              onCellClick={handleCellClick}
              isPencilMode={false}
              pencilNotes={pencilNotes}
            />
          </div>
        </BoardSection>

        {/* 数字键盘区块 */}
        <KeyboardSection>
          <div 
            className="controls-container" 
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            {/* 数字按钮 1-9（九宫格布局） */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '8px', 
              width: '100%', 
              maxWidth: '280px',
              padding: '4px',
              boxSizing: 'border-box'
            }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => {
                const remainingCount = remainingNumbers[number] || 0;
                const isDisabled = remainingCount === 0;
                
                return (
                  <button
                    key={number}
                    className="number-button"
                    disabled={isDisabled}
                    onClick={(e) => {
                      e.stopPropagation();
                      !isDisabled && handleNumberSelect(number);
                    }}
                    style={{
                      // 基础样式
                      position: 'relative',
                      backgroundColor: '#ffffff',
                      color: '#3498db',
                      border: 'none',
                        
                      // 核心布局属性
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                      borderRadius: '12px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: '400',
                      lineHeight: '1',
                      cursor: isDisabled ? 'not-allowed' : 'pointer',
                      boxSizing: 'border-box',
                      
                      // 尺寸控制
                      width: '100%',
                      aspectRatio: '1',
                      minHeight: '80px',
                      maxHeight: '180px',
                      overflow: 'visible',
                      fontSize: '0',
                      
                      // 阴影和过渡
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.2s ease',
                      
                      // 禁用状态样式
                      opacity: isDisabled ? 0.5 : 1
                    }}
                    title={`${number}`}
                  >
                    <span style={{ 
                      fontSize: 'clamp(40px, 12vw, 90px)',
                      fontWeight: '400',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      width: '100%',
                      height: '100%',
                      boxSizing: 'border-box'
                    }}>
                      {number}
                    </span>
                    <span style={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      backgroundColor: 'transparent',
                      color: '#3498db',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      minWidth: '20px',
                      textAlign: 'center',
                      display: remainingCount === 0 ? 'none' : 'inline-block'
                    }}>
                      {remainingCount}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 操作按钮（清除、保存并返回） */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '8px', 
              width: '100%',
              maxWidth: '280px',
              marginTop: '10px',
              padding: '4px',
              boxSizing: 'border-box'
            }}>
              {/* 清除按钮 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!selectedCell) {
                    alert(t('pleaseSelectCell') || '请先选择一个单元格');
                    return;
                  }
                  handleClearCell();
                }}
                title={t('clearCell')}
                style={{
                  // 基础样式
                  position: 'relative',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  
                  // 核心布局属性
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '8px',
                  fontSize: '24px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '600',
                  lineHeight: '1.2',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                  
                  // 尺寸控制
                  width: '100%',
                  aspectRatio: '1',
                  minHeight: '80px',
                  overflow: 'hidden',
                  
                  // 阴影和过渡
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg 
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg" 
                  width="36" 
                  height="36" 
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
              </button>
              
              {/* 保存并返回按钮 - 占用2列 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSaveAndReturn();
                }}
                title={t('save') || '保存'}
                style={{
                  // 基础样式
                  position: 'relative',
                  backgroundColor: '#27ae60',
                  color: 'white',
                  border: 'none',
                  
                  // 核心布局属性
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '8px',
                  fontSize: '24px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '600',
                  lineHeight: '1.2',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                  
                  // 尺寸控制 - 占用2列
                  gridColumn: 'span 2',
                  width: '100%',
                  aspectRatio: '2 / 1',
                  minHeight: '80px',
                  overflow: 'hidden',
                  
                  // 阴影和过渡
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="36" 
                  height="36" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </div>
        </KeyboardSection>
      </CustomSudokuContent>
    </CustomSudokuContainer>
  );
};

export default CustomSudokuPage;
