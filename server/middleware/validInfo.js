const e = require("express");

module.exports = (req, res, next) => {
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail); // register pattern
    }
  
    if (req.path === "/register") {
      const { first_name, last_name, email, password, confirm_password } = req.body;
        // console.log(first_name);
        // console.log(last_name);
        // console.log(email);
        // console.log(password);
        // console.log(confirm_password);
        console.log(!email.length);
      if (![email, first_name, last_name, password, confirm_password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      } else if (password !== confirm_password) {
        return res.status(401).json("Password doen't match!");
      }
    } else if (req.path === "/login") {
      const { email, password } = req.body;
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    } else if (req.path === "/editProfile") {
      const { first_name, last_name, age, city, country, gender } = req.body;
      console.log(first_name);
      console.log(last_name);
      console.log(age);
      console.log(city);
      console.log(country);
      console.log(gender);
      if (![first_name, last_name, age, gender, country, city].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      }
    }; 

    next();
};