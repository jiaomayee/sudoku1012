# 数独学习应用UI开发文档

## 1. 概述

本文档详细描述数独学习应用的用户界面设计和开发规范，确保应用在不同设备上提供一致且良好的用户体验。应用支持横屏设备（如电脑、iPad、iPad Mini）和竖屏设备（如手机），并针对不同屏幕方向提供相应的布局适配。

## 2. 响应式设计原则

### 2.1 设备支持范围

- **横屏设备**：桌面电脑、笔记本电脑、iPad（横屏）、iPad Mini（横屏）
- **竖屏设备**：智能手机、iPad（竖屏）、平板设备（竖屏）

### 2.2 断点设计

| 设备类型 | 屏幕宽度范围 | 布局模式 |
|---------|------------|--------|
| 大屏桌面 | ≥ 1200px    | 横屏桌面布局 |
| 中屏桌面 | 992px - 1199px | 横屏桌面布局 |
| 小屏桌面 | 768px - 991px  | 横屏紧凑布局 |
| 平板竖屏 | 576px - 767px  | 竖屏平板布局 |
| 手机设备 | < 576px      | 竖屏手机布局 |

## 3. 横屏布局设计

### 3.1 整体结构

```
+-----------------------------------------------------------+
|                 顶部菜单栏                                  |
|  [游戏名称]                             [语言切换下拉菜单] |
+-----------------------------------------------------------+
|                                                           |
|                       +----------------+----------------+ |
|                       |   导航栏区块   |   显示区块     | |
|                       | 新建 暂停 提示 | 错误：0        | |
|                       | 候选 设置      | 简单           | |
|                       |                | 00:00:00       | |
|                       +----------------+----------------+ |
|                                                           |
|                       +----------------+----------------+ |
|                       |               |                | |
|                       |               |                | |
|                       |   数独棋盘    |   操作区块     | |
|                       |    (核心)     |   (标签页)     | |
|                       |               |                | |
|                       |               |                | |
|                       +----------------+----------------+ |
|                                                           |
+-----------------------------------------------------------+
```

### 3.2 区域详解

#### 3.2.1 顶部菜单栏
- **位置**：页面最顶部，固定定位
- **左侧**：游戏名称/Logo
- **右侧**：语言切换下拉菜单（支持中英文切换）
- **响应式行为**：在小屏幕横屏设备上，游戏名称可能简化为图标

#### 3.2.2 导航栏区块
- **位置**：上方左侧，与棋盘同宽并垂直对齐
- **包含按钮**：
  1. **新建游戏**：重新生成新的数独谜题
  2. **暂停计时**：暂停/继续当前游戏计时
  3. **技巧提示**：提供当前步骤的解题技巧提示
  4. **候选数**：切换候选数显示模式
  5. **设置**：打开游戏设置菜单
- **布局**：水平排列的图标按钮组，支持图标+文字组合或纯图标模式
- **宽度要求**：与数独棋盘宽度一致

#### 3.2.3 显示区块
- **位置**：上方右侧，与操作区块同宽并垂直对齐
- **内容**：
  - 错误次数统计：格式为"错误：0"，使用红色字体显示错误次数
  - 当前难度等级：直接显示难度名称，如"简单"、"中等"、"困难"
  - 游戏计时器：格式为"00:00:00"，表示时分秒
- **设计特点**：
  - 内容显示尽可能精简，减少文字描述
  - 使用垂直堆叠方式排列三个内容项
  - 保持足够的字体大小以确保可读性
  - 宽度与操作区块一致

#### 3.2.4 数独棋盘（核心模块）
- **位置**：下方左侧
- **尺寸**：
  - 必须为正方形（宽度等于高度）
  - 横屏模式下：宽度或高度不小于屏幕高度的二分之一
  - 作为整个界面的尺寸基准，所有其他区块的尺寸均基于棋盘尺寸变化
- **设计**：
  - 9×9网格布局
  - 3×3宫格间有较粗边框分隔
  - 初始数字与用户输入数字有明显区分（颜色、粗细等）
  - 选中单元格有高亮效果
  - 错误数字有视觉提示（红色边框或背景）
  - 支持候选数显示模式

#### 3.2.5 操作区块
- **位置**：下方右侧
- **尺寸**：
  - 宽度为棋盘宽度的2/3
  - 高度与棋盘高度一致
  - 水平方向与棋盘对齐
