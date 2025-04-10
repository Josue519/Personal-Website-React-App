import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import '../../styles/globals.css';
import Section from '../Shared/Section';
import styled from 'styled-components';

// Import all section components
import AboutSection from '../sections/About/AboutSection';
import SpecialtiesSection from '../SpecialtiesSection';
import EducationSection from '../EducationSection';
import JourneySection from '../sections/Journey/JourneySection';
import ProfileSection from '../sections/Profile/ProfileSection';
import SkillsSection from '../sections/Skills/SkillsSection';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Home = () => {
  const { theme } = useTheme();

  return (
    <HomeContainer theme={theme}>
      <Section id="profile" theme={theme}>
        <ProfileSection />
      </Section>
      <Section id="about" theme={theme}>
        <AboutSection />
      </Section>
      <Section id="specialties" theme={theme}>
        <SpecialtiesSection />
      </Section>
      <Section id="journey" theme={theme}>
        <JourneySection />
      </Section>
      <Section id="skills" theme={theme}>
        <SkillsSection />
      </Section>
      <Section id="education" theme={theme}>
        <EducationSection />
      </Section>
    </HomeContainer>
  );
};

export default Home;