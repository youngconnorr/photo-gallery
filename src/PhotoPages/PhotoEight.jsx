import React from 'react'

export default function PhotoEight() {
    return (
        <div className='own-photo-page'>
            <div>
                <img src="/photos/sunsetwindow.jpg" alt="" className='own-photo' />
            </div>
            <span className='own-photo-text'>
                <p className='date-of-photo'>
                    3/1/2020
                </p>
                <p className='text-of-photo'>
                    Fragmented sunset
                </p>
            </span>
        </div>
    )
}