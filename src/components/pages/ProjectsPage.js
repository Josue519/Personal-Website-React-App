import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../Projects/ProjectCard';
import { projects } from '../../data/projects';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectsPage = () => {
  return (
    <PageContainer>
      <PageTitle>My Projects</PageTitle>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
};

export default ProjectsPage; 