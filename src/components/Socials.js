import React from 'react'
import { InstagramIcon, Twitter, Youtube, Facebook } from '../icons/icons'

const Socials = ({ className }) => {
    return (
        <ul className='socials animate--fade-in'>
            <li><a title='nrdstr on instagram' href='https://www.instagram.com/nrdstr_/'><InstagramIcon /></a></li>
            <li><a title='nrdstr on twitter' href='https://twitter.com/nrdstr_'><Twitter /></a></li>
            <li><a title='nrdstr on facebook' href='https://www.facebook.com/nrdstr.design'><Facebook /></a></li>
            <li><a title='nrdstr on youtube' href='https://www.youtube.com/channel/UC-vQ0EMVGGOcSIw781MYOTg'><Youtube /></a></li>
        </ul>
    )
}

export default Socials