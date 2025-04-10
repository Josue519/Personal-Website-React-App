import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import { projects } from '../data/projects';

const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  margin-bottom: 1rem;
  color: white;
  line-height: 1.3;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  color: rgba(255, 255, 255, 0.8);
`;

function ProjectsPage() {
  return (
    <Container>
      <PageTitle title="My Projects" subtitle="A showcase of my latest work and projects" />
      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <Image src={project.image} alt={project.title} />
            <Content>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
              <Tags>
                {project.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
            </Content>
          </ProjectCard>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectsPage; 