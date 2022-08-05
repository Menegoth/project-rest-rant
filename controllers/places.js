const router = require("express").Router();

//test places
router.get("/", (req, res) => {
    res.send("GET /places");
});

//export router
module.exports = router;