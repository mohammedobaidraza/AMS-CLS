// File: routes/submissionRoutes.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Importing the function to generate a UUID


router.get('/submissions', (req, res) => {
  const filePath = path.join(__dirname, '../data/submissions.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error("Error reading file:", err);
          return res.status(500).send('Error reading the submissions file');
      }
      try {
          const submissions = JSON.parse(data);
          res.json(submissions);
      } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          res.status(500).send('Error processing request');
      }
  });
});
router.get('/submissions/:id', (req, res) => {
  const { id } = req.params; // Extract the id from the request parameters

  const filePath = path.join(__dirname, '../data/submissions.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
          console.error("Error reading file:", err);
          return res.status(500).send('Error reading the submissions file');
      }
      try {
          const submissions = JSON.parse(data);
          // Use a double equals (==) to allow type coercion or handle the parsing as needed
          const submission = submissions.find(sub => sub.id == id); 
          if (submission) {
              res.json(submission);
          } else {
              res.status(404).send('Submission not found');
          }
      } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          res.status(500).send('Error processing request');
      }
  });
});

// ... (export the router)

module.exports = router;