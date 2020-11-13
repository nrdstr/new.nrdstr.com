import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
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
            slug
            date(formatString: "MM-DD-YYYY")
            categories {
              name
            }
          }
        }
      }
    }
    `
  )
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
  return (
    <Layout page='home'>
      <SEO title='nrdstr - modern graphic design and web design' schemaMarkup={schema} />
      {/* <div className='home animate--fade-in'>
        <Logo color={'#fefefe'} />
        <p className='home__description'>
          we are a <strong>digital design</strong> agency that delivers graphic design, web design and development, advertising design, and many more <Link className='link' to='/services'>services</Link>.
                            </p>
        <Link className='home__cta-btn' to='/contact' title='see our available services'>
          get a quote
      </Link>
        <Socials />
      </div> */}

      <div className='home-wrapper'>
        <div className='about__container animate--fade-in'>
          <h2 className='about__title'>
            <Logo color={'#151515'} />
            <div className='about__texture' />
          </h2>
          <p>
            we are a <strong>digital design</strong> agency that delivers graphic design, web design and development, advertising design, and many more <Link className='link' to='/services'>services</Link>. we enjoy good challenges to help push our creative limits further every day.
                                </p>
          <p style={{ margin: '20px 0' }}>
            check out our <Link className='link' to='/portfolio'>portfolio</Link> to see some of our work. we'd be delighted to make your next project a <strong>nrdstr</strong> project!
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
              <Link className='home__services-link' to='/services/video-editing'>
                <div className='icon icon--video-editing' />
                <p>video editing</p>
              </Link>
            </li>
            <li>
              <Link className='home__services-link' to='/services/ad-design'>
                <div className='icon icon--ad-design' />
                <p>advertisement design</p>
              </Link>
            </li>
          </ul>
          <Link className='home__cta-btn home__cta-btn--services' to='/services' title='see our available services'>
            our services &#8594;
          </Link>
        </div>
        <div className='about__container home__social'>
          <InstagramIcon />
          <Instagram />
          <h3 className='home__social-cta'>
            want to see more? follow us on <a href='https://instagram.com/nrdstr_' title='nrdstr on instagram'>instagram</a>.
          </h3>
        </div>

        <div className='home__row home__row--blog'>
          <h3 style={{ marginBottom: 20, fontSize: '2rem', opacity: 0.9 }}>the latest</h3>
          <Link className='blog' to={`/blog/${wp.slug}`} style={{ zIndex: 2 }}>
            <h3>{wp.title}</h3>
            <p className='blog__date'>{wp.date}</p>
            <div className='blog__categories'>
              {wp.categories.map(cat => <p key={cat.name} className='modal__web-tag blog__tag'>{cat.name}</p>)}
            </div>
            <div dangerouslySetInnerHTML={{ __html: `${wp.excerpt.slice(0, 213)}...<span style='color: rgb(30, 195, 196); font-weight: bold;'>read more &#8594;</span></p>` }} />
            {/* <div dangerouslySetInnerHTML={{ __html: wp.excerpt }} /> */}
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
