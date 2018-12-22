import React, { Component } from 'react';

import Layout from '../components/layout';
import ProjectModel from '../components/ProjectModel';
import projects from '../utils/projects';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showProject: false,
      project: '',
    };
  }

  handleClick = (e) => {
    const value = e.target.textContent;
    const { project } = this.state;

    this.setState((prevState) => {
      if (value === project) {
        return {
          showProject: !prevState.showProject,
        };
      }
      return {
        showProject: true,
        project: value,
      };
    });
  }

  render() {
    const { showProject, project } = this.state;
    const projectsList = Object.keys(projects).map(name => (
      <li>
        <button
          key={name}
          type="button"
          // id={name}
          onClick={this.handleClick}
        >
          {name}
        </button>
      </li>
    ));

    return (
      <Layout>
        <h1>What I Did.</h1>
        <ul>
          {projectsList}
        </ul>
        {showProject && <ProjectModel name={project} />}
      </Layout>
    );
  }
}

export default Projects;
