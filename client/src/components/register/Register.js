import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'; 
import styles from './register.module.css';
import Click from "../../Images/click.png";

// Register page
const Register = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email:'',
        password: '',
        confirm_password: '',
        first_name: '',
        last_name: ''
    })

    // Get first name, last name, email, password, confrim password from inputs
    const {first_name, last_name, email, password, confirm_password} = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value});
    };

    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(password);
    console.log(confirm_password);

    const onSubmitForm = async e => {
        e.preventDefault();

        try {

            // If the user is a coach, get the location area and speciality stored in the local storage
            var area = localStorage.getItem("area");
            var speciality = localStorage.getItem("speciality");
            const body = {first_name, last_name, email, password, confirm_password, area, speciality};

            // Send inputs to the server, then get the response
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},

                body: JSON.stringify(body)
            });

            const parseRes = await response.json();


            // Successfully stored
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
                toast.success("Registered Successfully!");
            } else {
                localStorage.clear();
                setAuth(false);
                toast.error(parseRes);
            }

        } catch (error) {
            console.error(error.message);
        }
    };

    return (
    <Fragment>
        <form onSubmit={onSubmitForm}>
            <div>
                <div className={styles.first_name_txt}>First name</div>
                <input type="text" name="first_name" className = {styles.first_name_btn} placeholder ="John" value= { first_name || "" } onChange={e => onChange(e)}/>
            </div>

            <div>
                <div className={styles.last_name_txt}>Last name</div>
                <input type="text" name="last_name" className = {styles.last_name_btn} placeholder ="Do" value= { last_name || ""} onChange={e => onChange(e)}/>
            </div>

            <div>
                <div className={styles.email_label}>Email</div>
                <input type="email" name="email" className = {styles.email_btn} placeholder ="example@email.com" value= { email || ""} onChange={e => onChange(e)}/>
            </div>

            <div>
                <div className={styles.pwd_txt}>Password</div>
                <input type="password" name="password" className={styles.pwd} placeholder="........" value={ password || ""} onChange={e => onChange(e)}/>
                <div className={styles.confirmPwd_txt}>Confirmpassword</div>
                <input type="password" name="confirm_password" placeholder="........" className={styles.confirmPwd} value={ confirm_password || ""} onChange={e => onChange(e)}/>
            </div>

            <button className={styles.sign_up_btn}></button>
            <div className={styles.sign_up_txt}>Sign up</div>

            <button className={styles.facebook_btn}></button>
            <div className={styles.facebook_txt}>Sign up with facebook</div> 
            <div className={styles.already}>Already have an account? <Link to="/login">Sign in</Link></div>

            <div className={styles.right}></div>
            <div className={styles.find}>Find your loved one with just a click</div>    
            <div className={styles.elps10}/>
            <div className={styles.elps9}/>
            <p className={styles.datingApp}>Dating app </p>
            <img className={styles.image} alt="click" src={Click}></img>
      </form>

    </Fragment>
    );
};

export default Register;