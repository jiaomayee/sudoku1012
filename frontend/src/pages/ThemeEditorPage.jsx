import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave, faUndo, faUpload, faDownload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { updateCustomTheme, resetCustomTheme, exportTheme, importTheme } from '../utils/themeUtils';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const EditorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  color: ${props => props.theme?.text || '#333333'};
  border: 2px solid ${props => props.theme?.border || '#e0e0e0'};
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: ${props => props.theme?.primary || '#4a6cf7'};
    color: white;
    border-color: ${props => props.theme?.primary || '#4a6cf7'};
    transform: translateX(-3px);
  }
`;

const PageTitle = styled.h1`
  font-size: 32px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0;
  flex: 1;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${props => {
    switch (props.type) {
      case 'primary': return props.theme?.primary || '#4a6cf7';
      case 'danger': return props.theme?.error || '#ff3b30';
      case 'secondary': return props.theme?.surface || '#ffffff';
      default: return props.theme?.surface || '#ffffff';
    }
  }};
  color: ${props => props.type === 'secondary' ? (props.theme?.text || '#333333') : 'white'};
  border: 2px solid ${props => {
    switch (props.type) {
      case 'primary': return props.theme?.primary || '#4a6cf7';
      case 'danger': return props.theme?.error || '#ff3b30';
      case 'secondary': return props.theme?.border || '#e0e0e0';
      default: return props.theme?.border || '#e0e0e0';
    }
  }};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const EditorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ColorPaletteSection = styled.section`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const PreviewSection = styled.section`
  background-color: ${props => props.previewTheme?.background || '#f5f5f5'};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
`;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => props.previewTheme?.surface || '#ffffff'};
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PreviewTitle = styled.h2`
  color: ${props => props.previewTheme?.text || '#333333'};
  margin: 0;
  font-size: 24px;
`;

const PreviewButton = styled.button`
  background-color: ${props => props.previewTheme?.primary || '#4a6cf7'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const PreviewSudokuBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;
  background-color: ${props => props.previewTheme?.gridLine || '#e0e0e0'};
  border-radius: 8px;
  padding: 2px;
  margin: 0 auto 30px;
  width: 300px;
  height: 300px;
`;

const PreviewCell = styled.div`
  background-color: ${props => props.previewTheme?.surface || '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${props => {
    if (props.isHighlighted) return props.previewTheme?.primary || '#4a6cf7';
    return props.previewTheme?.text || '#333333';
  }};
  background-color: ${props => {
    if (props.isHighlighted) return props.previewTheme?.highlight || '#e6f0ff';
    return props.previewTheme?.surface || '#ffffff';
  }};
  border: ${props => {
    const isThickBorder = 
      (props.row === 0 || props.row === 3 || props.row === 6) ||
      (props.row === 8 || props.row === 2 || props.row === 5) ||
      (props.col === 0 || props.col === 3 || props.col === 6) ||
      (props.col === 8 || props.col === 2 || props.col === 5);
    return isThickBorder ? `2px solid ${props.previewTheme?.gridLineThick || '#cccccc'}` : '1px solid transparent';
  }};
  border-radius: ${props => {
    if (props.row === 0 && props.col === 0) return '4px 0 0 0';
    if (props.row === 0 && props.col === 8) return '0 4px 0 0';
    if (props.row === 8 && props.col === 0) return '0 0 0 4px';
    if (props.row === 8 && props.col === 8) return '0 0 4px 0';
    return '0';
  }};
`;

const PreviewColorSwatches = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const PreviewSwatch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${props => props.previewTheme?.surface || '#ffffff'};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SwatchColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color};
  border: 2px solid ${props => props.previewTheme?.border || '#e0e0e0'};
`;

const SwatchLabel = styled.span`
  color: ${props => props.previewTheme?.text || '#333333'};
  font-size: 14px;
`;

const ColorInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const ColorLabel = styled.label`
  font-size: 16px;
  color: ${props => props.theme?.text || '#333333'};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ColorInput = styled.input`
  padding: 10px;
  border: 2px solid ${props => props.theme?.border || '#e0e0e0'};
  border-radius: 8px;
  font-size: 16px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  color: ${props => props.theme?.text || '#333333'};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.primary || '#4a6cf7'};
    box-shadow: 0 0 0 3px ${props => props.theme?.primary ? `${props.theme.primary}22` : '#4a6cf722'};
  }
`;

const ColorInputRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ColorPicker = styled.input`
  width: 60px;
  height: 44px;
  border: 2px solid ${props => props.theme?.border || '#e0e0e0'};
  border-radius: 8px;
  cursor: pointer;
  padding: 0;
  background: none;
`;

const NameInput = styled.input`
  padding: 12px;
  border: 2px solid ${props => props.theme?.border || '#e0e0e0'};
  border-radius: 8px;
  font-size: 18px;
  background-color: ${props => props.theme?.surface || '#ffffff'};
  color: ${props => props.theme?.text || '#333333'};
  margin-bottom: 30px;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme?.primary || '#4a6cf7'};
    box-shadow: 0 0 0 3px ${props => props.theme?.primary ? `${props.theme.primary}22` : '#4a6cf722'};
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ThemeEditorPage = () => {
  const { theme, customTheme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  // 本地编辑状态
  const [editedTheme, setEditedTheme] = useState({ ...customTheme });
  
  // 同步自定义主题变化
  useEffect(() => {
    setEditedTheme({ ...customTheme });
  }, [customTheme]);
  
  // 更新颜色
  const handleColorChange = (property, value) => {
    setEditedTheme(prev => ({
      ...prev,
      [property]: value
    }));
  };
  
  // 更新主题名称
  const handleNameChange = (e) => {
    setEditedTheme(prev => ({
      ...prev,
      name: e.target.value
    }));
  };
  
  // 保存主题
  const handleSave = () => {
    updateCustomTheme(editedTheme);
    toast.success(t('themeSaved'), { position: 'top-right', autoClose: 2000 });
  };
  
  // 重置主题
  const handleReset = () => {
    resetCustomTheme();
    toast.info(t('themeReset'), { position: 'top-right', autoClose: 2000 });
  };
  
  // 导出主题
  const handleExport = () => {
    exportTheme(editedTheme);
    toast.info(t('themeExported'), { position: 'top-right', autoClose: 2000 });
  };
  
  // 导入主题
  const handleImport = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        await importTheme(file);
        toast.success(t('themeImported'), { position: 'top-right', autoClose: 2000 });
        e.target.value = '';
      } catch (error) {
        toast.error(t('themeImportFailed') + error.message, { position: 'top-right', autoClose: 3000 });
      }
    }
  };
  
  // 渲染数独预览
  const renderPreviewSudoku = () => {
    const cells = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        // 高亮几个单元格作为示例
        const isHighlighted = (row === 4 && col === 4) || 
                            (row === 0 && col === 0) || 
                            (row === 8 && col === 8);
        cells.push(
          <PreviewCell 
            key={`${row}-${col}`} 
            row={row} 
            col={col}
            isHighlighted={isHighlighted}
            previewTheme={editedTheme}
          >
            {Math.floor(Math.random() * 9) + 1}
          </PreviewCell>
        );
      }
    }
    return cells;
  };

  const colorProperties = [
    { key: 'background', label: t('backgroundColor') },
    { key: 'surface', label: t('surfaceColor') },
    { key: 'text', label: t('textColor') },
    { key: 'textSecondary', label: t('textSecondaryColor') },
    { key: 'primary', label: t('primaryColor') },
    { key: 'secondary', label: t('secondaryColor') },
    { key: 'success', label: t('successColor') },
    { key: 'warning', label: t('warningColor') },
    { key: 'error', label: t('errorColor') },
    { key: 'border', label: t('borderColor') },
    { key: 'gridLine', label: t('gridLineColor') },
    { key: 'gridLineThick', label: t('gridLineThickColor') },
    { key: 'highlight', label: t('highlightColor') }
  ];

  return (
    <EditorContainer>
      <EditorHeader>
        <BackButton to="/settings" theme={theme}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </BackButton>
        <PageTitle theme={theme}>{t('themeEditor')}</PageTitle>
        <ActionsContainer>
          <ActionButton type="secondary" onClick={handleReset} theme={theme}>
            <FontAwesomeIcon icon={faUndo} size="lg" />
            {t('reset')}
          </ActionButton>
          <ActionButton type="primary" onClick={handleSave} theme={theme}>
            <FontAwesomeIcon icon={faSave} size="lg" />
            {t('saveChanges')}
          </ActionButton>
        </ActionsContainer>
      </EditorHeader>

      <EditorGrid>
        {/* 颜色编辑器 */}
        <ColorPaletteSection theme={theme}>
          <NameInput
            type="text"
            value={editedTheme.name || ''}
            onChange={handleNameChange}
            placeholder={t('customTheme')}
            theme={theme}
          />
          
          {colorProperties.map(property => (
            <ColorInputGroup key={property.key}>
              <ColorLabel theme={theme}>{property.label}</ColorLabel>
              <ColorInputRow>
                <ColorInput
                  type="text"
                  value={editedTheme[property.key] || ''}
                  onChange={(e) => handleColorChange(property.key, e.target.value)}
                  placeholder="#000000"
                  theme={theme}
                />
                <ColorPicker
                  type="color"
                  value={editedTheme[property.key] || '#000000'}
                  onChange={(e) => handleColorChange(property.key, e.target.value)}
                />
              </ColorInputRow>
            </ColorInputGroup>
          ))}
          
          <ActionsContainer style={{ marginTop: '30px' }}>
            <ActionButton 
              type="secondary" 
              onClick={() => fileInputRef.current?.click()}
              theme={theme}
            >
              <FontAwesomeIcon icon={faUpload} size="lg" />
              {t('importTheme')}
            </ActionButton>
            <HiddenFileInput 
              ref={fileInputRef}
              type="file" 
              accept=".json" 
              onChange={handleImport}
            />
            
            <ActionButton 
              type="secondary" 
              onClick={handleExport}
              theme={theme}
            >
              <FontAwesomeIcon icon={faDownload} size="lg" />
              {t('exportTheme')}
            </ActionButton>
          </ActionsContainer>
        </ColorPaletteSection>

        {/* 预览区域 */}
        <PreviewSection previewTheme={editedTheme}>
          <PreviewHeader previewTheme={editedTheme}>
            <PreviewTitle previewTheme={editedTheme}>{t('preview')}</PreviewTitle>
            <PreviewButton previewTheme={editedTheme}>
              {t('preview')}
            </PreviewButton>
          </PreviewHeader>
          
          <PreviewSudokuBoard previewTheme={editedTheme}>
            {renderPreviewSudoku()}
          </PreviewSudokuBoard>
          
          <PreviewColorSwatches>
            <PreviewSwatch previewTheme={editedTheme}>
              <SwatchColor color={editedTheme.primary} previewTheme={editedTheme} />
              <SwatchLabel previewTheme={editedTheme}>{t('primaryColor')}</SwatchLabel>
            </PreviewSwatch>
            <PreviewSwatch previewTheme={editedTheme}>
              <SwatchColor color={editedTheme.success} previewTheme={editedTheme} />
              <SwatchLabel previewTheme={editedTheme}>{t('successColor')}</SwatchLabel>
            </PreviewSwatch>
            <PreviewSwatch previewTheme={editedTheme}>
              <SwatchColor color={editedTheme.warning} previewTheme={editedTheme} />
              <SwatchLabel previewTheme={editedTheme}>{t('warningColor')}</SwatchLabel>
            </PreviewSwatch>
            <PreviewSwatch previewTheme={editedTheme}>
              <SwatchColor color={editedTheme.error} previewTheme={editedTheme} />
              <SwatchLabel previewTheme={editedTheme}>{t('errorColor')}</SwatchLabel>
            </PreviewSwatch>
          </PreviewColorSwatches>
        </PreviewSection>
      </EditorGrid>
    </EditorContainer>
  );
};

export default ThemeEditorPage;