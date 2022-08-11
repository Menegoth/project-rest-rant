const router = require("express").Router();
const places = require("../models/places.js");

//GET places/new
router.get("/new", (req, res) => {
    res.status(303).res.render("places/new");
});

//GET places/:id
router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(404).render("error404");
    } else if (!places[id]) {
        res.status(404).render("error404");
    } else {
        res.status(303).render("places/show", { place: places[id] });
    }
});

//POST places
router.post("/", (req, res) => {
    console.log(req.body);
    if (!req.body.pic) {
        //default image
        req.body.pic = "http://placekitten.com/400/400"
    }
    if (!req.body.city) {
        //default city
        req.body.city = "Anytown";
    }
    if (!req.body.state) {
        //default state
        req.body.state = "USA";
    }
    places.push(req.body);
    res.redirect("/places");
});

//GET places
router.get("/", (req, res) => {
    res.status(303).render("places/index", { places });
});

//export router
module.exports = router;