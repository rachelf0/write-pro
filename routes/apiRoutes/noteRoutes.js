const router = require('express').Router();
const { notes } = require('../../data/db.json');
const { createNewNote, deleteNote, findIndexById } = require('../../lib/Note');

// returns database
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// takes user input, passes to the Note.js file to create a new note object
router.post('/notes', (req, res) => {

    //gives each note a unique id
    let highestID = notes[notes.length-1].id;

    req.body.id = (parseInt(highestID) + 1).toString();

    // creates new note
    const note = createNewNote(req.body, notes);

    res.json(note);
});

// delete button
router.delete('/notes/:id', (req, res) => {
    let results = notes;

    const index = findIndexById(req.params.id, notes);
    console.log('delete called on index: ',index);

    if (index || index === '0'){
        deleteNote(index,notes);
        res.json(results);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;

