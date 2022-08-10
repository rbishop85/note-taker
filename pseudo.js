// Require express

// Require the db.json file and store it in 'notes'


// Use express to intialize the 'app' server

// const PORT will need to be assigned to Heroku's dynamic port


// Have the 'app' use appropriate middleware to parse body data
// middle ware sample from activity 15, app.use(express.json()) and express.urlencoded


// 4 routes, maybe work on sorting the html routes and the api routes sorted into separate JS files (check pre-class from day 2)

// GET /notes should return the notes.html file.




// GET /api/notes should read the db.json file and return all saved notes as JSON.
    // res.json()

// ?? Should this be under the /notes app.get above, or stay down here?
// GET * should return the index.html file.

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
    // accepting new note
    // pushing note to notes list
    // using notes list to update db.json file (FS module fs.writeFile (rewrite the entire file each time))


// Optional delete function will just delete the item from the array and then rewrite the json file?

// Use the 'app' to 'listen' to a PORT