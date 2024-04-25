// routes/adminRoutes.js

const express = require('express');
const router = express.Router();

// Example admin route
router.get('/', (req, res) => {
    // This should be adjusted to fetch and send back your actual admin data
    res.send('Admin data here');
});

module.exports = router;
