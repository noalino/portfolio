import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import throttle from 'lodash/throttle';

import Header from './Header';
import Navbar from './Navbar';
import NavUI from './NavUI';
import Footer from './Footer';

import NavbarContext from '../../utils/navbar-context';

import styles from '../../styles/layout/layout.module.scss';

class LayoutElements extends Component {
  constructor() {
    super();

    this.toggleNavbar = () => (
      this.setState(prevState => ({
        showNav: !prevState.showNav,
      }))
    );

    this.state = {
      showNav: false,
      toggleNavbar: this.toggleNavbar,
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

    // Handle one wheel at a time (every 500ms)
    this.emitWheelThrottled = throttle(this.emitWheel, 500, {
      leading: true,
      trailing: false,
    });
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

  emitWheel = (deltaY) => {
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

  // React pool events, value is read before throttle
  handleWheel = ({ deltaY }) => this.emitWheelThrottled(deltaY);

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
    const { showNav, toggleNavbar } = this.state;
    const { data: { site: { siteMetadata: { menuLinks } } }, children } = this.props;
    const { length } = menuLinks;
    const index = this.getPageIndex();
    const isLastPage = index === (length - 1);

    // Wrap components into <Layout>{children}</Layout>
    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,500"
            rel="stylesheet"
          />
        </Helmet>
        <NavbarContext.Provider value={{ showNav, toggleNavbar }}>
          <div
            className={styles.layout}
            nav={showNav ? 'visible' : 'hidden'}
            onWheel={this.handleWheel}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            <Header />
            {showNav && <Navbar />}
            <NavUI pageIndex={index} />
            <main
              className={styles.container}
              footer={`${isLastPage}`}
            >
              {children}
            </main>
            {isLastPage && <Footer />}
          </div>
        </NavbarContext.Provider>
      </>
    );
  }
}
/* Wrapper component to access data
   from query in component functions */
const Layout = props => (
  <StaticQuery
    query={graphql`
      query LayoutNavLinksQuery {
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
