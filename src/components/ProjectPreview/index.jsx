import React, { Component } from 'react';

import CardImage from './styled/cardImage';
import CardContainer from './styled/cardContainer';

import Link from '../Shared/Link';

export default class Project extends Component {
  render() {
    const { project: { frontmatter: { path, cover }, html } } = this.props;

    return (
      <Link to={path}>
        <CardContainer>
          <CardImage src={cover} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </CardContainer>
      </Link>
    );
  }
}
