const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// show all coaches in the dashboard
router.get("/", authorization, async (req, res) => {
    try {
        
        const { location } = req.body; 

        // get names, location areas, city, personal link and introdution form the data base. 
        const coaches = await pool.query(
            "SELECT c.first_name , c.last_name, c.areas, c.city, c.about, c.personal_website FROM coaches AS c ");

        // send data to client
        res.json(coaches.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error");
    }
});



// //create a todo 
// router.post("/todos", authorization, async (req, res) => {
//     //await
//     try {
//         console.log(req.body);
//         const { description } = req.body;
//         const newTodo = await pool.query("INSERT INTO todoItems (user_id, description) VALUES($1, $2) RETURNING *", 
//         [req.user, description]
//         );

//         res.json(newTodo.rows[0]);

//     } catch (error) {
//         console.error(error.message);
//     }
// });



// //update a todo

// router.put("/todos/:id", authorization, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { description } = req.body;
//         const updateTodo = await pool.query("UPDATE todoItems SET description = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *", 
//         [description, id, req.user]);

//         // console.log(updateTodo);

//         if(updateTodo.rows.length === 0) {
//             return res.json("This todo is not yours");
//         }

//         res.json("Todo was updated.");
//     } catch (error) {
//         console.log(error.message);
//     }
// });


// //delete a todo
// router.delete("/todos/:id", authorization, async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteTodo = await pool.query("DELETE FROM todoItems WHERE todo_id = $1 AND user_id = $2 RETURNING *", 
//         [id, req.user]);

//         if (deleteTodo.rows.length === 0) {
//             return res.json("This Todo is not yours");
//         }

//         res.json("Todo was deleted!");
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// get personal home page
router.get("/home", authorization, async (req, res) => {
    try {
        const user_id = req.user;
        const url = await pool.query("SELECT url FROM user_images WHERE user_id = $1 RETURNING *", 
        [user_id]);

        if (url.rows.length === 0) {
            return res.json("This user does not have an image");
        }
        
    } catch (error) {
        console.log(error.message);
    }
});


module.exports = router;