import React from 'react';

// "attributes" come in as "props"
function HornedBeast( {props} ) {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const cardStyle = {
    textAlign: 'center',
    margin: '10px',
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
  };
  return (
    <div style={containerStyle}>
      {props.map(item => (
        <div key={item._id} style={cardStyle}>
          <img src={item.image_url} alt={item.title} style={imageStyle} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Keyword: {item.keyword}</p>
          <p>Horns: {item.horns}</p>
        </div>
      ))}
    </div>
  );
}

export default HornedBeast;