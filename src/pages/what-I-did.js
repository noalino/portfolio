import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Transition from 'react-transition-group/Transition';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import ProjectModal from '../components/projects/ProjectModal';
import projects from '../utils/projects';
import { NavbarContext, ProjectContext } from '../utils/context';

import styles from '../styles/pages/what-I-did.module.scss';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project: '',
    };
  }

  handleClick = (e, toggleProject) => {
    const { id: project } = e.target;
    const { location: { pathname } } = this.props;

    this.setState({ project }, toggleProject);

    ReactGA.modalview(`${pathname}/${project}`);
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
            <SEO title="Projects" />
            <h1>What I did.</h1>
            <ul>
              {projectsList({ showProject, toggleProject })}
            </ul>
            <Transition
              in={showProject}
              timeout={{
                enter: 100,
                exit: 350,
              }}
              unmountOnExit
            >
              {status => (
                <ProjectModal
                  status={status}
                  name={project}
                  closeModal={toggleProject}
                />
              )}
            </Transition>
          </div>
        )}
      </ProjectContext.Consumer>
    );
  }
}

Projects.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
}

export default Projects;
