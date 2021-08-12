import React, { Fragment, useState } from "react";
import "element-theme-default";
import { toast } from 'react-toastify';

import styles from "./prompt.module.css";

// Add Prompts page 
const Prompt = () => {
 
    const [inputs, setInputs] = useState ({
        prompt1: "",
        prompt2: "",
        prompt3: ""
    });

    // Get prompts from user inputs
    const {prompt1, prompt2, prompt3} = inputs;

    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {prompt1, prompt2, prompt3};
            
            const myHeader = new Headers();
            myHeader.append("Content-Type", "application/json");
            myHeader.append("token", localStorage.token);
    
            // Send prompts to the server
            const response = await fetch("http://localhost:5000/auth/editProfile/prompts", {
                method: "POST",
                headers: myHeader,
                body: JSON.stringify(body)
            });
    
            const parseRes = await response.json();
    
            console.log(parseRes);
    
            // parse the response
            if (parseRes === "Added new prompts!") {
                toast.success(parseRes);
              } else {
                toast.error(parseRes);
              }
        } catch (error) {
            console.error(error.message);
        }
      };
    
    const onChange = e => {
        setInputs({...inputs, [e.target.name] : e.target.value });
    };
    
    
    return(
        <Fragment>

        <label className={styles.prompt1_label}>Prompt 1</label>
        <input type="text" className={styles.prompt1_rect} name = "prompt1" placeholder={ "Say something funny" } value={ prompt1 } onChange={e => onChange(e)}/>
        
        <label className={styles.prompt2_label}>Prompt 2</label>
        <input type="text" className={styles.prompt2_rect} name = "prompt2" placeholder={ "Say something funny" } value={ prompt2 } onChange={e => onChange(e)}/>
            

        <div className={styles.prompt3_total}/>
            <label className={styles.prompt3_label}>Prompt 3</label>
            <input type="text" className={styles.prompt3_rect} name = "prompt3" placeholder={ "Say something funny" } value={ prompt3 } onChange={e => onChange(e)}/>
        
            <button type="button" className={styles.add_btn} onClick={ onSubmitForm } >Add a new prompt</button>
    </Fragment>
    );
};

export default Prompt;