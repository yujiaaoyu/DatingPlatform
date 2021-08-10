import React, { useState } from "react";
import styles from './become.module.css';
import LoveIcon from '../../../Images/love.jpg';
import { Link } from "react-router-dom";


const Become = ({setauth}) => {

    // Get location state and speciality of a coach
    const [inputs, setInputs] = useState({
        area: "",
        speciality: ""
    });

    const [add, setAdd] = useState(false);
    const { area, speciality } = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    };

    const onsubmitForm = async e => {
        e.preventDefault();
        try {
            // store area and speciality in localStorage, then go to the register page.
            localStorage.setItem("area", area);
            localStorage.setItem("speciality", speciality);
            
            console.log(add);
            if (add) {
                window.location.href = "/register";
            }         
        
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <div>
            <img className={styles.left} src={LoveIcon} alt="book_icon"/>
            <div className={styles.ellipse9}/>
            <div className={styles.ellipse10}/>
            <div className={styles.datingApp}>DaitngApp</div>
            <div className={styles.h2}>Win local customers and grow your business</div>
            <div className={styles.h4}>View opportunities in your area for free!</div>
            
            <form onSubmit={onsubmitForm}>
                <div className="form-control{border:0}">
                    <div className={styles.area_label}>Select your area</div>
                <input type="text" name="area" className={styles.area_rect} placeholder="San Fransisco Area" value={area} onChange={e=> onChange(e)}/>
                </div>

                <div className="form-control{border:0}">
                    <div className={styles.speciality_label}>Choose&nbsp;speciality</div>
                <input type="text" name="speciality" className={styles.speciality_rect} placeholder="Health and fitness" value={speciality} onChange={e=> onChange(e)}/>
                </div>

                <button className={styles.save_rect} onClick={()=> setAdd(true)}></button>
                <div className={styles.save_txt}>get&nbsp;start</div>
                
            </form>
            <div className={styles.have_account}>Already have an account? <Link to="/login">Sign in</Link></div>
        </div>

    );
};

export default Become;