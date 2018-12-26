import React from 'react';
import { Link } from 'gatsby';
import styles from '../../styles/layout/header.module.scss';

const Header = () => (
  <header>
    <Link to="/">
      <img alt="logo" />
    </Link>
    {/* <a href="#home">
      <img alt="logo" />
    </a> */}
    <button
      type="button"
      className={styles.menu_btn}
    >
      <div className={styles.menu_btn_icon} />
    </button>
  </header>
);

export default Header;
