import React from 'react';
import { useState } from 'react';

const CircularPhotoArray = () => {
    const images = [
        '/photos/stel_curt.jpg',
        "/photos/bowness_sunset2.jpeg",
        "/photos/42152.jpeg",
        "/photos/42108.jpeg",
        "/photos/RandCbowness.jpg",
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
        <main className='home-container'>
            <p className='home-content'>
                <div className='first-part-of-home-content'>
                    <h2 className='article home home-v1'>Creating inspiration  </h2>
                    <h2 className='article home home-v2'> Framing fashion   </h2>
                </div>
                <h2 className='article home home-v3'>&#38;</h2>
                <h2 className='article home home-v4'> Urban photography </h2>
                <button onClick={goToPrevImage} className='photo-buttons photo-scroll-button-v1'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg></button>
                <button onClick={goToNextImage} className='photo-buttons photo-scroll-button-v2'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg></button>
            </p>
            <div>
                {images.map((image, index) => (
                    <img
                        src={image}
                        alt="Gallery Image"
                        className={`home-img img-fade ${currentIndex === index ? 'active' : ''}`}
                        key={index}
                    />
                ))}

            </div>
        </main>
    );
};

export default CircularPhotoArray;