import React from 'react';
import { useState } from 'react';

const CircularPhotoArray = () => {
    const images = [
        '/photos/stel_curt.jpg',
        '/photos/accessories_laid_out.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <button onClick={goToPrevImage} className='photo-buttons bv1'>&lt;</button>
            <img src={images[currentIndex]} alt="Gallery Image" className='home-img img-fade' />
            <button onClick={goToNextImage} className='photo-buttons bv2'>&gt;</button>
        </>
    );
};

export default CircularPhotoArray;