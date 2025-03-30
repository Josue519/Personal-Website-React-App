import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './components/App';
import { ThemeProvider } from './context/ThemeContext';
import styled from 'styled-components';

const container = document.getElementById('root');
const root = createRoot(container);

const StyledComponent = styled.div`
  transform: ${({ $rotate }) => $rotate ? 'rotate(45deg)' : 'none'};
  animation-duration: ${({ $typingDuration }) => $typingDuration}s;
  // other styles...
`;

const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  // other styles...
`;

const Section = () => {
  return (
    <SectionContainer>
      {/* Section content */}
    </SectionContainer>
  );
};

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Remove these if you want to allow natural touch gestures
// document.addEventListener('gesturestart', function (e) {
//   e.preventDefault();
// });

// document.addEventListener('touchmove', function (e) {
//   if (e.scale !== 1) {
//     e.preventDefault();
//   }
// }, { passive: false }); 