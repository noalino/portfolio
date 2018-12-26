import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Navbar = ({ menuLinks }) => (
  <nav>
    <ul>
      {menuLinks.map(item => (
        <li key={item.name}>
          <Link to={item.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  menuLinks: PropTypes.instanceOf(Array).isRequired,
};

export default Navbar;
