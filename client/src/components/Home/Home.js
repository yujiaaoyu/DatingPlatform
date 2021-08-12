import React, { useEffect, useState } from 'react';
import styles from './home.module.scss';
import Navbar from './TopNavBar/Navbar';
import { Fragment } from 'react';

// Homw page.
const Home = ({setAuth}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHeg-sW5bWXreV60B5-dRbpU7J8ypCF62Qw&usqp=CAU"); // set defalut user image 
 

    const [prompt1, setPrompt1] = useState("");
    const [prompt2, setPrompt2] = useState("");
    const [prompt3, setPrompt3] = useState("");
   
    // GetDetails function
    const getDetails = async () => {
        
        try {

            const res = await fetch("http://localhost:5000/auth/home", {
                method: "GET",
                headers: { token: localStorage.token }
            }); 

            const parseRes = await res.json();
            // console.log(parseRes);

            // Set first_name, last_name, age, gender, city, country and prompts show in the home page.
            setName(parseRes.user_info.first_name + " " + parseRes.user_info.last_name);
            setAge(parseRes.user_info.age);
            setGender(parseRes.user_info.gender);
            setCity(parseRes.user_info.city);
            setCountry(parseRes.user_info.country);

            setPrompt1(parseRes.about.prompt1);
            setPrompt2(parseRes.about.prompt2);
            setPrompt3(parseRes.about.prompt3);

            setImage(parseRes.url);

            setAuth(true);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetails();
    }, );

    return (
        <Fragment>
        <Navbar />
        <div className={ styles.wrap }>
            
            {/* personal intro*/}
            <section className={ styles.brief }>
                <img src={image} alt="thumbnail" />
                <h2>{name}</h2>
                <ul>
                    <li>{ age }</li>
                    <li>{ gender }</li>
                </ul>
                <p>City: {city}</p>
                <p>Country: { country }</p>
            
            
            </section>  

            {/* about me */}
            <section className={ styles.work }>
                <div className={ styles.title }>
                    <h3>About me</h3>
                    <p>See more photos in gallery.</p>
                </div>
                <div>
                    <br></br><br></br>
                    <h3>Prompts1</h3><p>{prompt1}</p>
                    <br></br><br></br>
                    <h3>Prompts2</h3><p>{prompt2}</p>
                    <br></br><br></br>
                    <h3>Prompts3</h3><p>{prompt3}</p>
                    <br></br><br></br>

                </div>
            </section>

        </div>
        </Fragment>
        );
};

export default Home; 
