import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
    return (
        <>
            <div className='photos'>
                <a href="" target='_blank' className='photo-effect'>
                    <Link to='/photo-1'><img src="/photos/_IGP1581.jpg" alt="" /></Link>
                </a>
                <a href="">
                    <img src="/photos/accessories_laid_out.jpg" alt="" />
                </a>
                <a href="">
                    <img src="/photos/colorful_closet.jpg" alt="" />
                </a>
                <a href="">
                    <img src="/photos/_IGP1761.jpg" alt="" />
                </a>
                <a href="">
                    <img src="/photos/bnw_closet.jpg" alt="" />
                </a>
                <a href="">
                    <img src="/photos/bedroomSunset.jpg" alt="" />
                </a>
                <a href="">
                    <img src="/photos/moon.jpg" alt="" />
                </a>
                <a href="">
                    <img src="/photos/sunsetwindow.jpg" alt="" />
                </a>
                <a href="">
                    <img src="/photos/42032.jpeg" alt="" />
                </a>
            </div >
        </>
    )
}   