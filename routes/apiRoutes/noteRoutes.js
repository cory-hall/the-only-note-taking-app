const router = require('express').Router();
const db = require('../../db/db');
const createNewNote = require('../../lib/note-taker');

router.get('/notes', (req, res) => {
   res.json(db);
});

router.post('/notes', (req, res) => {
   const newNote = createNewNote(req.body, db);
   res.json(newNote);
});

module.exports = router;