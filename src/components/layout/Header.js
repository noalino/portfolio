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
              tabIndex={(showNav || showProject) ? -1 : null}
              aria-label="Go to homepage"
              aria-disabled={showNav || showProject}
            >
              <Logo />
            </Link>
            <button
              type="button"
              className={styles.menu}
              onClick={toggleNavbar}
              tabIndex={(showNav || showProject) ? -1 : null}
              aria-label="Open navigation"
              aria-disabled={showNav || showProject}
            >
              <i className={styles.menu__icon} />
            </button>
          </header>
        )}
      </ProjectContext.Consumer>
    )}
  </NavbarContext.Consumer>
);

export default Header;
