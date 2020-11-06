import React from 'react'
import { Link } from "gatsby"

const NavLinks = () => {
    return (
        <ul className='nav-links'>
            <li>
                <Link to='/portfolio' className='btn nav-link color-2' activeClassName='nav-link--active'><span>portfolio</span></Link>
            </li>
            <li>
                <Link to='/services' className='btn nav-link color-1' activeClassName='nav-link--active'><span>services</span></Link>
            </li>
            <li>
                <Link to='/about' className='btn nav-link color-3' activeClassName='nav-link--active'><span>about</span></Link>
            </li>
            <li>
                <Link to='/contact' className='btn nav-link color-4' activeClassName='nav-link--active'><span>contact</span></Link>
            </li>
        </ul>
    )
}

export default NavLinks