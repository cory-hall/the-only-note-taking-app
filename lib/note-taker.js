const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const createNewNote = (body, dbArray) => {
   const newNote = body;
   newNote.id = uuidv4();
   dbArray.push(newNote);
   console.log(newNote);
   fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(dbArray, null, 2)
   );
   return newNote;
};

const findById = (id, dbArray) => {
   const result = dbArray.filter(note => note.id === id)[0];
   return result;
}

module.exports = { createNewNote, findById };