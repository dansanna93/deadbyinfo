import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const captionStyle = {
  position: 'static', // Remove absolute positioning
  width: '100%',
  textAlign: 'center',
  background: 'rgba(0,0,0,0.6)', // Optional: dark background for readability
  color: '#fff',
  padding: '1rem 0',
  marginTop: '0.5rem',
  borderRadius: '0.5rem',
};

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="/images/carousel/killer-slide.jpg"
            alt="Killer"
            className="d-block"
            style={{ width: '50%' }}
          />
        </div>
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Killer</h3>
            <p>
              As a killer, your goal is to kill all the survivors before they
              can escape!
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="/images/carousel/survivor-slide.jpg"
            alt="Survivor"
            className="d-block"
            style={{ width: '50%' }}
          />
        </div>
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Survivor</h3>
            <p>
              As a survivor, your goal is to repair all the generators and open
              the exit gates to escape the trial!
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            src="/images/carousel/killer-surv-slide.jpg"
            alt="Play!"
            className="d-block"
            style={{ width: '50%' }}
          />
        </div>
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Play now!</h3>
            <p>Let the trial begin and remember: Death is not an escape.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
