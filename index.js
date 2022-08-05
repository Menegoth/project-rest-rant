require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("test");
});

app.listen(process.env.PORT);