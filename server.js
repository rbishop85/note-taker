// Require express
const express = require('express');
// Link to custom middleware clog file
const { clog } = require('./middleware/clog');
// Set link for router index
const routes = require('./routes/');
// Assign express to the app variabe
const app = express();
// Port set to either use the environment variable when live or 3001 if that variable isn't available
const PORT = process.env.PORT || 3001;

// Middleware called
app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder made available so individual routes don't have to be created for every resource.
app.use(express.static('public'));
// For any routes check the router index file
app.use('/', routes);

// Server set to listen to designated port and console log that it's live on that port
app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);