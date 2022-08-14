# Note Taker

An app designed to take and store notes to a json file on a backend expresss server.

---

Created by: Robert Bishop

This project is intended as a homework assignment for class.  Questions, comments, suggestions and constructive criticism are always welcome.

<a href="mailto: rbishop85@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://github.com/rbishop85" target="_blank"><img src="	https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://www.linkedin.com/in/robert-m-bishop/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>

---

## Contents:
* [Demo](#demo)
* [Live App](#live-app)
* [Install](#install)
* [Usage](#usage)
* [Skills/Concepts Used](#skillsconcepts-used)
* [Steps Taken](#steps-taken)
* [Thoughts/Future Ideas](#thoughtsfuture-ideas)
* [Links](#links)
* [License](#license)

---

## Demo:

> Video demoing team profile generator in action.

https://user-images.githubusercontent.com/103389448/184518293-799c5fe0-bee8-4a30-bbbb-ec835257788f.mp4

---

## Live App:

The app is hosted live via Heroku <a href="https://rb-hw11-note-taker.herokuapp.com/" target="_blank">Here</a>.

---

## Install:

To install this app, after downloading it, make sure to run:
```
npm i
```
This will ensure that the necessary dependencies are pulled down, in this case "Express" for running the back-end server and "UUID" for generating random ids.

---

## Usage:

After dependencies have been loaded, simly key the following into your command prompt to start the app.
```
node server.js
```
Once the command prompt verifies that the server is running, load up your browser and navigate to http://localhost:3001/ to see the front-end of the application.

---

## Skills/Concepts Used:

* Javascript
  - Node.js
  - Express
  - FS (File System)
  - Modular Routing
  - C.R.U.D. (Create, Read, Update, Delete)

---

## Steps Taken:

- [x] Created repo and copied in starter files.
- [x] Installed and setup dependencies.
- [x] Created get routes for the index and notes html pages.
- [x] Setup api route for retrieving notes.
- [x] Setup api route for posting new notes.
- [x] Worked on formatting of note object, utilizing the uuid npm to define a unique ID.
- [x] Set new note to be added to stored notes.
- [x] Setup dynamic port settings for once app is hosted (Heroku).
- [x] Setup modular routing for api routes.
- [x] Pulled in a middleware function for logging requests.
- [x] Setup delete note route and functionality.
- [x] Changed html get requests to utilize modular routing.
- [x] Added detailed notes and created README.

---

## Thoughts/Future Ideas:

If this project grew I could see adding a functionality to be able to search through your notes.  Maybe migrate the whole thing over mySQL instead of the basic json file storage system.

---

## Links:

<a href="https://nodejs.org/en/" target="_blank">Node.js</a>

<a href="https://expressjs.com/" target="_blank">Express</a>

<a href="https://www.npmjs.com/package/uuid" target="_blank">UUID</a>

---

## License:


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

[Top of Page](#note-taker)

