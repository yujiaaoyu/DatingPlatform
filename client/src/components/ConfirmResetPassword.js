import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';

const ConfirmResetPassword = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs;

    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    };

    const submit = async e => {
        e.preventDefault();

        try {
            const body = { email, password };
            const response = await fetch("http://localhost:5000/auth/confirm-reset-password",
              {
                method: "POST",
                headers: {"Content-type": "application/json",
                "token": localStorage.token },
                body: JSON.stringify(body)
              }
            );

            const parseRes = await response.json();
            // console.log(parseRes);
            // console.log("line 32", parseRes.token);
      
            if (parseRes.token) {
              localStorage.removeItem("token", parseRes.token);
              toast.success("Update password successfully! Please login with new password.");
            } else if (parseRes === 'Input email is incorrect!') {
              toast.error(parseRes);
            } else {
              toast.error(parseRes);
            }
        } catch (error) {
          console.log(error);
          }
        };

    return (
    <Fragment>
        <h1>Reset Password</h1>
        <form onSubmit={submit}>
            <label> Email </label>
            <input type="email" name="email" placeholder="Input an email" className="form-control my-3" value={ email } onChange={e => onChange(e)}/>
            <label> Password </label>
            <input type="password" name="password" placeholder="Input password" className="form-control my-3" value={ password } onChange={e => onChange(e)}/>
            <button className="btn btn-success btn-block">SAVE</button>
        </form>
    </Fragment>
    );
};

export default ConfirmResetPassword;