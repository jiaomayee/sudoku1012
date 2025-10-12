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
      console.log(`尝试获取难度为${difficulty}的随机谜题`);
      const response = await apiClient.get(`/sudoku/puzzles/random/${difficulty}`);
      console.log('成功获取随机谜题');
      return response;
    } catch (error) {
      // 提供更详细的错误信息
      const errorDetails = error.response?.data || error.message || '未知错误';
      console.error(`获取随机谜题失败: ${difficulty}难度，错误详情:`, errorDetails);
      
      // 抛出带有详细信息的错误对象
      throw {
        message: `获取${difficulty}难度随机谜题失败`,
        details: errorDetails,
        originalError: error
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
      return await apiClient.post('/sudoku/validate', {
        board: board
      });
    } catch (error) {
      console.error('验证数独失败:', error);
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