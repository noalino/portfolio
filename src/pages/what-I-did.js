import React, { Component } from 'react';

import ProjectModel from '../components/projects/ProjectModel';
import projects from '../utils/projects';
import NavbarContext from '../utils/navbar-context';

import styles from '../styles/pages/what-i-did.module.scss';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showProject: false,
      project: '',
      // showProject: true,
      // project: 'News Aggregator',
    };
  }

  handleClick = (e) => {
    const { textContent: project } = e.target;

    this.setState((prevState) => {
      if (project) {
        return {
          showProject: true,
          project,
        };
      }
      return {
        showProject: !prevState.showProject,
      };
    });
  }

  render() {
    const { showProject, project } = this.state;
    const projectsList = Object.keys(projects).map(name => (
      <li key={name}>
        <NavbarContext.Consumer>
          {({ showNav }) => (
            <button
              type="button"
              id={name}
              onClick={this.handleClick}
              tabIndex={(showProject || showNav) ? -1 : null}
              aria-disabled={showNav}
            >
              {name}
            </button>
          )}
        </NavbarContext.Consumer>
      </li>
    ));

    return (
      <div className={styles.container}>
        <h1>What I did.</h1>
        <ul>
          {projectsList}
        </ul>
        {showProject && (
          <ProjectModel
            name={project}
            closeModal={this.handleClick}
          />
        )}
      </div>
    );
  }
}

export default Projects;
