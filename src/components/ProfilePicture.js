import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const ProfilePicture = ({ className }) => (
  <StaticQuery
    query={graphql`
      query profilePictureQuery {
        placeholderImage: file(relativePath: { eq: "benoit-gelineau.jpg" }) {
          childImageSharp {
            fixed(width: 200, quality: 100) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        className={className}
        alt="Benoît Gelineau"
      />
    )}
  />
);

ProfilePicture.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ProfilePicture;
