import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="jumbotron mt-5">
            <h1>Welcome to Heart Signal</h1>
            <p>Sign in and find your soulmate!</p>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-primary ml-3" >Login</Link>
        </div>
    );
};

export default Landing;