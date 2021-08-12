const router = require("express").Router();
const pool = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");
const nodemailer = require('nodemailer');



//registering

router.post("/register", validInfo, async(req, res) => {
    try {
        //1. destructure the req.body (name, email, password)

        const { first_name, last_name, email, password, confirm_password, area, speciality } = req.body;
        console.log(area);
        console.log(speciality);

        //2. check if user exist (if user exist then throw error)
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", 
        [email]);

        if(user.rows.length !== 0) {
            return res.status(401).json("User already exist!");
        }

        //3.Bcrypt the user password
        if (password === confirm_password) {

            const saltRound = 10;
            const salt = await bcrypt.genSalt(saltRound);

            const bcryptPassword = await bcrypt.hash(password, salt);

            //4. enter the new user inside our database

            if (area && speciality) {
                const newCoach = await pool.query("INSERT INTO coaches (first_name, last_name, email, password, areas, speciality) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
                [first_name, last_name, email, bcryptPassword, area, [speciality] ]);
            }

            const newUser = await pool.query("INSERT INTO users (first_name, last_name, user_email, user_password) VALUES($1, $2, $3, $4) RETURNING *", [first_name, last_name, email, bcryptPassword]);
            // res.json(newUser.rows[0]);

            //5.generating our jwt token
            const token = jwtGenerator(newUser.rows[0].user_id);
            res.json( { token } );

        } else {
            res.json("Password doesn't match!");
            console.log("Password doesn't match!");
        }


    } catch (error) {
        console.error(error.message);
        console.log(error);
        res.status(500).send("Server Error");
    }
});

//login route

router.post("/login", validInfo, async (req, res) => {
    try {
        //1. destructure the req.body

        const {email, password } = req.body;


        //2. check if user doesn't exist (if not then we throw error)

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect");
        }

        //3. check if incoming password is the same the database password

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

        // console.log(validPassword);
        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect");
        }

        //4. give them the jwt token

        const token = jwtGenerator(user.rows[0].user_id);

        res.json({ token });
        
    } catch (error) {
        console.error(error.message);
        console.log(error);
        res.status(500).send("Server Error");
    }
});

// Edit Profile 

