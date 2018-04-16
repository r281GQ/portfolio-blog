/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async ({
  boundActionCreators: { createPage },
  graphql
}) => {
  const BlogPost = path.resolve('./src/components/BlogPost/index.jsx');

  const Project = path.resolve('./src/components/Project/index.jsx');

  const Blog = path.resolve('./src/components/BlogPage/index.jsx');

  const allEntries = await graphql(`
    {
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
              type
              category
              title
            }
          }
        }
      }
    }
  `);

  const allProjects = await graphql(`
    {
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
            }
          }
        }
      }
    }
  `);

  allProjects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: Project
    });
  });

  allEntries.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: BlogPost
    });
  });

  const ENTRIES_PER_PAGE = 2;

  allEntries.data.allMarkdownRemark.edges.forEach((item, number, array) => {
    if (number % ENTRIES_PER_PAGE === 0) {
      createPage({
        path: `/journal/${number / ENTRIES_PER_PAGE + 1}`,
        component: Blog,
        context: {
          limit: ENTRIES_PER_PAGE,
          skip: number,
          currentPage: number / ENTRIES_PER_PAGE + 1,
          hasNext: array.length >= number + ENTRIES_PER_PAGE
        }
      });
    }
  });

  const SPIRITUALITY = `spirituality`;
  const ENGINEERING = `engineering`;
  const NUTRITION = `nutrition`;
  const EVENT = `event`;

  const types = [SPIRITUALITY, ENGINEERING, NUTRITION, EVENT];

  types.forEach(tag => {
    allEntries.data.allMarkdownRemark.edges
      .filter(({ node }) => node.frontmatter.type === tag)
      .forEach((item, number, array) => {
        if (number % ENTRIES_PER_PAGE === 0) {
          createPage({
            path: `/journal/${tag}/${number / ENTRIES_PER_PAGE + 1}`,
            component: Blog,
            context: {
              tag,
              limit: ENTRIES_PER_PAGE,
              skip: number,
              currentPage: number / ENTRIES_PER_PAGE + 1,
              hasNext: array.length > number + ENTRIES_PER_PAGE
            }
          });
        }
      });
  });
};
