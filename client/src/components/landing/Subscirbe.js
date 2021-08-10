import React from "react";
import './landing.css';


// Subscribe part of the landing page.
const Subscribe = () => {
    
    return (
        <div>
        <div className="subscribe_block"/>
            <h2 className="subscribe_title">Subscribe&nbsp;to&nbsp;get&nbsp;the&nbsp;latest&nbsp;news</h2>
            <input className="subscribe_input" placeholder="Enter your email address"></input>
            <button className="subscribe_btn"></button>
           <div className="subscribe_btn_txt">Subscirbe Now</div>
           <div className="divide_line1"/>

        </div>

    );
};

export default Subscribe;