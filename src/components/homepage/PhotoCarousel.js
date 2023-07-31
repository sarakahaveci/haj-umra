import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from '../images/slide1.jpeg';

const PhotoCarousel = () => {
  // Replace these image URLs with your actual photo URLs
  const images = [
   <img src={slide1} alt="Kabaa Photo"/>, 
    <img src="https://ibb.co/vd9K1Nv"/>,
   <img src="https://ibb.co/BcB2Zp2"/>,
    // Add more image URLs here
  ];

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
