import React from 'react'
import './ImageListStyle.css';
import Imagecard from './ImageCard';

const  ImagesList = (props) => {
    console.log(props.images);
    const images = props.images.map((image) => {
            return <Imagecard
                            key={image.id}
                            image={image}
            />
    });
    return (
        <div className="image-list">
            {images}
        </div>
    )
};

export default ImagesList;