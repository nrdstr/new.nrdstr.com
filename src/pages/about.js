import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../components/Logo'
import Socials from '../components/Socials'

const About = () => (
    <Layout page='about'>
        <SEO title='the nrdstr story' description="We are a group of graphic, ui, and web designers based in the united states offering services ranging from logo design to website development. Contact us today to discuss your next web, creative, or marketing project!" url='/about' />
        <div className='about__description animate--fade-in'>
            <h2 className='about__title'><Logo color={'#151515'} /></h2>
            <p>
                we are a group of graphic, ui, and web designers based in the united states offering services ranging from logo design to website development. we enjoy good challenges to help push our creative limits further every day.
                                </p>
            <p style={{ marginTop: 20 }}>
                check out our <Link className='link' to='/services'>services</Link> page for more information. we'd be delighted to make your next project a <strong>nrdstr</strong> project!
                                </p>
        </div>
        <Socials />
    </Layout>
)

export default About
