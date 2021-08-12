import React, {Fragment, useState, useEffect} from "react";
import './image.css';
import CloseIcon from '@material-ui/icons/Close';
import Navbar from "../Home/TopNavBar/Navbar";

// Photo gallery 
const DeleteImage = ({allImages, setImagesChange, setAuth }) => {

    const [images, setImages] = useState([]); //empty array
    
    async function updateImage(id) {
        try {

            const myHeader = new Headers();
            myHeader.append("Content-Type", "application/json");
            myHeader.append("token", localStorage.token);

            // Delete a chosen image when clicks the delete button
            const res = await fetch(`http://localhost:5000/auth/images/${id}`, {
                method: "DELETE",
                headers: myHeader,
            });

            // Update images afer deletion
            setImages(images.filter(eachImage => eachImage.image_id !== id));
            setAuth(true);

            const parseRes = await res.json();

            console.log(parseRes);

        } catch (error) {
            console.error(error.message);
        };

    };

    useEffect(() => {
        setImages(allImages);

    }, [allImages]);

    // Add modal when clicks the image, image will show 
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <Fragment>
            <Navbar />
            <style>{'body {background-color: #FFF0F5;'}</style>
            <h2 className="tittle">Click images!</h2><br/>
            <div className={model? "model open" : "model"}>
                <img src={tempimgSrc} alt="temp"/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>

            <div className="container">
            {images && images.map((imageId, index) => (
             <div className="gallery" key={index} onClick={() => getImg(imageId.url)}>
                <img 
                    src={imageId.url}
                    alt="user_images"
                /> 
            
                <button className="delete" onClick = { () => updateImage(imageId.image_id)}>delete</button>
               
                </div>
            ))}
            </div>
       </Fragment> );
};

export default DeleteImage;