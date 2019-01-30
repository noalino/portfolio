import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Navbar from './Navbar';
import NavUI from './NavUI';
import Footer from './Footer';

import styles from '../../styles/layout/layout.module.scss';

const LayoutElements = ({ children, menuLinks, index }) => {
  const { length } = menuLinks;
  const isLastPage = index === (length - 1);

  return (
    <>
      <Header />
      <Navbar />
      <NavUI pageIndex={index} />
      <main
        className={styles.container}
        footer={`${isLastPage}`}
      >
        {children}
      </main>
      {isLastPage && <Footer />}
    </>
  );
};

LayoutElements.propTypes = {
  children: PropTypes.node.isRequired,
  menuLinks: PropTypes.instanceOf(Array).isRequired,
  index: PropTypes.number.isRequired,
};

export default LayoutElements;
