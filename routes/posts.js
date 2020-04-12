const express = require('express');

const router = express.Router();

// Routes
// Primer parametro es la ruta
// El segundo va a ser siempre req, res (request, response)
router.get('/', (request, response) => {
    response.send("We are on posts")
})

router.get('/dou', (request, response) => {
    response.send("We are on DOOOOU")
})

module.exports = router;