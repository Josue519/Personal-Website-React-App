import React from 'react';
import styled, { keyframes } from 'styled-components';
import GlassEffect from './Shared/GlassEffect';
import SectionTitle from './Shared/SectionTitle';
import Card from './common/Card';

const AboutContainer = styled.div`
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  max-width: 600px;
  text-align: left;

  h2 {
    font-size: var(--fs-h2);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--clr-accent), ${({ theme }) => theme.text});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: var(--fs-body);
    line-height: 1.8;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 287.5px;
  height: 287.5px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(31, 38, 135, 0.2);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform, box-shadow;
  backface-visibility: hidden;

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

const HighlightsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const HighlightItem = styled(Card)`
  padding: 0.75rem 1.5rem;
  text-align: center;
  font-weight: 500;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
`;

// Organic shapes for the background
const bubbleFloat = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.05);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const OrganicShape = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.shapeBackground};
  border-radius: 50%;
  filter: blur(20px);
  animation: ${bubbleFloat} 10s ease-in-out infinite;
  z-index: 0;
`;

const AboutTitle = styled.h2`
  font-size: var(--fs-h2); /* Use global variable */
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const OverlappingShape = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background-color: rgba(76, 110, 245, 0.08);
  z-index: 1;
  filter: blur(20px);
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <OverlappingShape />
      <OrganicShape style={{ top: '10%', left: '10%' }} />
      <OrganicShape style={{ bottom: '10%', right: '10%' }} />
      <AboutContent>
        <ImageContainer>
          <img src="/DSC05202.jpg" alt="Josue Marante" />
        </ImageContainer>
        <AboutText>
          <SectionTitle>About Me</SectionTitle>
          <p>
            I am a Technology Consultant, Software Developer, and Certified Personal Trainer. 
            My unique combination of skills allows me to bridge the gap between technology 
            and wellness, creating innovative solutions that enhance both digital and physical well-being.
          </p>
          <p>
            With experience in customer service, technical support, and software development, 
            I bring a comprehensive approach to problem-solving and client satisfaction. 
            My bilingual capabilities in English and Spanish enable me to connect with 
            and serve a diverse client base effectively.
          </p>
            <HighlightsList>
              <HighlightItem>Driven</HighlightItem>
              <HighlightItem>Analytical</HighlightItem>
              <HighlightItem>Empathetic</HighlightItem>
              <HighlightItem>Creative</HighlightItem>
              <HighlightItem>Resilient</HighlightItem>
              <HighlightItem>Detail-Oriented</HighlightItem>
            </HighlightsList>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection; 