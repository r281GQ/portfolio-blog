import React, { Component } from 'react';
import { arrayOf, any } from 'prop-types';

import Container from './styled/container';

import ProjectIndexPreviewCard from '../ProjectIndexPreviewCard';

export default class ProjectIndexPreview extends Component {
  static propTypes = {
    projects: arrayOf(any)
  };

  render() {
    return (
      <Container>
        <div style={{ marginBottom: 10 }}>Projects</div>
        {this.props.projects.map((item, index) => (
          <ProjectIndexPreviewCard project={item} key={index} />
        ))}
      </Container>
    );
  }
}
