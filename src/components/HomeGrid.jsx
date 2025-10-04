import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HomeCard from './HomeCard';

const HomeGrid = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <NavLink to="/killers" style={{ textDecoration: 'none' }}>
              <HomeCard
                title="Killers"
                description="Browse Killers"
                icon="images/icons/killer-icon.png"
              />
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/survivors" style={{ textDecoration: 'none' }}>
              <HomeCard
                title="Survivors"
                description="Browse Survivors"
                icon="images/icons/surv-icon.png"
              />
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/perks" style={{ textDecoration: 'none' }}>
              <HomeCard
                title="Perks"
                description="Browse Perks"
                icon="images/icons/perk-icon.png"
              />
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/maps" style={{ textDecoration: 'none' }}>
              <HomeCard
                title="Maps"
                description="Browse Maps"
                icon="images/icons/map-icon.png"
              />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeGrid;
