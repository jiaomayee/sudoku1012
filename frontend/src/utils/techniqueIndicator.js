// 技巧指示功能：负责高亮显示、提示和应用解题步骤

/**
 * 技巧指示管理器
 */
class TechniqueIndicator {
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
      primaryColor = '#4CAF50',    // 主要高亮颜色（用于关键单元格）
      secondaryColor = '#2196F3',  // 次要高亮颜色（用于受影响的单元格）
      valueColor = '#FF9800',      // 数字值高亮颜色
      noteColor = '#9C27B0'        // 候选数高亮颜色
    } = options;

    // 高亮关键单元格（技巧的核心单元格）
    if (this.currentStep.cells && Array.isArray(this.currentStep.cells)) {
      this.currentStep.cells.forEach(([row, col]) => {
        this._highlightCell(boardElement, row, col, primaryColor, 'primary');
      });
    }

    // 高亮目标单元格（需要操作的单元格）
    if (this.currentStep.targetCells && Array.isArray(this.currentStep.targetCells)) {
      this.currentStep.targetCells.forEach(([row, col]) => {
        // 避免重复高亮
        if (!this.highlightedCells.has(`${row}-${col}`)) {
          this._highlightCell(boardElement, row, col, secondaryColor, 'target');
        }
      });
    }

    // 高亮数字或候选数
    if (this.currentStep.values && Array.isArray(this.currentStep.values)) {
      this.currentStep.values.forEach(value => {
        this._highlightValues(boardElement, value, valueColor);
      });
    }

    // 高亮需要删除的候选数
    if (this.currentStep.removableCandidates && Array.isArray(this.currentStep.removableCandidates)) {
      this.currentStep.removableCandidates.forEach(value => {
        this._highlightValues(boardElement, value, noteColor, true);
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
      cell.style.backgroundColor = color + '20'; // 20% 透明度
      cell.style.borderColor = color;
      cell.style.borderWidth = '2px';
      cell.style.borderStyle = 'solid';
      cell.style.transition = 'all 0.3s ease';
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
      
      element.dataset.originalColor = originalColor;
      element.dataset.originalFontWeight = originalFontWeight;
      
      element.style.color = color;
      element.style.fontWeight = 'bold';
      element.style.transition = 'all 0.3s ease';
      
      if (isRemovable) {
        element.style.textDecoration = 'line-through';
        element.style.opacity = '0.6';
      }
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
      element.style.fontWeight = element.dataset.originalFontWeight || '';
      element.style.textDecoration = '';
      element.style.opacity = '1';
      delete element.dataset.originalColor;
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
      const { result } = this.currentStep;
      
      if (!result) {
        return { success: false, message: '步骤缺少结果信息' };
      }

      if (result.action === 'fill' && result.cell && result.value !== undefined) {
        // 填入数字
        const [row, col] = result.cell;
        const oldValue = board[row][col];
        board[row][col] = result.value;
        
        // 清除该单元格的候选数
        const notesKey = `${row}-${col}`;
        delete pencilNotes[notesKey];
        
        return {
          success: true,
          message: `在(${row+1},${col+1})填入数字${result.value}`,
          oldValue,
          newValue: result.value,
          cell: [row, col],
          action: 'fill'
        };
      } 
      else if (result.action === 'removeCandidates' && result.cells) {
        // 删除候选数
        const removedNotes = [];
        
        result.cells.forEach(cellAction => {
          if (cellAction.cell && cellAction.values) {
            const [row, col] = cellAction.cell;
            const notesKey = `${row}-${col}`;
            
            if (pencilNotes[notesKey]) {
              // 过滤掉要删除的候选数
              const oldNotes = [...pencilNotes[notesKey]];
              pencilNotes[notesKey] = pencilNotes[notesKey].filter(note => 
                !cellAction.values.includes(note)
              );
              
              // 记录被删除的候选数
              const removed = oldNotes.filter(note => 
                cellAction.values.includes(note)
              );
              
              if (removed.length > 0) {
                removedNotes.push({
                  cell: [row, col],
                  notes: removed
                });
              }
              
              // 如果候选数为空，删除该条目
              if (pencilNotes[notesKey].length === 0) {
                delete pencilNotes[notesKey];
              }
            }
          }
        });
        
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
      }
      
      return { success: false, message: '不支持的操作类型' };
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

    const { technique, reason, type, message } = this.currentStep;
    
    // 基本标题
    let title = technique || '未知技巧';
    
    // 基本描述
    let description = reason || message || '';
    
    // 根据类型增强描述
    if (type) {
      const typeDescriptions = {
        'nakedSingle': {
          en: 'Naked Single',
          zh: '唯一数法'
        },
        'notesSingle': {
          en: 'Notes Single',
          zh: '候选数唯一法'
        },
        'nakedPairRow': {
          en: 'Naked Pair (Row)',
          zh: '显性数对法(行)'
        },
        'nakedPairCol': {
          en: 'Naked Pair (Column)',
          zh: '显性数对法(列)'
        },
        'nakedPairBox': {
          en: 'Naked Pair (Box)',
          zh: '显性数对法(宫)'
        },
        'hiddenPairRow': {
          en: 'Hidden Pair (Row)',
          zh: '隐性数对法(行)'
        },
        'hiddenPairCol': {
          en: 'Hidden Pair (Column)',
          zh: '隐性数对法(列)'
        },
        'hiddenPairBox': {
          en: 'Hidden Pair (Box)',
          zh: '隐性数对法(宫)'
        }
      };
      
      if (typeDescriptions[type] && typeDescriptions[type][locale]) {
        title = typeDescriptions[type][locale];
      }
    }
    
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
    if (!this.currentStep || !this.currentStep.result) {
      return locale === 'zh' ? '应用' : 'Apply';
    }

    const { action } = this.currentStep.result;
    
    const buttonTexts = {
      'fill': {
        en: 'Fill Number',
        zh: '填入数字'
      },
      'removeCandidates': {
        en: 'Remove Candidates',
        zh: '删除候选数'
      }
    };
    
    if (buttonTexts[action] && buttonTexts[action][locale]) {
      return buttonTexts[action][locale];
    }
    
    return locale === 'zh' ? '应用' : 'Apply';
  }
}

// 导出单例实例
const techniqueIndicator = new TechniqueIndicator();
export default techniqueIndicator;