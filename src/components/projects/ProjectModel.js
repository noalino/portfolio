import React from 'react';
import PropTypes from 'prop-types';

import Triangle from '../icons/Triangle';
import ProjectImage from './images/ProjectImage';

import { NavbarContext } from '../../utils/context';
import projects from '../../utils/projects';
import descriptions from './descriptions/index';

import styles from '../../styles/projectModel.module.scss';

const ProjectModel = ({ name, closeModal }) => {
  const index = projects.findIndex(({ id }) => id === name);
  const { title, role, context, year, links: { site, code } } = projects[index];
  const Description = descriptions[name];
  return (
    <NavbarContext.Consumer>
      {({ showNav }) => (
        <>
          <div
            id={name}
            className={styles.container_background}
            onClick={closeModal}
            role="presentation"
          />
          <div
            className={styles.container}
            nav={showNav ? 'visible' : 'hidden'}
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
                Role:<span>{role}</span>
              </li>
              <li>
                <Triangle className={styles.triangle} />
              </li>
              <li>
                Context:<span>{context}</span>
              </li>
              <li>
                <Triangle className={styles.triangle} />
              </li>
              <li>
                Year:<span>{year}</span>
              </li>
            </ul>
            <ProjectImage name={name} title={title} />
            <Description />
            <div className={styles.links}>
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

ProjectModel.propTypes = {
  name: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProjectModel;
