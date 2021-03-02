import React from 'react'
import Logo from './Logo'
import { Link } from 'gatsby'

const Footer = ({ size }) => {

    if (size === 'big') {
        return <footer className='footer footer--big animate--fade-in'>
            <h3>get a quote</h3>
            <p className='footer__tagline'>let's make your next project a <strong>nrdstr</strong> project.</p>
            <div className='footer__divider'>
                <div className='shape__container services__shape'>
                    <div className='shape zig-zag divider' />
                    <div className='shape zig-zag divider' style={{ marginLeft: 3 }} />
                </div>
            </div>
            <div className='row'>
                <div className='footer__col'>
                    <div>
                        <div style={{ maxWidth: 200, width: '100%' }}>
                            <Logo color='#fefefe' />
                        </div>
                        <a href='mailto:hello@nrdstr.com' className='link'>hello@nrdstr.com</a>
                    </div>
                </div>
                <div className='footer__col'>
                    <Link className='home__cta-btn home__cta-btn--contact' to='/contact' title='contact us'>
                        contact us
                </Link>
                </div>
            </div>
            <p>&copy;{new Date().getFullYear()} <strong>nrdstr</strong>.com | <Link className='link' to='/privacy-policy' title='Privacy Policy'>privacy policy</Link></p>
        </footer>
    } else {
        return (
            <footer className='footer animate--fade-in'>
                <p>&copy;{new Date().getFullYear()} <strong>nrdstr</strong>.com | <Link className='link' to='/privacy-policy' title='Privacy Policy'>privacy policy</Link></p>
            </footer>
        )
    }
}

export default Footer