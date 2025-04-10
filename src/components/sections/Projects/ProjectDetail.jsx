import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { projects } from '../../../data/projects';
import VideoPlayer from '../../common/VideoPlayer';

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Container>Project not found</Container>;
  }

  return (
    <Container>
      <VideoPlayer
        src={project.video}
        poster={project.image}
        title={project.title}
      />
      {/* Rest of the project details */}
    </Container>
  );
};

export default ProjectDetail; 