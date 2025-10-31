import { createGlobalStyle } from 'styled-components';

// 颜色主题配置
const lightTheme = {
  // 主色调
  primary: '#4A90E2',
  primaryLight: '#6AA3E5',
  primaryDark: '#357ABD',
  
  // 辅助色
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  
  // 背景色
  background: '#E0E0E8',
  surface: '#FFFFFF',
  
  // 文本颜色
  text: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',
  textInverted: '#FFFFFF',
  
  // 边框和分割线
  border: '#E1E4E8',
  divider: '#EEEEEE',
  
  // 状态颜色
  disabled: '#CCCCCC',
  
  // 阴影
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowHover: 'rgba(0, 0, 0, 0.15)',
  
  // 透明度
  overlay: 'rgba(0, 0, 0, 0.5)',
  
  // 游戏特定颜色
  sudokuCellBorder: '#CCCCCC',
  sudokuCellBorderThick: '#666666',
  sudokuCellHighlight: '#90CAF9',
  sudokuCellError: '#FFEBEE',
  sudokuCellSelected: '#64B5F6',
  sudokuCellPreFilled: '#F5F5F5',
};

const darkTheme = {
  // 主色调
  primary: '#5CA0F2',
  primaryLight: '#7CAFE5',
  primaryDark: '#4580D2',
  
  // 辅助色
  success: '#5CBF60',
  warning: '#FFA726',
  error: '#EF5350',
  info: '#29B6F6',
  
  // 背景色
  background: '#121212',
  surface: '#1E1E1E',
  
  // 文本颜色
  text: '#E0E0E0',
  textSecondary: '#B0B0B0',
  textLight: '#808080',
  textInverted: '#121212',
  
  // 边框和分割线
  border: '#333333',
  divider: '#222222',
  
  // 状态颜色
  disabled: '#555555',
  
  // 阴影
  shadow: 'rgba(0, 0, 0, 0.3)',
  shadowHover: 'rgba(0, 0, 0, 0.4)',
  
  // 透明度
  overlay: 'rgba(0, 0, 0, 0.7)',
  
  // 游戏特定颜色
  sudokuCellBorder: '#444444',
  sudokuCellBorderThick: '#777777',
  sudokuCellHighlight: '#192A40',
  sudokuCellError: '#401919',
  sudokuCellSelected: '#2A405E',
  sudokuCellPreFilled: '#2A2A2A',
};

