import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

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

  // Set function in state & context?
  getPageIndex = () => {
    const { location: { pathname }, menuLinks } = this.props;
    return (
      menuLinks.findIndex(({ link }) => (
        link === pathname || `${link}/` === pathname
      ))
    );
  };

  emitWheel = (deltaY) => {
    const { navigate, menuLinks } = this.props;
    const { length } = menuLinks;
    const index = this.getPageIndex();

    this.setState({
      wheelEvent: {
        scrollType: deltaY < 0 ? 'up' : 'down',
      },
    }, () => {
      const { showNav, showProject, wheelEvent: { scrollType } } = this.state;
      const validConditions = !showNav && !showProject;
      if (validConditions) {
        if (scrollType === 'down' && index < (length - 1)) {
          navigate(menuLinks[index + 1].link);
        } else if (scrollType === 'up' && index > 0) {
          navigate(menuLinks[index - 1].link);
        }
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
      const { navigate, menuLinks } = this.props;
      const { length } = menuLinks;
      const index = this.getPageIndex();
      const { showNav, showProject, touchEvent: { swipeType } } = this.state;
      const validConditions = !showNav && !showProject;

      if (validConditions) {
        if (swipeType === 'left' && index < (length - 1)) {
          navigate(menuLinks[index + 1].link);
        } else if (swipeType === 'right' && index > 0) {
          navigate(menuLinks[index - 1].link);
        }
      }
    });
  }

  render() {
    const { showNav, toggleNavbar, showProject, toggleProject } = this.state;
    const { menuLinks, children } = this.props;
    const index = this.getPageIndex();

    return (
      <NavbarContext.Provider value={{ showNav, toggleNavbar }}>
        <ProjectContext.Provider value={{ showProject, toggleProject }}>
          <div
            className={styles.layout}
            nav={showNav ? 'visible' : 'hidden'}
            onWheel={this.handleWheel}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            <LayoutElements
              index={index}
              menuLinks={menuLinks}
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
