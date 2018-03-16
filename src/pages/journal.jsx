import React, { Component } from 'react';
import { string, number, shape, arrayOf } from 'prop-types';

import BlogPreview from '../components/BlogPreview';

export default class Journal extends Component {
  static propTypes = {
    data: shape({
      allMarkdownRemark: shape({
        edges: arrayOf(
          shape({
            frontmatter: shape({
              title: string,
              cover: string,
              date: number,
              type: string
            }),
            html: string
          })
        )
      })
    })
  };

  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;

    return (
      <div>
        {edges.map(
          ({
            node: { frontmatter: { path, title, type, cover, date }, html }
          }) => (
            <BlogPreview
              {...{ path, title, cover, type, date, html }}
              key={path}
            />
          )
        )}
      </div>
    );
  }
}

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
            type
            cover
            date
          }
        }
      }
    }
  }
`;
