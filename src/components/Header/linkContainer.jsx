import React, { Component } from 'react';
import { oneOf, string, arrayOf, shape } from 'prop-types';

import LinkFlexContainer from './styled/linkFlexContainer';
import Link from './styled/headerLink';
import LinkFlexWrapper from './styled/linkFlexWrapper';
import LinkFlex from './styled/linkFlex';

export default class LinkContainer extends Component {
  static propTypes = {
    links: arrayOf(
      shape({
        name: string,
        path: string
      })
    ),
    activeLink: string,
    alignment: oneOf(['right', 'left'])
  };

  render() {
    const { links, activeLink, alignment } = this.props;

    return (
      <LinkFlexContainer alignment={alignment}>
        <LinkFlex>
          {links.map(({ path, name }) => (
            <LinkFlexWrapper key={path}>
              <Link to={path} active={activeLink === path}>
                {name}
              </Link>
            </LinkFlexWrapper>
          ))}
        </LinkFlex>
      </LinkFlexContainer>
    );
  }
}
