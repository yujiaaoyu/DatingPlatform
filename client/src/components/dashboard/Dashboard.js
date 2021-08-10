import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

//components
import EmptyPage from "../page_empty/EmptyPage";
import styles from "./dashboard.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Dashboard = ({ setAuth }) => {

    // Default value of coaches profiles
    const [allCoaches, setAllCoaches] = useState([{first_name: "Liza", last_name: "Daniel", city: "Orlando", areas: "FL", personal_website:"https://google.com"},
        {first_name: "Marta", last_name: "Lou", city: "Denvor", areas: "Co", personal_website:"https://google.com"},
         {first_name: "Teresa", last_name: "Nicole", city: "Orlando", areas: "FL", personal_website:"https://google.com"}]);
    
    const getProfile = async () => {
        
        // Send a get repuset
        try {
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }
            }); 

            // Get data from the server
            const parseRes = await response.json();
            // console.log(parseRes);
 
            setAllCoaches(parseRes);
            setAuth(true);
                     
        } catch (error) {
            console.error(error.message);
        }
    };

    // Log out
    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.clear();
            setAuth(false);
            toast.success("Logged out successfully!");
            
        } catch (error) {
            console.error(error.message);
        } 
    };


    useEffect(() => {
        getProfile();
    },[]);

    return (
    <div> 
        <EmptyPage />
        <button className={styles.ellipse17}><ExitToAppIcon onClick={e => logout(e)}/> </button>
        <div className={styles.recommend}>Recommended&nbsp;coaches</div>
        <div className={styles.horizontal_line}/>
        <div className={styles.sortby}>Sort&nbsp;by</div>

        <div className={styles.back}/>
        <div className={styles.photo}/>
        <div className={styles.name}>{allCoaches[0].first_name}&nbsp;{allCoaches[0].last_name}</div>
        <div className={styles.location}>{allCoaches[0].city}&nbsp;{allCoaches[0].areas}</div>
        <button className={styles.view1}/>
        <div className={styles.view_text}>View profile</div>
        <div className={styles.view_profile}>{allCoaches[0].about}<Link>Read more</Link></div>
        <div className={styles.toprated}></div>
        <p className={styles.toprated_text}>Toprated</p>
        <div className={styles.offers}></div>
        <p className={styles.offers_text}>Offers remote services</p>

        <div className={styles.back2}/>
        <div className={styles.photo2}/>
        <div className={styles.name2}>{allCoaches[1].first_name}&nbsp;{allCoaches[1].last_name}</div>
        <div className={styles.location2}>{allCoaches[1].city}&nbsp;{allCoaches[1].areas}</div>
        <button className={styles.view2}/>
        <div className={styles.view2_text}>View profile</div>
        <div className={styles.view2_profile}>{allCoaches[0].about}<Link>Read more</Link></div>
        <div className={styles.toprated2}></div>
        <p className={styles.toprated2_text}>Toprated</p>
        <div className={styles.offers2}></div>
        <p className={styles.offers2_text}>Offers remote services</p>

        <div className={styles.back3}/>
        <div className={styles.photo3}/>
        <div className={styles.name3}>{allCoaches[2].first_name}&nbsp;{allCoaches[1].last_name}</div>
        <div className={styles.location3}>{allCoaches[2].city}&nbsp;{allCoaches[1].areas}</div>
        <button className={styles.view3}/>
        <div className={styles.view3_text}>View profile</div>
        <div className={styles.view3_profile}>{allCoaches[2].about}<Link>Read more</Link></div>
        <div className={styles.toprated3}></div>
        <p className={styles.toprated3_text}>Toprated</p>
        <div className={styles.offers3}></div>
        <p className={styles.offers3_text}>Offers remote services</p>
        
    </div>
    
    );
};

export default Dashboard;