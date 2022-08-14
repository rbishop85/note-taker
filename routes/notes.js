// Setup router function
const router = require('express').Router();
// Require UUID npm for setting random IDs
const { v4: uuidv4 } = require('uuid');
// Require fs functionality to write files
const fs = require('fs');

// Assign contents of db.json to notes variable
let notes = require('../db/db.json');

// For get requests pointing to /api/notes return contents of db.json
router.get('/', (req, res) => {
    return res.json(notes);
});

// Post request for adding a new note
router.post('/', (req, res) => {
    // Pull the title and text from the post request's body
    const { title, text } = req.body;
    // If a title and text are received then begin generating note
    if(title && text) {
      // Create new note by using the provided title and text, then adding a randomly generated ID using uuid
      const newNote = {
        title,
        text,
        id: uuidv4()
      };

      // Push the new note to the existing array of notes pulled from the db.json file
      notes.push(newNote);

      // Write a new db.json file using the updated data
      fs.writeFile('./db/db.json', JSON.stringify(notes, null, 4), (err) =>
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

// Delete request for removing notes
router.delete('/:id', (req, res) => {
  // Assign the id parameter incuded in the request to an id variable
  const id = req.params.id;
  // If an id is available, begin process
  if(id) {
    // Reassign the notes array using only notes that don't include the id sent in the request
    notes = notes.filter(note => note.id !== id);
      
    // Write a new db.json file using the updated data
    fs.writeFile(`./db/db.json`, JSON.stringify(notes, null, 4), (err) =>
      err
      ? console.error(err)
      : console.log(`Note with id ${id} has been deleted from JSON file`)
    );

    const response = {
      status: 'success',
      id: id
    };

    res.status(201).json(response);
  } else {
      res.status(500).json('Error deleting note');
  }
});

// Export the router
module.exports = router;