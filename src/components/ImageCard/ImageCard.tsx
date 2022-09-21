import React from 'react';
import image1 from '../../assets/images/image1.png'
import './ImageCard.scss'
const ImageCard:React.FC = () => {
    return (
        <>
                <div className='image-card'>
            <img src={image1} alt="" />
            <h1>Modern Psychology</h1>
            <p>Designation</p>
            <button>Buy Course</button>
        </div> 
        <div className='image-card'>
            <img src={image1} alt="" />
            <h1>Modern Psychology</h1>
            <p>Designation</p>
            <button>Buy Course</button>
        </div>
        <div className='image-card'>
            <img src={image1} alt="" />
            <h1>Modern Psychology</h1>
            <p>Designation</p>
            <button>Buy Course</button>
        </div>
        </>

    );
};

export default ImageCard;