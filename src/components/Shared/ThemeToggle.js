import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const ToggleButton = styled.button`
  background: ${({ $isDark }) => ($isDark ? 'var(--clr-dark)' : 'var(--clr-light)')};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  console.log('Dark Mode:', darkMode);

  return (
    <ToggleButton onClick={toggleDarkMode} $isDark={darkMode} aria-label="Toggle theme">
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} color={darkMode ? 'yellow' : 'blue'} />
    </ToggleButton>
  );
};

export default ThemeToggle; 