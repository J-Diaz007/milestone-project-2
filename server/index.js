const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose")

// * Will load environment variables
dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/instagram"
const sayHello = (req, res) => {
    res.send({
        message: "Hello Dev!",
        secret: process.env.NOT_SO_SECRET,
    });
}

app.get("/",);

//routing
app.post("/api/posts", (req, res) => {

})

mongoose.connect(mongoUri)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})