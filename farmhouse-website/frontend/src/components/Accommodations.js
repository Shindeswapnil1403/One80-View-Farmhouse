import React from 'react';

const Accommodations = () => {
  return (
    <div>
      <h1>Accommodations</h1>
      <p>Detailed descriptions of available accommodations with photos, amenities.</p>

      <div className="accommodations-container">
        <div className="accommodation-card">
          <img src="Terrace.jpg" alt="Terrace" />
          <h2>Terrace</h2>
          <p>A terrace can be a great place to relax and unwind, with comfortable seating, shade, and views of the surrounding area. A terrace can be used for viewing and photography, with panoramic views of the surrounding area, and opportunities to capture beautiful sunsets, landscapes, and other natural features. A terrace can be used for outdoor dining and entertaining, with tables, chairs, and other furniture for guests to enjoy.</p>
        </div>

        <div className="accommodation-card">
          <img src="Yard.jpg" alt="Yard" />
          <h2>Yard</h2>
          <p>A yard can be used for outdoor dining, barbecues, and social gatherings, with tables, chairs, and other furniture. A yard can be used for relaxation, meditation, and yoga, with comfortable seating and peaceful surroundings. A yard can be used as a safe and secure area for pets to play, exercise, and relax.</p>
        </div>

        <div className="accommodation-card">
          <img src="FV1.jpg" alt="FV1" />
          <h2>FarmHouse</h2>
          <p>Farmhouse that offers a unique and memorable experience for its guests. Nestled in a picturesque countryside setting, this rustic retreat provides a tranquil escape from the hustle and bustle of city life. With its cozy rooms, delicious farm-to-table cuisine, and stunning natural surroundings, Tarmhouse is the perfect destination for those seeking a relaxing getaway or an adventure-filled vacation. Whether you're looking to unwind, explore the great outdoors, or simply enjoy quality time with loved ones, Tarmhouse is the ideal place to do so. Book now and experience the warmth and hospitality of this special farmhouse for yourself!</p>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;