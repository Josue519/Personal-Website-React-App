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

const EducationSection = () => {
  return (
    <EducationContainer>
      <SectionTitle>Education</SectionTitle>
      <SectionDescription>
        My educational background has provided me with a strong foundation in software development
        and other relevant skills.
      </SectionDescription>
      
      <EducationGrid>
        <Card>
          <IconWrapper>
            <FontAwesomeIcon icon={faCertificate} />
          </IconWrapper>
          <h3 style={{ fontSize: 'var(--fs-h3)', color: 'var(--text-primary)', textAlign: 'center' }}>Certificate in Software Development</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--clr-accent)', textAlign: 'center' }}>California Institute of Arts & Technology</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.7, textAlign: 'center' }}>June 2022</p>
          <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-primary)', opacity: 0.8, textAlign: 'center' }}>
            Computer Software Engineering program focusing on modern development practices and technologies.
          </p>
        </Card>
        
        <Card>
          <IconWrapper>
            <FontAwesomeIcon icon={faGraduationCap} />
          </IconWrapper>
          <h3 style={{ fontSize: 'var(--fs-h3)', color: 'var(--text-primary)', textAlign: 'center' }}>Personal Training Diploma</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--clr-accent)', textAlign: 'center' }}>National Personal Training Institute</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.7, textAlign: 'center' }}>December 2018</p>
          <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-primary)', opacity: 0.8, textAlign: 'center' }}>
            Comprehensive training in fitness instruction, nutrition, and client management.
          </p>
        </Card>
        
        <Card>
          <IconWrapper>
            <FontAwesomeIcon icon={faSchool} />
          </IconWrapper>
          <h3 style={{ fontSize: 'var(--fs-h3)', color: 'var(--text-primary)', textAlign: 'center' }}>High School Diploma</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--clr-accent)', textAlign: 'center' }}>Leto High School</p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.7, textAlign: 'center' }}>December 2018</p>
          <p style={{ fontSize: 'var(--fs-body)', color: 'var(--text-primary)', opacity: 0.8, textAlign: 'center' }}>
            General education with focus on academic excellence and foundational skills.
          </p>
        </Card>
      </EducationGrid>
    </EducationContainer>
  );
};

export default EducationSection;