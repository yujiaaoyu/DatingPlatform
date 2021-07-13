import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'; 

const Register = ({setAuth}) => {

const [inputs, setInputs] = useState({
    email:"",
    password:"",
    name:""
})

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
    
        const body = {first_name, last_name, email, password, confirm_password};

        const response = await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},

            body: JSON.stringify(body)
        });

        const parseRes = await response.json();

        // localStorage.setItem("token", parseRes.token);
        // setAuth(true);

        if (parseRes.token) {
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
            toast.success("Registered Successfully!");
          } else {
            setAuth(false);
            toast.error(parseRes);
          }

        console.log(parseRes);

    } catch (error) {
        console.error(error.message);
    }
};

    return (
    <Fragment>
        <h1 className="text-center my-5">Register</h1>
        <form onSubmit={onSubmitForm}>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFristName">First name</label>
                    <br></br><input type="text" class="from-control" name="first_name" placeholder="First name" value={ first_name } onChange={e => onChange(e)}/>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLastName">Last name</label>
                    <br></br><input type='text' name="last_name" placeholder="Last name" value={ last_name } onChange={e => onChange(e)}/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail">Email</label>
                <input type="email" name="email" placeholder="email" className="form-control my-3" value={ email } onChange={e => onChange(e)}/>
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input type="password" name="password" placeholder="password" className="form-control my-3" value={ password } onChange={e => onChange(e)}/>
            </div>

            <div class="form-group">
                <label for="inputConfrimedPassword">Password</label>
                <input type="password" name="confirm_password" placeholder="confirm_password" className="form-control my-3" value={ confirm_password } onChange={e => onChange(e)}/>
            </div>

           <button className="btn btn-success btn-block">SIGN UP</button>
        </form>
        <span>Already have an account? </span><Link to="/login">Login</Link>
    </Fragment>
    );
};

export default Register;