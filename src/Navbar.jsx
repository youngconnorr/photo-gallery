import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <nav className='Navbar'>
                <h1 className='initials noLink'> <Link to='/'>Connor Young</Link>
                </h1>
                <div className='topBar'>
                    <ul className='list'>
                        <button><Link to='/portfolio' className='link'>portfolio</Link></button>


                        <button > <Link to='/biography' className='link'>bio</Link></button>


                        <button> <Link to='/contact' className='link'>contacts</Link></button>

                        <button> <Link to='/about' className='link'>about</Link></button>
                    </ul>
                </div>
            </nav>
        </header>
    )
}