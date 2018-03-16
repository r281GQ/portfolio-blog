import React, { Component } from 'react';
import { string } from 'prop-types';

import StyledContent from './styled/content';

export default class PreviewContent extends Component {
  static propTypes = {
    content: string
  };

  render() {
    const { content } = this.props;

    return (
      <StyledContent
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    );
  }
}
