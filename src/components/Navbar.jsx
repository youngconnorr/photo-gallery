import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <header>
            <nav className='navbar'>
                <div>
                    <div className='hidden-links' id={openLinks ? 'open' : 'close'}>
                        <ul className='folder-list'>
                            <button><Link to='/portfolio' className='link '>portfolio</Link></button>


                            <button > <Link to='/biography' className='link '>bio</Link></button>


                            <button> <Link to='/contact' className='link'>contacts</Link></button>

                            <button> <Link to='/about' className='link'>about</Link></button>
                        </ul>
                    </div>
                    <h1 className='initials noLink' id={openLinks ? 'open' : 'closed'}> <Link to='/'>Connor Young</Link>
                    </h1>
                </div>
                <div className='topBar'>
                    <ul className='list'>
                        <button><Link to='/portfolio' className='link'>portfolio</Link></button>


                        <button > <Link to='/biography' className='link'>bio</Link></button>


                        <button> <Link to='/contact' className='link'>contacts</Link></button>

                        <button> <Link to='/about' className='link'>about</Link></button>
                    </ul>

                </div>
                <button className='drawer-button' onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </nav>
        </header >
    )
}