// Gallery.js

import React from 'react';
import { Link } from 'react-router-dom';
// import './Gallery.css'; // Import the styles

const GalleryHome = () => {
  const galleryData = [
    {
      id: 'package1',
      image: 'https://i.ibb.co/vjp2W02/gallery1.jpg',
      title: 'Haj Tours',
    },
    {
      id: 'package2',
      image: 'https://i.ibb.co/KFVrCV0/gallery9.jpg',
      title: 'Umra Tours',
    },
    {
      id: 'package3',
      image:'https://i.ibb.co/9cTfmQW/gallery7.jpg',
      title: 'Culture Tours',
    },
    {
      id: 'package3',
      image:'https://i.ibb.co/TB6rj6r/gallery8.jpg',
      title: 'Culture Tours',
    },
  ];

  return (
    <div className="gallery-section">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {galleryData.map((item) => (
          <Link key={item.id} to={`/gallery/`} className="gallery-link">
            <div className="gallery-column" style={{height:"200px", maxWidth: "245px"}}>
              <img src={item.image} alt={`Photo ${item.id}`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryHome;
