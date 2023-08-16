// Gallery.js
import React from "react";
import "./Gallery.css";
import gallery7 from "../images/gallery7.jpeg";
import gallery8 from "../images/gallery8.jpeg";
import gallery9 from "../images/gallery9.jpeg";
import gallery10 from "../images/gallery10.jpeg";
import gallery1 from "../images/gallery1.jpg";
import gallery14 from "../images/gallery14.jpeg";
import video1 from '../images/video1.MOV'
import video2 from '../images/video2.MOV'
import video3 from '../images/video3.MOV'
import video4 from '../images/video4.MOV'
import video5 from '../images/video5.MOV'
import video6 from '../images/video6.MOV'

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
      <div className="gallery-column">
      <img src={gallery1} alt="gallery7" />
    </div>
        <div className="gallery-column">
          <img src={gallery7} alt="gallery7" />
        </div>
        <div className="gallery-column">
          <img src={gallery8} alt="gallery8" />
        </div>
        <div className="gallery-column">
          <img src={gallery9} alt="gallery9" />
        </div>
        <div className="gallery-column">
          <img src={gallery10} alt="gallery10" />
        </div>
        <div className="gallery-column">
          <img src={gallery14} alt="gallery14" />
        </div>
        <div className="gallery-column">
          <video className="gallery-item" controls>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="gallery-column">
        <video className="gallery-item" controls>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="gallery-column">
          <video className="gallery-item" controls>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="gallery-column">
        <video className="gallery-item" controls>
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="gallery-column">
      <video className="gallery-item" controls>
        <source src={video5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="gallery-column">
    <video className="gallery-item" controls>
      <source src={video6} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
      </div>
    </div>
  );
};

export default Gallery;