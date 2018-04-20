import React, { Component } from 'react';
import { string, number, bool, shape, arrayOf } from 'prop-types';

import Container from './styled/container';

import BlogPreview from '../../components/BlogPreview';
import PaginationLinks from './paginationLinks';

export default class Journal extends Component {
  static propTypes = {
    pathContext: shape({
      tag: string,
      currentPage: number,
      hasNext: bool
    }),
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

    const {
      data: { allMarkdownRemark: { edges } },
      pathContext: { tag, currentPage, hasNext }
    } = this.props;

    const paginationLinksProps = { tag, currentPage, hasNext };

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
        <PaginationLinks {...paginationLinksProps} />
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
