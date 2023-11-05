// * THE SCHEMA - Data structure that defines the shape and structure of documents in the MongoDB (noSQL) collection.
const mongoose = require('mongoose')

let postsSchema = new mongoose.Schema({
    imgUrl: { type: String, required: false },
    caption: { type: String, required: true }
});

module.exports = mongoose.model('Posts', postsSchema)