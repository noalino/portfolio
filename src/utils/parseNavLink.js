const parseNavLink = navItem => (
  navItem !== 'Home' ? (
    `/${navItem.toLowerCase().split(' ').join('-')}`
  ) : '/'
);

export default parseNavLink;