- **设计**：标签页式布局
- **标签页内容**：
  1. **键盘区域**：数字键盘，用于输入数字
  2. **可用技巧区域**：当前局面可应用的解题技巧列表
  3. **技巧解题区域**：选中技巧后的详细解题步骤和说明

## 4. 竖屏布局设计

### 4.1 整体结构

```
+-----------------------------------------------------------+
|                 顶部菜单栏                                  |
|  [游戏名称]                             [语言切换下拉菜单] |
+-----------------------------------------------------------+
|                                                           |
|  +----------------+                                        |
|  |   导航栏区块   |                                        |
|  | 新建 暂停 提示 |                                        |
|  | 候选 设置      |                                        |
|  +----------------+                                        |
|                                                           |
|  +----------------+                                        |
|  |   显示区块     |                                        |
|  | 错误：0        |                                        |
|  | 简单           |                                        |
|  | 00:00:00       |                                        |
|  +----------------+                                        |
|                                                           |
|  +----------------+                                        |
|  |                |                                        |
|  |                |                                        |
|  |                |                                        |
|  |   数独棋盘     |                                        |
|  |    (核心)      |                                        |
|  |                |                                        |
|  |                |                                        |
|  |                |                                        |
|  +----------------+                                        |
|                                                           |
|  +----------------+                                        |
|  |   操作区块     |                                        |
|  |   (标签页)     |                                        |
|  | 键盘/技巧/解题 |                                        |
|  +----------------+                                        |
|                                                           |
+-----------------------------------------------------------+
```

### 4.2 区域详解

#### 4.2.1 顶部菜单栏
- **设计**：与横屏布局相同，但在小屏幕上可能简化显示

#### 4.2.2 导航栏区块
- **位置**：顶部菜单栏下方
- **设计**：与横屏布局相同，水平排列5个功能按钮
- **响应式调整**：在极小屏幕上可能改为网格布局（2×3或3×2）

#### 4.2.3 显示区块
- **位置**：导航栏下方
- **设计**：
  - 在竖屏模式下背景为透明
  - 最大化压缩高度，减少与导航区块和棋盘区块之间的间距
  - 保留与横屏相同的三个核心内容：错误次数统计、难度等级、游戏计时器
  - 内容格式保持精简："错误：0"、"简单"、"00:00:00"
  - 可能采用水平排列以进一步减小垂直占用空间

#### 4.2.4 数独棋盘（核心模块）
- **位置**：显示区块下方
- **尺寸**：
  - 必须为正方形（宽度等于高度）
  - 宽度接近设备最大宽度（考虑适当边距，约为屏幕宽度的90%）
  - 作为整个界面的尺寸基准，所有其他区块的尺寸均基于棋盘尺寸变化
- **设计**：与横屏布局相同，但高度自适应，确保在竖屏中占据合适比例
- **触摸优化**：增大触摸目标尺寸，确保在移动设备上易于操作

#### 4.2.5 操作区块
- **位置**：页面底部
- **尺寸**：
  - 宽度与棋盘宽度一致
  - 高度适配竖屏设备高度，确保操作区块能完整在竖屏设备中显示
- **设计**：标签页式布局，与横屏布局相同
- **响应式调整**：标签页切换方式可能优化为更适合触摸的设计

## 5. UI组件设计规范

### 5.1 颜色方案

#### 5.1.1 主色调
- **主色**：#3498db（蓝色）- 代表逻辑和思考
- **辅助色**：#2ecc71（绿色）- 用于成功状态和提示
- **警告色**：#e74c3c（红色）- 用于错误提示和警告
- **中性色**：#34495e（深蓝灰）- 用于文本和背景

#### 5.1.2 主题支持
- 支持亮色模式和暗色模式切换
- 在设置中可配置主题偏好
- 自动根据系统设置切换主题

### 5.2 字体规范

- **主要字体**：系统默认无衬线字体
- **标题字体大小**：响应式，最小16px，最大24px
- **正文字体大小**：响应式，最小14px，最大18px
- **数字键盘**：大尺寸字体，确保易读性和触摸准确性

### 5.3 交互设计

#### 5.3.1 棋盘交互
- **点击/触摸**：选中单元格
- **键盘输入**：直接输入数字（桌面端）
- **长按**：显示候选数选择菜单（移动设备）
- **拖拽**：支持数字拖拽填入（高级功能）

#### 5.3.2 按钮交互
- **悬停效果**：桌面端提供视觉反馈
- **点击效果**：所有设备提供明确的按下状态
- **长按菜单**：部分按钮支持长按显示更多选项

