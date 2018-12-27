import React from 'react';
import { Link } from 'gatsby';

import logoGithub from '../images/github.svg';
import logoLinkedin from '../images/linkedin.svg';
import logoTwitter from '../images/twitter.svg';

import styles from '../styles/index.module.scss';
// import Image from '../components/image';
// import SEO from '../components/seo';
// import Home from '../components/pages/Home';
// import About from '../components/pages/About';

const Index = () => (
  <>
    {/* <SEO title="Home" keywords={['gatsby', 'application', 'react']} /> */}
    <h1>BENOIT GELINEAU</h1>
    <h2>FULL STACK JAVASCRIPT DEVELOPER</h2>
    <h3>REACT | NODE | EXPRESS | MONGODB</h3>
    <Link to="/contact">
      CONTACT ME
    </Link>
    <div className={styles.icons}>
      {/* Set personal links */}
      <a href="https://github.com">
        <img src={logoGithub} alt="GitHub" />
      </a>
      <a href="https://linkedin.com">
        <img src={logoLinkedin} alt="LinkedIn" />
      </a>
      <a href="https://twitter.com">
        <img src={logoTwitter} alt="Twitter" />
      </a>
    </div>
  </>
);

export default Index;
