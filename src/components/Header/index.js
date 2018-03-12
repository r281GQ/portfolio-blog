import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        position: 'relative',
        margin: '0 auto',
        maxWidth: 1400,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Endre Vegh
        </Link>
      </h1>
      <div style={{ position: 'absolute', right: 0, top: 0, height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <div style={{ flexBasis: 100, padding: 25 }}> Blog </div>
          <div style={{ flexBasis: 100, padding: 25 }}> Projects </div>
          <div style={{ flexBasis: 100, padding: 25 }}> Resume </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
