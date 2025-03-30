import styled from 'styled-components';

const Tag = styled.span`
  background-color: var(--tag-bg);
  color: var(--tag-text);
  padding: ${({ $size }) => $size === 'large' ? '0.5rem 1rem' : '0.3rem 0.8rem'};
  border-radius: 20px;
  font-size: ${({ $size }) => $size === 'large' ? '0.9rem' : '0.8rem'};
  font-weight: 400;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--glow-effect);
  }
`;

export default Tag; 