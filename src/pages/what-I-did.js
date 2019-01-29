import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import ProjectModal from '../components/projects/ProjectModal';
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
    const { id: project } = e.target;
    this.setState({ project }, toggleProject);
  }

  render() {
    const { project } = this.state;
    const projectsList = ({ showProject, toggleProject }) => (
      projects.map(({ id, title }) => (
        <li key={id}>
          <NavbarContext.Consumer>
            {({ showNav }) => (
              <button
                type="button"
                id={id}
                onClick={(e) => this.handleClick(e, toggleProject)}
                tabIndex={(showNav || showProject) ? -1 : null}
                aria-disabled={showNav || showProject}
              >
                {title}
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
            <Transition in={showProject} timeout={0}>
              {(state) => (
                showProject && (
                  <ProjectModal
                    state={state}
                    name={project}
                    closeModal={toggleProject}
                  />
                )
              )}
            </Transition>
          </div>
        )}
      </ProjectContext.Consumer>
    );
  }
}

export default Projects;
