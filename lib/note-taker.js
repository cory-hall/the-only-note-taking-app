// required libraries
const fs = require('fs');
const path = require('path');
// generates a unique id
const { v4: uuidv4 } = require('uuid');

// function to create a new note and add it to the existing database
// returns the new note object
const createNewNote = (body, db) => {
   const newNote = body;
   newNote.id = uuidv4();
   db.push(newNote);
   console.log(newNote);
   fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(db, null, 2)
   );
   return newNote;
};

// function to find a note by it's id
// returns the found note object
const findById = (id, dbArray) => {
   const result = dbArray.filter(note => note.id === id)[0];
   return result;
};

// function to delete a note from it's id
// returns modified database
const deleteNote = (id, db) => {
   const result = findById(id, db);
   const index = (db.indexOf(result));
   db.splice(index, 1);
   fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(db, null, 2)
   );
   return db;
}

module.exports = { createNewNote, findById, deleteNote };