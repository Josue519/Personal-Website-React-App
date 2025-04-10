import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCode, faCloud, faPalette, faPhone } from '@fortawesome/free-solid-svg-icons';
import Card from '../common/Card';
import { PrimaryButton } from '../common/Button';
import PageTitle from '../../components/PageTitle';

const Container = styled.div`
  max-width: 1100px;
  margin: 5rem auto;
  padding: 2rem;
  background: var(--card-gradient);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-lg);
  border: var(--glass-border);
  text-align: center;
`;

const Title = styled.h1`
  color: var(--clr-accent);
  text-align: center;
  padding-bottom: var(--spacing-md);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: var(--spacing-md);
  background: var(--card-gradient);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-md);
  border: var(--glass-border);
  margin-bottom: var(--spacing-xs);
  transition: var(--transition-default);
  box-shadow: var(--shadow);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
    border-color: var(--clr-accent);
  }
`;

const SectionContent = styled.div`
  padding: var(--spacing-md);
  background: var(--card-gradient);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-md);
  border: var(--glass-border);
  margin-bottom: var(--spacing-md);
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  box-shadow: var(--shadow);
`;

const FloatingButton = styled(PrimaryButton)`
  position: fixed;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  padding: clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 3vw, 2.2rem);
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  display: flex;
  align-items: center;
  gap: clamp(0.6rem, 1.5vw, 1rem);
  z-index: 1000;
  border-radius: 30px;
  box-shadow: var(--shadow);
  background: var(--card-gradient);
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
    border-color: var(--clr-accent);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    gap: 0.6rem;
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
  const [openSections, setOpenSections] = useState({
    tech: false,
    consulting: false,
    creative: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/marantefitness/30min', '_blank');
  };

  return (
    <>
      <PageTitle 
        title="Specialties" 
        subtitle="Expertise in modern web development, UI/UX design, and cloud solutions" 
      />
      <Container>
        <p style={{paddingBottom: 'var(--spacing-lg)'}}>
          Throughout my journey in technology, I&apos;ve developed a deep passion for creating beautiful, functional, and user-friendly web applications. 
          I love the challenge of turning complex problems into elegant solutions and continuously expanding my knowledge in modern web technologies. 
          My experience spans from crafting pixel-perfect UIs to implementing robust backend systems, always with a focus on delivering exceptional user experiences.
        </p>
        
        {Object.keys(specialtiesData).map((section) => (
          <div key={section}>
            <SectionHeader onClick={() => toggleSection(section)}>
              {section.replace(/^\w/, (c) => c.toUpperCase())}
              <FontAwesomeIcon icon={openSections[section] ? faChevronUp : faChevronDown} />
            </SectionHeader>
            <SectionContent $isOpen={openSections[section]}>
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