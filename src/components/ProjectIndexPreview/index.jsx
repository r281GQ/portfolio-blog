import React, { Component } from 'react';

import Container from './styled/container';

import ProjectIndexPreviewCard from '../ProjectIndexPreviewCard';

export default class ProjectIndexPreview extends Component {
  render() {
    return (
      <Container>
        {this.props.projects.map(item => (
          <ProjectIndexPreviewCard project={item} />
        ))}
      </Container>
    );
  }
}
