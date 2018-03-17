import React, { Component } from 'react';
import { node } from 'prop-types';

import StyledLink from './styled/link';

export default class Link extends Component {
  static propTypes = {
    children: node
  };

  render() {
    const { children } = this.props;
    return <StyledLink {...this.props}>{children} </StyledLink>;
  }
}
