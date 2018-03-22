import React, { Component } from 'react';
import { string, shape, element, node, func, oneOfType } from 'prop-types';
import Helmet from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';

import SiteContainer from './styled/siteContainer';
import MainContainer from './styled/mainContainer';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './index.css';

export default class App extends Component {
  static propTypes = {
    children: oneOfType([node, element, func]),
    location: shape({ pathname: string })
  };

  render() {
    const { children, location: { pathname } } = this.props;

    return (
      <ThemeProvider theme={{ stuff: 'red' }}>
        <SiteContainer>
          <Helmet
            title="Endre Vegh"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          />
          <Header activeLink={pathname} />
          <MainContainer full={pathname === '/' ? true : false}>
            {children()}
          </MainContainer>
          <Footer />
        </SiteContainer>
      </ThemeProvider>
    );
  }
}
