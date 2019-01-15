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
      {/* Use cross from ProjectModel made with CSS */}
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
  menuLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

export default Navbar;
