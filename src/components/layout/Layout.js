import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Navbar from './Navbar';
// import './layout.css';
import styles from '../../styles/layout/layout.module.scss';

class LayoutElements extends Component {
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  handleScroll = (e) => {
    e.preventDefault();
    const { location: { pathname: path }, navigate, data } = this.props;
    const { menuLinks } = data.site.siteMetadata;
    const index = menuLinks.findIndex(item => item.link === path);
    const { length } = menuLinks;

    // Handle one wheel at a time (& speed?)
    // Scroll down
    if (e.deltaY > 0 && index < (length - 1)) {
      navigate(menuLinks[index + 1].link);
    // Scroll up
    } else if (e.deltaY < 0 && index > 0) {
      navigate(menuLinks[index - 1].link);
    }
  }

  render() {
    const { data, children } = this.props;
    const { menuLinks } = data.site.siteMetadata;
    return (
      <>
        <Header />
        <Navbar menuLinks={menuLinks} />
        <main className={styles.container}>
          {children}
        </main>
      </>
    );
  }
}

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteNavQuery {
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
    render={data => (
      <LayoutElements data={data} {...props} />
    )}
  />
);

LayoutElements.propTypes = {
  children: PropTypes.node.isRequired,
  // data: PropTypes.shape({
  //   site: PropTypes.shape({
  //     siteMetadata: PropTypes.shape({
  //       menuLinks: PropTypes.shape([
  //         {
  //           name: PropTypes.string.isRequired,
  //           link: PropTypes.string.isRequired,
  //         },
  //       ]).isRequired,
  //     }).isRequired,
  //   }).isRequired,
  // }).isRequired,
};

export default Layout;
