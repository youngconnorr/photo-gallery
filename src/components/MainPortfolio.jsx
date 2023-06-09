import React from 'react'
import { Link } from 'react-router-dom'
import Photo1 from "../assets/_IGP1581.JPG"
import Photo2 from "../assets/accessories_laid_out.JPG"
export default function Portfolio() {
    return (
        <>
            <div className='photos'>
                <a href="" target='_blank' className='photo-effect'>
                    <Link to='/photo-1'><img src={Photo1} alt="" /></Link>
                </a>
                <a href="">
                    <Link to='/photo-2'>
                        <img src={Photo2} alt="" /></Link>
                </a>
                <a href="">
                    <Link to='/photo-3'>
                        <img src="/photos/colorful_closet.jpg" alt="" /></Link>
                </a>
                <a href="">
                    <Link to='/photo-4'>
                        <img src="/photos/_IGP1761.jpg" alt="" />
                    </Link>
                </a>
                <a href="">
                    <Link to='/photo-5'>
                        <img src="/photos/bnw_closet.jpg" alt="" /></Link>
                </a>
                <a href="">
                    <Link to='/photo-6'>
                        <img src="/photos/bedroomSunset.jpg" alt="" /></Link>
                </a>
                <a href="">
                    <Link to='/photo-7'>
                        <img src="/photos/moon.jpg" alt="" /></Link>
                </a>
                <a href="">
                    <Link to='/photo-8'>
                        <img src="/photos/sunsetwindow.jpg" alt="" /></Link>
                </a>
                <a href="">
                    <Link to='/photo-9'>
                        <img src="/photos/42032.jpeg" alt="" /></Link>
                </a>
            </div >
        </>
    )
}   