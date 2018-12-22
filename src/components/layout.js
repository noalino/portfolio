import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
// import './layout.css';
import styles from '../styles/layout/layout.module.scss';

class Layout extends Component {
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  handleScroll = ({ deltaY }) => {
    // console.log(e);
    // Handle one wheel at a time (& speed?)
    const scroll = deltaY > 0 ? 'down' : 'up';
    console.log(scroll);
  }

  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header />
            <div className={styles.container}>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
