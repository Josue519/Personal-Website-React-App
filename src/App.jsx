import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import BusinessCard from './components/BusinessCard';
import BusinessCardStandalone from './components/BusinessCardStandalone';
import SpecialtiesPage from './components/pages/SpecialtiesPage';
import Home from './components/pages/Home';
import ProjectsPage from './components/pages/ProjectsPage';
import ProjectDetail from './components/sections/Projects/ProjectDetail';
import './styles/globals.css';

function App() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Standalone business card route */}
          <Route path="/businesscard" element={<BusinessCardStandalone />} />
          
          {/* Main app routes */}
          <Route path="/" element={
            <>
              <Navbar isDark={isDark} toggleTheme={toggleTheme} showThemeToggle={true} />
              <Routes>
                <Route index element={<Home />} />
                <Route path="specialties" element={<SpecialtiesPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:id" element={<ProjectDetail />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </>
          } />
          
          {/* Specialties route */}
          <Route path="/specialties" element={
            <>
              <Navbar isDark={isDark} toggleTheme={toggleTheme} showThemeToggle={true} />
              <SpecialtiesPage />
            </>
          } />

          {/* Projects route */}
          <Route path="/projects" element={
            <>
              <Navbar isDark={isDark} toggleTheme={toggleTheme} showThemeToggle={true} />
              <ProjectsPage />
            </>
          } />

          {/* Project detail route */}
          <Route path="/projects/:id" element={
            <>
              <Navbar isDark={isDark} toggleTheme={toggleTheme} showThemeToggle={true} />
              <ProjectDetail />
            </>
          } />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 