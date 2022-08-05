//require dependencies 
require("dotenv").config();

const express = require("express");
const app = express();

//import places controller
app.use("/places", require("./controllers/places"));

//homepage test
app.get("/", (req, res) => {
    res.send("test");
});

//404 page
app.get("*", (req, res) => {
    res.status(404).send("<h1>404 Page</h1>");
});


app.listen(process.env.PORT);