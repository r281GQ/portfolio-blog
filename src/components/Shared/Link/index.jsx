import React, { Component } from 'react';
import { node, string } from 'prop-types';

import StyledLink from './styled/link';

export default class Link extends Component {
  static propTypes = {
    children: node,
    to: string
  };

  render() {
    const { children, to } = this.props;
    return <StyledLink to={to}>{children} </StyledLink>;
  }
}
