const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

// main routes file
router.use(noteRoutes);

module.exports = router;