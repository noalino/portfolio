import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className }) => (
  <svg viewBox="0 0 104 80" className={className}>
    <g fill="none">
      <g transform="translate(2.000000, 3.000000)" strokeWidth="2.5">
          {/* Mountains */}
          <polyline points="0 44.800885 25.9136213 12.2787611 39.2336203 28.9956319"/>
          <polyline points="25.9136213 44.800885 62.7906977 0 99.6677741 44.800885"/>
          {/* Middle bar */}
          <path d="M0,44.800885 L99.6677741,44.800885" strokeLinecap="round"/>
          {/* Downside */}
          <g transform="translate(0.000000, 44.800885)">
              <path d="M0,0.00971251911 L18.3701008,16.5245144 M66.1129568,30.199115 L99.6938844,0.00971251911"/>
              <path d="M18.2724252,16.4269912 L46.013289,16.4269912" strokeLinecap="round"/>
              <path d="M47.0099668,30.0331858 L66.2790698,30.0331858" strokeLinecap="round"/>
          </g>
      </g>
    </g>
</svg>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
