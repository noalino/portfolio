import React from 'react';
import randomize from '../../utils/randomize';

const Background = ({ className }) => {
  // Create dots with random position & size
  const dots = [];
  for(let i = 0; i < 15; i++) {
    const posX = randomize(2, 98, '%');
    const posY = randomize(5, 95, '%');
    const size = randomize(3, 10, 'px');
    dots.push(
      <div
        key={i}
        className={className}
        style={{
          top: posY,
          left: posX,
          width: size,
          height: size
        }}
      />
    );
  }

  return dots;
}

export default Background;