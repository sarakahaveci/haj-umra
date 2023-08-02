// HajUmraDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const HajUmraDetails = () => {
  const { packageId } = useParams();

  // Replace this with your actual hajUmraData or API call
  const hajUmraData = {
    package1: {
      title: 'Haj Package 1',
      description: 'Detailed information about Haj Package 1.',
    },
    package2: {
      title: 'Umra Package 1',
      description: 'Detailed information about Umra Package 1.',
    },
    package3: {
      title: 'Haj Package 2',
      description: 'Detailed information about Haj Package 2.',
    },
    // Add more hajUmraData...
  };

  const packageDetails = hajUmraData[packageId];

  if (!packageDetails) {
    return <div>Package not found.</div>;
  }

  return (
    <div>
      <h2>{packageDetails.title}</h2>
      <p>{packageDetails.description}</p>
    </div>
  );
};

export default HajUmraDetails;
