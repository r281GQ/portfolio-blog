import React, { Component } from 'react';
import { string } from 'prop-types';

import LeftLinkContainer from './leftLinkContainer';
import RightLinkContainer from './rightLinkContainer';
import BlogTypeContainer from './blogTypeContainer';
import { LinkWrapper } from './styled/linkWrapper';
import HeaderContainer from './styled/headerContainer';

const rightLinks = [
  { path: '/journal', name: 'Journal' },
  { path: '/projects', name: 'Projects' },
  { path: '/resume', name: 'Resume' }
];

const leftLink = { path: '/about', name: 'Blog' };

export default class Header extends Component {
  static propTypes = {
    activeLink: string
  };

  render() {
    const { activeLink } = this.props;

    return (
      <HeaderContainer>
        <LinkWrapper>
          <LeftLinkContainer link={leftLink} activeLink={activeLink} />
          <BlogTypeContainer />
          <RightLinkContainer links={rightLinks} activeLink={activeLink} />
        </LinkWrapper>
      </HeaderContainer>
    );
  }
}
