// Gallery.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'; // Import the styles

const Gallery = () => {
  const galleryData = [
    {
      id: 'package1',
      image: 'https://images.unsplash.com/photo-1589827577276-65d717348780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Haj Tours',
    },
    {
      id: 'package2',
      image: 'https://images.unsplash.com/photo-1589827577276-65d717348780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Umra Tours',
    },
    {
      id: 'package3',
      image:'https://images.unsplash.com/photo-1589827577276-65d717348780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Culture Tours',
    },
    {
      id: 'package3',
      image:'https://images.unsplash.com/photo-1589827577276-65d717348780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Culture Tours',
    },
  ];

  return (
    <div className="gallery-section">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {galleryData.map((item) => (
          <Link key={item.id} to={`/gallery/${item.id}`} className="gallery-link">
            <div className="gallery-column">
              <img src={item.image} alt={`Photo ${item.id}`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
