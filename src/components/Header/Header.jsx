import React from 'react';

const Header = () => {
  const headerStyle = {
    background: 'blue',
    color: 'white',
    textAlign: 'center',
    padding: '10px', // Adjust as needed
  };
  return (
   <header style={headerStyle}>
      <h1>Gallery of Horns</h1>
    </header>
  );
};

export default Header;