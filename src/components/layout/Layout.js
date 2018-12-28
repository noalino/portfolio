import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Navbar from './Navbar';
import NavUI from './NavUI';
// import './layout.css';
import styles from '../../styles/layout/layout.module.scss';

class LayoutElements extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
    };
  }

  toggleNavbar = () => (
    this.setState(prevState => ({
      showNav: !prevState.showNav,
    }))
  )

  handleWheel = ({ deltaY }) => {
    // e.preventDefault();
    // console.log(deltaY);
    const { location: { pathname: path }, navigate, data } = this.props;
    const { menuLinks } = data.site.siteMetadata;
    const index = menuLinks.findIndex(item => item.link === path);
    const { length } = menuLinks;

    // Handle one wheel at a time (& speed?)
    // Scroll down
    if (deltaY > 0 && index < (length - 1)) {
      navigate(menuLinks[index + 1].link);
    // Scroll up
    } else if (deltaY < 0 && index > 0) {
      navigate(menuLinks[index - 1].link);
    }
  }

  render() {
    const { showNav } = this.state;
    const { location: { pathname }, data, children } = this.props;
    const { menuLinks } = data.site.siteMetadata;
    return (
      <div
        className={styles.layout}
        nav={showNav ? 'showed' : 'hidden'}
      >
        <Header
          toggleNavbar={this.toggleNavbar}
        />
        {showNav && (
          <Navbar
            menuLinks={menuLinks}
            toggleNavbar={this.toggleNavbar}
          />
        )}
        <NavUI
          menuLinks={menuLinks}
          path={pathname}
        />
        <main
          className={styles.container}
          onWheel={this.handleWheel}
          /* Right to Left // Left to Right touch movements
             to keep scroll ability
             Horizontal helper bar on mobile */
          // onTouchStart
          // onTouchMove
        >
          {children}
        </main>
      </div>
    );
  }
}
/* Create wrapper component to access data from query
   in component functions */
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
    render={data => <LayoutElements data={data} {...props} />}
  />
);

LayoutElements.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  navigate: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        menuLinks: PropTypes.arrayOf(PropTypes.shape(
          {
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
          },
        )).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Layout;
