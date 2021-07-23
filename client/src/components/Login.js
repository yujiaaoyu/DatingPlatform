import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })

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
          
          console.log(response);
          const parseRes = await response.json();
          // console.log("line 32", parseRes.token);

          // localStorage.setItem("token", parseRes.token);
          // setAuth(true);
    
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
    <Fragment>
        <h1 className="text-center my-5">Login</h1>
        <form onSubmit={onSubmitForm}>
            <label htmlFor="uemail"><b>Email</b></label>
            <input type="email" name="email" placeholder="email" className="form-control my-3" value={ email } onChange={e => onChange(e)}/>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" name="password" placeholder="password" className="form-control my-3" value= { password } onChange={e => onChange(e)}/>
            <button className="btn btn-success btn-block">LOG IN</button>
        </form>
        <span>Don't have an account yet? </span><Link to="/register">Sign up</Link>
    </Fragment>
    );


};

export default Login;