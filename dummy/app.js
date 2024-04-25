// File: app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const submissionRoutes = require('./routes/submissionRoutes');
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct
const formRoutes = require('./routes/formRoutes');

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000'  // Set this to match the URL of your frontend application
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount the auth routes under '/api'
app.use('/api', authRoutes);
app.use('/api', submissionRoutes);
app.use('/api', formRoutes);

// Test endpoint to ensure file reading is correct
app.get('/test-file', (req, res) => {
  const filePath = path.join(__dirname, 'data/submissions.json');
  fs.readFile(filePath, (err, data) => {
      if (err) {
          console.error("Failed to read file:", err);
          return res.status(500).send('Failed to read file');
      }
      res.send(data.toString());
  });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
