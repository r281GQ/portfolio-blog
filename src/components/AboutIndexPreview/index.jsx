import React, { Component } from 'react';

import AboutContainer from './styled/aboutContainer';
import TextWrapper from './styled/textWrapper';

import Link from '../Shared/Link';
import Avatar from '../Shared/Avatar';

import profile from '../../../content/home/profile.jpg';

export default class AboutPreview extends Component {
  render() {
    return (
      <AboutContainer>
        <Link to="/about">
          <Avatar src={profile} />
          <TextWrapper>
            My name is Endre. I do a lot of random stuff. A real nerd with an
            hunger for learning new things. Here you can find the things I am
            working on. Currently creating the most helpful network at
            Helpfulpeeps.
          </TextWrapper>
        </Link>
      </AboutContainer>
    );
  }
}
