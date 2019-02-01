import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ImageChoroplethMap = ({ className }) => (
  <StaticQuery
    query={graphql`
      query ImageChoroplethMapQuery {
        placeholderImage: file(relativePath: { eq: "choropleth-map.png" }) {
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
        alt="Choropleth Map preview"
      />
    )}
  />
);

ImageChoroplethMap.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ImageChoroplethMap;
