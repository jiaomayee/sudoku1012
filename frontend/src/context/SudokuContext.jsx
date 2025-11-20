  // 初始化时自动生成谜题
  useEffect(() => {
    const initPuzzle = async () => {
      setIsLoading(true);
      console.log('SudokuContext: 初始化自动生成谜题');
      try {
        // 重置所有状态，确保没有残留数据
        setPencilNotes({}); // 重置候选数/标注
        setHistory([]);
        setHistoryIndex(-1);
        setErrorCount(0);
        setCumulativeErrorCount(0);
        setIncorrectCells(new Set());
        setLockedCells(new Set()); // 重置锁定的单元格
        
        // 检查是否有自定义数独保存在 localStorage
        let puzzleData = null;
        try {
          const customPuzzleStr = localStorage.getItem('customPuzzle');
          if (customPuzzleStr) {
            const customPuzzle = JSON.parse(customPuzzleStr);
            if (customPuzzle && customPuzzle.puzzle && customPuzzle.solution) {
              console.log('找到自定义数独，加载中...');
              puzzleData = customPuzzle;
              // 清除了 localStorage，下次不会重复使用
              localStorage.removeItem('customPuzzle');
            }
          }
        } catch (error) {
          console.warn('读取自定义数独失败:', error);
        }

        // 如果没有自定义数独，使用预设数独
        if (!puzzleData) {
          console.log('使用预设的数独题目');
          const simplePuzzle = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ];
          
          const simpleSolution = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
          ];
          
          puzzleData = { puzzle: simplePuzzle, solution: simpleSolution };
        }
        
        console.log('谜题数据:', puzzleData);
        
        // 格式化数据
        const formattedData = formatPuzzleData(puzzleData);
        console.log('格式化后的数据:', formattedData);
        
        setCurrentPuzzle(formattedData);
        console.log('设置 currentPuzzle 完成');
        
        setOriginalPuzzle(formattedData.puzzle); // 保存原始谜题，用于区分预填数字
        console.log('设置 originalPuzzle 完成');
        
        setCurrentBoard(formattedData.puzzle);
        console.log('设置 currentBoard 完成，currentBoard:', formattedData.puzzle);
        
        setSolution(formattedData.solution);
        console.log('设置 solution 完成');
        
        setGameStarted(true);
        console.log('设置 gameStarted 为 true');
        
        setGameCompleted(false);
        setTimerActive(true);
        setErrorCount(0); // 初始化错误计数
        setCumulativeErrorCount(0); // 初始化累计错误次数
        setIncorrectCells(new Set()); // 初始化错误单元格集合
        console.log('谜题初始化完成');
      } catch (error) {
        console.error('自动初始化谜题失败:', error);
        console.error('错误详情:', error.message, error.stack);
      } finally {
        setIsLoading(false);
      }
    };

    initPuzzle();
  }, []); // 仅在组件挂载时运行一次
