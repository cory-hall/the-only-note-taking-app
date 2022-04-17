const fs = require('fs');
const path = require('path');

function createNewNote(body, dbArray) {
   const newNote = body;
   dbArray.push(newNote);
   fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(dbArray, null, 2)
   );
   return newNote;
}

module.exports = createNewNote;