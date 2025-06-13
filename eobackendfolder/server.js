const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load .env variables
dotenv.config();
console.log('MONGO URI:', process.env.MONGO_URI); // You 
// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/pickups', require('./routes/pickups'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/impact', require('./routes/impact'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
