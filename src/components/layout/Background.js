import React from 'react';
import PropTypes from 'prop-types';
import randomize from '../../utils/randomize';

const Background = ({ className }) => {
  // Create dots with random position & size
  const dots = [];
  for(let i = 0; i < 15; i++) {
    const posX = randomize(2, 98, '%');
    const posY = randomize(15, 95, '%');
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

  return (
    // <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
    <div>
      {dots}
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Background;