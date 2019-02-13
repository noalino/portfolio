import React from 'react';
import randomize from '../../utils/randomize';

import styles from '../../styles/layout/layout.module.scss';

const Background = () => {
  // Create dots with random position & size
  const dots = [];
  for(let i = 0; i < 15; i++) {
    const posX = randomize(2, 98, '%');
    const posY = randomize(5, 95, '%');
    const size = randomize(3, 10, 'px');
    dots.push(
      <div
        key={i}
        className={styles.dot}
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
    <div>
      {dots}
    </div>
  );
};

export default Background;