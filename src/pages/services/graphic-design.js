import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from '../../components/Footer'
import Service from '../../components/service'

const description = `
<p>
    First impressions are everything. A good brand design could easily be a deal maker for prospective clients, and is a big part of what draws potential customers to your network. Developing a unique, professional image is essential to a successful marketing strategy.
</p>
<h3>
    Our graphic design services.
</h3>

<ul>
    <li>
        <h4>Logos and Branding</h4>
        <p>The front page of your brand. We want to design you a unique, memorable logo that sticks in the minds of your base audience.  </p>
    </li>
    <li>
        <h4>Albums and Mixtapes</h4>
        <p>Have some new tracks coming out? Let us make you something that <strong>pops</strong>. We <em>are</em> musicians. Making kick ass art for other musicians is one of our favorite things to do!</p>
    </li>
    <li>
        <h4>Social Media</h4>
        <p>Successful social media accounts always have quality and consistent branding. That is why we have a dedicated <a id='link' href='/services/social-media-design' title='social media design'>social media design</a> service. We will design your social media presence, including profile pictures, banners, posts, stories, and more.</p>
    </li>
    <li>
        <h4>Advertising</h4>
        <p>
            A well designed advertisement can be both far-reaching and memorable. We offer <a id='link' href='/services/ad-design' title='advertisement design'>advertisement design</a> services at single one-off rates and monthly retainers as well.
        </p>
    </li>
    <li>
        <h4>Packaging and Labels</h4>
        <p>A book is first judged by its cover, and your product is first judged by its packaging. Give your product a modern, unique kick with a <strong>nrdstr</strong> design and label.</p>
    </li>
</ul>
`

const GraphicDesign = () => (
    <Layout page='service-graphic-design'>
        <SEO title='graphic design' description="" url='/services/graphic-design' />
        <Service type='graphic-design' description={description} />
        <Link to='/contact' className='home__cta-btn home__cta-btn--contact' title='get a quote'>get a quote</Link>
        <Footer />
    </Layout>
)

export default GraphicDesign
