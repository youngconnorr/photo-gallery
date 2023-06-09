import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <nav className='navbar'>
                <h1 className='initials noLink'> <Link to='/'>Connor Young</Link>
                </h1>

                <div className='topBar'>
                    <ul className='list'>
                        <button><Link to='/portfolio' className='link'>portfolio</Link></button>


                        <button > <Link to='/biography' className='link'>bio</Link></button>


                        <button> <Link to='/contact' className='link'>contacts</Link></button>

                        <button> <Link to='/about' className='link'>about</Link></button>
                    </ul>
                    <button className='navbar-toggle' onClick={toggleNavbar}></button>
                </div>
            </nav>
        </header>
    )
}