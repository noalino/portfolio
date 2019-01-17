import React from 'react';
import { Link } from 'gatsby';

import NavbarContext from '../../utils/navbar-context';

import styles from '../../styles/layout/header.module.scss';
// Optimize SVG (SVG Optimizer) and use inline SVG? (color control)
import logo from '../../images/logo.svg';

const Header = () => (
  <NavbarContext.Consumer>
    {({ showNav, toggleNavbar }) => (
      <header id={styles.header}>
        <Link
          to="/"
          className={styles.logo}
          tabIndex={showNav ? -1 : null}
          aria-disabled={showNav}
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
          tabIndex={showNav ? -1 : null}
          aria-disabled={showNav}
        >
          <div className={styles.menu_btn_icon} />
        </button>
      </header>
    )}
  </NavbarContext.Consumer>
);

export default Header;
