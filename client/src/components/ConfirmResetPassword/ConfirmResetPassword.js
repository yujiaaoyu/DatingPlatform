import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';
import styles from './confirm.module.css';
import Click from "../../Images/click.png";

// A Confirm-Reset password page.
const ConfirmResetPassword = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    // get email and password from the inputs
    const { email, password } = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    };

    const submit = async e => {
        e.preventDefault();

        try {
            const body = { email, password };
            const response = await fetch("http://localhost:5000/confirm-reset-password",
              {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
              }
            );

            // Get response from server, then toast a message
            const parseRes = await response.json();
      
            if (parseRes === "Updated!") {
              toast.success("Reset password successfully! Please login with your new password.");
              localStorage.clear();
            } else {
              toast.error(parseRes);
            }
        } catch (error) {
          console.log(error);
          }
        };

    return (

    <Fragment>
      <form onSubmit={submit}>
        <div className={styles.resetPassword}>Reset password</div>
        <div className={ styles.enterText}> Enter the email associated with your account and a new password to rest your password. </div>
        
        <div className={ styles.email_txt}>Email</div>
        <input type="email" name="email" placeholder="example@email.com" className={ styles.email_rct} value={ email } onChange={e => onChange(e)}/>
        
        <div className={ styles.password_label}>Password</div>
        <input className={ styles.password_rct } type="password" name="password" placeholder="........" value={ password } onChange={e => onChange(e)}/>

        <button className={ styles.signup_btn_rct}/>
        <div className={ styles.signup_btn_send }>Reset Password</div>

      </form>
      <div className={styles.rct9}/>
      <div className={styles.find}>Find your loved one with just a click</div>
      <p className={styles.datingApp}>Dating app</p>
      <div className={styles.elps10}/>
      <div className={styles.elps9}/>
      <img className={styles.image} alt="click" src={Click}></img>
  
      
    </Fragment>
    );
};

export default ConfirmResetPassword;