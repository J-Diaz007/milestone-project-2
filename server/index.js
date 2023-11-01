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
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/instagram";

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

app.post("/api/posts", (req, res) => {
    let newPost = { ...req.body };

    Posts.create(newPost)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            console.error("Error creating post:", err);
            res.status(500).json({ message: "Error creating post", error: err.message });
        });
});


app.get("/api/posts", (req, res) => {
    Posts.find({})
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            console.error("error fetching the post data", err)
            res.status(500).json({ error: err.message })
        })
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
