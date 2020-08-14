const fs = require('fs');
const path = require('path');

// creates a new note and adds it to the database
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

// takes a data object's id and returns that object's index within the database
function findIndexById(id, notesArray) {
    
}