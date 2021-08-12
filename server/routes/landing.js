const router = require("express").Router();

// handle requst of landing page
router.get("/", async (req, res) => {
    try {
        res.json("hello from the landing page!");
    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

module.exports = router;