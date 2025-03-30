import styled from 'styled-components';

// Base button styles
const ButtonBase = styled.a`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-size: var(--fs-body); // Use global variable for font size
  font-weight: var(--fw-bold); // Use global variable for font weight
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Primary button styles
export const PrimaryButton = styled(ButtonBase)`
  background-color: var(--clr-accent);
  color: white;
  border: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

// Secondary button styles
export const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--clr-dark);
  border: 2px solid var(--clr-accent);

  &:hover {
    background-color: var(--clr-accent);
    color: white;
  }
`; 