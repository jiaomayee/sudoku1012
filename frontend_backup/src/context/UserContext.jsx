import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import localforage from 'localforage';

// 创建用户上下文
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // 用户状态
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userStats, setUserStats] = useState({
    puzzlesStarted: 0,
    puzzlesCompleted: 0,
    puzzlesSolved: 0,
    totalTimePlayed: 0,
    favoriteDifficulty: 'medium'
  });
  const [techniquesProgress, setTechniquesProgress] = useState({
    nakedSingles: { mastered: 0, practiced: 0 },
    hiddenSingles: { mastered: 0, practiced: 0 },
    nakedPairs: { mastered: 0, practiced: 0 },
    hiddenPairs: { mastered: 0, practiced: 0 },
    pointingPairs: { mastered: 0, practiced: 0 },
    boxLineReduction: { mastered: 0, practiced: 0 }
  });

  // 初始化用户ID
  useEffect(() => {
    initializeUser();
  }, []);

  // 从本地存储初始化用户
  const initializeUser = async () => {
    try {
      let storedUserId = await localforage.getItem('userId');
      
      if (!storedUserId) {
        // 生成新的用户ID
        storedUserId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        await localforage.setItem('userId', storedUserId);
        toast.success('欢迎使用数独学习应用！', {
          position: 'top-right',
          autoClose: 2000
        });
      }
      
      setUserId(storedUserId);
      setIsAuthenticated(true);
      
      // 加载用户统计数据
      const storedStats = await localforage.getItem(`stats_${storedUserId}`);
      if (storedStats) {
        setUserStats(storedStats);
      }
      
      // 加载技巧学习进度
      const storedTechniques = await localforage.getItem(`techniques_${storedUserId}`);
      if (storedTechniques) {
        setTechniquesProgress(storedTechniques);
      }
    } catch (error) {
      console.error('初始化用户失败:', error);
      toast.error('初始化用户数据失败', {
        position: 'top-right',
        autoClose: 2000
      });
    }
  };

  // 更新用户统计
  const updateUserStats = async (newStats) => {
    try {
      const updatedStats = { ...userStats, ...newStats };
      setUserStats(updatedStats);
      
      if (userId) {
        await localforage.setItem(`stats_${userId}`, updatedStats);
      }
    } catch (error) {
      console.error('更新用户统计失败:', error);
    }
  };

  // 更新技巧学习进度
  const updateTechniqueProgress = async (techniqueName, progress) => {
    try {
      const updatedProgress = {
        ...techniquesProgress,
        [techniqueName]: {
          ...techniquesProgress[techniqueName],
          ...progress
        }
      };
      setTechniquesProgress(updatedProgress);
      
      if (userId) {
        await localforage.setItem(`techniques_${userId}`, updatedProgress);
      }
    } catch (error) {
      console.error('更新技巧学习进度失败:', error);
    }
  };

  // 增加技巧练习次数
  const incrementTechniquePractice = async (techniqueName) => {
    const current = techniquesProgress[techniqueName] || { mastered: 0, practiced: 0 };
    await updateTechniqueProgress(techniqueName, {
      practiced: current.practiced + 1
    });
  };

  // 重置用户数据
  const resetUserData = async () => {
    try {
      if (userId) {
        await localforage.removeItem(`stats_${userId}`);
        await localforage.removeItem(`techniques_${userId}`);
        await localforage.removeItem(`progress_${userId}`);
      }
      
      setUserStats({
        puzzlesStarted: 0,
        puzzlesCompleted: 0,
        puzzlesSolved: 0,
        totalTimePlayed: 0,
        favoriteDifficulty: 'medium'
      });
      
      setTechniquesProgress({
        nakedSingles: { mastered: 0, practiced: 0 },
        hiddenSingles: { mastered: 0, practiced: 0 },
        nakedPairs: { mastered: 0, practiced: 0 },
        hiddenPairs: { mastered: 0, practiced: 0 },
        pointingPairs: { mastered: 0, practiced: 0 },
        boxLineReduction: { mastered: 0, practiced: 0 }
      });
      
      toast.success('用户数据已重置', {
        position: 'top-right',
        autoClose: 2000
      });
    } catch (error) {
      console.error('重置用户数据失败:', error);
      toast.error('重置用户数据失败', {
        position: 'top-right',
        autoClose: 2000
      });
    }
  };

  const value = {
    userId,
    isAuthenticated,
    userStats,
    techniquesProgress,
    updateUserStats,
    updateTechniqueProgress,
    incrementTechniquePractice,
    resetUserData
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// 自定义Hook，方便使用用户上下文
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserContextProvider');
  }
  return context;
};