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
  margin: 0 0 1rem;
  font-size: 1.5rem;
  color: var(--text-primary);
  font-weight: 600;
`;

const Description = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  flex: 1;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card to={`/projects/${project.id}`}>
      <ImageContainer>
        <ProjectImage
          src={project.image}
          alt={project.title}
          loading="lazy"
          width="400"
          height="225"
        />
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.shortDescription}</Description>
      </Content>
    </Card>
  );
};

export default ProjectCard; 