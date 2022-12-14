const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
}, { collection: 'posts' });

module.exports = mongoose.model('Post', PostSchema);