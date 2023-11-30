import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';



function HornedBeast({ item }) {
  const [favorites, setFavorites] = useState(0);
  const [show, setShow] = useState(false);

  const handleVote = () => {
    setFavorites(favorites + 1);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card onClick={handleShow}>
      <Card.Body><h3>{item.title}</h3>
      <Card.Img variant="top" src={item.image_url} alt={item.title} />
      <p>{item.description}</p>
      <p>Keyword: {item.keyword}</p>
      <p>Horns: {item.horns}</p>
      <p>Favorites: {favorites}</p>
      <Button onClick={handleVote} variant="primary">Vote for {item.name}</Button>
      </Card.Body>
    </Card>
      {/* MODAL */}
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <img src={item.image_url} alt={item.title}/>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Keyword: {item.keyword}</p>
              <p>Horns: {item.horns}</p>
              <p>Favorites: {favorites}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="top" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default HornedBeast;
