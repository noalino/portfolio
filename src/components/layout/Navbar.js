import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from '../../styles/layout/navbar.module.scss';

const Navbar = ({ menuLinks, toggleNavbar }) => (
  <nav id={styles.nav}>
    <button
      type="button"
      onClick={toggleNavbar}
      aria-label="Close Navigation Bar"
    >
      <span>&times;</span>
    </button>
    <ul className={styles.nav_links}>
      {menuLinks.map(item => (
        <li key={item.name}>
          <Link
            to={item.link}
            onClick={toggleNavbar}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  menuLinks: PropTypes.instanceOf(Array).isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default Navbar;
