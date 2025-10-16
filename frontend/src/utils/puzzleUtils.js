import localforage from 'localforage';

// 从JSON文件加载专家级题目
let expertPuzzlesCache = null;
let expertPuzzlesLastLoaded = null;
const CACHE_DURATION = 30 * 60 * 1000; // 30分钟缓存

export const loadExpertPuzzlesFromJson = async () => {
  try {
    // 检查缓存是否有效
    const now = Date.now();
    if (expertPuzzlesCache && expertPuzzlesLastLoaded && 
        (now - expertPuzzlesLastLoaded) < CACHE_DURATION) {
      console.log('使用缓存的专家级题目数据');
      return expertPuzzlesCache;
    }
    
    // 尝试从localforage加载缓存
    const cachedData = await localforage.getItem('expert_puzzles_cache');
    if (cachedData && cachedData.timestamp && 
        (now - cachedData.timestamp) < CACHE_DURATION) {
      console.log('从localforage加载缓存的专家级题目');
      expertPuzzlesCache = cachedData.data;
      expertPuzzlesLastLoaded = cachedData.timestamp;
      return expertPuzzlesCache;
    }
    
    // 从JSON文件加载
    console.log('从JSON文件加载专家级题目');
    const response = await fetch('/expert_puzzles.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 验证数据格式
    if (!data.puzzles || !Array.isArray(data.puzzles)) {
      throw new Error('无效的专家级题目数据格式');
    }
    
    // 更新缓存
    expertPuzzlesCache = data.puzzles;
    expertPuzzlesLastLoaded = now;
    
    // 缓存到localforage
    await localforage.setItem('expert_puzzles_cache', {
      data: data.puzzles,
      timestamp: now
    });
    
    console.log(`成功加载 ${data.puzzles.length} 个专家级题目`);
    return data.puzzles;
  } catch (error) {
    console.error('加载专家级题目失败:', error);
    // 如果加载失败，返回空数组
    return [];
  }
};

// 随机获取一个专家级题目
export const getRandomExpertPuzzle = async () => {
  try {
    console.log('开始获取随机专家级题目');
    const puzzles = await loadExpertPuzzlesFromJson();
    
    if (!puzzles || puzzles.length === 0) {
      console.warn('没有可用的专家级题目');
      // 返回null而不是抛出异常，让调用者决定如何处理
      return null;
    }
    
    // 随机选择一个题目
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    const selectedPuzzle = puzzles[randomIndex];
    
    // 验证选中的谜题是否有完整的数据
    if (!selectedPuzzle || !selectedPuzzle.puzzle || !selectedPuzzle.solution) {
      console.error('选中的谜题数据不完整:', selectedPuzzle);
      // 如果当前选中的谜题数据不完整，尝试重新选择另一个
      if (puzzles.length > 1) {
        console.log('尝试重新选择另一个谜题');
        // 过滤出有效的谜题
        const validPuzzles = puzzles.filter(p => p && p.puzzle && p.solution);
        if (validPuzzles.length > 0) {
          const validRandomIndex = Math.floor(Math.random() * validPuzzles.length);
          console.log(`重新选择有效专家级题目 #${validPuzzles[validRandomIndex].id || 'unknown'}`);
          return validPuzzles[validRandomIndex];
        }
      }
      return null;
    }
    
    console.log(`随机选择专家级题目 #${selectedPuzzle.id || 'unknown'}`);
    return selectedPuzzle;
  } catch (error) {
    console.error('获取随机专家级题目失败:', error);
    // 捕获所有异常，确保函数总是返回一个值而不是抛出异常
    return null;
  }
};

// 清除缓存
export const clearPuzzleCache = async () => {
  expertPuzzlesCache = null;
  expertPuzzlesLastLoaded = null;
  await localforage.removeItem('expert_puzzles_cache');
  console.log('已清除题目缓存');
};