import React from 'react';

// import SEO from '../components/seo';
// import ProfilePicture from '../components/ProfilePicture';
import profile from '../images/profile150x143.png';
import styles from '../styles/pages/who-i-am.module.scss';

const About = () => (
  <div className={styles.container}>
    {/* <SEO title="Page two" /> */}
    <h1>Who I am.</h1>
    {/* <ProfilePicture /> */}
    <img src={profile} alt="Benoît Gelineau" />
    <p>I am a self-taught web developer based in Cholet, France and I enjoy building web applications from scratch when I am not playing drums.</p>
  </div>
);

export default About;
