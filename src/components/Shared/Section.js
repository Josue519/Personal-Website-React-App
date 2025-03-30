import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  height: ${({ $fullHeight }) => $fullHeight ? '100vh' : 'auto'};
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const Section = ({ children, fullHeight = false, ...props }) => {
  return (
    <SectionContainer $fullHeight={fullHeight} {...props}>
      {children}
    </SectionContainer>
  );
};

export default Section; 