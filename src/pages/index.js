import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';
import SocialIcon from '../components/icons/social-media/SocialIcon';
import { NavbarContext } from '../utils/context';
import socialMedia from '../utils/socialMedia';

import styles from '../styles/pages/index.module.scss';

const Home = () => (
  <NavbarContext.Consumer>
    {({ showNav }) => (
      <div className={styles.container}>
        <SEO title="Home" />
        <h1>Benoît Gelineau</h1>
        <h2>Web developer</h2>
        {/* <h2>FULL STACK JAVASCRIPT DEVELOPER</h2>
        <h3>REACT | NODE | EXPRESS | MONGODB</h3> */}
        <Link
          to="/contact"
          className={styles.contact_btn}
          tabIndex={showNav ? -1 : null}
          aria-disabled={showNav}
        >
          Contact Me
        </Link>
        <div className={styles.icons}>
          {socialMedia.map(({ name, url }) => (
            <SocialIcon
              key={name}
              name={name}
              link={url}
              showNav={showNav}
            />
          ))}
        </div>
      </div>
    )}
  </NavbarContext.Consumer>
);

export default Home;
