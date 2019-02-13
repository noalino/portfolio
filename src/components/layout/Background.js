import React from 'react';
import Particles from 'react-particles-js';

import params from '../../utils/particles-config';
import styles from '../../styles/layout/layout.module.scss';

const Background = () => (
  <Particles
    canvasClassName={styles.background}
    params={params}
  />
);

export default Background;