const fs = require('fs');
const { createNewNote, findById, deleteNote } = require('../lib/note-taker');
const db = require('../db/db.json');

jest.mock('fs');

test('creates a new note', () => {
   const testNote = createNewNote(
      {title: "test title", text: "test text"},
      db
   );

   expect(testNote.title).toBe("test title");
   expect(testNote.text).toBe("test text");
});

test("finds note by id", () => {
   const testNotes = [
      {
         title: "First note",
         text: "This is the first note",
         id: "1"
      },
      {
         title: "Second note",
         text: "This is the second note",
         id: "2"
      }
   ];

   const result = findById("2", testNotes);

   expect(result.title).toBe("Second note");
});

test("deletes note by id param", () => {
   const testNotes = [
      {
         title: "First note",
         text: "This is the first note",
         id: "1"
      },
      {
         title: "Second note",
         text: "This is the second note",
         id: "2"
      }
   ];

   const result = deleteNote("1", testNotes);

   expect(result.length).toEqual(1);
})
