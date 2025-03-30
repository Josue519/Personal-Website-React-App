import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import '../../styles/globals.css';
import Section from '../Shared/Section';
import styled from 'styled-components';

// Import all section components
import AboutSection from '../AboutSection';
import SpecialtiesSection from '../SpecialtiesSection';
import JourneySection from '../Journey/JourneySection';
import EducationSection from '../EducationSection';
import SkillsSection from '../Skills/SkillsSection';
import ProfileSection from '../ProfileSection';
import Navbar from '../Navbar/Navbar';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <HomeContainer>
      <Navbar isDark={darkMode} toggleTheme={toggleDarkMode} showThemeToggle={true} />
      <Section id="profile">
        <ProfileSection />
      </Section>
      <Section id="about">
        <AboutSection />
      </Section>
      <Section id="specialties">
        <SpecialtiesSection />
      </Section>
      <Section id="journey">
        <JourneySection />
      </Section>
      
      <Section id="skills">
        <SkillsSection />
      </Section>
      <Section id="education">
        <EducationSection />
      </Section>
    </HomeContainer>
  );
};

export default Home;