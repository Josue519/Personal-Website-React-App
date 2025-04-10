// import { h1 } from 'framer-motion/client';
import styled from 'styled-components';

const Card = styled.div`
  background: var(--card-gradient);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-md);
  border: var(--glass-border);
  box-shadow: var(--shadow);
  transition: var(--transition-default);
  padding: var(--spacing-md);
  margin: var(--spacing-sm) 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
    border-color: var(--clr-accent);
  }

  /* Dynamic typography for headings inside cards */
  h1 {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    margin-bottom: 0.8rem;
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.25;
  }

  h3 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    margin-bottom: 0.7rem;
    color: var(--text-primary);
    font-weight: 600;
    line-height: 1.3;
  }

  /* Smaller headings on mobile */
  @media (max-width: 768px) {
    h1 {
      font-size: clamp(1.5rem, 5vw, 1.8rem);
    }
    
    h2 {
      font-size: clamp(1.3rem, 4vw, 1.5rem);
    }
    
    h3 {
      font-size: clamp(1.1rem, 3vw, 1.3rem);
    }
  }
`;

export default Card; 