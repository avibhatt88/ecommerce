// routes/masterRoutes.js
const express = require('express');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.get('/master', authenticate, (req, res) => {
    res.json({ message: 'Master API accessed successfully', user: req.user });
});

module.exports = router;
