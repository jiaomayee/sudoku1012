// SDC (Sue De Coq) 指示功能：专门负责SDC技巧的高亮显示、提示和应用

/**
 * SDC指示管理器
 */
class SDCIndicator {
  constructor() {
    this.currentStep = null;
    this.highlightedCells = new Map(); // 存储已高亮的单元格
  }

  /**
   * 设置当前解题步骤
   * @param {Object} step 解题步骤对象
   */
  setCurrentStep(step) {
    this.currentStep = step;
    // 清除之前的高亮
    this.clearHighlights();
  }

  /**
   * 获取当前解题步骤
   * @returns {Object|null} 当前解题步骤
   */
  getCurrentStep() {
    return this.currentStep;
  }

  /**
   * 高亮显示相关单元格
   * @param {HTMLElement} boardElement 棋盘DOM元素
   * @param {Object} options 高亮选项
   */
  highlightStep(boardElement, options = {}) {
    if (!this.currentStep) return;
    
    const { 
      sdcColor = 'rgba(255, 215, 0, 0.6)',          // 金色高亮颜色（用于SDC单元格）
      groupAColor = 'rgba(173, 216, 230, 0.6)',     // 浅蓝色高亮颜色（用于组A）
      groupBColor = 'rgba(144, 238, 144, 0.6)',     // 浅绿色高亮颜色（用于组B）
      targetColor = 'rgba(255, 182, 193, 0.6)',     // 浅粉色高亮颜色（用于目标单元格）
      sdcCandidateColor = '#FFD700',  // 金色（用于SDC候选数）
      noteColor = '#FF0000'            // 红色高亮颜色（用于要删除的候选数）
    } = options;

    // 高亮SDC单元格（主要单元格）
    if (this.currentStep.sdcCells && Array.isArray(this.currentStep.sdcCells)) {
      this.currentStep.sdcCells.forEach(([row, col]) => {
        this._highlightCell(boardElement, row, col, sdcColor, 'sdc');
      });
    }

    // 高亮组A单元格
    if (this.currentStep.groupA && Array.isArray(this.currentStep.groupA.cells)) {
      this.currentStep.groupA.cells.forEach(([row, col]) => {
        // 避免重复高亮
        if (!this.highlightedCells.has(`${row}-${col}`)) {
          this._highlightCell(boardElement, row, col, groupAColor, 'groupA');
        }
      });
    }

    // 高亮组B单元格
    if (this.currentStep.groupB && Array.isArray(this.currentStep.groupB.cells)) {
      this.currentStep.groupB.cells.forEach(([row, col]) => {
        // 避免重复高亮
        if (!this.highlightedCells.has(`${row}-${col}`)) {
          this._highlightCell(boardElement, row, col, groupBColor, 'groupB');
        }
      });
    }

    // 高亮目标单元格（需要删除候选数的单元格）
    if (this.currentStep.targetCells && Array.isArray(this.currentStep.targetCells)) {
      this.currentStep.targetCells.forEach(([row, col]) => {
        // 如果已经被高亮为组A或组B，添加边框强调
        const cellKey = `${row}-${col}`;
        if (this.highlightedCells.has(cellKey)) {
          const cellInfo = this.highlightedCells.get(cellKey);
          cellInfo.element.style.borderColor = '#FF0000';
          cellInfo.element.style.borderWidth = '2px';
        } else {
          this._highlightCell(boardElement, row, col, targetColor, 'target');
        }
      });
    }

    // 高亮SDC候选数
    if (this.currentStep.sdcCandidates && Array.isArray(this.currentStep.sdcCandidates)) {
      this.currentStep.sdcCandidates.forEach(value => {
        this._highlightSDCCandidate(boardElement, value, sdcCandidateColor);
      });
    }

    // 高亮需要删除的候选数
    if (this.currentStep.removableCandidates && Array.isArray(this.currentStep.removableCandidates)) {
      this.currentStep.removableCandidates.forEach(candidate => {
        this._highlightRemovableCandidate(boardElement, candidate.row, candidate.col, candidate.value, noteColor);
      });
    }
  }

