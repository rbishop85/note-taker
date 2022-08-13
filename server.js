const express = require('express');
const { clog } = require('./middleware/clog');
const routes = require('./routes/');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', routes);


app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);