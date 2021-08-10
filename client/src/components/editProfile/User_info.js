import React, { Fragment, useEffect, useState } from "react";
import styles from './edit_profile.module.css';

// Set user image in editProfile page
const UserInfo = () => {
    
    const [image, setInfo] = useState(""); 

    //get info function
    const GetInfo = async () =>{
        try {
            const res = await fetch("http://localhost:5000/auth/editProfile/", {
                method: "GET",
                headers: {token: localStorage.token}
            });

            const resParse = await res.json();
            setInfo(resParse.url);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        GetInfo();
    }, []);

    return (
    <Fragment>
      {" "}

      {/* <div className={styles.group34}/>
          <div className={styles.group17}/>
            <div className={styles.name}>{first_name}&nbsp;{last_name}</div>
            <div className={styles.city}>{city}</div>

        <div></div> */}
        <img className={styles.user_image} src={image} alt="user_image"/>
      
    </Fragment>
    );
};

export default UserInfo;