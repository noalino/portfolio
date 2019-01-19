import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';

import styles from '../../../styles/icons.module.scss';

class SocialIcon extends Component {
  icons = {
    github: GitHub,
    linkedin: LinkedIn,
    twitter: Twitter,
  }

  render() {
    const { name, link, showNav } = this.props;
    const Icon = this.icons[name];

    return (
      <a
        href={link}
        className={styles.link}
        tabIndex={showNav ? -1 : null}
        aria-disabled={showNav}
      >
        <Icon className={styles.icon} />
      </a>
    );
  }
}

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  showNav: PropTypes.bool.isRequired,
};

export default SocialIcon;
