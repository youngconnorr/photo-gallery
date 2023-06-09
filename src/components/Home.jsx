import React from 'react';
import { useState } from 'react';
import Photo1 from "../assets/stel_curt.jpg"
import Photo2 from "../assets/bowness_sunset2.jpeg"
import Photo3 from "../assets/42152.jpeg"
import Photo4 from "../assets/42108.jpeg"
import Photo5 from "../assets/RandCbowness.jpg"
import Photo6 from "../assets/IMG_5810.jpg"
import Photo7 from "../assets/42144.jpeg"

const Home = () => {
    const images = [
        Photo1,
        Photo2,
        Photo3,
        Photo4,
        Photo5,
        Photo6,
        Photo7,
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
                    <h2 className='article home home-v1'>Creating inspiration</h2>
                    <h2 className='article home home-v2'> Framing fashion</h2>
                </div>
                <h2 className='article home home-v3'>&#38;</h2>
                <h2 className='article home home-v4'> Urban photography </h2>

                <button onClick={goToPrevImage} className='photo-buttons photo-scroll-button-v1'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
                </button>

                <button onClick={goToNextImage} className='photo-buttons photo-scroll-button-v2'>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
                </button>

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

export default Home;