import React, { useState } from 'react';
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
  background: rgba(255, 255, 255, 0.1);
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
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 10px 10px;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    color: var(--clr-accent);
    background: linear-gradient(135deg, rgba(84, 185, 255, 0.1), rgba(128, 0, 128, 0.1));
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.2rem;
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

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ showThemeToggle }) => {
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
    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to ensure the page has loaded
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <NavbarContainer>
      <BrandName>JM</BrandName>
      <MenuButton onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </MenuButton>
      <NavLinks $isOpen={isMenuOpen}>
        <NavLink to="/" onClick={(e) => handleNavClick(e, '/', 'profile')}>Profile</NavLink>
        <NavLink to="/" onClick={(e) => handleNavClick(e, '/', 'about')}>About</NavLink>
        <NavLink to="/specialties">Specialties</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </NavLinks>
      {showThemeToggle && <ThemeToggle />}
    </NavbarContainer>
  );
};

export default Navbar;