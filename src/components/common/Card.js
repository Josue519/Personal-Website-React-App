// import { h1 } from 'framer-motion/client';
import styled from 'styled-components';

const Card = styled.div`
  background: var(--card-gradient);
  border-radius: 10px;
  box-shadow: 0 4px 20px var(--shadow);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  padding: 20px;
  margin: 10px 0;

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

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px var(--glow-effect), 0 10px 25px var(--shadow-hover);
  }
`;

export default Card; 