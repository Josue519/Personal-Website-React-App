import styled from 'styled-components';

// Base button styles
const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-size: clamp(0.8rem, 1.2vw, 0.95rem);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: var(--glass-blur);
  border: 1px solid transparent;
  min-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: none;
  color: inherit;
  font-family: inherit;
  line-height: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(var(--clr-accent-rgb), 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(var(--clr-accent-rgb), 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
    min-width: 100px;
  }

  svg {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }
`;

// Primary button styles
export const PrimaryButton = styled(ButtonBase)`
  background: var(--card-gradient);
  color: var(--text-primary);
  border: 1px solid var(--glass-border);

  &:hover {
    border-color: var(--clr-accent);
    background: linear-gradient(
      135deg,
      rgba(var(--clr-accent-rgb), 0.1),
      rgba(var(--clr-accent-rgb), 0.05)
    );
  }
`;

// Secondary button styles
export const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  color: var(--clr-accent);
  border: 1px solid var(--clr-accent);

  &:hover {
    background: var(--card-gradient);
    color: var(--text-primary);
    border-color: var(--glass-border);
  }
`; 