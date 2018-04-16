import React, { Component } from 'react';

import IconWrapper from './styled/iconWrapper';
import Container from './styled/container';

import { SocialIcon } from 'react-social-icons';

const networks = [
  { url: '', network: 'linkedin', color: 'purple' },
  { url: '', network: 'email', color: 'purple' },
  { url: '', network: 'twitter', color: 'purple' },
  { url: '', network: 'github', color: 'purple' }
];

export default class Social extends Component {
  renderIcons = ({ vertical }, networks) =>
    networks.map(props => (
      <IconWrapper vertical={vertical} key={props.network}>
        <SocialIcon {...props} />
      </IconWrapper>
    ));

  render() {
    return (
      <Container {...this.props}>
        {this.renderIcons(this.props, networks)}
      </Container>
    );
  }
}
