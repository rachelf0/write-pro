const path = require('path');
const router = require('express').Router();

// provides the notes page when requested
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// exports the functionality back to the server
module.exports = router;