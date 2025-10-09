import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeCard from './HomeCard';
import { NavLink } from 'react-router-dom';

const PerksGrid = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-4">Perks</h1>
      <Container className="d-flex justify-content-center mt-4">
        <Row className="g-5">
          <Col>
            <NavLink to="/killer-perks/" style={{ textDecoration: 'none' }}>
              <HomeCard
                title="Killer Perks"
                description="Browse Killer Perks"
                icon="/images/icons/killer-icon.png"
              />
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/survivor-perks/" style={{ textDecoration: 'none' }}>
              <HomeCard
                title="Survivor Perks"
                description="Browse Survivor Perks"
                icon="/images/icons/surv-icon.png"
              />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PerksGrid;
