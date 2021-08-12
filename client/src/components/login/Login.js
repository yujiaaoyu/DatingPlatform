import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import styles from './login.module.css';
import Image from '../../Images/click.png';

// Login page.
const Login = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

    // Get email and password from the inputs
    const { email, password } = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { email, password };
          const response = await fetch("http://localhost:5000/auth/login",
            {
              method: "POST",
              headers: {"Content-type": "application/json"},
              body: JSON.stringify(body)
            }
          );
          
          const parseRes = await response.json();
          
          // Get response from server
    
          if (parseRes.token) {
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
            toast.success("Logged in Successfully!");
          } else {
            setAuth(false);
            toast.error(parseRes);
          }
        } catch (error) {
          console.error(error.message);
        }
      };

    return (
    <Fragment >
      <div className={styles.total}>
        <form onSubmit={onSubmitForm}>
          <div className="from-control">  
            <div className={styles.emailText}>Email</div>
            <input type="email" name="email" className = {styles.emailRct} placeholder ="example@email.com" value= { email } onChange={e => onChange(e)}/>
          </div>

          <div className="from-control">
            <div className={styles.passwordText}>Password</div>
            <input type="password" name="password" placeholder="........" className = {styles.rectangle8} value= { password } onChange={e => onChange(e)}/>
          </div>
          <Link to='/reset-password' className={styles.forgetPassword}>Forget password?</Link>
          <button className={styles.rectangle3}></button>
          <div className={styles.loginText}>log in</div>

          <button className={styles.rectangle6}>
          <div className={styles.signin}>Login with facebook</div>
        </button>
        <div className={styles.signUp}>Don't have an account yet? <Link to="/register">Sign up</Link></div>
        </form>
        
        <div className={styles.group14}/>
          <div className={styles.ellipse9}></div>
          <div className={styles.ellipse10}></div>
          <p className={styles.datingApp}>Dating app </p>

        <div className={styles.rightRct}/>
        <div className={styles.topElip}/>
        <div className={styles.topElip2}/>
        <p className={styles.topText}>Dating app </p>
        <div className={styles.find}>Find your loved one with just a click</div>
        <img className={styles.image} alt="heart" src={Image}></img>
  
        </div>
    </Fragment>
    );


};

export default Login;