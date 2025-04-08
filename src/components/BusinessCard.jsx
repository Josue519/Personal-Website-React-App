import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faPhone, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const BusinessCardContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 48vh;
  width: 100%;
  overflow: hidden;
  padding: 1rem;
`;

const GradientCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, #2694f4bb 0%, #7948c892 100%);
  border-radius: 0 0 5rem 5rem;
  transform: perspective(1000px) rotateX(1deg);
  transform-origin: top;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding-bottom: 2rem;
`;

const Header = styled.div`
  margin-top: 2.5rem;
  max-width: 650px;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: transparent;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.98),
    rgba(192, 185, 222, 0.95),
    rgba(242, 181, 235, 0.601)
  );
  -webkit-background-clip: text;
  background-clip: text;
  animation: slideUp 1s ease-out forwards,
             gradientFlow 8s ease infinite;
  opacity: 0;
  transform: translateY(20px);

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes gradientFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const ProfileSection = styled.div`
  margin: 0;
  padding-top: calc(35vh - 120px);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto;
  perspective: 1000px;
  cursor: pointer;
  isolation: isolate;
  transform: ${props => props.isFlipped ? 'translateY(-5px)' : 'none'};
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -45px;
    border-radius: 50%;
    background: rgba(103, 232, 249, 0.02);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1;
    pointer-events: none;
    opacity: 0.8;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 640px) {
    width: 180px;
    height: 180px;

    &::before {
      inset: -35px;
    }
  }
`;

const ProfileCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 2;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'none'};
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 30px rgba(103, 232, 249, 0.12);
`;

const ProfileCardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 30px rgba(103, 232, 249, 0.12);
`;

const ProfileCardBack = styled(ProfileCardSide)`
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #2694f4bb 0%, #7948c892 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ProfilePhoto = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.02);
`;

const Name = styled.h2`
  font-size: 3.25rem;
  margin: 2rem 0 0.5rem;
  background: linear-gradient(to right, #67e8f9, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  letter-spacing: -0.02em;
  padding-top: 2rem;
`;

const JobTitle = styled.div`
  font-size: 1.75rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  font-weight: 300;
`;

const CodeTag = styled.span`
  opacity: 0.7;
  font-weight: 400;
`;

const ActionContainer = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 9999px;
  padding: 0.5rem;
  margin: 4rem 0;
  min-width: 380px;
  overflow: hidden;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const GradientButton = styled(Link)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 9999px;
  background: linear-gradient(135deg, #4fd1c5 0%, #7c3aed 100%);
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.01em;
  white-space: nowrap;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 25px rgba(79, 209, 197, 0.4),
                0 0 10px rgba(124, 58, 237, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(79, 209, 197, 0.2), 
      rgba(124, 58, 237, 0.2)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 9999px;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: auto;
  padding-top: 2rem;
  position: relative;
  bottom: 0;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 2rem;
  opacity: 0.9;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    text-shadow: 0 0 20px rgba(28, 255, 232, 0.6),
                 0 0 30px rgba(164, 113, 251, 0.4);
  }
`;

const ContactPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  background: rgba(23, 25, 35, 0.8);
  backdrop-filter: blur(12px);
  padding: 1.5rem 2rem;
  border-radius: 1.25rem;
  z-index: 100;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  min-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  transform: ${props => props.isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.95)'};
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 99;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.3s ease;
  font-size: 1.25rem;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

function BusinessCard() {
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);
  const [isContactPopupVisible, setIsContactPopupVisible] = useState(false);

  const toggleProfileFlip = () => {
    setIsProfileFlipped(!isProfileFlipped);
  };

  const showContactPopup = () => {
    setIsContactPopupVisible(true);
  };

  const hideContactPopup = () => {
    setIsContactPopupVisible(false);
  };

  return (
    <BusinessCardContainer>
      <CardBackground>
        <GradientCard />
      </CardBackground>
      
      <Content>
        <Header>
          <Title>Tech Solutions That Elevate Your Business.</Title>
        </Header>
        
        <ProfileSection>
          <ProfileContainer isFlipped={isProfileFlipped} onClick={toggleProfileFlip}>
            <ProfileCard isFlipped={isProfileFlipped}>
              <ProfileCardSide>
                <ProfilePhoto>
                  <ProfileImage src="/DSC05202.jpg" alt="Profile Photo" />
                </ProfilePhoto>
              </ProfileCardSide>
              <ProfileCardBack>
                <FontAwesomeIcon icon={faCode} size="3x" />
                <span>Full Stack Developer</span>
              </ProfileCardBack>
            </ProfileCard>
          </ProfileContainer>
          <Name>Josue Marante</Name>
          <JobTitle>
            <CodeTag>&lt;/&gt;</CodeTag>
            Web Developer
          </JobTitle>
        </ProfileSection>

        <ActionContainer>
          <ActionButtons>
            <GradientButton to="/specialties">
              Specialties
            </GradientButton>
            <GradientButton href="https://calendly.com/marantefitness/30min" target="_blank">
              Book Meeting
            </GradientButton>
          </ActionButtons>
        </ActionContainer>

        <SocialLinks>
          <SocialIcon href="https://josuemarante.com" target="_blank">
            <FontAwesomeIcon icon={faGlobe} />
          </SocialIcon>
          <SocialIcon href="#" onClick={(e) => { e.preventDefault(); showContactPopup(); }}>
            <FontAwesomeIcon icon={faPhone} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/josue-marante-0399321b5" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </SocialLinks>
      </Content>

      <PopupOverlay isVisible={isContactPopupVisible} onClick={hideContactPopup} />
      <ContactPopup isVisible={isContactPopupVisible}>
        <CloseButton onClick={hideContactPopup}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <h3>Contact Information</h3>
        <ContactInfo>
          <ContactItem>
            <FontAwesomeIcon icon={faPhone} />
            <span>+1 (813) 993-6765</span>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>marantefitness@gmail.com</span>
          </ContactItem>
        </ContactInfo>
      </ContactPopup>
    </BusinessCardContainer>
  );
}

export default BusinessCard; 