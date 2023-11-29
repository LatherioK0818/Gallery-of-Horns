// HornedBeast.jsx
import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';

function HornedBeast({ item }) {
  const [favorites, setFavorites] = useState(0);

  const containerStyle = {
    textAlign: 'center',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    background: "teal",
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
  };

  const handleVote = () => {
    setFavorites(favorites + 1);
  };

  return (
    <Card style={containerStyle}>
      <Card.Img variant="top" src={item.image_url} alt={item.title} style={imageStyle} />
      <Card.Body><h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Keyword: {item.keyword}</p>
      <p>Horns: {item.horns}</p>
      <p>Favorites: {favorites}</p>
      <Button onClick={handleVote} variant="primary">Vote for {item.name}</Button>
      </Card.Body>
    </Card>
  );
}

export default HornedBeast;
