import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from '../Shared/ThemeToggle';

// Styled components for Navbar
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.card};
    padding: 1rem;
    box-shadow: var(--shadow);
    border-radius: 0 0 var(--radius-md) var(--radius-md);
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    border: 1px solid ${({ theme }) => theme.cardBorder};
    border-top: none;
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    color: var(--clr-accent);
    background: ${({ theme }) => theme.cardBorder};
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

const BrandName = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin: 0;
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;

  &:hover {
    color: var(--clr-accent);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ isDark, toggleTheme, showThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation and scrolling
  const handleNavClick = (event, path, sectionId) => {
    event.preventDefault();
    setIsMenuOpen(false); // Close menu immediately when a link is clicked
    
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle direct navigation (for Specialties and Projects)
  const handleDirectNav = (event, path) => {
    event.preventDefault();
    setIsMenuOpen(false);
    navigate(path);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <NavbarContainer className="navbar-container">
      <BrandName>JM</BrandName>
      <MenuButton onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </MenuButton>
      <NavLinks $isOpen={isMenuOpen}>
        <NavLink to="/" onClick={(e) => handleNavClick(e, '/', 'profile')}>Profile</NavLink>
        <NavLink to="/" onClick={(e) => handleNavClick(e, '/', 'about')}>About</NavLink>
        <NavLink to="/specialties" onClick={(e) => handleDirectNav(e, '/specialties')}>Specialties</NavLink>
        <NavLink to="/projects" onClick={(e) => handleDirectNav(e, '/projects')}>Projects</NavLink>
      </NavLinks>
      {showThemeToggle && <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />}
    </NavbarContainer>
  );
};

export default Navbar;