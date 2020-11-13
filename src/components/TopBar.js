import React, { useState, useEffect } from 'react'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'

const TopBar = ({ handleMenuToggle, modalToggled }) => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = pos => {
        const offset = document.documentElement.scrollTop
        if (offset <= 200) {
            setScrolled(false)
        } else {
            setScrolled(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav style={{ backgroundColor: scrolled ? `rgba(11,11,11,.96)` : `rgba(11,11,11,0)` }} className={`topbar ${modalToggled ? 'remove' : ''}`}>
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