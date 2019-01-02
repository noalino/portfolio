import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from '../../styles/layout/header.module.scss';
// Optimize SVG (SVG Optimizer) and use inline SVG? (color control)
import logo from '../../images/logo.svg';

const Header = ({ toggleNavbar }) => (
  <header className={styles.header}>
    <Link
      to="/"
      className={styles.logo}
    >
      <img
        src={logo}
        alt="Logo"
      />
    </Link>
    <button
      type="button"
      className={styles.menu_btn}
      onClick={toggleNavbar}
    >
      <div className={styles.menu_btn_icon} />
    </button>
  </header>
);

Header.propTypes = {
  toggleNavbar: PropTypes.func.isRequired,
};

export default Header;
