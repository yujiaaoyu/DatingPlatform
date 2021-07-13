const router = require("express").Router();
const pool = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");


//registering

router.post("/register", validInfo, async(req, res) => {
    try {
        //1. destructure the req.body (name, email, password)

        const { first_name, last_name, email, password, confirm_password } = req.body;

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

            const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES($1, $2, $3) RETURNING *", [first_name + last_name, email, bcryptPassword]);
            // res.json(newUser.rows[0]);

            //5.generating our jwt token
            const token = jwtGenerator(newUser.rows[0].user_id);
            res.json( { token } );

        } else {
            console.log("Password doen't match!");
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

router.post("/editProfile", validInfo, async (req, res) => {
    try {

        //req.header has the token
        const token = req.header("Authorization");
        if (!token) {
            return res.status(403).json("Not Authorized");
        }
        const payload = jwt.verify(token, process.env.jwtSecret);

        //req.user has the payload
        // it is going to give us the user id (user:{id: user.id})
        req.user = payload.user;
      
        const {first_name, last_name, age, gender, country, city} = req.body;
        
        //enter the user_profile inside our database
        // console.log("line99: req.user is", req.user);
        // console.log(first_name);
        // console.log(last_name);
        // console.log(gender);
        // console.log(country);
        // console.log(city);

        const user_id = req.user;
        console.log("line 121", user_id);

        const exist = await pool.query("SELECT * FROM profiles WHERE (user_id) = $1", [user_id]);
        if (!exist) {
            const newProfile = await pool.query("INSERT INTO profiles (user_id, first_name, last_name, age, gender, country, city) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [user_id, first_name, last_name, age, gender, country, city]);
        } else {
            const newProfile = await pool.query("UPDATE profiles SET first_name = $1, last_name = $2, age = $3, gender = $4, country = $5, city = $6 WHERE user_id = $7 RETURNING *", [first_name, last_name, age, gender, country, city, user_id]);
        } 
        await pool.query("UPDATE users SET user_name = $1 WHERE user_id = $2", [first_name + last_name, user_id]);
        // console.log(update);
        res.json( { token } );

    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

router.post("/reset-password", validInfo, async (req, res) => {

    const { email } = req.body; 
    
    try {

        const token = req.header("Authorization");
        if (!token) {
            return res.status(403).json("Not Authorized");
        }
        const payload = jwt.verify(token, process.env.jwtSecret);
       
        const user = payload.user; 
        // console.log(user);
        const user_info = await pool.query("SELECT * FROM users WHERE user_id = $1", [user]);
        const storedEmail = user_info.user_email;
        if (storedEmail !== email) {
            return res.status(401).json("Input email is incorrect!");
        } else {
            // const user = await pool.query("UPDATE users SET user_password = $1 WHERE user_id = $2", [req.user]);
            res.json( { token } );
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});


router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        console.log(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
