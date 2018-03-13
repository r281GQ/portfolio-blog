import React from 'react';
import Link from 'gatsby-link';

import { LeftLinkWrapper, StyledLink } from './styled/headerLink';

export default ({ link: { path, name }, activeLink }) => (
  <LeftLinkWrapper>
    <StyledLink to={path} active={activeLink === path}>
      {name}
    </StyledLink>
  </LeftLinkWrapper>
);
