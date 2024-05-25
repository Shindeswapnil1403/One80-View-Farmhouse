const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/farmhouse', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const bookingRouter = require('./routes/booking');

app.use('/api/bookings', bookingRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
