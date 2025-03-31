import React from 'react';
import styled from 'styled-components';
import Card from './common/Card';
import SectionTitle from './Shared/SectionTitle';
import SectionDescription from './Shared/SectionDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faAppleAlt,
  faWrench,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './common/Button';
import '../styles/globals.css';

const SpecialtiesContainer = styled.div`
  padding: 0 2rem;
  position: relative;
  text-align: center;
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpecialtyIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--clr-accent);
  text-align: center;
  
  ${Card}:hover & {
    animation: pulse 1s ease infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const SpecialtyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SpecialtyDescription = styled.p`
  font-size: var(--fs-body);
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  opacity: 0.8;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SpecialtyList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0;
  text-align: center;
  
  li {
    padding: 0.5rem 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    &:before {
      content: '•';
      color: var(--clr-accent);
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const SpecialtiesSection = () => {
  return (
    <SpecialtiesContainer>
      <SectionTitle>Specialties</SectionTitle>
      <SectionDescription>
        Explore my core areas of expertise in software development and technical solutions.
      </SectionDescription>
      
      <SpecialtiesGrid>
        <Card>
          <SpecialtyIcon>
            <FontAwesomeIcon icon={faLaptopCode} />
          </SpecialtyIcon>
          <SpecialtyTitle>Front-End Development</SpecialtyTitle>
          <SpecialtyDescription>
            Creating responsive and intuitive user interfaces with modern web technologies.
          </SpecialtyDescription>
          <SpecialtyList>
            <li>React & Modern JavaScript</li>
            <li>Responsive Web Design</li>
            <li>UI/UX Implementation</li>
          </SpecialtyList>
        </Card>
        
        <Card>
          <SpecialtyIcon>
            <FontAwesomeIcon icon={faAppleAlt} />
          </SpecialtyIcon>
          <SpecialtyTitle>Apple Ecosystem Development</SpecialtyTitle>
          <SpecialtyDescription>
            Building native applications and solutions for Apple platforms.
          </SpecialtyDescription>
          <SpecialtyList>
            <li>iOS & SwiftUI Development</li>
            <li>macOS Application Design</li>
            <li>Apple Integration Solutions</li>
          </SpecialtyList>
        </Card>
        
        <Card>
          <SpecialtyIcon>
            <FontAwesomeIcon icon={faWrench} />
          </SpecialtyIcon>
          <SpecialtyTitle>Technical Troubleshooting</SpecialtyTitle>
          <SpecialtyDescription>
            Solving complex technical challenges and optimizing system performance.
          </SpecialtyDescription>
          <SpecialtyList>
            <li>Debug & Performance Analysis</li>
            <li>System Architecture Review</li>
            <li>Technical Documentation</li>
          </SpecialtyList>
        </Card>
      </SpecialtiesGrid>
      
      <ButtonContainer>
        <Link to="/specialties">
          <PrimaryButton>
            View All Specialties
          </PrimaryButton>
        </Link>
      </ButtonContainer>
    </SpecialtiesContainer>
  );
};

export default SpecialtiesSection; 