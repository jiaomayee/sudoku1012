import axios from 'axios';
import { toast } from 'react-toastify';

// 创建axios实例
const apiClient = axios.create({
  baseURL: '/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 可以在这里添加认证token等
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 统一错误处理
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error || 
                        '请求失败，请重试';
    
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 2000
    });
    
    return Promise.reject(error);
  }
);

// API接口
export const api = {
  // 数独谜题相关API
  
  // 生成数独谜题
  generatePuzzle: async (difficulty) => {
    try {
      return await apiClient.post('/sudoku/puzzles/generate', {
        difficulty: difficulty
      });
    } catch (error) {
      console.error('生成数独谜题失败:', error);
      throw error;
    }
  },
  
  // 获取随机谜题
  getRandomPuzzleByDifficulty: async (difficulty) => {
    try {
      // 添加日志记录
      console.log(`Fetching puzzle with difficulty: ${difficulty}`);
      
      // 调用后端API获取指定难度的随机谜题
      const response = await apiClient.get(`/sudoku/puzzles/random/${difficulty}`);
      
      // 确保响应数据存在且格式正确
      if (!response || !response.puzzle) {
        console.error('Invalid puzzle data received from server');
        // 如果数据无效，使用默认的空数独
        return {
          puzzle: Array(9).fill().map(() => Array(9).fill(0)),
          solution: Array(9).fill().map(() => Array(9).fill(0)),
          difficulty: difficulty
        };
      }
      
      // 验证并处理响应数据
      const { puzzle, solution, difficulty: responseDifficulty } = response;
      
      console.log('完整响应数据:', JSON.stringify(response));
      
      // 检查solution是否存在且有效，如果不存在则尝试生成或使用空数组
      let validSolution = solution;
      if (!validSolution || !Array.isArray(validSolution) || validSolution.length !== 9) {
        console.warn('Solution data is missing or invalid');
        // 如果没有solution，使用空数组作为备用
        validSolution = Array(9).fill().map(() => Array(9).fill(0));
      }
      
      return {
        puzzle: puzzle,
        solution: validSolution,
        difficulty: responseDifficulty || difficulty
      };
    } catch (error) {
      console.error('Error fetching puzzle:', error);
      // 发生错误时返回默认的空数独
      return {
        puzzle: Array(9).fill().map(() => Array(9).fill(0)),
        solution: Array(9).fill().map(() => Array(9).fill(0)),
        difficulty: difficulty
      };
    }
  },
  
  // 根据ID获取谜题
  getPuzzleById: async (puzzleId) => {
    try {
      return await apiClient.get(`/sudoku/puzzles/${puzzleId}`);
    } catch (error) {
      console.error('获取谜题失败:', error);
      throw error;
    }
  },
  
  // 求解数独
  solveSudoku: async (board) => {
    try {
      return await apiClient.post('/sudoku/solve', {
        board: board
      });
    } catch (error) {
      console.error('求解数独失败:', error);
      throw error;
    }
  },
  
  // 验证数独
  validateSudoku: async (board) => {
    try {
      const response = await apiClient.post('/sudoku/validate', {
        board: board
      });
      return response;
    } catch (error) {
      console.error('验证数独失败:', error);
      throw error;
    }
  },
  
  // 验证自定义数独（检查唯一解）
  validateCustomSudoku: async (board) => {
    try {
      const response = await apiClient.post('/sudoku/validate-custom', {
        board: board
      });
      return response;
    } catch (error) {
      console.error('验证自定义数独失败:', error);
      throw error;
    }
  },
  
  // 获取候选数
  getCandidates: async (board, row, col) => {
    try {
      return await apiClient.post('/sudoku/candidates', {
        board: board,
        row: row,
        col: col
      });
    } catch (error) {
      console.error('获取候选数失败:', error);
      throw error;
    }
  },
  
  // 识别技巧
  identifyTechniques: async (board) => {
    try {
      return await apiClient.post('/sudoku/techniques', {
        board: board
      });
    } catch (error) {
      console.error('识别技巧失败:', error);
      throw error;
    }
  },
  
  // 获取提示
  getHint: async (board, solution) => {
    try {
      return await apiClient.post('/sudoku/hint', {
        board: board,
        solution: solution
      });
    } catch (error) {
      console.error('获取提示失败:', error);
      throw error;
    }
  },
  
  // 获取谜题列表
  getPuzzleList: async (params = {}) => {
    try {
      return await apiClient.get('/sudoku/puzzles', { params });
    } catch (error) {
      console.error('获取谜题列表失败:', error);
      throw error;
    }
  },
  
  // 获取谜题统计
  getPuzzleStats: async () => {
    try {
      return await apiClient.get('/sudoku/puzzles/stats');
    } catch (error) {
      console.error('获取谜题统计失败:', error);
      throw error;
    }
  },
  
  // 用户相关API
  
  // 获取用户进度
  getUserProgress: async (puzzleId) => {
    try {
      return await apiClient.get(`/user/progress/${puzzleId}`);
    } catch (error) {
      console.error('获取用户进度失败:', error);
      throw error;
    }
  },
  
  // 保存用户进度
  saveUserProgress: async (puzzleId, progress) => {
    try {
      return await apiClient.post(`/user/progress/${puzzleId}`, progress);
    } catch (error) {
      console.error('保存用户进度失败:', error);
      throw error;
    }
  },
  
  // 获取活跃进度
  getActiveProgress: async () => {
    try {
      return await apiClient.get('/user/progress/active');
    } catch (error) {
      console.error('获取活跃进度失败:', error);
      throw error;
    }
  },
  
  // 获取已完成谜题
  getCompletedPuzzles: async () => {
    try {
      return await apiClient.get('/user/progress/completed');
    } catch (error) {
      console.error('获取已完成谜题失败:', error);
      throw error;
    }
  },
  
  // 删除用户进度
  deleteUserProgress: async (puzzleId) => {
    try {
      return await apiClient.delete(`/user/progress/${puzzleId}`);
    } catch (error) {
      console.error('删除用户进度失败:', error);
      throw error;
    }
  },
  
  // 获取用户技巧学习情况
  getUserTechniques: async () => {
    try {
      return await apiClient.get('/user/techniques');
    } catch (error) {
      console.error('获取用户技巧学习情况失败:', error);
      throw error;
    }
  },
  
  // 更新技巧学习情况
  updateTechniqueLearning: async (techniqueName, data) => {
    try {
      return await apiClient.post(`/user/techniques/${techniqueName}`, data);
    } catch (error) {
      console.error('更新技巧学习情况失败:', error);
      throw error;
    }
  },
  
  // 增加技巧练习次数
  incrementTechniquePractice: async (techniqueName) => {
    try {
      return await apiClient.post(`/user/techniques/${techniqueName}/practice`);
    } catch (error) {
      console.error('增加技巧练习次数失败:', error);
      throw error;
    }
  },
  
  // 获取用户统计信息
  getUserStats: async () => {
    try {
      return await apiClient.get('/user/stats');
    } catch (error) {
      console.error('获取用户统计信息失败:', error);
      throw error;
    }
  },
  
  // 健康检查
  healthCheck: async () => {
    try {
      // 注意：这里直接访问健康检查端点，不使用api/v1前缀
      const response = await axios.get('/health');
      return response.data;
    } catch (error) {
      console.error('健康检查失败:', error);
      throw error;
    }
  }
};

export default api;