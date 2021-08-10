const e = require("express");

// Check inputs 
module.exports = (req, res, next) => {
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail); // register pattern
    }
  
    // check inputs of register page
    if (req.path === "/register") {
      const { first_name, last_name, email, password, confirm_password } = req.body;
        console.log(!email.length);
      if (![email, password, confirm_password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      } else if (password !== confirm_password) {
        return res.status(401).json("Password doesn't match!");
      }
    } else if (req.path === "/login") { // check inputs of log in page
      const { email, password } = req.body;
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid email");
      } else if(req.path === "reset-password") { // check inputs of reset password page
        const { email } = req.body;
        if (!email) {
          return res.status(401).json("Please input an email.")
        } else if(!validEmail) {
          return res.status(401).json("Invalid email");
        }
      } else if(req.path === "confirm-reset-password") { // check inputs of confirm reset password page
        const { email, password } = req.body;
        if (![email, password].every(Boolean)) {
          return res.status(401).json("Missing Credentials.")
        } else if(!validEmail) {
          return res.status(401).json("Invalid email");
        } 
      }
    }; 

    next();
};