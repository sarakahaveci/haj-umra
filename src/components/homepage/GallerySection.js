// GallerySection.js

import React from 'react';
import { useParams } from 'react-router-dom';

const GallerySection = () => {
  const { photoId } = useParams();

  // Replace this with your actual galleryData or API call
  const galleryData = {
    photo1: {
      image: 'url_to_large_image_1',
    },
    photo2: {
      image: 'url_to_large_image_2',
    },
    photo3: {
      image: 'url_to_large_image_3',
    },
    photo4: {
      image: 'url_to_large_image_4',
    },
  };

  const photo = galleryData[photoId];

  if (!photo) {
    return <div>Photo not found.</div>;
  }

  return (
    <div>
      <img src={photo.image} alt={`Photo ${photoId}`} />
    </div>
  );
};

export default GallerySection;
