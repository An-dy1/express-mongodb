const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts).status(200);
    } catch (err) {
        res.send({ message: err });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.send(post).status(200);
    } catch (err) {
        res.status(404).send({ message: err });
    }
});

// POST
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
    });
    try {
        const savedPost = await post.save();
        res.send(savedPost).status(201);
    } catch (err) {
        // todo: format error message better
        res.send({ message: err });
    }

    // old school style of handling promises
    // post
    //     .save()
    //     .then((data) => {
    //         res.send(req.body).status(201);
    //     })
    //     .catch((error) => {
    //         res.send({ message: error });
    //     });
});

// DELETE
router.delete('/:id', async(req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.id });
        res.send(removedPost).status(200);
    } catch (err) {
        res.status(404).send({ message: err });
    }
});

// UPDATE
router.patch('/:id', async(req, res) => {
    let newVersionPost = {};
    req.body.title ? (newVersionPost.title = req.body.title) : null;
    req.body.description ?
        (newVersionPost.description = req.body.description) :
        null;
    req.body.image ? (newVersionPost.image = req.body.image) : null;

    console.log(newVersionPost);
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.id }, { $set: newVersionPost });
        res.status(200).send(updatedPost);
    } catch (err) {
        res.status(500).send({ message: err });
    }
});

module.exports = router;