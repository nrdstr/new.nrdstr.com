import React, { useEffect, useRef } from 'react'
import NavLinks from './NavLinks'

const MobileMenu = props => {
    const menu = useRef(null)

    const handleCloseMenu = () => {
        hideMenu()
        setTimeout(props.handleMenuToggle(), 200)
    }

    const hideMenu = () => {
        menu.current.classList.add('hide')
        setTimeout(() => {
            menu.current.classList.add('remove')
        }, 200)
    }

    useEffect(() => {
        if (props.menuToggled) {
            menu.current.classList.remove('remove', 'hide')
            menu.current.classList.add('animate--fade-in-fast')
            setTimeout(() => {
                menu.current.classList.remove('animate--fade-in-fast')
            }, 200)
        }
    }, [props.menuToggled])

    return (
        <div ref={menu} className='mobile-menu hide remove'>
            <nav className='mobile-menu__inner'>
                <div className='mobile-menu__top-bar'>
                    <button onClick={handleCloseMenu} title='close mobile menu' className='mobile-menu__close' />
                </div>
                <NavLinks />
            </nav>
        </div>
    )
}

export default MobileMenu