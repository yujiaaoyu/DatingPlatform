import React, { Fragment, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const Dashboard = ({setAuth}) => {

    const [name, setName] = useState("");

    async function getName() {
        try {
            const response = await fetch("http://localhost:5000/dashboard",
            {
                method: "GET",
                headers: { token: localStorage.token }
            }); 

            const parseRes = await response.json();

            console.log(parseRes); //userName

            setName(parseRes.user_name);



            
        } catch (error) {
            console.error(error.message);
        }
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);

        toast.success("Logged out successfully!");
    };


    useEffect(() => {
        getName();
    }, []);

    return (
    <Fragment>
        <h1>Dashboard { name } </h1>
        <Link to="/editProfile" clasaName="btn btn-primary">Edit Profile</Link>&nbsp; &nbsp;
        <Link to="/reset-password" clasaName="btn btn-primary">Reset Password</Link>&nbsp; &nbsp;
        
        <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
    </Fragment>
    );
};

export default Dashboard;