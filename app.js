const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// CONNECT TO DB
mongoose.connect(
    `${process.env.MONGO_CONNECTION_STRING}`, { useNewUrlParser: true },
    () => {
        console.log('connected to db');
    }
);

// MIDDLEWARES - function that executes when routes are hit
// app.use('/posts', () => {
//     console.log('hit the posts route');
// });

// ROUTES
app.get('/', (res) => {
    res.send('Home route');
});

app.get('/posts', (res) => {
    res.send('Posts route');
});

// Listen to server
app.listen(3000);