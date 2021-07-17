import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';

const ResetPassword = ({setAuth}) => {

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
            const response = await fetch("http://localhost:5000/auth/reset-password",
              {
                method: "POST",
                headers: {"Content-type": "application/json",
                "Authorization": localStorage.token },
                body: JSON.stringify(body)
              }
            );

            const parseRes = await response.json();
            // console.log(parseRes);
            // console.log("line 32", parseRes.token);
      
            if (parseRes.token) {
              localStorage.setItem("token", parseRes.token);
              setAuth(true);
              toast.success("Send an email successfully!");
            } else if (parseRes === 'Input email is incorrect!') {
              toast.error(parseRes);
            } else {
              setAuth(false);
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
            <button className="btn btn-success btn-block">SEND INSTRUSTRUCTIONS</button>
        </form>
    </Fragment>
    );
};

export default ResetPassword;