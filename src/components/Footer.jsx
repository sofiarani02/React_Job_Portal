import React from 'react';

function Footer() {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#363636',
    padding: '0.5px',
    textAlign: 'center',
    color: 'white',
  };

  return (
    <footer style={footerStyle}>
      <p>All Rights Reserved |  Copyrights 2024</p>
    </footer>
  );
}

export default Footer;
