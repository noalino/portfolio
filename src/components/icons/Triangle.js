import React from 'react';
import PropTypes from 'prop-types';

const Triangle = ({ className }) => (
  <svg viewBox="0 0 20 17.32" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M.87,16.82,10,1l9.13,15.82Zm1.39-.73H17.74L10,2.67Z"/>
    <path d="M10,0,0,17.32H20L10,0ZM3.12,15.59,10,3.67l6.88,11.92Z"/>
  </svg>
);

Triangle.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Triangle;
