import React from 'react';
import { useTheme } from './context/ThemeContext';
import { useLoading } from './context/LoadingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme?.background || '#f5f5f5'};
  color: ${props => props.theme?.text || '#333333'};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 15px;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

function App({ children }) {
  const { theme } = useTheme();
  const { isLoading } = useLoading();

  return (
    <AppContainer theme={theme}>
      <Navbar />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
    </AppContainer>
  );
}

export default App;