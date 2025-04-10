import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../sections/Projects/ProjectCard';
import { projects } from '../../data/projects';
import PageTitle from '../../components/PageTitle';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectsPage = () => {
  return (
    <PageContainer>
      <PageTitle 
        title="My Projects" 
        subtitle="A showcase of my latest work and projects" 
      />
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </PageContainer>
  );
};

export default ProjectsPage; 