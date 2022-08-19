const router = require('express').Router();
const db = require("../models");

//GET /
router.get('/', (req, res) => {
  db.Place.find()
    .then(places => {
        res.status(302).render("places/index", { places })
    })
    .catch(err => {
        console.log("err", err)
        res.status(404).render("error404")
    })
})

//POST /
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
        res.status(303).redirect("/places")
    })
    .catch(err => {
        if (err && err.name === "ValidationError") {
            let message = "Validation Error: "
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}. `
                message += `${err.errors[field].message}`
            }
            console.log("Validation error message", message)
            res.render("places/new", {message})
        } else {
            res.render("error404")
        }
    })
})

//GET /new
router.get('/new', (req, res) => {
  res.render('places/new');
})

//GET /:id
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
        res.status(302).render("places/show", { place })
    })
    .catch(err => {
        console.log("err", err)
        res.status(404).render("error404")
    })
})

//PUT /:id
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub');
})

//DELETE /:id
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub');
})

//GET /:id/edit
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub');
})

//POST /:id/rant
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub');
})

//DELETE /:id/rant/:rantId
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub');
})

module.exports = router;