import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

import Background from './Background';
import LayoutElements from './LayoutElements';
import { NavbarContext, ProjectContext } from '../../utils/context';

import styles from '../../styles/layout/layout.module.scss';

class LayoutUX extends Component {
  constructor() {
    super();

    this.toggleNavbar = () => (
      this.setState(prevState => ({
        showNav: !prevState.showNav,
      }))
    );

    this.toggleProject = () => (
      this.setState(prevState => ({
        showProject: !prevState.showProject,
      }))
    );

    this.state = {
      showNav: false,
      showProject: false,
      toggleNavbar: this.toggleNavbar,
      toggleProject: this.toggleProject,
      wheelEvent: {
        direction: 'none',
      },
      touchEvent: {
        direction: 'none',
        swipeDirection: 'none',
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

    // Initialize Background to avoid re-renders on touch events
    this.background = <Background />
  }

  getPageIndex = () => {
    const { location: { pathname }, menuLinks } = this.props;
    return (
      menuLinks.findIndex(({ link }) => (
        link === pathname || `${link}/` === pathname
      ))
    );
  };

  // React pool events, value is read before throttle
  handleWheel = ({ deltaY }) => this.emitWheelThrottled(deltaY);

  emitWheel = (deltaY) => {
    const { navigate, menuLinks } = this.props;
    const { length } = menuLinks;
    const index = this.getPageIndex();

    this.setState({
      wheelEvent: {
        direction: deltaY < 0 ? 'up' : 'down',
      },
    }, () => {
      const { wheelEvent: { direction } } = this.state;

      if (direction === 'down' && index < (length - 1)) {
        navigate(menuLinks[index + 1].link);
      } else if (direction === 'up' && index > 0) {
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
          direction: distX < 0 ? 'left' : 'right',
        },
      };
    });
  }

  handleTouchEnd = (e) => {
    const { timeStamp } = e;
    const { touchEvent: { distX, distY, startTime, direction } } = this.state;
    const { threshold, restraint, allowedTime } = this.swipeConditions;

    this.setState(({ touchEvent }) => {
      const elapsedTime = timeStamp - startTime;
      let swipeDirection = 'none';
      // Swipe conditions: time & distances
      if (elapsedTime <= allowedTime && (
        Math.abs(distX) >= threshold && Math.abs(distY) <= restraint
      )) {
        swipeDirection = direction;
      }

      return {
        touchEvent: {
          ...touchEvent,
          elapsedTime,
          swipeDirection,
        },
      };
    }, () => {
      const { navigate, menuLinks } = this.props;
      const { length } = menuLinks;
      const index = this.getPageIndex();
      const { touchEvent: { swipeDirection } } = this.state;

      if (swipeDirection === 'left' && index < (length - 1)) {
        navigate(menuLinks[index + 1].link);
      } else if (swipeDirection === 'right' && index > 0) {
        navigate(menuLinks[index - 1].link);
      }
    });
  }

  render() {
    const { showNav, toggleNavbar, showProject, toggleProject } = this.state;
    const { menuLinks, children } = this.props;
    const { length } = menuLinks;
    const validConditions = !showNav && !showProject;
    const index = this.getPageIndex();
    const isLastPage = index === (length - 1);

    return (
      <NavbarContext.Provider value={{ showNav, toggleNavbar }}>
        <ProjectContext.Provider value={{ showProject, toggleProject }}>
          <div
            className={styles.layout}
            data-nav={showNav ? 'true' : 'false'}
            data-footer={isLastPage ? 'true' : 'false'}
            onWheel={validConditions ? this.handleWheel : null}
            onTouchStart={validConditions ? this.handleTouchStart : null}
            onTouchMove={validConditions ? this.handleTouchMove : null}
            onTouchEnd={validConditions ? this.handleTouchEnd : null}
          >
            {
              /* Set background to be positioned before,
                avoiding no overlay */
            }
            {this.background}
            <LayoutElements
              index={index}
              isLastPage={isLastPage}
            >
              {children}
            </LayoutElements>
          </div>
        </ProjectContext.Provider>
      </NavbarContext.Provider>
    );
  }
}

LayoutUX.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  navigate: PropTypes.func.isRequired,
  menuLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default LayoutUX;
