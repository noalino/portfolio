import React from 'react';

import styles from '../../styles/layout/footer.module.scss';

const Footer = () => (
  <footer id={styles.footer}>
    Made by myself
    <span className={styles.triangle} />
    2018
  </footer>
);

export default Footer;
