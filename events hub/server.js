const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/eventsHub')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);

// Start the Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