#### 5.3.3 动画效果
- **页面切换**：平滑过渡动画
- **状态变化**：数字填入、错误提示等使用淡入淡出效果
- **区块折叠/展开**：支持平滑动画过渡

## 6. 技术实现指南

### 6.1 CSS框架选择
- 使用CSS Grid和Flexbox进行布局
- 可考虑使用Tailwind CSS或Bootstrap等响应式框架
- 自定义主题变量，确保颜色和间距一致性

### 6.2 响应式实现方案

```css
/* 横屏桌面布局 */
@media (min-width: 992px) {
  /* 主容器设置为flex布局，实现垂直和水平居中 */
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 60px); /* 减去顶部菜单栏高度 */
    padding: 20px;
    box-sizing: border-box;
  }
  
  /* 主要内容区域：包含所有四个区块 */
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    max-width: 1400px;
  }
  
  /* 顶部区域：导航栏和显示区块 */
  .top-row {
    display: flex;
    gap: 15px;
    align-items: flex-start;
  }
  
  .nav-block {
    /* 宽度与棋盘宽度一致 */
    width: var(--board-width);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .display-block {
    /* 宽度为棋盘宽度的2/3 */
    width: var(--control-panel-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  
  /* 底部区域：数独棋盘和操作区块 */
  .bottom-row {
    display: flex;
    gap: 15px;
    align-items: flex-start;
  }
  
  .sudoku-board {
    /* 必须为正方形 */
    aspect-ratio: 1;
    /* 宽度或高度不小于屏幕高度的二分之一 */
    min-height: 50vh;
    width: var(--board-width);
    height: var(--board-width);
    /* 作为基准尺寸 */
    --board-width: 400px;
    --control-panel-width: calc(var(--board-width) * 0.6667);
  }
  
  .control-panel {
    /* 宽度为棋盘宽度的2/3 */
    width: var(--control-panel-width);
    /* 高度与棋盘一致 */
    height: var(--board-width);
  }
  
  .display-item {
    font-weight: bold;
    margin: 2px 0;
  }
  
  .error-counter {
    color: #e74c3c; /* 红色显示错误次数 */
  }
}

/* 竖屏布局 */
@media (max-width: 991px) {
  .app-container {
    display: flex;
    flex-direction: column;
    gap: 5px; /* 减小整体间距 */
    padding: 10px;
    box-sizing: border-box;
    min-height: 100vh;
  }
  
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  
  .nav-block {
    /* 宽度与棋盘一致 */
    width: var(--board-width);
    display: flex;
    justify-content: space-around;
    padding: 5px 0;
    align-self: center;
  }
  
  .display-block {
    /* 宽度与棋盘一致 */
    width: var(--board-width);
    background: transparent; /* 竖屏模式下透明背景 */
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2px 0;
    margin: 0;
    min-height: 30px; /* 最小化高度 */
    align-self: center;
  }
  
  .display-item {
    font-size: 0.9rem;
    margin: 0;
  }
  
  /* 棋盘宽度接近设备最大宽度 */
  .sudoku-board {
    /* 必须为正方形 */
    aspect-ratio: 1;
    /* 宽度接近设备最大宽度 */
    width: 90vw;
    height: 90vw;
    max-width: 400px;
    max-height: 400px;
    margin: 0 auto;
    /* 作为基准尺寸 */
    --board-width: min(90vw, 400px);
  }
  
  .control-panel {
    /* 宽度与棋盘一致 */
    width: var(--board-width);
    /* 高度适配竖屏设备高度 */
    height: auto;
    max-height: 30vh;
    margin: 0 auto;
    overflow-y: auto;
  }
}
```

### 6.3 横竖屏切换处理

在用户旋转设备时，需要动态调整布局以适应不同的屏幕方向。以下是实现横竖屏切换逻辑的JavaScript代码：

