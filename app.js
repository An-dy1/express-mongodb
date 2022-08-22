const express = require('express');

const app = express();

// MIDDLEWARES - function that executes when routes are hit
// app.use('/posts', () => {
//     console.log('hit the posts route');
// });

// ROUTES
app.get('/', (req, res) => {
    res.send('Home route');
});

app.get('/posts', (req, res) => {
    res.send('Posts route');
});

// Listen to server
app.listen(3000);