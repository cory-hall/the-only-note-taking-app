const router = require('express').Router();
const db = require('../../db/db');
const { createNewNote, findById, deleteNote} = require('../../lib/note-taker');

// get method to retrieve the notes database
router.get('/notes', (req, res) => {
   res.json(db);
});

// post method to add a new note to the notes database
router.post('/notes', (req, res) => {
   const newNote = createNewNote(req.body, db);
   res.json(newNote);
});

// delete method to delete a note from the notes database
router.delete('/notes/:id', (req, res) => {
   const data = deleteNote(req.params.id, db);
   res.send(data);
})

module.exports = router;