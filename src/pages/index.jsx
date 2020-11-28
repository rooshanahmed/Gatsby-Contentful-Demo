import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => {
  console.log(data);

  return (
    <div>
      <div>{data.allContentfulBlogPost.edges[1].node.title}</div>
      <div>{data.allContentfulBlogPost.edges[1].node.publicationDate}</div>
      <div>{data.allContentfulBlogPost.edges[1].node.content.raw}</div>
      <br />
      <div>{data.allContentfulBlogPost.edges[0].node.title}</div>
      <div>{data.allContentfulBlogPost.edges[0].node.publicationDate}</div>
      <div>{data.allContentfulBlogPost.edges[0].node.content.raw}</div>
    </div>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          publicationDate
          content {
            raw
          }
        }
      }
    }
  }
`;
