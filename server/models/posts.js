const mongoose = require('mongoose')

let postsSchema = new mongoose.Schema({
    imgUrl: { type: String, required: true },
    caption: { type: String, required: true }
});

module.exports = mongoose.model('Posts', postsSchema)
