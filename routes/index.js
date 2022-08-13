const router = require('express').Router();

const noteRoutes = require('./notes');
const htmlRoutes = require('./html')

router.use('/api/notes', noteRoutes);

router.use('/', htmlRoutes);

module.exports = router;