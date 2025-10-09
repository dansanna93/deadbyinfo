import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ElementCard from './ElementCard';
import MySpinner from './MySpinner';

const CharacterDetails = ({ type }) => {
  const API_URL = '/api/';
  const location = useLocation();
  const { characterUrl } = location.state || {};
  const [character, setCharacter] = useState({});
  const [iconPath, setIconPath] = useState('');
  const finalUrl = API_URL + characterUrl;
  console.log(finalUrl);

  useEffect(() => {
    switch (type) {
      case 'killer':
        setIconPath('/images/killer-icons/');
        break;
      case 'survivor':
        setIconPath('/images/surv-icons/');
        break;
    }
  }, [type]);
  useEffect(() => {
    console.log('iconPath updated:', iconPath);
  }, [iconPath]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(finalUrl);
        const data = await res.json();
        console.log(data);
        setCharacter(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    fetchDetails();
    console.log(character);
    console.log(iconPath);
  }, [finalUrl]);
  return (
    <>
      <h1 className="d-flex justify-content-center mt-4">{character.name}</h1>
      <Container className="d-flex justify-content-center mt-4">
        <Row>
          <Col>
            {iconPath && character.name ? (
              <ElementCard
                title={character.name}
                icon={
                  character.name === 'William "Bill" Overbeck'
                    ? iconPath + 'William Bill Overbeck.png'
                    : iconPath + character.name + '.png'
                }
              />
            ) : (
              <MySpinner />
            )}
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center mt-4">
        <Row>
          {character.perks
            ? character.perks.map((perk) => (
                <Col key={perk.id}>
                  <ElementCard title={perk.name} />
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </>
  );
};

export default CharacterDetails;
