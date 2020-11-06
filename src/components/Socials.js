import React from 'react'
import { Instagram, Twitter, Youtube, Facebook } from '../icons/icons'

const Socials = () => {
    return (
        <ul className='socials animate--fade-in'>
            <li><a title='Social Media Link' href='https://www.instagram.com/nrdstr_/'><Instagram /></a></li>
            <li><a title='Social Media Link' href='https://twitter.com/nrdstr_'><Twitter /></a></li>
            <li><a title='Social Media Link' href='https://www.facebook.com/nrdstr.design'><Facebook /></a></li>
            <li><a title='Social Media Link' href='https://www.youtube.com/channel/UC-vQ0EMVGGOcSIw781MYOTg'><Youtube /></a></li>
        </ul>
    )
}

export default Socials