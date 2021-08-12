import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

import styles from "./upload.module.css";
import Prompt from './Prompts';
import EmptyPage from '../page_empty/EmptyPage';
import AddIcon from '../../Images/add_image.png';

// Upload images page of editProfile

const Upload = ({setAuth}) => {

    const [fileInputState, setFileInputState] = useState("");
    const [selectFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    // Use file reader to store the information of each image
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
            // send image info to the server
            const response = await fetch('http://localhost:5000/auth/upload', {
                method: "POST",
                body: JSON.stringify({data: previewSource}),
                headers: {"Content-type": "application/json", 
                "token": localStorage.token}

            });

            // Get response then parse it
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
            console.error(error);
        }
        
    };

    const handleCancle = async e => {
        e.preventDefault();
        setFileInputState("");
        setSelectedFile("");
        setPreviewSource("");
        previewFile();
    }

    

    return (
        <Fragment>

            <EmptyPage />
        <form onSubmit={handleCancle} className="form">
            <button className={styles.cancle_rect}/>
            <p className={styles.cancle_txt}>Cancel</p>
        </form>

        <div className={styles.chosenBlock}/>
        <div className={styles.setting_cir}/>
        <Link to="upload" className={styles.setting_txt}>Setttings</Link>
        
        <Prompt />
        
       
        <div className={styles.rect72}/>
        <div className={styles.rect73}/>
        <div className={styles.rect75}/>

        <div>
        <form onSubmit={handleSubmitFile} className="form">
            {
                !selectFile ? (
                    <div className={styles.rect76}>
                    
                        <label htmlFor="upload-input">
                            <img src={AddIcon} alt="placeholder" style={{width: 162, height:152}}/>
                        </label>
                        <input type="file" id="upload-input" name="image" onChange={handleFileInputChange}
                                value={fileInputState} className={styles.input_sty}/>
                    </div>  

                ) : (
                    <div className={styles.rect76}>
                    
                    <img alt="chosen" src={previewSource} style={{width: 162, height:152}}/>
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

export default Upload;