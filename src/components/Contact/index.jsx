import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faPhone';
import faInbox from '@fortawesome/fontawesome-free-solid/faInbox';
// import faInbox from '@fortawesome/fontawesome-free-solid/';

export default class Social extends Component {
  render() {

   
    return (<div>
    
    
     //phone
     <FontAwesomeIcon icon={faCoffee} />
     //email
     <FontAwesomeIcon icon={faInbox} />
     //linkedin
     //twitter
     //github
     //lives in bristol
     </div>)
  }
}
