import React from 'react'

export default function PhotoSeven() {
    return (
        <div className='own-photo-page'>
            <div>
                <img src="/photos/moon.jpg" alt="" className='own-photo' />
            </div>
            <span className='own-photo-text'>
                <p className='date-of-photo'>
                    2/18/20
                </p>
                <p className='text-of-photo'>
                    Our moon
                </p>
            </span>
        </div>
    )
}