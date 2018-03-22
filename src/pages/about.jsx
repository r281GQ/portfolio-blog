import React from 'react';

import AboutPage from '../components/AboutPage';

export default props => <AboutPage {...props} />;

export const about = graphql`
  query About {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "about" } } }) {
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
