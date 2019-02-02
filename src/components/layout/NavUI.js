import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styles from '../../styles/layout/navui.module.scss';

const NavUI = ({ pageIndex }) => (
  <StaticQuery
    query={graphql`
      query NavUINavLinksQuery {
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
      <div className={styles.line}>
        {menuLinks.map(({ name }, i) => (
          <div
            key={name}
            className={`${styles.tag} ${styles[`tag_${i + 1}`]}`}
            data-page={i === pageIndex ? 'current' : ''}
          />
        ))}
      </div>
    )}
  />
);

NavUI.propTypes = {
  pageIndex: PropTypes.number.isRequired,
};

export default NavUI;
