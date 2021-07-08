const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");
        // console.log(jwtToken);

        if (!jwtToken) {
            return res.status(403).json("Not Authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;
        next();

    } catch (error) {
        // console.log(error);
        return res.status(403).json("Not Authorize");
    }
}