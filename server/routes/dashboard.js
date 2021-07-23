const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// all todos and name
router.get("/", authorization, async (req, res) => {
    try {
        //req.user has the payload
        // res.json(req.user);
        console.log("req.user is", req.user);

        const user = await pool.query(
            "SELECT u.user_name , t.todo_id, t.description FROM users AS u LEFT JOIN todoItems AS t ON u.user_id = t.user_id WHERE u.user_id = $1",
        [req.user]);

        // const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]);
        res.json(user.rows);
    } catch (error) {
        console.log(error);
        console.error(err.message);
        res.status(500).json("Server Error");
    }
});



//create a todo 
router.post("/todos", authorization, async (req, res) => {
    //await
    try {
        console.log(req.body);
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todoItems (user_id, description) VALUES($1, $2) RETURNING *", 
        [req.user, description]
        );

        res.json(newTodo.rows[0]);

    } catch (error) {
        console.error(error.message);
    }
});



//update a todo

router.put("/todos/:id", authorization, async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todoItems SET description = $1 WHERE todo_id = $2 AND user_id = $3 RETURNING *", 
        [description, id, req.user]);

        // console.log(updateTodo);

        if(updateTodo.rows.length === 0) {
            return res.json("This todo is not yours");
        }

        res.json("Todo was updated.");
    } catch (error) {
        console.log(error.message);
    }
});


//delete a todo
router.delete("/todos/:id", authorization, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todoItems WHERE todo_id = $1 AND user_id = $2 RETURNING *", 
        [id, req.user]);

        if (deleteTodo.rows.length === 0) {
            return res.json("This Todo is not yours");
        }

        res.json("Todo was deleted!");
    } catch (error) {
        console.log(error.message);
    }
});


module.exports = router;