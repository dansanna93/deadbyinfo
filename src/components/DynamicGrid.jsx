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
  const routeMap = {
    killers: '/killers/',
    survivors: '/survivors/',
    killerperks: '/killer-perks/',
    survivorperks: '/survivor-perks/',
    maps: '/maps/',
  };

  const substituteTunables = (description, tunables) => {
    let flatTunables = [];
    if (Array.isArray(tunables)) {
      if (typeof description !== 'string') return '';
      flatTunables = tunables.reduce((acc, val) => acc.concat(val), []);
    }
    return description.replace(
      /\{(\d+)\}/g,
      (_, idx) => flatTunables[idx] ?? `{${idx}}`
    );
  };

  const stateMap = {
    killers: (item) => ({
      characterUrl: 'characterinfo?character=' + item.id + '&includeperks',
    }),
    survivors: (item) => ({
      characterUrl: 'characterinfo?character=' + item.id + '&includeperks',
    }),
    killerperks: (item) => ({
      perkName: item.name,
      perkDescription: substituteTunables(item.description, item.tunables),
      imagePath: '/images/killer-perks/',
    }),
    survivorperks: (item) => ({
      perkName: item.name,
      perkDescription: substituteTunables(item.description, item.tunables),
      imagePath: '/images/surv-perks/',
    }),
    maps: (item) => ({}),
  };

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
        case 'killerperks':
          apiUrl = API_URL + 'perks?role=killer';
          setIconPath('/images/killer-perks/');
          break;
        case 'survivorperks':
          apiUrl = API_URL + 'perks?role=survivor';
          setIconPath('/images/surv-perks/');
          break;
        case 'maps':
          apiUrl = API_URL + 'maps';
          break;
      }

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(Object.keys(data));
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
                  to={routeMap[elements] + item.name}
                  style={{ textDecoration: 'none' }}
                  state={stateMap[elements] ? stateMap[elements](item) : {}}
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
