import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';

import styles from "./upload.module.css";
import AddIcon from '../../../../Images/add_image.png';

// Allows coaches to upload images.
const Coach_Upload = ({setAuth}) => {

    const [fileInputState, setFileInputState] = useState("");
    const [selectFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    // set image preview
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPreviewSource(reader.result);
        }
    };

    const handleSubmitFile = async e => {
        e.preventDefault();
        
        if (!previewSource) {
            console.log(previewSource);
        }

        try {
            // console.log(previewSource);
            const response = await fetch('http://localhost:5000/coach/upload', {
                method: "POST",
                body: JSON.stringify({data: previewSource}),
                headers: {"Content-type": "application/json", 
                "token": localStorage.token}

            });

            const parseRes = await response.json();

            // Get response from the server, toast a message
            if (parseRes === "Saved!") {
                setAuth(true);
                toast.success("Updated Successfully!");
            } else {
                setAuth(false);
                toast.error(parseRes);
                }
            
        } catch (error) {
            console.error(error);
        }
        
    };

    

    return (
        <Fragment>

        <div className={styles.imges_background}/>
        <div className={styles.image1}/>
        <div className={styles.image2}/>
        <div className={styles.image3}/>
        <div className={styles.image4}/>
        <div className={styles.image5}/>
        <div className={styles.image6}/>
        <div className={styles.image7}/>

        <div>
        <form onSubmit={handleSubmitFile} className="form">
            {
                !selectFile ? (
                    <div className={styles.image7}>
                    
                        <label htmlFor="upload-input">
                            <img src={AddIcon} alt="placeholder" style={{width: 128, height:128}}/>
                        </label>
                        <input type="file" id="upload-input" name="image" onChange={handleFileInputChange}
                                value={fileInputState} className={styles.input_sty}/>
                    </div>

                ) : (
                    <div className={styles.image7}>
                        <img alt="chosen" src={previewSource} style={{width: 128, height:128}}/>
                    </div>
                )
            }

               <button className={styles.upload_rect}/>
               <p className={styles.upload_txt}>Upload</p>
            </form>
        </div>


        

        </Fragment>
    );
};

export default Coach_Upload;