import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.textSecondary};
  padding: 20px 0;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${props => props.theme.mediaQueries.small} {
    padding: 0 15px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;
  ${props => props.theme.mediaQueries.small} {
    gap: 15px;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const Version = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

import { APP_VERSION } from '../config/version';

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer theme={theme}>
      <FooterContent theme={theme}>
        <FooterLinks theme={theme}>
          <Link href="#" theme={theme}>{t('aboutUs')}</Link>
          <Link href="#" theme={theme}>{t('help')}</Link>
          <Link href="#" theme={theme}>{t('sudokuRules')}</Link>
          <Link href="#" theme={theme}>{t('contactUs')}</Link>
        </FooterLinks>
        <Copyright theme={theme}>
          © {currentYear} {t('appName')} {t('copyright')}
        </Copyright>
        <Version theme={theme}>
          {t('version')} {APP_VERSION}
        </Version>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;