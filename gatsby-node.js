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

  const Blog = path.resolve('./src/components/BlogPage/index.jsx');

  const allEntries = await graphql(`
    {
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
  `);

  allEntries.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: BlogPost
    });
  });

  createPage({
    path: '/journal/engineering',
    component: Blog,
    context: {
      tag: 'engineering'
    }
  });

  createPage({
    path: '/journal/spirituality',
    component: Blog,
    context: {
      tag: 'spirituality'
    }
  });

  createPage({
    path: '/journal/event',
    component: Blog,
    context: {
      tag: 'event'
    }
  });

  createPage({
    path: '/journal/nutrition',
    component: Blog,
    context: {
      tag: 'nutrition'
    }
  });
};
