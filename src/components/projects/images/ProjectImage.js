import React from 'react';
import PropTypes from 'prop-types';

import images from './index';

const ProjectImage  = ({ name, className }) => {
  const Image = images[name];
  return <Image className={className} />;
}

ProjectImage.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ProjectImage;
