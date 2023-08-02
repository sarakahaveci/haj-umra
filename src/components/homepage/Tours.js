// Tours.js

import React from 'react';
import './Tours.css'; 
import TourDetails from './TourDetails';
import { Link } from 'react-router-dom';

const Tours = () => {
  const toursData = [
    {
      image: 'https://images.unsplash.com/photo-1511652019870-fbd8713560bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80',
      title: 'Tour 1',
      info: 'Tour 1 Info and Booking',
    },
    {
      image: 'https://images.unsplash.com/photo-1511652019870-fbd8713560bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80',
      title: 'Tour 2',
      info: 'Tour 2 Info and Booking',
    },
    {
      image: 'https://images.unsplash.com/photo-1511652019870-fbd8713560bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80',
      title: 'Tour 3',
      info: 'Tour 3 Info and Booking',
    },
    {
      image: 'https://images.unsplash.com/photo-1511652019870-fbd8713560bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80',
      title: 'Tour 4',
      info: 'Tour 4 Info and Booking',
    },
    {
      image: 'https://images.unsplash.com/photo-1511652019870-fbd8713560bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80',
      title: 'Tour 5',
      info: 'Tour 5 Info and Booking',
    },
    {
      image: 'https://images.unsplash.com/photo-1511652019870-fbd8713560bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80',
      title: 'Tour 6',
      info: 'Tour 6 Info and Booking',
    },
    // {
    //   image: 'tour3.jpg',
    //   title: 'Tour 3',
    //   info: 'Tour 3 Info and Booking',
    // },
    // {
    //   image: 'tour3.jpg',
    //   title: 'Tour 3',
    //   info: 'Tour 3 Info and Booking',
    // },
    // {
    //   image: 'tour3.jpg',
    //   title: 'Tour 3',
    //   info: 'Tour 3 Info and Booking',
    // },
    // Add more tour data here...
  ];

  return (
    <div className="booking-section">
      <h2>Our Tours</h2>
      {/* Create a 3x3 grid */}
      <div className="tour-grid">
        {toursData.map((tour) => (
          <Link key={tour.id} to={`/tours/${tour.id}`} className="tour-link">
            <div className="tour-column">
              <img src={tour.image} alt={tour.title} />
              <p>{tour.info}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="all-tours-button">
        <Link to="/tours" className="all-tours-link">
          All Tours
        </Link>
      </div>
    </div>
  );
};

export default Tours;
