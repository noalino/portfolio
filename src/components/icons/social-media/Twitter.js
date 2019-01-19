import React from 'react';
import PropTypes from 'prop-types';

const Twitter = ({ className }) => (
  <svg
    version="1.1"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m11.4 26.6c0.1 0 0.1 0 0 0-0.9 0-1.8-0.2-2.6-0.4-1.3-0.4-2.5 0.8-2.1 2 1.1 4.3 4.5 7.7 8.8 8.6-1 0.3-2 0.4-3 0.4s-1.7 1.1-1.2 2c1.9 3.5 5.6 5.9 9.7 6h1c1.1 0 2 0.9 2 2s-0.9 2-2 2c-1.3 0-2.9-0.1-4.5-0.5-1-0.2-2-0.2-2.9 0.1-1.7 0.6-3.5 1.1-5.4 1.3-0.7 0.1-1.2 0.6-1.2 1.3 0 0.5 0.3 1 0.8 1.2 3.9 1.7 8.3 2.7 12.9 2.7 21.1 0 32.7-17.9 32.7-33.5 0-0.9 0.4-1.8 1.1-2.4 1.2-1 2.3-2.1 3.3-3.4 0.4-0.5-0.1-1.2-0.7-1-1.2 0.4-2.4 0.7-3.7 0.9-0.2 0-0.3-0.2-0.1-0.4 1.5-1.1 2.8-2.6 3.6-4.3 0.3-0.6-0.3-1.2-0.9-0.9-1.1 0.6-2.3 1-3.5 1.4s-2.6 0.1-3.6-0.7c-1.9-1.5-4.4-2.4-7-2.4-5.3 0-9.8 3.7-11.1 8.8-0.2 0.9 0.5 1.7 1.4 1.7 1.6-0.1 3.2-0.3 4.4-0.5 1-0.2 2 0.3 2.4 1.2 0.5 1.2-0.2 2.4-1.3 2.7-4.6 1.3-9.7 0.4-9.7 0.4-7.8-1.1-14.7-4.9-19.7-10.4-0.7-0.8-2-0.5-2.3 0.4-0.4 1.2-0.6 2.5-0.6 3.9 0 4.1 2 7.7 5 9.8z" />
  </svg>
);

Twitter.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Twitter;