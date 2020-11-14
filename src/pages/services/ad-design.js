import React from "react"
import Layout from "../../components/layout"
import { Link } from 'gatsby'
import Service from '../../components/service'
import Footer from '../../components/Footer'
import SEO from "../../components/seo"

const description = `
<p>
    Cutting edge, informant design is a <strong>must</strong> in advertising. From web ads to brochures and print ads, you want these designs to capture and <strong>compel</strong> target audiences to check out your products, services, or projects.
</p>
<p>
    Successful business and product owners know, however, that clever, eye-catching advertisement design can mean all the difference to any sized company or endeavour.
</p>
<p>
    People will judge your business in a <em>heartbeat</em> based just on visual appeal. Even if your services and/or products are incredible, bad branding can and will cause you to lose the chance to convert that prospect into a sale.
</p>
<p>
    A well designed ad is memorable and visually persistent. For example, a few parts of the <strong>nrdstr</strong> site were partially inspired by a totally random Twitch ad seen on Instagram. Good ads can be powerful in more ways than one.
</p>
<h3>
    I don't have a brand.
</h3>
<p>You're in the perfect place. We offer a range of <a id='link' href='/services/graphic-design' title='graphic design services'>graphic design services</a>, as well as more niche design services such as <a id='link' href='/services/social-media-design' title='social media design services'>social media design</a>.</p>
`

const AdDesign = () => (
    <Layout page='service-ad-design'>
        <SEO title='advertisement design' description="" url='/services/ad-design' />
        <Service type='ad-design' description={description} />
        <Link to='/contact' className='home__cta-btn home__cta-btn--contact' title='get a quote'>get a quote</Link>
        <Footer />
    </Layout>
)

export default AdDesign
