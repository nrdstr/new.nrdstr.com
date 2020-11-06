import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Logo from '../components/Logo'
import Socials from '../components/Socials'
import Footer from '../components/Footer'
import SEO from "../components/seo"

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
        }
      }
    }
    `
  )
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "nrdstr",
    "description": site.siteMetadata.description,
    "alternateName": "nrdstr design group",
    "url": site.siteMetadata.siteUrl,
    "logo": "https://nrdstr.com/nrdstr-logo.png",
    "sameAs": [
      "https://twitter.com/nrdstr_",
      "https://facebook.com/nrdstr.design",
      "https://instagram.com/nrdstr_",
      "https://www.youtube.com/channel/UC-vQ0EMVGGOcSIw781MYOTg",
      "https://nrdstr.com"
    ]
  }
  return (
    <Layout page='home'>
      <SEO title='nrdstr modern graphic design and web design' schemaMarkup={schema} />
      <div className='home animate--fade-in'>
        <Logo color={'#fefefe'} />
        <p className='home__description'>
          we are a <strong>digital design</strong> agency that delivers graphic design, web design and development, advertising design, and many more <Link className='link' to='/services'>services</Link>.
                            </p>
        <Link className='home__cta-btn' to='/contact' title='see our available services'>
          get a quote
      </Link>
        <Socials />
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
