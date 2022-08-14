// Setup router function
const router = require('express').Router();
// Pulls in the path module, for designating directory paths
const path = require('path');

// Get request for /notes that returns the location of the notes.html page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Get request for every other possible addition that redirects to the index.html page
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Export the router
module.exports = router;