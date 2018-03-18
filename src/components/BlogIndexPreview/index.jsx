import React, { Component } from 'react';
import { any } from 'prop-types';

import BlogIndexPreviewItem from './blogIndexPreviewItem';

export default class BlogIndexPreview extends Component {
  static propTypes = {
    edges: any
  };

  render() {
    const { edges } = this.props;

    return (
      <div>
        {edges.map(
          ({ node: { frontmatter: { path, title, type, date }, html } }) => (
            <BlogIndexPreviewItem
              {...{ title, type, date, html, path }}
              key={path}
            />
          )
        )}
      </div>
    );
  }
}
