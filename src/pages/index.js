import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Logo from '../components/Logo'
import Socials from '../components/Socials'
import Footer from '../components/Footer'
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout page='home'>
      <SEO title='graphic design, web design and development, web maintenance, and more' />
      <div className='home animate--fade-in'>
        <Logo color={'#fefefe'} />
        <p className='home__description'>
          we are a <strong>digital design</strong> agency that delivers graphic design, web design and development, advertising design, and many more <Link className='link' to='services'>services</Link>.
                            </p>
        <Link className='home__cta-btn' to='contact' title='see our available services'>
          get a quote
      </Link>
        <Socials />
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
