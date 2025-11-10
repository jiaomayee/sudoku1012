// 技巧管理器：负责技巧选择、组合和管理
import { findNakedSingles, findNotesSingles } from './sudokuTechniques.js';
// 注意：pairTechniques.js 文件不存在，相关函数应该在其他文件中定义
import { findNakedPairs, findHiddenPairs } from './sudokuTechniques.js';
import { findNakedTriples, findHiddenTriples } from './tripleTechniques.js';
import { findJellyfish } from './sudokuTechniques.js';
import { findALSXZ } from './alsXZTechniques.js';
// 导入显性数对指示功能
import nakedPairIndicator from './nakedPairIndicator.js';
// 导入ALS-XZ指示功能
import alsXZIndicator from './alsXZIndicator.js';

// 定义技巧名称映射，修复未定义变量的问题
const pairTechniqueNames = {
  notesSingle: {
    en: 'Notes Single',
    zh: '候选数唯一法'
  },
  nakedPairs: {
    en: 'Naked Pairs',
    zh: '显性数对法'
  },
  hiddenPairs: {
    en: 'Hidden Pairs',
    zh: '隐性数对法'
  }
};

// 定义三链数技巧名称映射，修复未定义变量的问题
const tripleTechniqueNames = {
  nakedTriples: {
    en: 'Naked Triples',
    zh: '显性三链数法'
  },
  hiddenTriples: {
    en: 'Hidden Triples',
    zh: '隐性三链数法'
  }
};

// 技巧分类
const TECHNIQUE_CATEGORIES = {
  BASIC: 'basic',
  NOTE_BASIC: 'noteBasic',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
};

// 所有可用技巧
const ALL_TECHNIQUES = {
  nakedSingle: {
    id: 'nakedSingle',
    name: '唯一数法',
    name_i18n: {
      en: 'Naked Single',
      zh: '唯一数法'
    },
    description: '当某单元格只有一个可能数字时填入该数字',
    category: TECHNIQUE_CATEGORIES.BASIC,
    function: findNakedSingles,
    enabled: true // 默认启用
  },
  notesSingle: {
    id: 'notesSingle',
    name: '候选数唯一法',
    name_i18n: pairTechniqueNames.notesSingle || {
      en: 'Notes Single',
      zh: '候选数唯一法'
    },
    description: '当单元格的候选数中只有一个数字时填入该数字',
    category: TECHNIQUE_CATEGORIES.NOTE_BASIC,
    function: findNotesSingles,
    enabled: true // 默认启用
  },
  nakedPairs: {
    id: 'nakedPairs',
    name: '显性数对法',
    name_i18n: pairTechniqueNames.nakedPairs || {
      en: 'Naked Pairs',
      zh: '显性数对法'
    },
    description: '在同一行、列或宫中，两个单元格都只有相同的两个候选数时，删除相关区域的其他候选数',
    category: TECHNIQUE_CATEGORIES.NOTE_BASIC,
    function: findNakedPairs,
    enabled: true // 默认启用
  },
  hiddenPairs: {
    id: 'hiddenPairs',
    name: '隐性数对法',
    name_i18n: pairTechniqueNames.hiddenPairs || {
      en: 'Hidden Pairs',
      zh: '隐性数对法'
    },
    description: '在同一行、列或宫中，两个数字只能出现在两个单元格中时，删除这两个单元格的其他候选数',
    category: TECHNIQUE_CATEGORIES.INTERMEDIATE,
    function: findHiddenPairs,
    enabled: true // 默认启用
  },
  nakedTriples: {
    id: 'nakedTriples',
    name: '显性三链数法',
    name_i18n: tripleTechniqueNames.nakedTriples || {
      en: 'Naked Triples',
      zh: '显性三链数法'
    },
    description: '在同一行、列或宫中，三个单元格都只有相同的三个候选数时，删除相关区域的其他候选数',
    category: TECHNIQUE_CATEGORIES.INTERMEDIATE,
    function: findNakedTriples,
    enabled: true // 默认启用
  },
  hiddenTriples: {
    id: 'hiddenTriples',
    name: '隐性三链数法',
    name_i18n: tripleTechniqueNames.hiddenTriples || {
      en: 'Hidden Triples',
      zh: '隐性三链数法'
    },
    description: '在同一行、列或宫中，三个数字只能出现在三个单元格中时，删除这三个单元格的其他候选数',
    category: TECHNIQUE_CATEGORIES.INTERMEDIATE,
    function: findHiddenTriples,
    enabled: true // 默认启用
  },
  // 添加Jellyfish技巧
  jellyfish: {
    id: 'jellyfish',
    name: '水母法',
    name_i18n: {
      en: 'Jellyfish',
      zh: '水母法'
    },
    description: '在四行（或四列）中，某个数字只出现在相同的四列（或四行）中，删除相关区域的其他候选数',
    category: TECHNIQUE_CATEGORIES.ADVANCED,
    function: findJellyfish,
    enabled: true // 默认启用
  },
  alsXZ: {
    id: 'alsXZ',
    name: 'ALS-XZ技巧',
    name_i18n: {
      en: 'ALS-XZ Rule',
      zh: 'ALS-XZ技巧'
    },
    description: 'ALS-XZ技巧：通过两个 ALS 和一个限制数字 Z 来消除候选数',
    category: TECHNIQUE_CATEGORIES.ADVANCED,
    function: findALSXZ,
    enabled: true // 默认启用
  }
  // 后续可以添加更多技巧
};

