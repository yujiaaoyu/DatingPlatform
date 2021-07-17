import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';
import Countries from "./Countries";
import Cities from "./Cities";
import Age from "./Age";
import Gender from "./Gender";
import { Link } from "react-router-dom";

const EditProfile = ({setAuth}) => {

const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    country: "",
    city: ""
})

const {first_name, last_name} = inputs;
let age, country, gender, city;

const onChange = e => {
    setInputs({...inputs, [e.target.name] : e.target.value});
};

console.log(first_name);
console.log(last_name);
console.log(age);
console.log(gender);

const getCityMsg = getCity => {
  city = getCity.value;
  console.log('get the msg from city component: ', city);
};

const getCountryMsg = getCountry => {
  country = getCountry.value;
  console.log('get the msg from country component: ', country);
};

const getAgeMsg = getAge => {
  age = getAge.value;
  console.log('get the msg from age component: ', age);
};

const getGenderMsg = getGender =>{
  gender = getGender.value;
  console.log('get the msg from gender component: ', gender);
};



const onSubmitForm = async e => {
    e.preventDefault();

    try {
        const body = {first_name, last_name, age, gender, country, city};
        console.log(body);

        const response = await fetch("http://localhost:5000/auth/editProfile", {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "Authorization": localStorage.token},
            body: JSON.stringify(body)
        });

        const parseRes = await response.json();

        // console.log(parseRes);

        // image_address = parseRes.image;
        // console.log("url is", image_address);

        if (parseRes.token) {
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
            toast.success("Updated Successfully!");
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
        <h1 className="text-center my-5">Edit Profile</h1>
        <form onSubmit={onSubmitForm}>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputFristName">First name</label>
                    <br></br><input type="text" class="from-control" name="first_name" placeholder="First Name" value={ first_name } onChange={e => onChange(e)}/>
                </div>
                <div class="form-group col-md-6">
                    <label for="inputLastName">Last name</label>
                    <br></br><input type='text' name="last_name" placeholder="Last name" value={ last_name } onChange={e => onChange(e)}/>
                </div>
            </div>
            <Age getMsg = {getAgeMsg}/> 
            <Gender getMsg = {getGenderMsg}/>
            
            <Countries getMsg = {getCountryMsg}/>
            <Cities getMsg = {getCityMsg} />
        
            <button className="btn btn-success btn-block">SAVE CHANGES</button>
            <figure class="figure">
            <img src="http://res.cloudinary.com/dyrtafysd/image/upload/v1626496963/gi3n14o5g0z22tmgqrj3.jpg" class="rounded-circle" alt="User image."
            height="200px" width="200px"/>
            <figcaption class="figure-caption text-center">defalut user image.</figcaption>
            <Link to="/upload" clasaName="btn ">Set image</Link>&nbsp; &nbsp;
        </figure>

        </form>
    
    </Fragment>
    );
};

export default EditProfile;