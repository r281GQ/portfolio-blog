import React, { Component } from 'react';
import { any } from 'prop-types';

import BlogIndexPreviewItem from './blogIndexPreviewItem';

export default class BlogIndexPreview extends Component {
  static propTypes = {
    journalEntries: any
  };

  render() {
    const { journalEntries } = this.props;

    return (
      <div>
        {journalEntries.map(
          ({ frontmatter: { path, title, type, date }, html }) => (
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
