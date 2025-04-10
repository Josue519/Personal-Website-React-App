import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  background: var(--card-gradient);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  overflow: hidden;
  background: var(--card-bg);
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  will-change: transform;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: var(--text-primary);
`;

const Description = styled.p`
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  background: var(--card-gradient);
  color: var(--clr-text-primary-light);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--glass-border);
  transition: all 0.3s ease;

  @media (prefers-color-scheme: dark) {
    color: var(--clr-text-primary-dark);
  }
`;

const ProjectCard = ({ project }) => {
  const handleImageError = (e) => {
    e.target.src = '/placeholder.png'; // You should add a placeholder image to your public directory
  };

  return (
    <Card to={`/projects/${project.id}`}>
      <ImageContainer>
        <ProjectImage 
          src={project.image} 
          alt={project.title}
          onError={handleImageError}
        />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.shortDescription}</Description>
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
      </Content>
    </Card>
  );
};

export default ProjectCard; 