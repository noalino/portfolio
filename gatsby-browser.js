/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Helmet from 'react-helmet';

import Layout from './src/components/layout/Layout';

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,500"
        rel="stylesheet"
      />
    </Helmet>
    {element}
  </Layout>
);
