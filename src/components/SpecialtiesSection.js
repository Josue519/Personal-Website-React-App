import React from 'react';
import styled from 'styled-components';
import Card from './common/Card';
import SectionTitle from './Shared/SectionTitle';
import SectionDescription from './Shared/SectionDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faDumbbell, 
  faAppleAlt
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './common/Button';
import '../styles/globals.css';

const SpecialtiesContainer = styled.div`
  padding: 0 2rem;
  position: relative;
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpecialtyIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--clr-accent);
  
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
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SpecialtyDescription = styled.p`
  font-size: var(--fs-body);
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  opacity: 0.8;
  text-align: left;
  flex-grow: 1;
`;

const SpecialtyList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0;
  text-align: left;
  
  li {
    padding: 0.5rem 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSecondary};
    position: relative;
    padding-left: 1.5rem;
    
    &:before {
      content: '•';
      color: var(--clr-accent);
      position: absolute;
      left: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const SpecialtiesSection = () => {
  return (
    <SpecialtiesContainer>
      <SectionTitle>Specialties</SectionTitle>
      <SectionDescription>
        Explore my core areas of expertise in technology, business consulting, and health & wellness.
      </SectionDescription>
      
      <SpecialtiesGrid>
        <Card>
          <SpecialtyIcon>
            <FontAwesomeIcon icon={faCode} />
          </SpecialtyIcon>
          <SpecialtyTitle>Full-Stack Development</SpecialtyTitle>
          <SpecialtyDescription>
            Building responsive and scalable web applications using modern technologies.
          </SpecialtyDescription>
          <SpecialtyList>
            <li>Front-end & Back-end Development</li>
            <li>React & Node.js</li>
            <li>Database Design</li>
          </SpecialtyList>
        </Card>
        
        <Card>
          <SpecialtyIcon>
            <FontAwesomeIcon icon={faAppleAlt} />
          </SpecialtyIcon>
          <SpecialtyTitle>Apple Ecosystem Expertise</SpecialtyTitle>
          <SpecialtyDescription>
            Specialized knowledge in Apple products, services, and integrations.
          </SpecialtyDescription>
          <SpecialtyList>
            <li>iOS & macOS Development</li>
            <li>Apple Device Management</li>
            <li>Enterprise Solutions</li>
          </SpecialtyList>
        </Card>
        
        <Card>
          <SpecialtyIcon>
            <FontAwesomeIcon icon={faDumbbell} />
          </SpecialtyIcon>
          <SpecialtyTitle>Personal Training</SpecialtyTitle>
          <SpecialtyDescription>
            Certified personal training with customized fitness programs.
          </SpecialtyDescription>
          <SpecialtyList>
            <li>Customized Workout Programs</li>
            <li>Nutrition Coaching</li>
            <li>Body Transformations</li>
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