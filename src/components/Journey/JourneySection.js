import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faAppleAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../Shared/SectionTitle';
import SectionDescription from '../Shared/SectionDescription';
import { Link } from 'react-router-dom';

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
`;

const JourneyContainer = styled.div`
  padding: 0 2rem;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: 0; /* Remove top padding on small screens */
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    width: 4px;
    background-color: var(--clr-accent);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;

    @media (max-width: 768px) {
      display: none; /* Remove timeline line on small screens */
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--clr-accent);
  border-radius: 50%;
  left: 50%;
  margin-left: -10px;
  top: ${({ position }) => position}%;

  @media (max-width: 768px) {
    display: none; /* Remove circles on small screens */
  }
`;

const JourneyCard = styled.div.attrs(({ isLeft }) => ({
  style: {
    alignSelf: isLeft ? 'flex-start' : 'flex-end',
  },
}))`
  background: var(--card-gradient);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  width: 45%;
  transition: box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%; /* Full width on small screens */
    align-self: center; /* Center align on small screens */
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: var(--clr-accent);
  margin-bottom: 1rem;
  text-align: center;
`;

const JobTitle = styled.h3`
  font-size: var(--fs-h3);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CompanyInfo = styled.p`
  font-size: 1.1rem;
  color: var(--clr-accent);
  margin-bottom: 0.5rem;
  text-align: center;
`;

const JobDuration = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.7;
  margin-bottom: 1rem;
  text-align: center;
`;

const JobDescription = styled.div`
  font-size: var(--fs-body);
  color: var(--text-primary);
  opacity: 0.8;
  text-align: center;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};

  p {
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  opacity: 0.7;
  text-align: center;
  margin-top: 2rem;
`;

const JourneySection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const journeyData = [
    {
      icon: faTools,
      title: 'Technical Expert',
      company: 'Kaseya',
      duration: 'Jan 2024 - Jan 2025',
      description: [
        'Utilized diagnostic tools to troubleshoot software and hardware concerns, enhancing operational efficiency.',
        'Delivered tailored solutions to customer challenges, balancing technical expertise with clear communication.',
        'Advocated for customer needs by identifying patterns in recurring issues and providing actionable feedback to technical teams.',
        'Maintained high productivity in a fast-paced environment, contributing to increased customer retention.',
      ],
    },
    {
      icon: faAppleAlt,
      title: 'Technical Specialist',
      company: 'Apple',
      duration: 'May 2023 - Dec 2023',
      description: [
        'Utilized diagnostic tools to troubleshoot software and hardware concerns, enhancing operational efficiency.',
        'Delivered tailored solutions to customer challenges, balancing technical expertise with clear communication.',
        'Advocated for customer needs by identifying patterns in recurring issues and providing actionable feedback to technical teams.',
        'Maintained high productivity in a fast-paced environment, contributing to increased customer retention.',
      ],
    },
    {
      icon: faUserTie,
      title: 'Product Specialist',
      company: 'Apple',
      duration: 'Aug 2021 - May 2023',
      description: [
        'Provided exceptional customer service, ensuring personalized experiences that enhanced satisfaction and sales.',
        'Maintained consistently high customer ratings by effectively communicating product benefits and solutions',
        'Developed deep expertise in Apple products, helping customers make informed purchasing decisions',
        'Fostered strong customer relationships, reinforcing Apple\'s brand loyalty and sales performance'
      ],
    },
  ];

  return (
    <JourneyContainer>
      <SectionTitle>My Journey</SectionTitle>
      <SectionDescription>
        A brief overview of my professional journey and milestones.
      </SectionDescription>
      
      <Timeline>
        {journeyData.map((job, index) => (
          <React.Fragment key={index}>
            <Circle position={index * 33 + 10} />
            <JourneyCard
              isLeft={index % 2 === 0}
              onClick={() => toggleCard(index)}
            >
              <IconWrapper>
                <FontAwesomeIcon icon={job.icon} />
              </IconWrapper>
              <JobTitle>{job.title}</JobTitle>
              <CompanyInfo>{job.company}</CompanyInfo>
              <JobDuration>{job.duration}</JobDuration>
              <JobDescription expanded={expandedCard === index}>
                {job.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </JobDescription>
            </JourneyCard>
          </React.Fragment>
        ))}
      </Timeline>

      <ContactInfo>
        Kissimmee FL| marantefitness@gmail.com
      </ContactInfo>
    </JourneyContainer>
  );
};

export default JourneySection; 