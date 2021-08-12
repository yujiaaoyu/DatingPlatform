import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";

// Top Navgation bar of the Home page
const Navbar= () => {
    return (
        <div className="Navbar">
            
            <div className="leftSide">
                <div className="title">
                Milk Meets Tea
                </div>
            </div>

            <div className="rightSide">
                <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/images">Photo Gallery</Link>
                </div>
            </div>

        </div>        
    );

};

export default Navbar;