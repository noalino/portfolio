import React from 'react';
import { Link } from 'gatsby';

import NavbarContext from '../utils/navbar-context';

import GitHub from '../components/icons/GitHub';
import LinkedIn from '../components/icons/LinkedIn';
import Twitter from '../components/icons/Twitter';

import styles from '../styles/pages/index.module.scss';
// import Image from '../components/image';
// import SEO from '../components/seo';

const Home = () => (
  <NavbarContext.Consumer>
    {({ showNav }) => (
      <div className={styles.container}>
        {/* <SEO title="Home" keywords={['gatsby', 'application', 'react']} /> */}
        <h1>BENOIT GELINEAU</h1>
        <h2>FULL STACK JAVASCRIPT DEVELOPER</h2>
        <h3>REACT | NODE | EXPRESS | MONGODB</h3>
        <Link
          to="/contact"
          className={styles.contact_btn}
          tabIndex={showNav ? -1 : null}
          aria-disabled={showNav}
        >
          CONTACT ME
        </Link>
        <div className={styles.icons}>
          {/* Set personal links & refactor to SocialIcon */}
          <GitHub showNav={showNav} />
          <LinkedIn showNav={showNav} />
          <Twitter showNav={showNav} />
        </div>
      </div>
    )}
  </NavbarContext.Consumer>
);

export default Home;
