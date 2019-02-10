import React from 'react';

import Triangle from '../icons/Triangle';

import styles from '../../styles/layout/footer.module.scss';

const Footer = () => (
  <footer id={styles.footer}>
    &copy; {new Date().getFullYear()} Benoît Gelineau
    <Triangle className={styles.triangle} />
    All rights reserved
  </footer>
);

export default Footer;
