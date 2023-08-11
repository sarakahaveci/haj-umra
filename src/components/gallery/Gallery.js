// Gallery.js
import React from 'react';
import './Gallery.css'
import gallery1 from '../images/gallery1.jpeg';
import gallery2 from '../images/gallery2.jpeg';
import gallery3 from '../images/gallery3.jpeg';
import gallery4 from '../images/gallery4.png';
import gallery5 from '../images/gallery5.jpeg';
import gallery6 from '../images/gallery6.jpeg';

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-column">
          <img src={gallery1} alt="kabaa 1" />
        </div>
        <div className="gallery-column">
          <img src={gallery2} alt="gallery 2" />
        </div>
        <div className="gallery-column">
          <img src={gallery3} alt="gallery 3" />
        </div>
        <div className="gallery-column">
          <img src={gallery4} alt="gallery 4" />
        </div>
        <div className="gallery-column">
          <img src={gallery5} alt="gallery 5" />
        </div>
        <div className="gallery-column">
          <img src={gallery6} alt="gallery 6" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
