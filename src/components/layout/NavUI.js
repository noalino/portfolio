import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/layout/navui.module.scss';

const NavUI = ({ menuLinks, pageIndex }) => (
  <div className={styles.line}>
    {menuLinks.map(({ name }, i) => (
      <div
        key={name}
        className={`${styles.tag} ${styles[`tag_${i + 1}`]}`}
        page={i === pageIndex ? 'current' : ''}
      />
    ))}
  </div>
);

NavUI.propTypes = {
  menuLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  // path: PropTypes.string.isRequired,
  pageIndex: PropTypes.number.isRequired,
};

export default NavUI;
