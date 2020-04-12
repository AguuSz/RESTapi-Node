const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

//Import routes
const postsRoute = require('./routes/posts');

// Middleware para evitar tener que poner /posts en todas las rutas de posts.js
app.use('/posts', postsRoute);

// Middlewares (function that executes when routes are being called)

// Routes
// Primer parametro es la ruta
// El segundo va a ser siempre req, res (request, response)
app.get('/', (request, response) => {
    response.send("We are at home")
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Connected to DB'))
app.listen(1212);