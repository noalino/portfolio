import React from 'react';

import Triangle from '../icons/Triangle';

import styles from '../../styles/layout/footer.module.scss';

const Footer = () => {
  const actualDate = new Date().getFullYear();
  const date = actualDate === 2019 ? 2019 : `2019 - ${actualDate}`;
  return (
    <footer id={styles.footer}>
      &copy; {date} Benoît Gelineau
      <Triangle className={styles.triangle} />
      All rights reserved
    </footer>
  )
};

export default Footer;
