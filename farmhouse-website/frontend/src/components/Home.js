import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
      <section className="home-section">
        <div className="home-content">
          <h1>Welcome to One80 View Farmhouse</h1>
          <p>Experience the charm and beauty of our historic farmhouse.</p>
          
          <Link to="/booking" className="home-button">Book Now</Link>
        </div>
      </section>
    );
  };

export default Home;
