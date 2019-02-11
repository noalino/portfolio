import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';

import Triangle from '../icons/Triangle';
import ProjectImage from './images/ProjectImage';

import projects from '../../utils/projects';
import descriptions from './descriptions/index';

import styles from '../../styles/projectModal.module.scss';

const ProjectModal = ({ name, closeModal, status }) => {
  const index = projects.findIndex(({ id }) => id === name);
  const { title, role, context, year, links: { site, code } } = projects[index];
  const ProjectDescription = descriptions[name];

  return (
    <>
      <div
        className={styles.container_background}
        onClick={closeModal}
        role="presentation"
        data-status={status}
      />
      <div
        className={styles.container}
        data-project={name}
        data-status={status}
      >
        <h2>{title}</h2>
        <button
          type="button"
          className={styles.cross}
          onClick={closeModal}
        />
        <ul>
          <li>
            <strong>Role:</strong><span>{role}</span>
          </li>
          <li>
            <Triangle className={styles.triangle} />
          </li>
          <li>
            <strong>Context:</strong><span>{context}</span>
          </li>
          <li>
            <Triangle className={styles.triangle} />
          </li>
          <li>
            <strong>Year:</strong><span>{year}</span>
          </li>
        </ul>
        <ProjectImage name={name} className={styles.preview} />
        <ProjectDescription />
        <div
          className={styles.links}
          data-project={name}
        >
          <OutboundLink
            href={site}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit App
          </OutboundLink>
          <OutboundLink
            href={code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Show Code
          </OutboundLink>
        </div>
      </div>
    </>
  );
};

ProjectModal.propTypes = {
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default ProjectModal;
