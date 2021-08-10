import React from "react";
import './landing.css';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import newYork from '../../Images/states/Newyork.jpeg';

import sanFrancisco from '../../Images/states/san-francisco.jpeg';
import michigan from '../../Images/states/michigan.jpeg';
import florida from '../../Images/states/florida.jpeg';
import colorado from "../../Images/states/colorado.jpeg";
import virginia from '../../Images/states/virginia.jpeg';
import hawaii from '../../Images/states/hawaii.jpeg';
import allstate from '../../Images/states/allstate.jpeg';

// Find coaches components of the landing page 
const FindCoaches = () => {
    return (
        <div>
            <h2 className="findCoaches">Find&nbsp;coaches&nbsp;in&nbsp;your&nbsp;state</h2>
            
            <img className="ca" src={sanFrancisco} alt="ca"/>
            <div className="city_name_ca">California</div>
            <button className="circle1"> <KeyboardArrowRightIcon className="arrow" /></button>
           
        
            <img className="mi" src={michigan} alt="mi"/>
            <div className="city_name_mi">Michigan</div>
            <button className="circle2"> <KeyboardArrowRightIcon className="arrow" /></button>


            <img className="fl" src={florida} alt="fl"/>
            <div className="city_name_fl">Florida</div>
            <button className="circle3"> <KeyboardArrowRightIcon className="arrow" /></button>

            <img className="co" src={colorado} alt="co"/>
            <div className="city_name_co">Colorado</div>
            <button className="circle4"> <KeyboardArrowRightIcon className="arrow" /></button>

            <img className="vi" src={virginia} alt="vi"/>
            <div className="city_name_vi">Virginia</div>
            <button className="circle5"> <KeyboardArrowRightIcon className="arrow" /></button>

            <img className="newYork" src={newYork} alt="ny"/>
            <div className="city_name_ny">New&nbsp;York</div>
            <button className="circle6"> <KeyboardArrowRightIcon className="arrow" /></button>

            <img className="hawaii" src={hawaii} alt="ha"/>
            <div className="city_name_ha">Hawaii</div>
            <button className="circle7"> <KeyboardArrowRightIcon className="arrow" /></button>

            <img className="allState" src={allstate} alt="all"/>
            <div className="city_name_all">All&nbsp;States</div>
            <button className="circle8"> <KeyboardArrowRightIcon className="arrow" /></button>

        </div>

    );
};

export default FindCoaches;