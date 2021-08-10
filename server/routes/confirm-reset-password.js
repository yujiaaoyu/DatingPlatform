const router = require("express").Router();
const validInfo = require("../middleware/validInfo");
const bcrypt = require("bcrypt");
const pool = require("../db");


// Confirm reset password

router.post("/", validInfo, async (req, res) => {

    const { email, password } = req.body; 
    
    try { 
        // encrypted the new password 
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        // updated password stored in the data base 
        const update_user = await pool.query("UPDATE users SET user_password = $1 WHERE user_email = $2 RETURNING *", [bcryptPassword, email]);
        
        if (update_user.rows.length === 0) {
            return res.json("Something went wrong.");
        }
        // send response
        res.json("Updated!");
    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

module.exports = router;