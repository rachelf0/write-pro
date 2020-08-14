const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

// route from this router file to the noteRoutes file
router.use(noteRoutes);

module.exports = router;