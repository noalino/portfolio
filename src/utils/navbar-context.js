import React from 'react';

const NavbarContext = React.createContext({
  showNav: false,
  toggleNavbar: () => {},
});

export default NavbarContext;
