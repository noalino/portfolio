import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import parseNavLink from '../utils/parseNavLink';

const Navbar = ({ navItems }) => (
  <ul>
    {navItems.map(item => (
      <li key={item}>
        <Link to={parseNavLink(item)}>
          {item}
        </Link>
      </li>
    ))}
  </ul>
);

Navbar.defaultProps = {
  navItems: [
    'Home',
    'Who I am',
    'What I do',
    'What I did',
    'Contact',
  ],
};

Navbar.propTypes = {
  navItems: PropTypes.instanceOf(Array),
};

export default Navbar;
