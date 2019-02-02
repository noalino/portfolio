import React from 'react';

import SEO from '../components/SEO';

import styles from '../styles/pages/404.module.scss';

const NotFoundPage = () => (
  <div className={styles.container}>
    <SEO title="404: Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
