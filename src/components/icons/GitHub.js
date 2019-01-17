import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/icons.module.scss';

const GitHub = ({ showNav }) => (
  <a
    href="https://github.com/benoitgelineau"
    className={styles.link}
    tabIndex={showNav ? -1 : null}
    aria-disabled={showNav}
  >
    <svg
      version="1.1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.icon}
    >
      <path d="m39.6 54.8c9.5-3.2 16.3-12.2 16.3-22.8 0-13.2-10.7-24-23.9-24s-23.9 10.8-23.9 24c0 10.6 6.9 19.6 16.4 22.8 1.2 0.2 1.6-0.5 1.6-1.2v-2.7c0-0.7-0.6-1.3-1.4-1.2-5.5 0.6-6.7-3.4-6.7-3.4-1.1-2.8-2.7-3.5-2.7-3.5-2.2-1.5 0.2-1.5 0.2-1.5 2.4 0.2 3.7 2.5 3.7 2.5 1.8 3.2 4.7 2.8 6.3 2.3 0.4-0.1 0.7-0.5 0.8-0.9s0.2-0.8 0.4-1.1c0.3-0.7-0.1-1.6-0.9-1.7-4.7-0.9-9-3.5-9-11.6 0-2.2 0.6-4 1.7-5.5 0.4-0.6 0.6-1.3 0.4-2-0.2-0.8-0.3-2 0-3.4 0.2-1.3 1.6-2.1 2.8-1.7 0.9 0.3 2 0.8 3.5 1.7 0.6 0.4 1.3 0.5 1.9 0.3 1.6-0.4 3.3-0.5 4.9-0.5 1.7 0 3.3 0.2 4.9 0.5 0.7 0.1 1.4 0.1 1.9-0.3 1.4-0.9 2.5-1.4 3.4-1.6 1.3-0.4 2.7 0.4 2.9 1.8s0.1 2.5 0 3.3c-0.1 0.7 0 1.4 0.4 2 1.1 1.5 1.7 3.4 1.7 5.5 0 8.1-4.3 10.7-9 11.6-0.8 0.1-1.2 1-0.9 1.7 0.4 0.8 0.6 1.8 0.6 3v6.6c0 0.5 0.5 1.2 1.7 1z" />
    </svg>
  </a>
);

GitHub.propTypes = {
  showNav: PropTypes.bool.isRequired,
};

export default GitHub;
