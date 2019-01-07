import React from 'react';
import { Link } from 'gatsby';

import GitHub from '../components/icons/GitHub';
import LinkedIn from '../components/icons/LinkedIn';
import Twitter from '../components/icons/Twitter';

import styles from '../styles/pages/index.module.scss';
// import Image from '../components/image';
// import SEO from '../components/seo';
// import Home from '../components/pages/Home';
// import About from '../components/pages/About';

const Index = () => (
  <div className={styles.content}>
    {/* <SEO title="Home" keywords={['gatsby', 'application', 'react']} /> */}
    <h1>BENOIT GELINEAU</h1>
    <h2>FULL STACK JAVASCRIPT DEVELOPER</h2>
    <h3>REACT | NODE | EXPRESS | MONGODB</h3>
    <Link
      to="/contact"
      className={styles.contact_btn}
    >
      CONTACT ME
    </Link>
    <div className={styles.icons}>
      {/* Set personal links & refactor to SocialIcon */}
      <GitHub />
      <LinkedIn />
      <Twitter />
    </div>
  </div>
);

export default Index;
