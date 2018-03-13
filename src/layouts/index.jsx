import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { SiteContainer } from './Styled/siteContainer';
import { MainContainer } from './Styled/mainContainer';

import './index.css';

export default ({ children, location: { pathname } }) => (
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
