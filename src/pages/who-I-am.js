import React from 'react';

// import SEO from '../components/seo';
import styles from '../styles/pages/who-i-am.module.scss';

const About = () => (
  <div className={styles.container}>
    {/* <SEO title="Page two" /> */}
    <h1>Who I Am.</h1>
    <div>
      <img alt="Benoît Gelineau's head" />
    </div>
    <p>I am a self-taught web developer based in Cholet, France and I enjoy building web applications from scratch when I am not playing drums.</p>
  </div>
);

export default About;