```javascript
// 监听屏幕尺寸变化，处理横竖屏切换
window.addEventListener('resize', handleResize);

// 初始加载时执行一次
window.addEventListener('load', handleResize);

/**
 * 处理窗口大小变化和横竖屏切换
 */
function handleResize() {
  // 检测当前屏幕方向
  const isLandscape = window.innerWidth > window.innerHeight;
  
  // 更新布局类
  const appContainer = document.querySelector('.app-container');
  if (isLandscape) {
    appContainer.classList.add('landscape');
    appContainer.classList.remove('portrait');
  } else {
    appContainer.classList.add('portrait');
    appContainer.classList.remove('landscape');
  }
  
  // 调整数独棋盘大小
  resizeSudokuBoard();
  
  // 更新区块对齐
  updateLayoutAlignment();
}

/**
 * 调整数独棋盘大小，确保其为正方形且符合尺寸要求
 */
function resizeSudokuBoard() {
  const sudokuBoard = document.querySelector('.sudoku-board');
  const isLandscape = window.innerWidth > window.innerHeight;
  
  if (sudokuBoard) {
    if (isLandscape) {
      // 横屏模式：棋盘宽/高不小于屏幕高度二分之一
      const minBoardSize = Math.max(window.innerHeight * 0.5, 400);
      const maxBoardSize = Math.min(window.innerWidth * 0.7, 600); // 确保有足够空间给操作区块
      const boardSize = Math.min(minBoardSize, maxBoardSize);
      
      // 设置棋盘尺寸和CSS变量
      sudokuBoard.style.setProperty('--board-width', `${boardSize}px`);
      sudokuBoard.style.width = `${boardSize}px`;
      sudokuBoard.style.height = `${boardSize}px`;
      
      // 计算操作面板宽度（棋盘宽度的2/3）
      const controlPanelWidth = boardSize * 0.6667;
      sudokuBoard.style.setProperty('--control-panel-width', `${controlPanelWidth}px`);
    } else {
      // 竖屏模式：棋盘宽度接近设备最大宽度，且为正方形
      const boardSize = Math.min(window.innerWidth * 0.9, 400); // 最大宽度400px
      
      // 设置棋盘尺寸和CSS变量
      sudokuBoard.style.setProperty('--board-width', `${boardSize}px`);
      sudokuBoard.style.width = `${boardSize}px`;
      sudokuBoard.style.height = `${boardSize}px`;
      sudokuBoard.style.setProperty('--control-panel-width', `${boardSize}px`); // 竖屏时操作面板宽度与棋盘一致
    }
    
    // 更新单元格大小
    updateCellSize();
  }
}

/**
 * 更新数独棋盘单元格大小
 */
function updateCellSize() {
  const sudokuBoard = document.querySelector('.sudoku-board');
  const cells = sudokuBoard.querySelectorAll('.cell');
  const boardSize = parseFloat(getComputedStyle(sudokuBoard).getPropertyValue('--board-width'));
  
  // 计算单元格大小（考虑边框和间距）
  const cellSize = (boardSize - 18) / 9; // 9x9网格，减去边框和间距
  
  cells.forEach(cell => {
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    cell.style.fontSize = `${cellSize * 0.7}px`; // 根据单元格大小调整字体
  });
}

/**
 * 更新布局对齐，确保各区块按照要求对齐
 */
function updateLayoutAlignment() {
  const isLandscape = window.innerWidth > window.innerHeight;
  const sudokuBoard = document.querySelector('.sudoku-board');
  const boardSize = parseFloat(getComputedStyle(sudokuBoard).getPropertyValue('--board-width'));
  
  if (sudokuBoard) {
    // 获取所有区块元素
    const navBlock = document.querySelector('.nav-block');
    const displayBlock = document.querySelector('.display-block');
    const controlPanel = document.querySelector('.control-panel');
    
    if (isLandscape) {
      // 横屏模式：导航栏宽度与棋盘一致
      if (navBlock) {
        navBlock.style.width = `${boardSize}px`;
      }
      
      // 操作区块宽度为棋盘的2/3，高度与棋盘一致
      if (controlPanel) {
        controlPanel.style.width = `${boardSize * 0.6667}px`;
        controlPanel.style.height = `${boardSize}px`;
      }
      
      // 显示区块宽度与操作区块一致
      if (displayBlock) {
        displayBlock.style.width = `${boardSize * 0.6667}px`;
      }
      
      // 确保布局结构正确
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        // 确保有top-row和bottom-row容器
        let topRow = mainContent.querySelector('.top-row');
        let bottomRow = mainContent.querySelector('.bottom-row');
        
        if (!topRow) {
          topRow = document.createElement('div');
          topRow.className = 'top-row';
          mainContent.insertBefore(topRow, mainContent.firstChild);
        }
        
        if (!bottomRow) {
          bottomRow = document.createElement('div');
          bottomRow.className = 'bottom-row';
          mainContent.appendChild(bottomRow);
        }
        
        // 将区块放入正确的行容器
        if (navBlock && !topRow.contains(navBlock)) {
          topRow.appendChild(navBlock);
        }
        
        if (displayBlock && !topRow.contains(displayBlock)) {
          topRow.appendChild(displayBlock);
        }
        
        if (sudokuBoard && !bottomRow.contains(sudokuBoard)) {
          bottomRow.appendChild(sudokuBoard);
        }
        
        if (controlPanel && !bottomRow.contains(controlPanel)) {
          bottomRow.appendChild(controlPanel);
        }
      }
    } else {
      // 竖屏模式：所有区块宽度与棋盘一致
      const blockWidth = boardSize;
      
      if (navBlock) {
        navBlock.style.width = `${blockWidth}px`;
      }
      
      if (displayBlock) {
        displayBlock.style.width = `${blockWidth}px`;
      }
      
      if (controlPanel) {
        controlPanel.style.width = `${blockWidth}px`;
        // 竖屏模式下高度自动调整，确保完整显示
        controlPanel.style.height = 'auto';
        // 根据屏幕剩余空间计算最大高度
        const screenAvailableHeight = window.innerHeight - sudokuBoard.offsetTop - sudokuBoard.offsetHeight - 30; // 减去其他元素高度和间距
        controlPanel.style.maxHeight = `${Math.min(screenAvailableHeight, 300)}px`; // 最大高度300px
        controlPanel.style.overflowY = 'auto'; // 添加滚动条以确保内容完整
      }
      
      // 确保竖屏的单列布局结构
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        // 移除行容器，使用单列布局
        const topRow = mainContent.querySelector('.top-row');
        const bottomRow = mainContent.querySelector('.bottom-row');
        
        if (topRow) {
          // 将子元素移到mainContent，然后移除topRow
          while (topRow.firstChild) {
            mainContent.insertBefore(topRow.firstChild, topRow);
          }
          mainContent.removeChild(topRow);
        }
        
        if (bottomRow) {
          // 将子元素移到mainContent，然后移除bottomRow
          while (bottomRow.firstChild) {
            mainContent.appendChild(bottomRow.firstChild);
          }
          mainContent.removeChild(bottomRow);
        }
      }
    }
  }
}
```

