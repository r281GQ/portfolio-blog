import React from 'react';
import Helmet from 'react-helmet';

const About = props => (
  <div>
    <Helmet
      title="About"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />About page
  </div>
);

export default About;
