import React from 'react';
import PropTypes from 'prop-types';

import images from './index';

const ProjectImage  = ({ name, title }) => (
  <img src={images[name]} alt={`${title} preview`} />
);

ProjectImage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectImage;
