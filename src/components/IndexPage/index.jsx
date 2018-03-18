import React, { Component } from 'react';
import { any, arrayOf, shape } from 'prop-types';

import FlexContainer from './styled/flexContainer';

import AboutPreview from '../AboutIndexPreview';
import BlogIndexPreview from '../BlogIndexPreview';
import ProjectPreview from '../ProjectIndexPreview';
import Welcome from '../Welcome';

export default class Index extends Component {
  static propTypes = {
    data: shape({
      allMarkdownRemark: shape({
        edges: arrayOf(any)
      })
    })
  };

  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;

    return (
      <div>
        <Welcome />
        <FlexContainer>
          <AboutPreview />
          <BlogIndexPreview edges={edges} />
          <ProjectPreview />
        </FlexContainer>
      </div>
    );
  }
}
