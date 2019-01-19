import React from 'react';

const NavbarContext = React.createContext({
  showNav: false,
  toggleNavbar: () => {},
});

const ProjectContext = React.createContext({
  showProject: false,
  toggleProject: () => {},
});

export {
  NavbarContext,
  ProjectContext,
};
