const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Routes
// Primer parametro es la ruta
// El segundo va a ser siempre req, res (request, response)
// Gets all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// Submits a post
router.post('/', async (req, res) => {
    //La informacion estara en req.body

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err })
    }
})

// gets a specific post
// el :asd nos da lo que el usuario escriba en la url. En asd podemos incluir el nombre que queramos
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err })
    }
})

// Deletes a specific post
router.delete('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        await post.remove()
        res.json({ message: "El post ha sido borrado" })

        // aunque tambien funcionaria lo siguiente
        //Post.remove({_id: req.params.postId})
    } catch (err) {
        res.json({ message: err })
    }
})

//Update a post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );

        res.json(updatedPost);

    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;