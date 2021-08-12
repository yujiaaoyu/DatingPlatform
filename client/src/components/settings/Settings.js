import EmptyPage from '../page_empty/EmptyPage';
import styles from './settings.module.css';
import MyImage from '../../Images/arrow_icon.png';
import React, { useEffect } from "react";
import { Link } from "react-router-dom"; 


// Settings page
const Settings = ({setAuth}) => {
   
    const getSettings = async () => {
        
        try {
            const response = await fetch("http://localhost:5000/settings", {
                method: "GET",
                headers: { token: localStorage.token }
            }); 

            // console.log(localStorage.token);

            const parseRes = await response.json();
            console.log(parseRes);

            if (parseRes.token) {
                setAuth(true);
            } else {
                setAuth(false);
            }   
             
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getSettings();
    },);

    return (
    
        <div>
        <div className={styles.chosen}/>
        
        <EmptyPage />

        <div className={styles.settings_txt}>Settings</div>
        

        <div className={styles.account_blk}/>
        <div className={styles.account_txt}>Account</div>
        <p className={styles.account_p}>Edit Profile</p>   
        
        <Link to="/editProfile"className={styles.btn}>
            <img src={MyImage} className={styles.account_icon} alt="arrow_icon"/>
        </Link>
      

        <div className={styles.noti_blk}/>
        <div className={styles.noti_txt}>Notification</div>
        <p className={styles.noti_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>    
        
        <Link to='/notification' className={styles.btn}>
            <img src={MyImage} className={styles.noti_icon} alt="arrow_icon"/>
        </Link>
    

        <div className={styles.secu_blk}/>
        <div className={styles.secu_txt}>Security</div>
        <p className={styles.secu_p}>Reset your password</p>    
        <Link to="/reset-password" className={styles.btn}>
            <img src={MyImage} className={styles.secu_icon} alt="arrow_icon"/>   
        </Link>

        <div className={styles.appear_blk}/>
        <div className={styles.appear_txt}>Appearance</div>
        <p className={styles.appear_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>    
        <Link to="/appearance" className={styles.btn}>
            <img src={MyImage} className={styles.appear_icon} alt="arrow_icon"/>
        </Link>

        <div className={styles.billing_blk}/>
        <div className={styles.billing_txt}>Billing information</div>
        <p className={styles.billing_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>    
        <Link to="/billing" className={styles.btn}>
            <img src={MyImage} className={styles.billing_icon} alt="arrow_icon"/>
        </Link>

        <div className={styles.cnect_blk}/>
        <div className={styles.cnect_txt}>Connections</div>
        <p className={styles.cnect_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>    
        <Link to="/connections" className={styles.btn}>
            <img src={MyImage} className={styles.cnect_icon} alt="arrow_icon"/>
        </Link>
        
        
     </div>

 

    );
};

export default Settings;
