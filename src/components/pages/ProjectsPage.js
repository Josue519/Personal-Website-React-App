import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const PageContainer = styled.div`
  padding: 2rem;
  padding-top: 5rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  background: var(--card-gradient);
  padding: 1rem;
  border-radius: 10px;
  color: var(--text-primary);
`;

const FeaturedSection = styled.div`
  margin-top: 2rem;
`;

const FeaturedTitle = styled.h2`
  margin-bottom: 1rem;
  color: var(--clr-accent);
`;

const ScrollView = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1rem;
  gap: 1rem;
  justify-content: center;
`;

const Card = styled.div`
  background: var(--card-gradient);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  min-width: 200px;
  flex: 0 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  opacity: 0.8;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ProjectsPage = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of project 1' },
    { title: 'Project 2', description: 'Description of project 2' },
    { title: 'Project 3', description: 'Description of project 3' },
    // Add more projects as needed
  ];

  return (
    <>
      <Navbar showThemeToggle={true} />
      <PageContainer>
        <PageTitle>Projects</PageTitle>
        <FeaturedSection>
          <FeaturedTitle>Featured Projects</FeaturedTitle>
          <ScrollView>
            {projects.map((project, index) => (
              <Card key={index}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </Card>
            ))}
          </ScrollView>
        </FeaturedSection>
      </PageContainer>
    </>
  );
};

export default ProjectsPage; 