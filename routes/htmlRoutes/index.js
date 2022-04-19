const path = require('path');
const router = require('express').Router();

// router method to direct to notes page
router.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// router method to default direction to index page
router.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;