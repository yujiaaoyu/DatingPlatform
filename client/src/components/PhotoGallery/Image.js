import React, { useEffect, useState } from 'react';

import DeleteImage from './Gallery';


// Get all the images of a specific user
const Images = () => {

    const [images, setImages] = useState([]);
    const [imagesChange, setImagesChange] = useState(false);

    const loadImages = async ()=> {
       
        try {
            const res = await fetch('http://localhost:5000/auth/images', {
                method: "GET",
                headers: {"Content-Type": "application/json",
                "token": localStorage.token},
            });
    
            const images = await res.json();
            // Set images
            setImages(images);
            console.log("images are", images);
   
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=> {
        loadImages();
        setImagesChange(false);
    }, [imagesChange]);

    return (
 
       <div>
           <DeleteImage allImages={ images } setImagesChange={setImagesChange}/>
       </div>
       
    );
    
};

export default Images;



