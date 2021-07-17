const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { cloudinary } = require("./utils/cloudinary");

//middleware
app.use(express.json()); // req.body
app.use(cors());


//ROUTES//

// register, login, reset-password, editProfile routes
app.use("/auth", require('./routes/jwtAuth'));

// dashboard route

app.use("/dashboard", require("./routes/dashboard"));

app.get('/coaches', async (req, res) => {
    const {resources} = await cloudinary.search.expression('folder: coaches')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();
    const publicIds = resources.map(file => file.public_id);
    res.send(publicIds);
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});
