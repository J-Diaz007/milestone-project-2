const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Posts = require("./models/posts");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/instagram"

app.get("/", (req, res) => {
    res.send("Hello Dev")
});

app.post("/api/posts", (req, res) => {
    let newPost = { ...req.body };
    Posts.create(newPost, (err, post) => {
        if (err) {
            return res.status(500).json({ message: "Error creating post", error: err });
        }
        res.json(post);
    });
});


mongoose.connect(mongoUri,)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})