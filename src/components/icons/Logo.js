import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className }) => (
  <svg version="1.1" viewBox="0 0 308 229" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(4 3)" fillRule="nonzero" strokeWidth="3">
        <g transform="translate(0 130.65)">
          <polyline transform="translate(150 47.017) scale(1 -1) translate(-150 -47.017)" points="202.13 0 300 94.035 0 94.035 52.691 43.407 119.92 43.407"/>
          <path d="m53.209 50.288h64.865" strokeLinecap="square"/>
          <path d="m138.34 92.8h64.865" strokeLinecap="square"/>
        </g>
        <polygon points="86.655 34.217 119.92 71.233 69.537 129.13 0 130.65"/>
        <polygon points="184.46 0 300 129.61 68.919 129.61"/>
      </g>
    </g>
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
