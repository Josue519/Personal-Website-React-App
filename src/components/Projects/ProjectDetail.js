import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projects } from '../../data/projects';
import { PrimaryButton } from '../common/Button';
import TechStack from './TechStack';
import PageTitle from '../common/PageTitle';

const Container = styled.div`
  max-width: 1200px;
  margin: 6rem auto 2rem;
  padding: 2rem;
  min-height: calc(100vh - 6rem);

  @media (max-width: 768px) {
    margin-top: 5rem;
    padding: 1rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    color: var(--accent-color);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain;
  display: block;
`;

const GalleryVideo = styled.video`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain;
  display: block;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  max-width: 95vw;
  max-height: 95vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalMedia = styled.div`
  img, video {
    max-width: 95vw;
    max-height: 90vh;
    object-fit: contain;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [selectedMedia, setSelectedMedia] = useState(null);

  if (!project) {
    return (
      <Container>
        <BackButton to="/projects">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Projects
        </BackButton>
        <PageTitle title="Project Not Found" subtitle="The project you're looking for doesn't exist." />
      </Container>
    );
  }

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedMedia(null);
    }
  };

  const isVideo = (filename) => {
    return /\.(mp4|webm|ogg)$/i.test(filename);
  };

  return (
    <Container>
      <BackButton to="/projects">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Projects
      </BackButton>

      <PageTitle title={project.title} />

      <Description>{project.description}</Description>

      <ImageGallery>
        {project.images.map((media, index) => (
          <MediaContainer key={index} onClick={() => handleMediaClick(media)}>
            {isVideo(media) ? (
              <GalleryVideo
                src={media}
                controls
                preload="metadata"
              />
            ) : (
              <GalleryImage
                src={media}
                alt={`${project.title} - Image ${index + 1}`}
                loading="lazy"
              />
            )}
          </MediaContainer>
        ))}
      </ImageGallery>

      <TechStack technologies={project.technologies} />

      <ButtonContainer>
        <PrimaryButton
          as="a"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          View on GitHub
        </PrimaryButton>
      </ButtonContainer>

      {selectedMedia && (
        <Modal onClick={handleModalClick}>
          <ModalContent>
            <ModalMedia>
              {isVideo(selectedMedia) ? (
                <video
                  src={selectedMedia}
                  controls
                  autoPlay
                  preload="auto"
                />
              ) : (
                <img
                  src={selectedMedia}
                  alt={project.title}
                  loading="eager"
                />
              )}
            </ModalMedia>
            <CloseButton onClick={() => setSelectedMedia(null)}>×</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ProjectDetail; 