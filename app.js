const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

// IMPORT ROUTES
const postsRoute = require('./routes/posts');

// MIDDLEWARE
// function that executes when routes are hit
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', postsRoute);

// CONNECT TO DB
mongoose.connect(
    `${process.env.MONGO_CONNECTION_STRING}`, { useNewUrlParser: true },
    () => {
        console.log('connected to db');
    }
);

// BASIC ROUTES
app.get('/', (req, res) => {
    res.send('Home route');
});

// Listen to server
app.listen(3000);