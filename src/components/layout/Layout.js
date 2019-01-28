import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import LayoutUX from './LayoutUX';

import '../../styles/global.scss';

/* Wrapper component to access data
   from query in LayoutUX component functions */
const Layout = props => (
  <StaticQuery
    query={graphql`
      query LayoutNavLinksQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { menuLinks } } }) => (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Aleo|Raleway:400,500"
            rel="stylesheet"
          />
        </Helmet>
        <LayoutUX menuLinks={menuLinks} {...props} />
      </>
    )}
  />
);

export default Layout;
