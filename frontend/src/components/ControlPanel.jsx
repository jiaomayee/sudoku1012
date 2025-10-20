import React, { useState, useEffect, useCallback } from 'react';
// 移除styled-components导入
import { useTheme } from '../context/ThemeContext';
import { useSudoku } from '../context/SudokuContext';

// 清理所有残留的CSS代码

// 清理所有残留的styled-components定义
  
// 清理所有残留的styled-components定义

// 清理所有残留的styled-components定义

const ControlPanel = ({ 
  onNumberSelect, 
  onClearCell,
  onUndo,
  onTogglePencilMode,
  selectedNumber,
  isPencilMode,
  remainingNumbers = {} // 添加剩余数字数量属性，默认为空对象
}) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('keyboard'); // 'keyboard', 'techniques', 'solution'
  const [selectedTechnique, setSelectedTechnique] = useState(null);
  
  // 从上下文获取技巧和应用技巧的方法
  const { identifyTechniques, applyTechniqueToBoard, gameStarted, currentBoard, setHighlightedCells, setSelectedCell } = useSudoku();
  
  // 保存找到的技巧
  const [availableTechniques, setAvailableTechniques] = useState([]);
  
  // 保存选中技巧的详细步骤
  const [techniqueSteps, setTechniqueSteps] = useState([]);
  
  // 监听游戏开始状态变化，确保新建游戏时显示键盘标签页
  useEffect(() => {
    // 当游戏状态变化时，重置为键盘标签页
    setActiveTab('keyboard');
    // 清除选中的技巧和步骤
    setSelectedTechnique(null);
    setTechniqueSteps([]);
    // 清空可用技巧列表
    setAvailableTechniques([]);
    // 清除高亮
    if (setHighlightedCells) {
      setHighlightedCells([]);
    }
  }, [gameStarted, currentBoard]); // 当游戏重新开始或棋盘变化时触发
  
  // 查找技巧的函数
  const findTechniques = useCallback(() => {
    if (identifyTechniques && currentBoard) {
      try {
        const techniques = identifyTechniques();
        setAvailableTechniques(techniques || []);
      } catch (error) {
        console.error('查找技巧失败:', error);
        setAvailableTechniques([]);
      }
    } else {
      setAvailableTechniques([]);
    }
  }, [identifyTechniques, currentBoard]);
  
  // 当技巧标签页激活时，查找可用技巧
  useEffect(() => {
    if (activeTab === 'techniques' && gameStarted && currentBoard) {
      findTechniques();
    }
  }, [activeTab, findTechniques, gameStarted, currentBoard]);
  
  // 当游戏状态变化时，重置技巧数据
  useEffect(() => {
    setAvailableTechniques([]);
  }, [gameStarted, currentBoard]); // 游戏重新开始时清空技巧列表

  // 处理技巧选择
  const handleTechniqueSelect = (technique) => {
    setSelectedTechnique(technique);
    
    // 根据选中的技巧类型生成解题步骤
    const steps = [];
    const row = technique.row + 1;
    const col = technique.col + 1;
    const position = `R${row}C${col}`;
    
    if (technique.type === 'nakedSingle') {
      steps.push(
        { step: 1, description: `查看单元格(${row},${col})`, highlight: position },
        { step: 2, description: '检查其所在行、列和宫已存在的数字', highlight: `R${row}, C${col}, B${Math.floor((row - 1) / 3) * 3 + Math.floor((col - 1) / 3) + 1}` },
        { step: 3, description: `发现该单元格只剩下数字${technique.value}可以填入`, highlight: position },
        { step: 4, description: `使用唯一数法填入数字${technique.value}`, highlight: position }
      );
    } else {
      // 隐性唯一数法步骤
      const regionType = technique.type.includes('Row') ? '行' : (technique.type.includes('Col') ? '列' : '宫');
      const regionNum = technique.type.includes('Row') ? row : (technique.type.includes('Col') ? col : Math.floor((row - 1) / 3) * 3 + Math.floor((col - 1) / 3) + 1);
      
      steps.push(
        { step: 1, description: `检查数字${technique.value}在${regionType}${regionNum}中的可能位置`, highlight: '' },
        { step: 2, description: `发现在${regionType}${regionNum}中，数字${technique.value}只能填入单元格(${row},${col})`, highlight: position },
        { step: 3, description: `使用隐性唯一数法填入数字${technique.value}`, highlight: position }
      );
    }
    
    setTechniqueSteps(steps);
    
    // 设置技巧指示高亮 - 使用真实的技巧机会数据
    if (setHighlightedCells) {
      // 从技巧对象中提取候选数信息
      const notes = technique.notes || (Array.isArray(technique.cells) && technique.cells.length > 0 ? [technique.value] : []);
      
      setHighlightedCells([{
        row: technique.row,
        col: technique.col,
        techniqueIndicator: true,
        number: technique.value,
        notes: notes // 添加notes属性，用于候选数高亮显示
      }]);
    }
    
    // 切换到解题步骤标签页
    setActiveTab('solution');
  };

  // 应用技巧
  const handleApplyTechnique = () => {
    if (selectedTechnique) {
      const success = applyTechniqueToBoard(selectedTechnique);
      if (success) {
        // 应用成功后，清除高亮
        if (setHighlightedCells) {
          setHighlightedCells([]);
        }
        // 取消单元格选中状态
        if (setSelectedCell) {
          setSelectedCell(null);
        }
        // 重新查找可用技巧
        findTechniques();
      }
    }
  };

  return (
    <div className="control-panel" style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
      display: 'flex',
      flexDirection: 'column',
      // 移除硬编码宽度，让CSS媒体查询控制宽度，确保竖屏模式下与棋盘等宽
      fontFamily: 'Arial, Microsoft YaHei, sans-serif',
      margin: 0,
      boxSizing: 'border-box',
      border: '1px solid #e0e0e0',
      position: 'relative',
      height: window.innerWidth <= 576 ? 'auto' : 'var(--board-width)',
      overflow: 'hidden',
      outline: 'none', // 移除聚焦轮廓
      WebkitTapHighlightColor: 'transparent' // 移除点击高亮
    }}>
      <h3 style={{ display: 'none' }}>控制面板</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: 0,
        minHeight: 0,
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e0e0e0',
          marginBottom: '8px',
          paddingBottom: 0
        }}>
          <button 
              style={{
                flex: 1,
                padding: '4px 8px',
                backgroundColor: activeTab === 'keyboard' ? '#3498db15' : 'transparent',
                border: 'none',
                borderRadius: '6px 6px 0 0',
                fontSize: '14px',
                fontWeight: activeTab === 'keyboard' ? '700' : '500',
                color: activeTab === 'keyboard' ? '#3498db' : '#7f8c8d',
                cursor: 'pointer',
                margin: '0 2px',
                boxSizing: 'border-box',
                minHeight: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              onClick={() => setActiveTab('keyboard')}
            >
              键盘
            </button>
            <button 
              style={{
                flex: 1,
                padding: '4px 8px',
                backgroundColor: activeTab === 'techniques' ? '#3498db15' : 'transparent',
                border: 'none',
                borderRadius: '6px 6px 0 0',
                fontSize: '14px',
                fontWeight: activeTab === 'techniques' ? '700' : '500',
                color: activeTab === 'techniques' ? '#3498db' : '#7f8c8d',
                cursor: 'pointer',
                margin: '0 2px',
                boxSizing: 'border-box',
                minHeight: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              onClick={() => {
                setActiveTab('techniques');
                // 取消选中单元格
                if (setSelectedCell) {
                  setSelectedCell(null);
                }
              }}
            >
              技巧
            </button>
            <button 
              style={{
                flex: 1,
                padding: '4px 8px',
                backgroundColor: activeTab === 'solution' ? '#3498db15' : 'transparent',
                border: 'none',
                borderRadius: '6px 6px 0 0',
                fontSize: '14px',
                fontWeight: activeTab === 'solution' ? '700' : '500',
                color: activeTab === 'solution' ? '#3498db' : '#7f8c8d',
                cursor: 'pointer',
                margin: '0 2px',
                boxSizing: 'border-box',
                minHeight: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
              onClick={() => setActiveTab('solution')}
            >
              解题
            </button>
        </div>
        
        {/* 标签页内容 */}
          <div style={{
            flex: 1,
            padding: '4px 0',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0
          }}>
          {activeTab === 'keyboard' && (
            <>
              {window.innerWidth <= 768 ? (
                // 竖屏布局：数字1-6一行，数字7-9和操作按钮一行
                <>
                  {/* 第一行：数字按钮 1-6 */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', marginBottom: '8px' }}>
                    {[1, 2, 3, 4, 5, 6].map(number => {
                      const remainingCount = remainingNumbers.hasOwnProperty(number) ? remainingNumbers[number] : 9;
                      const isDisabled = remainingCount === 0;
                      return (
                        <button
                          key={number}
                          className="number-button"
                          disabled={isDisabled}
                          onClick={(e) => {
                            e.stopPropagation();
                            !isDisabled && onNumberSelect(number);
                          }}
                          style={{
                            // 基础样式
                            position: 'relative',
                            backgroundColor: selectedNumber === number || isPencilMode ? '#3498db' : '#ffffff',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            border: 'none',
                            
                            // 核心布局属性
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            borderRadius: '8px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.2',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            boxSizing: 'border-box',
                            
                            // 尺寸控制 - 添加aspectRatio确保正方形
                            width: '100%',
                            aspectRatio: '1',
                            minHeight: '60px',
                            overflow: 'hidden',
                            
                            // 阴影和过渡
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ 
                            fontSize: 'clamp(40px, 12vw, 80px)',
                            fontWeight: '400',
                            lineHeight: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}>{number}</span>
                          <span style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            backgroundColor: 'transparent',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '1px 4px',
                            borderRadius: '8px',
                            minWidth: '16px',
                            textAlign: 'center',
                            display: isPencilMode || remainingCount === 0 ? 'none' : 'inline-block'
                          }}>
                            {remainingCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* 第二行：数字7-9和操作按钮 */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' }}>
                    {/* 数字7-9 */}
                    {[7, 8, 9].map(number => {
                      const remainingCount = remainingNumbers.hasOwnProperty(number) ? remainingNumbers[number] : 9;
                      const isDisabled = remainingCount === 0;
                      return (
                        <button
                          key={number}
                          className="number-button"
                          disabled={isDisabled}
                          onClick={(e) => {
                            e.stopPropagation();
                            !isDisabled && onNumberSelect(number);
                          }}
                          style={{
                            // 基础样式
                            position: 'relative',
                            backgroundColor: selectedNumber === number || isPencilMode ? '#3498db' : '#ffffff',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            border: 'none',
                            
                            // 核心布局属性
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                            borderRadius: '8px',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.2',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            boxSizing: 'border-box',
                            
                            // 尺寸控制
                            width: '100%',
                            aspectRatio: '1',
                            minHeight: '60px',
                            overflow: 'hidden',
                            
                            // 阴影和过渡
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ 
                            fontSize: 'clamp(40px, 12vw, 80px)',
                            fontWeight: '400',
                            lineHeight: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box'
                          }}>{number}</span>
                          <span style={{
                            position: 'absolute',
                            top: '2px',
                            right: '2px',
                            backgroundColor: 'transparent',
                            color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '1px 4px',
                            borderRadius: '8px',
                            minWidth: '16px',
                            textAlign: 'center',
                            display: isPencilMode || remainingCount === 0 ? 'none' : 'inline-block'
                          }}>
                            {remainingCount}
                          </span>
                        </button>
                      );
                    })}
                    
                    {/* 撤回按钮 */}
                    <button
                      key="undo"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUndo();
                      }}
                      title="撤回"
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
                        borderRadius: '8px',
                        fontSize: '60px !important',
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: '600',
                        lineHeight: '1.2',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        
                        // 尺寸控制
                        width: '100%',
                        aspectRatio: '1',
                        minHeight: '60px',
                        overflow: 'hidden',
                        
                        // 阴影和过渡
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M3 7v6h6"/>
                        <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
                      </svg>
                    </button>
                    
                    {/* 清除按钮 */}
                    <button
                      key="clear"
                      onClick={(e) => {
                        e.stopPropagation();
                        onClearCell();
                      }}
                      title="清空单元格"
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
                        minHeight: '60px',
                        overflow: 'hidden',
                        
                        // 阴影和过渡
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg 
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
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
                    
                    {/* 铅笔按钮 */}
                    <button
                      key="pencil"
                      onClick={(e) => {
                        e.stopPropagation();
                        onTogglePencilMode();
                      }}
                      title={isPencilMode ? "退出铅笔模式" : "进入铅笔模式"}
                      style={{
                        // 基础样式
                        position: 'relative',
                        backgroundColor: isPencilMode ? '#3498db' : '#ffffff',
                        color: isPencilMode ? 'white' : '#3498db',
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
                        minHeight: '60px',
                        overflow: 'hidden',
                        
                        // 阴影和过渡
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                // 横屏布局：保持原有的九宫格布局
                <div className="number-pad" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', width: '100%', maxHeight: '100%', overflow: 'visible', padding: '4px', boxSizing: 'border-box' }}>
                  {/* 数字按钮 1-9 */}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => {
                    // 使用hasOwnProperty确保当值为0时也能正确处理，而不是使用默认值9
                    const remainingCount = remainingNumbers.hasOwnProperty(number) ? remainingNumbers[number] : 9;
                    const isDisabled = remainingCount === 0; // 当剩余数量为0时禁用按钮
                    return (
                        <button
                        key={number}
                        className="number-button"
                        disabled={isDisabled}
                        onClick={(e) => {
                          e.stopPropagation(); // 阻止事件冒泡
                          !isDisabled && onNumberSelect(number);
                        }}
                        style={{
                          // 基础样式
                          position: 'relative',
                          backgroundColor: selectedNumber === number || isPencilMode ? '#3498db' : '#ffffff',
                          color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                          border: 'none',
                            
                          // 核心布局属性
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px',
                          borderRadius: '12px',
                          fontFamily: 'Arial, sans-serif',
                          fontWeight: '400', // 直接设置为400
                          lineHeight: '1',
                          cursor: isDisabled ? 'not-allowed' : 'pointer',
                          boxSizing: 'border-box',
                          
                          // 尺寸控制
                          width: '100%',
                          aspectRatio: '1',
                          minHeight: '60px',
                          maxHeight: '150px',
                          overflow: 'visible',
                          // 响应式按钮大小
                          fontSize: '0', // 让内容决定大小
                          
                          // 阴影和过渡
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                      <span style={{ 
                        fontSize: 'clamp(30px, 8vw, 70px)',
                        fontWeight: '400',
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                        boxSizing: 'border-box'
                      }}>{number}</span>
                      <span style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px',
                        backgroundColor: 'transparent',
                        color: selectedNumber === number || isPencilMode ? 'white' : '#3498db',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '2px 6px',
                        borderRadius: '10px',
                        minWidth: '20px',
                        textAlign: 'center',
                        display: isPencilMode || remainingCount === 0 ? 'none' : 'inline-block'
                      }}>
                        {remainingCount}
                      </span>
                    </button>
                    );
                  })}
                  
                  {/* 操作按钮 - 使用与数字按钮相同的样式 */}
                  {/* 撤回按钮 - 使用左箭头图标 */}
                  <button
                    key="undo"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡
                      onUndo();
                    }}
                    title="撤回"
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
                      fontWeight: '600',
                      lineHeight: '1.2',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                       
                      // 尺寸控制
                      width: '100%',
                      aspectRatio: '1',
                      minHeight: '60px',
                      maxHeight: '150px',
                      overflow: 'visible',
                      
                      // 阴影和过渡
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="60%" 
                      height="60%" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M3 7v6h6"/>
                      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
                    </svg>
                  </button>
                  
                  {/* 清除按钮 - 使用垃圾桶图标 */}
                  <button
                    key="clear"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡
                      onClearCell();
                    }}
                    title="清空单元格"
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
                      borderRadius: '12px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: '600',
                      lineHeight: '1.2',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                       
                      // 尺寸控制
                      width: '100%',
                      aspectRatio: '1',
                      minHeight: '60px',
                      maxHeight: '150px',
                      overflow: 'visible',
                      
                      // 阴影和过渡
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg 
                      className="icon"
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
                  </button>
                  
                  {/* 铅笔按钮 - 使用铅笔图标 */}
                  <button
                    key="pencil"
                    onClick={(e) => {
                      e.stopPropagation(); // 阻止事件冒泡
                      onTogglePencilMode();
                    }}
                    title={isPencilMode ? "退出铅笔模式" : "进入铅笔模式"}
                    style={{
                      // 基础样式
                      position: 'relative',
                      backgroundColor: isPencilMode ? '#3498db' : '#ffffff',
                      color: isPencilMode ? 'white' : '#3498db',
                      border: 'none',
                      
                      // 核心布局属性
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px',
                      borderRadius: '12px',
                      fontFamily: 'Arial, sans-serif',
                      fontWeight: '600',
                      lineHeight: '1.2',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                       
                      // 尺寸控制
                      width: '100%',
                      aspectRatio: '1',
                      minHeight: '60px',
                      maxHeight: '150px',
                      overflow: 'visible',
                      
                      // 阴影和过渡
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="60%" 
                      height="60%" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'techniques' && (
            <div style={{ overflowY: 'auto', padding: '8px' }}>
              <h4 style={{ margin: '0 0 12px 0', color: '#34495e', fontSize: '16px', fontWeight: '600' }}>可用技巧</h4>
              {availableTechniques.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '20px', 
                  color: '#7f8c8d',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  当前棋盘没有找到可用技巧
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                  {availableTechniques.map((technique, index) => {
                    const row = technique.row + 1;
                    const col = technique.col + 1;
                    return (
                      <div 
                        key={index}
                        onClick={() => handleTechniqueSelect(technique)}
                        style={{
                          padding: '12px',
                          backgroundColor: '#f8f9fa',
                          borderRadius: '8px',
                          border: '1px solid #e9ecef',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#e9ecef';
                          e.currentTarget.style.borderColor = '#3498db';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8f9fa';
                          e.currentTarget.style.borderColor = '#e9ecef';
                        }}
                      >
                        <div style={{ fontWeight: '600', color: '#34495e', marginBottom: '4px' }}>{technique.description}</div>
                        <div style={{ fontSize: '14px', color: '#7f8c8d' }}>位置: ({row},{col})</div>
                        <div style={{ fontSize: '14px', color: '#7f8c8d' }}>值: {technique.value}</div>
                      </div>
                    );
                  })}
                </div>
              )}
              <button 
                onClick={findTechniques}
                style={{
                  width: '100%',
                  padding: '8px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                刷新技巧列表
              </button>
            </div>
          )}
          
          {activeTab === 'solution' && (
            <div style={{ overflowY: 'auto', padding: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <h4 style={{ margin: 0, color: '#34495e', fontSize: '16px', fontWeight: '600' }}>
                  解题步骤
                </h4>
                {selectedTechnique && (
                  <button 
                    onClick={handleApplyTechnique}
                    style={{
                      width: '120px',
                      height: '36px',
                      backgroundColor: '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2980b9';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#3498db';
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(52, 152, 219, 0.3), 0 1px 3px rgba(0, 0, 0, 0.12)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    应用技巧
                  </button>
                )}
              </div>
              {selectedTechnique ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '12px' }}>
                  {techniqueSteps.map((step) => (
                    <div 
                      key={step.step}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '8px',
                        border: '1px solid #e9ecef'
                      }}
                    >
                      <div style={{
                        minWidth: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#3498db',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        {step.step}
                      </div>
                      <div style={{ flex: 1, fontSize: '14px', color: '#34495e', lineHeight: '1.5' }}>
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '20px', 
                  color: '#7f8c8d',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  请先从技巧列表中选择一个技巧
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;