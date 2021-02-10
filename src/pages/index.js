import React, { useState, useEffect, useRef } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Logo from '../components/Logo'
import Socials from '../components/Socials'
import Instagram from '../components/instagram'
import { InstagramIcon } from '../icons/icons'
import Footer from '../components/Footer'
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
        }
      }
      allWordpressPost(sort: { fields: [date], order: DESC  }) {
        edges {
          node {
            title
            excerpt
            content
            slug
            date(formatString: "MM-DD-YYYY")
            categories {
              name
            }
          }
        }
      }
      allWordpressWpMedia {
        edges {
          node {
            source_url
            title
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    `
  )
  const [blogVid, setBlogVid] = useState(null)
  const content = useRef()
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "nrdstr",
    "description": data.site.siteMetadata.description,
    "alternateName": "nrdstr design group",
    "url": data.site.siteMetadata.siteUrl,
    "logo": "https://nrdstr.com/nrdstr-logo.png",
    "sameAs": [
      "https://twitter.com/nrdstr_",
      "https://facebook.com/nrdstr.design",
      "https://instagram.com/nrdstr_",
      "https://www.youtube.com/channel/UC-vQ0EMVGGOcSIw781MYOTg",
      "https://nrdstr.com"
    ]
  }
  const wp = data.allWordpressPost.edges[0].node
  const media = data.allWordpressWpMedia.edges

  useEffect(() => {
    const body = document.querySelector('body')
    const video = document.querySelector('.blog__vid')
    body.scrollTo(0, 0)
    if (wp.content) {
      const opening = wp.content.search('<iframe')
      const closing = wp.content.search('</iframe>')
      if (opening >= 0 && closing >= 0) {
        let vid = wp.content.substring(opening, closing + 9)
        if (vid) {
          setBlogVid(vid)
          if (video && video.children) video.children[0].classList.add('blog__video-iframe')
        }
      }
    }

  }, [data.allWordpressPost, content, blogVid])

  const FeaturedBlogImg = () => {
    let featured
    media.map(m => {
      if (m.node.title === wp.title) {
        featured = <Img
          fluid={m.node.localFile.childImageSharp.fluid}
          alt={m.node.title}
          style={{
            width: '100%',
            maxWidth: '100%',
            margin: '7px 0'
          }} />
      }
    })
    return featured
  }
  return (
    <Layout page='home'>
      <SEO title='Nrdstr: Modern graphic design and web design services' schemaMarkup={schema} />

      <div className='home-wrapper'>
        <div className='about__container animate--fade-in'>
          <h2 className='about__title'>
            <Logo color={'#151515'} />
            <div className='about__texture' />
          </h2>
          <p>
            we are a <strong>digital design</strong> agency that offers graphic design, website design and development, website maintenance, advertisement design, and many more <Link className='link' to='/services'>services</Link>.
                                </p>
          <p style={{ margin: '20px 0' }}>
            check out our <Link className='link' to='/portfolio'>portfolio</Link> to see some of our work. let's make your next project a <strong>nrdstr</strong> project!
        </p>
          <Socials />
          <Link className='home__cta-btn home__cta-btn--pink' to='/contact' title='get a quote today'>
            get a quote
        </Link>
          <h3 className='home__arrow-down desktop'>&#8595;</h3>
        </div>
        <div className='home__row home__row--services'>
          <ul className='home__grid'>
            <li>
              <Link className='home__services-link' to='/services/graphic-design'>
                <div className='icon icon--graphic-design' />
                <p>graphic design</p>
              </Link>
            </li>
            <li>
              <Link className='home__services-link' to='/services/website-design'>
                <div className='icon icon--website-design' />
                <p>website design</p>
              </Link>
            </li>
            <li>
              <Link className='home__services-link' to='/services/website-maintenance'>
                <div className='icon icon--website-maintenance' />
                <p>website maintenance</p>
              </Link>
            </li>
            <li>
              <Link className='home__services-link' to='/services/social-media-design'>
                <div className='icon icon--social-media-design' />
                <p>social media design</p>
              </Link>
            </li>

            <li>
              <Link className='home__services-link' to='/services/ad-design'>
                <div className='icon icon--ad-design' />
                <p>advertisement design</p>
              </Link>
            </li>

            <li>
              <button className='home__services-link' title='motion design - coming soon'>
                <div className='icon icon--motion-design' />
                <p>motion design</p>
              </button>
            </li>
          </ul>
          <Link className='home__cta-btn home__cta-btn--services' to='/services' title='see our available services'>
            our services &#8594;
          </Link>
        </div>
        <div className='about__container home__social'>
          <InstagramIcon />
          <h3 className='home__social-cta'>
            follow us on <a href='https://instagram.com/nrdstr_' title='nrdstr on instagram'>instagram</a>.
          </h3>
        </div>

        <div className='home__row home__row--blog'>
          <h3 style={{ marginBottom: 20, fontSize: '2rem', opacity: 0.8 }}>the latest</h3>
          <Link className='blog' to={`/blog/${wp.slug}`} style={{ zIndex: 2 }}>
            <h3>{wp.title}</h3>
            <p className='blog__date'>{wp.date}</p>
            <div className='blog__categories'>
              {wp.categories.map(cat => <p key={cat.name} className='modal__web-tag blog__tag'>{cat.name}</p>)}
            </div>


            {blogVid ? <div ref={content} className='blog__vid-wrapper' dangerouslySetInnerHTML={{ __html: `<div class='blog__vid'>${blogVid}</div>` }} /> : <FeaturedBlogImg />}
            <div dangerouslySetInnerHTML={{ __html: `${wp.excerpt.slice(0, 300)} <span style='color: rgb(30, 195, 196); font-weight: bold;'>read more &#8594;</span>` }} />
          </Link>
          <Link className='home__cta-btn home__cta-btn--blog' to='/blog' title='our blog'>
            our blog &#8594;
          </Link>

        </div>
        <Footer size='big' />
      </div>
    </Layout>
  )
}

export default IndexPage
