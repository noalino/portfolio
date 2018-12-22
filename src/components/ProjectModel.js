import React from 'react';
import PropTypes from 'prop-types';

import projects from '../utils/projects';

const ProjectModel = ({ name }) => {
  const { role, context, year, description } = projects[name];
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>
          Role:
          {` ${role}`}
        </li>
        <li>
          Context:
          {` ${context}`}
        </li>
        <li>
          Year:
          {` ${year}`}
        </li>
      </ul>
      <div>
        <img src="" alt="preview" />
      </div>
      {/* Find a way to show bold words */}
      {description.map(text => <p key={text.slice(0, 8)}>{text}</p>)}
      <div>
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View App
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
  );
};

ProjectModel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectModel;
