import React from 'react';
import DynamicGrid from '../components/DynamicGrid';

const Survivors = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-4 mb-4">Survivors</h1>
      <div className="container justify-content-center mt-4 mb-4">
        <DynamicGrid elements="survivors" />
      </div>
    </>
  );
};

export default Survivors;
