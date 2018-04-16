import React, { Component } from 'react';
import { any } from 'prop-types';

import Title from './styled/title';
import Container from './styled/container';

import BlogIndexPreviewItem from './blogIndexPreviewItem';

export default class BlogIndexPreview extends Component {
  static propTypes = {
    journalEntries: any
  };

  render() {
    const { journalEntries } = this.props;

    return (
      <Container>
        <Title>Journal entries</Title>
        {journalEntries.map(
          ({ frontmatter: { path, title, type, date }, html }) => (
            <BlogIndexPreviewItem
              {...{ title, type, date, html, path }}
              key={path}
            />
          )
        )}
      </Container>
    );
  }
}
