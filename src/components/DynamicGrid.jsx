import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ElementCard from './ElementCard';
import MySpinner from './MySpinner';

const DynamicGrid = ({ elements }) => {
  const API_URL = '/api/';
  const [items, setItems] = useState([]);
  const [iconPath, setIconPath] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      var apiUrl;
      switch (elements) {
        case 'killers':
          apiUrl = API_URL + 'characters?role=killer';
          setIconPath('/images/killer-icons/');
          break;
        case 'survivors':
          apiUrl = API_URL + 'characters?role=survivor';
          setIconPath('/images/surv-icons/');
          break;
        case 'killer-perks':
          apiUrl = API_URL + 'perks?role=killer';
          break;
        case 'survivor-perks':
          apiUrl = API_URL + 'perks?role=survivor';
          break;
        case 'maps':
          apiUrl = API_URL + 'maps';
          break;
      }

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        const itemsArray = Object.values(data);
        setItems(itemsArray);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchItems();
    console.log(items);
  }, [elements]);
  return (
    <>
      {items.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <MySpinner />
        </div>
      ) : (
        <Container>
          <Row>
            {items.map((item, idx) => (
              <Col key={idx} md={3} className="mb-4">
                <NavLink
                  to={
                    elements === 'killers'
                      ? '/killers/' + item.name
                      : '/survivors/' + item.name
                  }
                  style={{ textDecoration: 'none' }}
                  state={{
                    characterUrl:
                      'characterinfo?character=' + item.id + '&includeperks',
                    icon:
                      item.name === 'William "Bill" Overbeck'
                        ? +iconPath + 'William Bill Overbeck.png'
                        : +iconPath + item.name + '.png',
                  }}
                >
                  <ElementCard
                    title={item.name}
                    icon={
                      item.name === 'William "Bill" Overbeck'
                        ? iconPath + 'William Bill Overbeck.png'
                        : iconPath + item.name + '.png'
                    }
                  />
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default DynamicGrid;
