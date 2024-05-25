import React from 'react';

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <p>A photo gallery showcasing the farmhouse and surrounding views.</p>

      <div className="image-grid">
      <img src="Customer.jpg" alt="Image 1" className="gallery-image" />
        <img src="FV1.jpg" alt="Image 2" className="gallery-image" />
        <img src="Rentals.jpg" alt="Image 3" className="gallery-image" />
        <img src="Sunset.jpg" alt="Image 4" className="gallery-image" />
        <img src="Home.jpg" alt="Image 5" className="gallery-image" />
        <img src="Road.jpg" alt="Image 6" className="gallery-image" />
      </div>
    </div>
  );
};

export default Gallery;
