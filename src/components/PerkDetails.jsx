import React from 'react';
import { useLocation } from 'react-router-dom';

const PerkDetails = () => {
  const location = useLocation();
  const { perkName, perkDescription } = location.state || {};
  return (
    <>
      <h1 className="d-flex justify-content-center mt-4 mb-4">{perkName}</h1>
      <div className="d-flex justify-content-center">
        <p dangerouslySetInnerHTML={{ __html: perkDescription }} />
      </div>
    </>
  );
};

export default PerkDetails;
