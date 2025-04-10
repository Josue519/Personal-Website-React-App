import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpecialtiesPage from './pages/SpecialtiesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './Projects/ProjectDetail';
import Navbar from './Navbar/Navbar';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import { lightTheme, darkTheme } from '../styles/themes';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  // other styles...
`;

const App = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Navbar isDark={darkMode} toggleTheme={toggleDarkMode} showThemeToggle={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </StyledThemeProvider>
  );
};

export default App;