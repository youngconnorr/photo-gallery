import React from 'react'

export default function Bio() {
    return (
        <div className='bio-container'>
            <p className='bio-word-container'>
                <h2 className='bio'>
                    Growing up in a family of photographers, I was fascinated by the idea of creating an image which sparks emotion when seen.
                </h2>
                <h2 className='bio'>
                    Therefore, I always strive to look to improve my photography and my framing skills in order to create that spark, and with that, I began creating a catalogue of my progress.
                </h2>
                <h2 className='bio'>
                    Now learning HTML, CSS, and ReactJS, I am able to create a website that can capture the simplicity of my photography while keeping the complexity of the emotions in frame.

                </h2>
            </p >
            <span >
                <img src="/photos/RandCbowness.jpg" alt="" className='bio-img' />
            </span>
        </div>
    )
}