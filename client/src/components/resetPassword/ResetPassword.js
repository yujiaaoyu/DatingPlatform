import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';
import styles from './reset_password.module.css';
import Click from "../../Images/click.png";

// Reset password page
const ResetPassword = ({setAuth}) => {

  // Get email form inputs
    const [inputs, setInputs] = useState({
        email: ""
    });

    const { email } = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    };

    const submit = async e => {
        e.preventDefault();

        try {
            const body = { email };
            // Send email to the server then parse the response
            const response = await fetch("http://localhost:5000/reset-password",
              {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
              }
            );

            const parseRes = await response.json();
      
            if (parseRes === "Send instructions to your email.") {
              toast.success("Please check your email.");
            }
            
        } catch (error) {
          console.log(error);
          }
        };

    return (
    <Fragment>

      <form onSubmit={submit}>
        <div className={styles.resetPassword}>Reset password</div>
        <div className={ styles.enterText}> Enter the email associated with your account and we’ll send you an email with instructions to rest your password. </div>
        <div className={ styles.email_txt}>Email</div>
        <input type="email" name="email" placeholder="example@email.com" className={ styles.email_rct} value={ email } onChange={e => onChange(e)}/>
        <button className={ styles.signup_btn_rct }></button>
        <div className={ styles.signup_btn_send }>send instructions</div>
      </form>

      <div className={styles.rct9}/>
      <div className={styles.find}>Find your loved one with just a click</div>
      <p className={styles.datingApp}>Dating app</p>
      <div className={styles.elps10}/>
      <div className={styles.elps9}/>
      <img className={styles.image} alt="pic" src={Click}></img>
  
    </Fragment>
    );
};

export default ResetPassword;