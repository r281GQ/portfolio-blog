import React from 'react';

import BlogPage from '../components/BlogPage';

export default props => <BlogPage {...props} />;

export const allJournals = graphql`
  query AllJournals {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "journal" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
