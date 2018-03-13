import React from 'react';
import Link from 'gatsby-link';

import LeftLinkContainer from './leftLinkContainer';
import RightLinkContainer from './rightLinkContainer';
import { LinkWrapper } from './styled/linkWrapper';
import { HeaderContainer } from './styled/headerContainer';

const rightLinks = [
  { path: '/blog', name: 'Blog' },
  { path: '/projects', name: 'Projects' },
  { path: '/resume', name: 'Resume' }
];

const leftLink = { path: '/about', name: 'Blog' };

export default ({ activeLink }) => (
  <HeaderContainer>
    <LinkWrapper>
      <LeftLinkContainer link={leftLink} activeLink={activeLink} />
      <RightLinkContainer links={rightLinks} activeLink={activeLink} />
    </LinkWrapper>
  </HeaderContainer>
);