router.post("/editProfile/add", validInfo, async (req, res) => {
    try {

        //req.header has the token
        const token = req.header("token");
        if (!token) {
            return res.status(403).json("Not Authorized");
        }
        const payload = jwt.verify(token, process.env.jwtSecret);

        //req.user has the payload
        // it is going to give us the user id (user:{id: user.id})
        req.user = payload.user;
      
        const {first_name, last_name, age, gender, country, city} = req.body;
        
        //enter the user_profile inside our database
       
        const user_id = req.user;

        if (first_name) {
            await pool.query("UPDATE users SET first_name = $1 WHERE user_id = $2", [first_name, user_id]);
        }
        if (last_name) {
            await pool.query("UPDATE users SET last_name = $1 WHERE user_id = $2", [last_name, user_id]);
        }
        if (age) {
            await pool.query("UPDATE users SET age = $1 WHERE user_id = $2", [age, user_id]);
        }
        if (gender) {
            await pool.query("UPDATE users SET gender = $1 WHERE user_id = $2", [gender, user_id]);
        }
        if (country) {
            await pool.query("UPDATE users SET country = $1 WHERE user_id = $2", [country, user_id]);
        }
        if (city) {
            await pool.query("UPDATE users SET city = $1 WHERE user_id = $2", [city, user_id]);
        }


        res.json( {token} );

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

// Get user image which will show on the editProfile page.

router.get("/editProfile/", async (req, res) => {
    try {

        //req.header has the token
        const token = req.header("token");
        if (!token) {
            return res.status(403).json("Not Authorized");
        }
        const payload = jwt.verify(token, process.env.jwtSecret);

        //req.user has the payload
        // it is going to give us the user id (user:{id: user.id})
        req.user = payload.user;

        const user_id = req.user;
        
        // get url of the user image inside our database
        const user_info = await pool.query("SELECT url From user_images WHERE user_id = $1", [user_id] );
        console.log(user_info.rows[0]);

        return res.json( user_info.rows[0] );

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }

});


const {cloudinary} =  require("../utils/cloudinary");

// Upload user images

router.post("/upload", authorization, async (req, res) => {
    try {
        
        // console.log("line 238:req.user is", req.user);
        // Get the user_id
        const user = req.user;

        // file information in base64
        const fileStr = req.body.data;
        // console.log(fileStr);
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'a9oldzhq'
        });

        // check whether this user exists
        const exist = await pool.query("SELECT * FROM user_images WHERE (user_id) = $1", [user]);

        // user doesn't exist
        if (!exist.rows[0]) {
            await pool.query("INSERT INTO user_images (user_id, url) VALUES ($1, $2) ", [user, uploadedResponse.secure_url]);
        } else {
            // user doesn't have 6 images
            if (!exist.rows.length != 6) {
                await pool.query("INSERT INTO user_images (user_id, url) VALUES ($1, $2) ", [user, uploadedResponse.secure_url]);
            } else {
                return res.json("You already have 6 images.");
            }
        };

        // give the jwt token
        const token = jwtGenerator(user);
        res.json({ token });

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

// Upload user prompts 

router.post("/editProfile/prompts", authorization, async (req, res) => {
    //await
    try {
        // Get prompts from the request body
        const { prompt1, prompt2, prompt3 } = req.body;
        // check exists
        // If exists, update prompts, other wise, insert into the table.
        const exist = await pool.query("SELECT * from prompts WHERE user_id = $1", [req.user]);

        if (exist.rows[0]) {
            if (prompt1) {
                await pool.query("UPDATE prompts SET prompts1 = $1 WHERE user_id = $2", [prompt1, req.user]);
            }
            if (prompt2) {
                await pool.query("UPDATE prompts SET prompts2 = $1 WHERE user_id = $2", [prompt2, req.user]);
            }
            if (prompt3) {
                await pool.query("UPDATE prompts SET prompts3 = $1 WHERE user_id = $2", [prompt3, req.user]);
            }
            res.json("Added new prompts!")
        } else {
        
            // add data into data base
            const newPrompt = await pool.query("INSERT INTO prompts (user_id, prompts1, prompts2, prompts3) VALUES($1, $2, $3, $4) RETURNING *", 
            [req.user, prompt1, prompt2, prompt3]
            );

            if (newPrompt.rows[0].length === 0) {
                return res.json("Somthing went wrong.");
            }
            // success 
            res.json("Added new prompts!");
        }

    } catch (error) {
        console.error(error.message);
    }
});


// Get user info showed in the home 

router.get("/home", authorization, async (req, res) => {
    try {
        
        // Get user info from the database
        const details = await pool.query("SELECT first_name, last_name, age, gender, country, city from users WHERE user_id = $1", [req.user]);

        const user_info = details.rows[0];

        // Get prompts
        const prompts = await pool.query("SELECT * from prompts WHERE user_id = $1", [req.user]);

        // Get image url
        const images = await pool.query("SELECT * from user_images WHERE user_id = $1", [req.user]);
        const url = images.rows[0].url;

        const prompt1 = prompts.rows[0].prompts1;
        const prompt2 = prompts.rows[0].prompts2;
        const prompt3 = prompts.rows[0].prompts3;

        const about = { prompt1, prompt2, prompt3 };
    
        console.log(user_info, about);
        // Send to client
        res.json({user_info, about, url});
       
    } catch (error) {
        console.error(error.message);
    }
});

// Get all images of a user

router.get('/images', authorization, async (req, res) => {
    try {
        // get data from database
        const data = await pool.query("SELECT url, image_id FROM user_images WHERE user_id = $1", [req.user]);
        console.log(data.rows);

        // send to client
        res.json(data.rows);
    } catch (error) {
        console.error(error.message);
    }
});


// Delete an image

router.delete('/images/:id', authorization, async (req, res) => {
    try {
        // image id
        const { id } = req.params;

        // delete image
        const data = await pool.query("DELETE FROM user_images WHERE user_id = $1 AND image_id = $2 RETURNING *", [req.user, id]);
        if (data.rows.length === 0) {
            return res.json("Something went wrong.");
        }
        // success
        res.json("Deleted.");
    } catch (error) {
        console.log(error);
    }
});


// verify a user

router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});


module.exports = router;
