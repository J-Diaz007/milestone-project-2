const mongoose = require('mongoose')

let postsSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    caption: { type: String, required: true }
})

module.exports = mongoose.model('Post', postsSchema)
