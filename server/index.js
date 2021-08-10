
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { cloudinary } = require("./utils/cloudinary");
const { config } = require("dotenv");


//middleware
app.use(express.json()); // req.body
app.use(cors());


//ROUTES//

// register, login, editProfile routes
app.use("/auth", require('./routes/jwtAuth'));

// dashboard route

app.use("/dashboard", require("./routes/dashboard"));

// coach route
app.use("/coach", require("./routes/coach"));

// reset passeword route
app.use("/reset-password", require("./routes/reset-password"));

// confirm reset passeword  route
app.use("/confirm-reset-password", require("./routes/confirm-reset-password"));

// settings route
app.use("/settings", require("./routes/settings"));




app.listen(5000, () => {
    console.log("server has started on port 5000");
});
