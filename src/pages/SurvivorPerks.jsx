import React from 'react';
import DynamicGrid from '../components/DynamicGrid';

const SurvivorPerks = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-4 mb-4">
        Survivor Perks
      </h1>
      <div className="container justify-content-center mt-4 mb-4">
        <DynamicGrid elements="survivorperks" />
      </div>
    </>
  );
};

export default SurvivorPerks;
