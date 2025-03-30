import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved theme preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Toggle theme function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  textSecondary: '#666666',
  cardGradient: 'linear-gradient(135deg, #ffffff, #f0f0f0)', // Light mode gradient
  glowEffect: 'rgba(193, 129, 230, 0.5)', // Light mode glow effect
  hoverGlowEffect: 'rgba(84, 185, 255, 0.3)', // Light mode hover glow effect
  // ... other theme properties
};

export const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  textSecondary: '#bbbbbb',
  cardGradient: 'linear-gradient(135deg, #548bff, #800080)', // Dark mode gradient
  glowEffect: 'rgba(76, 201, 240, 0.6)', // Dark mode glow effect
  hoverGlowEffect: 'rgba(128, 0, 128, 0.4)', // Dark mode hover glow effect
  // ... other theme properties
}; 