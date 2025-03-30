// src/components/shared/FloatingShape.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
  background: ${({ $gradient }) => $gradient || 'linear-gradient(135deg, var(--clr-primary), var(--clr-secondary))'};
  width: ${({ $size }) => $size || '300px'};
  height: ${({ $size }) => $size || '300px'};
  opacity: 0.6;
`;

const FloatingShape = ({ position, size, gradient, delay = 0 }) => {
  return (
    <Shape
      $size={size}
      $gradient={gradient}
      style={position}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 0.6,
        x: [0, 20, 0],
        y: [0, -30, 0]
      }}
      transition={{
        duration: 15,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "reverse",
        delay
      }}
    />
  );
};

export default FloatingShape;