  /**
   * 高亮单个单元格
   * @private
   * @param {HTMLElement} boardElement 棋盘DOM元素
   * @param {number} row 行索引
   * @param {number} col 列索引
   * @param {string} color 高亮颜色
   * @param {string} type 高亮类型
   */
  _highlightCell(boardElement, row, col, color, type) {
    const cellSelector = `.cell[row="${row}"][col="${col}"]`;
    const cell = boardElement.querySelector(cellSelector);
    
    if (cell) {
      // 保存原始样式
      const originalStyle = {
        backgroundColor: cell.style.backgroundColor,
        borderColor: cell.style.borderColor,
        borderWidth: cell.style.borderWidth
      };
      
      this.highlightedCells.set(`${row}-${col}`, {
        element: cell,
        originalStyle,
        type
      });
      
      // 应用高亮
      cell.style.backgroundColor = color;
      cell.style.borderColor = '#000000';
      cell.style.borderWidth = '1px';
      cell.style.borderStyle = 'solid';
      cell.style.transition = 'all 0.3s ease';
    }
  }

  /**
   * 高亮SDC候选数
   * @private
   * @param {HTMLElement} boardElement 棋盘DOM元素
   * @param {number} value 要高亮的数值
   * @param {string} color 高亮颜色
   */
  _highlightSDCCandidate(boardElement, value, color) {
    // 只高亮SDC单元格中的候选数
    if (!this.currentStep.sdcCells) return;
    
    this.currentStep.sdcCells.forEach(([row, col]) => {
      const noteSelector = `.cell[row="${row}"][col="${col}"] .notes .note[data-note="${value}"]`;
      const noteElement = boardElement.querySelector(noteSelector);
      
      if (noteElement) {
        const originalColor = noteElement.style.color;
        const originalFontWeight = noteElement.style.fontWeight;
        const originalBackgroundColor = noteElement.style.backgroundColor;
        
        noteElement.dataset.originalColor = originalColor;
        noteElement.dataset.originalFontWeight = originalFontWeight;
        noteElement.dataset.originalBackgroundColor = originalBackgroundColor;
        
        // 金色背景，白色文字
        noteElement.style.backgroundColor = 'rgba(255, 215, 0, 0.8)';
        noteElement.style.color = '#FFFFFF';
        noteElement.style.fontWeight = 'bold';
        noteElement.style.transition = 'all 0.3s ease';
      }
    });
  }

  /**
   * 高亮需要删除的候选数
   * @private
   * @param {HTMLElement} boardElement 棋盘DOM元素
   * @param {number} row 行索引
   * @param {number} col 列索引
   * @param {number} value 要高亮的数值
   * @param {string} color 高亮颜色
   */
  _highlightRemovableCandidate(boardElement, row, col, value, color) {
    const noteSelector = `.cell[row="${row}"][col="${col}"] .notes .note[data-note="${value}"]`;
    const noteElement = boardElement.querySelector(noteSelector);
    
    if (noteElement) {
      const originalColor = noteElement.style.color;
      const originalFontWeight = noteElement.style.fontWeight;
      const originalBackgroundColor = noteElement.style.backgroundColor;
      
      noteElement.dataset.originalColor = originalColor;
      noteElement.dataset.originalFontWeight = originalFontWeight;
      noteElement.dataset.originalBackgroundColor = originalBackgroundColor;
      
      // 红色背景，白色文字，删除线
      noteElement.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
      noteElement.style.color = '#FFFFFF';
      noteElement.style.textDecoration = 'line-through';
      noteElement.style.fontWeight = 'bold';
      noteElement.style.transition = 'all 0.3s ease';
    }
  }

