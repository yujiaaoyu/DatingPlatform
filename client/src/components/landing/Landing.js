import React from "react";
import { Link } from 'react-router-dom';
import './landing.css';
import search_img from '../../Images/search.png';

import Middle from "./Middle";
import FindCoaches from "./FindCoaches";
import Subscribe from "./Subscirbe";
import Steps from "./Steps";
import CoachCards from "./Cards";
import SocialFollow from "./SocialFollow";

// Landing page

const Landing = () => {
    return (
        
        <div>
            <div>
                <div className="top"/>
                <label className="datingApp">Mike&nbsp;Meets&nbsp;Tea</label> 
                <div className="ellipse10"/>
                <div className="ellipse9"/>
    

            <div className="location">Locations</div>
                <Link to="/login" ><div className="login">login</div></Link>
                <Link to="/register" ><div className=".signup">signup</div></Link>
                <div className="coach_blk"/>
                <Link to="/become_a_coach" ><div className="becomeCoach">become&nbsp;a&nbsp;Coach</div></Link>
            </div>

            <div>
                <div className="middle_top">
                <div className="hire_rect"/>
                <div className="hire_txt">Hire a coach</div>

                <div className="middle_top_h2">Find local dating coaches is now possible</div>
                <input className="search_input_rect" placeholder="What are you looking for?"/>
                <button className="search_btn"/>
                <div className="search_txt">search</div>
                <img className="search_image" alt="search"src={search_img}/>
            </div>

           
            <Steps />
            <Middle />
            <CoachCards />
            <FindCoaches />
            <Subscribe />
            <SocialFollow />

            <div className="divide_line2"/>
            <h3 className="company"> ©&nbsp;2021&nbsp;Company,&nbsp;Inc</h3>
            
        </div>
        </div>

    );
};

export default Landing;