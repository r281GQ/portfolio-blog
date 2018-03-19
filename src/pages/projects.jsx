import React from 'react';

import ProjectsPage from '../components/ProjectsPage';

export default props => <ProjectsPage {...props} />;

export const allProjects = graphql`
  query AllProjects {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "project" } } }
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
