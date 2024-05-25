const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  checkIn: Date,
  checkOut: Date,
  roomType: String
});

module.exports = mongoose.model('Booking', bookingSchema);
