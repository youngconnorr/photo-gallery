import React from 'react';
import { useState } from 'react';
import Photo1 from "../assets/stel_curt.jpg"
import Photo2 from "../assets/bowness_sunset2.jpeg"
import Photo3 from "../assets/42152.jpeg"
import Photo4 from "../assets/42108.jpeg"
import Photo5 from "../assets/RandCbowness.jpg"
import Photo6 from "../assets/IMG_5810.jpg"
import Photo7 from "../assets/42144.jpeg"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {

    const images = [
        Photo1,
        Photo2, 
        Photo3,
        Photo4,
        Photo5,
        Photo6,
        Photo7,
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? prevIndex = 0 : prevIndex + 1);
    }

    const goToPrevImage = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }

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
                    <ArrowBackIosNewIcon />
                </button>

                <button onClick={goToNextImage} className='photo-buttons photo-scroll-button-v2'>
                    <ArrowForwardIosIcon />
                </button>

            </p>
            <div>
                {images.map((image, index) => (
                    <img
                        src={image}
                        alt="Gallery"
                        className={`home-img img-fade ${currentIndex === index ? 'active' : ''}`}
                        key={index}
                    />
                ))}

            </div>
        </main>
    );
};

export default Home;