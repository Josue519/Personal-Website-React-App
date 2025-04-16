import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  position: relative;
  padding: 3rem !important;
  margin: 2rem auto !important;
  max-width: 1200px;
  width: 90%;
  text-align: center;
  background: var(--card-gradient);
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-radius: 20px !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15) !important;
  z-index: 1;
`;

const TitleContent = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem) !important;
  font-weight: 700 !important;
  text-align: center;
  margin: 0 !important;
  padding: 0 1rem;
  background: linear-gradient(to right, #67e8f9, #818cf8) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  line-height: 1.2 !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  color: transparent !important;
`;

const SubtitleContent = styled.h2`
  font-size: clamp(1rem, 2.5vw, 1.5rem) !important;
  color: var(--text-primary);
  opacity: 50% !important;
  margin-top: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
`;

function PageTitle({ title, subtitle, children }) {
  return (
    <TitleContainer>
      <TitleContent>{title || children}</TitleContent>
      {subtitle && <SubtitleContent>{subtitle}</SubtitleContent>}
    </TitleContainer>
  );
}

export default PageTitle; 