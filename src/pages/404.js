import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import { NavbarContext } from '../utils/context';

import styles from '../styles/pages/404.module.scss';

const NotFoundPage = () => (
  <NavbarContext.Consumer>
    {({ showNav }) => (
      <div className={styles.container}>
        <SEO title="404: Not found" />
        <h1>Are you lost?</h1>
        <p>
          {`Go back `}
          <Link
            to="/"
            tabIndex={showNav ? -1 : null}
            aria-disabled={showNav}
          >
            Home
          </Link>
        </p>
      </div>
    )}
  </NavbarContext.Consumer>
);

export default NotFoundPage;
