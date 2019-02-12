import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Navbar from './Navbar';
import NavUI from './NavUI';
import Footer from './Footer';

import styles from '../../styles/layout/layout.module.scss';

const LayoutElements = ({ children, index, isLastPage }) => (
  <>
    <Header />
    <Navbar />
    <NavUI pageIndex={index} />
    <main className={styles.container}>
      {children}
    </main>
    {isLastPage && <Footer />}
  </>
);

LayoutElements.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  isLastPage: PropTypes.bool.isRequired,
};

export default LayoutElements;
