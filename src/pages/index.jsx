import React from 'react';

import IndexPage from './../components/IndexPage';

export default props => <IndexPage {...props} />;

export const allJournalIndexesForIndex = graphql`
  query AllJournalIndexesForIndex {
    allMarkdownRemark(
      limit: 5
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
            category
          }
        }
      }
    }
  }
`;
