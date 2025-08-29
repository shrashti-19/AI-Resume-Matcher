const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const resumeRoutes = require('./routes/resume');
const jobRoutes = require('./routes/job');

// Use routes
app.use('/api/resume', resumeRoutes);
app.use('/api/job', jobRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'AI Resume Matcher Backend is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});