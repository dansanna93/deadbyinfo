import React from 'react';
import MyCarousel from '../components/MyCarousel';
import HomeGrid from '../components/HomeGrid';
const Home = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center">Dead by Info</h1>
      <MyCarousel />
      <div className="container justify-content-center mt-4 mb-4">
        <HomeGrid />
      </div>
    </>
  );
};

export default Home;
