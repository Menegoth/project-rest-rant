//require dependencies 
require("dotenv").config();
const express = require("express");
const app = express();

//express settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

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