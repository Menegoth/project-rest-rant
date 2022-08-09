const router = require("express").Router();

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