import React, { Component } from 'react';

import TextContainer from './styled/textContainer';

export default class Welcome extends Component {
  render() {
    return (
      <TextContainer>
        Hey DUDE! It is awesome to have you here, have a look around or throw me
        a question!
      </TextContainer>
    );
  }
}
