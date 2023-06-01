import React from 'react'

export default function PhotoOne() {
    return (
        <div className='own-photo-page'>
            <div>
                <img src="/photos/_IGP1581.jpg" alt="" className='own-photo' />
            </div>
            <span className='own-photo-text'>
                <p className='date-of-photo'>
                    12/26/21
                </p>
                <p className='text-of-photo'>
                    Calgary, Alberta
                </p>
            </span>
        </div>
    )
}