// 全局样式
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${props => props.theme.primaryDark};
    text-decoration: underline;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
  }

  button:focus {
    outline: 2px solid ${props => props.theme.primary};
    outline-offset: 2px;
  }

  input, textarea, select {
    font-family: inherit;
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    padding: 8px 12px;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.3;
  }

  p {
    margin-bottom: 1em;
  }

  /* 滚动条样式 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.textLight};
  }

  /* 动画 */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* 工具类 */
  .fade-in {
    animation: fadeIn 0.3s ease forwards;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .text-center {
    text-align: center;
  }

  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 1rem; }
  .mb-4 { margin-bottom: 1.5rem; }
  .mb-5 { margin-bottom: 3rem; }

  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 1rem; }
  .mt-4 { margin-top: 1.5rem; }
  .mt-5 { margin-top: 3rem; }

  .p-0 { padding: 0; }
  .p-1 { padding: 0.25rem; }
  .p-2 { padding: 0.5rem; }
  .p-3 { padding: 1rem; }
  .p-4 { padding: 1.5rem; }
  .p-5 { padding: 3rem; }

  .hidden {
    display: none;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .align-items-center {
    align-items: center;
  }

  .justify-content-center {
    justify-content: center;
  }

  .justify-content-between {
    justify-content: space-between;
  }

  .gap-1 { gap: 0.25rem; }
  .gap-2 { gap: 0.5rem; }
  .gap-3 { gap: 1rem; }
  .gap-4 { gap: 1.5rem; }
  .gap-5 { gap: 3rem; }

  /* 游戏特定样式 */
  .sudoku-cell {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 200;
    font-family: 'Arial', 'Helvetica Neue', 'Helvetica', sans-serif;
    border: 1px solid ${props => props.theme.sudokuCellBorder};
    background-color: ${props => props.theme.surface};
    color: ${props => props.theme.text};
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .sudoku-cell:hover {
    background-color: ${props => props.theme.sudokuCellHighlight};
  }

  .sudoku-cell.selected {
    background-color: ${props => props.theme.sudokuCellSelected};
    border-color: ${props => props.theme.primary};
  }

  .sudoku-cell.prefilled {
    background-color: ${props => props.theme.sudokuCellPreFilled};
    font-weight: 600;
  }

  .sudoku-cell.error {
    background-color: ${props => props.theme.sudokuCellError};
    color: ${props => props.theme.error};
  }

  .sudoku-grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    gap: 0;
    border: 2px solid ${props => props.theme.sudokuCellBorderThick};
    padding: 2px;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .sudoku-cell {
      width: 35px;
      height: 35px;
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .sudoku-cell {
      width: 30px;
      height: 30px;
      font-size: 16px;
    }
  }

  /* 数字按钮样式 - 超高优先级 - 修复横屏模式字体小的问题 */
  .control-panel button.number-button, 
  .control-panel button.number-button span {
    font-size: 60px !important;
    font-weight: 700 !important;
    line-height: 1 !important;
    /* 使用内联元素和强制字体大小 */
    display: inline-block;
    min-height: 1em;
  }
  
  /* 特别针对横屏模式的数字按钮 */
  @media (min-width: 577px) {
    .control-panel .number-pad button.number-button, 
    .control-panel .number-pad button.number-button span {
      font-size: 60px !important;
      font-weight: 400 !important; /* 从500改为400，使字体更细 */
      line-height: 1 !important;
      /* 增加更具体的选择器来提高优先级 */
      font-size: 60px !important;
      /* 确保按钮足够大以容纳大字体 */
      min-height: 80px;
    }
  }
  
  /* 全局覆盖任何可能影响的样式 */
  .number-button span {
    font-size: 60px !important;
    font-weight: 700 !important;
    line-height: 1 !important;
  }
`;

// 公共样式组件
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const AppContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 40px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.overlay};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: ${props => {
    switch (props.variant) {
      case 'primary': return props.theme.primary;
      case 'success': return props.theme.success;
      case 'warning': return props.theme.warning;
      case 'error': return props.theme.error;
      case 'info': return props.theme.info;
      default: return props.theme.surface;
    }
  }};
  color: ${props => props.variant ? 'white' : props.theme.text};
  border: ${props => props.variant ? 'none' : `2px solid ${props.theme.border}`};
  padding: ${props => props.size === 'small' ? '6px 12px' : props.size === 'large' ? '12px 24px' : '8px 16px'};
  border-radius: 8px;
  font-size: ${props => props.size === 'small' ? '14px' : props.size === 'large' ? '18px' : '16px'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const Card = styled.div`
  background-color: ${props => props.theme.surface};
  border-radius: 12px;
  padding: ${props => props.padding || '25px'};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 24px ${props => props.theme.shadowHover};
    transform: translateY(-3px);
  }
`;

export const Badge = styled.span`
  background-color: ${props => {
    switch (props.variant) {
      case 'primary': return props.theme.primary;
      case 'success': return props.theme.success;
      case 'warning': return props.theme.warning;
      case 'error': return props.theme.error;
      case 'info': return props.theme.info;
      default: return props.theme.background;
    }
  }};
  color: ${props => props.variant ? 'white' : props.theme.text};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${props => props.theme.text};
  margin-bottom: 20px;
  font-weight: 700;
`;

export const SectionDescription = styled.p`
  font-size: 18px;
  color: ${props => props.theme.textSecondary};
  margin-bottom: 30px;
  line-height: 1.6;
`;

export default GlobalStyle;
export { lightTheme, darkTheme };