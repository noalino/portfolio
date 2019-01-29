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
        {({ showNav, toggleNavbar }) => (
          <nav id={styles.nav} state={showNav ? 'open' : 'closed'}>
            <button
              type="button"
              onClick={toggleNavbar}
              tabIndex={showNav ? null : -1}
              // aria-label="Close Navigation Bar"
            />
            <ul className={styles.nav_links}>
              {menuLinks.map(item => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    onClick={toggleNavbar}
                    tabIndex={showNav ? null : -1}
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
