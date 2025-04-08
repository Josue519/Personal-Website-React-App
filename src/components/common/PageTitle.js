import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--clr-accent);
    border-radius: 2px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: var(--clr-primary);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: -0.3px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: -0.2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--clr-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const PageTitle = ({ title, subtitle }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
  );
};

export default PageTitle; 