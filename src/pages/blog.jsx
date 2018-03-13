import React from 'react';

export default ({ data }) => {
  console.log(data);
  return <div>Blog</div>;
};

export const allBlogPost = graphql`
  query allBlogPost {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;
