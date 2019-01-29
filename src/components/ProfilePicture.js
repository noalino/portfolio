import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProfilePicture = () => (
  <StaticQuery
    query={graphql`
      query profilePictureQuery {
        placeholderImage: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        alt="Benoît Gelineau's profile"
      />
    )}
  />
);

export default ProfilePicture;
