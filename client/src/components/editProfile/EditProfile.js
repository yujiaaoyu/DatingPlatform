import React, { Fragment, useState } from "react";
import { toast } from 'react-toastify';
import Countries from "./country/Countries";
import Cities from "./city/Cities";
import Age from "./age/Age";
import Gender from "./gender/Gender";
import { Link } from "react-router-dom";

import styles from './edit_profile.module.css';
import EmptyPage from '../page_empty/EmptyPage';
import UserInfo from "./User_info";

// EditProfile page
const EditProfile = ({setAuth}) => {

  const [inputs, setInputs] = useState({
      first_name: "",
      last_name: "",
      age: "",
      gender: "",
      country: "",
      city: ""
  })

  // Get first_name, last_name from the inputs
  const {first_name, last_name} = inputs;
  let age, country, gender, city;

  const onChange = e => {
      setInputs({...inputs, [e.target.name] : e.target.value});
  };

  console.log(first_name);
  console.log(last_name);
  console.log(age);
  console.log(gender);

  // Get the city slected by the user
  const getCityMsg = getCity => {
    city = getCity.value;
    console.log('get the msg from city component: ', city);
  };

  // Get the country slected by the user
  const getCountryMsg = getCountry => {
    country = getCountry.value;
    console.log('get the msg from country component: ', country);
  };

  // Get the age selected by the user
  const getAgeMsg = getAge => {
    age = getAge.value;
    console.log('get the msg from age component: ', age);
  };

  // Get the gender selected by the user
  const getGenderMsg = getGender => {
    gender = getGender.value;
    console.log('get the msg from gender component: ', gender);
  };


  const onSubmitForm = async e => {
      e.preventDefault();

      try {

        // encapsulate into body then pass them to the server
        const body = {first_name, last_name, age, gender, country, city};

        const response = await fetch("http://localhost:5000/auth/editProfile/add", {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "token": localStorage.token},
            body: JSON.stringify(body)
        });

        // Get response sent by the server
        const parseRes = await response.json();

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

      <EmptyPage />
      <div className={styles.account}>Account</div>
      <div className={styles.choosen_rect}/>
      <div className={styles.circle1}/>
      <Link to="/editProfile" className={styles.editProfile}>Edit profile</Link>

      <div className={styles.circle2}/>
      <Link to="/upload"className={styles.uploadImage}>Upload images</Link>
      
      <UserInfo/>


      <form onSubmit={onSubmitForm}>       
        <div>
          <div className={styles.first_name_label}>First name</div>
          <input type="text" className={styles.first_name_rct} name="first_name" placeholder="Mike" value={ first_name } onChange={e => onChange(e)}/>
        </div>

        <div>
          <div className={styles.last_name_label}>Last name</div>
          <input type="text" className={styles.last_name_rct} name="last_name" placeholder="Arnold" value={ last_name } onChange={e => onChange(e)}/>
        </div>

        <Age getMsg = { getAgeMsg }/> 
        <Gender getMsg = { getGenderMsg }/>
        <Countries getMsg = { getCountryMsg }/>
        <Cities getMsg = { getCityMsg } />
    
        <button className={styles.save_btn}>
          <div className={styles.save_txt}>SAVE</div>
        </button>  

      </form>
    </Fragment>
    
    );
};

export default EditProfile;