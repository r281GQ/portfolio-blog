import React, { Component } from 'react';

import Container from './styled/container';

import ProjectPreview from '../ProjectPreview';

export default class ProjectsPage extends Component {
  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;

    return (
      <Container>
        {edges.map(({ node }) => (
          <ProjectPreview project={node} key={node.frontmatter.path} />
        ))}
      </Container>
    );
  }
}
