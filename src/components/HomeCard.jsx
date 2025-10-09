import React from 'react';
import { Card } from 'react-bootstrap';

const HomeCard = ({ title, description, icon }) => {
  return (
    <>
      <Card
        style={{ width: '18rem', height: '25rem' }}
        className="bg-dark text-light"
      >
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeCard;
