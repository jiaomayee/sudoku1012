import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPen, faSave, faMoon, faSun, faSync } from '@fortawesome/free-solid-svg-icons';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

const SettingsHeader = styled.div`
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

const SettingsSection = styled.section`
  background-color: ${props => props.theme?.surface || '#ffffff'};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.theme?.text || '#333333'};
  margin: 0 0 20px 0;
  border-bottom: 2px solid ${props => props.theme?.border || '#e0e0e0'};
  padding-bottom: 10px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid ${props => props.theme?.border || '#e0e0e0'};
  
  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.div`
  font-size: 18px;
  color: ${props => props.theme?.text || '#333333'};
  font-weight: 500;
`;

const LanguageSelector = styled.div`
  display: flex;
  gap: 10px;
`;

const LanguageButton = styled.button`
  background-color: ${props => props.active ? props.theme?.primary || '#4a6cf7' : props.theme?.surface || '#ffffff'};
  color: ${props => props.active ? 'white' : props.theme?.text || '#333333'};
  border: 2px solid ${props => props.active ? props.theme?.primary || '#4a6cf7' : props.theme?.border || '#e0e0e0'};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme?.primary || '#4a6cf7' : props.theme?.background || '#f5f5f5'};
    transform: translateY(-1px);
  }
`;

const ThemeSelector = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ThemeOption = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${props => props.active ? props.theme?.primary || '#4a6cf7' : props.theme?.surface || '#ffffff'};
  color: ${props => props.active ? 'white' : props.theme?.text || '#333333'};
  border: 2px solid ${props => props.active ? props.theme?.primary || '#4a6cf7' : props.theme?.border || '#e0e0e0'};
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme?.primary || '#4a6cf7' : props.theme?.background || '#f5f5f5'};
    transform: translateY(-1px);
  }
`;

const CustomThemeActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const EditThemeButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${props => props.theme?.primary || '#4a6cf7'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme?.primary ? `${props.theme.primary}dd` : '#4a6cf7dd'};
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CustomThemeStatus = styled.span`
  font-size: 16px;
  color: ${props => props.theme?.textSecondary || '#666666'};
  font-style: italic;
`;

const SettingsPage = () => {
  const { theme, themeMode, setLightTheme, setDarkTheme, setSystemTheme, setCustomThemeMode, customTheme } = useTheme();
  const { language, changeLanguage, availableLanguages, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <SettingsContainer>
      <SettingsHeader>
        <BackButton to="/" theme={theme}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </BackButton>
        <PageTitle theme={theme}>{t('settingsPageTitle')}</PageTitle>
      </SettingsHeader>

      {/* 语言设置 */}
      <SettingsSection theme={theme}>
        <SectionTitle theme={theme}>{t('language')}</SectionTitle>
        <SettingItem>
          <SettingLabel theme={theme}>{t('language')}</SettingLabel>
          <LanguageSelector>
            {availableLanguages.map(lang => (
              <LanguageButton
                key={lang.code}
                active={language === lang.code}
                onClick={() => changeLanguage(lang.code)}
                theme={theme}
              >
                {lang.name}
              </LanguageButton>
            ))}
          </LanguageSelector>
        </SettingItem>
      </SettingsSection>

      {/* 主题设置 */}
      <SettingsSection theme={theme}>
        <SectionTitle theme={theme}>{t('theme')}</SectionTitle>
        
        <ThemeSelector>
          <ThemeOption
            active={themeMode === 'light'}
            onClick={setLightTheme}
            theme={theme}
          >
            <FontAwesomeIcon icon={faSun} size="lg" />
            {t('lightTheme')}
          </ThemeOption>
          
          <ThemeOption
            active={themeMode === 'dark'}
            onClick={setDarkTheme}
            theme={theme}
          >
            <FontAwesomeIcon icon={faMoon} size="lg" />
            {t('darkTheme')}
          </ThemeOption>
          
          <ThemeOption
            active={themeMode === 'system'}
            onClick={setSystemTheme}
            theme={theme}
          >
            <FontAwesomeIcon icon={faSync} size="lg" />
            {t('systemTheme')}
          </ThemeOption>
        </ThemeSelector>

        <SettingItem style={{ marginTop: '20px' }}>
          <SettingLabel theme={theme}>{t('customTheme')}</SettingLabel>
          <CustomThemeActions>
            <EditThemeButton to="/settings/theme-editor" theme={theme}>
              <FontAwesomeIcon icon={faPen} size="lg" />
              {t('editTheme')}
            </EditThemeButton>
            <CustomThemeStatus theme={theme}>
              {themeMode === 'custom' && `${t('customTheme')} - ${customTheme.name}`}
            </CustomThemeStatus>
          </CustomThemeActions>
        </SettingItem>
      </SettingsSection>
    </SettingsContainer>
  );
};

export default SettingsPage;