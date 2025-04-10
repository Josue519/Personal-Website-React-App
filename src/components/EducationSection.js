import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faSchool } from '@fortawesome/free-solid-svg-icons';
import Card from './common/Card';
import SectionTitle from './Shared/SectionTitle';
import SectionDescription from './Shared/SectionDescription';

const EducationContainer = styled.div`
  padding: 0 2rem;
  position: relative;
  text-align: center;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: var(--clr-accent);
  margin-bottom: 1rem;
`;

const EducationCard = styled(Card)`
  padding: var(--spacing-md);
  background: var(--card-gradient);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-md);
  border: var(--glass-border);
  transition: var(--transition-default);
  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
    border-color: var(--clr-accent);
  }
`;

const EducationTitle = styled.h3`
  font-size: var(--fs-h3);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Institution = styled.p`
  font-size: 1.1rem;
  color: var(--clr-accent);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.7;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: var(--fs-body);
  color: var(--text-primary);
  opacity: 0.8;
  text-align: center;
  line-height: 1.6;
`;

const EducationSection = () => {
  return (
    <EducationContainer>
      <SectionTitle>Education</SectionTitle>
      <SectionDescription>
        My educational background has provided me with a strong foundation in software development
        and other relevant skills.
      </SectionDescription>
      
      <EducationGrid>
        <EducationCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faCertificate} />
          </IconWrapper>
          <EducationTitle>Certificate in Software Development</EducationTitle>
          <Institution>California Institute of Arts & Technology</Institution>
          <Date>June 2022</Date>
          <Description>
            Computer Software Engineering program focusing on modern development practices and technologies.
          </Description>
        </EducationCard>
        
        <EducationCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faGraduationCap} />
          </IconWrapper>
          <EducationTitle>Personal Training Diploma</EducationTitle>
          <Institution>National Personal Training Institute</Institution>
          <Date>December 2018</Date>
          <Description>
            Comprehensive training in fitness instruction, nutrition, and client management.
          </Description>
        </EducationCard>
        
        <EducationCard>
          <IconWrapper>
            <FontAwesomeIcon icon={faSchool} />
          </IconWrapper>
          <EducationTitle>High School Diploma</EducationTitle>
          <Institution>Leto High School</Institution>
          <Date>December 2018</Date>
          <Description>
            General education with focus on academic excellence and foundational skills.
          </Description>
        </EducationCard>
      </EducationGrid>
    </EducationContainer>
  );
};

export default EducationSection;