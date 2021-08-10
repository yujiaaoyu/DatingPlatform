
const router = require("express").Router();
const validInfo = require("../middleware/validInfo");
const pool = require("../db");
const nodemailer = require('nodemailer');


// reset password

router.post("/", validInfo, async (req, res) => {
    const { email } = req.body; 
    console.log(email);
    
    try {

        // use node mailer to send reset password address
        // hardcoded the service and send user 
        const user_info = await pool.query("SELECT * FROM users WHERE (user_email) = $1", [email]);
            res.json("Send instructions to your email.");
            const transporter = nodemailer.createTransport({
                service:"hotmail",
                auth: {
                    user: "testDatingApp@outlook.com",
                    pass: "BbX+Ni)c<7rs=L6"
                }
            });

            // send email
            const options = {
                from: "testDatingApp@outlook.com",
                to: email,
                subject: "Reset password",
                html: '<h1>Reset Password</h1><a href="http://localhost:3000/confirm-reset-password">Reset</a>'
            };

            transporter.sendMail(options, await function(err, info) {
                if (err) {
                    console.log(err);
                }
                console.log("Sent: ", info.response);
            });


    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});

module.exports = router;
