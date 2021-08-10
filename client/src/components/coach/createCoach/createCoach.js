import styles from './createCoach.module.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '../../../Images/search_image.png';
import { toast } from 'react-toastify'; 
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

import CoachUpload from './upload_image/upload';

// Coaches can edit their personal profiles, set gender, country, city, birh and expertise 
const CreateCoach = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        about: ""
    });

    const [gender, setGender] = useState("Female");
    const [country, setCountry] = useState("United States");
    const [city, setCity] = useState("San Fransisco");
    const [birth, setBirth] = useState("2000-01-01");
    const [expertise, setExpertise] = useState(["engineer"]);

    const { first_name, last_name, about } = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    };

    const onsubmitForm = async e => {
        e.preventDefault();
        try {

            const myHeaders = new Headers();
    
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("token", localStorage.token);

            const body = { first_name, last_name, gender, country, city, about, birth, expertise};
            console.log(body);
            
            const response = await fetch("http://localhost:5000/coach/add", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(body)
            });
    
            // Get response from the server, then toast a message
            const parseResponse = await response.json();

            if (parseResponse === "Saved!") {
                setAuth(true);
                toast.success("Saved!");
            } else {
                setAuth(false);
                toast.success("Something went wrong!");
            }          
        
        } catch (err) {
            console.error(err.message);
        }
    };

  

    return (
        
        <div>
            <div className={styles.ecllipse9}/>
            <div className={styles.ecllipse10}/>
            <div className={styles.datingApp}>Dating App</div>

            <div className={styles.top}>
                <input className={styles.search_rect} placeholder="Search by interest" style={{border:0}}/>
                <div className={styles.search}>
                    <button className={styles.search_btn}>
                        <img className={styles.serach_image} src={SearchIcon} alt="search_icon"/>
                    </button>
                </div>
                <Link to="/coach" ><div className={styles.become_coach}> Become&nbsp;a&nbsp;Coach</div></Link>
                <div className={styles.ecllipse17}/>
                <div className={styles.bell_rect}/>
            </div>

            <div className={styles.h_line}/>
            <div className={styles.p_line}/>

            <CoachUpload />
                
            <Link to="/add_link" className={styles.add_links}>Add&nbsp;social&nbsp;media&nbsp;links</Link>
            <Link to="/add_website" className={styles.add_website}>Add&nbsp;your&nbsp;website</Link>
            
            <form onSubmit={onsubmitForm}>
            <div className="form-control{border:0}">
                <label className={styles.first_name_label}>First name</label>
                <input text="text" name="first_name" value={ first_name } className={styles.first_name_rect} onChange
                        ={e => onChange(e)}/>
            </div>

            <div className="form-control{border:0}">
                <label className={styles.last_name_label}>Last name</label>
                <input text="text" name="last_name" value={last_name} className={styles.last_name_rect} onChange
                        ={e => onChange(e)}/>
            </div>

            <label className={styles.birth_label}>Date of birth</label>
            <input type="date" value={birth} min="1950-01-01" max="2050-12-31" className={styles.birth_rect} onChange={(e)=>{setBirth(e.target.value)}}/>

            <label className={styles.gender_label}>Gender</label>
            <select value={gender} className={styles.gender_rect} onChange={(e)=>{setGender(e.target.value)}}>
                <option value="Female" className={styles.gender_placeholder}>Female</option>
                <option value="Male">Male</option>
            </select>

            <label className={styles.country_label}>Country</label>
            <select value={country} className={styles.country_rect} onChange={(e)=>{setCountry(e.target.value)}}>
                <option value="United States" className={styles.country_placeholder}>United States</option>
                <option value="France" className={styles.country_placeholder}>France</option>
                <option value="China" className={styles.country_placeholder}>China</option>
            </select>

            <label className={styles.city_label}>City</label>
            <select value={city}  className={styles.city_rect} onChange={(e)=>{setCity(e.target.value)}}>
            <option value="San Fransisco" className={styles.country_placeholder}>San Fransisco</option>
                <option value="San Jose" className={styles.country_placeholder}>San Jose</option>
                <option value="Red Wood" className={styles.country_placeholder}>Red Wood</option>
            </select>

            <label className={styles.about_label}>About you</label>
            <div className="form-control{border:0}">
                <textarea text="text" rows="4" name="about" value={ about } className={styles.about_rect} 
                placeholder="I am a..." onChange={e => onChange(e)} />
            </div>

            <label className={styles.area_label}>Areas of expertise</label>
            <div className={styles.area_rect}>
                <ReactTagInput tags={expertise} onChange={(newTags) => setExpertise(newTags)}/>
            </div>
           
            <button className={styles.submit_rect}/>
            <div className={styles.submit_txt}>submit</div>

            <button className={styles.cancle_rect}/>
            <div className={styles.cancle_txt}>cancle</div>

            </form>    
        </div>

    );
};
export default CreateCoach;