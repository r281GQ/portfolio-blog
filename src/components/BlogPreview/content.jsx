import React, { Component } from 'react';
import { string } from 'prop-types';

import StyledPreviewContent from './styled/previewContent';

const getExcerpt = content => {
  const firstParagraph = content.split('\n')[0];
  const tagsRemoved = firstParagraph.slice(3, -4);
  const whitespaceTrimmed = tagsRemoved.trim();
  const lengthTrimmed = whitespaceTrimmed.substring(0, 220);
  if (whitespaceTrimmed === lengthTrimmed) {
    return whitespaceTrimmed;
  } else {
    return lengthTrimmed + '\u2026';
  }
};

export { getExcerpt };

export default class PreviewContent extends Component {
  static propTypes = {
    content: string
  };

  render() {
    const { content } = this.props;

    return (
      <StyledPreviewContent
        dangerouslySetInnerHTML={{
          // __html: html.substring(0, Math.min(html.length, 500))
          __html: getExcerpt(content)
        }}
      />
    );
  }
}
