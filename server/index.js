const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// * Will load environment variables
dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send({
        message: "Hello Devs!",
        secret: process.env.NOT_SO_SECRET,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})