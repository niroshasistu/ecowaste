const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv =require ('dotenv')
const connectDB =require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// routes
app.use('/api/pickups', require('./routes/pickups'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/impact', require('./impact'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));