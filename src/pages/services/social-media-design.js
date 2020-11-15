import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Service from '../../components/service'
import Footer from '../../components/Footer'
import SEO from "../../components/seo"

const description = `
<p>
    So, you've decided to build a brand and now's the time to create your Instagram, your Facebook, your Twitter, LinkedIn, Pinterest, Tumblr, Reddit, ok <strong>wow</strong> there's a lot of social media outlets.
</p>
<p>
That's okay. What's important is appearances. More importantly, <em>uniform</em> appearances. You want your brand to be easily <strong>identifiable</strong> no matter the platform.
</p>
<p>
    We'll design you social media skins, profile pictures, banners, backgrounds, and/or headers for your social media accounts. Let's make your brand look <em>legit</em> everywhere you can be found.
</p>
<h3>
    I don't have a brand yet.
</h3>
<p>Would you believe it if I told you that we can help with that? Well, we can help with that. We offer a range of <a id='link' href='/services/graphic-design' title='graphic design services'>graphic design services</a>, as well as more niche design services such as <a id='link' href='/services/ad-design' title='advertisement design services'>advertisement design</a>.</p>
`

const SocialMediaDesign = () => (
    <Layout page='service-sm-design'>
        <SEO title='social media design' description="We'll design you social media skins, profile pictures, banners, backgrounds, and  headers for your social media accounts. You want your brand to be easily identifiable no matter the platform, and we're here to help. Contact us today!" url='/services/social-media-design' />
        <Service type='social-media-design' description={description} />
        <Link to='/contact' className='home__cta-btn home__cta-btn--contact' title='get a quote'>get a quote</Link>
        <Footer />
    </Layout>
)

export default SocialMediaDesign
