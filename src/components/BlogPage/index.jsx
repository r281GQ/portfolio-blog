import React, { Component } from 'react';
import { string, number, shape, arrayOf } from 'prop-types';

import Container from './styled/container';

import BlogPreview from '../../components/BlogPreview';

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
    if (
      !this.props.data ||
      (this.props.data && !this.props.data.allMarkdownRemark)
    ) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: '100%'
          }}
        >
          <div>There are no posts in this category yet!</div>
        </div>
      );
    }

    const { data: { allMarkdownRemark: { edges } } } = this.props;

    return (
      <Container>
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
      </Container>
    );
  }
}

export const allBlogPost = graphql`
  query filterBlogPosts($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: $tag } } }) {
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
