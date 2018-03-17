import React, { Component } from 'react';
import { string } from 'prop-types';

import LinkContainer from './linkContainer';
import LinkWrapper from './styled/linkWrapper';
import HeaderContainer from './styled/headerContainer';

const rightLinks = [
  { path: '/', name: 'Home' },
  { path: '/journal', name: 'Journal' },
  { path: '/projects', name: 'Projects' },
  { path: '/about', name: 'About' },
  { path: '/resume', name: 'Resume' }
];

const leftLinks = [
  { path: '/journal/engineering', name: 'Engineering' },
  { path: '/journal/spirituality', name: 'Spirituality' },
  { path: '/journal/event', name: 'Event/Travel' },
  { path: '/journal/nutrition', name: 'Nutrition' }
];

export default class Header extends Component {
  static propTypes = {
    activeLink: string
  };

  renderLeftLinkContainer = activeLink =>
    activeLink.includes('/journal') && (
      <LinkContainer
        alignment="left"
        links={leftLinks}
        activeLink={activeLink}
      />
    );

  render() {
    const { activeLink } = this.props;

    return (
      <HeaderContainer>
        <LinkWrapper>
          {this.renderLeftLinkContainer(activeLink)}
          <LinkContainer
            alignment="right"
            links={rightLinks}
            activeLink={activeLink}
          />
        </LinkWrapper>
      </HeaderContainer>
    );
  }
}
