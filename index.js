//require dependencies 
require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//import places controller
app.use("/places", require("./controllers/places"));

//homepage test
app.get("/", (req, res) => {
    res.render("home");
});

//404 page
app.get("*", (req, res) => {
    res.status(404).render("error404");
});


app.listen(process.env.PORT);