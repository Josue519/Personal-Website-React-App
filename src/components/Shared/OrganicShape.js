import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(5px, 10px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const ShapeContainer = styled.div`
  position: absolute;
  width: ${props => props.size || '400px'};
  height: ${props => props.size || '400px'};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  z-index: ${props => props.zIndex || 0};
  opacity: ${props => props.opacity || 0.5};
  transform: translateY(${props => props.$scrollY * props.multiplier}px)
             ${props => props.rotate ? 'rotate(' + (props.$scrollY * 0.05) + 'deg)' : ''};
  animation: ${float} 6s ease-in-out infinite;
  pointer-events: none;
  margin-left: ${props => props.$isLeft ? '10px' : '0'};
`;

const Shape = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${props => props.color || props.theme.accent};
  opacity: 0.1;
`;

const OrganicShape = ({ className, scrollY = 0, multiplier = 1, rotate = false, isLeft, ...props }) => {
  return (
    <ShapeContainer 
      className={className}
      $scrollY={scrollY}
      multiplier={multiplier}
      rotate={rotate}
      $isLeft={isLeft}
      {...props}
    >
      <Shape viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M42.7,-62.9C50.9,-53.3,50.1,-34.9,51.7,-19.2C53.4,-3.5,57.5,9.4,55.6,22.9C53.7,36.4,45.8,50.4,33.4,57.1C21,63.8,4.1,63.2,-12.9,60.6C-29.9,58,-47,53.4,-57.8,42.1C-68.7,30.8,-73.3,12.8,-71.2,-3.9C-69.1,-20.6,-60.3,-35.9,-47.8,-45.4C-35.3,-54.9,-19.1,-58.6,-1.2,-57C16.7,-55.4,34.5,-72.5,42.7,-62.9Z" 
          transform="translate(100 100)"
        />
      </Shape>
    </ShapeContainer>
  );
};

export default OrganicShape; 