/**
 * 技巧管理器类
 */
class TechniqueManager {
  constructor() {
    // 初始化技巧配置
    this.techniques = { ...ALL_TECHNIQUES };
    this.loadSavedSettings();
  }

  /**
   * 从本地存储加载已保存的技巧设置
   */
  loadSavedSettings() {
    try {
      const savedSettings = localStorage.getItem('sudokuTechniqueSettings');
      if (savedSettings) {
        const parsedSettings = JSON.parse(savedSettings);
        // 合并保存的设置到当前技巧配置
        Object.keys(parsedSettings).forEach(techniqueId => {
          if (this.techniques[techniqueId]) {
            this.techniques[techniqueId].enabled = parsedSettings[techniqueId].enabled;
          }
        });
      }
    } catch (error) {
      console.error('加载技巧设置失败:', error);
    }
  }

  /**
   * 保存技巧设置到本地存储
   */
  saveSettings() {
    try {
      const settingsToSave = {};
      Object.keys(this.techniques).forEach(techniqueId => {
        settingsToSave[techniqueId] = {
          enabled: this.techniques[techniqueId].enabled
        };
      });
      localStorage.setItem('sudokuTechniqueSettings', JSON.stringify(settingsToSave));
    } catch (error) {
      console.error('保存技巧设置失败:', error);
    }
  }

  /**
   * 获取所有技巧
   * @returns {Object} 所有技巧的配置对象
   */
  getAllTechniques() {
    return this.techniques;
  }

  /**
   * 获取所有启用的技巧
   * @returns {Object} 所有启用的技巧的配置对象
   */
  getEnabledTechniques() {
    const enabled = {};
    Object.keys(this.techniques).forEach(techniqueId => {
      if (this.techniques[techniqueId].enabled) {
        enabled[techniqueId] = this.techniques[techniqueId];
      }
    });
    return enabled;
  }

  /**
   * 根据分类获取技巧
   * @param {string} category 技巧分类
   * @returns {Object} 该分类下的所有技巧
   */
  getTechniquesByCategory(category) {
    const techniquesInCategory = {};
    Object.keys(this.techniques).forEach(techniqueId => {
      if (this.techniques[techniqueId].category === category) {
        techniquesInCategory[techniqueId] = this.techniques[techniqueId];
      }
    });
    return techniquesInCategory;
  }

  /**
   * 启用或禁用某个技巧
   * @param {string} techniqueId 技巧ID
   * @param {boolean} enabled 是否启用
   * @returns {boolean} 操作是否成功
   */
  setTechniqueEnabled(techniqueId, enabled) {
    if (this.techniques[techniqueId] !== undefined) {
      this.techniques[techniqueId].enabled = enabled;
      this.saveSettings();
      return true;
    }
    return false;
  }

  /**
   * 检查某个技巧是否启用
   * @param {string} techniqueId 技巧ID
   * @returns {boolean} 技巧是否启用
   */
  isTechniqueEnabled(techniqueId) {
    return this.techniques[techniqueId]?.enabled || false;
  }

