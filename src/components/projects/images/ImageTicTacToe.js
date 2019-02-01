import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ImageTicTacToe = ({ className }) => (
  <StaticQuery
    query={graphql`
      query ImageTicTacToeQuery {
        placeholderImage: file(relativePath: { eq: "tic-tac-toe.png" }) {
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
        alt="Tic-Tac-Toe Game preview"
      />
    )}
  />
);

ImageTicTacToe.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ImageTicTacToe;
