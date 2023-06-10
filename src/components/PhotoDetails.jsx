import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoObjects } from '../helpers/PhotoObjects'

export default function PhotoDetails() {
    const { id } = useParams();
    const photo = PhotoObjects.find((photo) => photo.id === parseInt(id))

    return (
        <div className='own-photo-page'>
            <div>
                <img src={photo.image} alt="" className='own-photo' />
            </div>
            <span className='own-photo-text'>
                <p className='date-of-photo'>
                    {photo.date}
                </p>
                <p className='text-of-photo'>
                    {photo.descript}
                </p>
            </span>
        </div>
    )




}