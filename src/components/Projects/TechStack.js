import React from 'react';
import styled from 'styled-components';

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
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

const TechStack = ({ technologies }) => {
  return (
    <TechStackContainer>
      {technologies.map((tech, index) => (
        <TechTag key={index}>{tech}</TechTag>
      ))}
    </TechStackContainer>
  );
};

export default TechStack; 