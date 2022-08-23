const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// IMPORT ROUTES
const postsRoute = require('./routes/posts');

// MIDDLEWARE
// function that executes when routes are hit
app.use('/posts', postsRoute);

// CONNECT TO DB
mongoose.connect(
    `${process.env.MONGO_CONNECTION_STRING}`, { useNewUrlParser: true },
    () => {
        console.log('connected to db');
    }
);

// ROUTES
app.get('/', (req, res) => {
    res.send('Home route');
});

// Listen to server
app.listen(3000);