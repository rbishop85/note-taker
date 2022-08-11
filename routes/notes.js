const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const notes = require('../db/db.json');

router.get('/', (req, res) => {
    return res.json(notes);
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/', (req, res) => {
    const { title, text } = req.body;
    if(title && text) {
      const newNote = {
        title,
        text,
        id: uuidv4()
      };
  
      notes.push(newNote);

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


// Optional delete function will just delete the item from the array and then rewrite the json file?

module.exports = router;