import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../../data/projects';
import { PrimaryButton, SecondaryButton } from '../common/Button';

const Container = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 2rem;
`;

const BackButton = styled(SecondaryButton)`
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(var(--clr-accent-rgb), 0.2);
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
  justify-content: center;
  padding: 1rem;
  background: var(--glass-bg);
  border-radius: 15px;
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);

  @media (max-width: 768px) {
    padding: 0.8rem;
    gap: 0.6rem;
  }
`;

const TechTag = styled.span`
  background: var(--card-gradient);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--glass-border);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    gap: 0.3rem;
  }

  &::before {
    content: '#';
    color: var(--clr-accent);
    opacity: 0.7;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-1px);
    border-color: var(--clr-accent);
    box-shadow: 0 4px 15px rgba(var(--clr-accent-rgb), 0.15);

    &::before {
      color: var(--clr-accent);
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const GitHubButton = styled(PrimaryButton)`
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <Container>
        <BackButton as={Link} to="/projects">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Projects
        </BackButton>
        <Header>
          <Title>Project Not Found</Title>
          <Description>The project you're looking for doesn't exist.</Description>
        </Header>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton as={Link} to="/projects">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Projects
      </BackButton>

      <Header>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
      </Header>

      <ImageGallery>
        {project.images.map((image, index) => (
          <GalleryImage 
            key={index} 
            src={image} 
            alt={`${project.title} screenshot ${index + 1}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </ImageGallery>

      <TechStack>
        {project.technologies.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechStack>

      <div style={{ textAlign: 'center' }}>
        <GitHubButton as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          View Project on GitHub
        </GitHubButton>
      </div>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <CloseButton onClick={() => setSelectedImage(null)}>&times;</CloseButton>
          <ModalImage 
            src={selectedImage} 
            alt={`${project.title} expanded view`}
            onClick={(e) => e.stopPropagation()}
          />
        </Modal>
      )}
    </Container>
  );
};

export default ProjectDetail; 