import React from 'react';

// import SEO from '../components/seo';
import DesignIcon from '../components/icons/skills/DesignIcon';
import DevelopIcon from '../components/icons/skills/DevelopIcon';
import DeployIcon from '../components/icons/skills/DeployIcon';

import styles from '../styles/pages/what-i-do.module.scss';

const Work = () => (
  <div className={styles.container}>
    {/* <SEO title="Page two" /> */}
    <h1>What I do.</h1>
    <div className={styles.list_skills}>
      <div
        className={styles.skill}
        skill="design"
      >
        <DesignIcon className={styles.icon} />
        <h4>Design</h4>
        <ul>
          <li>Pen &amp; Paper</li>
          <li>Sketch</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
        <p>My motto: the simpler the better. I design clean user interfaces  that help conveying the message that you want to send.</p>
      </div>
      <div
        className={styles.skill}
        skill="develop"
      >
        <DevelopIcon className={styles.icon} />
        <h4>Develop</h4>
        <ul>
          <li>VS Code</li>
          <li>Terminal</li>
          <li>CodePen</li>
          <li>Postman</li>
        </ul>
        <p>I know how to create your website to run across browsers and devices using the latest technologies available.</p>
      </div>
      <div
        className={styles.skill}
        skill="deploy"
      >
        <DeployIcon className={styles.icon} />
        <h4>Deploy</h4>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Heroku</li>
          <li>Netlify</li>
          <li>mLab</li>
        </ul>
        <p>Before making/putting it live on the Internet, I optimize your website to ensure user experience is as flawless as possible.</p>
      </div>
    </div>
  </div>
);

export default Work;
