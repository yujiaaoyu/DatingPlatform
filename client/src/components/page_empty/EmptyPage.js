import styles from './page.module.css';

import { Link } from "react-router-dom";
import Bell from "../../Images/bell_image.png";
import SearchIcon from"../../Images/search_image.png";
import React from "react";

// Navigation bar of each page
const EmptyPage = () => {
    
    return (
        <div className={styles.group133}>
            <div className={styles.ellipse9}/>
            <div className={styles.ellipse10}/>
            <div className={styles.datingApp}>Mike&nbsp;Meets&nbsp;Tea</div>
            
            
            {/* <div className={styles.search_b}/> */}
                <input className={styles.search_input} placeholder="Search by interest" style={{border:0}}/>
            
            <div className={styles.search}>
                <button className={styles.search_btn}>
                <img className={styles.serach_image} src={SearchIcon} alt="search_icon"/>
                </button>
            </div>
            
            
            <div className={styles.image1}/>
            <div className={styles.image2}/>
            {/* <div className={styles.image3}/> */}
            

            <div className={styles.rect16}/>
            <div className={styles.rect15}/>
            <div className={styles.rect14}/>

            <Link to="/coach" ><div className={styles.become_coach}> Become&nbsp;a&nbsp;Coach</div></Link>
            <div className={styles.ecllipse17}/>
            {/* <ExitToAppIcon onClick={e => logout(e)}/> </button> */}
            <div className={styles.bell_rect}/>

            <img src={Bell} className={styles.image_bell} alt="bell_icon"/>
    
            <div className={styles.ellipse13_1}/>
            <Link to="/dashboard" className={styles.dashboard}>Dashboard</Link>
            <div className={styles.ellipse13_2}/>
            <Link to="/home" className={styles.home}>Home</Link>
            <div className={styles.ellipse13_3}/>
            <Link to="/myCoaches" className={styles.myCoaches}>My coaches</Link>
            <div className={styles.ellipse13_4}/>
            <Link to="/messages" className={styles.message}>Message</Link>
            <div className={styles.ellipse13_5}/>
            <Link to="/settings" className={styles.settings}>Setttings</Link>
            <div className={styles.ellipse13_6}/>
            <Link to="/contact-us" className={styles.extra}>Contact us</Link>   
        </div>

 

    );
};

export default EmptyPage;
