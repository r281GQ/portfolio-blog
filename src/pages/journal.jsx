import React from 'react';

import BlogPage from '../components/BlogPage';

export default props => <BlogPage {...props} />;

export const allBlogPost = graphql`
  query allBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            type
            cover
            date
          }
        }
      }
    }
  }
`;
