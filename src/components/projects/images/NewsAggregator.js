import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const NewsAggregatorPreview = ({ className }) => (
  <StaticQuery
    query={graphql`
      query newsAggregatorPreviewQuery {
        placeholderImage: file(relativePath: { eq: "news-aggregator.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        className={className}
        alt="News Aggregator preview"
      />
    )}
  />
);

export default NewsAggregatorPreview;