## 7. 无障碍访问支持

### 7.1 键盘导航
- 支持方向键在棋盘单元格间导航
- 数字键直接输入数字
- Tab键在功能区块间切换

### 7.2 屏幕阅读器支持
- 为所有交互元素提供ARIA标签
- 游戏状态变化提供音频提示
- 重要操作提供确认机制

### 7.3 高对比度模式
- 支持系统高对比度设置
- 提供自定义高对比度主题选项

## 8. 性能优化建议

### 8.1 布局性能
- 避免使用复杂的嵌套flex/grid布局
- 减少重排和重绘操作
- 使用CSS containment优化渲染性能

### 8.2 资源优化
- 使用适当分辨率的图像资源
- 实现延迟加载非关键资源
- 优化字体加载策略

### 8.3 响应速度
- 优化棋盘渲染逻辑
- 减少不必要的DOM操作
- 使用虚拟滚动技术（如适用）

## 9. 测试要点

### 9.1 响应式测试
- 在不同断点验证布局正确性
- 测试横竖屏切换动画和布局调整
- 验证在各种设备上的可用性

### 9.2 交互测试
- 验证所有交互元素的触摸/点击响应
- 测试键盘导航在棋盘上的流畅性
- 验证动画效果在各种设备上的表现

### 9.3 性能测试
- 测量页面加载时间和首屏渲染时间
- 分析内存使用和CPU占用
- 测试在低性能设备上的表现

## 10. 版本控制

| 版本 | 日期 | 变更内容 | 作者 |
|------|------|----------|------|
| 1.3 | 2025-10-12 | 优化区块尺寸逻辑，数独棋盘为正方形并作为尺寸基准，所有区块尺寸基于棋盘变化；横屏时棋盘高度不小于屏幕高度二分之一，操作区块高度与棋盘一致；竖屏时各区块宽度与棋盘一致，操作区块高度适配设备以确保完整显示 | UI开发团队 |
| 1.2 | 2025-10-12 | 重新设计横屏布局结构，优化区块对齐和尺寸比例，添加详细的布局要求 | UI开发团队 |
| 1.1 | 2025-10-12 | 调整横屏布局结构，优化显示区块格式和竖屏显示效果 | UI开发团队 |
| 1.0 | 2025-10-12 | 初始文档创建 | UI开发团队 |

---

本文档将根据开发过程中的需求变更和设计调整进行持续更新。开发团队在实现过程中如有疑问，请参考此文档或联系UI设计团队获取进一步指导。