import React from 'react';

import SEO from '../components/seo';
import Skill from '../components/Skill';
import skills from '../utils/skills';

import styles from '../styles/pages/what-i-do.module.scss';

const Skills = () => (
  <div className={styles.container}>
    <SEO title="Skills" />
    <h1>What I do.</h1>
    <div className={styles.list_skills}>
      {skills.map(({ name, tools, description }) => (
        <Skill
          key={name}
          name={name}
          tools={tools}
          description={description}
        />
      ))}
    </div>
  </div>
);

export default Skills;
