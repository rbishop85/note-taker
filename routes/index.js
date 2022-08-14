// Setup router function
const router = require('express').Router();

// Setup route api/notes requests
const noteRoutes = require('./notes');
// Setup route for html requests
const htmlRoutes = require('./html')

// Assign requests for /api/notes to follow link to that router
router.use('/api/notes', noteRoutes);
// Assign all other requests to follow the link to the html router
router.use('/', htmlRoutes);

// Export the router
module.exports = router;