import React, { Component } from 'react';
import { string, shape, node } from 'prop-types';
import Helmet from 'react-helmet';

import SiteContainer from './Styled/siteContainer';
import MainContainer from './Styled/mainContainer';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.css';

export default class App extends Component {
  static propTypes = {
    children: node,
    location: shape({ pathname: string })
  };

  render() {
    const { children, location: { pathname } } = this.props;

    return (
      <SiteContainer>
        <Helmet
          title="Endre Vegh"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header activeLink={pathname} />
        <MainContainer>{children()}</MainContainer>
        <Footer />
      </SiteContainer>
    );
  }
}
