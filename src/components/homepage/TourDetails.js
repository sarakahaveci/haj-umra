// TourDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
  const { tourId } = useParams();

  // Replace this with your actual tour data or API call
  const tourData = {
    tour1: {
        id:'1',
      title: 'Tour 1',
      description: 'Detailed information about Tour 1.',
    },
    tour2: {
        id:'2',
      title: 'Tour 2',
      description: 'Detailed information about Tour 2.',
    },
    tour3: {
        id:'3',
      title: 'Tour 3',
      description: 'Detailed information about Tour 3.',
    },
    tour4: {
        id:'4',
        title: 'Tour 4',
        description: 'Detailed information about Tour 4.',
      },
      tour5: {
        id:'5',
        title: 'Tour 5',
        description: 'Detailed information about Tour 5.',
      },
      tour6: {
        id:'6',
        title: 'Tour 6',
        description: 'Detailed information about Tour 6.',
      },
      
  };
  

  const tour = tourData[tourId];

  if (!tour) {
    return <div>Tour not found.</div>;
  }

  return (
    <div>
      <h2>{tour.title}</h2>
      <p>{tour.description}</p>
    </div>
  );
};

export default TourDetails;
