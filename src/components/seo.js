import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql `
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        twitter
        siteName
        url
      }
    }
  }
`;

const SEO = ({ description, lang, meta, keywords, title }) => (
  <StaticQuery
    query={detailsQuery}
    render={({ site: { siteMetadata } }) => {
      const metaDescription =
        description || siteMetadata.description
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          defaultTitle='Portfolio'
          titleTemplate={`${siteMetadata.title} | %s`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              name: 'author',
              content: siteMetadata.author,
            },
            {
              property: 'og:title',
              content: `${siteMetadata.title}`,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:site_name',
              content: siteMetadata.siteName,
            },
            {
              property: 'og:url',
              content: siteMetadata.url,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: siteMetadata.twitter,
            },
            {
              name: 'twitter:title',
              content: `${siteMetadata.title}`,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                : []
            )
            .concat(meta)}
        />
      )
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: ['web', 'portfolio', 'javascript', 'react', 'gatsby'],
};

SEO.propTypes = {
  /* eslint-disable-next-line react/require-default-props */
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.instanceOf(Array),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
