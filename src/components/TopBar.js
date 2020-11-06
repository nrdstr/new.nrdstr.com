import React from 'react'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'

const TopBar = ({ handleMenuToggle, modalToggled }) => {

    return (
        <nav className={`topbar ${modalToggled ? 'remove' : ''}`}>
            <div className='topbar__inner'>
                <NavLogo />
                <div className='desktop'>
                    <NavLinks />
                </div>
                <div className='mobile'>
                    <button className='mobile-menu-btn' title='open mobile menu' onClick={handleMenuToggle}>
                        <span className='mobile-menu-btn__bar' />
                        <span className='mobile-menu-btn__bar' />
                        <span className='mobile-menu-btn__bar' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default TopBar