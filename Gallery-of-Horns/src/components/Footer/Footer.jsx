import React from 'react';

const Footer = () => {
  const footerStyle ={
    background: 'blue',
    color: 'white',
    textAlign: 'center',
    fontweight: 'bold',
    padding: '15px', /* Adjust as needed */
  };
  return (
    <footer style={footerStyle}>
      <p>Author: Latherio Kidd &copy; 2023;</p>
    </footer>
  );
};

export default Footer;