import React, { Component } from 'react';
import { string, shape } from 'prop-types';

import Container from './styled/container';
import Title from './styled/title';
import Image from './styled/image';

import Link from '../Shared/Link';

export default class Card extends Component {
  static propTypes = {
    project: shape({
      frontmatter: shape({
        path: string,
        title: string,
        cover: string
      })
    })
  };

  render() {
    const { project: { frontmatter: { path, title, cover } } } = this.props;

    return (
      <Link to={path}>
        <Container>
          <Title>{title}</Title>
          <Image src={cover} />
        </Container>
      </Link>
    );
  }
}