  /**
   * 清除所有高亮
   */
  clearHighlights() {
    // 清除单元格高亮
    this.highlightedCells.forEach(({ element, originalStyle }) => {
      element.style.backgroundColor = originalStyle.backgroundColor || '';
      element.style.borderColor = originalStyle.borderColor || '';
      element.style.borderWidth = originalStyle.borderWidth || '';
    });
    
    this.highlightedCells.clear();
    
    // 清除候选数高亮
    const noteElements = document.querySelectorAll('.cell .notes .note');
    noteElements.forEach(element => {
      if (element.dataset.originalColor !== undefined) {
        element.style.color = element.dataset.originalColor || '';
        element.style.fontWeight = element.dataset.originalFontWeight || '';
        element.style.backgroundColor = element.dataset.originalBackgroundColor || '';
        element.style.textDecoration = '';
        
        delete element.dataset.originalColor;
        delete element.dataset.originalFontWeight;
        delete element.dataset.originalBackgroundColor;
      } else {
        // 清除任何可能的高亮样式
        element.style.color = '';
        element.style.fontWeight = '';
        element.style.backgroundColor = '';
        element.style.textDecoration = '';
      }
    });
  }

  /**
   * 生成提示消息
   * @param {string} locale 语言代码（'zh' 或 'en'）
   * @returns {string} 提示消息
   */
  generateHintMessage(locale = 'zh') {
    if (!this.currentStep) return '';
    
    const lineType = this.currentStep.lineType === 'row' 
      ? (locale === 'zh' ? '行' : 'row') 
      : (locale === 'zh' ? '列' : 'column');
    const lineNumber = this.currentStep.lineIndex + 1;
    const boxNumber = this.currentStep.boxIndex + 1;
    const candidatesStr = this.currentStep.sdcCandidates.join(',');
    const removableCount = this.currentStep.removableCandidates.length;
    
    if (locale === 'zh') {
      let title = 'Sue De Coq技巧';
      let detail = `在第${boxNumber}宫的第${lineNumber}${lineType}中，候选数${candidatesStr}形成SDC模式。`;
      let hint = `可以从${removableCount}个单元格中删除相关候选数。`;
      
      // 添加组A和组B的说明
      if (this.currentStep.onlyInA && this.currentStep.onlyInA.length > 0) {
        detail += `\n候选数${this.currentStep.onlyInA.join(',')}只能在组A（${lineType}的其他宫）中出现。`;
      }
      if (this.currentStep.onlyInB && this.currentStep.onlyInB.length > 0) {
        detail += `\n候选数${this.currentStep.onlyInB.join(',')}只能在组B（宫的其他${lineType}）中出现。`;
      }
      
      return `${title}\n${detail}\n${hint}`;
    } else {
      let title = 'Sue De Coq Rule';
      let detail = `In box ${boxNumber}, ${lineType} ${lineNumber}, candidates ${candidatesStr} form an SDC pattern.`;
      let hint = `Can eliminate candidates from ${removableCount} cells.`;
      
      if (this.currentStep.onlyInA && this.currentStep.onlyInA.length > 0) {
        detail += `\nCandidates ${this.currentStep.onlyInA.join(',')} can only appear in Group A (other boxes in the ${lineType}).`;
      }
      if (this.currentStep.onlyInB && this.currentStep.onlyInB.length > 0) {
        detail += `\nCandidates ${this.currentStep.onlyInB.join(',')} can only appear in Group B (other ${lineType}s in the box).`;
      }
      
      return `${title}\n${detail}\n${hint}`;
    }
  }

  /**
   * 应用当前步骤
   * @param {Object} pencilNotes 候选数对象
   * @returns {Object} 更新后的候选数对象
   */
  applyCurrentStep(pencilNotes) {
    if (!this.currentStep) return pencilNotes;
    
    const updatedNotes = { ...pencilNotes };
    
    // 删除所有可删除的候选数
    this.currentStep.removableCandidates.forEach(({ row, col, value }) => {
      const cellKey = `${row}-${col}`;
      if (updatedNotes[cellKey]) {
        updatedNotes[cellKey] = updatedNotes[cellKey].filter(num => num !== value);
      }
    });
    
    return updatedNotes;
  }
}

// 导出单例实例
const sdcIndicator = new SDCIndicator();
export default sdcIndicator;