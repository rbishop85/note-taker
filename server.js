// Require express
const express = require('express');
const path = require('path');
const fs = require('fs');
// Require the db.json file and store it in 'notes'
const notes = require('./db/db.json');

// Use express to intialize the 'app' server
const app = express();
// const PORT will need to be assigned to Heroku's dynamic port
const PORT = 3001;

// Have the 'app' use appropriate middleware to parse body data
// middle ware sample from activity 15, app.use(express.json()) and express.urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4 routes, maybe work on sorting the html routes and the api routes sorted into separate JS files (check pre-class from day 2)

// GET /notes should return the notes.html file.
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// GET * should return the index.html file.
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// GET /api/notes should read the db.json file and return all saved notes as JSON.
    // res.json()

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
    // accepting new note
    // pushing note to notes list
    // using notes list to update db.json file (FS module fs.writeFile (rewrite the entire file each time))


// Optional delete function will just delete the item from the array and then rewrite the json file?

// Use the 'app' to 'listen' to a PORT
app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);