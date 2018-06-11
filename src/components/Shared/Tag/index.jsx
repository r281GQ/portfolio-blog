import React, { Component } from 'react';
import { string } from 'prop-types';

import Container from './styled/container';

export default class Tag extends Component {
  static propTypes = {
    type: string,
    size: string
  };

  render = () => {
    const { type, size } = this.props;

    return (
      <Container type={type} size={size}>
        {type}
      </Container>
    );
  };
}
