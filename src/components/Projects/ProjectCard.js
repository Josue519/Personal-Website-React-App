import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = styled.div`
  background: var(--card-gradient);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px var(--shadow-hover);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: var(--tag-bg);
  color: var(--tag-text);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--clr-accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--clr-secondary);
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
      <Card>
        <ImageContainer>
          <img src={project.image} alt={project.title} />
        </ImageContainer>
        <Content>
          <Title>{project.title}</Title>
          <Description>{project.shortDescription}</Description>
          <TechStack>
            {project.technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechStack>
          <GitHubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            View on GitHub
          </GitHubLink>
        </Content>
      </Card>
    </Link>
  );
};

export default ProjectCard; 