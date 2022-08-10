const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const notes = require('./db/db.json');

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// 4 routes, maybe work on sorting the html routes and the api routes sorted into separate JS files (check pre-class from day 2)

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  return res.json(notes);
});

// ?? Should this be under the /notes app.get above, or stay down here?
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/api/notes', (req, res) => {

  const { title, text } = req.body;

  if(title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4()
    };

    notes.push(newNote);

    const notesString = JSON.stringify(notes);

    fs.writeFile('./db/db.json', notesString, (err) =>
      err
        ? console.error(err)
        : console.log(`Note: ${newNote.title} has been written to storage`)
    );

    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting note');
  }

});
    // accepting new note
    // pushing note to notes list
    // using notes list to update db.json file (FS module fs.writeFile (rewrite the entire file each time))


// Optional delete function will just delete the item from the array and then rewrite the json file?

app.listen(PORT, () =>
  console.log(`Note taking app server running on port: ${PORT}!`)
);