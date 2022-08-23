const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('posts route');
});

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    });
    post
        .save()
        .then((data) => {
            res.send(req.body).status(200);
        })
        .catch((error) => {
            res.send({ message: error });
        });
});

module.exports = router;