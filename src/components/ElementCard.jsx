import React from 'react';
import { Card } from 'react-bootstrap';

const ElementCard = ({ title, icon }) => {
  return (
    <>
      <Card style={{ width: '18rem' }} className="bg-dark text-light">
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default ElementCard;
