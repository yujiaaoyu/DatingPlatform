import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

const Coach = () => {
    const [imageIds, setImageIds] = useState();

    const loadImages = async () => {
        try {
            const res = await fetch('http://localhost:5000/coaches');
            const data = await res.json();
            console.log(data);
            setImageIds(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=> {
        loadImages();
    }, []);

    return (
        <div>
            <h1 className="tittle">Coach</h1>
            {imageIds && imageIds.map((imageId, index) => (
                <Image
                key={index}
                cloudName="dyrtafysd" // hard coded
                publicId={imageId}
                width="300"
                height="300"
                crop="scale"
                />
            ))}
        </div>
    );
};

export default Coach;