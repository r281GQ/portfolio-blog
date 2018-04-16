import React, { Component } from 'react';
import { string, number, shape, arrayOf } from 'prop-types';

import Container from './styled/container';

import BlogPreview from '../../components/BlogPreview';
import Link from '../../components/Shared/Link';

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
    console.log(this.props);
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
        {this.props.pathContext.currentPage !== 1 && (
          <Link to={`/journal/${this.props.pathContext.currentPage - 1}`}>
            previoues
          </Link>
        )}
        {this.props.pathContext.hasNext && (
          <Link to={`/journal/${this.props.pathContext.currentPage + 1}`}>
            next
          </Link>
        )}
      </Container>
    );
  }
}

export const allBlogPost = graphql`
  query filterBlogPosts($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { type: { eq: $tag }, category: { eq: "journal" } }
      }
      skip: $skip
      limit: $limit
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
