import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faLanguage,
  faPeopleGroup,
  faGears,
  faAppleAlt,
  faServer
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/globals.css';
import SectionTitle from '../Shared/SectionTitle';

const SkillsContainer = styled.div`
  padding: 6rem 2rem; /* Increased padding for more space */
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible; /* Ensure shapes don't overflow */
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack items on smaller screens */
  }
`;

const SkillCard = styled.div`
  background: var(--card-gradient);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px var(--glow-effect), 0 10px 25px var(--shadow-hover);
  }
`;

const SkillCategory = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: var(--clr-accent);
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillBar = styled.div`
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-left: 1rem;
`;

const SkillProgress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--clr-accent), var(--clr-accent-light));
  width: ${props => props.progress}%;
  border-radius: 4px;
  transition: width 1s ease;
`;

const SectionDescription = styled.p`
  text-align: center;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const SkillsSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Logic to adjust animation based on scroll direction
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      category: "Technical Skills",
      icon: faCode,
      skills: [
        { name: "Front-End Development", level: 90 },
        { name: "React.js", level: 85 },
        { name: "HTML/CSS/JavaScript", level: 90 },
        { name: "SwiftUI", level: 75 }
      ]
    },
    {
      category: "Languages",
      icon: faLanguage,
      skills: [
        { name: "English", level: 100 },
        { name: "Spanish", level: 100 }
      ]
    },
    {
      category: "Professional Skills",
      icon: faPeopleGroup,
      skills: [
        { name: "Customer Service", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Team Collaboration", level: 90 }
      ]
    },
    {
      category: "Technologies & Tools",
      icon: faGears,
      skills: [
        { name: "Microsoft Office Suite", level: 90 },
        { name: "MacOS", level: 95 },
        { name: "CRM Systems", level: 85 },
        { name: "Support Platforms", level: 90 }
      ]
    },
    {
      category: "Apple Ecosystem",
      icon: faAppleAlt,
      skills: [
        { name: "iOS/macOS Support", level: 95 },
        { name: "Apple Device Management", level: 90 },
        { name: "Apple Services", level: 90 }
      ]
    },
    {
      category: "Backend & Infrastructure",
      icon: faServer,
      skills: [
        { name: "Database Management", level: 75 },
        { name: "API Integration", level: 80 },
        { name: "Cloud Services", level: 75 }
      ]
    }
  ];

  return (
    <SkillsContainer>
      <SectionTitle>Skills & Expertise</SectionTitle>
      <SectionDescription>
        A comprehensive overview of my technical and professional capabilities,
        developed through years of experience in technology and customer service.
      </SectionDescription>

      <SkillsGrid>
        {skills.map((category, index) => (
          <SkillCard key={index}>
            <SkillCategory>
              <FontAwesomeIcon icon={category.icon} />
              {category.category}
            </SkillCategory>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  {skill.name}
                  <SkillBar>
                    <SkillProgress progress={skill.level} />
                  </SkillBar>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default SkillsSection; 