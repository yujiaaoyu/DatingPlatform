import React, { Fragment, useState } from "react";
import "element-theme-default";
import { toast } from 'react-toastify';

const CommentForm = () => {
 
    const [inputs, setInputs] = useState ({
        place: "",
        dating: "",
        trait: ""
    });

    const {place, dating, trait} = inputs;
    const [relationship, setRadio] = useState("");

    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {place, dating, relationship, trait};
            // console.log(body);

            const myHeader = new Headers();
            myHeader.append("Content-Type", "application/json");
            myHeader.append("token", localStorage.token);
    
            const response = await fetch("http://localhost:5000/auth/editProfile/prompts", {
                method: "POST",
                headers: myHeader,
                body: JSON.stringify(body)
            });
    
            const parseRes = await response.json();
    
            console.log(parseRes);
    
            if (parseRes === "Added a new prompt!") {
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
        
            <label htmlFor="place" className="row my-3" ><b>Where do you wanna meet ...</b></label>
            <input type="text" 
                    name="place" 
                    value={ place } 
                    onChange={e => onChange(e)}/>
            <br/>

            <label htmlFor="dating" className="row my-3" ><b>My ideal date is ...</b></label>
            <input type="text" name="dating" value={ dating } onChange={e => onChange(e)}/>
            <br/>

            <label className="row my-3"><b>I am looking for ...</b></label>
            {/* <h2> radio button is : {relationship} </h2> */}
            
            <input type="radio"
                    name="relationship" 
                    checked={relationship === "Serious relationship"} 
                    value="Serious relationship" 
                    onChange={(e) => setRadio(e.target.value)}/>&nbsp;
            <label>Serious relationship</label>&nbsp; &nbsp;
            
           
            <input type="radio" 
                    name="relationship" 
                    checked={relationship === "Something casual"} 
                    value="Something casual" 
                    onChange={(e) => setRadio(e.target.value)}/>&nbsp; 
            <label>Something casual</label>&nbsp; &nbsp;
            
            <input type="radio" 
                    name="relationship" 
                    checked={relationship === "I dont know"} 
                    value="I dont know" 
                    onChange={(e) => setRadio(e.target.value)}/>&nbsp; 
            <label>I don't know</label>&nbsp; &nbsp;
            <br/>

            <label className="row my-3"><b>The most import trait in your partner ...</b></label>
            
            <input type="text" name = "trait" value={ trait } onChange={e => onChange(e)}/><br/>
            
            <button type="button" class="btn btn-success" onClick={ onSubmitForm } >Save changes</button>
    </Fragment>
    );
};

export default CommentForm;