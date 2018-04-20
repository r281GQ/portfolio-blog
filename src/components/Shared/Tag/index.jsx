import React, { Component } from 'react';
import { string } from 'prop-types';
import Link from 'gatsby-link';

import Container from './styled/container';

export default class Tag extends Component {
  static propTypes = {
    type: string,
    size: string
  };

  render() {
    const { type, size } = this.props;

    return (
      <Link to={`/journal/${type}/1`} style={{ textDecoration: 'none' }}>
        <Container type={type} size={size}>
          {type}
        </Container>
      </Link>
    );
  }
}
