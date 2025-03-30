import React, { useEffect, useState, useContext } from 'react';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from './common/Button'; 
import '../styles/globals.css'; // Corrected import path
import { ThemeContext } from '../context/ThemeContext';

// Global styles for light mode
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff; /* Light background for light mode */
    color: #333333; /* Darker text for contrast */
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
  }
  a {
    color: #1a73e8; /* Accent color for links */
  }
`;

// Uncomment the necessary keyframes
const typewriterAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkCursor = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: var(--clr-accent);
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`;

const rotateClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateCounterClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column-reverse; /* Stack with image on top */
    padding: 2rem;
    gap: 1rem;
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  backdrop-filter: blur(10px); /* Apply blur effect */
`;

const ShapeSVG = styled.svg`
  position: absolute;
  width: 180%;
  height: 120%;
  fill: var(--clr-accent);
  opacity: 0.08;
  filter: blur(1px);
  transform: rotate(0deg) scale(1) scaleY(1);
  transition: transform 0.1s ease-out;
  will-change: transform;
  filter: blur(10px);
  z-index: 1;
`;

// Left side content section
const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 500px;
  z-index: 1; /* Lower z-index for content */
  
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    max-width: 100%;
    margin-top: 1rem;
  }
`;

// Clean, modern title
const Title = styled.h1`
  font-size: var(--fs-h1);
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust for smaller screens */
  }
`;

// Subtitle with typewriter effect
const TypewriterContainer = styled.div`
  position: relative;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  height: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    height: 2rem;
  }
`;

const TypewriterText = styled.span`
  position: relative;
  color: var(--clr-accent);
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  border-right: 3px solid var(--clr-accent);
  animation: 
    ${props => props.isTyping ? css`
      ${typewriterAnimation} ${props => props.typingDuration || '4s'} steps(${props => props.steps || 50}, end),
      ${blinkCursor} 0.75s step-end infinite
    ` : css`
      ${blinkCursor} 0.75s step-end infinite
    `};
`;

// Bio text
const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--clr-text-light);
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

// Buttons container
const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

// Social links container
const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
`;

// Social link
const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--clr-text);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-accent) 100%);
    color: #fff;
    box-shadow: 0 10px 20px rgba(31, 38, 135, 0.2);
  }
`;

// Clean, simplified ProfileImage styling
const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  border-radius: 10px;
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const ShapeContainer = styled.div`
  position: relative;
  overflow: visible;
  min-height: 100h; // Increase height
`;

const OverlappingShape = styled.div`
  position: absolute;
  top: -20%; // Adjust position
  right: -20%;
  width: 100%; // Increase size
  height: 120%;
  border-radius: 50%;
  background-color: rgba(76, 110, 245, 0.08);
  z-index: 1;
  filter: blur(10px);
`;

const DecorativeLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--clr-accent);
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    position: relative;
    
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  width: 85%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
`;

const ProfileSection = () => {
  const { darkMode } = useContext(ThemeContext);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    "UI/UX Designer",
    "Technology Consultant",
    "Software Developer",
    "Certified Personal Trainer",
    "Front-End Developer",
    "Cloud Services Specialist",
    "API Integration Expert",
    "Nutrition Coach",
    "Content Creator",
    "Event Planner"
  ];
  
  useEffect(() => {
    const typingDuration = 4000; // 4 seconds for typing
    const displayDuration = 2000; // 2 seconds to display the full text
    const eraseDuration = 1500; // 1.5 seconds for erasing
    
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
      
      const eraseTimer = setTimeout(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }, eraseDuration);
      
      return () => clearTimeout(eraseTimer);
    }, typingDuration + displayDuration);
    
    return () => clearTimeout(typingTimer);
  }, [titleIndex, titles.length]);
  
  return (
    <ShapeContainer>
      <OverlappingShape />
      <GlobalStyle />
      <HeroContainer>
        <BackgroundShapes>
          <ShapeSVG 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ left: '-30%', top: '-30%'}}
          >
            <path d="M42.9,-57.1C53.9,-46.7,63.5,-34.2,68.8,-19.5C74.1,-4.8,75.1,12.1,69.3,26.5C63.5,40.9,50.9,52.8,36.3,60.9C21.7,69,5.1,73.3,-11.9,72.5C-28.9,71.7,-46.3,65.8,-59.1,53.3C-71.9,40.8,-80.1,21.7,-79.9,2.8C-79.7,-16.1,-71.1,-32.1,-58.9,-42.1C-46.7,-52.1,-30.9,-56.1,-15.8,-61.4C-0.7,-66.7,14.7,-73.3,29.5,-65.5C44.3,-57.7,29.5,-65.5,42.9,-57.1Z" transform="translate(100 100) scale(1, 1.3)" />
          </ShapeSVG>
        </BackgroundShapes>
        
        {/* Left side content */}
        <ContentSection id="about-me">
          <Title>Josue Marante</Title>
          <TypewriterContainer>
            <TypewriterText 
              isTyping={isTyping} 
              typingDuration="4s"
              steps={titles[titleIndex].length * 3}
            >
              {titles[titleIndex]}
            </TypewriterText>
          </TypewriterContainer>
          <BioText>
            I am a Technology Consultant, Software Developer, and Certified Personal Trainer. 
            I offer a wide range of services that integrate technology, business consulting, 
            and health & wellness. My expertise spans software development, IT infrastructure 
            consulting, process optimization, and personal training, allowing me to provide 
            customized solutions for both businesses and individuals.
          </BioText>
          <ButtonsContainer>
            <PrimaryButton 
              href="/Josue_Marante_2025.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </PrimaryButton>
            <SecondaryButton href="mailto:marantefitness@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Me
            </SecondaryButton>
          </ButtonsContainer>
          <SocialLinks>
            <SocialLink href="https://github.com/Josue519" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/josue-marante-0399321b5" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/josuemarante/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </SocialLink>
          </SocialLinks>
        </ContentSection>
        
        {/* Simplified Image Section - Just the image */}
        <ProfileImage 
          src="/ProfileImage.png" 
          alt="Profile"
          onError={(e) => {
            console.error("Profile image failed to load");
            e.target.src = "/fallback-profile.png"; // Optional fallback
          }}
        />
      </HeroContainer>
    </ShapeContainer>
  );
};

export default ProfileSection; 