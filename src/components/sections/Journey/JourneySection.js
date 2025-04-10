import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faAppleAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../../Shared/SectionTitle';
import SectionDescription from '../../Shared/SectionDescription';
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
  top: ${({ $position }) => $position}%;

  @media (max-width: 768px) {
    display: none; /* Remove circles on small screens */
  }
`;

const JourneyCard = styled.div.attrs(({ $isLeft }) => ({
  style: {
    alignSelf: $isLeft ? 'flex-start' : 'flex-end',
  },
}))`
  background: var(--card-gradient);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-md);
  border: var(--glass-border);
  padding: 1.5rem;
  margin: 1rem 0;
  width: 45%;
  box-shadow: var(--shadow);
  transition: var(--transition-default);
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
    border-color: var(--clr-accent);
  }

  @media (max-width: 768px) {
    width: 90%;
    align-self: center;
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
  display: ${({ $expanded }) => ($expanded ? 'block' : 'none')};

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
      title: 'Freelance Web Developer / Frontend Specialist',
      company: 'Self-employed',
      duration: 'Oct 2024 - Present',
      description: [
        'Engineering modern and responsive web solutions with a focus on React and front-end technologies.',
        'Developing custom web applications and user interfaces for diverse client needs.',
        'Implementing best practices in web development and maintaining high code quality standards.',
      ],
    },
    {
      icon: faTools,
      title: 'Technical Expert',
      company: 'Kaseya',
      duration: 'Jan 2024 - Jan 2025',
      description: [
        'Provided hands-on technical support, including troubleshooting software and hardware issues to enhance operational efficiency.',
        'Configured and customized applications, workflows, and integrations, ensuring seamless performance.',
        'Analyzed recurring technical issues, offering strategic recommendations to improve product stability and customer satisfaction.',
        'Collaborated with cross-functional teams to address customer requirements.',
      ],
    },
    {
      icon: faAppleAlt,
      title: 'Technical Specialist',
      company: 'Apple',
      duration: 'May 2023 - Dec 2023',
      description: [
        'Diagnosed and resolved software and hardware issues, leveraging proprietary diagnostic tools to enhance user experience.',
        'Delivered clear and effective technical guidance, ensuring seamless resolution of customer concerns.',
        'Identified trends in technical escalations, providing valuable insights to product teams for system enhancements.',
      ],
    },
    {
      icon: faUserTie,
      title: 'Product Specialist',
      company: 'Apple',
      duration: 'Aug 2021 - May 2023',
      description: [
        'Delivered personalized customer experiences, demonstrating in-depth knowledge of Apple products and services.',
        'Maintained high customer ratings by effectively communicating product features and technical solutions.',
        'Fostered strong customer relationships, reinforcing Apple\'s reputation for excellence and innovation.',
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
            <Circle $position={index * 33 + 10} />
            <JourneyCard
              $isLeft={index % 2 === 0}
              onClick={() => toggleCard(index)}
            >
              <IconWrapper>
                <FontAwesomeIcon icon={job.icon} />
              </IconWrapper>
              <JobTitle>{job.title}</JobTitle>
              <CompanyInfo>{job.company}</CompanyInfo>
              <JobDuration>{job.duration}</JobDuration>
              <JobDescription $expanded={expandedCard === index}>
                {job.description.map((point, i) => (
                  <p key={i}>{point}</p>
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