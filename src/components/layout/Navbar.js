import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import { NavbarContext } from '../../utils/context';

import styles from '../../styles/layout/navbar.module.scss';

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query NavbarNavLinksQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { menuLinks } } }) => (
      <NavbarContext.Consumer>
        {({ toggleNavbar }) => (
          <nav id={styles.nav}>
            <button
              type="button"
              onClick={toggleNavbar}
              // aria-label="Close Navigation Bar"
            />
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
        )}
      </NavbarContext.Consumer>
    )}
  />
);

export default Navbar;
