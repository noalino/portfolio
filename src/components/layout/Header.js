import React from 'react';
import { Link } from 'gatsby';

import Logo from '../icons/Logo';
import { NavbarContext, ProjectContext } from '../../utils/context';

import styles from '../../styles/layout/header.module.scss';

const Header = () => (
  <NavbarContext.Consumer>
    {({ showNav, toggleNavbar }) => (
      <ProjectContext.Consumer>
        {({ showProject }) => (
          <header id={styles.header}>
            <Link
              to="/"
              className={styles.logo}
              tabIndex={(showNav || showProject) ? -1 : null}
              aria-disabled={showNav || showProject}
            >
              <Logo className={styles.icon} />
            </Link>
            <button
              type="button"
              className={styles.menu_btn}
              onClick={toggleNavbar}
              tabIndex={(showNav || showProject) ? -1 : null}
              aria-disabled={showNav || showProject}
            >
              <div className={styles.menu_btn_icon} />
            </button>
          </header>
        )}
      </ProjectContext.Consumer>
    )}
  </NavbarContext.Consumer>
);

export default Header;
