import React from 'react';
import PropTypes from 'prop-types';

const LinkedIn = ({ className }) => (
  <svg
    version="1.1"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m8 54.7c0 0.7 0.6 1.3 1.3 1.3h9.3c0.7 0 1.3-0.6 1.3-1.3v-30.8c0-0.7-0.6-1.3-1.3-1.3h-9.3c-0.7 0-1.3 0.6-1.3 1.3v30.8z" />
    <path d="m46.6 22.3c-4.5 0-7.7 1.8-9.4 3.7-0.4 0.4-1.1 0.1-1.1-0.5v-1.6c0-0.7-0.6-1.3-1.3-1.3h-9.4c-0.7 0-1.3 0.6-1.3 1.3 0.1 5.7 0 25.4 0 30.7 0 0.7 0.6 1.3 1.3 1.3h9.5c0.7 0 1.3-0.6 1.3-1.3v-16.7c0-1 0-2 0.3-2.7 0.8-2 2.6-4.1 5.7-4.1 4.1 0 6 3.1 6 7.6v15.9c0 0.7 0.6 1.3 1.3 1.3h9.3c0.7 0 1.3-0.6 1.3-1.3v-17.2c-0.1-10.3-6-15.1-13.5-15.1z" />
    <path d="m13.9 18.9c3.8 0 6.1-2.4 6.1-5.4-0.1-3.2-2.3-5.5-6-5.5s-6 2.3-6 5.4 2.3 5.5 5.9 5.5z" />
  </svg>
);

LinkedIn.propTypes = {
  className: PropTypes.string.isRequired,
};

export default LinkedIn;
