const mongoose = require('mongoose');

// Define the mongoDB connection URL
const mongoUrl = 'mongodb://localhost:27017/hotels';

// Set up MongoDB Connection 
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection 
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('MongoDB connected successfully');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export mongoose instead of db directly
module.exports = db;
