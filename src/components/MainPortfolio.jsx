import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoObjects } from "../helpers/PhotoObjects"

export default function Portfolio() {
    return (
        <div className='photos'>
            {PhotoObjects.map((photo) => (
                <Link to={`/photo/${photo.id}`}>
                    <div key={photo.id}>
                        <img src={photo.image} />
                    </div>
                </Link>
            ))}
        </div>

    )
}
