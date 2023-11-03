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

// * Post a new post
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

// * Get a new post
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

// * Update a post (PUT or PATCH)
app.put("/api/posts/:id", (req, res) => {
  const postId = req.params.id;
  const updatedPostData = { ...req.body }; // * Update the fields you want here

  Posts.findByIdAndUpdate(postId, updatedPostData, { new: true, runValidators: true, context: 'query' })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json(post);
    })
    .catch((err) => {
      console.error("Error updating post:", err);
      res.status(500).json({ message: "Error updating post", error: err.message });
    });
});

// * Delete a post
app.delete("/api/posts/:id", (req, res) => {
  const postId = req.params.id;

  Posts.findByIdAndRemove(postId)
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json({ message: "Post deleted" });
    })
    .catch((err) => {
      console.error("Error deleting post:", err);
      res.status(500).json({ message: "Error deleting post", error: err.message });
    });
});

// * Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
