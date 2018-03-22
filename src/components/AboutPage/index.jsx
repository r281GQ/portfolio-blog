import React, { Component } from 'react';

import Container from './stlyed/container';
import Image from './stlyed/image';
import Content from './stlyed/content';

import Social from '../Social';
import Contact from '../Contact';
import Skills from '../Skills';

export default class BlogIndexPreview extends Component {
  render() {
    const content = this.props.data.allMarkdownRemark.edges[0].node.html;
    return (
      <Container>
        <Image />
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        <Social />
      </Container>
    );
  }
}
