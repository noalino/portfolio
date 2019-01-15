import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Navbar from './Navbar';
import NavUI from './NavUI';
import Footer from './Footer';

import NavbarContext from '../../utils/navbar-context';

import styles from '../../styles/layout/layout.module.scss';

class LayoutElements extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false,
      wheelEvent: {
        scrollType: 'none',
      },
      touchEvent: {
        dir: 'none',
        swipeType: 'none',
        startX: 0,
        startY: 0,
        distX: 0,
        distY: 0,
        startTime: 0,
        elapsedTime: 0,
      },
    };

    this.swipeConditions = {
      // Minimum required distance to be considered swipe
      threshold: 150,
      // Maximum distance allowed at the same time in perpendicular direction
      restraint: 100,
      // Maximum time allowed to travel that distance
      allowedTime: 500,
    };
  }

  getPageIndex = () => {
    const {
      location: {
        pathname,
      },
      data: {
        site: {
          siteMetadata: {
            menuLinks,
          },
        },
      },
    } = this.props;
    return (
      menuLinks.findIndex(({ link }) => (
        link === pathname || `${link}/` === pathname
      ))
    );
  };

  toggleNavbar = () => (
    this.setState(prevState => ({ showNav: !prevState.showNav }))
  )

  // Handle one wheel at a time (lodash.throttle)
  handleWheel = ({ deltaY }) => {
    const { navigate, data: { site: { siteMetadata: { menuLinks } } } } = this.props;
    const { length } = menuLinks;
    const index = this.getPageIndex();

    this.setState({
      wheelEvent: {
        scrollType: deltaY < 0 ? 'up' : 'down',
      },
    }, () => {
      const { wheelEvent: { scrollType } } = this.state;
      if (scrollType === 'down' && index < (length - 1)) {
        navigate(menuLinks[index + 1].link);
      } else if (scrollType === 'up' && index > 0) {
        navigate(menuLinks[index - 1].link);
      }
    });
  }

  handleTouchStart = (e) => {
    const { changedTouches, timeStamp } = e;
    const [touchobj] = changedTouches;
    const { pageX, pageY } = touchobj;

    this.setState(({ touchEvent }) => ({
      touchEvent: {
        ...touchEvent,
        distX: 0,
        distY: 0,
        startX: pageX,
        startY: pageY,
        startTime: timeStamp,
      },
    }));
  }

  handleTouchMove = (e) => {
    const { changedTouches } = e;
    const [touchobj] = changedTouches;
    const { pageX, pageY } = touchobj;
    const { touchEvent: { startX, startY } } = this.state;

    this.setState(({ touchEvent }) => {
      const distX = pageX - startX;
      const distY = pageY - startY;
      return {
        touchEvent: {
          ...touchEvent,
          distX,
          distY,
          dir: distX < 0 ? 'left' : 'right',
        },
      };
    });
  }

  handleTouchEnd = (e) => {
    const { timeStamp } = e;
    const { touchEvent: { distX, distY, startTime, dir } } = this.state;
    const { threshold, restraint, allowedTime } = this.swipeConditions;

    this.setState(({ touchEvent }) => {
      const elapsedTime = timeStamp - startTime;
      let swipeType = 'none';
      // Swipe conditions: time & distances
      if (elapsedTime <= allowedTime && (
        Math.abs(distX) >= threshold && Math.abs(distY) <= restraint
      )) {
        swipeType = dir;
      }

      return {
        touchEvent: {
          ...touchEvent,
          elapsedTime,
          swipeType,
        },
      };
    }, () => {
      const { navigate, data: { site: { siteMetadata: { menuLinks } } } } = this.props;
      const { length } = menuLinks;
      const index = this.getPageIndex();
      const { touchEvent: { swipeType } } = this.state;

      if (swipeType === 'left' && index < (length - 1)) {
        navigate(menuLinks[index + 1].link);
      } else if (swipeType === 'right' && index > 0) {
        navigate(menuLinks[index - 1].link);
      }
    });
  }

  render() {
    const { showNav } = this.state;
    const { data: { site: { siteMetadata: { menuLinks } } }, children } = this.props;
    const { length } = menuLinks;
    const index = this.getPageIndex();
    const isLastPage = index === (length - 1);

    // Wrap components into <Layout>{children}</Layout>
    return (
      <NavbarContext.Provider value={showNav}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,500"
            rel="stylesheet"
          />
        </Helmet>
        <div
          className={styles.layout}
          nav={showNav ? 'visible' : 'hidden'}
          onWheel={this.handleWheel}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          <Header
            showNav={showNav}
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
            pageIndex={index}
          />
          <main
            className={styles.container}
            footer={`${isLastPage}`}
          >
            {children}
          </main>
          {isLastPage && <Footer />}
        </div>
      </NavbarContext.Provider>
    );
  }
}
/* Wrapper component to access data
   from query in component functions */
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
    // render={(data) => {
    //   console.log(props);
    //   return (
    //     <LayoutElements data={data} {...props} />
    //   );
    // }}
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
