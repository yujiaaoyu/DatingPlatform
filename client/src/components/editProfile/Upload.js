import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Upload = ({setAuth}) => {

    const [fileInputState, setFileInputState] = useState("");
    const [setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

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
            const response = await fetch('http://localhost:5000/auth/upload', {
                method: "POST",
                body: JSON.stringify({data: previewSource}),
                headers: {"Content-type": "application/json", 
                "token": localStorage.token}

            });

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

    

    return (
        <div>
            <h1> Upload an image</h1>
            <form onSubmit={handleSubmitFile} className="form">
               <input type="file" name="image" onChange={handleFileInputChange}
               value={fileInputState} className="form-input"/>
               <button className="btn btn-success">Submit</button>
            </form>
            {previewSource && (<img src={previewSource} alt="chosen" style={{height:'300px', width:'300px'}}/>
            )}
        </div>
    );
};

export default Upload;