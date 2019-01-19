import React, { Component } from 'react';

import ProjectModel from '../components/projects/ProjectModel';
import projects from '../utils/projects';
import { NavbarContext, ProjectContext } from '../utils/context';

import styles from '../styles/pages/what-i-did.module.scss';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project: '',
    };
  }

  handleClick = (e, toggleProject) => {
    const { textContent: project } = e.target;
    this.setState({ project }, toggleProject);
  }

  render() {
    const { project } = this.state;
    const projectsList = ({ showProject, toggleProject }) => (
      Object.keys(projects).map(name => (
        <li key={name}>
          <NavbarContext.Consumer>
            {({ showNav }) => (
              <button
                type="button"
                id={name}
                onClick={(e) => this.handleClick(e, toggleProject)}
                tabIndex={(showNav || showProject) ? -1 : null}
                aria-disabled={showNav || showProject}
              >
                {name}
              </button>
            )}
          </NavbarContext.Consumer>
        </li>
      ))
    );

    return (
      <ProjectContext.Consumer>
        {({ showProject, toggleProject }) => (
          <div className={styles.container}>
            <h1>What I did.</h1>
            <ul>
              {projectsList({ showProject, toggleProject })}
            </ul>
            {showProject && (
              <ProjectModel
                name={project}
                closeModal={toggleProject}
              />
            )}
          </div>
        )}
      </ProjectContext.Consumer>
    );
  }
}

export default Projects;
