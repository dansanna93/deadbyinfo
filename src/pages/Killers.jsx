import React from 'react';
import DynamicGrid from '../components/DynamicGrid';

const Killers = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-4 mb-4">Killers</h1>
      <div className="container justify-content-center mt-4 mb-4">
        <DynamicGrid elements="killers" />
      </div>
    </>
  );
};

export default Killers;
