const { util } = require("chai");
const express = require("express");
const app = express();
const https = require("https");
const port = 3000;
app.use(express.json());

const allUsers = [{
        id: 1,
        email: "tom@gmail.com",
        password: "$2b$10$U8sLsGTZSPHTKicwe3MiAe2qGAS78e9vJTuVKzSEfTL5oeabOyHda",
        first_name: "Tom",
        last_name: "Mars",
        age: "Between 26-35 years",
        gender: "Male",
        country: "United States",
        city: "San Francisco"
    }, {
        id: 2,
        email: "john@gmail.com",
        password: "$2b$10$C4Ows1Ssx7oHIXoDYgVHquMPO2g2W5lzLdGNafQDRkSjCDhNWFn4G",
        first_name: "John",
        last_name: "Do",
        age: "Between 26-35 years",
        gender: "Male",
        country: "United States",
        city: "San Francisco"
    }, {
        id: 3,
        email: "liza@gmail.com",
        password: "$2b$10$UANbUi6Kj8DycGyyIUci6OHAprLtp9fuUIGjtNoZnreSuXK9bDJTO",
        first_name: "Liza",
        last_name: "Daniel",
        age: "Between 26-35 years",
        gender: "Female",
        country: "United States",
        city: "Fremont"
    } ];

app.post("/editProfile/add", (req, res) => {

    const user = {
        id: allUsers.length + 1,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        gender: req.body.gender,
        country: req.body.country,
        city: req.body.city
    };
    allUsers.push(user);
    res.status(201).send(user);
});

app.get("/editProfile", (req, res) => {
    res.send(allUsers);
});

app.get("/editProfile/:id", (req, res) => {
    const userId = Math.abs(req.params.id);
    let user = allUsers.find(t => t.id === userId);
    
    if (!user) return res.status(404).send("The user with the provided ID does not exist.");
    res.send(user);
});

app.put("/editProfile/add/:id", (req, res) => {
    const userId = Math.abs(req.params.id);
    let user = allUsers.find(t => t.id === userId);
    
    if (!user) return res.status(404).send("The user with the provided ID does not exist.");

    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.city = req.body.city;
    user.country = req.body.country;

    res.send(user);
});


app.delete("/editProfile/add/:id", (req, res) => {
    
    const userId = Math.abs(req.params.id);
    let user = allUsers.find(t => t.id === userId);

    if (!user) {
        return res.status(404).send("The user doesn't exist.");
    }

    const index = allUsers.indexOf(user);
    allUsers.splice(index, 1);
    res.send(user);
})


app.listen(port, () => {
    console.log(`Listening on port => ${port}`);
});

module.exports = app;

