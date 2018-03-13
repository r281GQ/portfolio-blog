import React from 'react';

import {
  StyledLink,
  StyledRightLinkWrapper,
  StyledRightLinkFlex,
  StyledRightLinkContainer
} from './styled/headerLink';

export default ({ links, activeLink }) => (
  <StyledRightLinkContainer>
    <StyledRightLinkFlex>
      {links.map(({ path, name }) => (
        <StyledRightLinkWrapper key={path}>
          <StyledLink to={path} active={activeLink === path}>
            {name}
          </StyledLink>
        </StyledRightLinkWrapper>
      ))}
    </StyledRightLinkFlex>
  </StyledRightLinkContainer>
);
