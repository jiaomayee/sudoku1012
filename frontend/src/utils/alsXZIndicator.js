// ALS-XZ指示功能：专门负责ALS-XZ技巧的高亮显示、提示和应用

/**
 * ALS-XZ指示管理器
 */
class ALSXZIndicator {
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
      primaryColor = 'rgba(255, 182, 193, 0.6)',    // 半透明浅粉色高亮颜色（用于ALS1）
      secondaryColor = 'rgba(173, 216, 230, 0.6)',  // 半透明浅蓝色高亮颜色（用于ALS2）
      targetColor = 'rgba(144, 238, 144, 0.6)',     // 半透明浅绿色高亮颜色（用于目标单元格）
      valueColor = '#FF69B4',      // 粉色高亮颜色（用于X数字）
      noteColor = '#FF0000'        // 红色高亮颜色（用于要删除的候选数Z）
    } = options;

    // 高亮ALS1中的单元格
    if (this.currentStep.als1 && Array.isArray(this.currentStep.als1.cells)) {
      this.currentStep.als1.cells.forEach(([row, col]) => {
        this._highlightCell(boardElement, row, col, primaryColor, 'als1');
      });
    }

    // 高亮ALS2中的单元格
    if (this.currentStep.als2 && Array.isArray(this.currentStep.als2.cells)) {
      this.currentStep.als2.cells.forEach(([row, col]) => {
        this._highlightCell(boardElement, row, col, secondaryColor, 'als2');
      });
    }

    // 高亮目标单元格（需要删除候选数Z的单元格）
    if (this.currentStep.targetCells && Array.isArray(this.currentStep.targetCells)) {
      this.currentStep.targetCells.forEach(([row, col]) => {
        // 避免重复高亮
        if (!this.highlightedCells.has(`${row}-${col}`)) {
          this._highlightCell(boardElement, row, col, targetColor, 'target');
        }
      });
    }

    // 高亮X数字（限制数）
    if (this.currentStep.x !== undefined) {
      this._highlightValues(boardElement, this.currentStep.x, valueColor);
    }

    // 高亮需要删除的候选数Z
    if (this.currentStep.removableCandidates && Array.isArray(this.currentStep.removableCandidates)) {
      this.currentStep.removableCandidates.forEach(candidate => {
        this._highlightValues(boardElement, candidate.value, noteColor, true);
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
    }
  }

  /**
   * 高亮特定数值
   * @private
   * @param {HTMLElement} boardElement 棋盘DOM元素
   * @param {number} value 要高亮的数值
   * @param {string} color 高亮颜色
   * @param {boolean} isRemovable 是否为要删除的候选数
   */
  _highlightValues(boardElement, value, color, isRemovable = false) {
    // 高亮数值显示
    const valueSelector = `.cell .value[data-value="${value}"]`;
    const valueElements = boardElement.querySelectorAll(valueSelector);
    
    valueElements.forEach(element => {
      const originalColor = element.style.color;
      const originalFontWeight = element.style.fontWeight;
      
      element.dataset.originalColor = originalColor;
      element.dataset.originalFontWeight = originalFontWeight;
      
      element.style.color = color;
      element.style.fontWeight = 'bold';
      element.style.transition = 'all 0.3s ease';
    });
    
    // 高亮候选数
    const noteSelector = `.cell .notes .note[data-note="${value}"]`;
    const noteElements = boardElement.querySelectorAll(noteSelector);
    
    noteElements.forEach(element => {
      const originalColor = element.style.color;
      const originalFontWeight = element.style.fontWeight;
      const originalBackgroundColor = element.style.backgroundColor;
      
      element.dataset.originalColor = originalColor;
      element.dataset.originalFontWeight = originalFontWeight;
      element.dataset.originalBackgroundColor = originalBackgroundColor;
      
      // 如果是需要删除的候选数，使用红底白字
      if (isRemovable) {
        element.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // 半透明红色背景
        element.style.color = '#FFFFFF'; // 白色文字
        element.style.textDecoration = 'line-through';
      } else {
        // 否则使用粉底白字（用于X数字）
        element.style.backgroundColor = 'rgba(255, 105, 180, 0.8)'; // 半透明粉色背景
        element.style.color = '#FFFFFF'; // 白色文字
      }
      
      element.style.fontWeight = 'bold';
      element.style.transition = 'all 0.3s ease';
    });
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
    
    // 清除数值高亮
    const valueElements = document.querySelectorAll('.cell .value[data-original-color]');
    valueElements.forEach(element => {
      element.style.color = element.dataset.originalColor || '';
      element.style.fontWeight = element.dataset.originalFontWeight || '';
      delete element.dataset.originalColor;
      delete element.dataset.originalFontWeight;
    });
    
    // 清除候选数高亮
    const noteElements = document.querySelectorAll('.cell .notes .note[data-original-color]');
    noteElements.forEach(element => {
      element.style.color = element.dataset.originalColor || '';
      element.style.backgroundColor = element.dataset.originalBackgroundColor || '';
      element.style.fontWeight = element.dataset.originalFontWeight || '';
      element.style.textDecoration = '';
      delete element.dataset.originalColor;
      delete element.dataset.originalBackgroundColor;
      delete element.dataset.originalFontWeight;
    });
    
    // 清空高亮记录
    this.highlightedCells.clear();
  }

  /**
   * 应用当前解题步骤
   * @param {Array<Array<number>>} board 数独棋盘（引用传递，会被修改）
   * @param {Object} pencilNotes 候选数标注（引用传递，会被修改）
   * @returns {Object} 操作结果
   */
  applyStep(board, pencilNotes) {
    if (!this.currentStep) {
      return { success: false, message: '没有可应用的步骤' };
    }

    try {
      // 删除候选数Z
      const removedNotes = [];
      
      if (this.currentStep.removableCandidates && Array.isArray(this.currentStep.removableCandidates)) {
        this.currentStep.removableCandidates.forEach(candidate => {
          const { row, col, value } = candidate;
          const notesKey = `${row}-${col}`;
          
          if (pencilNotes[notesKey]) {
            // 记录被删除的候选数
            const oldNotes = [...pencilNotes[notesKey]];
            const noteIndex = pencilNotes[notesKey].indexOf(value);
            
            if (noteIndex !== -1) {
              pencilNotes[notesKey].splice(noteIndex, 1);
              removedNotes.push({
                cell: [row, col],
                note: value
              });
              
              // 如果候选数为空，删除该条目
              if (pencilNotes[notesKey].length === 0) {
                delete pencilNotes[notesKey];
              }
            }
          }
        });
      }
      
      if (removedNotes.length > 0) {
        return {
          success: true,
          message: '已删除候选数',
          removedNotes,
          action: 'removeCandidates'
        };
      } else {
        return {
          success: false,
          message: '没有需要删除的候选数'
        };
      }
    } catch (error) {
      console.error('应用步骤失败:', error);
      return { success: false, message: `应用步骤失败: ${error.message}` };
    }
  }

  /**
   * 获取步骤的描述信息（支持多语言）
   * @param {string} locale 语言代码
   * @returns {Object} 包含标题和描述的对象
   */
  getStepDescription(locale = 'zh') {
    if (!this.currentStep) {
      return { title: '', description: '' };
    }

    const { x, z, message } = this.currentStep;
    
    // 基本标题
    let title = locale === 'zh' ? 'ALS-XZ技巧' : 'ALS-XZ Rule';
    
    // 基本描述
    let description = message || (locale === 'zh' ? 
      `ALS-XZ技巧：X=${x}, Z=${z}` : 
      `ALS-XZ Rule: X=${x}, Z=${z}`);
    
    return {
      title,
      description
    };
  }

  /**
   * 获取步骤的操作按钮文本
   * @param {string} locale 语言代码
   * @returns {string} 按钮文本
   */
  getActionButtonText(locale = 'zh') {
    return locale === 'zh' ? '删除候选数' : 'Remove Candidates';
  }
}

// 导出单例实例
const alsXZIndicator = new ALSXZIndicator();
export default alsXZIndicator;