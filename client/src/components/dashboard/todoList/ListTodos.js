import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = ({ allTodos, setTodosChange }) => {
    // console.log(allTodos);

    const [todos, setTodos] = useState([]); //empty array

    //delete todo function
    async function deleteTodo(id) {
        try {
            await fetch(`http://localhost:5000/dashboard/todos/${id}`, {
                method: "DELETE",
                headers: {token: localStorage.token}
            });
            console.log(id);
            setTodos(todos.filter(todoItems => todoItems.todo_id !== id));
        } catch (err) {
            console.log(err);
            console.error(err.message);
        }
    };

    useEffect(() => {
        setTodos(allTodos);

    }, [allTodos]);

    console.log(todos);

    return (
    <Fragment>
      {" "}
      <table className="table table-striped mt-5 text-center">
        <thead>
        <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {todos.length !== 0 && todos[0].todo_id !== null && todos.map(todoItems => (
            <tr key={todoItems.todo_id}>
                <td>{todoItems.description}</td>
                <td>
                    <EditTodo todoItems={todoItems} setTodosChange={setTodosChange}/>
                </td>
                <td><button className="btn btn-danger" onClick={() => deleteTodo(todoItems.todo_id)}
                >Delete</button></td>
            </tr>
        ))}
    
        </tbody>
      </table>
    </Fragment>
    );
};

export default ListTodos;