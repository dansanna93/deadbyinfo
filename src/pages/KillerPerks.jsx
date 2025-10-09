import React from 'react';
import DynamicGrid from '../components/DynamicGrid';

const KillerPerks = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-4 mb-4">Killer Perks</h1>
      <div className="container justify-content-center mt-4 mb-4">
        <DynamicGrid elements="killerperks" />
      </div>
    </>
  );
};

export default KillerPerks;
