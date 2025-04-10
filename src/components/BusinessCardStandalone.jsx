import React from 'react';
import { useNavigate } from 'react-router-dom';
import BusinessCard from './BusinessCard';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const StandaloneContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

function BusinessCardStandalone() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSpecialtiesClick = () => {
    navigate('/specialties');
  };

  return (
    <ThemeProvider theme={theme}>
      <StandaloneContainer>
        <BusinessCard onSpecialtiesClick={handleSpecialtiesClick} />
      </StandaloneContainer>
    </ThemeProvider>
  );
}

export default BusinessCardStandalone; 