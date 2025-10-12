import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

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

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer theme={theme}>
      <FooterContent theme={theme}>
        <FooterLinks theme={theme}>
          <Link href="#" theme={theme}>关于我们</Link>
          <Link href="#" theme={theme}>使用帮助</Link>
          <Link href="#" theme={theme}>数独规则</Link>
          <Link href="#" theme={theme}>联系我们</Link>
        </FooterLinks>
        <Copyright theme={theme}>
          © {currentYear} 数独学习应用 版权所有
        </Copyright>
        <Version theme={theme}>
          版本 1.0.0
        </Version>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;