import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import { NavbarContext } from '../utils/context';

import styles from '../styles/pages/success.module.scss';

const Success = () => (
  <NavbarContext.Consumer>
    {({ showNav }) => (
      <div className={styles.container}>
        <SEO title="Success" />
        <h1>Thank you!</h1>
        <p>I&apos;ll come back to you very soon.</p>
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

export default Success;
