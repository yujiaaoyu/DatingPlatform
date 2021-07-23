import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

//components

import InputTodo from "./todoList/InputTodo";
import ListTodos from "./todoList/ListTodos";


const Dashboard = ({ setAuth }) => {

    const [name, setName] = useState("");
    const [allTodos, setAllTodos] = useState([]);
    const [todosChange, setTodosChange] = useState(false);

    const getProfile = async () => {
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }
            }); 

            const parseRes = await response.json();
 
            setAllTodos(parseRes);

            setName(parseRes[0].user_name);            
        } catch (error) {
            console.error(error.message);
        }
    };

    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Logged out successfully!");
            
        } catch (error) {
            console.error(error.message);
        } 
    };


    useEffect(() => {
        getProfile();
        setTodosChange(false);
    }, [todosChange]);

    return (
    <div>
        <div className="d-flex mt-5 justify-content-around">
            <h1>{ name } 's Todo List </h1>
            <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
        </div>
        <InputTodo setTodosChange={setTodosChange}/>
        <ListTodos allTodos={allTodos} setTodosChange={setTodosChange}/>
        <Link to="/editProfile" className="btn btn-primary">Edit Profile</Link>&nbsp; &nbsp;
        <Link to="/reset-password" className="btn btn-primary">Reset Password</Link>&nbsp; &nbsp;
    </div>
    );
};

export default Dashboard;