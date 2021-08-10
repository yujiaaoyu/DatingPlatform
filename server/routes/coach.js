const router = require("express").Router();
const pool = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const authorization = require("../middleware/authorization");
const {cloudinary} =  require("../utils/cloudinary");

// Server side to handle requests ralating to coaches.

router.post('/upload', authorization, async (req, res) => {
    try {
        
        // Get the coach
        const coach = req.user;

        // file information in base64
        const fileStr = req.body.data;
        
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'a9oldzhq'
        });

        // console.log(uploadedResponse);

        const exist = await pool.query("SELECT * FROM coach_images WHERE (coach_id) = $1", [coach]);

        // user haven't upload any images before
        if (!exist.rows[0]) {
            await pool.query("INSERT INTO coach_images (coach_id, url) VALUES ($1, $2) ", [coach, uploadedResponse.secure_url]);
        } else {
            // user have images uploaded but not reach the limit
            if (!exist.rows.length != 6) {
                await pool.query("INSERT INTO coach_images (coach_id, url) VALUES ($1, $2) ", [coach, uploadedResponse.secure_url]);
            } else {
                // user already have 6 images stored
                return res.json("You already have 6 images.");
            }
        };

        // give the response
        res.json("Saved!");

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

// Get all the images of a specific user
router.get('/', authorization, async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM coach_images");
        console.log(data.rows);
        // send to client
        res.json(data.rows);
    } catch (error) {
        console.error(error.message);
    }
});


// 
router.post("/add", authorization, async (req, res) => {
    try {
    
        // Get the user_id
        const user = req.user;

        // get data from the boday of request
        const { first_name, last_name, gender, country, city, about, birth, expertise } = req.body;

        // check whether user has registered before
        const userInfo = await pool.query("SELECT user_email, user_password from users WHERE user_id = $1", [user]);
        console.log(userInfo.rows[0]);
        
        // get email and password from the data base
        const email = userInfo.rows[0].user_email;
        const password = userInfo.rows[0].user_password;
        console.log(email);
        console.log(password);

        // add data to database
        await pool.query("INSERT INTO coaches (email, password) VALUES ($1, $2) RETURNING *", 
        [email, password]);

        if (first_name) {
            await pool.query("UPDATE coaches SET first_name = $1 WHERE email = $2", [first_name, email]);
        }
        if (last_name) {
            await pool.query("UPDATE coaches SET last_name = $1 WHERE email = $2", [last_name, email]);
        }
        if (gender) {
            await pool.query("UPDATE coaches SET gender = $1 WHERE email = $2", [gender, email]);
        }
        if (country) {
            await pool.query("UPDATE coaches SET country = $1 WHERE email = $2", [country, email]);
        }
        if (city) {
            await pool.query("UPDATE coaches SET city = $1 WHERE email = $2", [city, email]);
        }
        if (about) {
            await pool.query("UPDATE coaches SET about = $1 WHERE email = $2", [about, email]);
        }
        if (birth) {
            await pool.query("UPDATE coaches SET birth = $1 WHERE email = $2", [birth, email]);
        }
        if (expertise) {
            await pool.query("UPDATE coaches SET speciality = $1 WHERE email = $2", [expertise, email]);
        }
        
        // send response to client
        res.json("Saved!");

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

module.exports = router;