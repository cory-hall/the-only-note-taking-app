const router = require('express').Router();
const db = ('../../db/db');

router.get('api/notes', (req, res) => {
   console.log(db);
})

module.exports = router;
