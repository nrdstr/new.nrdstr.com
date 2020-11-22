import React from 'react'
import { Link } from "gatsby"

const NavLinks = () => {
    return (
        <ul className='nav-links'>
            <li>
                <Link to='/portfolio' className='nav-link color-2' title='Portfolio' activeClassName='nav-link--active'><span>portfolio</span></Link>
            </li>
            <li>
                <Link to='/services' className='nav-link color-1' title='Services' activeClassName='nav-link--active'><span>services</span></Link>
            </li>
            <li>
                <Link to='/blog' className='nav-link color-3' title='Blog' activeClassName='nav-link--active'><span>blog</span></Link>
            </li>
            <li>
                <Link to='/contact' className='nav-link color-4' title='Contact' activeClassName='nav-link--active'><span>contact</span></Link>
            </li>
        </ul>
    )
}

export default NavLinks