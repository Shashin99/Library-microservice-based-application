// index.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/book_route');
const connectDB = require('./db_conn');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
