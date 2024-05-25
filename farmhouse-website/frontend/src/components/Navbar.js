import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ONE80</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/accommodations">Accommodations</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="https://maps.app.goo.gl/DxJLTNtC4zGNwpvd7" target="_blank" rel="noopener noreferrer">Reviews</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
