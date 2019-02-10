import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import DesignIcon from './icons/skills/DesignIcon';
import DevelopIcon from './icons/skills/DevelopIcon';
import DeployIcon from './icons/skills/DeployIcon';

import styles from '../styles/skill.module.scss';

const Skill = ({ name, tools, description }) => {
  const skills = {
    design: DesignIcon,
    develop: DevelopIcon,
    deploy: DeployIcon,
  };
  const Icon = skills[name];

  return (
    <div
      className={styles.skill}
      data-skill={name}
    >
      <Icon />
      <h4>{_.capitalize(name)}</h4>
      <ul>
        {tools.map(tool => <li key={tool}>{tool}</li>)}
      </ul>
      <p>{description}</p>
    </div>
  )
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
};

export default Skill;
