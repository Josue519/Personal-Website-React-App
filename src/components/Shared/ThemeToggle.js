import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';

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
  transition: all 0.3s ease;
  color: ${({ $isDark }) => ($isDark ? 'var(--clr-light)' : 'var(--clr-dark)')};

  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} $isDark={isDark} aria-label="Toggle theme">
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </ToggleButton>
  );
};

export default ThemeToggle; 