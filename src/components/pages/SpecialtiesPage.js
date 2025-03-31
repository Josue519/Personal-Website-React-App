import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCode, faCloud, faDumbbell, faPalette, faPhone } from '@fortawesome/free-solid-svg-icons';
import Card from '../common/Card';
import { GlobalStyle } from '../../styles/globals';

const Container = styled.div`
  max-width: 1100px;
  margin: 5rem auto;
  padding: 2rem;
  background-color: --card-gradient24); 
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
`;

const Title = styled.h1`
  color: var(--clr-accent);
  text-align: center;
  padding-bottom: 1rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin-bottom: 0.5rem;
  transition: background 0.3s ease, transform 0.3s ease, color 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    color: var(--clr-accent);
    box-shadow: 0 4px 20px rgba(0, 102, 204, 0.4);
  }
`;

const SectionContent = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 1rem;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--clr-accent);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(var(--clr-accent), 10%);
  }
`;

const specialtiesData = {
  tech: [
    {
      name: 'Front-End Development',
      description: 'HTML, CSS, JavaScript, React JS, SwiftUI',
      icon: faCode,
    },
    {
      name: 'Cloud Services & Database Management',
      description: 'AWS, Azure, SQL',
      icon: faCloud,
    },
    {
      name: 'UI/UX Design Principles',
      description: 'Creating intuitive and user-friendly interfaces',
      icon: faCode,
    },
    {
      name: 'Software Troubleshooting & Technical Support',
      description: 'Resolving software issues and providing support',
      icon: faCode,
    },
    {
      name: 'API Integration & Automation',
      description: 'RESTful APIs, workflow automation',
      icon: faCode,
    },
    {
      name: 'Website Development & Optimization',
      description: 'Designing, developing, and improving business websites',
      icon: faCode,
    },
  ],
  consulting: [
    {
      name: 'Technology Infrastructure Consulting',
      description: 'Website setup, IT system implementation',
      icon: faCloud,
    },
    {
      name: 'Process Organization & Optimization',
      description: 'Streamlining business workflows',
      icon: faCloud,
    },
    {
      name: 'Professional Services Consulting in Automation Software',
      description: 'Experience with Kaseya Autotask PSA',
      icon: faCloud,
    },
    {
      name: 'Training & Advising on AI and Tech Tools',
      description: 'Enhancing productivity and automation',
      icon: faCloud,
    },
    {
      name: 'Customer Support & IT Troubleshooting',
      description: 'Providing support and troubleshooting IT issues',
      icon: faCloud,
    },
  ],
  creative: [
    {
      name: 'Content Creation & Design',
      description: 'Flyers, marketing materials, workout plans',
      icon: faPalette,
    },
    {
      name: 'Event Planning & Coordination',
      description: 'Organizing fitness and tech-related events',
      icon: faPalette,
    },
    {
      name: 'Bilingual Communication',
      description: 'Fluent in English & Spanish',
      icon: faPalette,
    },
    {
      name: 'Team Collaboration & Leadership',
      description: 'Leading teams and fostering collaboration',
      icon: faPalette,
    },
  ],
};

const SpecialtiesPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleBookCall = () => {
    const subject = encodeURIComponent('Request for Call');
    const body = encodeURIComponent('I would like to schedule a call. Please let me know your available times.');
    window.location.href = `mailto:marantefitness@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Specialties</Title>
        <p style={{paddingBottom: '2rem'}}>
          I am a Technology Consultant, Software Developer, and Certified Personal Trainer. I offer a wide range of
          services that integrate technology, business consulting, and health & wellness. My expertise spans software
          development, IT infrastructure consulting, process optimization, and personal training, allowing me to provide
          customized solutions for both businesses and individuals.
        </p>
        
        {Object.keys(specialtiesData).map((section) => (
          <div key={section}>
            <SectionHeader onClick={() => toggleSection(section)}>
              {section.replace(/^\w/, (c) => c.toUpperCase())}
              <FontAwesomeIcon icon={openSection === section ? faChevronUp : faChevronDown} />
            </SectionHeader>
            <SectionContent $isOpen={openSection === section}>
              {specialtiesData[section].map((specialty) => (
                <Card key={specialty.name}>
                  <h2>
                    <FontAwesomeIcon icon={specialty.icon} /> {specialty.name}
                  </h2>
                  <p>{specialty.description}</p>
                </Card>
              ))}
            </SectionContent>
          </div>
        ))}
      </Container>

      <FloatingButton onClick={handleBookCall}>
        <FontAwesomeIcon icon={faPhone} /> Book a Call
      </FloatingButton>
    </>
  );
};

export default SpecialtiesPage;