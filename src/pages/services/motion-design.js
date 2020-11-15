import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Footer from '../../components/Footer'
import Service from '../../components/service'

const description = `
<p>
    Coming soon! In the meantime, check out our other <a id='link' href='/services' title='Our Services'>services</a>.
</p>
`

const MotionDesign = () => (
    <Layout page='service-motion-design'>
        <SEO title='motion graphics design' description="" url='/services/motion-design' />
        <Service type='motion-design' description={description} />
        {/* <Link to='/contact' className='home__cta-btn home__cta-btn--contact' title='get a quote'>get a quote</Link> */}
        <Footer />
    </Layout>
)

export default MotionDesign
