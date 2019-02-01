import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ImageNewsAggregator = ({ className }) => (
  <StaticQuery
    query={graphql`
      query ImageNewsAggregatorQuery {
        placeholderImage: file(relativePath: { eq: "news-aggregator.png" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className={className}
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="News Aggregator preview"
      />
    )}
  />
);

ImageNewsAggregator.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ImageNewsAggregator;
