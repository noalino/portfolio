import React from 'react';
import PropTypes from 'prop-types';

import projects from '../utils/projects';
import NavbarContext from '../utils/navbar-context';

import styles from '../styles/projectModel.module.scss';

const ProjectModel = ({ name, closeModal }) => {
  const { role, context, year, description } = projects[name];
  return (
    <NavbarContext.Consumer>
      {showNav => (
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
            <h2>{name}</h2>
            <button
              type="button"
              className={styles.cross}
              onClick={closeModal}
            />
            <ul>
              <li>
                Role:
                <span>{role}</span>
              </li>
              <li data-role="symbol">&#9653;</li>
              <li>
                Context:
                <span>{context}</span>
              </li>
              <li data-role="symbol">&#9653;</li>
              <li>
                Year:
                <span>{year}</span>
              </li>
            </ul>
            <div>
              <img src="" alt="preview" />
            </div>
            {/* Find a way to show bold words */}
            {description.map(text => (
              <p key={text.slice(0, 8)}>{text}</p>
            ))}
            <div className={styles.links}>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit App
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
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