  /**
   * 为特定技巧设置指示器
   * @param {string} techniqueType 技巧类型
   * @param {Object} step 技巧步骤
   * @returns {Object} 对应的指示器实例
   */
  getIndicatorForTechnique(techniqueType, step) {
    // 为显性数对技巧使用专门的指示器
    if (techniqueType && techniqueType.includes('nakedPair')) {
      nakedPairIndicator.setCurrentStep(step);
      return nakedPairIndicator;
    }
    
    // 为ALS-XZ技巧使用专门的指示器
    if (techniqueType && techniqueType.includes('alsXZ')) {
      alsXZIndicator.setCurrentStep(step);
      return alsXZIndicator;
    }
    
    // 其他技巧使用默认指示器
    return null; // 这里可以返回其他专门的指示器
  }

  /**
   * 使用所有启用的技巧求解一步
   * @param {Array<Array<number>>} board 数独棋盘
   * @param {Object} pencilNotes 候选数标注
   * @param {Array<Array<number>>} solution 可选，数独的正确答案
   * @returns {Object|null} 找到的第一个解题机会
   */
  findSolutionStep(board, pencilNotes = {}, solution = null) {
    // 按优先级顺序检查各技巧
    const priorityOrder = ['nakedSingle', 'notesSingle', 'nakedPairs', 'hiddenPairs', 'nakedTriples', 'hiddenTriples', 'jellyfish', 'alsXZ'];
    
    for (const techniqueId of priorityOrder) {
      if (this.isTechniqueEnabled(techniqueId)) {
        const technique = this.techniques[techniqueId];
        const opportunities = technique.function(board, pencilNotes, solution);
        
        if (opportunities && opportunities.length > 0) {
          // 返回第一个找到的机会，并添加技巧信息
          return {
            ...opportunities[0],
            techniqueId: techniqueId,
            techniqueInfo: technique
          };
        }
      }
    }
    
    return null; // 没有找到解题机会
  }

  /**
   * 获取技巧的国际化名称
   * @param {string} techniqueId 技巧ID
   * @param {string} locale 语言代码
   * @returns {string} 技巧名称
   */
  getTechniqueName(techniqueId, locale = 'zh') {
    const technique = this.techniques[techniqueId];
    if (!technique) return techniqueId;
    
    if (technique.name_i18n && technique.name_i18n[locale]) {
      return technique.name_i18n[locale];
    }
    return technique.name;
  }

  /**
   * 重置所有技巧到默认状态
   */
  resetToDefaults() {
    Object.keys(this.techniques).forEach(techniqueId => {
      this.techniques[techniqueId].enabled = ALL_TECHNIQUES[techniqueId].enabled;
    });
    this.saveSettings();
  }

  /**
   * 获取技巧分类的国际化名称
   * @param {string} category 分类ID
   * @param {string} locale 语言代码
   * @returns {string} 分类名称
   */
  getCategoryName(category, locale = 'zh') {
    const categoryNames = {
      [TECHNIQUE_CATEGORIES.BASIC]: {
        en: 'Basic Techniques',
        zh: '基础技巧'
      },
      [TECHNIQUE_CATEGORIES.NOTE_BASIC]: {
        en: 'Basic Note Techniques',
        zh: '候选数基础技巧'
      },
      [TECHNIQUE_CATEGORIES.INTERMEDIATE]: {
        en: 'Intermediate Techniques',
        zh: '中级技巧'
      },
      [TECHNIQUE_CATEGORIES.ADVANCED]: {
        en: 'Advanced Techniques',
        zh: '高级技巧'
      }
    };
    
    if (categoryNames[category] && categoryNames[category][locale]) {
      return categoryNames[category][locale];
    }
    return category;
  }

  /**
   * 获取所有技巧分类
   * @returns {Array} 分类数组
   */
  getCategories() {
    return [
      { id: TECHNIQUE_CATEGORIES.BASIC, name: '基础技巧' },
      { id: TECHNIQUE_CATEGORIES.NOTE_BASIC, name: '候选数基础技巧' },
      { id: TECHNIQUE_CATEGORIES.INTERMEDIATE, name: '中级技巧' },
      { id: TECHNIQUE_CATEGORIES.ADVANCED, name: '高级技巧' }
    ];
  }
}

// 导出单例实例
const techniqueManager = new TechniqueManager();

// 导出技巧分类常量
export { TECHNIQUE_CATEGORIES };

// 导出技巧管理器实例
export default techniqueManager;