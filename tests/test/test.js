const chai = require("chai");
const server = require("../index");
const chaiHttp = require("chai-http");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Task API', () => {
    /**
     * Test the GET route
     */
    describe("Get all users", () => {
        it("It should GET all the tasks", (done) => {
            chai.request(server)
                .get("/editProfile")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(3);
                done();
                });
        });
    });

    /**
     * Test the GET (by id) route
     */
     describe("Get a user by id", () => {
        
        it("It should GET a user by id", (done) => {
            const taskId = "2";
            chai.request(server)
                .get("/editProfile/" + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('email');
                    response.body.should.have.property('first_name');
                    response.body.should.have.property('last_name');
                done();
                });
        });
        it("It should NOT GET a user by id", (done) => {
            const taskId = "123";
            chai.request(server)
                .get("/editProfile/" + taskId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq("The user with the provided ID does not exist."); 
                done();
                });
        });
    });


    /**
     * Test the POST route
     */
     describe("Post a new user", () => {    
        it("It should POST a new user", (done) => {
            const user = {
                first_name: "Lucy",
                last_name: "Wang",
                email: "tom@gmail.com",
                password: "$2b$10$q8XxFbklWjb5wWKNzYXEj.y1jSQKjEqdgFiPsvrErbH54VoehecNi",
                age: "Between 26-35 years",
                gender: "Male",
                country: "United States",
                city: "San Francisco"
            };
            chai.request(server)
                .post("/editProfile/add")
                .send(user)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(4);
                    response.body.should.have.property('password').eq("$2b$10$q8XxFbklWjb5wWKNzYXEj.y1jSQKjEqdgFiPsvrErbH54VoehecNi");
                    response.body.should.have.property('first_name').eq("Lucy");
                    response.body.should.have.property('last_name').eq("Wang");
                    response.body.should.have.property('email').eq("tom@gmail.com");
                    response.body.should.have.property('age').eq("Between 26-35 years");
                    response.body.should.have.property('gender').eq("Male");
                    response.body.should.have.property('city').eq("San Francisco");
                    response.body.should.have.property('country').eq("United States");
                done();
                });
        });
    });


    /**
     * Test the PUT route
     */

     describe("Update a user info ", () => {    
        it("It should PUT a new user", (done) => {
            const taskId = 1;
            const user = {
                first_name: "LucyChanged",
                last_name: "WangChanged",
                country: "China",
                city: "Shanghai"
            };
            chai.request(server)
                .put("/editProfile/add/" + taskId)
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('first_name').eq("LucyChanged");
                    response.body.should.have.property('last_name').eq("WangChanged");
                    response.body.should.have.property('city').eq("Shanghai");
                    response.body.should.have.property('country').eq("China");
                done();
                });
        });
    });
    /**
     * Test the DELETE route
     */
     describe("Delete a user", () => {    
        it("It should DELETE a user", (done) => {
            const userId = 1;
            chai.request(server)
                .delete("/editProfile/add/" + userId)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });
    });

})



