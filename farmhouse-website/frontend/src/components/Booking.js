import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css'; // Import the CSS file for styling

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      alert('Booking Successful!');
    } catch (error) {
      console.error('There was an error making the booking!', error);
    }
  };

  return (
    <div className="booking-container">
      <h1 className="booking-heading">Booking</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="booking-input" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="booking-input" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" className="booking-input" onChange={handleChange} />
        <input type="date" name="checkIn" className="booking-input" onChange={handleChange} />
        <input type="date" name="checkOut" className="booking-input" onChange={handleChange} />
        <input type="text" name="roomType" placeholder="Room Type" className="booking-input" onChange={handleChange} />
        <button type="submit" className="booking-submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
