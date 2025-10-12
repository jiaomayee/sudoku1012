import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { useLoading } from '../context/LoadingContext';

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${props => props.theme.background};
  border-top: 4px solid ${props => props.theme.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: 500;
`;

const LoadingSpinner = ({ showMessage = true }) => {
  const { theme } = useTheme();
  const { loadingMessage } = useLoading();

  return (
    <SpinnerContainer>
      <Spinner theme={theme} />
      {showMessage && (
        <LoadingText theme={theme}>
          {loadingMessage}
        </LoadingText>
      )}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;