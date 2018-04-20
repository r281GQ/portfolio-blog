import React, { Component } from 'react';
import { string } from 'prop-types';

import LinkContainer from './linkContainer';
import LinkWrapper from './styled/linkWrapper';
import HeaderContainer from './styled/headerContainer';

const rightLinks = [
  { path: '/', name: 'Home' },
  { path: '/journal/1', name: 'Journal' },
  { path: '/projects', name: 'Projects' },
  { path: '/about', name: 'About' },
  { path: '/resume', name: 'Resume' }
];

const leftLinks = [
  { path: '/journal/1', name: 'All' },
  { path: '/journal/engineering/1', name: 'Code' },
  { path: '/journal/spirituality/1', name: 'Spirituality' },
  { path: '/journal/event/1', name: 'Event' },
  { path: '/journal/nutrition/1', name: 'Nutrition' }
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

  renderRightLinkContainer = activeLink => (
    <LinkContainer
      alignment="right"
      links={rightLinks}
      activeLink={activeLink}
    />
  );

  render() {
    const { activeLink } = this.props;

    return (
      <HeaderContainer>
        <LinkWrapper>
          {this.renderRightLinkContainer(activeLink)}
          {this.renderLeftLinkContainer(activeLink)}
        </LinkWrapper>
      </HeaderContainer>
    );
  }
}
