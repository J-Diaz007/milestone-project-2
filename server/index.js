const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/instagram";

// Connect to MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successfully connecting to MongoDB
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error("Could not connect to MongoDB", err);
  });

const sayHello = (req, res) => {
  res.send({
    message: "Hello Dev!",
    secret: process.env.NOT_SO_SECRET,
  });
}

// Define a route for the root path ("/") with the sayHello handler
app.get("/", sayHello);

// Define your other routes here
app.post("/api/posts", (req, res) => {
  // Define the logic for handling POST requests to /api/posts
});

// You can define more routes as needed
