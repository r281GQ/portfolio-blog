import React, { Component } from 'react';
import { string } from 'prop-types';
import Link from 'gatsby-link';

import Container from './styled/container';

export default class Tag extends Component {
  static propTypes = {
    type: string
  };

  render() {
    const { type } = this.props;

    return (
      <Link to={`/blog/${type}`} style={{ textDecoration: 'none' }}>
        <Container type={type}>{type}</Container>
      </Link>
    );
  }
}
