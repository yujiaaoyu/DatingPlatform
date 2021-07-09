module.exports = (req, res, next) => {
    const { first_name, last_name, email, password, confirm_password } = req.body;
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail); // register pattern
    }
  
    if (req.path === "/register") {
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
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    }
  
    next();
};