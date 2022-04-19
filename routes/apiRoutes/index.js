const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

// main api routes file
router.use(noteRoutes);

module.exports = router;