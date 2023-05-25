import React from 'react';
import { useState } from 'react';

const CircularPhotoArray = () => {
    const images = [
        '/photos/stel_curt.jpg',
        '/photos/_IGP1581.jpg',
        "/photos/accessories_laid_out.jpg",
        "/photos/colorful_closet.jpg",
        "/photos/_IGP1761.jpg",
        "/photos/bnw_closet.jpg",
        "/photos/bedroomSunset.jpg",
        "/photos/bowness_sunset2.jpeg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const showImage = (index) => {
        setCurrentIndex(index)
    }
    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='array-container'>
            <button onClick={goToPrevImage} className='photo-buttons photo-scroll-button-v1'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg></button>
            {images.map((image, index) => (
                <img
                    src={image}
                    alt="Gallery Image"
                    className={`home-img img-fade ${currentIndex === index ? 'active' : ''}`}
                    key={index}
                />
            ))}
            <button onClick={goToNextImage} className='photo-buttons photo-scroll-button-v2'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg></button>
        </div>
    );
};

export default CircularPhotoArray;