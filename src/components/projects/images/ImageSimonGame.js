import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ImageSimonGame = ({ className }) => (
  <StaticQuery
    query={graphql`
      query ImageSimonGameQuery {
        placeholderImage: file(relativePath: { eq: "simon-game.png" }) {
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
        alt="Simon Game preview"
      />
    )}
  />
);

ImageSimonGame.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ImageSimonGame;
