import React, { Component } from 'react';
import { shape, string } from 'prop-types';

import CardImage from './styled/cardImage';
import CardContainer from './styled/cardContainer';

import Link from '../Shared/Link';

export default class Project extends Component {
  static propTypes = {
    project: shape({
      frontmatter: shape({
        path: string,
        cover: string
      }),
      html: string
    })
  };

  render() {
    const { project: { frontmatter: { path, cover }, html } } = this.props;

    // eslint-disable-next-line
    const image = require(`../../../content/pictures/${cover}`);

    return (
      <Link to={path}>
        <CardContainer>
          <CardImage src={image} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardContainer>
      </Link>
    );
  }
}
