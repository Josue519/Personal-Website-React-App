import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faPhone, faTimes, faEnvelope, faUserPlus } from '@fortawesome/free-solid-svg-icons';
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
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 320px;
  width: 100%;
  overflow: hidden;
  padding: 0;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

const Header = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 800px;
  padding: 0 1rem;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
  background: linear-gradient(to right, #67e8f9, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const ProfileSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

const ProfileContainer = styled.div`
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  margin: 0;
  perspective: 1000px;
  cursor: pointer;
  isolation: isolate;
  transition: transform 0.3s ease;
  z-index: 3;

  &:hover {
    transform: translateX(-50%) translateY(-5px);
  }

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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: calc(320px + 140px);
  gap: 2rem;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Name = styled.h2`
  font-size: 2.25rem;
  margin: 0;
  background: linear-gradient(to right, #67e8f9, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

const JobTitle = styled.div`
  font-size: 1.25rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 300;
  margin: 0;
`;

const CodeTag = styled.span`
  opacity: 0.7;
  font-weight: 400;
`;

const ActionContainer = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 9999px;
  padding: 0.4rem;
  width: min(380px, 90%);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 1rem 0;
  margin-top: auto;
  margin-bottom: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

const GradientButton = styled.button`
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  border: none;
  border-radius: 9999px;
  background: linear-gradient(135deg, #4fd1c5 0%, #7c3aed 100%);
  color: white;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
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
`;

const ExternalButton = styled(GradientButton).attrs({ as: 'a' })`
  background: rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: #67e8f9;
    transform: translateY(-2px);
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

function BusinessCard({ onSpecialtiesClick }) {
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

  const createContact = async () => {
    try {
      const contact = {
        name: 'Josue Marante',
        jobTitle: 'Web Developer',
        phone: '+1 (813) 993-6765',
        email: 'marantefitness@gmail.com',
        website: 'https://josuemarante.com',
        photo: '/DSC05202.jpg'
      };

      if ('contacts' in navigator) {
        await navigator.contacts.create({
          name: contact.name,
          tel: contact.phone,
          email: contact.email,
          jobTitle: contact.jobTitle,
          url: contact.website
        });
        alert('Contact saved successfully!');
      } else {
        // Fallback for browsers that don't support the Contacts API
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TITLE:${contact.jobTitle}
TEL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.website}
NOTE:Web Developer specializing in tech solutions that elevate your business.
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${contact.name}.vcf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error creating contact:', error);
      alert('Failed to create contact. Please try again.');
    }
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
          <ProfileContainer $isFlipped={isProfileFlipped} onClick={toggleProfileFlip}>
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

          <MainContent>
            <NameSection>
              <Name>Josue Marante</Name>
              <JobTitle>
                <CodeTag>&lt;/&gt;</CodeTag>
                Web Developer
              </JobTitle>
            </NameSection>

            <ActionContainer>
              <ActionButtons>
                <GradientButton onClick={onSpecialtiesClick}>
                  Specialties
                </GradientButton>
                <ExternalButton 
                  href="https://calendly.com/marantefitness/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Meeting
                </ExternalButton>
              </ActionButtons>
            </ActionContainer>

            <SocialLinks>
              <SocialIcon href="https://josuemarante.com" target="_blank">
                <FontAwesomeIcon icon={faGlobe} />
              </SocialIcon>
              <SocialIcon href="#" onClick={(e) => { e.preventDefault(); createContact(); }}>
                <FontAwesomeIcon icon={faUserPlus} />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/josue-marante-0399321b5" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialIcon>
            </SocialLinks>
          </MainContent>
        </ProfileSection>
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