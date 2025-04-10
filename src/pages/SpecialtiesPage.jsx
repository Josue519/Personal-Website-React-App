import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faPalette, faPhone } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../components/PageTitle';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SpecialtyCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #67e8f9;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #67e8f9;
  margin-bottom: 1.5rem;
  
  ${SpecialtyCard}:hover & {
    animation: pulse 1s ease infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const Title = styled.h3`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: white;
  margin-bottom: 1rem;
  line-height: 1.3;
  background: linear-gradient(to right, #67e8f9, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
`;

const specialties = [
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Building responsive and dynamic web applications using modern frameworks and technologies.'
  },
  {
    icon: faCloud,
    title: 'Cloud Solutions',
    description: 'Implementing scalable cloud infrastructure and serverless applications.'
  },
  {
    icon: faPalette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with modern design principles.'
  },
  {
    icon: faPhone,
    title: 'Mobile Development',
    description: 'Developing native and cross-platform mobile applications for iOS and Android.'
  }
];

function SpecialtiesPage() {
  return (
    <Container>
      <PageTitle title="My Specialties" subtitle="Expertise in modern web development and digital solutions" />
      <Grid>
        {specialties.map((specialty, index) => (
          <SpecialtyCard key={index}>
            <Icon>
              <FontAwesomeIcon icon={specialty.icon} />
            </Icon>
            <Title>{specialty.title}</Title>
            <Description>{specialty.description}</Description>
          </SpecialtyCard>
        ))}
      </Grid>
    </Container>
  );
}

export default SpecialtiesPage; 