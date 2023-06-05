import React from 'react'

export default function PhotoThree() {
    return (
        <div className='own-photo-page'>
            <div>
                <img src="/photos/colorful_closet.jpg" alt="" className='own-photo' />
            </div>
            <span className='own-photo-text'>
                <p className='date-of-photo'>
                    1/6/21
                </p>
                <p className='text-of-photo'>
                    Warm room tones
                </p>
            </span>
        </div>
    )
}