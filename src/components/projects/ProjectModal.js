import React from 'react';
import PropTypes from 'prop-types';

import Triangle from '../icons/Triangle';
import ProjectImage from './images/ProjectImage';

import { NavbarContext } from '../../utils/context';
import projects from '../../utils/projects';
import descriptions from './descriptions/index';

import styles from '../../styles/projectModal.module.scss';

const ProjectModal = ({ name, closeModal, state }) => {
  const index = projects.findIndex(({ id }) => id === name);
  const { title, role, context, year, links: { site, code } } = projects[index];
  const ProjectDescription = descriptions[name];

  return (
    <NavbarContext.Consumer>
      {({ showNav }) => (
        <>
          <div
            className={styles.container_background}
            onClick={closeModal}
            role="presentation"
            state={state}
          />
          <div
            className={styles.container}
            project={name}
            nav={showNav ? 'visible' : 'hidden'}
            state={state}
          >
            <h2>{title}</h2>
            <button
              type="button"
              className={styles.cross}
              onClick={closeModal}
              tabIndex={showNav ? -1 : null}
              aria-disabled={showNav}
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
            <ProjectImage name={name} title={title} />
            <ProjectDescription />
            <div
              className={styles.links}
              project={name}
            >
              <a
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={showNav ? -1 : null}
                aria-disabled={showNav}
              >
                Visit App
              </a>
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={showNav ? -1 : null}
                aria-disabled={showNav}
              >
                Show Code
              </a>
            </div>
          </div>
        </>
      )
    }
    </NavbarContext.Consumer>
  );
};

ProjectModal.propTypes = {
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProjectModal;
