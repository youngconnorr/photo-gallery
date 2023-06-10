import React from 'react'
import BioPhoto from "../assets/RandCbowness.jpg"
export default function Bio() {
    return (
        <div className='bio-container'>
            <p className='bio-word-container'>
                <h2 className='bio'>
                    Growing up in a family of photographers, I developed a deep fascination with the art of creating images that evoke powerful emotions.
                </h2>
                <h2 className='bio'>
                    Motivated by this passion, I am constantly driven to improve my photography and framing skills, always seeking to capture that elusive spark. As a result, I began documenting my progress by creating a catalog to showcase my growth.
                </h2>
                <h2 className='bio'>
                    As I dive into the world of HTML, CSS, and ReactJS, I am excited to explore new possibilities. These tools allow me to build a website that beautifully showcases the simplicity of my photography while preserving the intricate emotions within each photo.

                </h2>
            </p >
            <span >
                <img src={BioPhoto} alt="" className='bio-img' />
            </span>
        </div>
    )
}