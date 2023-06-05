import React from 'react'

export default function PhotoNine() {
    return (
        <div className='own-photo-page'>
            <div>
                <img src="/photos/42032.jpeg" alt="" className='own-photo' />
            </div>
            <span className='own-photo-text'>
                <p className='date-of-photo'>
                    5/9/21
                </p>
                <p className='text-of-photo'>
                    Urban Rooftops
                </p>
            </span>
        </div>
    )
}