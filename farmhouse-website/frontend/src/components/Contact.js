import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
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
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message Sent Successfully!');
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" className="contact-input" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" className="contact-input" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="contact-input" onChange={handleChange} />
        <textarea name="message" placeholder="Message" className="contact-input" rows="6" onChange={handleChange}></textarea>
        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
