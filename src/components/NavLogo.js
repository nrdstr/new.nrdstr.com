import React from 'react'
import { Link } from "gatsby"

const NavLogo = () => {
    return (
        <div className='nav-logo__container'>
            <Link className='nav-logo' to='/' />
        </div>
    )
}

export default NavLogo