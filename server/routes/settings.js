const router = require("express").Router();
const authorization = require("../middleware/authorization");

// handle requst of settings page
router.get("/", authorization, async (req, res) => {
    try {
        console.log(req.user);

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

module.exports = router;