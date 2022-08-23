const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('posts route');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;