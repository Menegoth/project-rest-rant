const router = require("express").Router();

//GET places/new
router.get("/new", (req, res) => {
    res.render("places/new");
});

//POST places
router.post("/", (req, res) => {
    res.send("POST /places");
});

//GET places
router.get("/", (req, res) => {
    //test objects
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/burger-and-fries.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/peanuts.jpg'
      }]
      
    res.render("places/index", { places });
});

//export router
module.exports = router;