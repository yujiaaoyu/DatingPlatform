const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        // Get token from header
        const jwtToken = req.header("token");
        // console.log(jwtToken);

        // Check if not token
        if (!jwtToken) {
            return res.status(403).json("Not Authorized");
        }

        // Verify token
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        // it is going to give us the user id (user:{id: user.id})
        req.user = payload.user;
        next();

    } catch (error) {
        console.log(error);
        return res.status(403).json("Token is not valid");
    }
}